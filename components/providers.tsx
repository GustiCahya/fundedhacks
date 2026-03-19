"use client";

import { Provider as JotaiProvider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </JotaiProvider>
  );
}
