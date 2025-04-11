import { Config } from "@fullstacksjs/config";

export const configSchema = new Config({
  key: Config.string(),
  host: Config.string(),
  apiHost: Config.string(),
  uiHost: Config.string(),
}).parse({
  key: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  apiHost: "/ingest",
  uiHost: "https://eu.posthog.com",
});
