import { forwardTo } from "prisma-binding";

import { GraphQL } from "../../types/graphql-interfaces";

const Query: Record<string, GraphQL.Query> = {
  users: forwardTo("db"),
  // boards: forwardTo("db"),
  async boards(parent, args, ctx, info) {
    return await ctx.db.boards();
  },

  async board(parent, args, ctx, info) {
    return await ctx.db.board({
      ...args.where,
    });
  },

  posts: forwardTo("db"),

  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }

    return ctx.db.user({ id: ctx.request.userId });
  },

  async boardsConnection(parent, args, ctx, info) {
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
