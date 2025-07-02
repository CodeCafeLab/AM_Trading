import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { QuoteSheetProvider } from '@/context/quote-sheet-context';
import QuoteSheet from '@/components/quote-sheet';

export const metadata: Metadata = {
  title: 'PowerServe Portfolio',
  description: 'Trusted provider of diesel generator sales, installation, and support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <QuoteSheetProvider>
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
          <QuoteSheet />
          <Toaster />
        </QuoteSheetProvider>
      </body>
    </html>
  );
}
