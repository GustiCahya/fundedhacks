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
  category: 'forex' | 'futures' | 'crypto' | 'instant' | 'twostep' | 'tools';
  discountPercent: number | null;
  code: string | null;
  tags: { label: string; variant: 'green' | 'amber' | 'blue' | 'red' | 'purple' | 'cyan' }[];
  maxAccount: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  expiresAt: string | null;
  affiliateUrl: string;
  createdAt: string;
}
