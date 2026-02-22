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
  title: "Hamza Naeem - Software Developer",
  description: "Software Developer leading cross-functional teams to deliver production-ready full-stack applications with modern technologies.",
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
