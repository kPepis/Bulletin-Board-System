import * as cookieParser from "cookie-parser";
import { NextFunction, Request, Response } from "express";
// import * as express from "express";
const express = require("express");
// import { IncomingMessage, ServerResponse } from "http";
import * as jwt from "jsonwebtoken";
import * as next from "next";

import bodyParser = require("body-parser");
import { IncomingMessage, ServerResponse } from "http";

const app = express();

const server = require("http").Server(app);

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

declare global {
  interface Request {
    cookies: {
      token?: string;
    };
    userId: string;
    userName: string;
  }
}

nextApp.prepare().then(() => {
  app.use(cookieParser());

  app.use(bodyParser.json());

  // app.use((req: Request, res: Response, next: NextFunction) => {});

  app.get("*", (req: IncomingMessage, res: ServerResponse) => {
    const { token } = req.cookies;
    console.log(token);
    if (token) {
      const { userId, userName } = jwt.verify(
        token,
        process.env.APP_SECRET!,
      ) as {
        userId: string;
        userName: string;
      };

      res.cookie("userId", userId);
      res.cookie("userName", userName);
    }
    // next();

    return nextHandler(req, res);
  });

  app.get("/logout", (req: IncomingMessage, res: ServerResponse) => {
    // @ts-ignore
    res.clearCookie("token", { path: "/" });
    // @ts-ignore
    res.clearCookie("userId", { path: "/" });
    // @ts-ignore
    res.clearCookie("userName", { path: "/" });

    return nextHandler(req, res);
  });

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    console.log(`Listening on port ${port}`);
  });
});
