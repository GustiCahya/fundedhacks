"use client";

import { useAtom } from "jotai";
import { searchQueryAtom, activeFilterAtom } from "@/atoms/filters";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: 'all', label: 'All Firms' },
  { id: 'forex', label: 'Forex' },
  { id: 'futures', label: 'Futures' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'instant', label: 'Instant Funding' },
  { id: 'twostep', label: '2-Step Challenge' },
  { id: 'tools', label: 'Tools' },
] as const;

export function SearchFilterSection() {
  const [search, setSearch] = useAtom(searchQueryAtom);
  const [active, setActive] = useAtom(activeFilterAtom);

  return (
    <section className="px-6 py-8">
      <div className="flex items-center gap-2 p-2 mx-auto mb-8 border max-w-[700px] bg-bg-secondary border-border-2 rounded-xl">
        <div className="flex items-center flex-1 gap-3 px-3">
          <Search className="w-5 h-5 text-hint" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search prop firms, codes, or terms..."
            className="flex-1 text-sm bg-transparent outline-none text-text-primary placeholder:text-hint"
          />
        </div>
        <button className="px-5 py-2 text-[13px] font-medium text-black rounded-lg bg-green hover:bg-green-dark">
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "px-3.5 py-1.5 text-xs rounded-full border border-border-2 text-muted transition-colors hover:border-border",
              active === f.id && "border-green text-green bg-green-dim hover:border-green"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>
    </section>
  );
}
