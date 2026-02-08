import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreya Jaiswal | AI Engineer Portfolio",
  description:
    "AI Automation Engineer & Full Stack Developer specializing in LangChain, RAG, Voice AI Agents, and LLM-powered solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#0a0a0f]`}>
        {children}
      </body>
    </html>
  );
}
