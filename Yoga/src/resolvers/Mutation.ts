import { GraphQLResolveInfo } from "graphql";
import { forwardTo } from "prisma-binding";

import { Context } from "./types/Context";

const Mutation = {
  async createUser(
    parent: any,
    args: any,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) {
    return await ctx.db.createUser({
      ...args,
    });
  },

  async createBoard(
    parent: any,
    args: any,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) {
    // todo check if user is logged in
    return await ctx.db.createBoard({
      ...args,
    });
  },

  async createPost(
    parent: any,
    args: any,
    ctx: Context,
    info: GraphQLResolveInfo,
  ) {
    console.log(args);
    return await ctx.db.createPost({
      board: {
        connect: {
          name: args.boardName,
        },
      },
      // board: { connect: { id: args.boardId } },
      ...args,
    });
  },
};

export default Mutation;
