import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(import.meta.dirname || __dirname, ".env") });


const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!
})

export const client = new PrismaClient({
    adapter
})