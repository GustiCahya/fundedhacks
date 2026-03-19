import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import logoPic from "@/app/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-[38px] h-[38px] shrink-0">
        <Image 
          src={logoPic} 
          alt="FundedHacks Logo" 
          fill 
          sizes="38px"
          className="object-contain" 
          priority 
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-text-primary">funded</span>
          <span className="text-green">hacks</span>
        </div>
        <span className="text-[11px] tracking-[0.22em] text-hint -mt-1 font-semibold uppercase">
          Prop Firm Deals
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b bg-bg-primary border-border">
      <Link href="/">
        <Logo />
      </Link>
      <a
        href="https://t.me/fundedhacks"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-4 py-2 font-medium text-black transition-colors rounded-lg bg-green hover:bg-green-dark text-sm"
      >
        Get Alerts <ArrowRight className="w-4 h-4" />
      </a>
    </nav>
  );
}
