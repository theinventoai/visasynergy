import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const geistMono = Roboto_Slab({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Visa Synergy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
