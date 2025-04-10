import "./globals.css";

import type { Metadata } from "next";

import { PostHogProvider } from "@app/posthog/PostHogProvider";
import { Fira_Mono as FiraMono, Ubuntu } from "next/font/google";

const inter = Ubuntu({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

const firaMono = FiraMono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = { title: "You don't know html" };

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${firaMono.variable} bg-background text-foreground antialiased`}
    >
      <body suppressHydrationWarning>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
