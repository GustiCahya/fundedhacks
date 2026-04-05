import { redirect } from "next/navigation";
import { deals } from "@/data/deals";
import { track } from "@vercel/analytics/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const p = await params;
  const deal = deals.find(d => d.slug === p.slug);

  if (!deal) {
    return new Response('Not found', { status: 404 });
  }

  // Record click event
  try {
    await track('Click Promo Link', { 
      propFirm: deal.firm,
      slug: deal.slug
    }, { 
      headers: request.headers 
    });
  } catch (err) {
    console.error("Vercel Analytics track error:", err);
  }

  return redirect(deal.affiliateUrl);
}
