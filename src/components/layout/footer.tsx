
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-6 bg-card/50">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center gap-4">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
                    <Link href="/" className="text-xl font-bold tracking-wider">
                        thelinkingdots
                    </Link>
                    <p className="text-base text-muted-foreground">&copy; {new Date().getFullYear()} thelinkingdots. All rights reserved.</p>
                     <p className="text-sm text-muted-foreground">
                        Built by <a href="https://www.BuiltByAbdullah.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Abdullah</a>
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href="#" aria-label="facebook"><Facebook className="h-5 w-5 hover:text-accent transition-colors" /></Link>
                    <Link href="#" aria-label="instagram"><Instagram className="h-5 w-5 hover:text-accent transition-colors" /></Link>
                    <Link href="#" aria-label="linkedin"><Linkedin className="h-5 w-5 hover:text-accent transition-colors" /></Link>
                </div>
            </div>
        </footer>
    );
}
