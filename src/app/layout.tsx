import "./globals.css";
import type { Metadata } from "next";

import { Rajdhani } from "next/font/google";

const rajdhaniSans = Rajdhani({
  variable: "--font-rajdhani-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "You don't know html",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhaniSans.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
