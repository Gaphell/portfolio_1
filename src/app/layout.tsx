import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import geometry from './images/geometry.svg';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tenzin Gaphel",
  description: "Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Squada+One&family=Nunito+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div className='absolute inset-0 h-full'>
      <div className="fixed inset-0 w-full h-full">
        <Image src={geometry} alt="Geometry Shape Background" width={24} height={24}
               className="absolute inset-0 w-full h-full object-contain opacity-50 animate-rotate"/>
      
      </div>
      {children}
    </div>
    </body>
    </html>
  );
}
