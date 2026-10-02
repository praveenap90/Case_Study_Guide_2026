// Case studies. All numbers in each case are internally consistent (checked in verify step).
window.DATA = window.DATA || {};

DATA.cases = [
  /* ---------------------------------------------------------------- 1 */
  {
    id: "park-profit",
    title: "Amusement Park Profitability",
    track: ["banking", "consulting"],
    framework: "profitability",
    difficulty: "Medium",
    minutes: 30,
    prompt: "You are advising the CEO of a 2,000-acre amusement park with $150M in annual revenue and 3M visitors a year. Attendance is stable but costs are rising and profit is shrinking. The board wants profit up 20 to 30% within 18 months and is asking whether to lease 1,000 additional acres. What do you recommend?",
    clarify: [
      { q: "What profit measure and timeline?", a: "EBITDA. Target +20 to 30% (about $10M to $15M) within 18 months. About $15M of capital is available." },
      { q: "What changed recently?", a: "Revenue is flat. Operating costs grew about 6% over two years, mostly labor and maintenance." },
      { q: "What does demand look like through the year?", a: "300 operating days. Summer (about 100 days) draws 60% of visitors. Off-season (about 200 days) draws 40%." },
      { q: "What is ride capacity?", a: "40,000 visitors per day. Summer weekends reach about 36,000 (90% of capacity). Off-season weekdays are around 4,000 (10%)." },
      { q: "How are prices set today?", a: "Essentially one price all year, with heavy promotions. No demand-based pricing." }
    ],
    tables: [
      {
        title: "Revenue and spend per visitor (3M visitors)",
        headers: ["Stream", "Revenue", "Per visitor", "Share"],
        rows: [
          ["Gate / admission", "$75.0M", "$25.00", "50%"],
          ["Food & beverage", "$45.0M", "$15.00", "30%"],
          ["Retail", "$18.0M", "$6.00", "12%"],
          ["Parking / ancillary", "$8.0M", "$2.67", "5%"],
          ["Premium experiences", "$4.0M", "$1.33", "3%"],
          ["Total", "$150.0M", "$50.00", "100%"]
        ]
      },
      {
        title: "Operating costs",
        headers: ["Category", "Cost", "% of revenue"],
        rows: [
          ["Labor: operations", "$36.0M", "24.0%"],
          ["Labor: food & retail", "$18.0M", "12.0%"],
          ["COGS: food & beverage", "$13.5M", "9.0%"],
          ["COGS: retail", "$5.4M", "3.6%"],
          ["Utilities & maintenance", "$15.0M", "10.0%"],
          ["Marketing & promotions", "$9.0M", "6.0%"],
          ["Insurance & legal", "$4.5M", "3.0%"],
          ["Total operating cost", "$101.4M", "67.6%"],
          ["EBITDA", "$48.6M", "32.4%"]
        ]
      },
      {
        title: "Below EBITDA",
        headers: ["Item", "Amount"],
        rows: [["Depreciation", "$12.0M"], ["Interest", "$5.0M"], ["Pre-tax income", "$31.6M"]]
      },
      {
        title: "Land use (2,000 acres)",
        headers: ["Use", "Acres"],
        rows: [["Rides / attractions", "400"], ["Food & retail", "100"], ["Parking", "600"], ["Landscaping / walkways", "700"], ["Buffer / infrastructure", "200"]]
      }
    ],
    structure: [
      "<b>Profit = Revenue - Costs.</b> Revenue = visitors x spend per visitor by stream. Costs = labor, COGS, utilities, marketing, insurance.",
      "<b>Revenue levers:</b> price and yield (gate), spend per visitor (F&B, retail, premium), volume (off-season, new capacity).",
      "<b>Cost levers:</b> labor scheduling and automation, energy and maintenance, procurement, marketing mix.",
      "<b>Capacity decision:</b> is land actually the constraint? Compare utilization by season before spending on acres."
    ],
    analysis: [
      {
        h: "1. Diagnose",
        p: "Revenue per visitor is $50 and flat. Costs rose about 6% in two years with no extra attendance, so profit shrinks. Key observation: average utilization is only 25% (10,000 visitors per day vs. 40,000 capacity). Capacity binds only on about 30 peak summer days; the park is nearly empty off-season."
      },
      {
        h: "2. Size the levers (EBITDA impact, full run-rate)",
        p: "<table><tr><th>Lever</th><th>Sizing logic</th><th>EBITDA</th></tr>" +
          "<tr><td>Yield management (dynamic gate pricing)</td><td>+4% on $75M gate revenue, near 100% flow-through</td><td>+$3.0M</td></tr>" +
          "<tr><td>F&B throughput and mix</td><td>+$3 per visitor x 3M = $9M revenue; ~45% flow-through after COGS and labor</td><td>+$4.1M</td></tr>" +
          "<tr><td>Premium tiers (fast pass, packages)</td><td>+$4M revenue at ~75% margin</td><td>+$3.0M</td></tr>" +
          "<tr><td>Off-season programming</td><td>+120K visitors (10% of off-season) x $50 = $6M revenue; ~45% flow-through</td><td>+$2.7M</td></tr>" +
          "<tr><td>Cost efficiency</td><td>~3% of $101.4M (scheduling, energy, procurement)</td><td>+$3.0M</td></tr>" +
          "<tr><th colspan='2'>Total at full realization</th><th>~$15.8M (+32%)</th></tr>" +
          "<tr><th colspan='2'>At 70% realization</th><th>~$11.0M (+23%)</th></tr></table>" +
          "Even after a 30% haircut the plan lands inside the board's 20 to 30% range, using roughly $6 to 8M of the $15M available capital."
      },
      {
        h: "3. The lease decision",
        p: "Land is not the binding constraint. Peak demand exceeds capacity by roughly 4,000 visitors on about 30 days: 30 x 4,000 x $50 = $6M of revenue, around $3M of EBITDA at best. Leasing 1,000 acres (about $2M per year, plus capital to build attractions) cannot be justified by that, and it does nothing for the 200 under-used off-season days. Fix pricing and utilization first. Revisit expansion only if, after yield management, unmet peak demand persists and exceeds roughly 10% of capacity."
      }
    ],
    recommendation: "Do not lease now. Pursue five levers (yield pricing, F&B, premium tiers, off-season events, cost efficiency) for about +$11M EBITDA at 70% realization, roughly +23%. Phase pricing and cost first (fast, low capital), then F&B and premium, then off-season programming. Re-evaluate land after 12 months with peak-demand data. Risks: customer backlash on pricing (mitigate with season-pass protections and online-only dynamic prices) and labor availability.",
    followups: [
      { q: "Why not just raise gate prices across the board?", a: "Demand is very uneven. Peak days are full and can bear higher prices; off-season days need lower prices to stimulate volume. A flat increase hurts the days you want to fill and under-charges the days that sell out. Test elasticity by day type first." },
      { q: "How confident are you in the F&B number?", a: "Medium. It rests on conversion (queues, locations) and mix. I would pilot at the highest-queue locations, measure spend per visitor and flow-through, and scale only if margin holds above ~40%." },
      { q: "What if a competitor matches your pricing?", a: "Yield management is hard to copy well because it needs data on demand by day. The bigger moat is the season-pass base and loyalty. I would watch visitor share by day type and keep a response plan for promotions." },
      { q: "What would change your mind about leasing?", a: "Evidence that unmet peak demand is much larger than 4,000 per day, or a high-margin non-park use for the land (water park, hotel) with payback under about 5 years and a way to also fill off-season days." }
    ],
    pitfalls: [
      "Jumping to leasing without checking utilization by season.",
      "Using one blended price for visitors and one blended margin for all revenue.",
      "Presenting 100% realization as the plan. Always haircut and show a range."
    ]
  },

  /* ---------------------------------------------------------------- 2 */
  {
    id: "ecom-retention",
    title: "E-commerce Retention Decline",
    track: ["tech", "banking"],
    framework: "retention",
    difficulty: "Medium",
    minutes: 30,
    prompt: "An e-commerce platform's monthly retention fell from 65% to 55% over six months. Marketing spent an extra $500K on acquisition, yet profit is falling. Find the root cause and recommend actions.",
    clarify: [
      { q: "How is retention defined?", a: "Share of last month's active users who place at least one order this month. 480K active users today (500K six months ago)." },
      { q: "Do customers acquired a year or more ago retain differently than before?", a: "No. Customers acquired 12+ months ago retain within about 1 point of six months ago." },
      { q: "What changed in acquisition?", a: "Spend moved toward paid social and coupon-led channels. CAC rose by cohort ($12, $15, $18)." },
      { q: "Any product or operations change?", a: "No documented product change. Support tickets are up 22%, concentrated among customers in their first 60 days." },
      { q: "Competition?", a: "Category retention is about 60%. No major new entrant." }
    ],
    tables: [
      {
        title: "Cohort retention (% of cohort still active)",
        headers: ["Cohort", "CAC", "Month 1", "Month 3", "Month 6"],
        rows: [["6 months ago", "$12", "85%", "72%", "65%"], ["3 months ago", "$15", "82%", "68%", "58%"], ["Current", "$18", "78%", "60%", "-"]]
      },
      {
        title: "Current segments",
        headers: ["Segment", "Users", "Orders / month", "AOV", "Retention", "Retained users"],
        rows: [
          ["High value", "50K", "2.5", "$120", "80%", "40.0K"],
          ["Mid value", "200K", "1.5", "$50", "64%", "128.0K"],
          ["Low value", "230K", "0.8", "$15", "42%", "96.6K"],
          ["Total", "480K", "-", "-", "55%", "264.6K"]
        ]
      },
      {
        title: "Unit economics",
        headers: ["Metric", "6 months ago", "Now"],
        rows: [["Blended CAC", "$12", "$18"], ["LTV", "$150", "$130"], ["LTV : CAC", "12.5x", "7.2x"], ["Avg order value", "$45", "$47"]]
      }
    ],
    structure: [
      "<b>Define:</b> retention of whom, over what window.",
      "<b>Who:</b> old vs. new cohorts, value tiers, acquisition channel.",
      "<b>When:</b> month 1, month 3, month 6 of the lifecycle.",
      "<b>Why:</b> customer quality (channel mix), experience (support, delivery), price, external.",
      "<b>So what:</b> size the prize and choose levers."
    ],
    analysis: [
      {
        h: "1. Old vs. new cohorts (the key test)",
        p: "Old customers retain as before, so the product has not broadly deteriorated. The decline is in newly acquired cohorts: month-3 retention fell 72% to 60% while CAC rose from $12 to $18. We are paying 50% more for customers who stay less."
      },
      {
        h: "2. Segment mix",
        p: "Low-value users are 48% of users (230K of 480K) but only 36% of retained users (96.6K of 264.6K) and a small share of revenue (0.8 orders x $15 = $12 per month per user, vs. $300 for high value). Retention gaps by tier are large (80% / 64% / 42%), so a mix shift toward low-value buyers pulls the blended rate down."
      },
      {
        h: "3. Timing",
        p: "The cohort curves separate by month 3. People complete a first order but do not form a habit. Support tickets up 22% in the first 60 days suggests friction in onboarding or delivery on top of lower intent."
      },
      {
        h: "4. Economics",
        p: "LTV : CAC fell from 12.5x to 7.2x. 7.2x is still above the 3x rule of thumb, so acquisition is not unprofitable overall, but the trend is steep and the marginal channels are likely below the average. Calculate LTV : CAC and payback by channel, not blended."
      },
      {
        h: "5. Sizing the prize",
        p: "Each retention point on 480K users is 4,800 retained users. At a blended ~$40 monthly revenue per retained user (illustrative), recovering 5 points is ~240K users x $40 = ~$9.6M per month in revenue before margin. Use channel-level data to refine."
      }
    ],
    recommendation: "Root cause (hypothesis, to validate): low-intent acquisition from coupon and paid-social channels, combined with weak early-life onboarding. Actions: (1) cut or cap spend on channels whose 90-day LTV : CAC is below target, shifting to referral, search and email; (2) build a day-14 to day-60 onboarding and second-order program; (3) fix the top support drivers for new users; (4) tier retention offers by value segment. Measure: cohort curves at day 30/60/90, LTV : CAC by channel, support tickets per new user. Validate with a holdout test by channel.",
    followups: [
      { q: "How would you validate the channel hypothesis?", a: "Join users to acquisition source, compare 90-day retention and revenue by source, and run a geo or audience holdout where a suspect channel is paused." },
      { q: "What if old cohorts were also declining?", a: "Then it would be a product or market problem: look at delivery times, assortment, pricing and competitor activity, and cut old cohorts by tenure to find when the drop began." },
      { q: "Should we stop acquiring low-value users?", a: "Not necessarily. Acquire them only at a CAC that pays back within a threshold (e.g., 6 months) given their expected LTV, and treat them differently in lifecycle marketing." },
      { q: "What metric would you put on the executive dashboard?", a: "Cohort retention curves, LTV : CAC and payback by channel, and share of new users placing a second order within 30 days." }
    ],
    pitfalls: [
      "Declaring a root cause before testing old vs. new cohorts.",
      "Calling LTV : CAC 'healthy' without looking at the trend and channel level.",
      "Mixing 'retention of the base' with 'cohort retention'. State the definition."
    ]
  },

  /* ---------------------------------------------------------------- 3 */
  {
    id: "card-profit",
    title: "Credit Card Profit Decline",
    track: ["banking"],
    framework: "unit",
    difficulty: "Medium",
    minutes: 25,
    prompt: "A credit card issuer has 5M accounts, flat year over year. Portfolio profit fell from $500M to $400M. Credit losses actually improved. What is going on and what would you do?",
    clarify: [
      { q: "Is account count or mix stable?", a: "Accounts are flat at 5M. Spend per account is flat. Mix between revolvers and transactors is stable." },
      { q: "What happened to market interest rates?", a: "The bank's funding cost rose over the year. Customer APRs are mostly variable and reprice with a lag; promotional balances do not reprice." },
      { q: "Any competitive changes?", a: "Competitors raised rewards rates. The bank matched on its flagship card." },
      { q: "Any fee changes?", a: "A late-fee change by regulators and customer behavior reduced fee income." }
    ],
    tables: [
      {
        title: "Annual profit per account ($)",
        headers: ["Line", "Last year", "This year", "Change"],
        rows: [
          ["Interest income", "330", "335", "+5"],
          ["Interchange", "150", "150", "0"],
          ["Fees", "40", "35", "-5"],
          ["Total revenue", "520", "520", "0"],
          ["Funding cost", "60", "75", "-15"],
          ["Rewards", "110", "120", "-10"],
          ["Charge-offs (credit loss)", "120", "115", "+5"],
          ["Operating cost", "100", "100", "0"],
          ["Marketing", "30", "30", "0"],
          ["Total cost", "420", "440", "-20"],
          ["Profit per account", "100", "80", "-20"],
          ["Portfolio profit (5M accounts)", "$500M", "$400M", "-$100M"]
        ]
      }
    ],
    structure: [
      "<b>Per-account P&L:</b> revenue (interest, interchange, fees) minus funding, rewards, credit loss, opex, marketing.",
      "<b>Compare line by line</b> and watch for offsetting moves.",
      "<b>Attribute the -$20 per account</b> to drivers, then to levers."
    ],
    analysis: [
      {
        h: "1. Where the $100M went",
        p: "Revenue is flat at $520 per account. Costs rose $20 per account = $100M. The pieces: funding +$15 (=$75M), rewards +$10 (=$50M), fee income -$5 (=$25M), offset by +$5 interest (+$25M) and charge-offs improving by $5 (+$25M). Net: -$75M - $50M - $25M + $25M + $25M = -$100M."
      },
      {
        h: "2. The trap",
        p: "Credit losses improved, so a risk-first narrative would miss the problem. The decline is a margin squeeze: funding costs rose faster than yields repriced, and the bank paid for competition with richer rewards. Interest income only rose $5 despite higher rates because of repricing lag and promotional balances."
      },
      {
        h: "3. Levers",
        p: "Pricing: accelerate APR pass-through where permissible, and review promo balance expiry. Rewards: tier by spend and engagement, rebalance categories, raise redemption friction on low-value segments, and protect top spenders. Fees: replace lost late-fee income with value-based fees (annual fee tiers) only where the value proposition supports it. Funding: deposit mix and hedging. Each $5 per account is worth $25M."
      }
    ],
    recommendation: "Treat this as margin compression, not a credit problem. Prioritize (1) APR repricing and promo-balance management (potential +$5 to +$8 per account), (2) rewards rationalization targeted at low-engagement, low-spend accounts (+$4 to +$6), (3) a fee and product-tier review (+$2 to +$3). Together +$11 to +$17 per account, or $55M to $85M, recovering roughly half to most of the decline. Watch attrition and NPS as guardrails, and keep underwriting unchanged since credit is performing.",
    followups: [
      { q: "How would you know if rewards cuts hurt retention?", a: "Run a controlled rollout by segment with a holdout, and track spend per account, attrition and active rate. Cuts that move low-spend accounts barely affect profit but save cost; cuts for top spenders risk attrition." },
      { q: "What if interest income per account fell instead of rose?", a: "I would look at balance and revolve rate (mix between revolvers and transactors), promo balances, APR mix and delinquency-driven non-accrual." },
      { q: "How do credit losses relate to funding cost?", a: "Independent drivers in the P&L but linked in strategy: higher rates stress customers, so I would watch early delinquency as a leading indicator and avoid cutting loss provisions based on one good year." },
      { q: "Which single number would you show the CEO?", a: "Profit per account bridge: $100 to $80, with funding -$15, rewards -$10, fees -$5, interest +$5, credit +$5." }
    ],
    pitfalls: [
      "Assuming credit losses must be the cause.",
      "Looking only at the portfolio total instead of per-account lines.",
      "Not reconciling your bridge back to the $100M."
    ]
  },

  /* ---------------------------------------------------------------- 4 */
  {
    id: "grocery-entry",
    title: "Grocery Chain: Launch Delivery?",
    track: ["consulting"],
    framework: "entry",
    difficulty: "Medium",
    minutes: 30,
    prompt: "A regional grocery chain with 40 stores in one metro area is considering launching home delivery. It would invest $25M. Should it go?",
    clarify: [
      { q: "What is the metro size?", a: "2M households. The chain's current shoppers are about 20% of households (400K)." },
      { q: "What is the goal and timeline?", a: "Payback within 4 years and no damage to the store business." },
      { q: "Competition?", a: "Two national players already deliver, with about 20% of metro households ordering groceries online at least monthly." },
      { q: "Economics per order?", a: "Average basket $90. Gross margin on groceries ~25%. Picking, packing and last mile cost about $11 per order. Marketing and platform cost ~$2 per order." }
    ],
    tables: [
      {
        title: "Key assumptions",
        headers: ["Item", "Value"],
        rows: [["Households in metro", "2M"], ["Online-grocery adopters", "20% (400K)"], ["Target share of adopters in year 3", "10% (40K households)"], ["Orders per household per month", "2"], ["Average basket", "$90"], ["Gross margin", "25%"], ["Fulfillment cost per order", "$11"], ["Marketing / platform per order", "$2"], ["Investment", "$25M"]]
      }
    ],
    structure: [
      "<b>Market:</b> size, growth, profitability.",
      "<b>Ability to win:</b> store network for picking, brand, customer data, delivery capability.",
      "<b>How to enter:</b> build in-house, partner with a delivery platform, or acquire.",
      "<b>Economics:</b> per-order contribution, volume ramp, payback, cannibalization."
    ],
    analysis: [
      {
        h: "1. Volume",
        p: "400K adopters x 10% share = 40K households. x 2 orders x 12 months = 960K orders per year."
      },
      {
        h: "2. Per-order economics",
        p: "Gross profit = $90 x 25% = $22.50. Less fulfillment $11 and marketing / platform $2 = $9.50 contribution per order."
      },
      {
        h: "3. Annual contribution and payback",
        p: "960K orders x $9.50 = $9.1M per year. Payback on $25M = 2.7 years at full run-rate, about 3.5 to 4 years including a 12-month ramp. Revenue is 960K x $90 = $86M per year."
      },
      {
        h: "4. Cannibalization and sensitivity",
        p: "Cannibalization matters a lot. If a share of delivery orders would have been store trips anyway, the chain loses that store gross profit ($22.50 per basket). Incremental profit per order = $9.50 - (cannibalized share x $22.50). At 20% cannibalization that is about $5.00 per order (960K x $5 = ~$4.8M per year, payback ~5 years). At 40% it falls to about $0.50 per order and the project does not pay back. Share is the other swing factor: at 5% share (480K orders) the gross contribution is only ~$4.6M. Each $1 per order of fulfillment cost is ~$1M per year."
      }
    ],
    recommendation: "Not yet a full go. On gross numbers the project pays back in about 3.5 to 4 years including ramp, which is borderline, and it falls apart if many delivery orders just replace store trips. Run a pilot (or a partnership with a delivery platform) in the 10 to 12 highest-density stores before committing $25M. Scale only if the pilot shows share near 10%, fulfillment cost per order at or below $11, and cannibalization at or below ~20%. Protect the store base with membership and pickup options.",
    followups: [
      { q: "How would you reduce fulfillment cost?", a: "Batch picking in stores with highest density, delivery windows to cluster routes, minimum basket or fee thresholds, and partnership with a gig platform for the last mile." },
      { q: "Build vs. partner?", a: "Partnering is faster and cheaper but gives away margin and customer data. Building has higher control and long-term margin but needs capital and capability. A phased approach: partner first, build in dense zones." },
      { q: "How do competitors react?", a: "Expect promotions and free-delivery offers. Differentiate on freshness, assortment of local brands and price perception, not on delivery fees." }
    ],
    pitfalls: [
      "Stopping at market size without per-order economics.",
      "Ignoring cannibalization of store sales.",
      "Not stating what would make you say no."
    ]
  },

  /* ---------------------------------------------------------------- 5 */
  {
    id: "dau-drop",
    title: "Social App: DAU Down 8%",
    track: ["tech"],
    framework: "metric",
    difficulty: "Easy",
    minutes: 20,
    prompt: "Daily active users (DAU) of a social app fell 8% week over week. As the data analyst, how do you figure out what happened and what to do?",
    clarify: [
      { q: "Is the data reliable? Any logging or definition change?", a: "No changes to logging or the DAU definition. Backend dashboards agree with the data warehouse." },
      { q: "Which segments are affected?", a: "Android only, about 55% of DAU, down about 14%. iOS and web are flat." },
      { q: "When did it start?", a: "On Tuesday, the day after Android release 8.4 rolled out to 100% of users." },
      { q: "What about new vs. existing users?", a: "New-user signups are normal. The drop is in existing users who open the app fewer days per week." },
      { q: "Where do sessions come from?", a: "Sessions started from push notifications on Android fell by about 35%. Organic app opens are flat." }
    ],
    tables: [
      {
        title: "Weekly change",
        headers: ["Segment", "Share of DAU", "DAU change"],
        rows: [["Android", "55%", "-14%"], ["iOS", "35%", "0%"], ["Web", "10%", "0%"], ["Total", "100%", "-7.7% (approx. -8%)"]]
      }
    ],
    structure: [
      "<b>Is it real?</b> Logging, definitions, pipeline.",
      "<b>Where?</b> Platform, version, geography, user tenure, funnel step.",
      "<b>Why?</b> Internal (release, experiment, notification) vs. external (seasonality, competitor, outage).",
      "<b>Fix and guardrails.</b>"
    ],
    analysis: [
      {
        h: "1. Check the arithmetic",
        p: "Android is 55% of DAU and fell 14%: 0.55 x 14% = 7.7 points of the total. So essentially all of the 8% drop comes from Android."
      },
      {
        h: "2. Narrow the mechanism",
        p: "Timing matches the 8.4 release. Existing users, not new ones, are affected, and push-initiated sessions fell 35% while organic opens are flat. That points to a notification delivery or permission problem introduced in the release (for example a changed notification channel, token registration bug, or OS permission prompt)."
      },
      {
        h: "3. Confirm",
        p: "Compare 8.4 vs. older versions on push-delivery rate, token registration success, opt-in rate and push-to-open. If old versions are unaffected, it is the release. Also check Android OS versions and any experiments running at the same time."
      }
    ],
    recommendation: "Hotfix or roll back the push component of 8.4, re-register tokens for affected users, and monitor DAU by version. Add guardrail metrics for push delivery and opt-in to the release checklist, and stage rollouts (1%, 10%, 50%) with automatic halts on a drop in sessions or notification metrics.",
    followups: [
      { q: "What if the drop were across all platforms?", a: "Then I would suspect an external or backend cause: outage, seasonality, competitor launch, a ranking or feed-algorithm change, or acquisition changes. I would check day-of-week patterns and year-over-year seasonality." },
      { q: "How would you size the revenue impact?", a: "DAU lost x ad impressions per DAU x revenue per impression, per day, until fixed; compare with a counterfactual from iOS trend." },
      { q: "How do you prevent this next time?", a: "Staged rollouts, automatic guardrail alerts, and a release dashboard with notification and session metrics by version." }
    ],
    pitfalls: [
      "Brainstorming ten causes before looking at the data.",
      "Forgetting to check data quality first.",
      "Not computing that Android's share explains the whole drop."
    ]
  },

  /* ---------------------------------------------------------------- 6 */
  {
    id: "pump-maker",
    title: "Industrial Pump Maker: Profit Down",
    track: ["consulting"],
    framework: "profitability",
    difficulty: "Medium",
    minutes: 30,
    prompt: "A Midwest manufacturer of industrial pumps has flat revenue of $400M, but profit fell from $40M to $28M over two years. Find out why and recommend what to do.",
    clarify: [
      { q: "What products do they sell?", a: "Two lines: Premium (engineered, custom) and Standard (commodity catalog pumps)." },
      { q: "What happened to prices?", a: "Prices are flat on both lines." },
      { q: "What happened to costs?", a: "Steel and component costs are up about 8%. Fixed costs are $60M and unchanged." },
      { q: "Competition?", a: "Imports are undercutting the Standard line. Premium customers are buying fewer custom units as some move to cheaper catalog pumps." }
    ],
    tables: [
      {
        title: "Product line economics ($M)",
        headers: ["", "Two years ago", "Now"],
        rows: [
          ["Premium revenue", "200", "160"],
          ["Premium contribution margin", "30% (60)", "30% (48)"],
          ["Standard revenue", "200", "240"],
          ["Standard contribution margin", "20% (40)", "16.7% (40)"],
          ["Total revenue", "400", "400"],
          ["Total contribution", "100", "88"],
          ["Fixed costs", "60", "60"],
          ["Profit", "40", "28"]
        ]
      }
    ],
    structure: [
      "<b>Profit = Revenue - Costs.</b> Revenue flat, so look at mix and margins.",
      "<b>Revenue:</b> volume, price, mix by line.",
      "<b>Costs:</b> variable cost by line (materials), fixed costs.",
      "<b>External:</b> imports, steel prices."
    ],
    analysis: [
      {
        h: "1. Decompose the $12M decline",
        p: "Mix effect: Premium revenue fell $40M (at 30% = -$12M) and Standard rose $40M (at the old 20% = +$8M), net -$4M. Margin compression on Standard: $240M x (20% - 16.7%) = -$8M. Total = -$12M, matching the drop from $40M to $28M."
      },
      {
        h: "2. Interpret",
        p: "One third of the decline is mix (customers trading down), two thirds is margin compression on the Standard line (steel costs, import competition keeping price flat). Premium margin held at 30%, so the premium franchise itself is healthy; it is losing volume."
      },
      {
        h: "3. Options",
        p: "Pricing: surcharge or index-linked pricing on Standard to pass steel through, where competitive. Cost: re-source steel, redesign Standard products to reduce material, consolidate plants. Mix: win back Premium via value-added service, retrofits and customization; prevent trade-down with good-better-best packages. Strategic: decide whether to defend or de-emphasize commodity Standard, where imports have a cost advantage."
      }
    ],
    recommendation: "Prioritize protecting the Premium line (each $10M of premium revenue is $3M of profit vs. $2M of Standard at the old margin). In parallel, restore Standard margin to ~19% via steel pass-through and sourcing: +2.3 points on $240M is about +$5.5M. Together with winning back $20M of Premium (+$6M), profit would recover to roughly $39M. Risks: customer pushback on surcharges and further import pressure.",
    followups: [
      { q: "What if Standard is structurally unprofitable?", a: "Consider exiting the least profitable SKUs, outsourcing to a low-cost manufacturer under our brand, or focusing capacity on Premium." },
      { q: "How would you explain the mix effect to the CEO?", a: "We sold the same dollars but swapped $40M of 30%-margin products for $40M of 20%-margin products, that alone costs $4M." }
    ],
    pitfalls: [
      "Cutting fixed costs first when fixed costs did not change.",
      "Missing the mix effect because revenue is flat."
    ]
  },

  /* ---------------------------------------------------------------- 7 */
  {
    id: "bank-fintech",
    title: "Bank Acquires a Payments Fintech",
    track: ["banking", "consulting"],
    framework: "ma",
    difficulty: "Hard",
    minutes: 35,
    prompt: "A regional bank is considering acquiring a payments fintech for $300M. The fintech has $40M of revenue growing 35% per year and is slightly loss-making. Should the bank do the deal, and at what maximum price?",
    clarify: [
      { q: "Why does the bank want it?", a: "To offer modern payments to its 2M retail customers and reduce its payment-processing costs." },
      { q: "What are comparable valuations?", a: "Listed payments fintechs trade at 6 to 8 times revenue." },
      { q: "What synergies are plausible?", a: "Cross-sell to bank customers and insourcing of processing the bank pays third parties for." },
      { q: "Any constraints?", a: "The bank has capacity for a deal up to about $300M and wants returns above its cost of capital within five years." }
    ],
    tables: [
      {
        title: "Deal facts",
        headers: ["Item", "Value"],
        rows: [["Fintech revenue", "$40M, +35% / year"], ["Fintech EBITDA margin", "-5% (-$2M)"], ["Asking price", "$300M (7.5x revenue)"], ["Bank retail customers", "2M"], ["Expected cross-sell adoption", "3% of customers"], ["Revenue per adopter per year", "$60"], ["Bank's third-party processing spend", "$12M per year"], ["Share of processing that can be insourced", "40%"], ["Annual integration cost (year 1-2)", "$4M"]]
      }
    ],
    structure: [
      "<b>Strategic fit:</b> buy vs. build vs. partner.",
      "<b>Standalone value:</b> growth, margins, comparable multiples.",
      "<b>Synergies:</b> revenue and cost, with probability and timing.",
      "<b>Price vs. value, and risks.</b>"
    ],
    analysis: [
      {
        h: "1. Standalone value",
        p: "At 6 to 8x revenue, $40M of revenue is worth $240M to $320M. The asking price of $300M (7.5x) is toward the high end, so the bank is already paying close to full standalone value."
      },
      {
        h: "2. Synergies",
        p: "Revenue: 2M customers x 3% adoption x $60 = $3.6M per year. Cost: $12M x 40% = $4.8M per year. Total run-rate synergies = $8.4M per year. Less integration cost of $4M per year for two years."
      },
      {
        h: "3. Value of synergies",
        p: "Capitalized at, say, 8x on the cost savings ($4.8M x 8 = ~$38M) and a lower multiple on uncertain revenue synergies (say 4x on $3.6M = ~$14M), synergies are worth ~$50M before integration cost and probability weighting. Haircut to 50% for execution risk: about $25M."
      },
      {
        h: "4. Verdict",
        p: "Walk-away price = standalone value + share of synergies = ~$280M (7x revenue) + at most ~$20M of synergies. At $300M the bank would pay away all synergies and carry integration and technology risk, leaving little margin of safety. The financial case is thin; the strategic case rests on growth of 35% sustained."
      }
    ],
    recommendation: "Do not pay $300M. Negotiate to roughly $250M to $275M (about 6.3 to 6.9x revenue), or structure part of the price as an earn-out tied to growth, or take a minority stake with a commercial partnership as an alternative. Make the deal contingent on diligence of retention of key engineers, customer concentration and regulatory approvals. If the seller will not move, partner instead.",
    followups: [
      { q: "What are the main integration risks?", a: "Talent retention, culture clash, technology integration, regulatory approvals and bank compliance requirements on the fintech's product." },
      { q: "How would you structure an earn-out?", a: "Fixed payment at around standalone value, with extra consideration if revenue growth and margin targets are met in the next 2 to 3 years, so the seller shares the risk." },
      { q: "Why not build in-house?", a: "Build costs less but is slower and riskier; time to market of 2 to 3 years against a 35% growth market. A partnership is a middle path." }
    ],
    pitfalls: [
      "Counting synergies at 100% and paying them all to the seller.",
      "Ignoring integration cost and talent risk."
    ]
  },

  /* ---------------------------------------------------------------- 8 */
  {
    id: "call-center",
    title: "Contact Center Cost Reduction",
    track: ["banking", "consulting"],
    framework: "ops",
    difficulty: "Medium",
    minutes: 25,
    prompt: "A retail bank spends $130M per year on its customer contact center. The COO wants costs down 15% without hurting customer satisfaction. How would you do it?",
    clarify: [
      { q: "What is the call volume and mix?", a: "8M calls per year in three types: simple (balance, password reset), transactional (disputes, card replacement) and complex (fraud, complaints, loans)." },
      { q: "What does each type cost?", a: "Simple $8 per call, transactional $15, complex $30." },
      { q: "Is there a digital channel?", a: "A mobile app exists but is not integrated with the IVR. About 50% of simple calls could be handled in the app." },
      { q: "How many calls are repeats?", a: "About 5% of complex calls are repeat contacts for the same issue." }
    ],
    tables: [
      {
        title: "Call volumes and cost",
        headers: ["Type", "Share", "Calls / year", "Cost per call", "Total cost"],
        rows: [["Simple", "35%", "2.8M", "$8", "$22.4M"], ["Transactional", "40%", "3.2M", "$15", "$48.0M"], ["Complex", "25%", "2.0M", "$30", "$60.0M"], ["Total", "100%", "8.0M", "-", "$130.4M"]]
      }
    ],
    structure: [
      "<b>Cost = Volume x Cost per call</b>, by call type.",
      "<b>Volume levers:</b> deflection to digital, fixing root causes of repeat calls.",
      "<b>Unit-cost levers:</b> handle time, automation, staffing, location.",
      "<b>Risks:</b> customer satisfaction, one-time cost."
    ],
    analysis: [
      {
        h: "1. Target",
        p: "15% of $130M is about $19.5M."
      },
      {
        h: "2. Levers",
        p: "<table><tr><th>Lever</th><th>Logic</th><th>Savings</th></tr>" +
          "<tr><td>Deflect simple calls to the app</td><td>2.8M x 50% = 1.4M calls x $8</td><td>$11.2M</td></tr>" +
          "<tr><td>Reduce handle time on transactional calls 10%</td><td>$48M x 10%</td><td>$4.8M</td></tr>" +
          "<tr><td>Cut repeat complex calls</td><td>2.0M x 5% = 100K calls x $30</td><td>$3.0M</td></tr>" +
          "<tr><th colspan='2'>Total</th><th>$19.0M (~14.6%)</th></tr></table>"
      },
      {
        h: "3. Close the gap and de-risk",
        p: "$19.0M is within a rounding of 15%; a small additional lever (scheduling, or moving some transactional volume to a lower-cost site) closes it. One-time costs: IVR-app integration and agent tools (assume ~$3M). Quality guardrails: customer satisfaction, first-contact resolution, and complaint rate; do not cut complex-call handling time, because those customers are the most at risk."
      }
    ],
    recommendation: "Pursue three levers in sequence: digital deflection of simple calls (largest and fastest), agent tooling to cut transactional handle time, and root-cause fixes for repeat complex calls. Expected $19M of annual savings against roughly $3M one-time cost, payback under three months at full run-rate. Track satisfaction and first-contact resolution weekly; pause any lever that degrades them.",
    followups: [
      { q: "What if customers do not adopt the app?", a: "Add proactive nudges in the IVR, in-call SMS links, and simplify the top journeys. Measure adoption by journey and iterate." },
      { q: "Would you offshore?", a: "Possible for simple and transactional calls, but weigh regulatory, quality and brand risks. Do it after digital deflection, since that reduces the volume to move." },
      { q: "How do you protect customer experience?", a: "Guardrail metrics, staged rollout, and keeping humans for complex and sensitive calls." }
    ],
    pitfalls: [
      "Across-the-board headcount cuts.",
      "Not tying levers to specific cost pools."
    ]
  }
];
