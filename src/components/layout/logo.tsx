
'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group relative text-2xl font-bold tracking-wider">
      thelinkingdots
      <div className="absolute -bottom-3 left-0 right-0 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg width="100" height="10" viewBox="0 0 100 10" className="w-full h-auto">
          {/* Dots */}
          <circle cx="20" cy="5" r="3" className="dot dot-1" />
          <circle cx="35" cy="5" r="3" className="dot dot-2" />
          <circle cx="50" cy="5" r="3" className="dot dot-3" />
          <circle cx="65" cy="5" r="3" className="dot dot-4" />
          <circle cx="80" cy="5" r="3" className="dot dot-5" />
          {/* Connecting Line */}
          <path d="M20 5 H 80" className="line" />
        </svg>
      </div>
    </Link>
  );
}
