import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthSync } from "@/components/auth-sync";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King Video | AI Short Video Generator & Scheduler",
  description: "Automate your social media growth. Generate and schedule AI videos for YouTube, Instagram, TikTok and Email with King Video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
        >
          <AuthSync />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
