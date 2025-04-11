import "server-only";
import { PostHog } from "posthog-node";

import { configSchema } from "./config";

export default function createPostHogClient() {
  return new PostHog(configSchema.get("key"), {
    host: configSchema.get("host"),
    flushAt: 1,
    flushInterval: 0,
  });
}
