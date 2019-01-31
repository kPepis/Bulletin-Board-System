const express = require("express");
const next = require("next");

import { IncomingMessage, ServerResponse } from "http";

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connection", (_socket: SocketIOClient.Socket) => {
  _socket.on("userConnection", () => console.log("A new user has connected"));
  _socket.on("disconnect", () => {
    console.log("User has disconnected, index.ts");
  });
  _socket.on("customEvent", (lol: any) => {
    console.log(lol);
    console.log("The custom event fires");
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
