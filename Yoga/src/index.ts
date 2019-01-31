import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

import createServer from "./createServer";

const server = createServer();

server.express.use(cookieParser());

// decode JWT so we can get user ID on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET!) as {
      userId: string;
    };

    // put userId onto the request for future requests to access
    req.userId = userId;
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
    port: 4000,
  },
  options => {
    console.log(`Server running on ${process.env.FRONTEND_URL}`);
  },
);
