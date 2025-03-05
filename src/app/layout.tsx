import "./globals.css";

import type { Metadata } from "next";

// TODO: Migrate to first class support.
import { ViewTransitions } from "next-view-transitions";
import { Fira_Mono, Rajdhani } from "next/font/google";

const rajdhaniSans = Rajdhani({
  variable: "--font-rajdhani-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = { title: "You don't know html" };

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${rajdhaniSans.className} ${firaMono.variable} bg-background text-foreground antialiased`}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
