import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Animate from "./Animate";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Home | LinguaLift",
  description:
    "This app improves the invisible infrastructure of language learning by providing a simple interface to create and share Spanish flashcards and quizzes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <Animate>{children}</Animate>
        <Footer />
      </body>
    </html>
  );
}
