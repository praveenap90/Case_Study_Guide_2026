window.DATA = window.DATA || {};

DATA.estimation = [
  {
    id: "tires", q: "How many car tires are sold in the US each year?", approach: "Stock and flow: tires in use / lifespan, plus tires on new vehicles.",
    steps: [
      ["US vehicles on the road (cars and light trucks)", "~335M people x ~0.85 vehicles per person", "~280M"],
      ["Tires in use", "280M x 4", "~1.1B"],
      ["Replacement life", "45,000 miles per set / 12,000 miles per year", "~3.75 years"],
      ["Replacement tires per year", "1.1B / 3.75", "~300M"],
      ["Original-equipment tires", "~15M new vehicles x 4", "~60M"],
      ["Add commercial trucks and other (~10%)", "(300M + 60M) x ~1.1", "~390M"]
    ],
    answer: "About 350 to 400 million per year.",
    sanity: "That is about 1.1 tires per person per year. One car's four tires every ~4 years gives ~1 per person-year of driving age, so it is consistent."
  },
  {
    id: "coffee", q: "How many cups of coffee are sold per day in Chicago (the city)?", approach: "Top-down: population x share who buy coffee x cups per buyer.",
    steps: [
      ["City population", "Chicago proper", "~2.7M"],
      ["Adults", "~80% of population", "~2.2M"],
      ["Coffee drinkers", "~65% of adults", "~1.4M"],
      ["Share buying a cup outside the home on a given day", "~35%", "~500K buyers"],
      ["Cups per buyer", "~1.2", "~600K"],
      ["Add commuters and tourists (~+15%)", "600K x 1.15", "~700K"]
    ],
    answer: "About 600,000 to 700,000 cups per day.",
    sanity: "Roughly one cup per four residents per day. A dense area with many cafes, so plausible."
  },
  {
    id: "smartphones", q: "How many smartphones are sold in the US each year?", approach: "Stock and flow: users x (1 / replacement cycle), plus first-time buyers.",
    steps: [
      ["US population", "", "~335M"],
      ["Smartphone users (age 10+ with a phone)", "~85% of ~335M", "~285M"],
      ["Replacement cycle", "about 3 years", "~95M per year"],
      ["New users / second devices", "~5M to 10M", "~100M to 105M"],
      ["Cross-check: households", "130M households x ~2.5 phones / 3 years", "~108M"]
    ],
    answer: "About 100 to 120 million per year.",
    sanity: "About one phone sold per 3 people each year, consistent with a ~3-year replacement cycle."
  },
  {
    id: "pizza", q: "How many pizza orders (delivery and takeout) are placed in New York City each day?", approach: "Top-down by households.",
    steps: [
      ["NYC population", "", "~8.3M"],
      ["Households", "8.3M / ~2.6 people", "~3.2M"],
      ["Households ordering pizza at least some of the time", "~70%", "~2.2M"],
      ["Orders per ordering household per month", "~2", "~4.5M per month"],
      ["Per day", "4.5M / 30", "~150K"],
      ["Add office, student and tourist orders (~+30%)", "150K x 1.3", "~200K"]
    ],
    answer: "About 150,000 to 250,000 orders per day.",
    sanity: "Roughly one order per 40 residents per day. With thousands of pizzerias at 50 to 100 orders each, it matches."
  },
  {
    id: "gas", q: "How many gas stations are there in the US?", approach: "Demand vs. supply per station.",
    steps: [
      ["Vehicles", "", "~280M"],
      ["Fill-ups per vehicle per year", "~1 every 10 days", "~36"],
      ["Total fill-ups per year", "280M x 36", "~10B"],
      ["Per day", "10B / 365", "~27M"],
      ["Fill-ups per station per day", "8 pumps x ~25 fill-ups per pump", "~200"],
      ["Number of stations", "27M / 200", "~135K"]
    ],
    answer: "About 130,000 to 150,000 stations.",
    sanity: "About one station per 2,300 people, which feels right for a car-based country."
  },
  {
    id: "cards", q: "How many credit and debit card transactions happen in the US each day?", approach: "Top-down: cardholders x transactions per day.",
    steps: [
      ["US adults", "", "~260M"],
      ["Adults with a debit or credit card", "~85%", "~220M"],
      ["Card transactions per cardholder per day", "~1.8 (coffee, groceries, online, subscriptions)", "~400M"],
      ["Cross-check: yearly", "400M x 365", "~145B per year"]
    ],
    answer: "About 400 million per day, or roughly 150 billion per year.",
    sanity: "Around 1.5 card payments per person per day including online and recurring payments."
  },
  {
    id: "piano", q: "How many piano tuners are there in Chicago?", approach: "Classic demand vs. supply.",
    steps: [
      ["Households in Chicago", "~2.7M / 2.7 people", "~1M"],
      ["Households with a piano", "~1 in 20", "~50K"],
      ["Tunings per piano per year", "1", "~50K tunings per year"],
      ["Tunings per tuner per day", "~4 (including travel)", "-"],
      ["Working days per year", "~220", "~880 tunings per tuner"],
      ["Tuners needed", "50K / 880", "~57"]
    ],
    answer: "About 50 to 60 piano tuners (full-time equivalents).",
    sanity: "Many are part-time, so the actual headcount may be higher, while some pianos are tuned less than once a year."
  },
  {
    id: "rides", q: "How many ride-hail trips happen in the Chicago area each day?", approach: "Top-down: population x adoption x frequency.",
    steps: [
      ["Metro population", "", "~9.5M"],
      ["Adults", "~78%", "~7.4M"],
      ["Share who use ride-hail on a given day", "~3%", "~220K riders"],
      ["Trips per rider per day", "~1.3", "~290K"],
      ["Cross-check: drivers", "~15K active drivers x ~15 trips per day", "~225K"]
    ],
    answer: "Roughly 200,000 to 300,000 trips per day.",
    sanity: "Two independent estimates (riders and drivers) land within 30% of each other."
  }
];

DATA.glossary = [
  // Metrics
  { term: "Revenue", cat: "Metrics", def: "Total income from sales before costs.", formula: "Price x Quantity" },
  { term: "Gross profit", cat: "Profitability", def: "Revenue minus cost of goods sold.", formula: "Revenue - COGS" },
  { term: "Gross margin", cat: "Profitability", def: "Gross profit as a percent of revenue.", formula: "Gross profit / Revenue" },
  { term: "Contribution margin", cat: "Profitability", def: "Revenue minus variable costs, as an amount or a percent. What each sale contributes to covering fixed costs and profit.", formula: "(Price - Variable cost) / Price" },
  { term: "EBITDA", cat: "Profitability", def: "Earnings before interest, taxes, depreciation and amortization. A measure of operating profit before capital structure and non-cash charges.", formula: "Revenue - Operating expenses (excl. D&A)" },
  { term: "EBIT (operating profit)", cat: "Profitability", def: "Earnings before interest and taxes. EBITDA minus depreciation and amortization.", formula: "EBITDA - D&A" },
  { term: "Net income", cat: "Profitability", def: "Profit after all costs including depreciation, interest and taxes.", formula: "EBIT - Interest - Taxes" },
  { term: "Net margin", cat: "Profitability", def: "Net income as a percent of revenue.", formula: "Net income / Revenue" },
  { term: "ROI", cat: "Profitability", def: "Return on an investment as a percent of its cost.", formula: "(Gain - Cost) / Cost" },
  { term: "Payback period", cat: "Profitability", def: "Time for cumulative profit to recover the investment.", formula: "Investment / Annual profit" },
  { term: "Breakeven volume", cat: "Profitability", def: "Units needed so total contribution equals fixed costs.", formula: "Fixed costs / (Price - Variable cost per unit)" },
  { term: "NPV", cat: "Profitability", def: "Present value of future cash flows minus the upfront investment, discounted at the cost of capital.", formula: "Sum of CFt / (1+r)^t - Investment" },
  // Costs
  { term: "COGS", cat: "Costs", def: "Direct costs of producing what was sold (materials, direct labor)." },
  { term: "Fixed cost", cat: "Costs", def: "Cost that does not change with volume in the short run (rent, salaries, depreciation)." },
  { term: "Variable cost", cat: "Costs", def: "Cost that moves with volume (materials, commissions, shipping)." },
  { term: "Operating leverage", cat: "Costs", def: "How strongly profit responds to revenue changes. High fixed costs mean small revenue changes cause large profit changes." },
  { term: "Economies of scale", cat: "Costs", def: "Unit cost falls as volume rises because fixed costs spread across more units." },
  { term: "CapEx", cat: "Costs", def: "Spending on long-lived assets (equipment, buildings, rides). Appears as depreciation over time." },
  { term: "Flow-through", cat: "Costs", def: "Share of incremental revenue that becomes incremental profit.", formula: "Incremental profit / Incremental revenue" },
  // Growth and customer
  { term: "CAC", cat: "Customer", def: "Customer acquisition cost: marketing and sales spend per new customer.", formula: "Sales & marketing spend / New customers" },
  { term: "LTV (CLV)", cat: "Customer", def: "Profit expected from a customer over their lifetime. Use margin, not revenue.", formula: "Margin per period x Expected lifetime (or margin / churn)" },
  { term: "LTV : CAC", cat: "Customer", def: "Return on acquisition spend. Above ~3x is a common benchmark; look at the trend and by channel." },
  { term: "Churn rate", cat: "Customer", def: "Share of customers lost in a period.", formula: "Customers lost / Starting customers" },
  { term: "Retention rate", cat: "Customer", def: "Share of customers kept in a period. Always define the base and the window.", formula: "1 - Churn rate" },
  { term: "Cohort", cat: "Customer", def: "A group of customers who started in the same period, tracked over time." },
  { term: "ARPU", cat: "Customer", def: "Average revenue per user.", formula: "Revenue / Active users" },
  { term: "Penetration", cat: "Customer", def: "Share of the potential customer base using a product.", formula: "Users / Potential users" },
  { term: "NPS", cat: "Customer", def: "Net Promoter Score: percent promoters minus percent detractors, from -100 to +100." },
  { term: "Market share", cat: "Customer", def: "Company's share of total market sales.", formula: "Company revenue / Market revenue" },
  { term: "Elasticity", cat: "Customer", def: "Percent change in quantity demanded per percent change in price. Above 1 in size means demand is elastic." },
  // Frameworks
  { term: "MECE", cat: "Frameworks", def: "Mutually exclusive, collectively exhaustive: categories do not overlap and together cover everything." },
  { term: "Hypothesis-driven", cat: "Frameworks", def: "Start with an answer you believe, then seek data to confirm or reject it." },
  { term: "Ansoff matrix", cat: "Frameworks", def: "Growth framework: existing/new products x existing/new markets." },
  { term: "Porter's Five Forces", cat: "Frameworks", def: "Industry analysis: rivalry, buyer power, supplier power, new entrants, substitutes." },
  { term: "Value chain", cat: "Frameworks", def: "The activities a company performs to create value, used to locate cost and advantage." },
  { term: "Sensitivity analysis", cat: "Frameworks", def: "Testing how outputs change as key assumptions change." },
  { term: "Pareto (80/20)", cat: "Frameworks", def: "A few drivers usually cause most of the effect; focus on the biggest pools first." },
  // Banking
  { term: "APR", cat: "Banking", def: "Annual percentage rate: yearly interest rate on borrowing, excluding compounding." },
  { term: "Interchange", cat: "Banking", def: "Fee paid by merchants' banks to the card issuer on each card purchase, a percent of spend." },
  { term: "Net interest margin (NIM)", cat: "Banking", def: "Interest earned on assets minus interest paid, as a percent of earning assets." },
  { term: "Charge-off", cat: "Banking", def: "Debt the lender has written off as unlikely to be collected." },
  { term: "Delinquency", cat: "Banking", def: "Payments past due (30, 60, 90+ days). A leading indicator of charge-offs." },
  { term: "PD, LGD, EAD", cat: "Banking", def: "Probability of default, loss given default, exposure at default. Expected loss = PD x LGD x EAD." },
  { term: "Revolver / transactor", cat: "Banking", def: "A revolver carries a balance and pays interest; a transactor pays in full each month and earns the issuer mostly interchange." },
  { term: "Funding cost", cat: "Banking", def: "What a lender pays to obtain the money it lends (deposits, debt)." },
  // Tech
  { term: "DAU / MAU", cat: "Tech", def: "Daily and monthly active users. DAU/MAU is a measure of stickiness.", formula: "DAU / MAU" },
  { term: "Funnel", cat: "Tech", def: "Sequence of steps to a goal (visit, sign up, activate, purchase); conversion is measured between steps." },
  { term: "A/B test", cat: "Tech", def: "Randomized experiment comparing a change (B) to control (A) to measure causal impact." },
  { term: "Statistical significance", cat: "Tech", def: "Evidence that an observed difference is unlikely to be chance, often p < 0.05." },
  { term: "Guardrail metric", cat: "Tech", def: "A metric you must not harm while optimizing another (for example, latency or satisfaction)." },
  { term: "Network effect", cat: "Tech", def: "A product becomes more valuable as more people use it." },
  // Interview
  { term: "Top-down vs. bottom-up", cat: "Interview", def: "Top-down starts from a large population and narrows; bottom-up builds from units (stores, customers) and sums." },
  { term: "Sanity check", cat: "Interview", def: "Comparing your result with a known figure or a second method to test plausibility." },
  { term: "Synergies", cat: "Interview", def: "Extra value from combining two businesses: revenue synergies (cross-sell) and cost synergies (overlap, procurement). Usually haircut." },
  { term: "Mix effect", cat: "Interview", def: "Change in profit caused by a shift between higher- and lower-margin products or segments, even if total revenue is flat." }
];
