import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Abdullah Nasir - UI/UX Designer",
  description: "UI/UX Designer based in Lahore, Pakistan, specializing in crafting seamless digital experiences with user-centric design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${notoSans.variable} antialiased`}
        style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
