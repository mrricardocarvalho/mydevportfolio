import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// SEO defaults are provided via Next.js Metadata API below

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Carvalho | Senior Business Central Developer",
  description: "Ricardo Carvalho - Senior Business Central Developer at Xolyd. Extensive experience in ERP support, implementations, interfaces, upgrades, and cloud solutions.",
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Ricardo Carvalho | Senior Business Central Developer',
    description:
      'Ricardo Carvalho - Senior Business Central Developer at Xolyd. Extensive experience in ERP support, implementations, interfaces, upgrades, and cloud solutions.',
    url: 'https://your-domain.com',
    siteName: 'Ricardo Carvalho',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/** metadata is applied via Next.js Metadata API; no client-side default SEO component required */}
        {children}
      </body>
    </html>
  );
}
