import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 px-6 py-4 mt-8 border-t sm:flex-row bg-bg-primary border-border">
      <div className="flex items-center text-lg font-bold tracking-tight">
        <span className="text-text-primary">funded</span>
        <span className="text-green">hacks</span>
      </div>
      <div className="flex items-center gap-4 text-xs text-hint">
        <span>© 2026 FundedHacks</span>
        <span>&middot;</span>
        <Link href="#" className="hover:text-muted">
          Affiliate Disclosure
        </Link>
        <span>&middot;</span>
        <Link href="#" className="hover:text-muted">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
