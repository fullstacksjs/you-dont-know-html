import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import type { Database } from "./Database";

import { config } from "./config";

export async function createSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    config.get("url"),
    config.get("anonKey"),
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
