import { redirect } from "next/navigation";
import { deals } from "@/data/deals";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const p = await params;
  const deal = deals.find(d => d.slug === p.slug);

  if (!deal) {
    return new Response('Not found', { status: 404 });
  }

  // Record click event here in a real app (analytics / db event)

  return redirect(deal.affiliateUrl);
}
