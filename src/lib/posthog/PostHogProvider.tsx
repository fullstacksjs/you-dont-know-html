"use client";

import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import {
  PostHogProvider as BasePostHogProvider,
  usePostHog,
} from "posthog-js/react";
import { Suspense, useEffect } from "react";

import { configSchema } from "./config";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const { key, apiHost, uiHost } = configSchema.getAll();
    if (!key) return;

    posthog.init(key, {
      api_host: apiHost,
      ui_host: uiHost,
      capture_pageview: false,
      capture_pageleave: true,
    });
  }, []);

  return (
    <BasePostHogProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </BasePostHogProvider>
  );
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthogClient = usePostHog();

  useEffect(() => {
    if (!pathname) return;

    const url = new URL(pathname, window.location.origin);
    if (searchParams.toString()) {
      url.search = searchParams.toString();
    }

    posthogClient.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams, posthogClient]);

  return null;
}
