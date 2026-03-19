import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.scss";
import { Providers } from "@/components/providers";

const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["700", "800"],
  variable: "--font-outfit",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: 'FundedHacks - Prop Firm Discount Codes & Deals',
  description: 'Compare exclusive discount codes, promo deals and affiliate offers for the top prop trading firms. FTMO, Apex Trader, MyFundedFX, The5ers & 40+ more.',
  openGraph: {
    title: 'FundedHacks - Prop Firm Discount Codes',
    description: 'Stop overpaying for prop firm challenges. Get exclusive codes & daily deal alerts.',
    url: 'https://fundedhacks.com',
    siteName: 'FundedHacks',
    images: [{ url: 'https://fundedhacks.com/og.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FundedHacks - Prop Firm Discount Codes',
    description: 'Stop overpaying for prop firm challenges.',
    images: ['https://fundedhacks.com/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
