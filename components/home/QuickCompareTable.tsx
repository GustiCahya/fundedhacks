import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

const compareData = [
  { firm: "FTMO", payout: "Up to $200K", split: "90%", dd: "10%", news: true, crypto: true, rating: 4.8 },
  { firm: "Apex Trader", payout: "Up to $300K", split: "90%", dd: "Trailing", news: true, crypto: false, rating: 4.7 },
  { firm: "The5ers", payout: "Up to $40K", split: "100%", dd: "6%", news: false, crypto: false, rating: 4.3 },
  { firm: "MyFundedFX", payout: "Up to $100K", split: "80%", dd: "8%", news: true, crypto: true, rating: 4.5 },
];

export function QuickCompareTable() {
  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-text-primary">Quick Compare</h2>
        <Link 
          href="/compare" 
          className="flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-text-primary transition-colors"
        >
          Full comparison <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="overflow-hidden border rounded-xl bg-bg-secondary border-border">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border-2">
                {["Firm", "Max Payout", "Profit Split", "Drawdown", "News Trading", "Crypto", "Rating"].map((head, i) => (
                  <th key={i} className="px-4 py-3 border-r last:border-r-0 border-border-2 text-[11px] font-semibold tracking-[0.4px] uppercase text-hint whitespace-nowrap">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareData.map((row, i) => (
                <tr key={i} className="transition-colors border-b last:border-0 border-border-2 hover:bg-bg-tertiary">
                  <td className="px-4 py-3.5 border-r border-border-2 text-[13px] font-bold text-text-primary">{row.firm}</td>
                  <td className="px-4 py-3.5 border-r border-border-2 text-[13px] text-muted">{row.payout}</td>
                  <td className="px-4 py-3.5 border-r border-border-2 text-[13px] font-bold">
                    <span className={row.split === "90%" || row.split === "100%" ? "text-green" : "text-amber"}>
                      {row.split}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 border-r border-border-2 text-[13px] text-muted">{row.dd}</td>
                  <td className="px-4 py-3.5 border-r border-border-2">
                    {row.news ? <Check className="w-4 h-4 text-green" /> : <X className="w-4 h-4 text-red" />}
                  </td>
                  <td className="px-4 py-3.5 border-r border-border-2">
                    {row.crypto ? <Check className="w-4 h-4 text-green" /> : <X className="w-4 h-4 text-red" />}
                  </td>
                  <td className="px-4 py-3.5 text-[13px] font-medium text-amber">{row.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
