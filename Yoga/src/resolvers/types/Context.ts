import { Prisma } from "../../generated/prisma-client";
import { response } from "express";

export interface Context {
  db: Prisma;
  request: Express.Request;
  response: Express.Response;
  connection: any;
}
