import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchFilterSection } from "@/components/home/SearchFilterSection";
import { DealsGrid } from "@/components/home/DealsGrid";
// import { QuickCompareTable } from "@/components/home/QuickCompareTable";
// import { EmailSubscribe } from "@/components/home/EmailSubscribe";
import { TelegramBanner } from "@/components/home/TelegramBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto">
        <HeroSection />
        <SearchFilterSection />
        <DealsGrid />
        {/* <QuickCompareTable /> */}
        {/* <EmailSubscribe /> */}
        <TelegramBanner />
      </main>

      <Footer />
    </div>
  );
}
