import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-3 grid-rows-1 sticky left-0 top-0 z-10 bg-gray-950/80 backdrop-blur-md text-xs md:text-sm xl:text-xl hover:drop-shadow-[0_0_5px_white] transition-all">
          <nav className="w-full p-4 flex gap-6">
            <Link
              className="hover:drop-shadow-[0_0_5px_white] transition-all"
              href="/"
            >
              Kalkulator
            </Link>
            <Link
              className="hover:drop-shadow-[0_0_5px_white] transition-all"
              href="/zapisy"
            >
              Zapisy
            </Link>
          </nav>
          <h1 className=" cursor-default flex justify-center items-center text-2xl drop-shadow-[0_0_5px_white] shadow-white hover:drop-shadow-[0_0_5px_black] transition-all">
            BRUM v4.6
          </h1>
          <button className="flex justify-end items-center p-4">
            changecolor
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
