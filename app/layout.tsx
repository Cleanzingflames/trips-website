import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Who is Trip? — Tracking an American Legend",
  description:
    "A strange figure. A growing trail of sightings. A legend people still can't explain. One place to track the legend of Trip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}