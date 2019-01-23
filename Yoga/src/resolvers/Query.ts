import { GraphQLResolveInfo } from "graphql";
import { forwardTo } from "prisma-binding";

import { Context } from "./types/Context";

interface QueryInterface {
  (
    parent: any,
    args: any,
    ctx: Context,
    info: GraphQLResolveInfo,
  ): IterableIterator<any>;
}

const Query = {
  users: forwardTo("db"),
  // boards: forwardTo("db"),
  async boards(parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) {
    return await ctx.db.boards();
  },

  async board(parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) {
    return ctx.db.board({
      ...args.where,
    });
  },
  // board: forwardTo("db"),

  posts: forwardTo("db"),
  // boardsConnection: forwardTo("db"),

  // async board(parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) {
  //   return ctx.db.board({
  //     ...args.where,
  //   });
  // },

  async boardsConnection(
    parent: any,
    args: any,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) {
    const connection = await ctx.db.boardsConnection({
      ...args,
    });

    const aggregate = await ctx.db.boards({
      ...args,
    });

    const connectionWithAggregate = {
      ...connection,
      aggregate: { count: aggregate.length },
    };

    return connectionWithAggregate;
  },
};

export default Query;
