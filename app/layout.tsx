import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { CyberBackground } from "./components/CyberBackground";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Cybersecurity Portfolio | [Your Name]",
  description: "Experienced cybersecurity professional specializing in penetration testing, security analysis, and digital forensics. View my projects and expertise.",
  keywords: [
    "cybersecurity",
    "information security",
    "penetration testing",
    "security analyst",
    "digital forensics",
    "cyber defense",
    "security portfolio"
  ],
  authors: [{ name: "[Your Name]" }],
  robots: "index, follow",
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-outfit antialiased transition-colors duration-200`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-black">
            <Navbar />
            <CyberBackground />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
