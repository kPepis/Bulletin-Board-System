import cookieParser from "cookie-parser";

import createServer from "./createServer";

const server = createServer();

// todo Use Express middleware for authentication (JWT)
server.express.use

// todo Use Express middleware to populate current user
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
      // origin: true
    },
    port: 4000,
  },
  options => {
    console.log(`Server running on ${process.env.FRONTEND_URL}`);
  },
);
