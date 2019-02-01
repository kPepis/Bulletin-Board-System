const express = require("express");
const next = require("next");

import { IncomingMessage, ServerResponse } from "http";
import { Socket } from "socket.io";

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connection", (_socket: Socket) => {
  console.log("A user has connected");

  _socket.on("disconnect", () => {
    console.log("User has disconnected");
  });

  _socket.on("board connect", (boardId: string) => {
    console.log(`A new user has entered board ${boardId}`);
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
