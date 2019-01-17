import { GraphQLServer } from "graphql-yoga"
import Mutation from "./resolvers/Mutation"
import Query from "./resolvers/Query"
import db from "./db"
// import { prisma as db } from "./generated/prisma-client";

// Create the GraphQL Yoga server with the schema of the things we want to expose
export default function createServer(): GraphQLServer {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation,
      Query,
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
  })
}
