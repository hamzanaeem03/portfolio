import localFont from "next/font/local";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "/fonts/poppins-medium-webfont.woff2", weight: "400", style: "normal", display: "swap" },
    // { path: "/fonts/poppins-bold-webfont.woff2", weight: "700", style: "normal", display: "swap" },
  ],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hamza Naeem - Full-Stack Developer & Tech Lead",
  description: "Full-stack developer building production-ready applications. Expertise in React, Node.js, AWS, and real-time systems. 10K+ users scaled, 99.9% uptime maintained.",
  keywords: "Full-Stack Developer, React, Node.js, Next.js, AWS, PostgreSQL, MongoDB, Software Engineer",
  authors: [{ name: "Hamza Naeem" }],
  openGraph: {
    title: "Hamza Naeem - Full-Stack Developer & Tech Lead",
    description: "Building production-ready applications with modern technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Naeem - Full-Stack Developer & Tech Lead",
    description: "Full-stack developer with expertise in React, Node.js, and AWS",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <script src="/scripts.js" defer></script>
      </body>
    </html>
  );
}
