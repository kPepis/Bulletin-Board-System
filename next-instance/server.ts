const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "socket.io";
import { NextFunction } from "express-serve-static-core";

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// const onlineUsers: { boardId: string; users: string[] }[] = [];
// const onlineUsers: Set<{ boardId: string; users: string[] }> = new Set();

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
    const { userId, userName } = jwt.verify(token, process.env.APP_SECRET!) as {
      userId: string;
      userName: string;
    };

    // put userId onto the request for future requests to access
    req.userId = userId;
    req.userName = userName;
  }
  next();
});

io.on("connection", (_socket: Socket) => {
  _socket.on("disconnect", () => {
    console.log("User has disconnected");
  });

  _socket.on("board connect", (data: boardConnectEvent) => {
    const { boardId, userName } = data;
    _socket.join(boardId);
    _socket.to(boardId).broadcast.emit("user connect", { userName });
    console.log(`Socket ${data.socketId} has entered board ${boardId}.`);
  });

  _socket.on("board disconnect", (boardId: string) => {
    console.log(`A user has left board ${boardId}`);
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
