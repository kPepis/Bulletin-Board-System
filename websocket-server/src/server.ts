import http from "http";
import socketIo from "socket.io";

interface boardConnectEvent {
  boardId: string;
  socketId: string;
  userName: string;
}

const server = http.createServer();

const onlineUsers: {
  [index: string]: Set<string>;
} = {};

const io = socketIo(server, {
  path: "",
  transports: ["websocket", "polling"],
});

// io.on("connection", socket => {
//   console.log(`Welcome, ${socket.id}`);
//   console.log(socket.handshake);

//   socket.on("test", () => {
//     console.log("Messages from the UI work");
//   });

//   io.on("disconnect", () => {
//     console.log("Disconnected");
//   });
// });

io.on("connect", (socket: SocketIO.Socket) => {
  console.log("Socket.io is now listening");
  socket.on(
    "board disconnect",
    (data: { userName: string; boardId: string }) => {
      const { boardId, userName } = data;
      console.log(`A user has left board ${boardId}`);
      try {
        onlineUsers[boardId].delete(userName);
      } catch (e) {}

      socket.to(boardId).broadcast.emit("user disconnect", {
        userName,
        onlineUsers: Array.from(onlineUsers[boardId]),
      });

      console.log(onlineUsers[boardId]);
    },
  );

  socket.on("disconnect", () => {
    console.log("User has disconnected");
  });

  socket.on("new board connection", (data: { boardId: string }) => {
    const { boardId } = data;

    if (!onlineUsers[boardId]) {
      onlineUsers[boardId] = new Set();
    }

    socket.emit("fetch users", Array.from(onlineUsers[boardId]));
  });

  socket.on("board connect", (data: boardConnectEvent) => {
    const { boardId, userName } = data;
    socket.join(boardId);

    // create a new set for a board if it doesn't exist
    if (!onlineUsers[boardId]) {
      onlineUsers[boardId] = new Set();
    }
    // add online user to boardId set structure
    onlineUsers[boardId].add(userName);

    socket.to(boardId).broadcast.emit("user connect", {
      userName,
      onlineUsers: Array.from(onlineUsers[boardId]),
    });

    console.log(`Socket ${data.socketId} has entered board ${boardId}.`);
  });
});

server.listen(3001);
