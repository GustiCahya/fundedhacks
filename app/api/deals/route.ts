import { NextResponse } from "next/server";
import { deals } from "@/data/deals";
import { Deal } from "@/types/deal";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter") || "all";
  const search = searchParams.get("search")?.toLowerCase() || "";
  const sort = searchParams.get("sort") || "discount";

  let filteredDeals = [...deals];

  // Apply filter
  if (filter !== "all") {
    const normalizedFilter = filter.toLowerCase();

    filteredDeals = filteredDeals.filter(d => {
      const categoryMatch = d.category.toLowerCase() === normalizedFilter;

      const tagMatch = d.tags?.some(
        tag => tag.label.toLowerCase() === normalizedFilter
      );

      return categoryMatch || tagMatch;
    });
  }

  // Apply search
  if (search) {
    filteredDeals = filteredDeals.filter(d =>
      d.firm.toLowerCase().includes(search) ||
      d.code?.toLowerCase().includes(search) ||
      d.type.toLowerCase().includes(search)
    );
  }

  // Helper to check if deal has code and discount
  const hasRewards = (deal: Deal) => deal.code !== null && deal.discountPercent !== null;

  filteredDeals.sort((a, b) => {
    const aHas = hasRewards(a);
    const bHas = hasRewards(b);

    // 1. Primary Sort: Prioritize those with Code & Discount
    if (aHas && !bHas) return -1;
    if (!aHas && bHas) return 1;

    // 2. Secondary Sort: If both have the same (or both don't have), 
    // then use the user's sorting logic
    if (sort === "discount") {
      return (b.discountPercent || 0) - (a.discountPercent || 0);
    }

    if (sort === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }

    if (sort === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    if (sort === "expiry") {
      const aExpiry = a.expiresAt ? new Date(a.expiresAt).getTime() : Infinity;
      const bExpiry = b.expiresAt ? new Date(b.expiresAt).getTime() : Infinity;
      return aExpiry - bExpiry;
    }

    return 0;
  });

  return NextResponse.json(filteredDeals);
}
