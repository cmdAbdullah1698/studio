'use client';

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group relative flex items-center text-2xl font-bold tracking-wider">
      <div className="relative flex flex-col items-center">
        <span className="transition-transform duration-300 group-hover:scale-110 inline-block">
          thelinkingdots
        </span>
        <span className="w-[70%] text-center text-xs font-medium tracking-normal mt-1 opacity-80 whitespace-nowrap">
            Training &amp; Consultancy
        </span>
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 h-7 flex items-center justify-center w-[100px]">
              <svg
              width="100"
              height="30"
              viewBox="0 0 100 20"
              className="w-[100px] h-[30px]"
                        >
              <path d="M20 10 H 80" className="line" stroke="black" strokeWidth="4" />
              <circle cx="20" cy="10" r="3.5" className="dot dot-1" fill="black" />
              <circle cx="30" cy="10" r="4.5" className="dot dot-2" fill="black" />
              <circle cx="50" cy="10" r="10" className="dot dot-3" fill="black" />
              <circle cx="70" cy="10" r="4.5" className="dot dot-4" fill="black" />
              <circle cx="80" cy="10" r="3.5" className="dot dot-5" fill="black" />
            </svg>

        </div>
      </div>
    </Link>
  );
}
