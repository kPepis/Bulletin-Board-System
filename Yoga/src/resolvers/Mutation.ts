import bcrypt from "bcryptjs";
import { GraphQLResolveInfo } from "graphql";
import jwt from "jsonwebtoken";

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

  async signUp(
    parent,
    args: { userName: string; password: string },
    ctx,
    info,
  ) {
    // lowercase username
    const userName = args.userName.toLowerCase();

    // hash password
    const password = await bcrypt.hash(args.password, 10);

    // create user in db
    const user = await ctx.db.createUser({
      userName,
      password,
      permissions: { set: ["USER"] },
    });

    // create JWT
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);

    // set cookie with JWT on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 10, // 10 hour cookie
    });

    return user;
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
