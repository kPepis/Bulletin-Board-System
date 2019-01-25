import { GraphQLServer } from "graphql-yoga";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import db from "./db";
// import { prisma as db } from "./generated/prisma-client";

// Create the GraphQL Yoga server with the schema of the things we want to expose
export default function createServer(): GraphQLServer {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query,
      Board: {
        posts: parent => db.board({ id: parent.id }).posts(),
      },
      Post: {
        board: parent => db.post({ id: parent.id }).board(),
      },
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({
      ...req,
      db: {
        query: { ...db },
        mutation: { ...db },
        ...db,
      },
    }),
  });
}
