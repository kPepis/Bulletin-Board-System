import { GraphQLResolveInfo } from "graphql";
import { forwardTo } from "prisma-binding";

import { Context } from "./types/Context";

interface GraphQlQueryMethod {
  (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo): Promise<
    any
  >;
}

const Mutation: Record<string, GraphQlQueryMethod> = {
  async createUser(parent, args, ctx, info) {
    return await ctx.db.createUser({
      ...args,
    });
  },

  async createBoard(parent, args, ctx, info) {
    // todo check if user is logged in
    return await ctx.db.createBoard({
      ...args,
    });
  },

  async createPost(parent, args, ctx, info) {
    const { title, content, boardId, image } = args;
    return await ctx.db.createPost({
      title,
      content,
      board: {
        connect: { id: boardId },
      },
      image,
    });
  },
};

export default Mutation;
