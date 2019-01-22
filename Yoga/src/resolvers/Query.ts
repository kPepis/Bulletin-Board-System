import { GraphQLResolveInfo } from "graphql";
import { forwardTo } from "prisma-binding";

import { Context } from "./types/Context";

interface QueryInterface {
  parent: any;
  args: any;
  ctx: Context;
  info: GraphQLResolveInfo;
}

const Query = {
  users: forwardTo("db"),
  // boards: forwardTo("db"),
  async boards(parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) {
    const boards = await ctx.db.boards();
    // console.log(boards);
    // const posts = await ctx.db.posts();
    // console.log(posts);
    return [...boards];
  },
  posts: forwardTo("db"),
  // boardsConnection: forwardTo("db"),

  async board(parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) {
    const boardInfo = await ctx.db.board({
      ...args.where,
    });

    const boardWithPosts = {
      ...boardInfo,
      posts: await ctx.db.posts({
        where: {
          ...args.where,
        },
      }),
    };

    return boardWithPosts;
  },

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
