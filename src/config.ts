import { Config } from "@fullstacksjs/config";

export const config = new Config({
  supabaseUrl: Config.string().required(),
  supabaseKey: Config.string().required(),
}).parse({
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
});
