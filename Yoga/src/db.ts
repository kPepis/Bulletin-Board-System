// This files connect to the Prisma DB and allows us to query within JS
import { Prisma } from "./generated/prisma-client";

// This db object refers to the schema and endpoint created with Prisma
const db = new Prisma({
  // endpoint: process.env.PRISMA_ENDPOINT!,
  
  endpoint: "http://prisma:4466",
  // secret: process.env.PRISMA_SECRET!,
  // debug: true
  debug: false
});

export default db;
