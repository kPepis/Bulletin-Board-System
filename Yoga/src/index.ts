import cookieParser from "cookie-parser";
import { readFileSync } from "fs";
import { buildSchema, execute, subscribe } from "graphql";
import jwt from "jsonwebtoken";
import { SubscriptionServer } from "subscriptions-transport-ws";

import createServer from "./createServer";

// import * as schema from "./generated/prisma-client/prisma-schema";

const server = createServer();

const schemaFile = readFileSync("./src/generated/prisma.graphql", "utf-8");

const schema = buildSchema(schemaFile);

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

server.express.use((req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost");
  const origin = req.get("origin");
  res.header("Access-Control-Allow-Origin", origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, Accept, Origin",
  );
  res.header("Access-Control-Allow-Credentials", "true");

  if ("OPTIONS" === req.method) {
    res.send(200);
  } else {
    next();
  }

  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept",
  // );
  // next();
});

server.express.enable("trust proxy");

server.start(
  {
    endpoint: "/",
    // cors: {
    //   credentials: true,
    //   origin: ["*"],
    //   //   // origin: false,
    // },
    port: 4000,
  },
  () => {
    console.log(`Server running on ${process.env.YOGA_ENDPOINT}`);
  },
);
