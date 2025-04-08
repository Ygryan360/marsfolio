import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello, Je suis Martial Ahadji",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt repellat itaque suscipit architecto eius quidem ut at, impedit vero repellendus necessitatibus blanditiis fuga incidunt minus dolores quas. Quam, reprehenderit?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="forest">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
