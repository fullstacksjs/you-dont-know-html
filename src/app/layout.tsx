import "./globals.css";

import type { Metadata } from "next";

// TODO: Migrate to first class support.
import { ViewTransitions } from "next-view-transitions";
import { Fira_Mono as FiraMono, Ubuntu } from "next/font/google";

const inter = Ubuntu({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaMono = FiraMono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = { title: "You don't know html" };

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${inter.className} ${firaMono.variable} bg-background text-foreground antialiased`}
      >
        <body suppressHydrationWarning>{children}</body>
      </html>
    </ViewTransitions>
  );
}
