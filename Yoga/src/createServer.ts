import { GraphQLServer } from "graphql-yoga";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import db from "./db";

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
    // the req argument is an object of the shape { request, response, connection } which either carries a request: Request property (when it's a Query/Mutation resolver), response: Response property (when it's a Query/Mutation resolver), or a connection: SubscriptionOptions property (when it's a Subscription resolver). Request is imported from Express.js. Response is imported from Express.js aswell. SubscriptionOptions is from the graphql-subscriptions package. SubscriptionOptions are getting the connectionParams automatically injected under SubscriptionOptions.context.[CONNECTION_PARAMETER_NAME]
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
