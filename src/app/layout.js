import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Hamza Naeem — Full Stack Developer",
  description: "Full Stack Developer based in Karachi. Building production systems that scale — real-time APIs, infrastructure, and the interfaces in between.",
  openGraph: {
    title: "Hamza Naeem — Full Stack Developer",
    description: "Full Stack Developer. 10k+ users. 99.9% uptime. Based in Karachi.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} font-sans antialiased bg-zinc-950 text-zinc-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
