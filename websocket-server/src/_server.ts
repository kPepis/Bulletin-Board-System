import * as http from "http";
import * as WebSocket from "ws";
import { AddressInfo } from "net";

const express = require("express");
const app = express();

// initialize simple http server
const server = http.createServer(app);

// initialize WebSocket server instance
const ws = new WebSocket.Server({ server });

ws.on("connection", (socket: WebSocket, req: http.IncomingMessage) => {
  // connection is up, add a simple event
  socket.on("message", (message: string) => {
    console.log(`Received: ${message}`);
    socket.send("'sup, greetings from the ws server");
  });

  socket.on("close", () => {
    console.log("Client disconnection");
  });

  socket.on("error", e => {
    console.log(`Client error: ${e.message}`);
  });

  socket.send("Welcome to the ws server");
});

// start the server
server.listen(3001, () => {
  console.log(
    `WS server started on port ${(server.address() as AddressInfo).port}`,
  );
});
