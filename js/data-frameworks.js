// Frameworks + employer tracks
window.DATA = window.DATA || {};
const N = (t, ...c) => ({ t, c });

DATA.tracks = [
  {
    id: "banking",
    name: "Banking & Fintech",
    examples: "Capital One, JPMorgan, Amex, Goldman, fintechs",
    tests: "Quantitative rigor, unit economics, risk vs. return, data-driven decisions.",
    style: "Often data-heavy: you get tables and are asked to find the insight. Expect math under time pressure and follow-ups that stress-test your assumptions.",
    tips: [
      "Think in per-account / per-customer economics before totals.",
      "Always separate revenue, funding cost, credit loss, rewards and operating cost for card and lending cases.",
      "State the metric definition before you analyze it (retention of what? loss rate on what base?).",
      "Close with a recommendation, the risk, and how you would measure success."
    ]
  },
  {
    id: "consulting",
    name: "Consulting",
    examples: "McKinsey, Bain, BCG, Deloitte, Oliver Wyman",
    tests: "Structured, hypothesis-driven problem solving. MECE structures, synthesis, and communication.",
    style: "Interviewer-led or candidate-led conversation. You are scored on structure, math, creativity and a crisp final recommendation.",
    tips: [
      "Take 60 to 90 seconds to build a structure, then say it out loud top-down.",
      "Lead with a hypothesis and update it as data arrives.",
      "Signpost: 'I would like to look at three areas. First...'",
      "End with answer first, then 2 or 3 supporting reasons, then risks and next steps."
    ]
  },
  {
    id: "tech",
    name: "Big Tech",
    examples: "Google, Meta, Amazon, Microsoft, startups",
    tests: "Product sense, metrics, analytical judgment, trade-offs, estimation.",
    style: "Metric diagnosis ('DAU dropped 8%, why?'), growth and product cases, plus estimation. Often paired with SQL or experiment-design questions.",
    tips: [
      "Define the metric and check for instrumentation or data problems first.",
      "Segment aggressively: platform, geography, cohort, funnel step, time.",
      "Separate internal causes (release, bug, experiment) from external (seasonality, competitor, outage).",
      "Name a guardrail metric for every recommendation."
    ]
  }
];

DATA.frameworks = [
  {
    id: "profitability",
    name: "Profitability",
    tags: ["consulting", "banking", "tech"],
    when: "Profit is falling, below target, or the client wants to raise it. Triggers: 'profits are down', 'margins are shrinking', 'how do we increase profit?'",
    tree: N("Profit = Revenue - Costs",
      N("Revenue = Volume x Price x Mix",
        N("Volume", N("Market size x share"), N("Customers x frequency"), N("Capacity / utilization")),
        N("Price", N("List price"), N("Discounts and promotions"), N("Price realization vs. competitors")),
        N("Mix", N("Product / service mix"), N("Customer segment mix"), N("Channel / geography mix"))
      ),
      N("Costs = Fixed + Variable",
        N("Fixed", N("Rent, depreciation, insurance"), N("Salaried labor, overhead")),
        N("Variable", N("COGS / materials"), N("Hourly labor, commissions"), N("Fulfillment, payment fees"))
      ),
      N("Context: internal vs. external",
        N("Industry trend, competitors, regulation"), N("Timing: when did it change?"), N("Which product / segment / region?"))
    ),
    steps: [
      "Clarify: the company, products, time frame, and the goal (a number, a date).",
      "Locate the problem: revenue vs. costs? Trend vs. one-off? Compare to competitors.",
      "Drill: revenue into volume, price, mix. Costs into fixed and variable and by category.",
      "Find the root cause with data. Ask what changed and when.",
      "Recommend with sizing, risks, and next steps."
    ],
    pitfalls: [
      "Jumping to cost cutting before you know whether revenue or cost moved.",
      "Ignoring mix: revenue can be flat while profit falls because sales shifted to lower-margin products.",
      "Forgetting the baseline: always size impact against current profit."
    ],
    example: "Revenue is flat at $400M but profit fell from $40M to $28M. Split into mix shift (-$4M) and margin compression (-$8M). See the Industrial Pump Maker case."
  },
  {
    id: "sizing",
    name: "Market Sizing & Estimation",
    tags: ["consulting", "tech", "banking"],
    when: "'How many X are sold / used / needed in Y?' Also used as the first step of market entry and growth cases.",
    tree: N("Pick an approach",
      N("Top-down (population based)",
        N("Population"), N("Segment: who is eligible"), N("Penetration: who uses it"), N("Frequency x quantity")),
      N("Bottom-up (supply or unit based)",
        N("Number of sellers / locations"), N("Capacity or sales per seller"), N("Operating days / utilization")),
      N("Stock and flow (durable goods)",
        N("Stock in use"), N("Replacement = stock / lifespan"), N("Plus new units (growth, first purchase)"))
    ),
    steps: [
      "Restate the question and clarify scope (geography, year, units).",
      "Choose the approach and tell the interviewer why.",
      "Break into 3 to 5 inputs. Use round numbers you can multiply (US population 335M, 130M households).",
      "Calculate out loud. Keep units in every line.",
      "Sanity check against a second approach or a per-person figure. State a range."
    ],
    pitfalls: [
      "Using exact numbers that make the math slow. Round aggressively.",
      "Forgetting a segment (commercial vehicles, new units, tourists).",
      "No sanity check. Always compare to a per-capita or per-household figure."
    ],
    example: "US car tires per year: about 280M vehicles x 4 tires / ~3.75 year life is ~300M replacements, plus ~60M original-equipment tires from ~15M new vehicles, so roughly 350 to 400M. See the Estimation tab."
  },
  {
    id: "entry",
    name: "Market Entry",
    tags: ["consulting", "tech", "banking"],
    when: "A company wants to enter a new geography, segment or product category.",
    tree: N("Should we enter?",
      N("Market attractiveness", N("Size and growth"), N("Profitability / margins"), N("Customer needs"), N("Competitive intensity, barriers")),
      N("Our ability to win", N("Capabilities and assets"), N("Brand and customer access"), N("Cost position")),
      N("How to enter", N("Build (organic)"), N("Buy (acquire)"), N("Partner / JV / license")),
      N("Economics and risk", N("Investment needed"), N("Revenue ramp, breakeven, payback"), N("Key risks and mitigations"))
    ),
    steps: [
      "Clarify objective (profit target, timeline, budget).",
      "Size the market and estimate the share we can win.",
      "Assess competition and our right to win.",
      "Compare entry modes by cost, speed, control, risk.",
      "Compute payback / breakeven and give a go / no-go with conditions."
    ],
    pitfalls: [
      "Stopping at 'the market is big'. Big markets can still be unprofitable.",
      "Ignoring that incumbents will respond."
    ],
    example: "Regional grocer launching delivery in a metro: size the households, share, order economics, then payback on a $25M investment."
  },
  {
    id: "growth",
    name: "Growth Strategy",
    tags: ["consulting", "tech"],
    when: "'How do we grow revenue from $X to $Y?' or 'what should the CEO do next?'",
    tree: N("Growth levers (Ansoff)",
      N("Existing products, existing markets", N("Win share"), N("Increase frequency / basket"), N("Raise price")),
      N("New products, existing customers", N("Adjacent products"), N("Premium tiers, bundles")),
      N("Existing products, new markets", N("New geographies"), N("New segments or channels")),
      N("New products, new markets", N("Diversification, acquisition"))
    ),
    steps: [
      "Quantify the gap (current vs. target) and the timeline.",
      "List levers from the tree, then size each one roughly.",
      "Rank by impact, effort, risk, fit with capabilities.",
      "Recommend a sequenced plan with quick wins first."
    ],
    pitfalls: [
      "Listing levers without sizing them.",
      "Proposing diversification when core levers are untapped."
    ],
    example: "Park case: yield management, F&B, premium tiers and off-season programming all grow the existing business before any new land."
  },
  {
    id: "pricing",
    name: "Pricing",
    tags: ["consulting", "tech", "banking"],
    when: "Price a new product, change an existing price, or respond to a competitor price move.",
    tree: N("Pricing inputs",
      N("Cost (floor)", N("Variable cost per unit"), N("Fully loaded cost")),
      N("Customer value (ceiling)", N("Willingness to pay by segment"), N("Value vs. best alternative")),
      N("Competition", N("Competitor prices"), N("Substitutes")),
      N("Strategy", N("Penetration vs. premium"), N("Fences: tiers, timing, channel"))
    ),
    steps: [
      "Understand the goal (profit, share, adoption).",
      "Set the floor (cost) and ceiling (value to the customer).",
      "Check competitors and elasticity: how does volume respond?",
      "Compute the breakeven volume change for a price move: required volume change = price change / (new margin).",
      "Test (A/B or pilot) before rolling out."
    ],
    pitfalls: [
      "Cost-plus pricing only. It ignores what customers value.",
      "Ignoring that a 5% price cut on a 20% margin needs ~33% more volume to break even."
    ],
    example: "Annual fee on a premium card: compare fee revenue gained vs. attrition, and rewards cost of the engaged segment."
  },
  {
    id: "ma",
    name: "M&A / Acquisition",
    tags: ["consulting", "banking"],
    when: "Should we buy company X? What is it worth to us?",
    tree: N("Should we acquire?",
      N("Strategic fit", N("Why buy vs. build vs. partner"), N("Capabilities, customers, technology")),
      N("Target standalone value", N("Revenue, growth, margins"), N("Valuation multiple vs. comps")),
      N("Synergies", N("Revenue (cross-sell)"), N("Cost (procurement, overlap)"), N("Probability and timing")),
      N("Price and risk", N("Value to us vs. price"), N("Integration, culture, regulatory risk"))
    ),
    steps: [
      "Clarify the strategic rationale.",
      "Value the target standalone.",
      "Size synergies and haircut them (most are realized late and partially).",
      "Compare total value to price. Walk-away price = standalone value + share of synergies.",
      "Name integration risks and alternatives."
    ],
    pitfalls: [
      "Paying away 100% of synergies to the seller.",
      "Counting revenue synergies at full value."
    ],
    example: "Bank buying a payments fintech for $300M. See the case."
  },
  {
    id: "ops",
    name: "Operations & Cost Reduction",
    tags: ["banking", "consulting"],
    when: "Cut cost by X%, improve efficiency, or fix a process.",
    tree: N("Cost = Volume x Cost per unit",
      N("Reduce volume", N("Deflect to self-service"), N("Fix root causes (repeat contacts, errors)")),
      N("Reduce cost per unit", N("Automate or simplify steps"), N("Speed (handle time)"), N("Staffing / scheduling"), N("Sourcing, offshore, outsource")),
      N("One-time vs. recurring", N("Investment to achieve savings"), N("Payback and risks to quality"))
    ),
    steps: [
      "Break total cost into volume and cost per unit by category.",
      "Find the biggest and most addressable pools (Pareto).",
      "Match levers to pools and size each one.",
      "Check service-quality risk and one-time cost.",
      "Sequence by payback."
    ],
    pitfalls: [
      "Cutting across the board instead of by pool.",
      "Ignoring customer impact (cheaper call, angrier customer)."
    ],
    example: "Contact center: $130M cost, 15% target. Deflect simple calls, cut handle time, reduce repeat calls."
  },
  {
    id: "retention",
    name: "Retention & Churn",
    tags: ["tech", "banking", "consulting"],
    when: "Retention is falling, customers leave, or LTV is dropping.",
    tree: N("Why are we losing customers?",
      N("Who: segment", N("By value tier"), N("By acquisition channel / cohort"), N("By geography / product")),
      N("When: lifecycle", N("Early (onboarding)"), N("Mid (habit)"), N("Late (competitor, price)")),
      N("Why: cause", N("Product / experience (bugs, delivery, support)"), N("Price / value"), N("Customer quality (low-intent acquisition)"), N("External (competitor, seasonality)")),
      N("Fix: levers", N("Acquire better"), N("Onboard better"), N("Engage / reward"), N("Win back"))
    ),
    steps: [
      "Define retention precisely (of whom, over what window).",
      "Compare cohorts: are old customers still retaining? If yes, the problem is new customers. If no, the problem is the product.",
      "Segment by value, channel, lifecycle stage.",
      "Test hypotheses against data. Then size the prize: users x retention points x value per user.",
      "Recommend levers with measurement plan."
    ],
    pitfalls: [
      "Blaming marketing or product without the old-vs-new cohort test.",
      "Averaging across segments that behave very differently."
    ],
    example: "E-commerce retention fell 65% to 55% while CAC rose. See the case."
  },
  {
    id: "metric",
    name: "Metric Diagnosis (Product)",
    tags: ["tech"],
    when: "'DAU / revenue / conversion dropped X%. What happened?'",
    tree: N("Why did the metric move?",
      N("Is it real?", N("Instrumentation or logging change"), N("Definition change"), N("Data pipeline delay")),
      N("Internal causes", N("Release or bug"), N("Experiment or config"), N("Marketing / notification change")),
      N("External causes", N("Seasonality, holiday"), N("Competitor, outage, news"), N("OS / platform change")),
      N("Where: segment cuts", N("Platform, version"), N("Geography"), N("New vs. existing users"), N("Funnel step"))
    ),
    steps: [
      "Define the metric, size and timing of the change.",
      "Rule out data issues first.",
      "Cut by segment until the drop concentrates.",
      "Line up the timing with launches and external events.",
      "Propose fix, rollback or experiment, and a guardrail metric."
    ],
    pitfalls: [
      "Brainstorming causes without cutting the data.",
      "Forgetting seasonality and day-of-week effects."
    ],
    example: "DAU down 8% in a week, concentrated on Android after release 8.4. See the case."
  },
  {
    id: "unit",
    name: "Unit Economics & Credit",
    tags: ["banking", "tech"],
    when: "Card, lending or subscription profitability. 'Is this customer / product profitable?'",
    tree: N("Profit per account",
      N("Revenue", N("Interest income (balance x yield)"), N("Interchange (spend x rate)"), N("Fees")),
      N("Cost", N("Funding cost"), N("Credit losses = PD x LGD x EAD"), N("Rewards"), N("Servicing / operations"), N("Acquisition (CAC)")),
      N("Lifetime view", N("Retention / attrition"), N("LTV = profit per period x expected life"), N("LTV : CAC and payback"))
    ),
    steps: [
      "Build the per-account P&L.",
      "Compare periods or segments line by line.",
      "Look for offsetting moves (a line that improved can hide one that worsened).",
      "Tie each driver to a lever: price, rewards, underwriting, servicing.",
      "Quantify with accounts x per-account change."
    ],
    pitfalls: [
      "Mixing revolvers and transactors. They have very different economics.",
      "Treating charge-offs as the only risk line."
    ],
    example: "Card profit per account fell $100 to $80. Charge-offs improved; funding cost, rewards and fees explain the decline."
  },
  {
    id: "product",
    name: "Product Deep-Dive",
    tags: ["banking", "tech"],
    when: "The interviewer shows you a product, feature or app screen and asks what to do with it. Common at banks and fintechs: a card, a savings account, a loan, or a mobile app feature.",
    tree: N("Product case",
      N("Understand", N("What is it, for whom, what job does it do?"), N("How does the company make money from it?")),
      N("Objective", N("Grow, raise profit, fix a metric, or launch?"), N("Success metric and time frame")),
      N("Economics per account", N("Revenue lines"), N("Cost lines"), N("Value of a retained or engaged customer")),
      N("Customer lifecycle", N("Acquire"), N("Activate / adopt"), N("Engage"), N("Retain"), N("Monetize")),
      N("Measurement", N("Metrics and data needed"), N("Experiment: randomized holdout, not adopter vs. non-adopter"), N("Guardrail metrics")),
      N("Risk and compliance", N("Credit, fraud, privacy"), N("Regulation and fair treatment of customers"))
    ),
    steps: [
      "Restate the product in one sentence: who it serves and how it earns money.",
      "Ask for the objective and the success metric before analyzing anything.",
      "Build the per-account economics with only the facts you are given. State assumptions out loud.",
      "Walk the lifecycle (acquire, adopt, engage, retain, monetize) and find the leak or the biggest lever.",
      "Say how you would measure impact: a randomized holdout, the metric, a guardrail.",
      "Convert the effect into dollars (accounts x change per account) and compare with cost.",
      "Recommend a staged action, with risks and what would change your mind."
    ],
    pitfalls: [
      "Reciting facts about the real product from memory. Use what the interviewer shows you.",
      "Crediting a feature with the gap between adopters and non-adopters. Adopters are usually different people to begin with (selection bias).",
      "Optimizing one metric (adoption, spend) while ignoring risk, complaints and cost to serve."
    ],
    example: "Digital feature case: adopters spend 19% more than non-adopters, but a randomized holdout shows a much smaller true effect. See the Digital Feature case.",
    table: {
      title: "What changes by product type",
      headers: ["Product", "Main profit levers", "Main risks"],
      rows: [
        ["Rewards credit card", "Spend (interchange), revolve rate, annual fee", "Rewards cost, attrition, credit losses"],
        ["Savings or deposit account", "Spread between loan yield and deposit rate, balance growth", "Rate sensitivity, deposit flight"],
        ["Auto or personal loan", "Volume, yield, channel", "Default, collateral value, fraud"],
        ["Digital feature or app", "Engagement, retention, lower cost to serve, cross-sell", "Low adoption, selection bias in measurement, privacy"]
      ]
    }
  }
];
