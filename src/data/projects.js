export const projects = [
  {
    slug: 'home-kitchen-amazon-growth',
    name: 'Home & Kitchen Amazon Growth',
    industry: 'Home & Kitchen Brand',
    tags: ['Amazon Management', 'PPC'],
    result: '+142% YoY Amazon sales',
    metric: '142%',
    metricLabel: 'YoY sales growth',
    summary:
      'Rebuilt listing SEO, restructured PPC campaigns, and resolved a brand-registry compliance issue to unlock scalable growth.',
    challenge:
      'A home & kitchen brand had a strong product line but stagnant Amazon sales, wasted ad spend, and a suppressed listing due to a compliance flag.',
    solution:
      'We audited the full account, rewrote listing copy and images around high-intent keywords, restructured campaigns into a tiered PPC framework, and resolved the compliance issue with Amazon Brand Registry support.',
    results: [
      '+142% year-over-year Amazon revenue',
      '-31% average cost per click',
      '4.9x return on ad spend within 5 months',
    ],
    testimonial: {
      quote:
        'Agency Mock turned our Amazon channel from a cost center into our best-performing sales channel.',
      author: 'Operations Director, Home & Kitchen Brand',
    },
  },
  {
    slug: 'beauty-brand-catalog-scaleup',
    name: 'Beauty Brand Catalog Scale-Up',
    industry: 'Beauty & Personal Care',
    tags: ['Amazon Management', 'Strategy'],
    result: '+180% sales in 6 months',
    metric: '180%',
    metricLabel: 'sales growth in 6 months',
    summary:
      'Launched 14 new SKUs on Amazon with a coordinated listing, advertising, and inventory strategy.',
    challenge:
      'A beauty brand needed to launch a large new catalog on Amazon quickly without diluting ad spend or risking stockouts.',
    solution:
      'We built a phased launch plan, prioritized hero SKUs, ran a demand-driven inventory forecast, and layered sponsored product, brand, and display campaigns around launch milestones.',
    results: [
      '+180% sales within 6 months of launch',
      '14 SKUs launched on schedule with zero stockouts',
      'Achieved page-1 ranking for 22 target keywords',
    ],
    testimonial: {
      quote: 'The launch plan was the most organized rollout we’ve done on Amazon.',
      author: 'Founder, Beauty Brand',
    },
  },
  {
    slug: 'b2b-supplier-ecommerce-platform',
    name: 'B2B Supplier Ecommerce Platform',
    industry: 'Industrial Supplies',
    tags: ['Website', 'Web App'],
    result: '+65% online quote conversions',
    metric: '65%',
    metricLabel: 'more online quote conversions',
    summary:
      'Designed and built a custom quoting and catalog web app for a B2B industrial supplier.',
    challenge:
      'The client relied on manual phone and email quoting, slowing down sales cycles and losing leads to faster competitors.',
    solution:
      'We designed a searchable product catalog with tiered pricing logic, built a self-service quote request workflow, and integrated it with their existing ERP for real-time inventory data.',
    results: [
      '+65% increase in online quote conversions',
      'Quote turnaround time cut from 2 days to under 2 hours',
      'Fully responsive platform used across desktop and field tablets',
    ],
    testimonial: {
      quote: 'Our sales team finally has a tool that keeps up with our customers.',
      author: 'VP of Sales, Industrial Supplies Co.',
    },
  },
  {
    slug: 'outdoor-gear-dtc-website',
    name: 'Outdoor Gear DTC Website',
    industry: 'Outdoor & Sporting Goods',
    tags: ['Website', 'Ecommerce'],
    result: '+58% conversion rate',
    metric: '58%',
    metricLabel: 'higher conversion rate',
    summary:
      'Rebuilt a slow, dated storefront into a fast, conversion-focused Shopify experience.',
    challenge:
      'The brand’s existing site had poor mobile performance and a cluttered checkout flow that was suppressing conversions.',
    solution:
      'We redesigned the UX around a streamlined product-discovery flow, rebuilt the theme for performance, and simplified checkout to three steps.',
    results: [
      '+58% conversion rate within 90 days',
      'Mobile page speed improved from 41 to 92',
      '-24% cart abandonment',
    ],
    testimonial: {
      quote: 'Site speed and conversions both jumped almost immediately after launch.',
      author: 'Ecommerce Manager, Outdoor Gear Brand',
    },
  },
  {
    slug: 'pet-brand-amazon-brand-defense',
    name: 'Pet Brand Amazon Defense & Growth',
    industry: 'Pet Products',
    tags: ['Amazon Management', 'Brand Protection'],
    result: '-90% counterfeit listings',
    metric: '90%',
    metricLabel: 'reduction in counterfeit listings',
    summary:
      'Cleaned up widespread listing hijacking and rebuilt a defensible, optimized Amazon presence.',
    challenge:
      'Unauthorized sellers and counterfeiters were undercutting the brand’s pricing and damaging its Amazon reputation.',
    solution:
      'We enrolled the brand in enhanced protection programs, filed and tracked enforcement cases, and rebuilt the buy-box strategy with MAP-compliant pricing tools.',
    results: [
      '-90% counterfeit and unauthorized listings within 4 months',
      'Buy Box win rate improved to 97%',
      '+34% net margin recovered from pricing control',
    ],
    testimonial: {
      quote: 'We finally have control over our brand on Amazon again.',
      author: 'Brand Manager, Pet Products Company',
    },
  },
  {
    slug: 'fitness-brand-web-app-automation',
    name: 'Fitness Brand Ops Automation App',
    industry: 'Fitness & Wellness',
    tags: ['Web App', 'Automation'],
    result: '20+ hrs/week saved',
    metric: '20+',
    metricLabel: 'hours saved per week',
    summary:
      'Built an internal web app to automate order routing, returns, and subscription management.',
    challenge:
      'Manual spreadsheet-based order and subscription processes were error-prone and consuming significant staff time.',
    solution:
      'We built a custom internal web app integrated with their payment and shipping providers to automate order routing, returns, and subscription billing logic.',
    results: [
      '20+ hours per week saved on manual operations',
      '-95% order processing errors',
      'Subscription churn visibility improved with real-time dashboards',
    ],
    testimonial: {
      quote: 'It gave our operations team their time back.',
      author: 'COO, Fitness & Wellness Brand',
    },
  },
]

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)
