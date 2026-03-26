export function HeroSection() {
  return (
    <section className="px-6 pb-10 pt-14 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full bg-green-dim border-green-dark text-green mb-8">
        {/* <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" /> */}
        <span className="text-[13px] font-medium">Active deals updated today</span>
      </div>
      
      <h1 className="font-outfit font-[800] text-[clamp(40px,7vw,72px)] tracking-[-1.5px] leading-[1.05] mb-5">
        Stop overpaying for<br />
        <span className="text-green">prop firm challenges</span>
      </h1>
      
      <p className="max-w-[480px] mx-auto text-[15px] leading-[1.6] text-muted mb-10">
        Compare discounts, grab exclusive promo codes of trading tools and prop firm challenges, all in one place.
      </p>
      
      {/* <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[22px] font-bold font-outfit">47</span>
          <span className="text-[11px] tracking-[0.5px] uppercase text-hint">Prop Firms</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[22px] font-bold font-outfit">$2.4M</span>
          <span className="text-[11px] tracking-[0.5px] uppercase text-hint">Saved by traders</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[22px] font-bold font-outfit">85%</span>
          <span className="text-[11px] tracking-[0.5px] uppercase text-hint">Avg discount tracked</span>
        </div>
      </div> */}
    </section>
  );
}
