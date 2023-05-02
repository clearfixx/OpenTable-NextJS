import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgres://postgres:GevWypFxKDYK9DIp@db.cwkbfbpzvckbgcjpnvap.supabase.co:6543/postgres",
    },
  },
});