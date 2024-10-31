import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const serelemo = localFont({
  src: "./fonts/serelemo-slant.otf",
  variable: "--font-serelemo",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Everloop",
  description: "Websolutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serelemo.variable} ${poppins.variable} antialiased w-screen min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
