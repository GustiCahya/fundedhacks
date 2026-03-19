export interface Deal {
  id: string;
  firm: string;
  slug: string;
  logoInitials: string;
  logoColors: {
    bg: string;
    text: string;
  };
  type: string;
  category: 'forex' | 'futures' | 'crypto' | 'instant' | 'twostep';
  discountPercent: number;
  code: string;
  tags: { label: string; variant: 'green' | 'amber' | 'blue' | 'red' }[];
  maxAccount: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  expiresAt: string | null;
  affiliateUrl: string;
  createdAt: string;
}
