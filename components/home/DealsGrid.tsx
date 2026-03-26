"use client";

import { useAtom } from "jotai";
import { sortOrderAtom } from "@/atoms/filters";
import { useDeals } from "@/hooks/useDeals";
import { DealCard } from "@/components/ui/DealCard";
import { ChevronDown } from "lucide-react";

export function DealsGrid() {
  const [sort, setSort] = useAtom(sortOrderAtom);
  const { data: deals, isLoading, isError } = useDeals();

  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-text-primary">Top Deals Right Now</h2>
        
        <div className="relative">
          <select 
            value={sort} 
            onChange={(e) => setSort(e.target.value as any)}
            className="pl-3 pr-8 py-2 text-[12px] font-medium border appearance-none outline-none border-border-2 bg-bg-secondary text-text-primary rounded-lg focus:border-green"
          >
            <option value="discount">Highest Discount</option>
            <option value="newest">Newest Added</option>
            <option value="rating">Best Rated</option>
            {/* <option value="expiry">Expiring Soon</option> */}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
          {[1,2,3,4,5,6].map(i => (
             <div key={i} className="h-[210px] border rounded-xl bg-bg-secondary border-border" />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center border border-dashed rounded-xl bg-bg-secondary border-border-2 text-red">Failed to load deals.</div>
      ) : deals?.length === 0 ? (
        <div className="py-16 text-center border border-dashed rounded-xl bg-bg-secondary border-border-2 text-muted">No deals match your search criteria.</div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {deals?.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </section>
  );
}
