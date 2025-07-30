'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group relative flex items-center gap-2 text-2xl font-bold tracking-wider">
       <Image
          src="/logo.png"
          alt="thelinkingdots logo"
          width={60}
          height={60}
          className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 dark:group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover:drop-shadow-[0_0_20px_hsla(var(--primary),0.7)]"
        />
      <div className="relative">
        <span className="transition-transform duration-300 group-hover:scale-110 inline-block">
          thelinkingdots
        </span>
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[100px]">
             <svg width="50" height="7" viewBox="0 0 100 14" className="w-full h-auto">
                {/* Dots */}
                <circle cx="20" cy="7" r="0.625" className="dot dot-1" />
                <circle cx="30" cy="7" r="0.75" className="dot dot-2" />
                <circle cx="45" cy="7" r="1" className="dot dot-3" />
                <circle cx="60" cy="7" r="0.75" className="dot dot-4" />
                <circle cx="70" cy="7" r="0.625" className="dot dot-5" />
        
                {/* Connecting Line */}
                <path d="M10 7 H 80" className="line" />
            </svg>
        </div>
      </div>
    </Link>
  );
}
