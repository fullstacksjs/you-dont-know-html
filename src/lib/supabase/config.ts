import { Config } from "@fullstacksjs/config";

export const config = new Config({
  url: Config.string().required(),
  anonKey: Config.string().required(),
}).parse({
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});

console.log(config.getAll());
