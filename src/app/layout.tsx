import type { Metadata } from "next";
import { Space_Grotesk, Michroma } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk"

});

const michroma = Michroma ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma"

});

export const metadata: Metadata = {
  title: "GenioBud",
  description: "Unleash power of AI and get rewarded.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${michroma.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
