import { GraphQLResolveInfo } from "graphql";

import { Context } from "../src/resolvers/types/Context";

declare namespace GraphQL {
  export interface Query {
    (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo): any;
  }

  export interface Mutation {
    (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo): any;
  }
}
