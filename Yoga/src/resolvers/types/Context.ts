import { Prisma } from "../../generated/prisma-client";

export interface Context {
  db: Prisma;
  req: Express.Request;
  response: any;
}
