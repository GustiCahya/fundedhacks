"use client";

import { useState } from "react";
import { Deal } from "@/types/deal";
import { Copy, Check, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variantStyles = {
  green: "bg-green-dim border-green-dark text-green",
  amber: "bg-amber-dim border-[#6b3e00] text-amber",
  blue: "bg-blue-dim border-[#184060] text-blue",
  red: "bg-red-dim border-[#5e1010] text-red",
  purple: 'bg-purple-dim border-[#184060] text-purple',
  cyan: 'bg-cyan-dim border-[#184060] text-cyan',
};

export function DealCard({ deal }: { deal: Deal }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (deal.code === null) return;
    navigator.clipboard.writeText(deal.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={cn(
      "relative flex flex-col p-4 transition-all duration-200 border rounded-xl bg-bg-secondary hover:-translate-y-0.5",
      deal.featured ? "border-green-dark" : "border-border hover:border-border-2"
    )}>
      {deal.featured && (
        <div className="absolute top-0 right-4 px-2 py-0.5 text-[10px] font-bold text-black uppercase -translate-y-1/2 rounded bg-green">
          Featured
        </div>
      )}

      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div 
            className="flex items-center justify-center w-[38px] h-[38px] font-outfit font-[800] text-[13px] rounded-lg"
            style={{ backgroundColor: deal.logoColors.bg, color: deal.logoColors.text }}
          >
            {deal.logoInitials}
          </div>
          <div>
            <h3 className="font-bold text-text-primary text-[15px] leading-tight mb-0.5">{deal.firm}</h3>
            <p className="text-[12px] text-muted leading-tight">{deal.type}</p>
          </div>
        </div>
        {deal.discountPercent !== null && (
          <div className="px-2 py-1 font-outfit font-bold text-[18px] leading-none border rounded border-green-dark bg-green-dim text-green">
            {deal.discountPercent}%
          </div>
        )}
      </div>

      {deal.code !== null && (
        <div className="flex items-center justify-between p-2 px-3 mb-4 border border-dashed rounded-lg bg-bg-tertiary border-border-2">
          <span className="font-mono text-[13px] font-medium tracking-[1px] text-amber">
            {deal.code}
          </span>
          <button 
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-text-primary transition-colors"
        >
          {copied ? (
            <><Check className="w-3.5 h-3.5 text-green" /> <span className="text-green">Copied!</span></>
          ) : (
            <><Copy className="w-3.5 h-3.5" /> Copy</>
          )}
        </button>
      </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-5">
        {deal.tags.map((tag, i) => (
          <span
            key={i}
            className={cn(
              "px-2 py-0.5 text-[10px] font-medium border rounded whitespace-nowrap tracking-wide",
              variantStyles[tag.variant]
            )}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-3.5 h-3.5 text-amber fill-amber" />
            <span className="text-xs font-medium text-amber mt-[1px]">{deal.rating}</span>
            <span className="text-[11px] text-muted mt-[1px]">({deal.reviewCount})</span>
          </div>
          {deal.expiresAt ? (
            <div className="text-[11px] text-hint">Expires in 3 days</div>
          ) : (
            <div className="text-[11px] text-hint">Ongoing deal</div>
          )}
        </div>
        
        <Link 
          href={`/go/${deal.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-1.5 text-[13px] font-medium text-black transition-colors rounded-lg bg-green hover:bg-green-dark"
        >
          Get Deal &rarr;
        </Link>
      </div>
    </div>
  );
}
