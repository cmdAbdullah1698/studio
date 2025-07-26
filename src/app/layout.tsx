import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackgroundShards from "@/components/background-shards";

export const metadata: Metadata = {
  title: "thelinkingdots",
  description:
    "we are a collective of strategists, creatives, and innovators dedicated to providing transformative digital marketing, solutions, and training.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={cn(
          "font-sans antialiased",
          poppins.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <BackgroundShards />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
