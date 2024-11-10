import { SeedPostgres } from "@snaplet/seed/adapter-postgres";
import { defineConfig } from "@snaplet/seed/config";
import postgres from "postgres";

export default defineConfig({
  adapter: () => {
    const client = postgres("postgresql://postgres.nxvxtdqarbflrhkujbbn:dungeonquest1234$@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres");
    return new SeedPostgres(client);
  },
  select: [
    "!*",
    "public*",
    "auth.users",
    "auth.identities",
    "auth.sessions"
  ]
});