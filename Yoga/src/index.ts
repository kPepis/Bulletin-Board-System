import cookieParser from "cookie-parser";
import { execute, subscribe, GraphQLSchema, buildSchema } from "graphql";
import jwt from "jsonwebtoken";
import { SubscriptionServer } from "subscriptions-transport-ws";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import createServer from "./createServer";
import { readFileSync } from "fs";
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

SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
    onOperationComplete: () => "An operation just completed.",
  },
  {
    server: server.express,
    path: "/",
  },
);
