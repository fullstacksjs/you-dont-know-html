import "server-only";
import { PostHog } from "posthog-node";

import { configSchema } from "./config";

export default function createPostHogClient() {
  const key = configSchema.get("key");
  if (!key) return undefined;

  return new PostHog(key, {
    host: configSchema.get("host"),
    flushAt: 1,
    flushInterval: 0,
  });
}
