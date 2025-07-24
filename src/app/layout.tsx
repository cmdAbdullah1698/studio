import type {Metadata} from 'next';
import { Poppins } from 'next/font/google'
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'thelinkingdots - digital marketing & solutions',
  description: 'we are a collective of strategists, creatives, and innovators dedicated to providing transformative digital marketing, solutions, and training.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("font-sans antialiased", poppins.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
