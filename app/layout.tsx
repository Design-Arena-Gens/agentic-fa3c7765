import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Aegis Clinical Intelligence",
  description:
    "Clinical decision support platform with real-time patient monitoring and multimodal AI assistance."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-night-sky text-soft-white antialiased">
        {children}
      </body>
    </html>
  );
}
