import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: process.env.NEXT_PUBLIC_HOST ? new URL(process.env.NEXT_PUBLIC_HOST) : undefined,
  title: {
    default: "Pastelería El Postre | Postres de alta calidad",
    template: "%s | Pastelería El Postre",
  },
  description: "Más de 20 años ofreciendo postres de calidad que nos destacan como una marca líder en la región.",
  openGraph: {
    title: "Pastelería El Postre | Postres de alta calidad",
    description: "Más de 20 años ofreciendo postres de calidad que nos destacan como una marca líder en la región.",
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: "Pastelería El Postre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
