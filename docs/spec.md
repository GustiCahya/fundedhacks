# FundedHacks.com - Product Specification

> **Stack:** Next.js (App Router) · Jotai (state management) · TanStack Query (server state / data fetching) · Tailwind CSS

---

## 1. Brand & Design System

### 1.1 Identity

| Token | Value |
|---|---|
| Brand name | FundedHacks |
| Domain | fundedhacks.com |
| Tagline | Stop overpaying for prop firm challenges |
| Telegram | https://t.me/fundedhacks |

### 1.2 Color Palette

| Name | Hex | Usage |
|---|---|---|
| `bg-primary` | `#0A0B0F` | Page background |
| `bg-secondary` | `#111318` | Card background |
| `bg-tertiary` | `#1A1C23` | Code rows, inner elements |
| `green` | `#22C97A` | Primary accent, CTA, discount badges |
| `green-dark` | `#1a9e60` | Border on green elements |
| `green-dim` | `#0d2e1a` | Green background fill (low emphasis) |
| `amber` | `#F5A623` | Promo codes, warnings |
| `amber-dim` | `#2e1f00` | Amber background fill |
| `red` | `#E24B4A` | Tags, danger |
| `red-dim` | `#2e0f0f` | Red background fill |
| `blue` | `#378ADD` | Info tags |
| `blue-dim` | `#0c2440` | Blue background fill |
| `text-primary` | `#F0EEE8` | Main text |
| `muted` | `#888880` | Secondary text |
| `hint` | `#555550` | Tertiary / placeholder |
| `border` | `#ffffff12` | Default border |
| `border-2` | `#ffffff20` | Emphasis border |

### 1.3 Typography

| Token | Value |
|---|---|
| Display / wordmark | `Outfit` - weight 700/800 |
| Body | `DM Sans` - weight 300/400/500 |
| Monospace (codes) | System monospace |
| Letter spacing (heading) | `-0.5px` to `-1.5px` |

### 1.4 Logo Mark

The primary logo is the image file located at `app/logo.png`. It is used in the Navbar and as the brand's visual identity.


**Wordmark:** `funded` in `#F0EEE8` + `hacks` in `#22C97A`, both `font-weight: 700`, `letter-spacing: -0.5px`, `font-size: 20px` in navbar.

**Tagline in logo:** `PROP FIRM DEALS` - `font-size: 11px`, `letter-spacing: 2.5px`, `color: #555550`.

Logo variants required:
- Dark bg (primary use)
- Light bg
- Green bg
- Icon mark only (for Telegram avatar, favicon)
- Wordmark only

---

## 2. Page Structure

### 2.1 Navigation

**No navigation links.** The navbar contains only:

```
[Logo mark + wordmark]                    [Get Alerts →]
```

- Logo: left-aligned
- `Get Alerts` button: primary green CTA - links to `https://t.me/fundedhacks` (opens in new tab)
- Navbar: `padding: 16px 24px`, `border-bottom: 0.5px solid border`, `background: bg-primary`
- Sticky top on scroll

**Removed items (do not implement):** Deals, Compare, Reviews, Blog, Login

---

### 2.2 Hero Section

```
[Live badge - animated pulse dot]
"24 active deals updated today"

[H1]
Stop overpaying for
prop firm challenges

[Subtext]
Compare discounts, grab exclusive promo codes, and
track reviews across the top funded trading firms -
all in one place.

[Stats row]
47 Prop Firms  |  $2.4M Saved by traders  |  85% Avg discount tracked
```

**Specs:**
- Hero padding: `56px 24px 40px`, text centered
- Badge: `background: green-dim`, `border: 0.5px solid green-dark`, `color: green`, `border-radius: 20px`, `padding: 5px 12px`
- Animated dot: `width: 6px`, `height: 6px`, `border-radius: 50%`, CSS keyframe `pulse` - opacity 1→0.4→1 at 2s interval
- H1: `font-family: Outfit`, `font-weight: 800`, `font-size: clamp(40px, 7vw, 72px)`, `letter-spacing: -1.5px`, `line-height: 1.05`
- H1 emphasis word ("challenges"): `color: green`
- Subtext: `color: muted`, `font-size: 15px`, `max-width: 480px`, `margin: 0 auto`, `line-height: 1.6`
- Stats row: `display: flex`, `justify-content: center`, `gap: 32px`
  - Stat number: `font-family: Outfit`, `font-weight: 700`, `font-size: 22px`
  - Stat label: `font-size: 11px`, `color: hint`, `text-transform: uppercase`, `letter-spacing: 0.5px`

---

### 2.3 Search & Filter Section

```
[Search input - full width up to 700px]     [Search button]

[Filter chips]
All Firms  |  Forex  |  Futures  |  Crypto  |  Instant Funding  |  2-Step Challenge
```

**Specs:**
- Search wrapper: `background: bg-secondary`, `border: 0.5px solid border-2`, `border-radius: 12px`, `padding: 8px`, `max-width: 700px`, centered
- Input: transparent background, no border, `font-size: 14px`, `placeholder-color: hint`
- Search button: `background: green`, `color: #000`, `font-size: 13px`, `font-weight: 500`, `border-radius: 8px`, `padding: 8px 18px`
- Filter chips: `border: 0.5px solid border-2`, `color: muted`, `border-radius: 20px`, `padding: 6px 14px`, `font-size: 12px`
- Active / hover chip: `border-color: green`, `color: green`, `background: green-dim`

**State (Jotai):**
```ts
// atoms/filters.ts
export const searchQueryAtom = atom('')
export const activeFilterAtom = atom<'all' | 'forex' | 'futures' | 'crypto' | 'instant' | 'twostep'>('all')
export const sortOrderAtom = atom<'discount' | 'newest' | 'rating' | 'expiry'>('discount')
```

---

### 2.4 Deals Grid

```
[Section header]
"Top Deals Right Now"                [Sort dropdown]

[Card grid - auto-fill, min 280px per card]
```

**Sort dropdown options:** Highest Discount · Newest Added · Best Rated · Expiring Soon

#### 2.4.1 Deal Card Anatomy

```
[Featured label - if applicable]     ← absolute, top of card
[Firm logo]  [Firm name]             [Discount badge - e.g. 30%]
             [Firm type]

[Code row - dashed border]
CODE123                              [Copy]

[Meta tags]
Up to $200K  |  Forex  |  Metals

[Rating stars + review count]        [Get Deal →]
[Expires in X days]
```

**Card specs:**
- `background: bg-secondary`, `border: 0.5px solid border`, `border-radius: 12px`, `padding: 16px`
- Hover: `border-color: border-2`, `transform: translateY(-2px)`, transition 200ms
- Featured card: `border-color: green-dark` + absolute label `background: green`, `color: #000`, `font-size: 10px`, positioned top inside card

**Firm logo:**
- `width: 36px`, `height: 36px`, `border-radius: 8px`, initials text `font-family: Outfit`, `font-weight: 800`, `font-size: 13px`
- Each firm has a unique bg color (dark tint of brand color)

**Discount badge:**
- `background: green-dim`, `border: 0.5px solid green-dark`, `color: green`
- `font-size: 18px`, `font-weight: 700`, `font-family: Outfit`

**Code row:**
- `background: bg-tertiary`, `border: 0.5px dashed border-2`, `border-radius: 8px`, `padding: 8px 12px`
- Code text: `font-family: monospace`, `font-size: 13px`, `color: amber`, `letter-spacing: 1px`
- Copy button: on click → copies code to clipboard, shows "Copied!" for 1800ms

**Meta tags:**
```
tag-green: background green-dim, border green-dark, color green
tag-amber: background amber-dim, border #6b3e00, color amber
tag-blue:  background blue-dim,  border #184060, color blue
tag-red:   background red-dim,   border #5e1010, color red
```

**Rating:** `color: amber`, stars + `(count reviews)` in muted

**CTA button:** `background: green`, `color: #000`, `border-radius: 8px`, `padding: 7px 14px`, `font-size: 12px`, `font-weight: 500` - links to prop firm via affiliate redirect URL `fundedhacks.com/go/[slug]`

**Expires row:** `font-size: 11px`, `color: hint`

---

#### 2.4.2 Data Model

```ts
// types/deal.ts
interface Deal {
  id: string
  firm: string                  // "FTMO"
  slug: string                  // "ftmo"
  logoInitials: string          // "FT"
  logoColors: {
    bg: string                  // "#1a2e1a"
    text: string                // "#22C97A"
  }
  type: string                  // "2-Step Challenge · Forex"
  category: 'forex' | 'futures' | 'crypto' | 'instant' | 'twostep'
  discountPercent: number       // 30
  code: string                  // "HACKS30"
  tags: { label: string; variant: 'green' | 'amber' | 'blue' | 'red' }[]
  maxAccount: string            // "Up to $200K"
  rating: number                // 4.8
  reviewCount: number           // 2100
  featured: boolean
  expiresAt: string | null      // ISO date or null (ongoing)
  affiliateUrl: string          // "https://fundedhacks.com/go/ftmo"
  createdAt: string
}
```

#### 2.4.3 TanStack Query Setup

```ts
// hooks/useDeals.ts
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { activeFilterAtom, searchQueryAtom, sortOrderAtom } from '@/atoms/filters'

export function useDeals() {
  const filter = useAtomValue(activeFilterAtom)
  const search = useAtomValue(searchQueryAtom)
  const sort   = useAtomValue(sortOrderAtom)

  return useQuery({
    queryKey: ['deals', filter, search, sort],
    queryFn: () =>
      fetch(`/api/deals?filter=${filter}&search=${encodeURIComponent(search)}&sort=${sort}`)
        .then(r => r.json()),
    staleTime: 1000 * 60 * 5,   // 5 min
  })
}
```

API route: `GET /api/deals?filter=&search=&sort=` → returns `Deal[]`

---

### 2.5 Quick Compare Table

```
[Section header]
"Quick Compare"                     [Full comparison →]  (links to /compare)

[Table]
Firm | Max Payout | Profit Split | Drawdown | News Trading | Crypto | Rating
```

**Specs:**
- Wrapper: `background: bg-secondary`, `border: 0.5px solid border`, `border-radius: 12px`, overflow hidden
- Table header: `color: hint`, `font-size: 11px`, `text-transform: uppercase`, `letter-spacing: 0.4px`
- Row hover: `background: bg-tertiary`
- Profit split column: high values `color: green`, medium `color: amber`
- Check icon: `color: green` ✓ | Cross icon: `color: red` ✗
- Rating: `color: amber`

---

### 2.6 Email Subscribe Section

```
Get exclusive deals before anyone else
Join 12,400+ traders getting weekly discount alerts

[Email input]                        [Subscribe Free]
```

**Specs:**
- Wrapper: `margin: 8px 24px`, `background: linear-gradient(135deg, green-dim, bg-tertiary)`, `border: 0.5px solid green-dark`, `border-radius: 12px`, `padding: 20px`
- Layout: flex, space-between, wraps on mobile
- Input: `background: bg-secondary`, `border: 0.5px solid border-2`, `border-radius: 8px`, `padding: 9px 14px`, `font-size: 13px`, `min-width: 200px`
- Submit button: `background: green`, `color: #000`, `border-radius: 8px`, `font-size: 13px`, `font-weight: 500`

**State (Jotai):**
```ts
// atoms/subscribe.ts
export const emailInputAtom = atom('')
export const subscribeStatusAtom = atom<'idle' | 'loading' | 'success' | 'error'>('idle')
```

**Mutation (TanStack Query):**
```ts
// hooks/useSubscribe.ts
import { useMutation } from '@tanstack/react-query'
import { useSetAtom } from 'jotai'
import { subscribeStatusAtom } from '@/atoms/subscribe'

export function useSubscribe() {
  const setStatus = useSetAtom(subscribeStatusAtom)

  return useMutation({
    mutationFn: (email: string) =>
      fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      }).then(r => r.json()),
    onMutate: () => setStatus('loading'),
    onSuccess: () => setStatus('success'),
    onError:   () => setStatus('error'),
  })
}
```

---

### 2.7 Telegram Channel Banner

Placed **directly below** the email subscribe section.

```
[Telegram Banner]
Join our Telegram for instant deal alerts
@fundedhacks - Free forever

[Join Channel →]   (links to https://t.me/fundedhacks)
```

**Specs:**
- Wrapper: `margin: 0 24px 24px`, `background: #0f1a12` (dark green tint), `border: 0.5px solid #1D9E75`, `border-radius: 12px`, `padding: 20px 24px`
- Layout: flex row, space-between, wraps on mobile, `gap: 16px`
- Left side:
  - Telegram icon (SVG) - `width: 32px`, `height: 32px`, `color: #22C97A`
  - Heading: `font-family: Syne`, `font-weight: 700`, `font-size: 16px`, `color: #F0EEE8`
  - Subtext: `font-size: 13px`, `color: #888880`
  - Live member badge: animated pulse dot + "X members online" (fetched from Telegram API or static)
- Right side:
  - Join button: `background: #22C97A`, `color: #000`, `font-weight: 500`, `border-radius: 8px`, `padding: 10px 20px`, `font-size: 13px`
  - Link: `https://t.me/fundedhacks`, `target="_blank"`

**Full banner markup structure:**
```tsx
<section className="tg-banner">
  <div className="tg-banner__left">
    <TelegramIcon />
    <div>
      <h3>Join our Telegram for instant deal alerts</h3>
      <p>@fundedhacks · Free forever</p>
      <div className="live-badge">
        <span className="pulse-dot" />
        <span>Get notified the moment a flash sale drops</span>
      </div>
    </div>
  </div>
  <a href="https://t.me/fundedhacks" target="_blank" rel="noopener noreferrer">
    <button>Join Channel →</button>
  </a>
</section>
```

---

### 2.8 Footer

```
[Logo wordmark]                      [© 2025 FundedHacks · Affiliate Disclosure · Privacy]
```

- `padding: 16px 24px`, `border-top: 0.5px solid border`, flex, space-between
- Links: `color: hint`, `font-size: 11px`

---

## 3. Routing (Next.js App Router)

```
app/
├── page.tsx                  ← Homepage (this spec)
├── layout.tsx                ← Root layout, providers
├── go/
│   └── [slug]/
│       └── route.ts          ← Affiliate redirect handler
├── api/
│   ├── deals/
│   │   └── route.ts          ← GET /api/deals
│   └── subscribe/
│       └── route.ts          ← POST /api/subscribe
└── compare/
    └── page.tsx              ← Full comparison table (future)
```

---

## 4. Provider Setup

```tsx
// app/layout.tsx
import { Provider as JotaiProvider } from 'jotai'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
```

---

## 5. Component Tree

```
<HomePage>
  <Navbar>
    <Logo />
    <GetAlertsButton href="https://t.me/fundedhacks" />
  </Navbar>

  <HeroSection>
    <LiveBadge />
    <HeroHeading />
    <HeroStats />
  </HeroSection>

  <SearchFilterSection>
    <SearchBar />           ← writes to searchQueryAtom
    <FilterChips />         ← writes to activeFilterAtom
  </SearchFilterSection>

  <DealsSection>
    <SectionHeader>
      <SortDropdown />      ← writes to sortOrderAtom
    </SectionHeader>
    <DealsGrid>
      <DealCard />          ← reads from useDeals()
      ...
    </DealsGrid>
  </DealsSection>

  <QuickCompareSection>
    <CompareTable />
  </QuickCompareSection>

  <EmailSubscribeSection>
    <SubscribeForm />       ← uses useSubscribe()
  </EmailSubscribeSection>

  <TelegramBannerSection /> ← links to https://t.me/fundedhacks

  <Footer />
</HomePage>
```

---

## 6. Affiliate Redirect Handler

```ts
// app/go/[slug]/route.ts
import { redirect } from 'next/navigation'
import { deals } from '@/data/deals'

export function GET(req: Request, { params }: { params: { slug: string } }) {
  const deal = deals.find(d => d.slug === params.slug)
  if (!deal) return new Response('Not found', { status: 404 })

  // TODO: log click event (analytics / DB)

  return redirect(deal.affiliateUrl)
}
```

All affiliate links in the UI point to `/go/[slug]` - never the raw affiliate URL directly.

---

## 7. Initial Deals Data (Seed)

```ts
// data/deals.ts
export const deals: Deal[] = [
  {
    id: '1', firm: 'FTMO', slug: 'ftmo',
    logoInitials: 'FT', logoColors: { bg: '#1a2e1a', text: '#22C97A' },
    type: '2-Step Challenge · Forex', category: 'twostep',
    discountPercent: 30, code: 'HACKS30',
    tags: [
      { label: 'Up to $200K', variant: 'green' },
      { label: 'Forex', variant: 'blue' },
      { label: 'Metals', variant: 'amber' },
    ],
    maxAccount: 'Up to $200K', rating: 4.8, reviewCount: 2100,
    featured: true, expiresAt: null,
    affiliateUrl: 'https://ftmo.com/?affiliate=HACKS30',
    createdAt: '2025-01-01',
  },
  {
    id: '2', firm: 'MyFundedFX', slug: 'myfundedfx',
    logoInitials: 'MF', logoColors: { bg: '#0c1e38', text: '#378ADD' },
    type: '2-Step · Forex & Crypto', category: 'twostep',
    discountPercent: 25, code: 'FH25',
    tags: [
      { label: 'Up to $100K', variant: 'green' },
      { label: 'Forex', variant: 'blue' },
      { label: 'Crypto', variant: 'green' },
    ],
    maxAccount: 'Up to $100K', rating: 4.5, reviewCount: 891,
    featured: false, expiresAt: null,
    affiliateUrl: 'https://myfundedfx.com/?ref=FH25',
    createdAt: '2025-01-02',
  },
  {
    id: '3', firm: 'The5ers', slug: 'the5ers',
    logoInitials: 'TP', logoColors: { bg: '#2e1f00', text: '#F5A623' },
    type: 'Instant Funding · Forex', category: 'instant',
    discountPercent: 20, code: 'FUNDED20',
    tags: [
      { label: 'Up to $40K', variant: 'green' },
      { label: 'Instant', variant: 'amber' },
      { label: 'Forex', variant: 'blue' },
    ],
    maxAccount: 'Up to $40K', rating: 4.3, reviewCount: 512,
    featured: false, expiresAt: null,
    affiliateUrl: 'https://the5ers.com/?promo=FUNDED20',
    createdAt: '2025-01-03',
  },
  {
    id: '4', firm: 'E8 Funding', slug: 'e8funding',
    logoInitials: 'E8', logoColors: { bg: '#1e0d2e', text: '#9B6DFF' },
    type: '1-Step · All Markets', category: 'forex',
    discountPercent: 15, code: 'HACKS15',
    tags: [
      { label: 'Up to $300K', variant: 'green' },
      { label: 'Indices', variant: 'blue' },
      { label: 'Commodities', variant: 'red' },
    ],
    maxAccount: 'Up to $300K', rating: 4.6, reviewCount: 733,
    featured: false, expiresAt: null,
    affiliateUrl: 'https://e8funding.com/?ref=HACKS15',
    createdAt: '2025-01-04',
  },
  {
    id: '5', firm: 'Apex Trader', slug: 'apex',
    logoInitials: 'AL', logoColors: { bg: '#1a0d0d', text: '#E24B4A' },
    type: 'Futures · CME', category: 'futures',
    discountPercent: 40, code: 'FH40',
    tags: [
      { label: 'Futures', variant: 'amber' },
      { label: 'CME', variant: 'blue' },
      { label: 'Up to $300K', variant: 'green' },
    ],
    maxAccount: 'Up to $300K', rating: 4.7, reviewCount: 1400,
    featured: false, expiresAt: null,
    affiliateUrl: 'https://apextraderfunding.com/?ref=FH40',
    createdAt: '2025-01-05',
  },
  {
    id: '6', firm: 'TopStep', slug: 'topstep',
    logoInitials: 'TC', logoColors: { bg: '#042c53', text: '#85B7EB' },
    type: 'Futures · Evaluation', category: 'futures',
    discountPercent: 10, code: 'HACKS10',
    tags: [
      { label: 'Futures', variant: 'amber' },
      { label: 'Chicago', variant: 'blue' },
      { label: 'Up to $150K', variant: 'green' },
    ],
    maxAccount: 'Up to $150K', rating: 4.4, reviewCount: 988,
    featured: false, expiresAt: null,
    affiliateUrl: 'https://topstep.com/?ref=HACKS10',
    createdAt: '2025-01-06',
  },
]
```

---

## 8. Key Interactions & UX Notes

| Interaction | Behavior |
|---|---|
| Copy code button | Copies code string → shows "Copied!" for 1800ms → resets |
| Filter chip click | Updates `activeFilterAtom` → `useDeals` refetches with new filter key |
| Search input | Debounced 300ms → updates `searchQueryAtom` |
| Sort dropdown | Updates `sortOrderAtom` → query invalidates |
| Get Alerts (nav) | `target="_blank"` → `https://t.me/fundedhacks` |
| Get Deal (card) | Internal link to `/go/[slug]` → server redirect |
| Subscribe form | `useSubscribe()` mutation → show success/error state inline |
| Join Channel (TG banner) | `target="_blank"` → `https://t.me/fundedhacks` |

---

## 9. SEO & Meta

```tsx
// app/page.tsx
export const metadata = {
  title: 'FundedHacks - Prop Firm Discount Codes & Deals',
  description:
    'Compare exclusive discount codes, promo deals and affiliate offers for the top prop trading firms. FTMO, Apex Trader, MyFundedFX, The5ers & 40+ more.',
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
}
```

---

## 10. Environment Variables

```env
# .env.local
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/fundedhacks
NEXT_PUBLIC_SITE_URL=https://fundedhacks.com
EMAIL_SUBSCRIBE_WEBHOOK=           # e.g. ConvertKit / Mailchimp API endpoint
DEALS_API_KEY=                     # if using external CMS
```

---

## 11. Dependencies

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "jotai": "^2",
    "@tanstack/react-query": "^5",
    "tailwindcss": "^3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^18",
    "@types/node": "^20"
  }
}
```

Fonts loaded via `next/font/google`:
```ts
import { Outfit, DM_Sans } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['700', '800'] })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'] })
```

---

*Last updated: March 2026 - FundedHacks v1.0*