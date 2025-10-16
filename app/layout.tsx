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
    default: "Rincón Parrillero | Restaurante de carnes asadas",
    template: "%s | Rincón Parrillero",
  },
  description: "Asador y rosticería de barrio en un rinconcito con mucha buena onda.",
  openGraph: {
    title: "Rincón Parrillero | Restaurante de carnes asadas",
    description: "Asador y rosticería de barrio en un rinconcito con mucha buena onda.",
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: "Rincón Parrillero",
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
