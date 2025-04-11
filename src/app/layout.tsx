import "./globals.css";

import type { Metadata, Viewport } from "next";

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

const title = "You don't know html";
const description = "If you think you know HTML, think again.";
const images = { url: "/og.png", alt: title };

export const metadata: Metadata = {
  title,
  description,
  keywords: ["html", "quiz", "challenge"],
  metadataBase: new URL("https://youdontknowhtml.com"),
  openGraph: {
    description,
    images,
    title,
  },
  twitter: {
    images,
    title,
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#23252e",
  colorScheme: "dark",
};

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
