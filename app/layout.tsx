import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/brand/shell';
import PageMotion from '@/components/brand/motion';
import ConnectPopup from '@/components/brand/connect-popup';
import StructuredData from '@/components/brand/structured-data';
import { rootMetadata } from '@/lib/seo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  ...rootMetadata,
  title: {
    default: 'AAI Built — Your next chapter. Built in.',
    template: '%s | AAI Built',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <PageMotion />
        <div id="main-content">{children}</div>
        <Footer />
        <ConnectPopup />
      </body>
    </html>
  );
}
