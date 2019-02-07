import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { forwardTo } from "prisma-binding";

import { GraphQL } from "../../types/graphql-interfaces";

const Mutation: Record<string, GraphQL.Mutation> = {
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
    const token = jwt.sign(
      { userId: user.id, userName: user.userName },
      process.env.APP_SECRET!,
    );

    // set cookie with JWT on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 10, // 10 hour cookie
    });

    return user;
  },

  async signIn(
    parent,
    args: { userName: string; password: string },
    ctx,
    info,
  ) {
    const { userName, password } = args;

    // check if userName exists
    const userExists = await ctx.db.$exists.user({ userName });

    // throw error if user doesn't exist
    if (!userExists) throw new Error(`User ${userName} doesn't exist`);

    // get user info
    const user = await ctx.db.user({ userName });

    // Check if password is correct
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) throw new Error("Invalid password");

    // generate token
    const token = jwt.sign(
      { userId: user.id, userName: user.userName },
      process.env.APP_SECRET!,
    );

    // set cookie with token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 10, // 10 hour cookie
    });

    // return user
    return user;
  },

  async createBoard(parent, args, ctx, info) {
    const isUserLoggedIn = !!ctx.request.userId;

    if (!isUserLoggedIn) {
      throw new Error("User not logged in");
    }

    return await ctx.db.createBoard({
      name: args.name,
      description: args.description,
      createdBy: { connect: { userName: args.userName } },
    });
  },

  async createPost(parent, args, ctx, info) {
    const isUserLoggedIn = !!ctx.request.userId;

    if (!isUserLoggedIn) {
      throw new Error("User not logged in");
    }

    const { title, content, boardId, image } = args;
    return await ctx.db.createPost({
      title,
      content,
      board: {
        connect: { id: boardId },
      },
      image,
      author: {
        connect: {
          id: ctx.request.userId,
        },
      },
    });
  },

  async addOnlineUser(parent, args, ctx, info) {
    const { boardId, userName } = args;

    return await ctx.db.updateBoard({
      where: { id: boardId },
      data: {
        usersOnline: {
          connect: { userName },
        },
      },
    });
  },

  async removeOnlineUser(parent, args, ctx, info) {
    const { boardId, userName } = args;

    return await ctx.db.updateBoard({
      where: { id: boardId },
      data: {
        usersOnline: {
          disconnect: { userName },
        },
      },
    });
  },

  updateBoard: forwardTo("db"),
};

export default Mutation;
