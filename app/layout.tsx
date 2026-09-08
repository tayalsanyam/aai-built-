import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/brand/shell';
import PageMotion from '@/components/brand/motion';
import ConnectPopup from '@/components/brand/connect-popup';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'AAI Built — Your next chapter. Built in.',
    template: '%s | AAI Built',
  },
  description:
    'Custom software for ambitious SMEs. Human business expertise, augmented by AI. CRM, sales, operations and team tools built around your business.',
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
