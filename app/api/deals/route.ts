import { NextResponse } from "next/server";
import { deals } from "@/data/deals";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter") || "all";
  const search = searchParams.get("search")?.toLowerCase() || "";
  const sort = searchParams.get("sort") || "discount";

  let filteredDeals = [...deals];

  // Apply filter
  if (filter !== "all") {
    filteredDeals = filteredDeals.filter(d => d.category === filter);
  }

  // Apply search
  if (search) {
    filteredDeals = filteredDeals.filter(d =>
      d.firm.toLowerCase().includes(search) ||
      d.code.toLowerCase().includes(search) ||
      d.type.toLowerCase().includes(search)
    );
  }

  // Apply sort
  if (sort === "discount") {
    filteredDeals.sort((a, b) => b.discountPercent - a.discountPercent);
  } else if (sort === "rating") {
    filteredDeals.sort((a, b) => b.rating - a.rating);
  } else if (sort === "newest") {
    filteredDeals.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return NextResponse.json(filteredDeals);
}
