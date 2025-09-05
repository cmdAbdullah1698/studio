
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/digital-solutions", label: "Digital Solutions" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-28 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden md:flex items-center gap-2 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors px-4 py-2 rounded-md",
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Logo />
                {navLinks.map((link) => {
                   const isActive = pathname === link.href;
                   return(
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "transition-colors px-4 py-2 rounded-md",
                        isActive
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "text-foreground hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                   )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
