const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

import { NextFunction } from "express-serve-static-core";
import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "socket.io";

const app = express();

const server = require("http").Server(app);
// const io = require("socket.io")(server, { path: "/ws/socket.io" });
const io = require("socket.io")(server);

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const onlineUsers: {
  [index: string]: Set<string>;
} = {};

interface boardConnectEvent {
  boardId: string;
  socketId: string;
  userName: string;
}

declare global {
  interface Request {
    cookies: {
      token?: string;
    };
    userId: string;
    userName: string;
  }
}

app.use(cookieParser());

app.use((req: Request, _res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (token) {
    // const { userId, userName } = jwt.verify(token, process.env.APP_SECRET!) as {

    console.log("Token is present");
    console.log(jwt.decode(token));
    console.log("header", req.headers.cookie);

    const { userId, userName } = jwt.decode(token) as {
      userId: string;
      userName: string;
    };

    // put userId onto the request for future requests to access
    // req.userId = userId;
    req.userId = userId;
    req.userName = userName;
  }
  next();
});

io.on("connect", (_socket: Socket) => {
  _socket.on(
    "board disconnect",
    (data: { userName: string; boardId: string }) => {
      const { boardId, userName } = data;
      console.log(`A user has left board ${boardId}`);
      onlineUsers[boardId].delete(userName);

      _socket.to(boardId).broadcast.emit("user disconnect", {
        userName,
        onlineUsers: Array.from(onlineUsers[boardId]),
      });

      console.log(onlineUsers[boardId]);
    },
  );

  _socket.on("disconnect", () => {
    console.log("User has disconnected");
  });

  _socket.on("new board connection", (data: { boardId: string }) => {
    const { boardId } = data;

    if (!onlineUsers[boardId]) {
      onlineUsers[boardId] = new Set();
    }

    _socket.emit("fetch users", Array.from(onlineUsers[boardId]));
  });

  _socket.on("board connect", (data: boardConnectEvent) => {
    const { boardId, userName } = data;
    _socket.join(boardId);

    // create a new set for a board if it doesn't exist
    if (!onlineUsers[boardId]) {
      onlineUsers[boardId] = new Set();
    }
    // add online user to boardId set structure
    onlineUsers[boardId].add(userName);

    _socket.to(boardId).broadcast.emit("user connect", {
      userName,
      onlineUsers: Array.from(onlineUsers[boardId]),
    });

    console.log(`Socket ${data.socketId} has entered board ${boardId}.`);
  });
});

nextApp.prepare().then(() => {
  app.get("*", (req: IncomingMessage, res: ServerResponse) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    console.log(`Listening on port ${port}`);
  });
});
