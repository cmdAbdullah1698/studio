import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-card/50">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <Link href="/" className="text-xl font-bold tracking-wider">
                    thelinkingdots
                </Link>
                <div className="text-center md:text-left">
                    <p className="text-base text-muted-foreground">&copy; {new Date().getFullYear()} thelinkingdots. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-6">
                    <p className="text-sm text-muted-foreground hidden md:block">
                        Built by <a href="https://www.BuiltByAbdullah.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Abdullah</a>
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" aria-label="facebook"><Facebook className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                        <Link href="#" aria-label="instagram"><Instagram className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                        <Link href="#" aria-label="linkedin"><Linkedin className="h-6 w-6 hover:text-accent transition-colors" /></Link>
                    </div>
                </div>
                 <p className="text-sm text-muted-foreground md:hidden">
                    Built by <a href="https://www.BuiltByAbdullah.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Abdullah</a>
                </p>
            </div>
        </footer>
    );
}
