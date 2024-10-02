import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"
import { Header } from "@/components/Header";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Poopup",
  description: "Generated by create next app",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ['200', '300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased overflow-x-hidden`}
      >
        <Providers>
          <Header />
            <main className="mt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
