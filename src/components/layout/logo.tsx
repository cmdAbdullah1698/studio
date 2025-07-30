'use client';

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group relative flex items-center gap-2 text-2xl font-bold tracking-wider">
      <div className="relative">
        <Image
          src="/logo.png"
          alt="thelinkingdots logo"
          width={60}
          height={60}
          className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="relative">
        <span className="transition-transform duration-300 group-hover:scale-110 inline-block">
          thelinkingdots
        </span>
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-5 flex items-center justify-center w-[100px]">
          <svg width="100" height="14" viewBox="0 0 100 14" className="w-full h-auto">
            <path d="M20 7 H 80" className="line" stroke="black" strokeWidth="2" />
            <circle cx="20" cy="7" r="2" className="dot dot-1" fill="black" />
            <circle cx="40" cy="7" r="2.5" className="dot dot-2" fill="black" />
            <circle cx="50" cy="7" r="3" className="dot dot-3" fill="black" />
            <circle cx="60" cy="7" r="2.5" className="dot dot-4" fill="black" />
            <circle cx="80" cy="7" r="2" className="dot dot-5" fill="black" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
