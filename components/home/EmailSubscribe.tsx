"use client";

import { useAtom } from "jotai";
import { emailInputAtom, subscribeStatusAtom } from "@/atoms/subscribe";
import { useSubscribe } from "@/hooks/useSubscribe";
import { Loader2 } from "lucide-react";

export function EmailSubscribe() {
  const [email, setEmail] = useAtom(emailInputAtom);
  const [status] = useAtom(subscribeStatusAtom);
  const subscribe = useSubscribe();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe.mutate(email);
  };

  return (
    <section className="px-6 py-4">
      <div 
        className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-xl border border-green-dark"
        style={{ background: "linear-gradient(135deg, var(--color-green-dim), var(--color-bg-tertiary))" }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold text-text-primary mb-1.5">
            Get exclusive deals before anyone else
          </h2>
          <p className="text-[13px] md:text-sm text-muted">
            Join 12,400+ traders getting weekly discount alerts
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            placeholder="Enter your email..."
            className="w-full sm:min-w-[220px] px-4 py-2.5 text-[13px] rounded-lg border border-border-2 bg-bg-secondary text-text-primary placeholder:text-hint focus:outline-none focus:border-green disabled:opacity-50 transition-colors"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-[13px] font-medium text-black rounded-lg bg-green hover:bg-green-dark transition-colors disabled:opacity-70 h-[42px]"
          >
            {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : 
             status === 'success' ? 'Subscribed!' : 
             status === 'error' ? 'Error. Try Again' : 'Subscribe Free'}
          </button>
        </form>
      </div>
    </section>
  );
}
