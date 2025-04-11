import { Inter } from 'next/font/google'
import Navbar from "@/components/NavBar";
import Footer from '@/components/Footer';
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


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
        className={`${inter.className} antialiased`}
      >
        <header>
          <Navbar />
        </header>

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
