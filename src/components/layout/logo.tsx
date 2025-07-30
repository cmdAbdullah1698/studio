
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
          width={48}
          height={48}
          className="h-12 w-auto transition-all duration-300 dark:group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
        />
      <span>
        thelinkingdots
      </span>
      <div className="absolute -bottom-4 left-0 right-0 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="100" height="14" viewBox="0 0 100 14" className="w-full h-auto">
          {/* Dots */}
          <circle cx="20" cy="7" r="2.5" className="dot dot-1" />
          <circle cx="30" cy="7" r="3" className="dot dot-2" />
          <circle cx="45" cy="7" r="4" className="dot dot-3" />
          <circle cx="60" cy="7" r="3" className="dot dot-4" />
          <circle cx="70" cy="7" r="2.5" className="dot dot-5" />
  
          {/* Connecting Line */}
          <path d="M10 7 H 80" className="line" />
        </svg>
      </div>
    </Link>
  );
}
