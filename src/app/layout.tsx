import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mahad Khan | Full Stack Developer & Certified AI Architect (PCAOF)",
  description:
    "Official portfolio of Mahad Khan — Full Stack Software Developer and Certified AI Architect (PCAOF). Specializing in Next.js, React, TypeScript, AI Agent Systems, and Cloud Native Architectures.",
  keywords: [
    "Mahad Khan",
    "Full Stack Developer",
    "AI Architect",
    "PCAOF Certified",
    "Panaversity",
    "Next.js Developer",
    "React Developer",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Mahad Khan" }],
  icons: {
    icon: [
      { url: "/icon" },
    ],
    apple: [
      { url: "/apple-icon" },
    ],
    shortcut: ["/icon"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light" suppressHydrationWarning>
      <body className="dark:bg-[#080a11] bg-[#eef2f6] dark:text-slate-100 text-[#0f172a] antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
