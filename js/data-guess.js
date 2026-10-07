window.DATA = window.DATA || {};
DATA.guess = {
 "lead": "A guesstimate is judged on the path, not the number. Remember SCOPE: Scope it, Choose an approach, Organize inputs, Process the math, Examine the result.",
 "scopeChart": "flowchart LR\n  S[\"S - Scope<br/>what, where, when, which units?\"] --> C[\"C - Choose approach<br/>top-down, bottom-up or stock and flow\"]\n  C --> O[\"O - Organize inputs<br/>3 to 5 round numbers\"]\n  O --> P[\"P - Process the math<br/>write units on every line\"]\n  P --> E[\"E - Examine<br/>sanity check and give a range\"]\n  style S fill:#dbeafe,stroke:#2563eb,color:#000\n  style C fill:#fef3c7,stroke:#d97706,color:#000\n  style O fill:#dcfce7,stroke:#16a34a,color:#000\n  style P fill:#fae8ff,stroke:#a21caf,color:#000\n  style E fill:#fee2e2,stroke:#dc2626,color:#000",
 "pickChart": "flowchart TD\n  Q[\"Guesstimate question\"] --> Q1{\"Q1: Does a known population<br/>use it regularly?\"}\n  Q1 -- Yes --> TD\n  Q1 -- No --> Q2{\"Q2: Is it durable, or a service<br/>tied to a stock of items?\"}\n  Q2 -- Yes --> SF\n  Q2 -- No --> Q3{\"Q3: Is supply easier<br/>to count than demand?\"}\n  Q3 -- Yes --> BU\n  Q3 -- No --> TD\n\n  TD[\"<b>TOP-DOWN</b><br/>Example: coffee cups per day\"] --> T1[\"Population<br/>330M\"]\n  T1 --> T2[\"x Share who use<br/>70%\"]\n  T2 --> T3[\"x Frequency<br/>1 per day\"]\n  T3 --> T4[\"x Price<br/>$5\"]\n  T4 --> T5[\"= Daily revenue<br/>about $1.2B\"]\n\n  SF[\"<b>STOCK AND FLOW</b><br/>Example: car tires per year\"] --> S1[\"Stock in use<br/>280M cars x 4 tires = 1.1B\"]\n  S1 --> S2[\"divide by lifespan<br/>3.75 years\"]\n  S2 --> S3[\"= Replacements per year<br/>about 300M\"]\n  S3 --> S4[\"+ New-item sales<br/>15M cars x 4 = 60M\"]\n  S4 --> S5[\"= Total per year<br/>about 360M\"]\n\n  BU[\"<b>BOTTOM-UP</b><br/>Example: output of a set of sites\"] --> B1[\"Number of sites\"]\n  B1 --> B2[\"x Capacity per site\"]\n  B2 --> B3[\"x Utilization<br/>share of capacity used\"]\n  B3 --> B4[\"= Total output\"]\n\n  classDef decision fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef top fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef stock fill:#fef3c7,stroke:#d97706,color:#000\n  classDef bottom fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef start fill:#e5e7eb,stroke:#374151,color:#000\n  class Q start\n  class Q1,Q2,Q3 decision\n  class TD,T1,T2,T3,T4,T5 top\n  class SF,S1,S2,S3,S4,S5 stock\n  class BU,B1,B2,B3,B4 bottom",
 "scopeTable": {
  "title": "SCOPE at a glance",
  "headers": [
   "Letter",
   "Step",
   "Do this",
   "Say this"
  ],
  "rows": [
   [
    "S",
    "Scope",
    "Pin down what, where, when and the unit (units sold, dollars, per day).",
    "\"Do we mean new tires only, in the US, per year?\""
   ],
   [
    "C",
    "Choose approach",
    "Pick top-down, bottom-up or stock and flow. Name it.",
    "\"I will use stock and flow because tires wear out.\""
   ],
   [
    "O",
    "Organize inputs",
    "List 3 to 5 inputs and round each one aloud.",
    "\"About 280M vehicles, 4 tires each.\""
   ],
   [
    "P",
    "Process",
    "Multiply or divide step by step with units.",
    "\"280M x 4 = about 1.1B tires in use.\""
   ],
   [
    "E",
    "Examine",
    "Sanity check against a second angle, then give a range.",
    "\"Roughly 350 to 400M. About one tire per person per year is plausible.\""
   ]
  ]
 },
 "numbersTable": {
  "title": "Handy round numbers on a 330M basis",
  "headers": [
   "Item",
   "Round number"
  ],
  "rows": [
   [
    "US population",
    "330M"
   ],
   [
    "Adults / elderly / under 18",
    "231M / 66M / 33M"
   ],
   [
    "US households",
    "132M (about 2.5 people each)"
   ],
   [
    "US workers",
    "162M"
   ],
   [
    "Vehicles on the road",
    "280M"
   ],
   [
    "New vehicles sold per year",
    "15M"
   ],
   [
    "New York City population",
    "8.3M"
   ],
   [
    "Chicago, city / metro",
    "2.7M / 9.5M"
   ],
   [
    "Working days per year",
    "250"
   ],
   [
    "Working hours per year",
    "2,000"
   ],
   [
    "Seconds in a day / year",
    "86,400 / 31.5M"
   ]
  ]
 },
 "worksheet": [
  [
   "S: Scope (what, where, when, unit)",
   "gs",
   "New replacement plus original-equipment car tires sold in the US per year, in units."
  ],
  [
   "C: Approach and why",
   "gc",
   "Stock and flow: tires wear out, so tires in use / lifespan = replacements per year."
  ],
  [
   "O: Inputs (round numbers)",
   "go",
   "280M vehicles, 4 tires each, 3.75 year life; 15M new vehicles per year, 4 tires; commercial adds about 10%."
  ],
  [
   "P: Math with units",
   "gp",
   "280M x 4 = 1.1B in use; / 3.75 = about 300M replacements; plus 15M x 4 = 60M original equipment = 360M; +10% commercial = about 395M."
  ],
  [
   "E: Sanity check and range",
   "ge",
   "About 1.2 tires per person per year is reasonable. Range 350 to 400M, point estimate about 375M."
  ]
 ],
 "scriptTable": {
  "title": "Fill-in answer script",
  "headers": [
   "Step",
   "Say"
  ],
  "rows": [
   [
    "Scope",
    "Let me confirm: we are estimating [thing] in [place] per [period], measured in [unit]. Is that right?"
   ],
   [
    "Choose",
    "I will use a [top-down / bottom-up / stock and flow] approach because [reason]."
   ],
   [
    "Organize",
    "I need [input 1], [input 2] and [input 3]. I will assume about [round numbers]."
   ],
   [
    "Process",
    "[A] x [B] gives [C]. Then [C] divided by [D] gives [E]."
   ],
   [
    "Examine",
    "So my answer is about [number]. As a check, that is [per person / per site], which seems [reasonable / high / low] because [reason]. I would expect a range of [low] to [high]."
   ]
  ]
 },
 "exampleTitle": "Filled example: How many car tires are sold in the US each year?",
 "example": [
  [
   "S",
   "Scope",
   "I will count all new tires sold for cars and light trucks in the US in one year, replacement plus original equipment. I will skip retreads and trucks over 10 tons."
  ],
  [
   "C",
   "Choose",
   "Stock and flow. Tires wear out, so tires in use divided by their lifespan gives replacements per year. Then I add tires fitted to new vehicles."
  ],
  [
   "O",
   "Organize",
   "About 280M vehicles, 4 tires each, a tire lasts about 3.75 years. About 15M new vehicles per year. Commercial adds roughly 10%."
  ],
  [
   "P",
   "Process",
   "280M x 4 = 1.1B tires in use. 1.1B / 3.75 = about 300M replacements. 15M x 4 = 60M original equipment. Total about 360M. Add 10% for commercial: about 395M."
  ],
  [
   "E",
   "Examine",
   "395M is about 1.2 tires per person per year. A driver replacing a set every 4 years plus new cars fits that. I would say roughly 350 to 400M."
  ]
 ],
 "mistakes": {
  "title": "Common mistakes and fixes",
  "headers": [
   "Mistake",
   "Fix"
  ],
  "rows": [
   [
    "Starting math before scoping",
    "Spend the first 20 seconds on what, where, when and unit."
   ],
   [
    "Too many inputs",
    "Cap at 3 to 5. Merge small factors into one."
   ],
   [
    "Fake precision",
    "Round everything. Say \"about\" and give a range."
   ],
   [
    "Dropping units",
    "Write the unit next to every number so errors show up."
   ],
   [
    "No sanity check",
    "Compare per person, per household or per site against common sense."
   ],
   [
    "Staying silent",
    "Think aloud. The interviewer grades the path."
   ]
  ]
 },
 "cheat": {
  "title": "30-second guesstimate cheat sheet",
  "rule": "Find 10% → Adjust → Round",
  "pct": {
   "title": "Must-know percentages",
   "headers": [
    "%",
    "Trick"
   ],
   "rows": [
    [
     "10%",
     "Move the decimal"
    ],
    [
     "5%",
     "Half of 10%"
    ],
    [
     "20%",
     "Double 10%"
    ],
    [
     "15%",
     "10% + 5%"
    ]
   ]
  },
  "scale": {
   "title": "Scaling shortcuts",
   "headers": [
    "Change",
    "Action"
   ],
   "rows": [
    [
     "-10%",
     "× 0.9"
    ],
    [
     "+10%",
     "× 1.1"
    ],
    [
     "+5%",
     "Add half of 10%"
    ],
    [
     "+20%",
     "Add double 10%"
    ]
   ]
  },
  "examples": [
   "10% of 330 = 33",
   "5% of 330 = 16.5",
   "20% of 330 = 66",
   "330 → 300 is about -10%",
   "330 → 350 is about +5% (really +6%, close enough)"
  ],
  "segment": "Use simple splits: High / Medium / Low = 50% / 30% / 20%",
  "structure": [
   "Define base population",
   "Segment (users / customers)",
   "Apply rate (usage / conversion)",
   "Multiply",
   "Sanity check"
  ],
  "rounding": [
   "Speed beats accuracy",
   "346 → 345",
   "297 → 300"
  ],
  "phrases": [
   "I'll estimate and refine.",
   "I'll scale instead of recalculating.",
   "I'll round for simplicity."
  ],
  "stuck": "I'll take a reasonable assumption and proceed.",
  "final": "Structure → 10% → Scale → Speak clearly"
 },
 "universal": {
  "title": "Universal guesstimate template",
  "lead": "Use this template to answer any estimation question in a structured, clear and convincing way.",
  "chart": "flowchart LR\n    %% Nodes\n    A[Start: Clarify Problem]\n    B[Define Approach]\n    C{Top-Down or Bottom-Up?}\n    D[Top-Down: Start from Population]\n    E[Bottom-Up: Start from Unit Usage]\n    F[Segment Population]\n    G[Apply Behavior / Usage Assumptions]\n    H[Step-by-Step Calculations]\n    I[Final Answer <br> Range]\n    J[Sanity Check]\n    K{Interviewer Pushback?}\n    L[Adjust Adoption % or Frequency]\n    M[Justify Assumptions]\n    N[End: Provide Clear Estimate]\n\n    %% Arrows\n    A --> B\n    B --> C\n    C --> D\n    C --> E\n    D --> F\n    E --> F\n    F --> G\n    G --> H\n    H --> I\n    I --> J\n    J --> K\n    K --> L\n    K --> M\n    L --> H\n    M --> H\n    H --> N\n\n    %% Styling\n    style A fill:#FFD700,stroke:#000,stroke-width:1px,color:#000\n    style B fill:#FFB347,stroke:#000,stroke-width:1px,color:#000\n    style C fill:#87CEFA,stroke:#000,stroke-width:1px,color:#000\n    style D fill:#98FB98,stroke:#000,stroke-width:1px,color:#000\n    style E fill:#98FB98,stroke:#000,stroke-width:1px,color:#000\n    style F fill:#FFA07A,stroke:#000,stroke-width:1px,color:#000\n    style G fill:#ADD8E6,stroke:#000,stroke-width:1px,color:#000\n    style H fill:#90EE90,stroke:#000,stroke-width:1px,color:#000\n    style I fill:#FFDEAD,stroke:#000,stroke-width:1px,color:#000\n    style J fill:#D3D3D3,stroke:#000,stroke-width:1px,color:#000\n    style K fill:#FF6347,stroke:#000,stroke-width:1px,color:#000\n    style L fill:#FFE4B5,stroke:#000,stroke-width:1px,color:#000\n    style M fill:#FFE4B5,stroke:#000,stroke-width:1px,color:#000\n    style N fill:#90EE90,stroke:#000,stroke-width:1px,color:#000",
  "steps": [
   [
    "1. Clarify the problem",
    [
     "What exactly are we estimating?",
     "Geography: city, country or global?",
     "Time frame: annual, monthly or daily?"
    ],
    "I'll estimate the number of X in the US annually."
   ],
   [
    "2. Define the approach",
    [
     "Top-down: start from population and narrow down.",
     "Bottom-up: start from unit usage and scale up."
    ],
    "I'll take a top-down approach starting from population and narrowing to target users."
   ],
   [
    "3. Base population assumptions",
    [
     "Total population = ___",
     "% relevant group = ___",
     "Derived population = ___",
     "Example: US population = 330M; adults = 70% = 230M."
    ],
    null
   ]
  ],
  "segment": {
   "title": "Segmentation (optional but strong)",
   "headers": [
    "Segment",
    "%",
    "Size",
    "Notes"
   ],
   "rows": [
    [
     "Segment A",
     "50%",
     "___",
     "High usage"
    ],
    [
     "Segment B",
     "30%",
     "___",
     "Medium usage"
    ],
    [
     "Segment C",
     "20%",
     "___",
     "Low usage"
    ]
   ]
  },
  "segmentTip": "Segmentation shows deeper thinking and improves accuracy.",
  "steps2": [
   [
    "5. Apply behavior / usage assumptions",
    [
     "% who actually use or buy = ___",
     "Frequency (per day, month or year) = ___",
     "Average value per transaction = ___"
    ],
    null
   ],
   [
    "6. Calculation breakdown",
    [
     "Target population = base population \\u00d7 % relevant",
     "Actual users = target population \\u00d7 % adoption",
     "Usage = users \\u00d7 frequency",
     "Final estimate = usage \\u00d7 value (if needed)"
    ],
    null
   ],
   [
    "7. Final answer (give a range)",
    [
     "Always give a range instead of a single number."
    ],
    "So, the estimate is approximately X to Y, depending on assumptions."
   ],
   [
    "8. Sanity check",
    [
     "Does the number feel realistic?",
     "Compare with known benchmarks."
    ],
    "This seems reasonable given population size and typical usage patterns."
   ]
  ],
  "pushback": {
   "title": "Handling interviewer pushback",
   "headers": [
    "If challenged on",
    "Do this"
   ],
   "rows": [
    [
     "Adoption %",
     "Adjust, for example 20% to 10%, and recalculate quickly."
    ],
    [
     "Frequency",
     "Reduce or increase it and recompute."
    ],
    [
     "Assumptions",
     "Justify them or provide a range."
    ]
   ]
  },
  "pushPhrase": "If we take a more conservative assumption, the estimate becomes...",
  "miniTitle": "Mini walkthrough: coffee cups sold daily in a city",
  "mini": [
   "Population = 5M",
   "Adults = 70% \\u2192 3.5M",
   "Coffee drinkers = 60% \\u2192 2.1M",
   "Average cups per day = 1",
   "Answer: about 2.1M cups/day. Range: 2 to 2.5M cups/day."
  ],
  "tips": [
   "Use round numbers (10%, 50%, etc.).",
   "Keep math simple and verbal.",
   "Always structure before calculating.",
   "Segment when useful (urban/rural, income, age).",
   "Adjust assumptions confidently under pressure.",
   "Speak your thinking clearly: the interviewer values process over the exact number."
  ],
  "oneLine": "Clarify \\u2192 Population \\u2192 Segment \\u2192 Apply % \\u2192 Multiply \\u2192 Estimate \\u2192 Sanity Check \\u2192 Adjust",
  "usedFor": [
   "Market sizing",
   "Product adoption",
   "Revenue estimation",
   "Operational capacity",
   "Startup opportunity sizing"
  ]
 },
 "seg": {
  "title": "Segmentation cheat sheet (numbers and percentages)",
  "lead": "Segment populations, assign behavior rates and recalculate quickly when the interviewer pushes back.",
  "examples": {
   "title": "Population segmentation examples",
   "headers": [
    "Segment type",
    "Group",
    "% of population",
    "Notes"
   ],
   "rows": [
    [
     "Age",
     "Young (0-24)",
     "20%",
     "Lower adoption of financial products"
    ],
    [
     "Age",
     "Working-age (25-64)",
     "60%",
     "Primary user segment"
    ],
    [
     "Age",
     "Elderly (65+)",
     "20%",
     "Lower adoption / frequency"
    ],
    [
     "Usage level",
     "Heavy",
     "20%",
     "High frequency usage"
    ],
    [
     "Usage level",
     "Medium",
     "50%",
     "Moderate usage"
    ],
    [
     "Usage level",
     "Light",
     "30%",
     "Low usage"
    ],
    [
     "Geography",
     "Urban",
     "50%",
     "High adoption"
    ],
    [
     "Geography",
     "Suburban",
     "30%",
     "Moderate adoption"
    ],
    [
     "Geography",
     "Rural",
     "20%",
     "Lower adoption"
    ],
    [
     "Access",
     "Eligible",
     "70%",
     "Can participate in product/service"
    ],
    [
     "Access",
     "Not eligible",
     "30%",
     "Excluded from estimate"
    ]
   ]
  },
  "rates": {
   "title": "Behavior rates and frequencies (common anchors)",
   "headers": [
    "Frequency type",
    "Value",
    "Example use"
   ],
   "rows": [
    [
     "Daily",
     "1 per day (365 per year)",
     "Daily app login, transactions"
    ],
    [
     "Weekly",
     "1 per week = about 50 per year = about 0.14 per day",
     "Occasional usage"
    ],
    [
     "Monthly",
     "1 per month = 12 per year = about 0.03 per day",
     "Monthly behavior"
    ],
    [
     "Rare",
     "Once every 4 years = 0.25 per year",
     "New credit card openings"
    ],
    [
     "Very rare",
     "Once every 10 years = 0.1 per year",
     "Elderly adoption of new tech"
    ]
   ]
  },
  "ratesNote": "Weekly and monthly rows are restated per year and per day so the units are explicit.",
  "calcTitle": "Multi-segment calculation template: annual new credit cards in the US (adults = 250M)",
  "calc": {
   "title": "Segment, behavior rate, estimate",
   "headers": [
    "Segment",
    "Population",
    "Behavior rate",
    "Annual estimate"
   ],
   "rows": [
    [
     "Working-age adults (25-64)",
     "250M x 60% = 150M",
     "0.25 per year",
     "150M x 0.25 = 37.5M"
    ],
    [
     "Young adults (18-24)",
     "250M x 20% = 50M",
     "0.15 per year",
     "50M x 0.15 = 7.5M"
    ],
    [
     "Elderly adults (65+)",
     "250M x 20% = 50M",
     "0.1 per year",
     "50M x 0.1 = 5M"
    ],
    [
     "Total",
     "250M",
     "-",
     "50M new cards per year"
    ]
   ]
  },
  "calcTip": "If asked for \"only urban adults\", multiply each segment by the urban share (50%).",
  "adjust": {
   "title": "Quick adjustment examples",
   "headers": [
    "Interviewer prompt",
    "How to adjust"
   ],
   "rows": [
    [
     "Add elderly separately",
     "Split the total into non-elderly and elderly, then recalculate each segment."
    ],
    [
     "Only urban users",
     "Multiply all segments by the urban % (50%)."
    ],
    [
     "Adoption rate lower",
     "Reduce the behavior rate proportionally (for example 0.25 to 0.2)."
    ],
    [
     "Ignore rural users",
     "Remove the rural % and scale urban plus suburban only."
    ],
    [
     "High-frequency usage",
     "Increase the rate for heavy users (for example 0.25 to 0.3)."
    ]
   ]
  },
  "phrases": [
   "I'll segment because usage likely differs across groups.",
   "I'll estimate each segment separately and sum the results.",
   "I'll adjust the assumption and recalc the affected segments.",
   "The total is most sensitive to this segment's behavior rate.",
   "I'll sanity check by comparing to total population adoption."
  ],
  "tips": [
   "Segment only when behavior differs.",
   "Use round numbers for population and rates.",
   "Talk while calculating; don't compute silently.",
   "Handle pushback calmly and adjust one variable at a time.",
   "Explain the impact: \"This reduces the estimate by about 40%.\"",
   "Sanity check: does your estimate make sense given total population and adoption?"
  ],
  "packTitle": "Practice guesstimate table pack",
  "packLead": "Ten practice questions with rounded numbers for quick mental math. Segments are pre-defined; adjust the percentages if the interviewer pushes back.",
  "pack": [
   {
    "title": "New credit cards issued annually (US)",
    "headers": [
     "Segment",
     "Population",
     "Adoption rate",
     "Frequency",
     "Annual estimate"
    ],
    "rows": [
     [
      "Working-age adults (25-64)",
      "150M",
      "25%",
      "1/year",
      "37.5M"
     ],
     [
      "Young adults (18-24)",
      "50M",
      "15%",
      "1/year",
      "7.5M"
     ],
     [
      "Elderly adults (65+)",
      "50M",
      "10%",
      "1/year",
      "5M"
     ],
     [
      "Total",
      "250M",
      "-",
      "-",
      "50M"
     ]
    ]
   },
   {
    "title": "Daily mobile banking app logins (US)",
    "headers": [
     "Segment",
     "Population",
     "App adoption",
     "Frequency/day",
     "Daily logins"
    ],
    "rows": [
     [
      "Adults (18-64)",
      "200M",
      "70%",
      "1/day",
      "140M"
     ],
     [
      "Elderly (65+)",
      "50M",
      "50%",
      "0.5/day",
      "12.5M"
     ],
     [
      "Total",
      "250M",
      "-",
      "-",
      "152.5M"
     ]
    ]
   },
   {
    "title": "People opening new checking accounts annually",
    "headers": [
     "Segment",
     "Population",
     "Likely to open",
     "Frequency/year",
     "Annual total"
    ],
    "rows": [
     [
      "Adults (18-64)",
      "200M",
      "8%",
      "1/year",
      "16M"
     ],
     [
      "Elderly (65+)",
      "50M",
      "5%",
      "1/year",
      "2.5M"
     ],
     [
      "Total",
      "250M",
      "-",
      "-",
      "18.5M"
     ]
    ]
   },
   {
    "title": "ATM withdrawals out-of-network",
    "headers": [
     "Segment",
     "Population",
     "% using ATM",
     "Withdrawals/year",
     "Total withdrawals"
    ],
    "rows": [
     [
      "Banked adults (non-elderly)",
      "200M",
      "40%",
      "12/year",
      "960M"
     ],
     [
      "Elderly",
      "50M",
      "30%",
      "8/year",
      "120M"
     ],
     [
      "Total",
      "250M",
      "-",
      "-",
      "1.08B"
     ]
    ]
   },
   {
    "title": "Daily coffee purchases in NYC",
    "headers": [
     "Segment",
     "Population",
     "Coffee drinkers",
     "Avg cups/day",
     "Daily cups"
    ],
    "rows": [
     [
      "Adults (18-64)",
      "6M",
      "70%",
      "1.2",
      "5.04M"
     ],
     [
      "Elderly (65+)",
      "2M",
      "50%",
      "0.8",
      "0.8M"
     ],
     [
      "Total",
      "8M",
      "-",
      "-",
      "5.84M"
     ]
    ]
   },
   {
    "title": "People applying for personal loans annually",
    "headers": [
     "Segment",
     "Population",
     "Likely to apply",
     "Frequency/year",
     "Total"
    ],
    "rows": [
     [
      "Working-age adults",
      "200M",
      "6%",
      "1/year",
      "12M"
     ],
     [
      "Elderly",
      "50M",
      "3%",
      "1/year",
      "1.5M"
     ],
     [
      "Total",
      "250M",
      "-",
      "-",
      "13.5M"
     ]
    ]
   },
   {
    "title": "Buy now pay later (BNPL) transactions annually",
    "headers": [
     "Segment",
     "Population",
     "Usage rate",
     "Purchases/year",
     "Total"
    ],
    "rows": [
     [
      "Online shoppers",
      "180M",
      "15%",
      "4/year",
      "108M"
     ]
    ]
   },
   {
    "title": "Annual revenue from credit card late fees",
    "headers": [
     "Segment",
     "Population",
     "% late",
     "Avg fee ($)",
     "Revenue"
    ],
    "rows": [
     [
      "Cardholders",
      "175M",
      "25%",
      "30 (one late fee per person per year)",
      "about $1.3B"
     ]
    ]
   },
   {
    "title": "Small business credit applications annually",
    "headers": [
     "Segment",
     "Population",
     "Apply %",
     "Total applications"
    ],
    "rows": [
     [
      "Small businesses",
      "33M",
      "15%",
      "about 5M"
     ]
    ]
   },
   {
    "title": "Car loans issued annually",
    "headers": [
     "Segment",
     "Population",
     "Finance %",
     "Total loans"
    ],
    "rows": [
     [
      "Cars sold",
      "15M",
      "80%",
      "12M"
     ]
    ]
   }
  ],
  "packTips": [
   "Plug in numbers quickly; no need to recalculate every digit.",
   "Segment first, then adjust percentages if the interviewer says \"add elderly\" or \"only urban\".",
   "Round logically: 37.5M becomes about 38M in speech.",
   "Highlight the main driver: \"The estimate is most sensitive to the adult adoption rate.\"",
   "Sanity check that the total is within an order of magnitude of the population.",
   "Adjust on the fly: update only the affected segments, not the whole table."
  ]
 },
 "scaling": {
  "title": "Example: scaling in a guesstimate",
  "lead": "When the interviewer changes one input, scale the whole answer by a factor instead of rebuilding the model.",
  "base": [
   "Population = 330M",
   "Total coffee cups per day = 330M cups",
   "Revenue (at $5) = $1.65B per day"
  ],
  "q1": "What if the population is 300M instead of 330M?",
  "a1": "Since 300M is roughly 10% lower than my base of 330M, I'll scale all outputs down by about 10%. That gives me about 300M cups per day and about $1.5B revenue.",
  "s1": [
   "Step 1, find the scaling factor: 300 / 330 = about 0.9, so -10%.",
   "Step 2, scale everything (no recalculation): cups 330M x 0.9 = about 300M per day; revenue $1.65B x 0.9 = about $1.5B per day."
  ],
  "q2": "What if the population is 350M?",
  "a2": "350M is about 5% higher than my base, so I'll scale my estimate up by about 5%, giving about 345M cups and about $1.7B revenue.",
  "s2": "Scaling factor: 350 / 330 = about 1.05, so +5% (the exact figure is about +6%, close enough for speed).",
  "ten": {
   "title": "Finding 10% fast",
   "headers": [
    "Number",
    "10%",
    "Trick"
   ],
   "rows": [
    [
     "330M",
     "33M",
     "Shift the decimal"
    ],
    [
     "1.65B",
     "0.165B",
     "Easy"
    ]
   ]
  },
  "why": [
   "Avoid redoing segmentation",
   "Stay fast under pressure",
   "Show strong business intuition"
  ],
  "say": "I'll apply a proportional scaling factor instead of recalculating the model. Since this is roughly a 10% decrease, I'll reduce all segments and totals by about 10% to stay consistent.",
  "template": {
   "title": "Scaling template (base = 330M)",
   "headers": [
    "% change",
    "Multiplier",
    "How to calculate",
    "Example",
    "Final value"
   ],
   "rows": [
    [
     "-20%",
     "0.8",
     "Subtract 20% (2 x 10%)",
     "330 - 66",
     "264M"
    ],
    [
     "-10%",
     "0.9",
     "Subtract 10%",
     "330 - 33",
     "297M (about 300M)"
    ],
    [
     "-5%",
     "0.95",
     "Subtract half of 10%",
     "330 - 16.5",
     "313.5M (about 315M)"
    ],
    [
     "+5%",
     "1.05",
     "Add half of 10%",
     "330 + 16.5",
     "346.5M (about 345M)"
    ],
    [
     "+10%",
     "1.1",
     "Add 10%",
     "330 + 33",
     "363M (about 360M)"
    ],
    [
     "+20%",
     "1.2",
     "Add 2 x 10%",
     "330 + 66",
     "396M (about 400M)"
    ]
   ]
  },
  "convert": {
   "title": "Instant conversion table",
   "headers": [
    "Base value",
    "5%",
    "10%",
    "20%"
   ],
   "rows": [
    [
     "100",
     "5",
     "10",
     "20"
    ],
    [
     "200",
     "10",
     "20",
     "40"
    ],
    [
     "300",
     "15",
     "30",
     "60"
    ],
    [
     "330",
     "16.5",
     "33",
     "66"
    ],
    [
     "500",
     "25",
     "50",
     "100"
    ],
    [
     "1000",
     "50",
     "100",
     "200"
    ]
   ]
  },
  "pop": {
   "title": "Population scaling",
   "headers": [
    "Scenario",
    "Scaling logic",
    "What to say",
    "Example result"
   ],
   "rows": [
    [
     "330M to 300M",
     "about -10%",
     "I'll reduce by about 10%",
     "330 to 300"
    ],
    [
     "330M to 350M",
     "about +5%",
     "I'll increase by about 5%",
     "330 to 345"
    ],
    [
     "330M to 400M",
     "about +20%",
     "I'll increase by about 20%",
     "330 to 400"
    ]
   ]
  },
  "seg": {
   "title": "Segment scaling template (usage split 70% / 20% / 10%)",
   "headers": [
    "Segment",
    "Base value",
    "Scaling %",
    "Adjusted value"
   ],
   "rows": [
    [
     "High usage",
     "231M",
     "-10%",
     "about 208M"
    ],
    [
     "Medium usage",
     "66M",
     "-10%",
     "about 59M"
    ],
    [
     "Low usage",
     "33M",
     "-10%",
     "about 30M"
    ],
    [
     "Total",
     "330M",
     "-10%",
     "about 297M (roughly 300M)"
    ]
   ]
  }
 },
 "us": {
  "title": "Generic guesstimate template: US population version",
  "lead": "Structure any guesstimate with the US population as the base. Worked example: coffee cups sold per year in the US, with revenue by cup size.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Cups of coffee sold in cafes and shops in the US each year<br/>Count only cups bought, not made at home\"]\nC --> P[\"US population<br/>330M\"]\nP --> A[\"Adults: 70%<br/>330M x 70% = <b>231M</b>\"]\nA --> T1[\"A: Heavy, 50%<br/>115.5M x 2 cups = 231M cups a day\"]\nA --> T2[\"B: Medium, 30%<br/>69.3M x 1 cup = 69.3M cups a day\"]\nA --> T3[\"C: Light, 20%<br/>46.2M x 0.5 cup = 23.1M cups a day\"]\nT1 --> D[\"Cups drunk a day<br/>231M + 69.3M + 23.1M = <b>323.4M</b>\"]\nT2 --> D\nT3 --> D\nD --> S[\"Bought outside the home: 20%<br/>323.4M x 20% = <b>64.7M cups sold a day</b>\"]\nS --> Y[\"Cups sold a year<br/>64.7M x 365 = <b>23.6B cups</b>\"]\nY --> Z1[\"Small: 25% of cups<br/>5.90B cups x $4.25 = <b>$25.1B</b>\"]\nY --> Z2[\"Medium: 45% of cups<br/>10.62B cups x $5.50 = <b>$58.4B</b>\"]\nY --> Z3[\"Large: 30% of cups<br/>7.08B cups x $6.25 = <b>$44.3B</b>\"]\nZ1 --> R[\"Revenue a year<br/>$25.1B + $58.4B + $44.3B = <b>$127.8B</b>\"]\nZ2 --> R\nZ3 --> R\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass C,P,A c1;\nclass T1,T2,T3,D c2;\nclass S,Y c3;\nclass Z1,Z2,Z3 c4;\nclass R c1;",
  "segTable": {
   "title": "Revenue contribution by cup size (per year)",
   "headers": [
    "Cup size",
    "Retail price",
    "Share of cups",
    "Cups a year",
    "Revenue a year",
    "Share of revenue"
   ],
   "rows": [
    [
     "Small",
     "$4.25",
     "25%",
     "5.90B",
     "$25.1B",
     "19.6%"
    ],
    [
     "Medium",
     "$5.50",
     "45%",
     "10.62B",
     "$58.4B",
     "45.7%"
    ],
    [
     "Large",
     "$6.25",
     "30%",
     "7.08B",
     "$44.3B",
     "34.6%"
    ],
    [
     "Total",
     "avg $5.41",
     "100%",
     "23.6B",
     "$127.8B",
     "100%"
    ]
   ]
  },
  "segNote": "The 20% of cups bought outside the home and the 25/45/30 size mix are assumptions. The prices ($4.25, $5.50, $6.25) are example retail prices. Revenue share differs from cup share because large cups cost more: large is 30% of cups but about 35% of revenue. Count only cups that are bought, because a home-brewed cup does not earn $5.",
  "secs": [
   {
    "h": "1. Clarify the problem",
    "ul": [
     "What are we estimating? Cups sold, and their revenue in dollars",
     "Geography: US",
     "Timeframe: per year",
     "Count cups bought in cafes and shops, not coffee made at home"
    ],
    "say": "Estimate the number of coffee cups sold each year in the US, and the revenue by cup size."
   },
   {
    "h": "2. Define approach",
    "ul": [
     "Top-down: start from US population, then adults, then usage groups, then cups bought, then price by size.",
     "Bottom-up: start from one cafe's cups a day and scale up."
    ],
    "say": "I'll take a top-down approach from the US population."
   },
   {
    "h": "3. Base population assumptions",
    "table": {
     "title": "Base population",
     "headers": [
      "Metric",
      "Value"
     ],
     "rows": [
      [
       "Total population (US)",
       "330M"
      ],
      [
       "Adults (70%)",
       "231M"
      ],
      [
       "Elderly (20%) and under 18 (10%)",
       "Left out"
      ]
     ]
    },
    "tip": "Use round numbers for mental math."
   },
   {
    "h": "4. Usage groups among adults",
    "table": {
     "title": "Cups drunk a day",
     "headers": [
      "Group",
      "% of adults",
      "People",
      "Cups a day each",
      "Cups a day"
     ],
     "rows": [
      [
       "A: Heavy",
       "50%",
       "115.5M",
       "2",
       "231M"
      ],
      [
       "B: Medium",
       "30%",
       "69.3M",
       "1",
       "69.3M"
      ],
      [
       "C: Light",
       "20%",
       "46.2M",
       "0.5",
       "23.1M"
      ],
      [
       "Total",
       "100%",
       "231M",
       "1.4 on average",
       "323.4M"
      ]
     ]
    }
   },
   {
    "h": "5. Cups bought, and price by size",
    "table": {
     "title": "Assumptions",
     "headers": [
      "Metric",
      "Value"
     ],
     "rows": [
      [
       "Bought outside the home",
       "20% of cups"
      ],
      [
       "Cup mix",
       "25% small, 45% medium, 30% large"
      ],
      [
       "Retail price",
       "$4.25 small, $5.50 medium, $6.25 large"
      ]
     ]
    },
    "ul": [
     "Cups sold = cups drunk x share bought outside the home",
     "Revenue = cups sold x average price, or add the three sizes"
    ]
   },
   {
    "h": "6. Step-by-step calculations",
    "ul": [
     "Cups drunk a day: 231M x 1.4 = 323.4M",
     "Cups sold a day: 323.4M x 20% = 64.7M",
     "Cups sold a year: 64.7M x 365 = 23.6B",
     "Average price: 25% x $4.25 + 45% x $5.50 + 30% x $6.25 = $5.41",
     "Revenue a year: 23.6B x $5.41 = about $127.8B"
    ]
   },
   {
    "h": "7. Final answer",
    "say": "About 23.6B cups sold a year, worth about $128B: roughly $25B from small, $58B from medium and $44B from large cups. Roughly $95B to $130B once I allow for uncertainty.",
    "ul": [
     "Always give a range to account for uncertainty."
    ]
   },
   {
    "h": "8. Sanity check",
    "ul": [
     "$127.8B / 330M people is about $390 a year, a bit over $1 a day for every person. That feels high, so lean toward the lower end of the range.",
     "The share bought outside the home is the biggest assumption. Test it first."
    ]
   },
   {
    "h": "9. Handling interviewer pushback",
    "table": {
     "title": "Pushback adjustments",
     "headers": [
      "Challenge",
      "Adjustment",
      "Result"
     ],
     "rows": [
      [
       "Too many cups bought outside the home",
       "20% to 15%",
       "17.7B cups, about $95.8B"
      ],
      [
       "Mix is more premium",
       "Small 15%, medium 45%, large 40%",
       "Average price $5.61, about $132.5B"
      ],
      [
       "Prices are too high",
       "All prices $0.25 lower",
       "Average price $5.16, about $121.9B"
      ],
      [
       "Only urban adults",
       "Multiply every group by about 50%",
       "About $64B"
      ]
     ]
    },
    "say": "With a more conservative share bought outside the home, revenue drops to about $96B. Mix and price matter less than that one assumption."
   },
   {
    "h": "10. Key takeaways",
    "ul": [
     "Structure: Clarify, Population, Segments, Cups bought, Price by size, Sanity check.",
     "Revenue share is not cup share. Higher priced sizes earn more than their share of cups.",
     "Count only what is sold, not what is consumed.",
     "Provide ranges instead of exact numbers.",
     "Be ready to adjust the biggest assumption under pushback."
    ],
    "tip": "Works for market sizing, product adoption, revenue estimates, operational capacity, or infrastructure units in the US."
   }
  ],
  "sampleTitle": "Sample answer: coffee cups sold per year in the US, with revenue by cup size",
  "sample": [
   [
    "Clarify",
    "I'll estimate coffee cups sold each year in the US, in cups and in dollars. I'll count cups bought in cafes and shops, not coffee made at home. Does that work?"
   ],
   [
    "Approach",
    "Top-down from population: 330M people, then adults, then usage groups, then how many cups are bought, then price by cup size."
   ],
   [
    "Cups",
    "Adults are about 70%, so 231M. Half are heavy drinkers at 2 cups a day, 30% medium at 1, 20% light at half a cup. That is 323M cups drunk a day. I'll assume about 20% are bought outside the home, so about 65M cups sold a day, or about 23.6B a year."
   ],
   [
    "Revenue",
    "I'll use retail prices of $4.25 for a small, $5.50 for a medium and $6.25 for a large, and assume 25% of cups are small, 45% medium and 30% large. That gives about $25B from small, $58B from medium and $44B from large, so about $128B a year, with an average price of about $5.41 a cup."
   ],
   [
    "Sanity check",
    "That is about $390 per person a year, or a bit over a dollar a day across the whole population. It feels on the high side. The share bought outside the home is my biggest assumption, so I would test it first."
   ],
   [
    "Range and pushback",
    "I'd say roughly $95B to $130B, leaning toward the lower end. If you think only 15% of cups are bought outside the home, it falls to about $96B. If the mix shifts toward large cups, revenue rises without more cups. Large cups earn 35% of revenue from 30% of cups."
   ]
  ]
 },
 "tennis": {
  "title": "Estimate the number of tennis balls sold in the US each year, and their revenue",
  "lead": "Bottom-up from the US population, split by how often people play, then revenue by can price; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Tennis balls sold in the US each year, with revenue<br/>Count balls, not cans (3 balls a can)\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Tennis players<br/>330M x 5% = <b>16.5M</b>\"]\nU --> G1[\"Casual: 70%<br/>11.55M players<br/>1 can a year = 11.55M cans\"]\nU --> G2[\"Recreational: 25%<br/>4.125M players<br/>12 cans a year = 49.5M cans\"]\nU --> G3[\"Serious: 5%<br/>0.825M players<br/>26 cans a year = 21.45M cans\"]\nG1 --> E[\"E: Evaluate<br/>Count the balls, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Cans a year<br/>11.55M + 49.5M + 21.45M = <b>82.5M cans</b>\"]\nE --> N[\"Balls in a can<br/>assumption = <b>3 balls</b>\"]\nR --> T[\"Balls sold a year<br/>82.5M cans x 3 = <b>247.5M</b>\"]\nN --> T\nT --> Z1[\"Value brand: 30% of cans<br/>24.75M x $3 = <b>$74.25M</b>\"]\nT --> Z2[\"Standard: 50% of cans<br/>41.25M x $4 = <b>$165.00M</b>\"]\nT --> Z3[\"Premium: 20% of cans<br/>16.5M x $6 = <b>$99.00M</b>\"]\nZ1 --> X[\"Revenue a year<br/>$74.25M + $165.00M + $99.00M = <b>$338.25M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 248M balls<br/>about $338M\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only 4% of people play<br/>16.5M becomes 13.2M<br/>247.5M x 0.8 = about <b>198M</b>\"]\nP --> Q2[\"Recreational players buy 9 cans<br/>4.125M x 9 = 37.1M cans<br/>= about <b>210M</b> balls\"]\nP --> Q3[\"Casual players buy none<br/>70.95M cans x 3<br/>= about <b>213M</b> balls\"]\nP --> Q4[\"Prices 10% lower<br/>$338.25M x 0.9<br/>= about <b>$304M</b>\"]\nP --> Q5[\"Premium mix 20 / 40 / 40<br/>average $4.60<br/>82.5M x $4.60 = about <b>$380M</b>\"]\nQ1 --> R[\"Updated range<br/>about 198M to 248M balls<br/>about $304M to $380M\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many people play, and how often\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Tennis balls by player type",
   "headers": [
    "Player group",
    "Share of players",
    "Players",
    "Cans bought a year each",
    "Cans a year",
    "Balls a year (x3)"
   ],
   "rows": [
    [
     "Casual",
     "70%",
     "11.55M",
     "1",
     "11.55M",
     "34.65M"
    ],
    [
     "Recreational",
     "25%",
     "4.125M",
     "12",
     "49.5M",
     "148.5M"
    ],
    [
     "Serious",
     "5%",
     "0.825M",
     "26",
     "21.45M",
     "64.35M"
    ],
    [
     "Total",
     "100%",
     "16.5M",
     "",
     "82.5M",
     "247.5M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by can type (per year)",
    "headers": [
     "Can type",
     "Price each",
     "Share of cans",
     "Cans a year",
     "Revenue a year",
     "Share of revenue"
    ],
    "rows": [
     [
      "Value brand",
      "$3",
      "30%",
      "24.75M",
      "$74.25M",
      "22%"
     ],
     [
      "Standard",
      "$4",
      "50%",
      "41.25M",
      "$165.00M",
      "49%"
     ],
     [
      "Premium",
      "$6",
      "20%",
      "16.5M",
      "$99.00M",
      "29%"
     ],
     [
      "Total",
      "avg $4.10",
      "100%",
      "82.5M",
      "$338.25M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as can share",
    "headers": [
     "Can type",
     "Share of cans",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Value brand",
      "30%",
      "22%",
      "Cheapest can, so it earns less than its share of cans"
     ],
     [
      "Standard",
      "50%",
      "49%",
      "Close to its share, because $4 is close to the $4.10 average"
     ],
     [
      "Premium",
      "20%",
      "29%",
      "Highest price, so 1 in 5 cans brings in nearly 3 in 10 dollars"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Tennis players",
      "330M x 5%",
      "16.5M"
     ],
     [
      "2",
      "Players in each group",
      "16.5M x 70%, 25% and 5%",
      "11.55M, 4.125M and 0.825M"
     ],
     [
      "3",
      "Cans a year",
      "11.55M x 1 + 4.125M x 12 + 0.825M x 26 = 11.55M + 49.5M + 21.45M",
      "82.5M cans"
     ],
     [
      "4",
      "Balls a year",
      "82.5M cans x 3 balls",
      "247.5M balls"
     ],
     [
      "5",
      "Average price per can",
      "30% x $3 + 50% x $4 + 20% x $6 = 0.90 + 2.00 + 1.20",
      "$4.10"
     ],
     [
      "6",
      "Revenue a year",
      "82.5M cans x $4.10",
      "$338.25M"
     ],
     [
      "7",
      "Per person check",
      "247.5M / 330M people, and 247.5M / 16.5M players",
      "0.75 balls per person and 15 balls per player"
     ],
     [
      "8",
      "Revenue per person",
      "$338.25M / 330M people, and $338.25M / 16.5M players",
      "about $1 per person and about $20 per player"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 247.5M balls and $338M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only 4% of people play",
     "330M x 4% = 13.2M players, which is 80% of 16.5M. 247.5M x 0.8",
     "about 198M balls"
    ],
    [
     "Recreational players buy 9 cans, not 12",
     "11.55M + 4.125M x 9 + 0.825M x 26 = 11.55M + 37.1M + 21.45M = 70.1M cans, x 3",
     "about 210M balls"
    ],
    [
     "Casual players buy no cans",
     "82.5M - 11.55M = 70.95M cans, x 3",
     "about 213M balls"
    ],
    [
     "Prices are 10% lower",
     "$338.25M x 0.9",
     "about $304M"
    ],
    [
     "Mix shifts to premium: value 20%, standard 40%, premium 40%",
     "Average 0.6 + 1.6 + 2.4 = $4.60: 82.5M x $4.60",
     "about $380M"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many tennis balls are sold in the US in a year, and what they are worth. I'll count balls, not cans, and use 3 balls a can. I'll include stores and online, and leave out used balls. Does that work?"
   ],
   [
    "Approach",
    "I'll go bottom-up from players. Balls go dead after a few sessions, so how much people play drives how many they buy. I'll start with 330M people, find the players, split them by how often they play, and count cans for each group."
   ],
   [
    "Players and cans",
    "I'll assume 5% of people play, so 16.5M players. Casual players are 70% and buy 1 can a year, about 11.6M cans. Recreational players are 25% and buy 12 cans, about 49.5M cans. Serious players are 5% and buy 26 cans, about 21.5M. That is 82.5M cans, or about 248M balls."
   ],
   [
    "Revenue",
    "I'll assume cans sell at three price levels. Value brands are 30% of cans at $3, standard is 50% at $4, and premium is 20% at $6. The average is $4.10 a can. So 82.5M cans times $4.10 is about $338M a year. Premium cans are 20% of cans but about 29% of dollars."
   ],
   [
    "Sanity check",
    "That is about 0.75 balls per person, or about 15 balls per player per year, and about $20 per player. That fits someone who plays weekly and opens a new can every month or so. Recreational players drive about 60% of the balls, so that group is my key assumption."
   ],
   [
    "Range and pushback",
    "I'd say roughly 200M to 250M balls, worth about $300M to $380M. If only 4% of people play, it drops to about 198M. If prices are 10% lower, revenue is about $304M. The answer is most sensitive to how many people play and how often they buy."
   ]
  ]
 },
 "tires": {
  "title": "Estimate the number of car tires sold in the US each year, and their revenue",
  "lead": "Stock and flow from the US population, split by vehicle group, then revenue by tire type.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>New tires sold in the US each year, with revenue<br/>Replacement tires plus tires on new vehicles\"]\nC --> P[\"US population<br/>330M\"]\nP --> V[\"Vehicles on the road<br/>330M x 0.85 per person = <b>about 280M</b>\"]\nV --> G1[\"Cars: 50%<br/>140M x 4 = 560M tires<br/>life 4 years = 140M a year\"]\nV --> G2[\"SUVs and light trucks: 45%<br/>126M x 4 = 504M tires<br/>life 3.5 years = 144M a year\"]\nV --> G3[\"Commercial: 5%<br/>14M x 8 = 112M tires<br/>life 2 years = 56M a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the tires sold, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Replacement tires a year<br/>140M + 144M + 56M = <b>340M</b>\"]\nE --> N[\"Tires on new vehicles<br/>15M a year x 4 tires = <b>60M</b>\"]\nR --> T[\"Tires sold a year<br/>340M + 60M = <b>400M</b>\"]\nN --> T\nT --> Z1[\"Budget: 30% of replacements<br/>102M x $90 = <b>$9.18B</b>\"]\nT --> Z2[\"Mid-range: 50% of replacements<br/>170M x $140 = <b>$23.80B</b>\"]\nT --> Z3[\"Premium: 20% of replacements<br/>68M x $220 = <b>$14.96B</b>\"]\nT --> Z4[\"Original equipment<br/>60M x $75 = <b>$4.50B</b>\"]\nZ1 --> X[\"Revenue a year<br/>$9.18B + $23.80B + $14.96B + $4.50B = <b>$52.44B</b>\"]\nZ2 --> X\nZ3 --> X\nZ4 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,V c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3,Z4 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 400M tires<br/>about $52.44B\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only 250M vehicles<br/>340M x 250 / 280 = 304M<br/>304M + 60M = about <b>364M</b>\"]\nP --> Q2[\"Tires last one year longer<br/>112M + 112M + 37M = 261M<br/>261M + 60M = about <b>321M</b>\"]\nP --> Q3[\"Leave out commercial<br/>340M - 56M = 284M<br/>284M + 60M = about <b>344M</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$52.44B x 0.9<br/>= about <b>$47.2B</b>\"]\nP --> Q5[\"Premium mix 30 / 40 / 30<br/>average $149<br/>= about <b>$55.16B</b>\"]\nQ1 --> R[\"Updated range<br/>about 320M to 400M tires<br/>about $47B to $55B\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>tire lifespan\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Tires by vehicle group",
   "headers": [
    "Vehicle group",
    "Share of vehicles",
    "Vehicles",
    "Tires each",
    "Tires in use",
    "Life (years)",
    "Replaced a year"
   ],
   "rows": [
    [
     "Cars",
     "50%",
     "140M",
     "4",
     "560M",
     "4.0",
     "140M"
    ],
    [
     "SUVs and light trucks",
     "45%",
     "126M",
     "4",
     "504M",
     "3.5",
     "144M"
    ],
    [
     "Commercial trucks and buses",
     "5%",
     "14M",
     "8",
     "112M",
     "2.0",
     "56M"
    ],
    [
     "Total",
     "100%",
     "280M",
     "",
     "1,176M",
     "",
     "340M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by tire type (per year)",
    "headers": [
     "Tire type",
     "Price each",
     "Share of tires",
     "Tires a year",
     "Revenue a year",
     "Share of revenue"
    ],
    "rows": [
     [
      "Budget",
      "$90",
      "30% of replacements",
      "102M",
      "$9.18B",
      "17.5%"
     ],
     [
      "Mid-range",
      "$140",
      "50% of replacements",
      "170M",
      "$23.80B",
      "45.4%"
     ],
     [
      "Premium",
      "$220",
      "20% of replacements",
      "68M",
      "$14.96B",
      "28.5%"
     ],
     [
      "Original equipment (new vehicles)",
      "$75",
      "all new-vehicle tires",
      "60M",
      "$4.50B",
      "8.6%"
     ],
     [
      "Total",
      "avg $141 replacement",
      "",
      "400M",
      "$52.44B",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as tire share",
    "headers": [
     "Tire type",
     "Share of tires sold",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Budget",
      "25.5% (102M of 400M)",
      "17.5%",
      "Cheapest tire, so it earns less than its share of tires"
     ],
     [
      "Mid-range",
      "42.5% (170M of 400M)",
      "45.4%",
      "Close to its tire share, because $140 is near the $141 average"
     ],
     [
      "Premium",
      "17.0% (68M of 400M)",
      "28.5%",
      "Highest price, so it earns more than its share of tires"
     ],
     [
      "Original equipment",
      "15.0% (60M of 400M)",
      "8.6%",
      "Automakers pay a low price per tire, so it earns much less than its share"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Vehicles on the road",
      "330M x 0.85 per person",
      "about 280M"
     ],
     [
      "2",
      "Tires in use",
      "280M vehicles: cars 140M x 4, SUVs and light trucks 126M x 4, commercial 14M x 8",
      "1,176M"
     ],
     [
      "3",
      "Replacement tires a year",
      "Each group's tires in use / its life: 560M / 4 + 504M / 3.5 + 112M / 2 = 140M + 144M + 56M",
      "340M"
     ],
     [
      "4",
      "Tires on new vehicles",
      "15M new vehicles x 4",
      "60M"
     ],
     [
      "5",
      "Tires sold a year",
      "340M + 60M",
      "400M"
     ],
     [
      "6",
      "Average replacement price",
      "30% x $90 + 50% x $140 + 20% x $220 = 27 + 70 + 44",
      "$141"
     ],
     [
      "7",
      "Revenue a year",
      "340M x $141 + 60M x $75 = $47.9B + $4.5B",
      "$52.4B"
     ],
     [
      "8",
      "Per person check",
      "400M / 330M people, and $52.4B / 330M people",
      "1.2 tires and about $160 a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 400M tires and $52.4B)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only 250M vehicles on the road",
     "340M x 250 / 280 = 304M replacements, + 60M",
     "about 364M tires"
    ],
    [
     "Tires last one year longer (5, 4.5 and 3 years)",
     "560M / 5 + 504M / 4.5 + 112M / 3 = 112M + 112M + 37M = 261M, + 60M",
     "about 321M tires"
    ],
    [
     "Leave out commercial vehicles",
     "340M - 56M = 284M replacements, + 60M",
     "about 344M tires"
    ],
    [
     "Prices are 10% lower",
     "$52.44B x 0.9",
     "about $47.2B"
    ],
    [
     "Mix shifts to premium: budget 30%, mid 40%, premium 30%",
     "Average $149: 340M x $149 + $4.5B",
     "about $55.16B"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate new tires sold each year in the US, in units and in dollars. I'll count replacement tires plus tires fitted to new vehicles, and leave out retreads. Does that work?"
   ],
   [
    "Approach",
    "Stock and flow, starting from the US population: 330M people, then vehicles, then tires in use by vehicle group, divided by how long each tire lasts, plus tires on new vehicles."
   ],
   [
    "Tires",
    "About 0.85 vehicles per person gives about 280M vehicles. Half are cars, 45% are SUVs and light trucks, 5% are commercial. That is about 1.2B tires in use. Cars last about 4 years, SUVs about 3.5 and commercial about 2, so about 340M replacements a year. New vehicles add 15M x 4, which is 60M. That is about 400M tires a year."
   ],
   [
    "Revenue",
    "I'll assume 30% of replacements are budget at $90, 50% mid-range at $140 and 20% premium at $220, which is an average of $141. That gives about $9B, $24B and $15B. Original-equipment tires at about $75 add $4.5B. The total is about $52B a year."
   ],
   [
    "Sanity check",
    "That is about 1.2 tires and about $160 per person a year. One set of four every four years per vehicle, plus new cars, fits the 1.2. The tire prices are my biggest assumption, so I would test those first."
   ],
   [
    "Range and pushback",
    "I'd say roughly 320 to 400M tires, worth about $47B to $55B. If tires last one year longer it falls to about 321M. If the mix shifts to premium, revenue rises to about $55B without selling any more tires. The answer is most sensitive to tire lifespan."
   ]
  ]
 },
 "smartphones": {
  "title": "Estimate the number of smartphones sold in the US each year, and their revenue",
  "lead": "Stock and flow from the US population, split by how often people upgrade, then revenue by phone type.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>New smartphones sold in the US each year, with revenue<br/>Replacements plus first-time buyers\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Smartphone users<br/>330M x 85% = <b>about 280M</b>\"]\nU --> G1[\"Frequent upgraders: 25%<br/>70M users<br/>every 2 years = 35M a year\"]\nU --> G2[\"Typical users: 50%<br/>140M users<br/>every 3 years = 46.7M a year\"]\nU --> G3[\"Long keepers: 25%<br/>70M users<br/>every 5 years = 14M a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the phones sold, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Replacement phones a year<br/>35M + 46.7M + 14M = <b>about 96M</b>\"]\nE --> N[\"First-time buyers<br/>kids and new users = <b>about 6M</b>\"]\nR --> T[\"Phones sold a year<br/>96M + 6M = <b>about 102M</b>\"]\nN --> T\nT --> Z1[\"Budget: 30%<br/>30.6M x $250 = <b>$7.65B</b>\"]\nT --> Z2[\"Mid-range: 40%<br/>40.8M x $500 = <b>$20.40B</b>\"]\nT --> Z3[\"Premium: 30%<br/>30.6M x $900 = <b>$27.54B</b>\"]\nZ1 --> X[\"Revenue a year<br/>$7.65B + $20.40B + $27.54B = <b>$55.59B</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 102M phones<br/>about $55.59B\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Phones last one year longer<br/>(3, 4 and 6 years)<br/>70M + 6M = about <b>76M</b>\"]\nP --> Q2[\"Only 75% own a smartphone<br/>96M x 248 / 280 = 85M<br/>85M + 6M = about <b>91M</b>\"]\nP --> Q3[\"Skip first-time buyers<br/>replacements only<br/>= about <b>96M</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$55.59B x 0.9<br/>= about <b>$50.0B</b>\"]\nP --> Q5[\"Premium mix 20 / 40 / 40<br/>average $610<br/>= about <b>$62.2B</b>\"]\nQ1 --> R[\"Updated range<br/>about 76M to 102M phones<br/>about $50B to $62B\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how long people keep their phone\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Phones by upgrade habit",
   "headers": [
    "User group",
    "Share of users",
    "Users",
    "Years between upgrades",
    "Phones bought a year"
   ],
   "rows": [
    [
     "Frequent upgraders",
     "25%",
     "70M",
     "2",
     "35.0M"
    ],
    [
     "Typical users",
     "50%",
     "140M",
     "3",
     "46.7M"
    ],
    [
     "Long keepers",
     "25%",
     "70M",
     "5",
     "14.0M"
    ],
    [
     "Replacements total",
     "100%",
     "280M",
     "",
     "96M"
    ],
    [
     "First-time buyers",
     "",
     "",
     "",
     "6M"
    ],
    [
     "Phones sold a year",
     "",
     "",
     "",
     "102M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by phone type (per year)",
    "headers": [
     "Phone type",
     "Price each",
     "Share of phones",
     "Phones a year",
     "Revenue a year",
     "Share of revenue"
    ],
    "rows": [
     [
      "Budget (under $300)",
      "$250",
      "30%",
      "30.6M",
      "$7.65B",
      "13.8%"
     ],
     [
      "Mid-range ($300 to $700)",
      "$500",
      "40%",
      "40.8M",
      "$20.40B",
      "36.7%"
     ],
     [
      "Premium (over $700)",
      "$900",
      "30%",
      "30.6M",
      "$27.54B",
      "49.5%"
     ],
     [
      "Total",
      "avg $545",
      "100%",
      "102M",
      "$55.59B",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as phone share",
    "headers": [
     "Phone type",
     "Share of phones",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Budget",
      "30%",
      "13.8%",
      "Cheapest phone, so it earns far less than its share of phones"
     ],
     [
      "Mid-range",
      "40%",
      "36.7%",
      "Slightly below its phone share, because $500 is below the $545 average"
     ],
     [
      "Premium",
      "30%",
      "49.5%",
      "Highest price, so 3 in 10 phones bring in about half the revenue"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Smartphone users",
      "330M x 85%",
      "about 280M"
     ],
     [
      "2",
      "Replacement phones a year",
      "Each group's users / years between upgrades: 70M / 2 + 140M / 3 + 70M / 5 = 35M + 46.7M + 14M",
      "about 96M"
     ],
     [
      "3",
      "First-time buyers",
      "Kids getting a first phone and new users",
      "about 6M"
     ],
     [
      "4",
      "Phones sold a year",
      "96M + 6M",
      "about 102M"
     ],
     [
      "5",
      "Average price",
      "30% x $250 + 40% x $500 + 30% x $900 = 75 + 200 + 270",
      "$545"
     ],
     [
      "6",
      "Revenue a year",
      "102M x $545",
      "about $55.6B"
     ],
     [
      "7",
      "Per person check",
      "102M / 330M people, and $55.6B / 330M people",
      "0.31 phones and about $170 a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 102M phones and $55.6B)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Phones last one year longer (3, 4 and 6 years)",
     "70M / 3 + 140M / 4 + 70M / 6 = 23M + 35M + 12M = 70M, + 6M",
     "about 76M phones"
    ],
    [
     "Only 75% own a smartphone",
     "330M x 75% = 248M users. 96M x 248 / 280 = 85M, + 6M",
     "about 91M phones"
    ],
    [
     "Skip first-time buyers",
     "Replacements only",
     "about 96M phones"
    ],
    [
     "Prices are 10% lower",
     "$55.59B x 0.9",
     "about $50.0B"
    ],
    [
     "Mix shifts to premium: budget 20%, mid 40%, premium 40%",
     "Average $610: 102M x $610",
     "about $62.2B"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate new smartphones sold each year in the US, in units and in dollars. I'll count replacements plus first-time buyers, and leave out refurbished phones. Does that work?"
   ],
   [
    "Approach",
    "Stock and flow, starting from the US population: 330M people, then smartphone users by how often they upgrade, divided by the years between upgrades, plus first-time buyers."
   ],
   [
    "Phones",
    "About 85% of 330M own a smartphone, so about 280M users. A quarter upgrade every 2 years, half every 3 and a quarter every 5. That is 35M plus 47M plus 14M, so about 96M replacements a year. First-time buyers add about 6M. That is about 102M phones a year."
   ],
   [
    "Revenue",
    "I'll assume 30% of phones are budget at $250, 40% mid-range at $500 and 30% premium at $900, which is an average of $545. That gives about $7.7B, $20.4B and $27.5B, so about $55.6B a year. Premium phones are 30% of units but about half of revenue."
   ],
   [
    "Sanity check",
    "That is about 0.3 phones and about $170 per person a year. One phone every three years per user fits that. The price mix is my biggest revenue assumption, and upgrade cycle is the biggest assumption for units."
   ],
   [
    "Range and pushback",
    "I'd say roughly 85 to 105M phones, worth about $50B to $62B. If people keep their phones one year longer it falls to about 76M. If prices are 10% lower, revenue is about $50B. The answer is most sensitive to how long people keep their phone."
   ]
  ]
 },
 "pizza": {
  "title": "Estimate the number of pizza orders placed in New York City each day, and their revenue",
  "lead": "Top-down from NYC's 8.3M people and 3.2M households, split by how often they order, then revenue by order type, with all figures per day and all inputs illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Pizza orders placed in NYC each day, with revenue<br/>Delivery and takeout, count orders not pies\"]\nC --> P[\"NYC population<br/>about 8.3M\"]\nP --> U[\"Households<br/>8.3M / 2.6 people = <b>about 3.2M</b>\"]\nU --> G1[\"Frequent: 10%<br/>320K households<br/>x 5 a month = 1.6M orders\"]\nU --> G2[\"Regular: 40%<br/>1,280K households<br/>x 2 a month = 2.56M orders\"]\nU --> G3[\"Rare or never: 50%<br/>1,600K households<br/>x 0.2 a month = 0.32M orders\"]\nG1 --> E[\"E: Evaluate<br/>Count the orders, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Household orders a day<br/>(1.6M + 2.56M + 0.32M) / 30<br/>= <b>about 149K</b>\"]\nE --> N[\"Office, student and tourist orders<br/>149K x 30% = <b>about 45K</b>\"]\nR --> T[\"Orders a day<br/>149K + 45K = <b>about 194K</b>\"]\nN --> T\nT --> Z1[\"Single or slice: 30%<br/>58K orders x $10 = <b>$0.58M</b>\"]\nT --> Z2[\"Standard pie: 45%<br/>87K orders x $25 = <b>$2.18M</b>\"]\nT --> Z3[\"Party order: 25%<br/>49K orders x $50 = <b>$2.43M</b>\"]\nZ1 --> X[\"Revenue a day<br/>$0.58M + $2.18M + $2.43M = <b>$5.19M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 194K orders<br/>about $5.19M a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Frequent households order 7 a month<br/>(2.24M + 2.56M + 0.32M) / 30 x 1.3<br/>= about <b>222K</b>\"]\nP --> Q2[\"Regular households order 3 a month<br/>(1.6M + 3.84M + 0.32M) / 30 x 1.3<br/>= about <b>250K</b>\"]\nP --> Q3[\"No office, student or tourist orders<br/>households only<br/>= about <b>149K</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$5.19M x 0.9<br/>= about <b>$4.67M</b>\"]\nP --> Q5[\"More single orders: 45 / 40 / 15<br/>average $22<br/>= about <b>$4.27M</b>\"]\nQ1 --> R[\"Updated range<br/>about 149K to 250K orders<br/>about $4.3M to $6.7M a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how often households order\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Orders by household type",
   "headers": [
    "Household group",
    "Share of households",
    "Households",
    "Orders per household per month",
    "Orders a month"
   ],
   "rows": [
    [
     "Frequent",
     "10%",
     "320K",
     "5",
     "1.60M"
    ],
    [
     "Regular",
     "40%",
     "1,280K",
     "2",
     "2.56M"
    ],
    [
     "Rare or never",
     "50%",
     "1,600K",
     "0.2",
     "0.32M"
    ],
    [
     "Household orders a month",
     "100%",
     "3,200K",
     "",
     "4.48M"
    ],
    [
     "Household orders a day (/ 30)",
     "",
     "",
     "",
     "149K"
    ],
    [
     "Add office, student and tourist orders (+30%)",
     "",
     "",
     "",
     "45K"
    ],
    [
     "Orders a day",
     "",
     "",
     "",
     "194K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by order type (per day)",
    "headers": [
     "Order type",
     "Price each",
     "Share of orders",
     "Orders a day",
     "Revenue a day",
     "Share of revenue"
    ],
    "rows": [
     [
      "Single or slice",
      "$10",
      "30%",
      "58.2K",
      "$0.58M",
      "11.2%"
     ],
     [
      "Standard pie",
      "$25",
      "45%",
      "87.4K",
      "$2.18M",
      "42.1%"
     ],
     [
      "Party order",
      "$50",
      "25%",
      "48.5K",
      "$2.43M",
      "46.7%"
     ],
     [
      "Total",
      "avg $26.75",
      "100%",
      "194K",
      "$5.19M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as order share",
    "headers": [
     "Order type",
     "Share of orders",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Single or slice",
      "30%",
      "11.2%",
      "Cheap order, so it earns far less than its share of orders"
     ],
     [
      "Standard pie",
      "45%",
      "42.1%",
      "Below its order share, because $25 is just below the $26.75 average"
     ],
     [
      "Party order",
      "25%",
      "46.7%",
      "Highest price, so 1 in 4 orders brings in almost half the revenue"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Households",
      "8.3M / 2.6 people",
      "about 3.2M"
     ],
     [
      "2",
      "Orders a month from each group",
      "320K x 5 + 1,280K x 2 + 1,600K x 0.2 = 1.6M + 2.56M + 0.32M",
      "about 4.48M"
     ],
     [
      "3",
      "Household orders a day",
      "4.48M / 30",
      "about 149K"
     ],
     [
      "4",
      "Orders a day",
      "149K x 1.3 (adds 30% for offices, students and tourists)",
      "about 194K"
     ],
     [
      "5",
      "Average order value",
      "30% x $10 + 45% x $25 + 25% x $50 = 3.00 + 11.25 + 12.50",
      "$26.75"
     ],
     [
      "6",
      "Revenue a day",
      "194K x $26.75",
      "about $5.19M"
     ],
     [
      "7",
      "Cross-check from supply",
      "2,500 pizzerias x 80 orders a day",
      "about 200K orders"
     ],
     [
      "8",
      "Per resident check",
      "8.3M / 194K people per order, and $5.19M / 8.3M people",
      "1 order per 43 residents and about $0.63 a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 194K orders and $5.19M a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Frequent households order 7 a month, not 5",
     "320K x 7 = 2.24M. (2.24M + 2.56M + 0.32M) / 30 x 1.3",
     "about 222K orders"
    ],
    [
     "Regular households order 3 a month, not 2",
     "1,280K x 3 = 3.84M. (1.6M + 3.84M + 0.32M) / 30 x 1.3",
     "about 250K orders"
    ],
    [
     "No office, student or tourist orders",
     "Households only",
     "about 149K orders"
    ],
    [
     "Prices are 10% lower",
     "$5.19M x 0.9",
     "about $4.67M a day"
    ],
    [
     "Mix shifts to singles: single 45%, pie 40%, party 15%",
     "Average $22: 194K x $22",
     "about $4.27M a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate pizza orders placed in New York City each day, in orders and in dollars. I'll count delivery and takeout, and count orders rather than pizzas. I'll leave out dine-in and frozen pizza from stores. I'll use typical menu prices. Does that work?"
   ],
   [
    "Approach",
    "Top-down by households. NYC has about 8.3M people and about 2.6 people per household. I'll split households by how often they order pizza, add office, student and tourist orders, and then price the orders by type."
   ],
   [
    "Orders",
    "That is about 3.2M households. Ten percent order about 5 times a month, 40 percent about 2 times, and half almost never, about 0.2. That is 4.48M orders a month, or about 149K a day. Offices, students and tourists add 30 percent, so about 194K orders a day."
   ],
   [
    "Revenue",
    "I'll assume 30% of orders are a single or slice at $10, 45% a standard pie at $25 and 25% a party order at $50. That is an average of $26.75. It gives about $0.58M, $2.18M and $2.43M, so about $5.19M a day. Party orders are a quarter of orders but nearly half of revenue."
   ],
   [
    "Sanity check",
    "That is about 1 order for every 43 residents, and about $0.63 per resident per day. From supply, 2,500 pizzerias at 80 orders each gives about 200K, which is close. How often the frequent and regular households order is my biggest driver."
   ],
   [
    "Range and pushback",
    "I'd say roughly 150K to 250K orders a day, worth about $4.3M to $6.7M. If regular households order 3 times a month, it rises to 250K. If prices are 10% lower, revenue is about $4.7M. The answer is most sensitive to how often households order."
   ]
  ]
 },
 "gas": {
  "title": "Estimate the number of gas stations in the US",
  "lead": "Demand versus supply: fill-ups a day from three driver groups divided by the fill-ups one station serves, with the share by station type instead of dollars because there is no price; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Retail gas stations in the US<br/>Count stations, not pumps\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Vehicles that use gas<br/>330M x 85% = <b>about 280M</b>\"]\nU --> G1[\"Frequent fillers: 25%<br/>70M vehicles<br/>every 7 days = 10M a day\"]\nU --> G2[\"Typical drivers: 50%<br/>140M vehicles<br/>every 10 days = 14M a day\"]\nU --> G3[\"Light drivers: 25%<br/>70M vehicles<br/>every 20 days = 3.5M a day\"]\nG1 --> E[\"E: Evaluate<br/>Count the stations, then who they serve\"]\nG2 --> E\nG3 --> E\nE --> R[\"Fill-ups a day<br/>10M + 14M + 3.5M = <b>27.5M</b>\"]\nE --> N[\"Fill-ups one station serves a day<br/>8 pumps x 25 = <b>200</b>\"]\nR --> T[\"Gas stations<br/>27.5M / 200 = <b>about 138K</b>\"]\nN --> T\nT --> Z1[\"Small: 40% (4 pumps)<br/>55K stations x 100 fill-ups<br/>= <b>5.5M a day</b>\"]\nT --> Z2[\"Standard: 40% (8 pumps)<br/>55K stations x 200 fill-ups<br/>= <b>11M a day</b>\"]\nT --> Z3[\"Large: 20% (16 pumps)<br/>27.5K stations x 400 fill-ups<br/>= <b>11M a day</b>\"]\nZ1 --> X[\"Fill-ups served a day<br/>5.5M + 11M + 11M = <b>27.5M</b><br/>matches demand\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 138K stations<br/>27.5M fill-ups a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Typical drivers fill up every 14 days, not 10<br/>10M + 10M + 3.5M = 23.5M<br/>23.5M / 200 = about <b>118K</b>\"]\nP --> Q2[\"Busier pumps: 30 fill-ups, not 25<br/>8 x 30 = 240 per station<br/>27.5M / 240 = about <b>114.6K</b>\"]\nP --> Q3[\"Only 250M vehicles use gas<br/>250M / 280M x 27.5M = 24.6M<br/>24.6M / 200 = about <b>122.8K</b>\"]\nP --> Q4[\"Bigger stations: mix 30 / 40 / 30<br/>average 230 fill-ups per station<br/>27.5M / 230 = about <b>119.6K</b>\"]\nP --> Q5[\"Only 7 pumps per station<br/>7 x 25 = 175 per station<br/>27.5M / 175 = about <b>157.1K</b>\"]\nQ1 --> R[\"Updated range<br/>about 115K to 157K stations\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>fill-ups per station per day\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Fill-ups by driver group",
   "headers": [
    "Driver group",
    "Share of vehicles",
    "Vehicles",
    "Days between fill-ups",
    "Fill-ups a day"
   ],
   "rows": [
    [
     "Frequent fillers",
     "25%",
     "70M",
     "7",
     "10M"
    ],
    [
     "Typical drivers",
     "50%",
     "140M",
     "10",
     "14M"
    ],
    [
     "Light drivers",
     "25%",
     "70M",
     "20",
     "3.5M"
    ],
    [
     "Fill-ups a day (total)",
     "100%",
     "280M",
     "",
     "27.5M"
    ],
    [
     "Fill-ups one station serves",
     "",
     "",
     "8 pumps x 25",
     "200"
    ],
    [
     "Gas stations",
     "",
     "",
     "27.5M / 200",
     "about 138K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by station type (share of fill-ups served)",
    "headers": [
     "Station type",
     "Pumps",
     "Fill-ups each a day",
     "Share of stations",
     "Stations",
     "Fill-ups served a day",
     "Share of fill-ups"
    ],
    "rows": [
     [
      "Small stations",
      "4",
      "100",
      "40%",
      "55K",
      "5.5M",
      "20%"
     ],
     [
      "Standard stations",
      "8",
      "200",
      "40%",
      "55K",
      "11M",
      "40%"
     ],
     [
      "Large stations",
      "16",
      "400",
      "20%",
      "27.5K",
      "11M",
      "40%"
     ],
     [
      "Total",
      "avg 8",
      "avg 200",
      "100%",
      "137.5K",
      "27.5M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why share of fill-ups is not the same as share of stations",
    "headers": [
     "Station type",
     "Share of stations",
     "Share of fill-ups",
     "Why"
    ],
    "rows": [
     [
      "Small",
      "40%",
      "20%",
      "Only 4 pumps, so each small station serves just 100 fill-ups, half the average"
     ],
     [
      "Standard",
      "40%",
      "40%",
      "8 pumps is the average station, so its share of fill-ups matches its share of stations"
     ],
     [
      "Large",
      "20%",
      "40%",
      "16 pumps, so 1 in 5 stations serves 4 in 10 fill-ups"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Vehicles that use gas",
      "330M x 85%",
      "about 280M"
     ],
     [
      "2",
      "Fill-ups a day",
      "Each group's vehicles / days between fill-ups: 70M / 7 + 140M / 10 + 70M / 20 = 10M + 14M + 3.5M",
      "27.5M"
     ],
     [
      "3",
      "Fill-ups a year (check)",
      "27.5M x 365, then / 280M vehicles",
      "about 10B, or 36 per vehicle"
     ],
     [
      "4",
      "Fill-ups one station serves a day",
      "8 pumps x 25 fill-ups per pump",
      "200"
     ],
     [
      "5",
      "Average pumps (check)",
      "40% x 4 + 40% x 8 + 20% x 16 = 1.6 + 3.2 + 3.2",
      "8 pumps"
     ],
     [
      "6",
      "Gas stations",
      "27.5M / 200",
      "137.5K, about 138K"
     ],
     [
      "7",
      "Stations by type",
      "137.5K x 40%, 40% and 20%",
      "55K, 55K and 27.5K"
     ],
     [
      "8",
      "Per person check",
      "330M people / 137.5K stations",
      "about 2,400 people per station"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 138K stations and 27.5M fill-ups a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Typical drivers fill up every 14 days, not 10",
     "140M / 14 = 10M. 10M + 10M + 3.5M = 23.5M a day. 23.5M / 200",
     "about 118K stations"
    ],
    [
     "Busier pumps: 30 fill-ups a day, not 25",
     "8 x 30 = 240 per station. 27.5M / 240",
     "about 114.6K stations"
    ],
    [
     "Only 250M vehicles use gas",
     "250M / 280M x 27.5M = 24.6M a day. 24.6M / 200",
     "about 122.8K stations"
    ],
    [
     "Mix shifts to bigger stations: 30% small, 40% standard, 30% large",
     "30% x 100 + 40% x 200 + 30% x 400 = 230 fill-ups each. 27.5M / 230",
     "about 119.6K stations"
    ],
    [
     "Only 7 pumps per station",
     "7 x 25 = 175 per station. 27.5M / 175",
     "about 157.1K stations"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I will estimate how many retail gas stations there are in the US. I will count stations, not pumps, and leave out private fuel tanks and truck depots. I will also split stations into small, standard and large ones. Does that work for you?"
   ],
   [
    "Approach",
    "I will use demand versus supply. Demand is how many fill-ups happen in the US each day. Supply is how many fill-ups one station can serve. Stations equal demand divided by supply. I start from 330M people and split the vehicles by how often they fill up."
   ],
   [
    "Fill-ups and stations",
    "About 85% of 330M gives about 280M vehicles that use gas. A quarter fill up every 7 days, half every 10 days and a quarter every 20 days. That is 10M plus 14M plus 3.5M, so 27.5M fill-ups a day. One station has 8 pumps at 25 fill-ups each, so 200 a day. Then 27.5M divided by 200 is about 138K stations."
   ],
   [
    "Contribution by type",
    "There is no price here, so I use the share by station type. I assume 40% are small with 4 pumps, 40% standard with 8 and 20% large with 16. That is 55K, 55K and 27.5K stations. They serve 5.5M, 11M and 11M fill-ups a day. Small stations are 40% of stations but only 20% of fill-ups."
   ],
   [
    "Sanity check",
    "That is about one station for every 2,400 people. It also means about 10B fill-ups a year, or 36 for each of the 280M vehicles. That feels right for a car-based country. The biggest driver is how many fill-ups one station serves in a day, because the whole answer is divided by it."
   ],
   [
    "Range and pushback",
    "I would say roughly 130K to 150K stations, with 138K as my best guess. If typical drivers fill up every 14 days, it falls to about 118K. If stations only have 7 pumps, it rises to about 157K. The answer is most sensitive to fill-ups per station per day."
   ]
  ]
 },
 "cards": {
  "title": "Estimate the number of credit and debit card transactions in the US each day",
  "lead": "Top-down from the US population: cardholders split by how often they pay, plus recurring payments, then dollars by purchase size; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Credit and debit card transactions in the US each day, with dollars spent<br/>Count in-store, online and recurring payments\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Cardholders<br/>about 260M adults, 85% have a card<br/>= <b>about 220M</b>\"]\nU --> G1[\"Heavy users: 25%<br/>55M cardholders<br/>x 3 purchases a day = 165M\"]\nU --> G2[\"Typical users: 50%<br/>110M cardholders<br/>x 1.2 purchases a day = 132M\"]\nU --> G3[\"Light users: 25%<br/>55M cardholders<br/>x 0.6 purchases a day = 33M\"]\nG1 --> E[\"E: Evaluate<br/>Count the transactions, then the dollars\"]\nG2 --> E\nG3 --> E\nE --> R[\"Purchases a day<br/>165M + 132M + 33M = <b>330M</b>\"]\nE --> N[\"Recurring payments a day<br/>220M x 0.3 = <b>66M</b>\"]\nR --> T[\"Card transactions a day<br/>330M + 66M = <b>about 396M</b>\"]\nN --> T\nT --> Z1[\"Small (under $20): 60%<br/>237.6M x $10 = <b>$2.38B</b>\"]\nT --> Z2[\"Medium ($20 to $100): 30%<br/>118.8M x $50 = <b>$5.94B</b>\"]\nT --> Z3[\"Large (over $100): 10%<br/>39.6M x $250 = <b>$9.90B</b>\"]\nZ1 --> X[\"Card spending a day<br/>$2.38B + $5.94B + $9.90B = <b>$18.22B</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 396M transactions a day<br/>about $18.2B spent a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Typical users make 1 purchase a day, not 1.2<br/>165M + 110M + 33M + 66M<br/>= about <b>374M</b>\"]\nP --> Q2[\"Only 75% of adults have a card<br/>260M x 75% = 195M cardholders<br/>396M x 195 / 220 = about <b>351M</b>\"]\nP --> Q3[\"Recurring payments 0.45 a day, not 0.3<br/>220M x 0.45 = 99M<br/>330M + 99M = about <b>429M</b>\"]\nP --> Q4[\"Average spend 20% lower<br/>$18.22B x 0.8<br/>= about <b>$14.6B</b>\"]\nP --> Q5[\"More small purchases: 70 / 25 / 5<br/>average $32<br/>396M x $32 = about <b>$12.7B</b>\"]\nQ1 --> R[\"Updated range<br/>about 351M to 429M a day<br/>about $12.7B to $18.2B\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>purchases per cardholder per day\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Card transactions by user type",
   "headers": [
    "User group",
    "Share of cardholders",
    "Cardholders",
    "Purchases per person a day",
    "Purchases a day"
   ],
   "rows": [
    [
     "Heavy users",
     "25%",
     "55M",
     "3",
     "165M"
    ],
    [
     "Typical users",
     "50%",
     "110M",
     "1.2",
     "132M"
    ],
    [
     "Light users",
     "25%",
     "55M",
     "0.6",
     "33M"
    ],
    [
     "Purchases total",
     "100%",
     "220M",
     "1.5",
     "330M"
    ],
    [
     "Recurring payments",
     "",
     "220M",
     "0.3",
     "66M"
    ],
    [
     "Card transactions a day",
     "",
     "",
     "1.8",
     "396M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by purchase size (per day)",
    "headers": [
     "Purchase size",
     "Price each",
     "Share of transactions",
     "Transactions",
     "Spending a day",
     "Share of spending"
    ],
    "rows": [
     [
      "Small (under $20)",
      "$10",
      "60%",
      "237.6M",
      "$2.38B",
      "13.0%"
     ],
     [
      "Medium ($20 to $100)",
      "$50",
      "30%",
      "118.8M",
      "$5.94B",
      "32.6%"
     ],
     [
      "Large (over $100)",
      "$250",
      "10%",
      "39.6M",
      "$9.90B",
      "54.3%"
     ],
     [
      "Total",
      "avg $46",
      "100%",
      "396M",
      "$18.22B",
      "100%"
     ]
    ]
   },
   {
    "title": "Why spending share is not the same as transaction share",
    "headers": [
     "Purchase size",
     "Share of transactions",
     "Share of spending",
     "Why"
    ],
    "rows": [
     [
      "Small",
      "60%",
      "13.0%",
      "Most payments are coffee and snacks, but each is only about $10"
     ],
     [
      "Medium",
      "30%",
      "32.6%",
      "Close to its transaction share, because $50 is near the $46 average"
     ],
     [
      "Large",
      "10%",
      "54.3%",
      "Rent, travel and big shops, so 1 in 10 payments is over half the dollars"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Cardholders",
      "260M adults x 85%",
      "about 220M"
     ],
     [
      "2",
      "Purchases a day",
      "Each group's cardholders x purchases a day: 55M x 3 + 110M x 1.2 + 55M x 0.6 = 165M + 132M + 33M",
      "330M"
     ],
     [
      "3",
      "Recurring payments a day",
      "220M x 0.3 (subscriptions and bills)",
      "66M"
     ],
     [
      "4",
      "Card transactions a day",
      "330M + 66M",
      "about 396M"
     ],
     [
      "5",
      "Average spend",
      "60% x $10 + 30% x $50 + 10% x $250 = 6 + 15 + 25",
      "$46"
     ],
     [
      "6",
      "Spending a day",
      "396M x $46",
      "about $18.2B"
     ],
     [
      "7",
      "Per year check",
      "396M x 365 transactions",
      "about 145B a year"
     ],
     [
      "8",
      "Per person check",
      "396M / 220M cardholders, and $18.2B / 330M people",
      "1.8 a day and about $55 a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 396M transactions and $18.2B a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Typical users make 1 purchase a day, not 1.2",
     "55M x 3 + 110M x 1 + 55M x 0.6 = 165M + 110M + 33M = 308M, + 66M",
     "about 374M a day"
    ],
    [
     "Only 75% of adults have a card",
     "260M x 75% = 195M cardholders. 396M x 195 / 220",
     "about 351M a day"
    ],
    [
     "Recurring payments are 0.45 a day",
     "220M x 0.45 = 99M. 330M + 99M",
     "about 429M a day"
    ],
    [
     "Average spend is 20% lower",
     "$18.22B x 0.8",
     "about $14.6B a day"
    ],
    [
     "Mix shifts to small: 70% small, 25% medium, 5% large",
     "Average $32: 396M x $32",
     "about $12.7B a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I will estimate how many credit and debit card transactions happen in the US each day, and the dollars spent. I will count in-store, online and recurring payments. I will leave out cash and bank transfers. Does that work for you?"
   ],
   [
    "Approach",
    "I will go top-down from 330M people. I take adults, then the ones with a card. I split those into heavy, typical and light users by how many purchases they make a day. Then I add recurring payments, and finally I put a price on the average purchase."
   ],
   [
    "Transactions",
    "About 260M adults, and 85% have a card, so about 220M cardholders. A quarter make 3 purchases a day, half make 1.2 and a quarter make 0.6. That is 165M plus 132M plus 33M, so 330M purchases. Recurring payments add 220M times 0.3, so 66M. That is about 396M transactions a day."
   ],
   [
    "Dollars",
    "I assume 60% of payments are small at $10, 30% are medium at $50 and 10% are large at $250. That is an average of $46. So 396M times $46 is about $18.2B a day. Small payments are 60% of the count but only 13% of the dollars. Large payments are 10% of the count and 54% of the dollars."
   ],
   [
    "Sanity check",
    "That is 1.8 transactions per cardholder a day, and about $55 per person a day. Over a year it is about 145B transactions. That fits a country where people pay for coffee, groceries and subscriptions by card. The biggest driver is purchases per cardholder per day."
   ],
   [
    "Range and pushback",
    "I would say roughly 350M to 430M transactions a day, with about $13B to $18B spent. If only 75% of adults have a card, it falls to about 351M. If recurring payments are 0.45 a day, it rises to about 429M. The answer is most sensitive to purchases per cardholder per day."
   ]
  ]
 },
 "piano": {
  "title": "Estimate the number of piano tuners in Chicago, and the tuning fees they earn",
  "lead": "Demand versus supply from the city population, split by how often pianos are tuned, then fees by owner type (figures are illustrative assumptions).",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Full-time piano tuners in the city of Chicago, and their fees<br/>Home pianos only, schools and venues left out\"]\nC --> P[\"Chicago population<br/>2.7M people / 2.7 per home<br/>= 1M households\"]\nP --> U[\"Pianos in homes<br/>1M x 5% (1 in 20) = <b>50K pianos</b>\"]\nU --> G1[\"Keen players: 20%<br/>10K pianos<br/>2 tunings a year = 20K a year\"]\nU --> G2[\"Typical owners: 40%<br/>20K pianos<br/>1 tuning a year = 20K a year\"]\nU --> G3[\"Rarely tuned: 40%<br/>20K pianos<br/>every 2 years = 10K a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the tuners needed, then the fees\"]\nG2 --> E\nG3 --> E\nE --> R[\"Tunings needed a year (demand)<br/>20K + 20K + 10K = <b>50K</b>\"]\nE --> N[\"Tunings one tuner can do (supply)<br/>4 a day x 220 days = <b>880 a year</b>\"]\nR --> T[\"Tuners needed<br/>50K / 880 = <b>about 57</b>\"]\nN --> T\nT --> Z1[\"Keen players: 40% of tunings<br/>20K x $100 = <b>$2.0M</b>\"]\nT --> Z2[\"Typical owners: 40% of tunings<br/>20K x $120 = <b>$2.4M</b>\"]\nT --> Z3[\"Rarely tuned: 20% of tunings<br/>10K x $160 = <b>$1.6M</b>\"]\nZ1 --> X[\"Answer<br/>about <b>57 tuners</b><br/>fees $2.0M + $2.4M + $1.6M = <b>$6.0M</b> a year\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 57 tuners<br/>about $6.0M fees\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only 1 in 30 homes has a piano<br/>1M / 30 = 33K tunings<br/>33K / 880 = about <b>38</b>\"]\nP --> Q2[\"3 tunings a day, not 4<br/>3 x 220 = 660 a year<br/>50K / 660 = about <b>76</b>\"]\nP --> Q3[\"Every piano tuned every 2 years<br/>50K x 0.5 = 25K<br/>25K / 880 = about <b>28</b>\"]\nP --> Q4[\"Fees 20% lower<br/>$6.0M x 0.8<br/>= about <b>$4.8M</b>\"]\nP --> Q5[\"Tuning mix 30 / 40 / 30<br/>average $126<br/>50K x $126 = about <b>$6.3M</b>\"]\nQ1 --> R[\"Updated range<br/>about 28 to 76 tuners<br/>about $4.8M to $6.3M in fees\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many pianos there are and how often they are tuned\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Tunings by piano owner type",
   "headers": [
    "Owner type",
    "Share of pianos",
    "Pianos",
    "Tunings per year",
    "Tunings a year"
   ],
   "rows": [
    [
     "Keen players",
     "20%",
     "10K",
     "2",
     "20K"
    ],
    [
     "Typical owners",
     "40%",
     "20K",
     "1",
     "20K"
    ],
    [
     "Rarely tuned",
     "40%",
     "20K",
     "0.5 (every 2 years)",
     "10K"
    ],
    [
     "Tunings needed a year",
     "100%",
     "50K",
     "",
     "50K"
    ],
    [
     "Tunings per tuner a year",
     "",
     "",
     "4 x 220",
     "880"
    ],
    [
     "Tuners needed",
     "",
     "",
     "50K / 880",
     "about 57"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Fee contribution by owner type (per year)",
    "headers": [
     "Owner type",
     "Fee each",
     "Share of tunings",
     "Tunings a year",
     "Fees a year",
     "Share of fees"
    ],
    "rows": [
     [
      "Keen players",
      "$100",
      "40%",
      "20K",
      "$2.0M",
      "33.3%"
     ],
     [
      "Typical owners",
      "$120",
      "40%",
      "20K",
      "$2.4M",
      "40.0%"
     ],
     [
      "Rarely tuned",
      "$160",
      "20%",
      "10K",
      "$1.6M",
      "26.7%"
     ],
     [
      "Total",
      "avg $120",
      "100%",
      "50K",
      "$6.0M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why fee share is not the same as tuning share",
    "headers": [
     "Owner type",
     "Share of tunings",
     "Share of fees",
     "Why"
    ],
    "rows": [
     [
      "Keen players",
      "40%",
      "33.3%",
      "Their pianos stay close to pitch, so each visit is quick and the fee is lowest"
     ],
     [
      "Typical owners",
      "40%",
      "40.0%",
      "Their fee of $120 equals the average, so the two shares match"
     ],
     [
      "Rarely tuned",
      "20%",
      "26.7%",
      "Pianos drift far out of tune, so each visit takes longer and costs more"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Households",
      "2.7M people / 2.7 per home",
      "about 1M"
     ],
     [
      "2",
      "Pianos",
      "1M x 5%",
      "about 50K"
     ],
     [
      "3",
      "Tunings needed a year",
      "10K x 2 + 20K x 1 + 20K x 0.5 = 20K + 20K + 10K",
      "about 50K"
     ],
     [
      "4",
      "Tunings per tuner a year",
      "4 a day x 220 days",
      "880"
     ],
     [
      "5",
      "Tuners needed",
      "50K / 880",
      "about 57"
     ],
     [
      "6",
      "Average fee",
      "40% x $100 + 40% x $120 + 20% x $160 = 40 + 48 + 32",
      "$120"
     ],
     [
      "7",
      "Fees a year",
      "50K tunings x $120",
      "about $6.0M"
     ],
     [
      "8",
      "Per person check",
      "2.7M / 57 tuners, and $6.0M / 2.7M people",
      "1 tuner per 47K people and about $2.20 a person"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 57 tuners and $6.0M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only 1 in 30 homes has a piano",
     "1M / 30 = 33K tunings. 33K / 880",
     "about 38 tuners"
    ],
    [
     "3 tunings a day, not 4",
     "3 x 220 = 660. 50K / 660",
     "about 76 tuners"
    ],
    [
     "Every piano is tuned every 2 years",
     "50K x 0.5 = 25K. 25K / 880",
     "about 28 tuners"
    ],
    [
     "Fees are 20% lower",
     "$6.0M x 0.8",
     "about $4.8M"
    ],
    [
     "Tuning mix 30% keen, 40% typical, 30% rarely tuned",
     "Average 30 + 48 + 48 = $126. 50K x $126",
     "about $6.3M"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate full-time piano tuners in the city of Chicago, and the fees they earn. I'll count pianos in homes only and leave out schools, churches and concert venues for now. Does that work for you?"
   ],
   [
    "Approach",
    "I'll compare demand and supply. Demand is how many tunings Chicago needs in a year. Supply is how many tunings one tuner can do in a year. Demand divided by supply gives the number of tuners. Then I'll price the tunings."
   ],
   [
    "Inputs",
    "Chicago has about 2.7M people and 2.7 per home, so about 1M households. I'll assume 1 in 20 has a piano, so 50K pianos. Keen players tune twice a year, typical owners once, and some every 2 years. That is 20K plus 20K plus 10K, so 50K tunings. A tuner does 4 a day for 220 days, so 880 a year."
   ],
   [
    "Revenue",
    "50K divided by 880 is about 57 tuners. For fees, I'll assume $100 for keen players, $120 for typical owners and $160 for rarely tuned pianos, because those need more work. That gives $2.0M, $2.4M and $1.6M. The total is about $6.0M a year."
   ],
   [
    "Sanity check",
    "That is one tuner for every 47K people, and about $2.20 in fees per person. Each tuner brings in about $105K before costs, which is plausible for a busy full-time tuner. Many tuners work part-time, so the real headcount is higher."
   ],
   [
    "Range and pushback",
    "I'd say roughly 50 to 60 tuners, with about $5M to $6M in fees. If only 1 in 30 homes has a piano, it falls to about 38. At 3 tunings a day it rises to about 76. The answer is most sensitive to how many pianos there are and how often they are tuned."
   ]
  ]
 },
 "rides": {
  "title": "Estimate the number of ride-hail trips in the Chicago area each day, and their fares",
  "lead": "Top-down from the metro area's 9.5M people, split by how often adults ride, then fares by trip type, with all figures per day and all inputs illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Ride-hail trips in the Chicago area each day, with fares<br/>Trips completed, per day\"]\nC --> P[\"Chicago metro population<br/>about 9.5M\"]\nP --> U[\"Adults: 78%<br/>9.5M x 78% = <b>about 7.4M</b>\"]\nU --> G1[\"Frequent riders: 4%<br/>296K adults<br/>x 0.5 trips = 148K a day\"]\nU --> G2[\"Occasional riders: 20%<br/>1,480K adults<br/>x 0.05 trips = 74K a day\"]\nU --> G3[\"Rare or never: 76%<br/>5,624K adults<br/>x 0.004 trips = 22.5K a day\"]\nG1 --> E[\"E: Evaluate<br/>Count the trips, then the fares\"]\nG2 --> E\nG3 --> E\nE --> R[\"Trips by residents<br/>148K + 74K + 22.5K = <b>about 245K</b>\"]\nE --> N[\"Visitors and airport trips: +10%<br/>245K x 10% = <b>about 24K</b>\"]\nR --> T[\"Trips a day<br/>245K + 24K = <b>about 269K</b>\"]\nN --> T\nT --> Z1[\"Short: 40%<br/>108K trips x $12 = <b>$1.29M</b>\"]\nT --> Z2[\"Medium: 45%<br/>121K trips x $22 = <b>$2.66M</b>\"]\nT --> Z3[\"Long or airport: 15%<br/>40K trips x $45 = <b>$1.82M</b>\"]\nZ1 --> X[\"Fares a day<br/>$1.29M + $2.66M + $1.82M = <b>$5.77M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 269K trips<br/>about $5.77M a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Frequent riders ride 0.4 trips a day<br/>(118K + 74K + 22.5K) x 1.1<br/>= about <b>236K</b>\"]\nP --> Q2[\"Occasional riders ride 0.07 trips a day<br/>(148K + 104K + 22.5K) x 1.1<br/>= about <b>302K</b>\"]\nP --> Q3[\"No visitors or airport trips<br/>residents only<br/>= about <b>245K</b>\"]\nP --> Q4[\"Fares 15% lower<br/>$5.77M x 0.85<br/>= about <b>$4.90M</b>\"]\nP --> Q5[\"More long trips: 30 / 45 / 25<br/>average $24.75<br/>= about <b>$6.66M</b>\"]\nQ1 --> R[\"Updated range<br/>about 236K to 302K trips<br/>about $4.9M to $6.7M a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how often frequent riders ride\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Trips by rider type",
   "headers": [
    "Rider group",
    "Share of adults",
    "Adults",
    "Trips per adult per day",
    "Trips a day"
   ],
   "rows": [
    [
     "Frequent riders",
     "4%",
     "296K",
     "0.5",
     "148.0K"
    ],
    [
     "Occasional riders",
     "20%",
     "1,480K",
     "0.05",
     "74.0K"
    ],
    [
     "Rare or never",
     "76%",
     "5,624K",
     "0.004",
     "22.5K"
    ],
    [
     "Resident trips total",
     "100%",
     "7,400K",
     "",
     "244.5K"
    ],
    [
     "Visitors and airport trips (+10%)",
     "",
     "",
     "",
     "24.4K"
    ],
    [
     "Trips a day",
     "",
     "",
     "",
     "268.9K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by trip type (per day)",
    "headers": [
     "Trip type",
     "Fare each",
     "Share of trips",
     "Trips a day",
     "Fares a day",
     "Share of fares"
    ],
    "rows": [
     [
      "Short (under 3 miles)",
      "$12",
      "40%",
      "107.6K",
      "$1.29M",
      "22.4%"
     ],
     [
      "Medium (3 to 8 miles)",
      "$22",
      "45%",
      "121.0K",
      "$2.66M",
      "46.2%"
     ],
     [
      "Long or airport",
      "$45",
      "15%",
      "40.3K",
      "$1.82M",
      "31.5%"
     ],
     [
      "Total",
      "avg $21.45",
      "100%",
      "268.9K",
      "$5.77M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as trip share",
    "headers": [
     "Trip type",
     "Share of trips",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Short",
      "40%",
      "22.4%",
      "Lowest fare, so it earns much less than its share of trips"
     ],
     [
      "Medium",
      "45%",
      "46.2%",
      "About equal to its trip share, because $22 is close to the $21.45 average"
     ],
     [
      "Long or airport",
      "15%",
      "31.5%",
      "Highest fare, so 15 in 100 trips bring in almost a third of the revenue"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Adults",
      "9.5M x 78%",
      "about 7.4M"
     ],
     [
      "2",
      "Resident trips a day",
      "296K x 0.5 + 1,480K x 0.05 + 5,624K x 0.004 = 148K + 74K + 22.5K",
      "about 245K"
     ],
     [
      "3",
      "Visitors and airport trips",
      "245K x 10%",
      "about 24K"
     ],
     [
      "4",
      "Trips a day",
      "245K + 24K",
      "about 269K"
     ],
     [
      "5",
      "Average fare",
      "40% x $12 + 45% x $22 + 15% x $45 = 4.80 + 9.90 + 6.75",
      "$21.45"
     ],
     [
      "6",
      "Fares a day",
      "269K x $21.45",
      "about $5.77M"
     ],
     [
      "7",
      "Cross-check from drivers",
      "15K active drivers x 15 trips a day, which is 84% of 269K",
      "about 225K"
     ],
     [
      "8",
      "Per resident check",
      "9.5M / 269K people per trip, and $5.77M / 9.5M people",
      "1 trip per 35 residents and about $0.61 a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 269K trips and $5.77M a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Frequent riders ride 0.4 trips a day, not 0.5",
     "296K x 0.4 = 118K. (118K + 74K + 22.5K) x 1.1",
     "about 236K trips"
    ],
    [
     "Occasional riders ride 0.07 trips a day, not 0.05",
     "1,480K x 0.07 = 104K. (148K + 104K + 22.5K) x 1.1",
     "about 302K trips"
    ],
    [
     "No visitors or airport trips",
     "Residents only",
     "about 245K trips"
    ],
    [
     "Fares are 15% lower",
     "$5.77M x 0.85",
     "about $4.90M a day"
    ],
    [
     "Mix shifts to long trips: short 30%, medium 45%, long 25%",
     "Average $24.75: 269K x $24.75",
     "about $6.66M a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate completed ride-hail trips in the Chicago area each day, in trips and in dollars of fares. I'll count app rides, and leave out taxis, buses and trains. I'll use the metro area, not only the city. Does that work?"
   ],
   [
    "Approach",
    "Top-down from the population. The Chicago metro area has about 9.5M people. I'll take the adults, split them by how often they ride, multiply by trips per person, add visitors and airport trips, and price the trips by length."
   ],
   [
    "Trips",
    "About 78% are adults, so about 7.4M. Four percent are frequent riders at 0.5 trips a day, which is 148K. Twenty percent ride occasionally at 0.05, which is 74K. The rest ride almost never, about 22K. That is about 245K. Visitors and airport trips add 10%, so about 269K trips a day."
   ],
   [
    "Revenue",
    "I'll assume 40% of trips are short at $12, 45% medium at $22 and 15% long or airport at $45. That is an average of $21.45. It gives about $1.29M, $2.66M and $1.82M, so about $5.77M a day. Long trips are 15% of trips but almost a third of fares."
   ],
   [
    "Sanity check",
    "That is about 1 trip for every 35 residents and about $0.61 per resident per day. From the supply side, 15K active drivers at 15 trips each gives about 225K, which is within 20 percent. How often frequent riders ride is my biggest driver."
   ],
   [
    "Range and pushback",
    "I'd say roughly 235K to 300K trips a day, worth about $4.9M to $6.7M. If frequent riders ride 0.4 trips a day, it falls to about 236K. If fares are 15% lower, revenue is about $4.9M. The answer is most sensitive to how often frequent riders ride."
   ]
  ]
 },
 "bikes": {
  "title": "Estimate the number of bicycles sold in the US each year, and their revenue",
  "lead": "Stock and flow from the US population, split by bike type and how long each lasts, then revenue by price tier; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>New bicycles sold in the US each year, with revenue<br/>Replacements plus growth, count units\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Bikes in use<br/>330M x 0.4 per person = <b>132M</b>\"]\nU --> G1[\"Kids bikes: 20%<br/>26.4M bikes<br/>last 4 years = 6.6M a year\"]\nU --> G2[\"Adult everyday: 65%<br/>85.8M bikes<br/>last 10 years = 8.58M a year\"]\nU --> G3[\"Enthusiast and e-bikes: 15%<br/>19.8M bikes<br/>last 8 years = 2.48M a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the bikes sold, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Replacement bikes a year<br/>6.6M + 8.58M + 2.48M = <b>about 17.7M</b>\"]\nE --> N[\"Growth in bikes in use<br/>132M x 1% = <b>about 1.3M</b>\"]\nR --> T[\"Bikes sold a year<br/>17.7M + 1.3M = <b>about 19.0M</b>\"]\nN --> T\nT --> Z1[\"Kids: 35%<br/>6.65M x $160 = <b>$1.06B</b>\"]\nT --> Z2[\"Adult standard: 50%<br/>9.5M x $400 = <b>$3.80B</b>\"]\nT --> Z3[\"Premium and e-bikes: 15%<br/>2.85M x $1,200 = <b>$3.42B</b>\"]\nZ1 --> X[\"Revenue a year<br/>$1.06B + $3.80B + $3.42B = <b>$8.28B</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 19M bikes<br/>about $8.28B\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Every bike lasts 2 years longer<br/>(6, 12 and 10 years)<br/>13.5M + 1.3M = about <b>14.9M</b>\"]\nP --> Q2[\"Only 0.3 bikes per person<br/>99M in use, 14.2M with growth<br/>= about <b>14.2M</b>\"]\nP --> Q3[\"Pandemic boom year<br/>sales up 40%<br/>19M x 1.4 = about <b>26.6M</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$8.28B x 0.9<br/>= about <b>$7.46B</b>\"]\nP --> Q5[\"More e-bikes: mix 30 / 45 / 25<br/>average $528<br/>= about <b>$10.03B</b>\"]\nQ1 --> R[\"Updated range<br/>about 14M to 20M bikes (27M in a boom)<br/>about $7.5B to $10B\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how long a bike lasts\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Bikes by type",
   "headers": [
    "Bike type",
    "Share of bikes in use",
    "Bikes in use",
    "Years a bike lasts",
    "Bikes bought a year"
   ],
   "rows": [
    [
     "Kids bikes",
     "20%",
     "26.4M",
     "4",
     "6.6M"
    ],
    [
     "Adult everyday bikes",
     "65%",
     "85.8M",
     "10",
     "8.58M"
    ],
    [
     "Enthusiast and e-bikes",
     "15%",
     "19.8M",
     "8",
     "2.48M"
    ],
    [
     "Replacements total",
     "100%",
     "132M",
     "",
     "17.7M"
    ],
    [
     "Growth in bikes in use",
     "",
     "",
     "",
     "1.3M"
    ],
    [
     "Bikes sold a year",
     "",
     "",
     "",
     "19.0M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by bike type (per year)",
    "headers": [
     "Bike type",
     "Price each",
     "Share of bikes",
     "Bikes a year",
     "Revenue a year",
     "Share of revenue"
    ],
    "rows": [
     [
      "Kids",
      "$160",
      "35%",
      "6.65M",
      "$1.06B",
      "12.8%"
     ],
     [
      "Adult standard",
      "$400",
      "50%",
      "9.5M",
      "$3.80B",
      "45.9%"
     ],
     [
      "Premium and e-bikes",
      "$1,200",
      "15%",
      "2.85M",
      "$3.42B",
      "41.3%"
     ],
     [
      "Total",
      "avg $436",
      "100%",
      "19.0M",
      "$8.28B",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as bike share",
    "headers": [
     "Bike type",
     "Share of bikes",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Kids",
      "35%",
      "12.8%",
      "Small, cheap bikes, so over a third of bikes bring in about an eighth of the dollars"
     ],
     [
      "Adult standard",
      "50%",
      "45.9%",
      "Slightly below its bike share, because $400 is below the $436 average"
     ],
     [
      "Premium and e-bikes",
      "15%",
      "41.3%",
      "Priced at 7.5 times a kids bike, so 15% of bikes bring in over 40% of revenue"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Bikes in use",
      "330M x 0.4 bikes per person",
      "132M"
     ],
     [
      "2",
      "Bikes in use by type",
      "132M x 20%, 65% and 15%",
      "26.4M, 85.8M and 19.8M"
     ],
     [
      "3",
      "Replacement bikes a year",
      "Each type's bikes / years it lasts: 26.4M / 4 + 85.8M / 10 + 19.8M / 8 = 6.6M + 8.58M + 2.48M",
      "about 17.7M"
     ],
     [
      "4",
      "Growth in bikes in use",
      "132M x 1%",
      "about 1.3M"
     ],
     [
      "5",
      "Bikes sold a year",
      "17.7M + 1.3M",
      "about 19.0M"
     ],
     [
      "6",
      "Average price",
      "35% x $160 + 50% x $400 + 15% x $1,200 = 56 + 200 + 180",
      "$436"
     ],
     [
      "7",
      "Revenue a year",
      "19.0M x $436",
      "about $8.28B"
     ],
     [
      "8",
      "Per person check",
      "19.0M / 330M people, and $8.28B / 330M people",
      "0.06 bikes and about $25 a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 19M bikes and $8.28B)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Every bike lasts 2 years longer (6, 12 and 10 years)",
     "26.4M / 6 + 85.8M / 12 + 19.8M / 10 = 4.4M + 7.15M + 1.98M = 13.5M, + 1.3M",
     "about 14.9M bikes"
    ],
    [
     "Only 0.3 bikes per person",
     "330M x 0.3 = 99M in use. 99M x 20% / 4 + 99M x 65% / 10 + 99M x 15% / 8 = 4.95M + 6.4M + 1.9M, + 1% growth of 1.0M",
     "about 14.2M bikes"
    ],
    [
     "Pandemic boom year, sales up 40%",
     "19.0M x 1.4",
     "about 26.6M bikes"
    ],
    [
     "Prices are 10% lower",
     "$8.28B x 0.9",
     "about $7.46B"
    ],
    [
     "Mix shifts to e-bikes: kids 30%, standard 45%, premium 25%",
     "Average 48 + 180 + 300 = $528: 19.0M x $528",
     "about $10.03B"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many new bicycles are sold in the US each year, in units and in dollars. I'll include kids bikes, adult bikes and e-bikes, and leave out used bikes, parts and accessories. I'll count units first, then dollars. Does that work?"
   ],
   [
    "Approach",
    "Stock and flow. Bikes wear out or get outgrown, so bikes in use divided by how long they last gives yearly replacements. Then I add growth in the number of bikes. I'll start from 330M people and split the bikes by type, because kids and adult bikes have very different lives."
   ],
   [
    "Bikes",
    "I'll assume 0.4 bikes per person, so 132M bikes in use. Kids bikes are 20% and last 4 years, about 6.6M a year. Adult bikes are 65% and last 10 years, about 8.6M. Enthusiast and e-bikes are 15% and last 8 years, about 2.5M. That is 17.7M, plus 1.3M growth, so about 19M bikes a year."
   ],
   [
    "Revenue",
    "I'll assume 35% are kids bikes at $160, 50% are standard adult bikes at $400, and 15% are premium or e-bikes at $1,200. The average is $436, so 19M times $436 is about $8.3B. Premium bikes are 15% of units but over 40% of revenue."
   ],
   [
    "Sanity check",
    "That is about 0.06 bikes per person, or one new bike for every 17 people each year. A quick households check agrees: 130M households, 12% buy a bike, 1.1 bikes each is about 17M. How long a bike lasts is my biggest assumption."
   ],
   [
    "Range and pushback",
    "I'd say 15M to 20M bikes, worth about $7.5B to $10B. If bikes last two years longer, it falls to about 15M. A boom year like 2020 could reach 27M. If prices are 10% lower, revenue is about $7.5B. The answer is most sensitive to bike life."
   ]
  ]
 },
 "taxis": {
  "title": "Estimate the number of taxi and ride-hail trips per day in New York City, and their fares",
  "lead": "Supply side from about 100K licensed for-hire vehicles, split by vehicle type, then fares by trip length, with demand as a check and all inputs illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Taxi and ride-hail trips in New York City each day, with fares<br/>Yellow, green and app cars, trips completed per day\"]\nC --> P[\"For-hire vehicles licensed<br/>about 100K\"]\nP --> G1[\"Yellow cabs: 15%<br/>15K licensed<br/>x 70% active = 10.5K on the road\"]\nP --> G2[\"Green cabs: 5%<br/>5K licensed<br/>x 50% active = 2.5K on the road\"]\nP --> G3[\"App cars: 80%<br/>80K licensed<br/>x 55% active = 44K on the road\"]\nG1 --> E[\"E: Evaluate<br/>Count the trips, then the fares\"]\nG2 --> E\nG3 --> E\nE --> R[\"Yellow cab trips<br/>10.5K x 25 a day = <b>262.5K</b>\"]\nE --> N[\"Green cab trips<br/>2.5K x 12 a day = <b>30K</b>\"]\nE --> M[\"App car trips<br/>44K x 14 a day = <b>616K</b>\"]\nR --> T[\"Trips a day<br/>262.5K + 30K + 616K = <b>about 909K</b>\"]\nN --> T\nM --> T\nT --> Z1[\"Short: 50%<br/>454K trips x $12 = <b>$5.45M</b>\"]\nT --> Z2[\"Medium: 35%<br/>318K trips x $25 = <b>$7.95M</b>\"]\nT --> Z3[\"Long or airport: 15%<br/>136K trips x $55 = <b>$7.50M</b>\"]\nZ1 --> X[\"Fares a day<br/>$5.45M + $7.95M + $7.50M = <b>$20.90M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,M,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 909K trips<br/>about $20.9M a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only half of app cars active<br/>40K x 14 = 560K<br/>262.5K + 30K + 560K = about <b>853K</b>\"]\nP --> Q2[\"100K app cars licensed<br/>55K x 14 = 770K<br/>262.5K + 30K + 770K = about <b>1,063K</b>\"]\nP --> Q3[\"App cars make 12 trips a day<br/>44K x 12 = 528K<br/>262.5K + 30K + 528K = about <b>821K</b>\"]\nP --> Q4[\"Fares 10% lower<br/>$20.9M x 0.9<br/>= about <b>$18.8M</b>\"]\nP --> Q5[\"More short trips: 65 / 25 / 10<br/>average $19.55<br/>= about <b>$17.8M</b>\"]\nQ1 --> R[\"Updated range<br/>about 821K to 1,063K trips<br/>about $18M to $24M a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many app cars are on the road\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Trips by vehicle type",
   "headers": [
    "Vehicle type",
    "Share of vehicles",
    "Licensed",
    "Active share",
    "Trips per active vehicle",
    "Trips a day"
   ],
   "rows": [
    [
     "Yellow cabs",
     "15%",
     "15K",
     "70%",
     "25",
     "262.5K"
    ],
    [
     "Green cabs",
     "5%",
     "5K",
     "50%",
     "12",
     "30.0K"
    ],
    [
     "App cars",
     "80%",
     "80K",
     "55%",
     "14",
     "616.0K"
    ],
    [
     "Total",
     "100%",
     "100K",
     "57K active",
     "",
     "908.5K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by trip length (per day)",
    "headers": [
     "Trip length",
     "Fare each",
     "Share of trips",
     "Trips a day",
     "Fares a day",
     "Share of fares"
    ],
    "rows": [
     [
      "Short (under 3 miles)",
      "$12",
      "50%",
      "454K",
      "$5.45M",
      "26.1%"
     ],
     [
      "Medium (3 to 8 miles)",
      "$25",
      "35%",
      "318K",
      "$7.95M",
      "38.0%"
     ],
     [
      "Long or airport",
      "$55",
      "15%",
      "136K",
      "$7.50M",
      "35.9%"
     ],
     [
      "Total",
      "avg $23.00",
      "100%",
      "909K",
      "$20.90M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as trip share",
    "headers": [
     "Trip length",
     "Share of trips",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Short",
      "50%",
      "26.1%",
      "Lowest fare, so half of all trips bring in about a quarter of the revenue"
     ],
     [
      "Medium",
      "35%",
      "38.0%",
      "Slightly above its trip share, because $25 is above the $23 average"
     ],
     [
      "Long or airport",
      "15%",
      "35.9%",
      "Highest fare, so 15 in 100 trips bring in over a third of the revenue"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Active vehicles",
      "15K x 70% + 5K x 50% + 80K x 55% = 10.5K + 2.5K + 44K",
      "about 57K"
     ],
     [
      "2",
      "Trips from each type",
      "10.5K x 25 + 2.5K x 12 + 44K x 14 = 262.5K + 30K + 616K",
      "about 909K"
     ],
     [
      "3",
      "Average trips per active vehicle",
      "909K / 57K",
      "about 16"
     ],
     [
      "4",
      "Average fare",
      "50% x $12 + 35% x $25 + 15% x $55 = 6.00 + 8.75 + 8.25",
      "$23.00"
     ],
     [
      "5",
      "Fares a day",
      "909K x $23.00",
      "about $20.9M"
     ],
     [
      "6",
      "Cross-check from demand",
      "8.3M residents x 10% = 830K, x 1.2 trips each",
      "about 996K"
     ],
     [
      "7",
      "Per resident check",
      "8.3M / 909K people per trip, and $20.9M / 8.3M people",
      "1 trip per 9 residents and about $2.52 a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 909K trips and $20.9M a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only half of app cars are active",
     "80K x 50% = 40K, x 14 = 560K. 262.5K + 30K + 560K",
     "about 853K trips"
    ],
    [
     "100K app cars are licensed, not 80K",
     "100K x 55% = 55K, x 14 = 770K. 262.5K + 30K + 770K",
     "about 1,063K trips"
    ],
    [
     "App cars make 12 trips a day, not 14",
     "44K x 12 = 528K. 262.5K + 30K + 528K",
     "about 821K trips"
    ],
    [
     "Fares are 10% lower",
     "$20.9M x 0.9",
     "about $18.8M a day"
    ],
    [
     "Mix shifts to short trips: short 65%, medium 25%, long 10%",
     "Average $19.55: 909K x $19.55",
     "about $17.8M a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate taxi and ride-hail trips in New York City each day, and the fares they bring in. I'll count yellow cabs, green cabs and app cars, one trip per ride, and leave out buses and subways. Does that work?"
   ],
   [
    "Approach",
    "Supply side first. I'll start from the for-hire vehicles licensed in the city, split them by type, take the share on the road, and multiply by trips per vehicle. Then I'll check against demand from the population."
   ],
   [
    "Trips",
    "Assume about 100K licensed vehicles. Fifteen percent are yellow cabs, 70 percent active at 25 trips a day, so 262K. Five percent are green cabs at 12 trips, so 30K. Eighty percent are app cars, 55 percent active at 14 trips, so 616K. That is about 909K trips a day."
   ],
   [
    "Revenue",
    "I'll assume 50% of trips are short at $12, 35% medium at $25 and 15% long or airport at $55. That is an average of $23. It gives about $5.45M, $7.95M and $7.50M, so about $20.9M a day. Long trips are 15% of trips but over a third of fares."
   ],
   [
    "Sanity check",
    "That is about 1 trip for every 9 residents and about $2.52 per resident per day. On demand, 8.3M residents with 10 percent riding about 1.2 trips gives about 1.0M, which is close. The number of app cars on the road is my biggest driver."
   ],
   [
    "Range and pushback",
    "I'd say roughly 820K to 1.06 million trips a day, worth about $18M to $24M. If only half of app cars are active, it falls to about 853K. If fares are 10% lower, revenue is about $18.8M. The answer is most sensitive to how many app cars are on the road."
   ]
  ]
 },
 "gyms": {
  "title": "Estimate the number of people in the US with a gym membership, and their yearly fees",
  "lead": "Top-down from the US population, split by exercise habit and the share who join a gym, then yearly fees by gym type; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>People in the US with a gym membership, with yearly fees<br/>Any age, count members, not visits\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Adults<br/>330M x 78% = about <b>260M</b>\"]\nU --> G1[\"Active exercisers: 25%<br/>65M adults<br/>60% have a gym = 39M members\"]\nU --> G2[\"Casual exercisers: 30%<br/>78M adults<br/>35% have a gym = 27.3M members\"]\nU --> G3[\"Rarely exercise: 45%<br/>117M adults<br/>10% have a gym = 11.7M members\"]\nG1 --> E[\"E: Evaluate<br/>Count the members, then the fees\"]\nG2 --> E\nG3 --> E\nE --> R[\"Adult members<br/>39M + 27.3M + 11.7M = <b>78.0M</b>\"]\nE --> N[\"Teen members<br/>ages 14 to 17 = <b>about 2.0M</b>\"]\nR --> T[\"Gym members<br/>78.0M + 2.0M = <b>about 80.0M</b>\"]\nN --> T\nT --> Z1[\"Budget gyms: 40%<br/>32.0M x $180 = <b>$5.76B</b>\"]\nT --> Z2[\"Mid-range chains: 40%<br/>32.0M x $480 = <b>$15.36B</b>\"]\nT --> Z3[\"Boutique and premium: 20%<br/>16.0M x $1,200 = <b>$19.20B</b>\"]\nZ1 --> X[\"Fees a year<br/>$5.76B + $15.36B + $19.20B = <b>$40.32B</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 80M members<br/>about $40.3B a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Take-up 5 points lower<br/>(55%, 30% and 5%)<br/>65.0M + 2.0M = about <b>67M</b>\"]\nP --> Q2[\"Adults are 75% of people<br/>78.0M x 247.5 / 260 = 74.3M<br/>74.3M + 2.0M = about <b>76M</b>\"]\nP --> Q3[\"Skip teen members<br/>adults only<br/>= about <b>78M</b>\"]\nP --> Q4[\"Fees 10% lower<br/>$40.32B x 0.9<br/>= about <b>$36.3B</b>\"]\nP --> Q5[\"Budget mix 55 / 35 / 10<br/>average $387<br/>= about <b>$31.0B</b>\"]\nQ1 --> R[\"Updated range<br/>about 67M to 80M members<br/>about $31B to $40B\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many casual exercisers join a gym\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Gym members by exercise habit",
   "headers": [
    "Adult group",
    "Share of adults",
    "Adults",
    "Share with a gym",
    "Members"
   ],
   "rows": [
    [
     "Active exercisers",
     "25%",
     "65M",
     "60%",
     "39.0M"
    ],
    [
     "Casual exercisers",
     "30%",
     "78M",
     "35%",
     "27.3M"
    ],
    [
     "Rarely exercise",
     "45%",
     "117M",
     "10%",
     "11.7M"
    ],
    [
     "Adult members total",
     "100%",
     "260M",
     "30%",
     "78.0M"
    ],
    [
     "Teen members",
     "",
     "",
     "",
     "2.0M"
    ],
    [
     "Gym members",
     "",
     "",
     "",
     "80.0M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by gym type (fees per year)",
    "headers": [
     "Gym type",
     "Fee a year",
     "Share of members",
     "Members",
     "Fees a year",
     "Share of fees"
    ],
    "rows": [
     [
      "Budget gym ($15 a month)",
      "$180",
      "40%",
      "32.0M",
      "$5.76B",
      "14.3%"
     ],
     [
      "Mid-range chain ($40 a month)",
      "$480",
      "40%",
      "32.0M",
      "$15.36B",
      "38.1%"
     ],
     [
      "Boutique and premium ($100 a month)",
      "$1,200",
      "20%",
      "16.0M",
      "$19.20B",
      "47.6%"
     ],
     [
      "Total",
      "avg $504",
      "100%",
      "80.0M",
      "$40.32B",
      "100%"
     ]
    ]
   },
   {
    "title": "Why share of fees is not the same as share of members",
    "headers": [
     "Gym type",
     "Share of members",
     "Share of fees",
     "Why"
    ],
    "rows": [
     [
      "Budget gym",
      "40%",
      "14.3%",
      "Lowest fee, so 4 in 10 members bring in about 1 in 7 dollars"
     ],
     [
      "Mid-range chain",
      "40%",
      "38.1%",
      "Close to its share, because $480 is close to the $504 average"
     ],
     [
      "Boutique and premium",
      "20%",
      "47.6%",
      "Highest fee, so 1 in 5 members brings in almost half the dollars"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Adults",
      "330M x 78% = 257M, rounded to a working figure",
      "about 260M"
     ],
     [
      "2",
      "Adults by exercise habit",
      "260M x 25%, 30% and 45%",
      "65M, 78M and 117M"
     ],
     [
      "3",
      "Adult members",
      "Each group's adults x share with a gym: 65M x 60% + 78M x 35% + 117M x 10% = 39M + 27.3M + 11.7M",
      "78.0M"
     ],
     [
      "4",
      "Teen members",
      "About 17M teens aged 14 to 17 x 12%",
      "about 2.0M"
     ],
     [
      "5",
      "Gym members",
      "78.0M + 2.0M",
      "about 80.0M"
     ],
     [
      "6",
      "Average fee a year",
      "40% x $180 + 40% x $480 + 20% x $1,200 = 72 + 192 + 240",
      "$504"
     ],
     [
      "7",
      "Fees a year",
      "80.0M x $504",
      "about $40.3B"
     ],
     [
      "8",
      "Per person check",
      "80.0M / 330M people, and $40.3B / 330M people",
      "24% of people and about $122 a year"
     ],
     [
      "9",
      "Supply check",
      "55,000 gyms x about 1,450 members each",
      "about 80M"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 80M members and $40.3B)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Take-up is 5 points lower in each group (55%, 30% and 5%)",
     "65M x 55% + 78M x 30% + 117M x 5% = 35.75M + 23.4M + 5.85M = 65.0M, + 2.0M",
     "about 67M members"
    ],
    [
     "Adults are only 75% of people",
     "330M x 75% = 247.5M adults. 78.0M x 247.5 / 260 = 74.3M, + 2.0M",
     "about 76M members"
    ],
    [
     "Skip teen members",
     "Adults only",
     "about 78M members"
    ],
    [
     "Fees are 10% lower",
     "$40.32B x 0.9",
     "about $36.3B"
    ],
    [
     "Mix shifts to budget gyms: budget 55%, mid-range 35%, boutique 10%",
     "Average 99 + 168 + 120 = $387: 80.0M x $387",
     "about $31.0B"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many people in the US hold a gym membership, and what they pay in a year. I'll count people of any age with a paid membership, and leave out free workplace perks and day passes. I'll count members, not visits. Does that work?"
   ],
   [
    "Approach",
    "Top-down from 330M people. I'll find the adults, split them by how much they exercise, and apply the share who pay for a gym in each group. Those who exercise more are much more likely to join. Then I'll add teens."
   ],
   [
    "Members",
    "About 78% of 330M are adults, so about 260M. A quarter are active exercisers, and 60% of them have a gym, so 39M. Thirty percent are casual, and 35% have a gym, so 27.3M. The other 45% rarely exercise, and 10% have a gym, so 11.7M. That is 78M adults. Teens add about 2M, so about 80M members."
   ],
   [
    "Fees",
    "I'll assume 40% pay $180 a year at budget gyms, 40% pay $480 at mid-range chains, and 20% pay $1,200 at boutique and premium gyms. The average is $504. So 80M times $504 is about $40B a year. Premium gyms are 20% of members but nearly half of fees."
   ],
   [
    "Sanity check",
    "That is about 1 in 4 people, and about $122 per person a year. As a supply check, 55,000 gyms with about 1,450 members each is also about 80M. The share of casual exercisers who join is my biggest assumption, since that group is large."
   ],
   [
    "Range and pushback",
    "I'd say roughly 65M to 85M members, paying about $31B to $40B a year. If take-up is 5 points lower in every group, it drops to about 67M. If fees are 10% lower, it is about $36B. The answer is most sensitive to how many casual exercisers join."
   ]
  ]
 },
 "bank-branches": {
  "title": "Estimate the number of ATM withdrawals per day in a city of 1 million people, and the cash they move",
  "lead": "Top-down from the city population, split by how often people use ATMs, then cash value by withdrawal size; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>ATM cash withdrawals a day in a city of 1M people<br/>Count withdrawals, not balance checks<br/>Also work out the cash value\"]\nC --> P[\"City population<br/>1M\"]\nP --> U[\"ATM users<br/>1M x 80% adults = 800K<br/>800K x 75% use ATMs = <b>600K</b>\"]\nU --> G1[\"Frequent users: 20%<br/>120K users<br/>3 a month = 360K a month\"]\nU --> G2[\"Regular users: 50%<br/>300K users<br/>1.5 a month = 450K a month\"]\nU --> G3[\"Rare users: 30%<br/>180K users<br/>0.5 a month = 90K a month\"]\nG1 --> E[\"E: Evaluate<br/>Count the withdrawals, then the cash value\"]\nG2 --> E\nG3 --> E\nE --> R[\"Residents a day<br/>900K x 12 / 365 = <b>about 29.6K</b>\"]\nE --> N[\"Visitors and commuters<br/>10% x 29.6K = <b>about 3.0K</b>\"]\nR --> T[\"Withdrawals a day<br/>29.6K + 3.0K = <b>about 33K</b>\"]\nN --> T\nT --> Z1[\"Small: 30%<br/>9.9K x $40 = <b>$0.40M</b>\"]\nT --> Z2[\"Typical: 50%<br/>16.5K x $100 = <b>$1.65M</b>\"]\nT --> Z3[\"Large: 20%<br/>6.6K x $200 = <b>$1.32M</b>\"]\nZ1 --> X[\"Cash withdrawn a day<br/>$0.40M + $1.65M + $1.32M = <b>$3.37M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 33K withdrawals<br/>about $3.37M a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only 60% of adults use ATMs<br/>29.6K x 480K / 600K = 23.7K<br/>x 1.1 = about <b>26K</b>\"]\nP --> Q2[\"Frequent users withdraw 5 a month<br/>1,140K a month x 12 / 365 x 1.1<br/>= about <b>41K</b>\"]\nP --> Q3[\"Skip visitors and commuters<br/>residents only<br/>= about <b>30K</b>\"]\nP --> Q4[\"Smaller withdrawals: $30, $80, $150<br/>average $79: 33K x $79<br/>= about <b>$2.61M</b>\"]\nP --> Q5[\"Mix shifts to large: 20 / 40 / 40<br/>average $128: 33K x $128<br/>= about <b>$4.22M</b>\"]\nQ1 --> R[\"Updated range<br/>about 26K to 41K withdrawals<br/>about $2.6M to $4.2M a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many people use ATMs and how often heavy users withdraw\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Withdrawals by ATM habit",
   "headers": [
    "ATM user group",
    "Share of users",
    "Users",
    "Withdrawals a month each",
    "Withdrawals a month"
   ],
   "rows": [
    [
     "Frequent users",
     "20%",
     "120K",
     "3",
     "360K"
    ],
    [
     "Regular users",
     "50%",
     "300K",
     "1.5",
     "450K"
    ],
    [
     "Rare users",
     "30%",
     "180K",
     "0.5",
     "90K"
    ],
    [
     "Residents a month",
     "100%",
     "600K",
     "",
     "900K"
    ],
    [
     "Residents a day (x 12 / 365)",
     "",
     "",
     "",
     "29.6K"
    ],
    [
     "Visitors and commuters (10% extra)",
     "",
     "",
     "",
     "3.0K"
    ],
    [
     "Withdrawals a day",
     "",
     "",
     "",
     "about 33K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Cash contribution by withdrawal size (per day)",
    "headers": [
     "Type",
     "Amount each",
     "Share of withdrawals",
     "Withdrawals a day",
     "Cash a day",
     "Share of cash"
    ],
    "rows": [
     [
      "Small",
      "$40",
      "30%",
      "9.9K",
      "$0.40M",
      "11.8%"
     ],
     [
      "Typical",
      "$100",
      "50%",
      "16.5K",
      "$1.65M",
      "49.0%"
     ],
     [
      "Large",
      "$200",
      "20%",
      "6.6K",
      "$1.32M",
      "39.2%"
     ],
     [
      "Total",
      "avg $102",
      "100%",
      "33K",
      "$3.37M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cash share is not the same as withdrawal share",
    "headers": [
     "Type",
     "Share of withdrawals",
     "Share of cash",
     "Why"
    ],
    "rows": [
     [
      "Small",
      "30%",
      "11.8%",
      "Many quick $40 withdrawals, but each one moves little cash"
     ],
     [
      "Typical",
      "50%",
      "49.0%",
      "About equal to its withdrawal share, because $100 is close to the $102 average"
     ],
     [
      "Large",
      "20%",
      "39.2%",
      "Only 1 in 5 withdrawals, but at $200 each it brings in about 2 in 5 dollars"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "ATM users",
      "1M x 80% adults x 75% who use ATMs",
      "600K"
     ],
     [
      "2",
      "Withdrawals a month",
      "120K x 3 + 300K x 1.5 + 180K x 0.5 = 360K + 450K + 90K",
      "900K"
     ],
     [
      "3",
      "Residents' withdrawals a day",
      "900K x 12 months / 365 days",
      "about 29.6K"
     ],
     [
      "4",
      "Visitors and commuters",
      "10% x 29.6K",
      "about 3.0K"
     ],
     [
      "5",
      "Withdrawals a day",
      "29.6K + 3.0K",
      "about 33K"
     ],
     [
      "6",
      "Average withdrawal",
      "30% x $40 + 50% x $100 + 20% x $200 = 12 + 50 + 40",
      "$102"
     ],
     [
      "7",
      "Cash withdrawn a day",
      "33K x $102",
      "about $3.37M"
     ],
     [
      "8",
      "Per person check",
      "33K / 1M people, and $3.37M / 1M people",
      "33 withdrawals per 1,000 people and about $3.37 a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 33K withdrawals and $3.37M a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only 60% of adults use ATMs",
     "800K x 60% = 480K users. 29.6K x 480 / 600 = 23.7K, x 1.1",
     "about 26K withdrawals"
    ],
    [
     "Frequent users withdraw 5 a month",
     "120K x 5 + 450K + 90K = 1,140K a month. x 12 / 365 = 37.5K, x 1.1",
     "about 41K withdrawals"
    ],
    [
     "Skip visitors and commuters",
     "Residents only",
     "about 30K withdrawals"
    ],
    [
     "Smaller withdrawals: $30, $80, $150",
     "Average 30% x $30 + 50% x $80 + 20% x $150 = $79. 33K x $79",
     "about $2.61M a day"
    ],
    [
     "Mix shifts to large: 20%, 40%, 40%",
     "Average $128: 33K x $128",
     "about $4.22M a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate ATM cash withdrawals per day in a city of 1 million people. I'll count withdrawals, not balance checks, and I'll also estimate the cash value. I'll include visitors and commuters, but leave out cash taken at bank counters and card payments in shops. Does that work for you?"
   ],
   [
    "Approach",
    "I'll start from the 1M population, find adults who use ATMs, then split them into three groups by how often they withdraw. Then I'll convert a month to a day, add visitors, and multiply by the size of a withdrawal."
   ],
   [
    "Withdrawals",
    "About 80% are adults, so 800K, and 75% of them use ATMs, so 600K users. I'll assume 20% withdraw 3 times a month, 50% withdraw 1.5 times and 30% withdraw 0.5 times. That is 360K plus 450K plus 90K, so 900K a month. Times 12, divided by 365, is about 29.6K a day. Visitors add 10%, so about 33K."
   ],
   [
    "Cash value",
    "I'll assume 30% of withdrawals are small at $40, 50% are typical at $100, and 20% are large at $200. The average is $102. So 33K withdrawals times $102 is about $3.4M of cash a day. Large withdrawals are 20% of the count but about 39% of the cash."
   ],
   [
    "Sanity check",
    "That is 33 withdrawals per 1,000 people a day, and about $3.37 of cash per person. From the supply side, 1.2 ATMs per 1,000 people gives 1,200 machines. At about 27 withdrawals each, that is about 33K. The two routes agree."
   ],
   [
    "Range and pushback",
    "I'd say 25K to 40K withdrawals a day, or about $2.6M to $4.2M of cash. If only 60% of adults use ATMs, it drops to about 26K. If heavy users withdraw 5 times a month, it rises to about 41K. The answer is most sensitive to how many people use ATMs and how often."
   ]
  ]
 },
 "streaming": {
  "title": "Estimate the number of hours of streaming video people in the US watch per day",
  "lead": "Top-down from the US population, split by how much people stream, with phones added separately; there is no price, so the contribution layer is the share of hours by device, and all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Hours of streaming video watched in the US per day<br/>All services including YouTube, all screens<br/>No dollars, so share of hours by device\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"People who stream on a day<br/>330M x 75% = 247.5M<br/><b>about 250M</b>\"]\nU --> G1[\"Light streamers: 40%<br/>100M people<br/>x 0.75 hour = 75M hours\"]\nU --> G2[\"Typical streamers: 40%<br/>100M people<br/>x 2 hours = 200M hours\"]\nU --> G3[\"Heavy streamers: 20%<br/>50M people<br/>x 3 hours = 150M hours\"]\nG1 --> E[\"E: Evaluate<br/>Count the hours, then the share by device\"]\nG2 --> E\nG3 --> E\nE --> R[\"Home-screen hours<br/>75M + 200M + 150M = <b>425M</b>\"]\nE --> N[\"Phone hours<br/>250M x 0.3 hour = <b>75M</b>\"]\nR --> T[\"Streaming hours a day<br/>425M + 75M = <b>500M</b>\"]\nN --> T\nT --> Z1[\"TV and big screens: 50%<br/>50% x 500M = <b>250M hours</b>\"]\nT --> Z2[\"Laptops and tablets: 35%<br/>35% x 500M = <b>175M hours</b>\"]\nT --> Z3[\"Phones: 15%<br/>15% x 500M = <b>75M hours</b>\"]\nZ1 --> X[\"Total streaming hours a day<br/>250M + 175M + 75M = <b>500M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 500M hours a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only 65% stream on a day<br/>330M x 65% = 215M people<br/>500M x 215 / 250 = about <b>430M</b>\"]\nP --> Q2[\"Heavy streamers watch 4 hours<br/>50M x 1 more hour = +50M<br/>500M + 50M = about <b>550M</b>\"]\nP --> Q3[\"Phone viewing doubles to 0.6 hour<br/>250M x 0.6 = 150M<br/>425M + 150M = about <b>575M</b>\"]\nP --> Q4[\"Skip phones<br/>home screens only<br/>= about <b>425M</b>\"]\nP --> Q5[\"Typical streamers watch 1.5 hours<br/>100M x 0.5 less = -50M<br/>500M - 50M = about <b>450M</b>\"]\nQ1 --> R[\"Updated range<br/>about 425M to 575M hours a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many hours the heavy streamers watch and how many people stream\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Hours by streaming habit",
   "headers": [
    "Streamer group",
    "Share of streamers",
    "People",
    "Home-screen hours each a day",
    "Hours a day"
   ],
   "rows": [
    [
     "Light streamers",
     "40%",
     "100M",
     "0.75",
     "75M"
    ],
    [
     "Typical streamers",
     "40%",
     "100M",
     "2",
     "200M"
    ],
    [
     "Heavy streamers",
     "20%",
     "50M",
     "3",
     "150M"
    ],
    [
     "Home-screen hours",
     "100%",
     "250M",
     "",
     "425M"
    ],
    [
     "Phone hours (250M x 0.3)",
     "",
     "",
     "",
     "75M"
    ],
    [
     "Streaming hours a day",
     "",
     "",
     "",
     "500M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by device (per day, share of hours)",
    "headers": [
     "Device",
     "Share of hours",
     "Hours a day",
     "Share of total"
    ],
    "rows": [
     [
      "TV and big screens",
      "50%",
      "250M",
      "50.0%"
     ],
     [
      "Laptops and tablets",
      "35%",
      "175M",
      "35.0%"
     ],
     [
      "Phones",
      "15%",
      "75M",
      "15.0%"
     ],
     [
      "Total",
      "100%",
      "500M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why hours share is not the same as number of viewers",
    "headers": [
     "Device",
     "Share of hours",
     "Hours a day",
     "Why"
    ],
    "rows": [
     [
      "TV and big screens",
      "50%",
      "250M",
      "Few people skip the TV, and a TV stays on for long sessions"
     ],
     [
      "Laptops and tablets",
      "35%",
      "175M",
      "Used by fewer people, in medium sessions"
     ],
     [
      "Phones",
      "15%",
      "75M",
      "Almost everyone has a phone, but sessions are short, so hours stay small"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "People who stream on a day",
      "330M x 75%",
      "about 250M"
     ],
     [
      "2",
      "Home-screen hours",
      "100M x 0.75 + 100M x 2 + 50M x 3 = 75M + 200M + 150M",
      "425M"
     ],
     [
      "3",
      "Phone hours",
      "250M x 0.3 hour",
      "75M"
     ],
     [
      "4",
      "Streaming hours a day",
      "425M + 75M",
      "500M"
     ],
     [
      "5",
      "TV and big screens",
      "50% x 500M",
      "250M hours"
     ],
     [
      "6",
      "Laptops and tablets",
      "35% x 500M",
      "175M hours"
     ],
     [
      "7",
      "Phones",
      "15% x 500M",
      "75M hours"
     ],
     [
      "8",
      "Per person check",
      "500M hours / 330M people",
      "about 1.5 hours a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 500M hours a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only 65% stream on a day",
     "330M x 65% = 215M people. 500M x 215 / 250",
     "about 430M hours"
    ],
    [
     "Heavy streamers watch 4 hours, not 3",
     "50M x 1 more hour = 50M more. 500M + 50M",
     "about 550M hours"
    ],
    [
     "Phone viewing doubles to 0.6 hour",
     "250M x 0.6 = 150M. 425M + 150M",
     "about 575M hours"
    ],
    [
     "Skip phones",
     "Home screens only",
     "about 425M hours"
    ],
    [
     "Typical streamers watch 1.5 hours, not 2",
     "100M x 0.5 = 50M less. 500M - 50M",
     "about 450M hours"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate the total hours of streaming video that people in the US watch in a day. That includes every service, including YouTube, and every screen. I'll leave out live broadcast TV. There is no price here, so I'll show a share of the hours by device. Does that work?"
   ],
   [
    "Approach",
    "I'll start from the 330M US population, then find who streams on a given day. I'll split those people into light, typical and heavy streamers, multiply by the hours each group watches on home screens, and add phone viewing as a separate part. Last, I'll split the total by device."
   ],
   [
    "Hours",
    "About 75% of 330M stream on a day, so about 250M people. I'll assume 40% are light and watch 0.75 hour, 40% are typical and watch 2 hours, and 20% are heavy and watch 3 hours. That is 75M plus 200M plus 150M, so 425M home-screen hours. Phones add 250M times 0.3, or 75M. The total is 500M hours."
   ],
   [
    "Shares",
    "I'll assume TVs and big screens are 50% of hours, laptops and tablets 35%, and phones 15%. That is 250M, 175M and 75M hours. TVs carry the most because sessions are long. Phones have the most users but the shortest sessions."
   ],
   [
    "Sanity check",
    "500M hours across 330M people is about 1.5 hours per person a day. From households, 130M homes at about 4 hours each is about 520M, which is close. The number of hours the heavy group watches is my shakiest assumption."
   ],
   [
    "Range and pushback",
    "I'd say 400M to 650M hours a day. If only 65% stream on a day, it falls to about 430M. If phone viewing doubles, it rises to about 575M. The answer is most sensitive to how many hours the heavy streamers watch and how many people stream."
   ]
  ]
 },
 "cards-issued": {
  "title": "Estimate the number of new credit card applications made per day in the US",
  "lead": "Stock and flow: cards in use divided by card life gives new accounts, then divide by the approval rate; there is no price, so the contribution is the share by card type, and all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>New credit card applications a day in the US<br/>Approved and declined, all issuers\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Adults with a credit card<br/>about 260M adults x 80% = <b>about 208M</b>\"]\nU --> G1[\"Light holders: 25%<br/>52M x 2 cards = 104M cards<br/>lasts 10 years = 10.4M new a year\"]\nU --> G2[\"Typical holders: 50%<br/>104M x 4 cards = 416M cards<br/>lasts 8 years = 52M new a year\"]\nU --> G3[\"Card collectors: 25%<br/>52M x 6 cards = 312M cards<br/>lasts 6 years = 52M new a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the applications, then split by card type\"]\nG2 --> E\nG3 --> E\nE --> R[\"Approved applications a year<br/>10.4M + 52M + 52M = <b>114.4M</b>\"]\nE --> N[\"Declined applications a year<br/>50% approval, so as many as approved<br/>= <b>114.4M</b>\"]\nR --> T[\"Applications a year<br/>114.4M + 114.4M = <b>228.8M</b>\"]\nN --> T\nT --> Z1[\"Cash back and everyday: 50%<br/>228.8M x 50% = <b>114.4M a year</b>\"]\nT --> Z2[\"Travel and premium: 20%<br/>228.8M x 20% = <b>45.8M a year</b>\"]\nT --> Z3[\"Starter and credit-building: 30%<br/>228.8M x 30% = <b>68.6M a year</b>\"]\nZ1 --> X[\"Applications a day<br/>114.4M + 45.8M + 68.6M = 228.8M a year<br/>228.8M / 365 = <b>about 627K a day</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 627K applications a day<br/>228.8M a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Approval rate is 40%, not 50%<br/>114.4M / 0.4 = 286M a year<br/>/ 365 = about <b>784K</b>\"]\nP --> Q2[\"Cards last 1 year less<br/>(9, 7 and 5 years) = 133.4M new<br/>266.8M / 365 = about <b>731K</b>\"]\nP --> Q3[\"Approval rate is 60%<br/>114.4M / 0.6 = 190.7M a year<br/>/ 365 = about <b>522K</b>\"]\nP --> Q4[\"Only 70% of adults have a card<br/>627K x 182M / 208M<br/>= about <b>548K</b>\"]\nP --> Q5[\"More starter cards: 30 / 20 / 50<br/>approval 46%, 114.4M / 0.46 = 248.7M<br/>/ 365 = about <b>681K</b>\"]\nQ1 --> R[\"Updated range<br/>about 522K to 784K a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>the approval rate and card life\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "New accounts by card habit",
   "headers": [
    "Holder group",
    "Share of holders",
    "Holders",
    "Cards each",
    "Card life (years)",
    "New accounts a year"
   ],
   "rows": [
    [
     "Light holders",
     "25%",
     "52M",
     "2",
     "10",
     "10.4M"
    ],
    [
     "Typical holders",
     "50%",
     "104M",
     "4",
     "8",
     "52M"
    ],
    [
     "Card collectors",
     "25%",
     "52M",
     "6",
     "6",
     "52M"
    ],
    [
     "New accounts total",
     "100%",
     "208M",
     "avg 4",
     "",
     "114.4M"
    ],
    [
     "Applications a year",
     "",
     "",
     "",
     "114.4M / 50%",
     "228.8M"
    ],
    [
     "Applications a day",
     "",
     "",
     "",
     "228.8M / 365",
     "about 627K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by card type (per year)",
    "headers": [
     "Card type",
     "Share of applications",
     "Applications a year",
     "Approval rate",
     "Approved accounts a year",
     "Share of approved accounts"
    ],
    "rows": [
     [
      "Cash back and everyday cards",
      "50%",
      "114.4M",
      "60%",
      "68.6M",
      "60.0%"
     ],
     [
      "Travel and premium cards",
      "20%",
      "45.8M",
      "40%",
      "18.3M",
      "16.0%"
     ],
     [
      "Starter and credit-building cards",
      "30%",
      "68.6M",
      "40%",
      "27.5M",
      "24.0%"
     ],
     [
      "Total",
      "100%",
      "228.8M",
      "50%",
      "114.4M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why share of approved accounts is not the same as share of applications",
    "headers": [
     "Card type",
     "Share of applications",
     "Share of approved accounts",
     "Why"
    ],
    "rows": [
     [
      "Cash back and everyday",
      "50%",
      "60.0%",
      "Easy to qualify for, so most of these applications are approved"
     ],
     [
      "Travel and premium",
      "20%",
      "16.0%",
      "Strict credit checks, so only 4 in 10 are approved"
     ],
     [
      "Starter and credit-building",
      "30%",
      "24.0%",
      "Many first-time applicants are declined, so 3 in 10 applications become 2.4 in 10 accounts"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Adults with a credit card",
      "260M adults x 80%",
      "about 208M"
     ],
     [
      "2",
      "Cards in use",
      "52M x 2 + 104M x 4 + 52M x 6 = 104M + 416M + 312M",
      "832M"
     ],
     [
      "3",
      "New accounts a year",
      "Each group's cards / card life: 104M / 10 + 416M / 8 + 312M / 6 = 10.4M + 52M + 52M",
      "114.4M"
     ],
     [
      "4",
      "Applications a year",
      "114.4M approved / 50% approval rate (so 114.4M are declined)",
      "228.8M"
     ],
     [
      "5",
      "Applications a day",
      "228.8M / 365",
      "about 627K"
     ],
     [
      "6",
      "Applications by card type",
      "228.8M x 50%, 20% and 30%",
      "114.4M, 45.8M, 68.6M"
     ],
     [
      "7",
      "Approval rate check",
      "50% x 60% + 20% x 40% + 30% x 40% = 30% + 8% + 12%",
      "50%"
     ],
     [
      "8",
      "Per person check",
      "228.8M applications / 260M adults, and / 208M cardholders",
      "0.88 and 1.1 a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 627K applications a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Approval rate is 40%, not 50%",
     "114.4M / 0.4 = 286M a year. 286M / 365",
     "about 784K a day"
    ],
    [
     "Cards last 1 year less (9, 7 and 5 years)",
     "104M / 9 + 416M / 7 + 312M / 5 = 11.6M + 59.4M + 62.4M = 133.4M new. 133.4M / 0.5 / 365",
     "about 731K a day"
    ],
    [
     "Approval rate is 60%",
     "114.4M / 0.6 = 190.7M a year. 190.7M / 365",
     "about 522K a day"
    ],
    [
     "Only 70% of adults have a card",
     "260M x 70% = 182M holders. 627K x 182 / 208",
     "about 548K a day"
    ],
    [
     "Mix shifts to starter cards: 30% cash back, 20% travel, 50% starter",
     "Approval 30% x 60% + 20% x 40% + 50% x 40% = 46%. 114.4M / 0.46 = 248.7M. / 365",
     "about 681K a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I will estimate how many new credit card applications are made each day in the US. I will count both approved and declined applications, from all issuers. I will leave out requests to raise a credit limit. Does that work for you?"
   ],
   [
    "Approach",
    "I will use stock and flow. The stock is cards in use. The flow is new accounts a year, which is cards in use divided by how long a card lasts. Then I divide by the approval rate to get applications. I start from 330M people."
   ],
   [
    "Cards and applications",
    "About 260M adults, and 80% hold a card, so about 208M holders. Light holders have 2 cards that last 10 years, typical holders 4 that last 8, and collectors 6 that last 6. That gives 10.4M plus 52M plus 52M, so 114.4M new accounts a year. At 50% approval that is 228.8M applications."
   ],
   [
    "By card type",
    "There is no price, so I split applications by card type. I assume 50% are cash back cards, 20% travel cards and 30% starter cards. That is 114.4M, 45.8M and 68.6M applications a year. Approval is 60%, 40% and 40%, so the average is 50%. Travel cards are 20% of applications but only 16% of approved accounts."
   ],
   [
    "Sanity check",
    "228.8M divided by 365 is about 627K applications a day. That is 0.88 applications per adult a year, or about 1.1 per card holder. Another route is that a third of adults apply each year, about 2.5 times each. The approval rate and card life are my biggest assumptions."
   ],
   [
    "Range and pushback",
    "I would say roughly 500K to 800K applications a day, with 627K as my best guess. If the approval rate is 40%, it rises to about 784K. If it is 60%, it falls to about 522K. The answer is most sensitive to the approval rate and how long cards last."
   ]
  ]
 },
 "coffeeshops": {
  "title": "Estimate the number of coffee shops in a mid-size city of 500,000 people, and their sales",
  "lead": "Demand versus supply, with residents split by how often they buy coffee, then sales by drink type; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Dedicated coffee shops in a city of 500K, and their sales<br/>Chains and cafes, not fast food or offices\"]\nC --> P[\"City population<br/>500K residents\"]\nP --> G1[\"Regulars: 10%<br/>50K people<br/>0.6 cups a day = 30K cups\"]\nP --> G2[\"Occasional: 30%<br/>150K people<br/>0.1 cups a day (1 in 10 days) = 15K cups\"]\nP --> G3[\"Rare: 60%<br/>300K people<br/>0.02 cups a day (1 in 50 days) = 6K cups\"]\nG1 --> E[\"E: Evaluate<br/>Count the cups, then the shops, then the sales\"]\nG2 --> E\nG3 --> E\nE --> R[\"Resident cups a day<br/>30K + 15K + 6K = <b>51K</b>\"]\nE --> N[\"Visitors and commuters<br/>10% x 51K = <b>about 5.1K</b>\"]\nR --> T[\"Cups a day in coffee shops<br/>51K + 5.1K = <b>56.1K</b><br/>Shops: 56.1K / 350 cups each<br/>= <b>about 160 shops</b>\"]\nN --> T\nT --> Z1[\"Drip coffee: 40%<br/>22,440 cups x $3 = <b>$67,320</b>\"]\nT --> Z2[\"Espresso drinks: 45%<br/>25,245 cups x $5 = <b>$126,225</b>\"]\nT --> Z3[\"Cold and specialty: 15%<br/>8,415 cups x $6 = <b>$50,490</b>\"]\nZ1 --> X[\"Sales a year<br/>$244,035 a day x 365 = <b>about $89M</b><br/>Answer: <b>about 160 shops</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 160 shops<br/>about $89M a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Regulars buy 0.8 cups a day<br/>(30K becomes 40K)<br/>(40K + 15K + 6K) x 1.1 / 350<br/>= about <b>190 shops</b>\"]\nP --> Q2[\"A shop sells 500 cups a day<br/>56.1K / 500<br/>= about <b>110 shops</b>\"]\nP --> Q3[\"Skip visitors and commuters<br/>51K / 350<br/>= about <b>146 shops</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$89.07M x 0.9<br/>= about <b>$80M</b>\"]\nP --> Q5[\"Drink mix 30 / 40 / 30<br/>average $4.70<br/>= about <b>$96M</b>\"]\nQ1 --> R[\"Updated range<br/>about 110 to 190 shops<br/>about $80M to $96M a year\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many cups a shop sells in a day\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Cups by buying habit",
   "headers": [
    "Group",
    "Share of residents",
    "People",
    "Cups per person per day",
    "Cups a day"
   ],
   "rows": [
    [
     "Regulars",
     "10%",
     "50K",
     "0.6",
     "30K"
    ],
    [
     "Occasional",
     "30%",
     "150K",
     "0.1",
     "15K"
    ],
    [
     "Rare",
     "60%",
     "300K",
     "0.02",
     "6K"
    ],
    [
     "Residents total",
     "100%",
     "500K",
     "",
     "51K"
    ],
    [
     "Visitors and commuters",
     "",
     "",
     "10% extra",
     "5.1K"
    ],
    [
     "Cups a day in coffee shops",
     "",
     "",
     "",
     "56.1K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by drink type (per year)",
    "headers": [
     "Drink type",
     "Price each",
     "Share of cups",
     "Cups a day",
     "Sales a day",
     "Share of sales"
    ],
    "rows": [
     [
      "Drip coffee",
      "$3",
      "40%",
      "22,440",
      "$67,320",
      "27.6%"
     ],
     [
      "Espresso drinks",
      "$5",
      "45%",
      "25,245",
      "$126,225",
      "51.7%"
     ],
     [
      "Cold and specialty",
      "$6",
      "15%",
      "8,415",
      "$50,490",
      "20.7%"
     ],
     [
      "Total (x 365 days = about $89M a year)",
      "avg $4.35",
      "100%",
      "56,100",
      "$244,035",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as cup share",
    "headers": [
     "Drink type",
     "Share of cups",
     "Share of sales",
     "Why"
    ],
    "rows": [
     [
      "Drip coffee",
      "40%",
      "27.6%",
      "Cheapest drink, so it earns less than its share of cups"
     ],
     [
      "Espresso drinks",
      "45%",
      "51.7%",
      "Priced above the $4.35 average, so it brings in over half the sales"
     ],
     [
      "Cold and specialty",
      "15%",
      "20.7%",
      "Highest price, so a small share of cups earns a bigger share of sales"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Cups from residents",
      "50K x 0.6 + 150K x 0.1 + 300K x 0.02 = 30K + 15K + 6K",
      "51K a day"
     ],
     [
      "2",
      "Add visitors and commuters",
      "51K x 10% = 5.1K, so 51K + 5.1K",
      "56.1K cups a day"
     ],
     [
      "3",
      "Number of shops",
      "56.1K cups / 350 cups per shop",
      "about 160 shops"
     ],
     [
      "4",
      "Average price per cup",
      "40% x $3 + 45% x $5 + 15% x $6 = 1.20 + 2.25 + 0.90",
      "$4.35"
     ],
     [
      "5",
      "Sales a day",
      "56,100 cups x $4.35",
      "$244,035"
     ],
     [
      "6",
      "Sales a year",
      "$244,035 x 365",
      "about $89M"
     ],
     [
      "7",
      "Sales per shop",
      "$89M / 160 shops",
      "about $557K a year"
     ],
     [
      "8",
      "Per person check",
      "56.1K cups / 500K people, and 500K people / 160 shops",
      "0.11 cups a day, 1 shop per 3,100 people"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 160 shops and $89M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Regulars buy 0.8 cups a day",
     "50K x 0.8 = 40K. (40K + 15K + 6K) x 1.1 = 67.1K. 67.1K / 350",
     "about 190 shops"
    ],
    [
     "A shop sells 500 cups a day",
     "56.1K / 500",
     "about 110 shops"
    ],
    [
     "Skip visitors and commuters",
     "51K / 350",
     "about 146 shops"
    ],
    [
     "Prices are 10% lower",
     "$89.07M x 0.9",
     "about $80M a year"
    ],
    [
     "Drink mix shifts to 30% drip, 40% espresso, 30% cold",
     "Average 30% x $3 + 40% x $5 + 30% x $6 = $4.70. 56,100 x $4.70 x 365",
     "about $96M a year"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many dedicated coffee shops a city of 500,000 people supports, and roughly what they sell. I'll count chains and independent cafes, and leave out fast food, offices and grocery stores. Is that the right scope, and do you want sales as well as the shop count?"
   ],
   [
    "Approach",
    "I'll use demand and supply. First I work out how many cups people buy in coffee shops each day, split by how often they buy. Then I divide by the cups one shop sells in a day. All numbers are my assumptions."
   ],
   [
    "Cups and shops",
    "Ten percent of residents are regulars, about 50K people at 0.6 cups a day, so 30K cups. Thirty percent are occasional, 150K people at one cup in 10 days, so 15K. The rest, 300K people, buy one in 50 days, so 6K. That is 51K. Visitors add 10%, so 56.1K cups. At 350 cups a shop, that is about 160 shops."
   ],
   [
    "Sales",
    "I'll assume 40% of cups are drip at $3, 45% are espresso drinks at $5 and 15% are cold or specialty at $6. That is an average of $4.35. So 56,100 cups a day brings in about $244K a day, and about $89M a year. Espresso drinks are the biggest slice, over half of sales."
   ],
   [
    "Sanity check",
    "That is one shop for about 3,100 people. The US has roughly one shop per 5,500 people, so a dense city should be somewhat higher. Sales work out to about $557K a shop a year, which is believable for a busy cafe. The biggest driver is how many cups a shop sells."
   ],
   [
    "Range and pushback",
    "I'd say roughly 110 to 190 shops, with sales of about $80M to $96M a year. If a shop sells 500 cups a day, it drops to about 110. If regulars buy 0.8 cups a day, it rises to about 190. If prices are 10% lower, sales are about $80M. The answer is most sensitive to cups per shop."
   ]
  ]
 },
 "elevators": {
  "title": "Estimate the number of elevators in Manhattan, and what they cost to maintain",
  "lead": "Bottom-up from buildings with an elevator, split by building size, plus special buildings, then upkeep cost by type (figures are illustrative assumptions).",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Passenger and freight elevators in Manhattan, and what they cost to maintain<br/>Elevators only, not escalators\"]\nC --> P[\"Buildings in Manhattan<br/>about 40K\"]\nP --> U[\"Buildings with an elevator<br/>40K x 35% = <b>14K</b><br/>walk-ups and low rises have none\"]\nU --> G1[\"Small buildings: 57%<br/>8K buildings<br/>x 1 elevator = 8K\"]\nU --> G2[\"Mid-rise buildings: 39%<br/>5.5K buildings<br/>x 2 elevators = 11K\"]\nU --> G3[\"Towers: 4%<br/>0.5K buildings<br/>x 18 elevators = 9K\"]\nG1 --> E[\"E: Evaluate<br/>Count the elevators, then the upkeep cost\"]\nG2 --> E\nG3 --> E\nE --> R[\"Elevators in these buildings<br/>8K + 11K + 9K = <b>28K</b>\"]\nE --> N[\"Hotels, hospitals, stations<br/>28K x 10% = <b>2.8K</b>\"]\nR --> T[\"Elevators in Manhattan<br/>28K + 2.8K = <b>about 31K</b>\"]\nN --> T\nT --> Z1[\"Small buildings: 26% of elevators<br/>8K x $5K = <b>$40.0M</b>\"]\nT --> Z2[\"Mid-rise: 36% of elevators<br/>11K x $8K = <b>$88.0M</b>\"]\nT --> Z3[\"Towers: 29% of elevators<br/>9K x $15K = <b>$135.0M</b>\"]\nT --> Z4[\"Special buildings: 9% of elevators<br/>2.8K x $12K = <b>$33.6M</b>\"]\nZ1 --> X[\"Upkeep cost a year<br/>$40.0M + $88.0M + $135.0M + $33.6M<br/>= <b>$296.6M</b>\"]\nZ2 --> X\nZ3 --> X\nZ4 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3,Z4 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 31K elevators<br/>about $296.6M a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Only 25% of buildings have one<br/>40K x 25% x 2 = 20K<br/>20K x 1.1 = about <b>22K</b>\"]\nP --> Q2[\"Average 3 per building<br/>14K x 3 = 42K<br/>42K x 1.1 = about <b>46K</b>\"]\nP --> Q3[\"Skip hotels, hospitals, stations<br/>14K x 2<br/>= about <b>28K</b>\"]\nP --> Q4[\"Upkeep costs 20% lower<br/>$296.6M x 0.8<br/>= about <b>$237M</b>\"]\nP --> Q5[\"Tower upkeep is $20K, not $15K<br/>9K x $5K = $45M extra<br/>= about <b>$342M</b>\"]\nQ1 --> R[\"Updated range<br/>about 22K to 46K elevators<br/>about $237M to $342M a year\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>elevators per building\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Elevators by building type",
   "headers": [
    "Building type",
    "Share of elevator buildings",
    "Buildings",
    "Elevators each",
    "Elevators"
   ],
   "rows": [
    [
     "Small buildings",
     "57%",
     "8K",
     "1",
     "8K"
    ],
    [
     "Mid-rise buildings",
     "39%",
     "5.5K",
     "2",
     "11K"
    ],
    [
     "Towers",
     "4%",
     "0.5K",
     "18",
     "9K"
    ],
    [
     "Elevators in these buildings",
     "100%",
     "14K",
     "average 2",
     "28K"
    ],
    [
     "Hotels, hospitals, stations",
     "",
     "",
     "10% extra",
     "2.8K"
    ],
    [
     "Elevators in Manhattan",
     "",
     "",
     "",
     "about 31K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Upkeep cost contribution by building type (per year)",
    "headers": [
     "Building type",
     "Upkeep each",
     "Share of elevators",
     "Elevators",
     "Cost a year",
     "Share of cost"
    ],
    "rows": [
     [
      "Small buildings",
      "$5K",
      "26.0%",
      "8.0K",
      "$40.0M",
      "13.5%"
     ],
     [
      "Mid-rise buildings",
      "$8K",
      "35.7%",
      "11.0K",
      "$88.0M",
      "29.7%"
     ],
     [
      "Towers",
      "$15K",
      "29.2%",
      "9.0K",
      "$135.0M",
      "45.5%"
     ],
     [
      "Hotels, hospitals, stations",
      "$12K",
      "9.1%",
      "2.8K",
      "$33.6M",
      "11.3%"
     ],
     [
      "Total",
      "avg $9.6K",
      "100%",
      "30.8K",
      "$296.6M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as elevator share",
    "headers": [
     "Building type",
     "Share of elevators",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Small buildings",
      "26.0%",
      "13.5%",
      "Simple, slow lifts that need little upkeep, so the cost share is about half the elevator share"
     ],
     [
      "Mid-rise buildings",
      "35.7%",
      "29.7%",
      "Upkeep of $8K is below the $9.6K average, so the cost share is a bit lower"
     ],
     [
      "Towers",
      "29.2%",
      "45.5%",
      "Fast, tall-rise lifts cost the most to look after, so they take nearly half the cost"
     ],
     [
      "Hotels, hospitals, stations",
      "9.1%",
      "11.3%",
      "They run all day and night, so upkeep is above average"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Buildings with an elevator",
      "40K x 35%",
      "14K"
     ],
     [
      "2",
      "Elevators in these buildings",
      "8K x 1 + 5.5K x 2 + 0.5K x 18 = 8K + 11K + 9K",
      "28K"
     ],
     [
      "3",
      "Average per building",
      "28K / 14K",
      "2"
     ],
     [
      "4",
      "Hotels, hospitals, stations",
      "28K x 10%",
      "2.8K"
     ],
     [
      "5",
      "Elevators in Manhattan",
      "28K + 2.8K",
      "about 31K"
     ],
     [
      "6",
      "Upkeep cost a year",
      "8K x $5K + 11K x $8K + 9K x $15K + 2.8K x $12K = $40M + $88M + $135M + $33.6M",
      "about $297M"
     ],
     [
      "7",
      "Space cross-check",
      "400M sq ft / 20K per elevator + 1.3M residents / 150 per elevator = 20K + 8.7K",
      "about 29K"
     ],
     [
      "8",
      "Per person check",
      "1.6M residents / 31K elevators, and $297M / 1.6M residents",
      "1 per 52 residents and about $185 a resident"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 31K elevators and $297M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Only 25% of buildings have an elevator",
     "40K x 25% x 2 x 1.1",
     "about 22K elevators"
    ],
    [
     "Average 3 elevators per building",
     "14K x 3 x 1.1",
     "about 46K elevators"
    ],
    [
     "Skip hotels, hospitals and stations",
     "14K x 2",
     "about 28K elevators"
    ],
    [
     "Upkeep costs are 20% lower",
     "$296.6M x 0.8",
     "about $237M"
    ],
    [
     "Tower upkeep is $20K, not $15K",
     "9K x $5K = $45M. $296.6M + $45M",
     "about $342M"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll count passenger and freight elevators in Manhattan, and estimate what they cost to maintain each year. I'll leave out escalators. Manhattan is a very vertical place, so most of the count will come from taller buildings. Does that work?"
   ],
   [
    "Approach",
    "Bottom-up. I'll start from the number of buildings, find how many have an elevator, and split them by size. Then I multiply by elevators per building, add special buildings, and price the upkeep by type."
   ],
   [
    "Inputs",
    "I'll assume 40K buildings and 35% have an elevator, so 14K. Of those, 8K small buildings have 1, 5.5K mid-rise have 2, and 500 towers have 18. That is 8K plus 11K plus 9K, so 28K. Hotels, hospitals and stations add 10%, so about 31K elevators."
   ],
   [
    "Cost",
    "I'll assume yearly upkeep of $5K for small buildings, $8K for mid-rise, $15K for towers and $12K for special buildings. That gives $40M, $88M, $135M and $33.6M. The total is about $297M. Towers are 29% of elevators but about 46% of the cost."
   ],
   [
    "Sanity check",
    "By space, 400M sq ft of offices at 20K sq ft per elevator is 20K. Adding 1.3M residents at 150 per elevator gives 8.7K. That is about 29K, close to my number. It is about 1 elevator per 52 residents."
   ],
   [
    "Range and pushback",
    "I'd say 25K to 40K elevators, costing about $240M to $340M a year. If only 25% of buildings have one, it falls to about 22K. At 3 per building it rises to about 46K. The answer is most sensitive to elevators per building."
   ]
  ]
 },
 "laptops": {
  "title": "Estimate the number of laptops sold in the US each year, and their revenue",
  "lead": "Stock and flow from the US population, split by how often each user type replaces a laptop, then revenue by price tier; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>New laptops sold in the US each year, with revenue<br/>Replacements plus first-time buyers\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"People with a laptop<br/>330M x 70% = <b>about 231M</b>\"]\nU --> G1[\"Workers: 30%<br/>69.3M users<br/>every 3 years = 23.1M a year\"]\nU --> G2[\"Home users: 50%<br/>115.5M users<br/>every 5 years = 23.1M a year\"]\nU --> G3[\"Students: 20%<br/>46.2M users<br/>every 4 years = 11.55M a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the laptops sold, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Replacement laptops a year<br/>23.1M + 23.1M + 11.55M = <b>about 57.8M</b>\"]\nE --> N[\"First-time buyers<br/>kids and new users = <b>about 3.2M</b>\"]\nR --> T[\"Laptops sold a year<br/>57.8M + 3.2M = <b>about 61.0M</b>\"]\nN --> T\nT --> Z1[\"Budget: 40%<br/>24.4M x $450 = <b>$10.98B</b>\"]\nT --> Z2[\"Mainstream: 40%<br/>24.4M x $900 = <b>$21.96B</b>\"]\nT --> Z3[\"Premium: 20%<br/>12.2M x $1,800 = <b>$21.96B</b>\"]\nZ1 --> X[\"Revenue a year<br/>$10.98B + $21.96B + $21.96B = <b>$54.90B</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 61M laptops<br/>about $54.9B\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Laptops last one year longer<br/>(4, 6 and 5 years)<br/>45.8M + 3.2M = about <b>49M</b>\"]\nP --> Q2[\"Only 60% own a laptop<br/>57.8M x 198 / 231 = 49.5M<br/>49.5M + 3.2M = about <b>53M</b>\"]\nP --> Q3[\"Skip first-time buyers<br/>replacements only<br/>= about <b>58M</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$54.9B x 0.9<br/>= about <b>$49.4B</b>\"]\nP --> Q5[\"Premium mix 30 / 40 / 30<br/>average $1,035<br/>= about <b>$63.1B</b>\"]\nQ1 --> R[\"Updated range<br/>about 49M to 61M laptops<br/>about $49B to $63B\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how long people keep a laptop\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Laptops by user type",
   "headers": [
    "User group",
    "Share of owners",
    "Owners",
    "Years between replacements",
    "Laptops bought a year"
   ],
   "rows": [
    [
     "Workers",
     "30%",
     "69.3M",
     "3",
     "23.1M"
    ],
    [
     "Home users",
     "50%",
     "115.5M",
     "5",
     "23.1M"
    ],
    [
     "Students",
     "20%",
     "46.2M",
     "4",
     "11.55M"
    ],
    [
     "Replacements total",
     "100%",
     "231M",
     "",
     "57.8M"
    ],
    [
     "First-time buyers",
     "",
     "",
     "",
     "3.2M"
    ],
    [
     "Laptops sold a year",
     "",
     "",
     "",
     "61.0M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by laptop type (per year)",
    "headers": [
     "Laptop type",
     "Price each",
     "Share of laptops",
     "Laptops a year",
     "Revenue a year",
     "Share of revenue"
    ],
    "rows": [
     [
      "Budget (under $600)",
      "$450",
      "40%",
      "24.4M",
      "$10.98B",
      "20.0%"
     ],
     [
      "Mainstream ($600 to $1,200)",
      "$900",
      "40%",
      "24.4M",
      "$21.96B",
      "40.0%"
     ],
     [
      "Premium (over $1,200)",
      "$1,800",
      "20%",
      "12.2M",
      "$21.96B",
      "40.0%"
     ],
     [
      "Total",
      "avg $900",
      "100%",
      "61.0M",
      "$54.90B",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as laptop share",
    "headers": [
     "Laptop type",
     "Share of laptops",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Budget",
      "40%",
      "20.0%",
      "Cheapest laptop, so it earns half of what its share of units suggests"
     ],
     [
      "Mainstream",
      "40%",
      "40.0%",
      "Exactly in line, because $900 is the same as the $900 average"
     ],
     [
      "Premium",
      "20%",
      "40.0%",
      "Twice the average price, so 1 in 5 laptops brings in 4 in 10 dollars"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "People with a laptop",
      "330M x 70%",
      "about 231M"
     ],
     [
      "2",
      "Owners by type",
      "231M x 30%, 50% and 20%",
      "69.3M, 115.5M and 46.2M"
     ],
     [
      "3",
      "Replacement laptops a year",
      "Each group's owners / years between replacements: 69.3M / 3 + 115.5M / 5 + 46.2M / 4 = 23.1M + 23.1M + 11.55M",
      "about 57.8M"
     ],
     [
      "4",
      "First-time buyers",
      "Kids getting a first laptop and new users",
      "about 3.2M"
     ],
     [
      "5",
      "Laptops sold a year",
      "57.8M + 3.2M",
      "about 61.0M"
     ],
     [
      "6",
      "Average price",
      "40% x $450 + 40% x $900 + 20% x $1,800 = 180 + 360 + 360",
      "$900"
     ],
     [
      "7",
      "Revenue a year",
      "61.0M x $900",
      "about $54.9B"
     ],
     [
      "8",
      "Per person check",
      "61.0M / 330M people, and $54.9B / 330M people",
      "0.18 laptops and about $166 a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 61M laptops and $54.9B)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Laptops last one year longer (4, 6 and 5 years)",
     "69.3M / 4 + 115.5M / 6 + 46.2M / 5 = 17.3M + 19.3M + 9.2M = 45.8M, + 3.2M",
     "about 49M laptops"
    ],
    [
     "Only 60% own a laptop",
     "330M x 60% = 198M owners. 57.8M x 198 / 231 = 49.5M, + 3.2M",
     "about 53M laptops"
    ],
    [
     "Skip first-time buyers",
     "Replacements only",
     "about 58M laptops"
    ],
    [
     "Prices are 10% lower",
     "$54.9B x 0.9",
     "about $49.4B"
    ],
    [
     "Mix shifts to premium: budget 30%, mainstream 40%, premium 30%",
     "Average 135 + 360 + 540 = $1,035: 61.0M x $1,035",
     "about $63.1B"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many new laptops are sold in the US each year, in units and in dollars. I'll count replacements plus first-time buyers, and include home, work and school laptops. I'll leave out tablets and refurbished machines. Does that work?"
   ],
   [
    "Approach",
    "Stock and flow, starting from 330M people. I'll find who owns a laptop, split them by how often they replace it, and divide owners by the years between replacements. Then I'll add first-time buyers, such as kids and new users. Last, I'll turn units into dollars with a price mix."
   ],
   [
    "Laptops",
    "I'll assume 70% of 330M own a laptop, so about 231M owners. Workers are 30% and replace every 3 years, about 23.1M a year. Home users are 50% and replace every 5 years, also 23.1M. Students are 20% and replace every 4 years, about 11.6M. That is 57.8M. First-time buyers add 3.2M, so about 61M laptops."
   ],
   [
    "Revenue",
    "I'll assume 40% of laptops are budget at $450, 40% mainstream at $900, and 20% premium at $1,800. The average is $900, so 61M times $900 is about $54.9B. Premium laptops are 20% of units but 40% of revenue."
   ],
   [
    "Sanity check",
    "That is about 0.18 laptops and about $166 per person a year. One laptop every four to five years per owner fits that. How long people keep a laptop is my biggest unit assumption, and the price mix is my biggest revenue assumption."
   ],
   [
    "Range and pushback",
    "I'd say roughly 50M to 65M laptops, worth about $50B to $63B. If laptops last a year longer, units fall to about 49M. If prices are 10% lower, revenue is about $49B. The answer is most sensitive to how long people keep a laptop."
   ]
  ]
 },
 "flights": {
  "title": "Estimate the number of flights in the air over the US at 2 pm",
  "lead": "Stock and flow from the US population, split by trip length, then the share of flights in the air by flight type; all figures are illustrative assumptions and there is no dollar value.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Aircraft in the air over the US at 2 pm on a normal weekday<br/>Airline, cargo, business and military\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Airline passengers a day<br/>330M x about 0.75% = <b>about 2.5M</b>\"]\nU --> G1[\"Short trips: 40%<br/>1.0M passengers / 70 per flight = 14.3K flights<br/>x 1 hour = 14.3K flight-hours\"]\nU --> G2[\"Medium trips: 40%<br/>1.0M passengers / 120 per flight = 8.3K flights<br/>x 2.5 hours = 20.8K flight-hours\"]\nU --> G3[\"Long trips: 20%<br/>0.5M passengers / 180 per flight = 2.8K flights<br/>x 4.5 hours = 12.5K flight-hours\"]\nG1 --> E[\"E: Evaluate<br/>Count the planes in the air at 2 pm, then split by flight type\"]\nG2 --> E\nG3 --> E\nE --> R[\"Airline flights in the air at 2 pm<br/>47.6K hours / 16 active hours = 2,976<br/>x 1.1 for 2 pm = <b>3,274</b>\"]\nE --> N[\"Other aircraft<br/>cargo, business jets, military<br/>30% x 3,274 = <b>982</b>\"]\nR --> T[\"Flights in the air at 2 pm<br/>3,274 + 982 = <b>4,256</b>\"]\nN --> T\nT --> Z1[\"Airline passenger<br/>3,274 of 4,256<br/><b>77% of all flights</b>\"]\nT --> Z2[\"Cargo: 15% of airline<br/>15% x 3,274 = 491<br/><b>12% of all flights</b>\"]\nT --> Z3[\"Business and private jets: 12%<br/>12% x 3,274 = 393<br/><b>9% of all flights</b>\"]\nT --> Z4[\"Military: 3% of airline<br/>3% x 3,274 = 98<br/><b>2% of all flights</b>\"]\nZ1 --> X[\"Flights in the air at 2 pm<br/>3,274 + 491 + 393 + 98 = <b>4,256</b><br/>Answer: <b>about 4.3K flights</b>\"]\nZ2 --> X\nZ3 --> X\nZ4 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3,Z4 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 4.3K flights in the air<br/>(4,256)\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Divide by 24 hours, not 16<br/>47.6K / 24 = 1,984<br/>1,984 x 1.1 x 1.3 = about <b>2.8K</b>\"]\nP --> Q2[\"2M passengers a day, not 2.5M<br/>4,256 x 2 / 2.5<br/>= about <b>3.4K</b>\"]\nP --> Q3[\"Skip cargo, jets, military<br/>airline only<br/>= about <b>3.3K</b>\"]\nP --> Q4[\"All flights 20% longer<br/>4,256 x 1.2<br/>= about <b>5.1K</b>\"]\nP --> Q5[\"Smaller planes: 60, 100, 160 seats<br/>55.7K hours / 16 = 3,483<br/>3,483 x 1.1 x 1.3 = about <b>5.0K</b>\"]\nQ1 --> R[\"Updated range<br/>about 2.8K to 5.1K flights<br/>best guess about 4.3K\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many hours a day planes are flying\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Airline flights by trip length",
   "headers": [
    "Trip length",
    "Share of passengers",
    "Passengers a day",
    "Passengers per flight",
    "Flights a day",
    "Hours per flight",
    "Flight-hours a day"
   ],
   "rows": [
    [
     "Short trips",
     "40%",
     "1.0M",
     "70",
     "14.3K",
     "1",
     "14.3K"
    ],
    [
     "Medium trips",
     "40%",
     "1.0M",
     "120",
     "8.3K",
     "2.5",
     "20.8K"
    ],
    [
     "Long trips",
     "20%",
     "0.5M",
     "180",
     "2.8K",
     "4.5",
     "12.5K"
    ],
    [
     "Airline total",
     "100%",
     "2.5M",
     "",
     "25.4K",
     "",
     "47.6K"
    ],
    [
     "Average in the air (47.6K / 16 active hours)",
     "",
     "",
     "",
     "",
     "",
     "2,976"
    ],
    [
     "At 2 pm (x 1.1)",
     "",
     "",
     "",
     "",
     "",
     "3,274"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by flight type (share of flights in the air at 2 pm)",
    "headers": [
     "Flight type",
     "How we count it",
     "Flights in the air",
     "Share of all flights"
    ],
    "rows": [
     [
      "Airline passenger",
      "From the trip groups, with the 2 pm peak",
      "3,274",
      "77%"
     ],
     [
      "Cargo",
      "15% x 3,274",
      "491",
      "12%"
     ],
     [
      "Business and private jets",
      "12% x 3,274",
      "393",
      "9%"
     ],
     [
      "Military",
      "3% x 3,274",
      "98",
      "2%"
     ],
     [
      "Total",
      "",
      "4,256",
      "100%"
     ]
    ]
   },
   {
    "title": "Why the share of flights in the air is not the same as the share of flights per day",
    "headers": [
     "Trip length",
     "Share of flights a day",
     "Share of flight-hours",
     "Why"
    ],
    "rows": [
     [
      "Short trips",
      "56%",
      "30%",
      "Many take-offs, but each flight is only about an hour in the air"
     ],
     [
      "Medium trips",
      "33%",
      "44%",
      "Each flight spends 2.5 hours in the air, so it counts more at any moment"
     ],
     [
      "Long trips",
      "11%",
      "26%",
      "Few flights, but each stays up 4.5 hours, so they are over-represented in the sky"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Airline passengers a day",
      "330M x about 0.75% = 2.475M, call it 2.5M",
      "about 2.5M"
     ],
     [
      "2",
      "Airline flights a day",
      "1.0M / 70 + 1.0M / 120 + 0.5M / 180 = 14.3K + 8.3K + 2.8K",
      "about 25.4K"
     ],
     [
      "3",
      "Flight-hours a day",
      "14.3K x 1 + 8.3K x 2.5 + 2.8K x 4.5 = 14.3K + 20.8K + 12.5K",
      "about 47.6K"
     ],
     [
      "4",
      "Airline planes in the air on average",
      "47.6K flight-hours / 16 active hours",
      "about 2,976"
     ],
     [
      "5",
      "Airline planes at 2 pm",
      "2,976 x 1.1 (2 pm is near the daily peak)",
      "about 3,274"
     ],
     [
      "6",
      "Other aircraft",
      "3,274 x 30% (cargo 15%, business 12%, military 3%)",
      "about 982"
     ],
     [
      "7",
      "Flights in the air at 2 pm",
      "3,274 + 982",
      "about 4,256"
     ],
     [
      "8",
      "Per person check",
      "2.5M passengers x 365 days / 330M people",
      "about 2.8 flights per person a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 4.3K flights)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Planes fly 24 hours, so divide by 24 not 16",
     "47.6K / 24 = 1,984. 1,984 x 1.1 x 1.3",
     "about 2.8K flights"
    ],
    [
     "Only 2M passengers a day, not 2.5M",
     "4,256 x 2 / 2.5",
     "about 3.4K flights"
    ],
    [
     "Skip cargo, business jets and military",
     "Airline only",
     "about 3.3K flights"
    ],
    [
     "All flights are 20% longer",
     "4,256 x 1.2",
     "about 5.1K flights"
    ],
    [
     "Smaller planes: 60, 100 and 160 passengers",
     "1.0M / 60 x 1 + 1.0M / 100 x 2.5 + 0.5M / 160 x 4.5 = 55.7K hours. 55.7K / 16 = 3,483. 3,483 x 1.1 x 1.3",
     "about 5.0K flights"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many aircraft are in the air over the US at 2 pm on a normal weekday. I'll count airline passenger flights, cargo, business and private jets, and military. I'll leave out helicopters and small hobby planes. Is that the scope you want, and should I show the share by flight type?"
   ],
   [
    "Approach",
    "I'll use stock and flow. Start with US population, work out passengers a day, then flights a day and how long each flight lasts. Flights times hours gives total flight-hours. Divide by the hours planes are active to get planes in the air at one moment. These are my assumptions."
   ],
   [
    "Flights",
    "About 0.75% of 330M people fly on a given day, so about 2.5M passengers. Forty percent are short trips at 70 per flight and 1 hour. Forty percent are medium at 120 and 2.5 hours. Twenty percent are long at 180 and 4.5 hours. That is 25K flights and 47.6K flight-hours. Over 16 active hours, about 3K planes, and 3.3K at the 2 pm peak."
   ],
   [
    "Flight types",
    "Airline flights are 3,274. I'll add 15% for cargo, 12% for business jets and 3% for military, so 982 more. The total is about 4,256 flights in the air. By share, that is 77% airline, 12% cargo, 9% business and 2% military. So roughly one aircraft in four is not a passenger airline flight."
   ],
   [
    "Sanity check",
    "2.5M passengers a day is about 2.8 flights per person a year, which fits. A second route is about 45K flights of all types a day, times 1.8 hours, divided by 17 active hours, which is about 4.8K. That matches the often-quoted 5,000 aircraft at peak. The biggest driver is the active hours."
   ],
   [
    "Range and pushback",
    "I'd say roughly 3,000 to 5,500 flights, best guess about 4,300. If planes fly 24 hours, it drops to about 2.8K. If flights are 20% longer, it rises to about 5.1K. If I skip cargo, jets and military, it is about 3.3K. The answer is most sensitive to how many hours a day planes are flying."
   ]
  ]
 },
 "data-center": {
  "title": "Estimate the number of servers a video app with 10 million daily users needs, and the monthly cost",
  "lead": "Bottom-up from peak load, with daily users split by viewing habit, then server cost a month by server type; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Servers a video app with 10M daily users needs, and their monthly cost<br/>Streaming plus app requests at peak<br/>Leave out encoding and storage\"]\nC --> P[\"Daily users<br/>10M\"]\nP --> U[\"Watch time<br/>10M users x about 1 hour = <b>10M hours a day</b>\"]\nU --> G1[\"Light viewers: 40%<br/>4M users<br/>x 0.5 hour = 2M hours\"]\nU --> G2[\"Typical viewers: 40%<br/>4M users<br/>x 1 hour = 4M hours\"]\nU --> G3[\"Heavy viewers: 20%<br/>2M users<br/>x 2 hours = 4M hours\"]\nG1 --> E[\"E: Evaluate<br/>Count the servers, then the cost a month\"]\nG2 --> E\nG3 --> E\nE --> R[\"Streaming servers<br/>10M hours x 10% = 1M streams at peak<br/>1M x 3 Mbps = 3,000 Gbps<br/>3,000 / 20 Gbps = <b>150</b>\"]\nE --> N[\"App servers<br/>10M x 50 / 86,400 s x 3 = 17.4K a second<br/>17.4K / 1,000 = <b>about 18</b>\"]\nR --> T[\"Servers to run<br/>(150 + 18) x 1.5 spare = <b>about 252</b>\"]\nN --> T\nT --> Z1[\"Streaming at peak<br/>150 x $1,500 = <b>$225K</b>\"]\nT --> Z2[\"App at peak<br/>18 x $500 = <b>$9K</b>\"]\nT --> Z3[\"Spare 50%<br/>75 x $1,500 + 9 x $500 = <b>$117K</b>\"]\nZ1 --> X[\"Server cost a month<br/>$225K + $9K + $117K = <b>$351K</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 252 servers<br/>about $351K a month\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Big CDN boxes at 100 Gbps<br/>3,000 / 100 = 30 streaming servers<br/>(30 + 18) x 1.5 = about <b>72</b>\"]\nP --> Q2[\"Peak is only 5% of hours<br/>500K x 3 Mbps = 1,500 Gbps, 75 servers<br/>(75 + 18) x 1.5 = about <b>140</b>\"]\nP --> Q3[\"Spare is only 20%<br/>168 x 1.2<br/>= about <b>200</b>\"]\nP --> Q4[\"HD at 5 Mbps<br/>5,000 Gbps / 20 = 250<br/>(250 + 18) x 1.5 = <b>402</b>, $576K\"]\nP --> Q5[\"Server prices 20% lower<br/>$351K x 0.8<br/>= about <b>$281K</b> a month\"]\nQ1 --> R[\"Updated range<br/>about 72 to 400 servers<br/>about $281K to $576K a month\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>the peak share of viewing and the bandwidth each server can push\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Watch hours by viewer type",
   "headers": [
    "Viewer group",
    "Share of users",
    "Users",
    "Hours each a day",
    "Hours a day"
   ],
   "rows": [
    [
     "Light viewers",
     "40%",
     "4M",
     "0.5",
     "2M"
    ],
    [
     "Typical viewers",
     "40%",
     "4M",
     "1",
     "4M"
    ],
    [
     "Heavy viewers",
     "20%",
     "2M",
     "2",
     "4M"
    ],
    [
     "Watch hours a day",
     "100%",
     "10M",
     "",
     "10M"
    ],
    [
     "Streams at the busiest hour (10%)",
     "",
     "",
     "",
     "1M"
    ],
    [
     "Servers (150 streaming + 18 app, x 1.5 spare)",
     "",
     "",
     "",
     "about 252"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Cost contribution by server type (per month)",
    "headers": [
     "Type",
     "Price each a month",
     "Servers",
     "Cost a month",
     "Share of servers",
     "Share of cost"
    ],
    "rows": [
     [
      "Streaming servers at peak",
      "$1,500",
      "150",
      "$225K",
      "60%",
      "64%"
     ],
     [
      "App servers at peak",
      "$500",
      "18",
      "$9K",
      "7%",
      "3%"
     ],
     [
      "Spare servers (50% extra)",
      "mix of both",
      "84",
      "$117K",
      "33%",
      "33%"
     ],
     [
      "Total",
      "avg $1,393",
      "252",
      "$351K",
      "100%",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as server share",
    "headers": [
     "Type",
     "Share of servers",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Streaming at peak",
      "60%",
      "64%",
      "A streaming server has fast network cards and costs $1,500, three times an app server"
     ],
     [
      "App at peak",
      "7%",
      "3%",
      "Cheap $500 machines and only 18 of them, so a small part of the bill"
     ],
     [
      "Spare",
      "33%",
      "33%",
      "Half extra on top of peak, in the same mix, so its share matches its server share"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Watch hours a day",
      "4M x 0.5 + 4M x 1 + 2M x 2 = 2M + 4M + 4M",
      "10M hours"
     ],
     [
      "2",
      "Streams at the busiest hour",
      "10M x 10%",
      "1M streams"
     ],
     [
      "3",
      "Peak bandwidth",
      "1M x 3 Mbps = 3,000,000 Mbps",
      "3,000 Gbps"
     ],
     [
      "4",
      "Streaming servers",
      "3,000 Gbps / 20 Gbps each",
      "150"
     ],
     [
      "5",
      "App requests at peak",
      "10M x 50 / 86,400 s = 5.8K a second, x 3",
      "17.4K a second"
     ],
     [
      "6",
      "App servers",
      "17.4K / 1,000 each, rounded up",
      "18"
     ],
     [
      "7",
      "Servers to run",
      "(150 + 18) x 1.5",
      "about 252"
     ],
     [
      "8",
      "Server cost a month",
      "(150 x $1,500) + (18 x $500) + spare ($112.5K + $4.5K)",
      "$351K"
     ],
     [
      "9",
      "Per user check",
      "10M users / 252 servers, and $351K / 10M users",
      "1 server per 40K users and about 3.5 cents a user a month"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 252 servers and $351K a month)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Big CDN boxes push 100 Gbps each",
     "3,000 / 100 = 30 streaming servers. (30 + 18) x 1.5",
     "about 72 servers"
    ],
    [
     "Peak is 5% of hours, not 10%",
     "500K streams x 3 Mbps = 1,500 Gbps / 20 = 75. (75 + 18) x 1.5",
     "about 140 servers"
    ],
    [
     "Spare is 20%, not 50%",
     "168 x 1.2",
     "about 200 servers"
    ],
    [
     "HD streams at 5 Mbps",
     "1M x 5 Mbps = 5,000 Gbps / 20 = 250. (250 + 18) x 1.5 = 402. Cost 375 x $1,500 + 27 x $500",
     "about 402 servers, $576K a month"
    ],
    [
     "Server prices 20% lower",
     "$351K x 0.8",
     "about $281K a month"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many servers a video app with 10 million daily users needs, and what they cost each month. I'll size for the busiest hour. I'll count streaming servers and app servers, and leave out video encoding and storage. Is that fine?"
   ],
   [
    "Approach",
    "I'll work bottom-up from peak load. First I'll turn daily users into watch hours, then into streams at the busiest hour, then into bandwidth and streaming servers. Then I'll size app servers from requests per second, and add spare capacity."
   ],
   [
    "Servers",
    "Users watch about 1 hour on average, so 10M hours a day. About 10% lands in the busiest hour, so 1M streams at 3 Mbps each, which is 3,000 Gbps. At 20 Gbps per server, that is 150. App traffic is about 17K requests a second at peak, so 18 servers. Add 50% spare, and I need about 252."
   ],
   [
    "Cost",
    "I'll assume a streaming server costs $1,500 a month and an app server $500. Peak streaming is $225K, peak app servers are $9K, and the spare servers are $117K. That is about $351K a month. Streaming servers are 60% of the servers but 64% of the cost."
   ],
   [
    "Sanity check",
    "252 servers for 10M daily users is about 1 server per 40,000 users. Light apps run about 1 per 10K to 50K users, so that fits. The cost is about 3.5 cents per daily user per month, which is small and plausible."
   ],
   [
    "Range and pushback",
    "I'd say 200 to 400 servers, so $280K to $580K a month. With 100 Gbps CDN boxes it drops to about 72 servers. With HD at 5 Mbps it rises to about 400. The answer is most sensitive to the peak share of viewing and the bandwidth each server can push."
   ]
  ]
 },
 "data-storage": {
  "title": "Estimate the number of photos a social app with 50 million users stores per year, the space they take, and the monthly cost",
  "lead": "Bottom-up from registered users split by posting habit, then photo size, resized copies and 3 backup copies, then storage cost a month by tier; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Photos a social app stores per year, the space, and the monthly storage cost<br/>50M registered users, photos only\"]\nC --> P[\"Registered users<br/>50M\"]\nP --> U[\"Posting habits<br/>3 groups of the 50M users<br/>Photos a year = users x photos each\"]\nU --> G1[\"Heavy posters: 10%<br/>5M users<br/>x 200 photos = 1.0B a year\"]\nU --> G2[\"Regular posters: 30%<br/>15M users<br/>x 50 photos = 0.75B a year\"]\nU --> G3[\"Light posters: 60%<br/>30M users<br/>x 10 photos = 0.3B a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the photos and space, then the cost a month\"]\nG2 --> E\nG3 --> E\nE --> R[\"Original photos<br/>2.05B x 2 MB<br/>= <b>4.1 PB</b>\"]\nE --> N[\"Resized copies<br/>50% x 4.1 PB<br/>= <b>2.05 PB</b>\"]\nR --> T[\"Disk needed a year<br/>(4.1 + 2.05) x 3 copies<br/>= <b>about 18.45 PB</b>\"]\nN --> T\nT --> Z1[\"Hot: 20%<br/>3.69 PB x $23 per TB = <b>$84.9K</b>\"]\nT --> Z2[\"Warm: 30%<br/>5.54 PB x $12 per TB = <b>$66.4K</b>\"]\nT --> Z3[\"Cold: 50%<br/>9.23 PB x $4 per TB = <b>$36.9K</b>\"]\nZ1 --> X[\"Storage cost a month<br/>$84.9K + $66.4K + $36.9K = <b>$188.2K</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 2.05B photos, 18.45 PB of disk<br/>about $188K a month\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Photos are 3 MB<br/>2.05B x 3 MB = 6.15 PB<br/>x 1.5 x 3 = <b>27.7 PB</b>, $282K\"]\nP --> Q2[\"Store 1.5 copies, not 3<br/>6.15 PB x 1.5<br/>= <b>9.2 PB</b>, $94K\"]\nP --> Q3[\"Heavy posters post 100<br/>0.5B + 0.75B + 0.3B = 1.55B<br/>= <b>13.95 PB</b>\"]\nP --> Q4[\"Colder mix 10 / 20 / 70<br/>average $7.50 per TB<br/>18,450 TB x $7.5 = <b>$138K</b>\"]\nP --> Q5[\"Prices 20% lower<br/>$188.2K x 0.8<br/>= about <b>$151K</b>\"]\nQ1 --> R[\"Updated range<br/>about 1.55B to 2.05B photos<br/>9 to 28 PB, $94K to $282K a month\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>photo size and how many copies are stored\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Photos by posting habit",
   "headers": [
    "User group",
    "Share of users",
    "Users",
    "Photos each a year",
    "Photos a year"
   ],
   "rows": [
    [
     "Heavy posters",
     "10%",
     "5M",
     "200",
     "1.00B"
    ],
    [
     "Regular posters",
     "30%",
     "15M",
     "50",
     "0.75B"
    ],
    [
     "Light posters",
     "60%",
     "30M",
     "10",
     "0.30B"
    ],
    [
     "Photos a year",
     "100%",
     "50M",
     "",
     "2.05B"
    ],
    [
     "Original data (x 2 MB)",
     "",
     "",
     "",
     "4.1 PB"
    ],
    [
     "Resized copies (50%)",
     "",
     "",
     "",
     "2.05 PB"
    ],
    [
     "Disk with 3 copies",
     "",
     "",
     "",
     "18.45 PB"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Cost contribution by storage tier (per month)",
    "headers": [
     "Type",
     "Price each (per TB a month)",
     "Share of data",
     "Disk",
     "Cost a month",
     "Share of cost"
    ],
    "rows": [
     [
      "Hot",
      "$23",
      "20%",
      "3.690 PB",
      "$84.9K",
      "45.1%"
     ],
     [
      "Warm",
      "$12",
      "30%",
      "5.535 PB",
      "$66.4K",
      "35.3%"
     ],
     [
      "Cold",
      "$4",
      "50%",
      "9.225 PB",
      "$36.9K",
      "19.6%"
     ],
     [
      "Total",
      "avg $10.20",
      "100%",
      "18.450 PB",
      "$188.2K",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as data share",
    "headers": [
     "Type",
     "Share of data",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Hot",
      "20%",
      "45.1%",
      "Fast disks for recent, often viewed photos cost $23 a TB, so 1 in 5 TB brings in almost half of the bill"
     ],
     [
      "Warm",
      "30%",
      "35.3%",
      "Mid-priced at $12 a TB, so its cost share is a little above its data share"
     ],
     [
      "Cold",
      "50%",
      "19.6%",
      "Archive disk is cheap at $4 a TB, so half of the data is only about 1 in 5 dollars"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Photos a year",
      "5M x 200 + 15M x 50 + 30M x 10 = 1.0B + 0.75B + 0.3B",
      "2.05B"
     ],
     [
      "2",
      "Original data",
      "2.05B photos x 2 MB = 4.1B MB",
      "4.1 PB"
     ],
     [
      "3",
      "Resized copies",
      "50% x 4.1 PB",
      "2.05 PB"
     ],
     [
      "4",
      "Data a year",
      "4.1 PB + 2.05 PB",
      "6.15 PB"
     ],
     [
      "5",
      "Disk with 3 copies",
      "6.15 PB x 3",
      "18.45 PB"
     ],
     [
      "6",
      "Average price",
      "20% x $23 + 30% x $12 + 50% x $4 = 4.6 + 3.6 + 2.0",
      "$10.20 per TB"
     ],
     [
      "7",
      "Storage cost a month",
      "18,450 TB x $10.20",
      "about $188.2K"
     ],
     [
      "8",
      "Per user check",
      "2.05B / 50M users / 365 days, and $188.2K / 50M users",
      "0.11 photos a user a day and 0.4 cents a user a month"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 2.05B photos, 18.45 PB and $188K a month)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Photos are 3 MB, not 2 MB",
     "2.05B x 3 MB = 6.15 PB. x 1.5 x 3 = 27.7 PB. Cost $188.2K x 1.5",
     "about 28 PB, $282K a month"
    ],
    [
     "Store 1.5 copies, not 3",
     "6.15 PB x 1.5 = 9.2 PB. Cost $188.2K x 0.5",
     "about 9.2 PB, $94K a month"
    ],
    [
     "Heavy posters post 100, not 200",
     "5M x 100 + 0.75B + 0.3B = 1.55B photos. 1.55B x 2 MB x 1.5 x 3",
     "about 13.95 PB"
    ],
    [
     "Colder mix: 10%, 20%, 70%",
     "Average 2.3 + 2.4 + 2.8 = $7.50. 18,450 TB x $7.50",
     "about $138K a month"
    ],
    [
     "Prices are 20% lower",
     "$188.2K x 0.8",
     "about $151K a month"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many photos a social app with 50 million users stores each year, how much space they take, and what that costs a month. I'll count photos only, not video. I'll include resized copies and backup copies. Does that sound right?"
   ],
   [
    "Approach",
    "I'll work bottom-up from the 50M users. I'll split them into heavy, regular and light posters, multiply by photos each, then multiply by the size of a photo. Then I'll add resized copies and backup copies, and price the disk."
   ],
   [
    "Space",
    "I'll assume 10% of users are heavy and post 200 photos a year, 30% post 50, and 60% post 10. That is 1.0B plus 0.75B plus 0.3B, so about 2.05B photos. At 2 MB each, that is 4.1 PB. Resized copies add 50%, so 6.15 PB. With 3 copies, I need about 18.45 PB of disk."
   ],
   [
    "Cost",
    "I'll assume 20% of the disk is hot at $23 per TB a month, 30% is warm at $12, and 50% is cold at $4. That is about $85K, $66K and $37K, so about $188K a month. Hot storage is 20% of the data but 45% of the cost."
   ],
   [
    "Sanity check",
    "2.05B photos a year is about 65 a second, or about 0.11 photos per user a day. Big photo apps see more, nearer 0.2, so mine is on the cautious side. The cost is about 0.4 cents per user a month, which is plausible."
   ],
   [
    "Range and pushback",
    "I'd say about 1.5B to 2B photos, and 9 to 28 PB of disk, so about $94K to $282K a month. If photos are 3 MB, disk is about 28 PB. If we store 1.5 copies, it is about 9 PB. The answer is most sensitive to photo size and the number of copies stored."
   ]
  ]
 },
 "fraud-alerts": {
  "title": "Estimate the number of fraud alerts a bank with 20 million card accounts must review per day",
  "lead": "Top-down funnel from the 20M accounts: transactions, then flagged, then minus the ones cleared by a text, with the review cost by alert type; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Fraud alerts a human must review each day<br/>Bank with 20M card accounts, cost of review\"]\nC --> P[\"Card accounts<br/>20M\"]\nP --> G1[\"Heavy users: 25%<br/>5M accounts<br/>x 1.6 a day = 8M transactions\"]\nP --> G2[\"Typical users: 50%<br/>10M accounts<br/>x 1.0 a day = 10M transactions\"]\nP --> G3[\"Light users: 25%<br/>5M accounts<br/>x 0.4 a day = 2M transactions\"]\nG1 --> E[\"E: Evaluate<br/>Count the alerts, then the review cost\"]\nG2 --> E\nG3 --> E\nE --> R[\"Flagged a day<br/>8M + 10M + 2M = 20M<br/>20M x 0.2% = <b>40K</b>\"]\nE --> N[\"Cleared by a text a day<br/>40K x 70% = <b>28K</b>\"]\nR --> T[\"Left for an analyst a day<br/>40K - 28K = <b>12K</b>\"]\nN --> T\nT --> Z1[\"Likely fraud: 35%<br/>4.2K x $12 = <b>$50.4K</b>\"]\nT --> Z2[\"Unclear: 45%<br/>5.4K x $10 = <b>$54K</b>\"]\nT --> Z3[\"False alarm: 20%<br/>2.4K x $6 = <b>$14.4K</b>\"]\nZ1 --> X[\"Review cost a day<br/>$50.4K + $54K + $14.4K = <b>$118.8K</b><br/>for 12K reviews, about 300 analysts\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 12K reviews a day<br/>about $118.8K a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Flag rate is 0.3%, not 0.2%<br/>20M x 0.3% = 60K<br/>60K x 30% = about <b>18K</b>\"]\nP --> Q2[\"Only half cleared by a text<br/>40K x 50%<br/>= about <b>20K</b>\"]\nP --> Q3[\"Half as many transactions: 10M a day<br/>10M x 0.2% = 20K<br/>20K x 30% = about <b>6K</b>\"]\nP --> Q4[\"Each review costs 20% more<br/>$118.8K x 1.2<br/>= about <b>$142.6K</b>\"]\nP --> Q5[\"More likely fraud: 50 / 35 / 15<br/>6K x $12 + 4.2K x $10 + 1.8K x $6<br/>= about <b>$124.8K</b>\"]\nQ1 --> R[\"Updated range<br/>about 6K to 20K reviews a day<br/>about $119K to $143K a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>the flag rate and the auto-clear share\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Transactions by account type",
   "headers": [
    "Account group",
    "Share of accounts",
    "Accounts",
    "Transactions per account a day",
    "Transactions a day"
   ],
   "rows": [
    [
     "Heavy users",
     "25%",
     "5M",
     "1.6",
     "8M"
    ],
    [
     "Typical users",
     "50%",
     "10M",
     "1",
     "10M"
    ],
    [
     "Light users",
     "25%",
     "5M",
     "0.4",
     "2M"
    ],
    [
     "Transactions total",
     "100%",
     "20M",
     "1.0",
     "20M"
    ],
    [
     "Flagged (0.2%)",
     "",
     "",
     "",
     "40K"
    ],
    [
     "Left for an analyst (30% of flagged)",
     "",
     "",
     "",
     "12K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by alert type (review cost per day)",
    "headers": [
     "Alert type",
     "Cost per review",
     "Share of reviews",
     "Reviews a day",
     "Cost a day",
     "Share of cost"
    ],
    "rows": [
     [
      "Likely fraud",
      "$12",
      "35%",
      "4.2K",
      "$50.4K",
      "42.4%"
     ],
     [
      "Unclear",
      "$10",
      "45%",
      "5.4K",
      "$54K",
      "45.5%"
     ],
     [
      "False alarm",
      "$6",
      "20%",
      "2.4K",
      "$14.4K",
      "12.1%"
     ],
     [
      "Total",
      "avg $9.90",
      "100%",
      "12K",
      "$118.8K",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as review share",
    "headers": [
     "Alert type",
     "Share of reviews",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Likely fraud",
      "35%",
      "42.4%",
      "The analyst calls the customer and blocks the card, so each review takes longest"
     ],
     [
      "Unclear",
      "45%",
      "45.5%",
      "About equal to its review share, because $10 is near the $9.90 average"
     ],
     [
      "False alarm",
      "20%",
      "12.1%",
      "A quick look and close, so 1 in 5 reviews is only about 1 in 8 of the cost"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Transactions a day",
      "Each group's accounts x transactions a day: 5M x 1.6 + 10M x 1.0 + 5M x 0.4 = 8M + 10M + 2M",
      "20M"
     ],
     [
      "2",
      "Flagged a day",
      "20M x 0.2%",
      "40K"
     ],
     [
      "3",
      "Cleared by a text",
      "40K x 70%",
      "28K"
     ],
     [
      "4",
      "Left for an analyst",
      "40K - 28K (same as 40K x 30%)",
      "12K"
     ],
     [
      "5",
      "Analysts needed",
      "12K reviews / 40 reviews each a day",
      "300"
     ],
     [
      "6",
      "Average review cost",
      "35% x $12 + 45% x $10 + 20% x $6 = 4.2 + 4.5 + 1.2",
      "$9.90"
     ],
     [
      "7",
      "Review cost a day",
      "12K x $9.90",
      "about $119K"
     ],
     [
      "8",
      "Per account check",
      "12K / 20M accounts, and $119K x 365 / 20M accounts",
      "0.06% a day and about $2.17 a year"
     ],
     [
      "9",
      "Other route",
      "0.1% of 20M = 20K fraud transactions, 3 per case = about 7K real cases, plus about as many false alarms",
      "about 13K"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 12K reviews and $119K a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Flag rate is 0.3%, not 0.2%",
     "20M x 0.3% = 60K flagged. 60K x 30%",
     "about 18K reviews a day"
    ],
    [
     "Only half are cleared by a text",
     "40K x 50% left for an analyst",
     "about 20K reviews a day"
    ],
    [
     "Half as many transactions (0.5 per account a day)",
     "10M x 0.2% = 20K flagged. 20K x 30%",
     "about 6K reviews a day"
    ],
    [
     "Each review costs 20% more",
     "$118.8K x 1.2",
     "about $142.6K a day"
    ],
    [
     "Mix shifts to likely fraud: 50% likely, 35% unclear, 15% false alarm",
     "12K x (50% x $12 + 35% x $10 + 15% x $6) = 6K x 12 + 4.2K x 10 + 1.8K x 6",
     "about $124.8K a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I will estimate how many fraud alerts a bank with 20 million card accounts must review each day. I will count alerts that need a person, not the ones cleared automatically. I will also put a cost on the review work. Is that the right scope?"
   ],
   [
    "Approach",
    "I will use a funnel. First all transactions, then the ones flagged by rules or a model, then the ones cleared by a text to the customer. What is left goes to an analyst. I start from the 20M accounts and split them by how often they use their card."
   ],
   [
    "Alerts",
    "A quarter of accounts make 1.6 transactions a day, half make 1.0 and a quarter make 0.4. That is 8M plus 10M plus 2M, so 20M transactions a day. If 0.2% are flagged, that is 40K. If 70% are cleared by a text, 28K are cleared. So 12K are left for an analyst."
   ],
   [
    "Cost",
    "There is a price here, the cost of a review. I assume 35% of reviews are likely fraud at $12 each, 45% unclear at $10 and 20% false alarms at $6. That is $50.4K plus $54K plus $14.4K, so about $119K a day. Likely fraud is 35% of reviews but 42% of the cost."
   ],
   [
    "Sanity check",
    "12K reviews a day, at 40 reviews per analyst, means about 300 analysts. That is 0.06% of accounts a day, and about $2.17 per account a year. Another route is 20K real fraud transactions, 3 per case, so 7K cases, plus false alarms. That gives about 13K."
   ],
   [
    "Range and pushback",
    "I would say roughly 10K to 15K reviews a day, with 12K as my best guess. If the flag rate is 0.3%, it rises to about 18K. If only half are cleared by a text, it is about 20K. The answer is most sensitive to the flag rate and the auto-clear share."
   ]
  ]
 },
 "support-calls": {
  "title": "Estimate the number of customer support calls a bank with 10 million customers gets per day",
  "lead": "Top-down from customers split by how often they call, then the cost of the calls by reason; all figures are illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Inbound phone support calls a day for a bank<br/>10M customers, phone only, with the cost of handling them\"]\nC --> P[\"Customers<br/>10M\"]\nP --> G1[\"Frequent callers: 10%<br/>1M customers<br/>8 calls a year = 8M a year\"]\nP --> G2[\"Occasional callers: 40%<br/>4M customers<br/>3 calls a year = 12M a year\"]\nP --> G3[\"Rare callers: 50%<br/>5M customers<br/>1 call a year = 5M a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the calls, then the cost of handling them\"]\nG2 --> E\nG3 --> E\nE --> R[\"Weekday calls a year<br/>85% x 25M = 21.25M<br/>/ 250 weekdays = <b>85K a weekday</b>\"]\nE --> N[\"Weekend and holiday calls a year<br/>15% x 25M = 3.75M<br/>/ 115 days = <b>32.6K a day</b>\"]\nR --> T[\"Calls a year<br/>8M + 12M + 5M = 25M<br/>25M / 365 days = <b>about 68K a day</b>\"]\nN --> T\nT --> Z1[\"Balance and payments: 45%<br/>11.25M calls x $3 = <b>$33.75M</b>\"]\nT --> Z2[\"Card issues and fraud: 30%<br/>7.5M calls x $8 = <b>$60.00M</b>\"]\nT --> Z3[\"Fees and disputes: 25%<br/>6.25M calls x $12 = <b>$75.00M</b>\"]\nZ1 --> X[\"Cost of calls a year<br/>$33.75M + $60.00M + $75.00M = <b>$168.75M</b><br/>Answer: <b>about 68K calls a day</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 68K calls a day<br/>about $169M a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Frequent callers call 5 times, not 8<br/>5M + 12M + 5M = 22M<br/>22M / 365 = about <b>60K a day</b>\"]\nP --> Q2[\"3 calls per customer a year<br/>10M x 3 / 365<br/>= about <b>82K a day</b>\"]\nP --> Q3[\"App handles 20% of calls<br/>25M x 0.8 = 20M<br/>20M / 365 = about <b>55K a day</b>\"]\nP --> Q4[\"Cost per call 20% lower<br/>$168.75M x 0.8<br/>= about <b>$135M</b>\"]\nP --> Q5[\"Reason mix 35 / 30 / 35<br/>average $7.65<br/>= about <b>$191M</b>\"]\nQ1 --> R[\"Updated range<br/>about 55K to 82K calls a day<br/>about $135M to $191M a year\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how often each customer calls\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Calls by customer type",
   "headers": [
    "Customer type",
    "Share of customers",
    "Customers",
    "Calls per customer a year",
    "Calls a year"
   ],
   "rows": [
    [
     "Frequent callers",
     "10%",
     "1M",
     "8",
     "8M"
    ],
    [
     "Occasional callers",
     "40%",
     "4M",
     "3",
     "12M"
    ],
    [
     "Rare callers",
     "50%",
     "5M",
     "1",
     "5M"
    ],
    [
     "Total",
     "100%",
     "10M",
     "2.5 on average",
     "25M"
    ],
    [
     "Weekday calls (85%, 250 days)",
     "",
     "",
     "",
     "21.25M, or 85K a weekday"
    ],
    [
     "Weekend and holiday calls (15%, 115 days)",
     "",
     "",
     "",
     "3.75M, or 32.6K a day"
    ],
    [
     "Average over all 365 days",
     "",
     "",
     "",
     "68.5K a day"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Contribution by call reason (cost per year)",
    "headers": [
     "Call reason",
     "Cost per call",
     "Share of calls",
     "Calls a year",
     "Cost a year",
     "Share of cost"
    ],
    "rows": [
     [
      "Balance and payments",
      "$3",
      "45%",
      "11.25M",
      "$33.75M",
      "20.0%"
     ],
     [
      "Card issues and fraud",
      "$8",
      "30%",
      "7.5M",
      "$60.00M",
      "35.6%"
     ],
     [
      "Fees and disputes",
      "$12",
      "25%",
      "6.25M",
      "$75.00M",
      "44.4%"
     ],
     [
      "Total",
      "avg $6.75",
      "100%",
      "25M",
      "$168.75M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as call share",
    "headers": [
     "Call reason",
     "Share of calls",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Balance and payments",
      "45%",
      "20.0%",
      "Quick and simple, so the most calls cost the least"
     ],
     [
      "Card issues and fraud",
      "30%",
      "35.6%",
      "Needs checks and sometimes a new card, so each call costs more than average"
     ],
     [
      "Fees and disputes",
      "25%",
      "44.4%",
      "Long, tricky calls, so 1 call in 4 is over 4 in 10 dollars of cost"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Calls a year",
      "1M x 8 + 4M x 3 + 5M x 1 = 8M + 12M + 5M",
      "25M"
     ],
     [
      "2",
      "Weekday calls a year",
      "25M x 85%",
      "21.25M"
     ],
     [
      "3",
      "Calls per weekday",
      "21.25M / 250 weekdays",
      "85K"
     ],
     [
      "4",
      "Calls per weekend or holiday day",
      "25M x 15% = 3.75M, / 115 days",
      "about 32.6K"
     ],
     [
      "5",
      "Calls a day on average",
      "25M / 365 days",
      "about 68K"
     ],
     [
      "6",
      "Average cost per call",
      "45% x $3 + 30% x $8 + 25% x $12 = 1.35 + 2.40 + 3.00",
      "$6.75"
     ],
     [
      "7",
      "Cost a year",
      "25M x $6.75",
      "$168.75M"
     ],
     [
      "8",
      "Staffing check",
      "85K calls x 6 min = 8.5K hours. 8.5K / 5 productive hours per agent",
      "about 1,700 agents"
     ],
     [
      "9",
      "Per customer check",
      "25M / 10M customers, and $168.75M / 10M customers",
      "2.5 calls and about $17 a year"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 68K calls a day and $169M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Frequent callers call 5 times a year, not 8",
     "1M x 5 + 12M + 5M = 22M. 22M / 365",
     "about 60K calls a day"
    ],
    [
     "Every customer calls 3 times a year",
     "10M x 3 / 365",
     "about 82K calls a day"
    ],
    [
     "The app handles 20% of calls",
     "25M x 0.8 = 20M. 20M / 365",
     "about 55K calls a day"
    ],
    [
     "Cost per call is 20% lower",
     "$168.75M x 0.8",
     "about $135M a year"
    ],
    [
     "Mix shifts to fees: 35% balance, 30% card, 35% fees",
     "Average 35% x $3 + 30% x $8 + 35% x $12 = $7.65. 25M x $7.65",
     "about $191M a year"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many phone support calls a bank with 10 million customers gets each day, and what handling them costs. I'll count inbound calls only, not chat or email, and not outbound sales calls. I'll give a weekday number and an average day. Does that work?"
   ],
   [
    "Approach",
    "I'll go top down from customers. I'll split them by how often they call, which gives calls a year. Then I'll split the year into weekdays and weekends to get calls a day. Then I'll price each call by reason to get cost. These are my assumptions."
   ],
   [
    "Calls",
    "Ten percent of customers are frequent callers, 1M people at 8 calls a year, so 8M. Forty percent are occasional, 4M at 3 calls, so 12M. Half are rare, 5M at 1 call, so 5M. That is 25M calls a year. With 85% on 250 weekdays, that is about 85K a weekday, and about 68K a day on average."
   ],
   [
    "Cost",
    "I'll assume 45% of calls are balance and payments at $3, 30% are card issues and fraud at $8, and 25% are fees and disputes at $12. The average is $6.75. That gives $33.75M, $60M and $75M, so about $169M a year. Fees and disputes are 25% of calls but 44% of cost."
   ],
   [
    "Sanity check",
    "That is 2.5 calls and about $17 per customer a year. For staffing, 85K calls at 6 minutes is 8.5K hours. At 5 productive hours each, that is about 1,700 agents, or 1 agent per 5,900 customers, which is normal. How often each customer calls is the biggest driver."
   ],
   [
    "Range and pushback",
    "I'd say roughly 55K to 85K calls a day, with a cost of about $135M to $191M a year. If an app handles 20% of calls, it falls to about 55K a day. If every customer calls 3 times, it rises to about 82K. If costs per call are 20% lower, it is about $135M. The answer is most sensitive to call frequency."
   ]
  ]
 },
 "window-washers": {
  "title": "Estimate the number of window cleaners needed for a city skyline of about 300 high-rises, and the cleaning cost",
  "lead": "Bottom-up: window cleanings needed a year divided by what one washer can do, split by how often towers are cleaned, then cost by tower type (figures are illustrative assumptions).",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Full-time window cleaners for 300 high-rises, and the cleaning cost<br/>Outside glass only, counted in window cleanings\"]\nC --> P[\"High-rises in the skyline<br/>300 towers x 4,000 windows<br/>(40 floors x 100) = 1.2M windows\"]\nP --> U[\"Split by how often they are cleaned<br/>Prestige 25%, standard 50%, budget 25%\"]\nU --> G1[\"Prestige towers: 25%<br/>75 towers = 300K windows<br/>6 cleanings = 1.8M a year\"]\nU --> G2[\"Standard towers: 50%<br/>150 towers = 600K windows<br/>4 cleanings = 2.4M a year\"]\nU --> G3[\"Budget towers: 25%<br/>75 towers = 300K windows<br/>2 cleanings = 0.6M a year\"]\nG1 --> E[\"E: Evaluate<br/>Count the washers needed, then the cost\"]\nG2 --> E\nG3 --> E\nE --> R[\"Window cleanings a year (work)<br/>1.8M + 2.4M + 0.6M = <b>4.8M</b>\"]\nE --> N[\"Cleanings per washer (capacity)<br/>20 an hour x 6 hours x 200 days<br/>= <b>24K a year</b>\"]\nR --> T[\"Washers needed<br/>4.8M / 24K = <b>200</b>\"]\nN --> T\nT --> Z1[\"Prestige: 37.5% of cleanings<br/>1.8M x $4 = <b>$7.2M</b>\"]\nT --> Z2[\"Standard: 50% of cleanings<br/>2.4M x $3 = <b>$7.2M</b>\"]\nT --> Z3[\"Budget: 12.5% of cleanings<br/>0.6M x $2 = <b>$1.2M</b>\"]\nZ1 --> X[\"Answer<br/>about <b>200 washers</b><br/>cleaning cost $7.2M + $7.2M + $1.2M = <b>$15.6M</b> a year\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 200 washers<br/>about $15.6M a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"One cleaning fewer for each tower<br/>(5, 3 and 1 a year) = 3.6M<br/>3.6M / 24K = about <b>150</b>\"]\nP --> Q2[\"Only 150 working days (weather)<br/>20 x 6 x 150 = 18K a year<br/>4.8M / 18K = about <b>267</b>\"]\nP --> Q3[\"10% of towers use rigs or robots<br/>200 x 0.9<br/>= about <b>180</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$15.6M x 0.9<br/>= about <b>$14.0M</b>\"]\nP --> Q5[\"Prestige price is $5, not $4<br/>1.8M x $5 = $9.0M, + $8.4M<br/>= about <b>$17.4M</b>\"]\nQ1 --> R[\"Updated range<br/>about 150 to 270 washers<br/>about $14.0M to $17.4M a year\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>cleanings per year and working days\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Window cleanings by tower type",
   "headers": [
    "Tower type",
    "Share of towers",
    "Towers",
    "Windows",
    "Cleanings per year",
    "Cleanings a year"
   ],
   "rows": [
    [
     "Prestige towers",
     "25%",
     "75",
     "300K",
     "6",
     "1.8M"
    ],
    [
     "Standard towers",
     "50%",
     "150",
     "600K",
     "4",
     "2.4M"
    ],
    [
     "Budget towers",
     "25%",
     "75",
     "300K",
     "2",
     "0.6M"
    ],
    [
     "Window cleanings a year",
     "100%",
     "300",
     "1.2M",
     "average 4",
     "4.8M"
    ],
    [
     "Cleanings per washer a year",
     "",
     "",
     "",
     "20 x 6 x 200",
     "24K"
    ],
    [
     "Washers needed",
     "",
     "",
     "",
     "4.8M / 24K",
     "200"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Cleaning cost contribution by tower type (per year)",
    "headers": [
     "Tower type",
     "Price per cleaning",
     "Share of cleanings",
     "Cleanings a year",
     "Cost a year",
     "Share of cost"
    ],
    "rows": [
     [
      "Prestige towers",
      "$4",
      "37.5%",
      "1.8M",
      "$7.2M",
      "46.2%"
     ],
     [
      "Standard towers",
      "$3",
      "50.0%",
      "2.4M",
      "$7.2M",
      "46.2%"
     ],
     [
      "Budget towers",
      "$2",
      "12.5%",
      "0.6M",
      "$1.2M",
      "7.7%"
     ],
     [
      "Total",
      "avg $3.25",
      "100%",
      "4.8M",
      "$15.6M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as cleaning share",
    "headers": [
     "Tower type",
     "Share of cleanings",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Prestige towers",
      "37.5%",
      "46.2%",
      "Detailed work on show-piece glass, so each window costs $4 and the cost share is higher"
     ],
     [
      "Standard towers",
      "50.0%",
      "46.2%",
      "The $3 price is below the $3.25 average, so the cost share is a little lower"
     ],
     [
      "Budget towers",
      "12.5%",
      "7.7%",
      "Few cleanings at the lowest price, so about 1 in 8 cleanings brings under 1 in 12 dollars of cost"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Windows in the skyline",
      "300 towers x (40 floors x 100 windows)",
      "1.2M"
     ],
     [
      "2",
      "Window cleanings a year",
      "300K x 6 + 600K x 4 + 300K x 2 = 1.8M + 2.4M + 0.6M",
      "4.8M"
     ],
     [
      "3",
      "Cleanings per washer a day",
      "20 an hour x 6 hours",
      "120"
     ],
     [
      "4",
      "Cleanings per washer a year",
      "120 x 200 working days",
      "24K"
     ],
     [
      "5",
      "Washers needed",
      "4.8M / 24K",
      "about 200"
     ],
     [
      "6",
      "Average price",
      "(1.8M x $4 + 2.4M x $3 + 0.6M x $2) / 4.8M = $15.6M / 4.8M",
      "$3.25"
     ],
     [
      "7",
      "Cleaning cost a year",
      "4.8M x $3.25",
      "about $15.6M"
     ],
     [
      "8",
      "Per tower check",
      "200 washers / 300 towers, and $15.6M / 300 towers",
      "0.67 washers and about $52K a tower"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 200 washers and $15.6M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "One cleaning fewer a year for each tower (5, 3 and 1)",
     "300K x 5 + 600K x 3 + 300K x 1 = 3.6M. 3.6M / 24K",
     "about 150 washers"
    ],
    [
     "Only 150 working days (weather)",
     "20 x 6 x 150 = 18K. 4.8M / 18K",
     "about 267 washers"
    ],
    [
     "10% of towers use rigs or robots",
     "200 x 0.9",
     "about 180 washers"
    ],
    [
     "Prices are 10% lower",
     "$15.6M x 0.9",
     "about $14.0M"
    ],
    [
     "Prestige price is $5, not $4",
     "1.8M x $5 = $9.0M. $9.0M + $7.2M + $1.2M",
     "about $17.4M"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many full-time window cleaners a skyline of 300 high-rises needs, and what the cleaning costs a year. I'll count outside glass only, and measure the work in window cleanings. Is that fine?"
   ],
   [
    "Approach",
    "Work divided by capacity. The work is how many window cleanings the skyline needs in a year. The capacity is how many one washer can do in a year. I'll split the towers by how often they are cleaned, then price each group."
   ],
   [
    "Inputs",
    "Each tower has about 40 floors and 100 windows a floor, so 4,000 windows. Prestige towers are cleaned 6 times a year, standard 4 and budget 2. That gives 1.8M, 2.4M and 0.6M, so 4.8M cleanings. A washer does 20 an hour for 6 hours over 200 days, so 24K a year."
   ],
   [
    "Cost",
    "4.8M divided by 24K is 200 washers. I'll assume $4 a window cleaning for prestige towers, $3 for standard and $2 for budget. That gives $7.2M, $7.2M and $1.2M. The total is about $15.6M a year, or $78K per washer."
   ],
   [
    "Sanity check",
    "By area, 300 towers with 150K sq ft of glass cleaned 4 times is 180M sq ft. A washer does 1,000 sq ft an hour, so 1.2M a year. That gives about 150 washers, the same order. It is about 0.7 washers per tower."
   ],
   [
    "Range and pushback",
    "I'd say 150 to 300 washers, costing about $14M to $17M a year. If every tower is cleaned once less a year, it is about 150. With only 150 working days it is about 267. The answer is most sensitive to cleanings per year and working days."
   ]
  ]
 },
 "coffee": {
  "title": "Estimate the number of cups of coffee sold per day in Chicago, and their revenue",
  "lead": "Top-down from Chicago's 2.7M people, split by how often they buy coffee, then revenue by cup size, with all figures per day and all inputs illustrative assumptions.",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Cups of coffee sold in Chicago (the city) each day, with revenue<br/>Cups bought in cafes and shops, per day\"]\nC --> P[\"Chicago population<br/>2.7M\"]\nP --> U[\"Adults: 80%<br/>2.7M x 80% = <b>about 2.16M</b>\"]\nU --> G1[\"Daily buyers: 12%<br/>259K adults<br/>x 1.5 cups = 389K a day\"]\nU --> G2[\"Some-day buyers: 28%<br/>605K adults<br/>x 0.25 cups = 151K a day\"]\nU --> G3[\"Rare or never: 60%<br/>1,296K adults<br/>x 0.04 cups = 52K a day\"]\nG1 --> E[\"E: Evaluate<br/>Count the cups sold, then the revenue\"]\nG2 --> E\nG3 --> E\nE --> R[\"Cups bought by residents<br/>389K + 151K + 52K = <b>about 592K</b>\"]\nE --> N[\"Commuters and tourists: +15%<br/>592K x 15% = <b>about 89K</b>\"]\nR --> T[\"Cups sold a day<br/>592K + 89K = <b>about 681K</b>\"]\nN --> T\nT --> Z1[\"Small: 25%<br/>170K cups x $4.25 = <b>$0.72M</b>\"]\nT --> Z2[\"Medium: 45%<br/>306K cups x $5.50 = <b>$1.68M</b>\"]\nT --> Z3[\"Large: 30%<br/>204K cups x $6.25 = <b>$1.28M</b>\"]\nZ1 --> X[\"Revenue a day<br/>$0.72M + $1.68M + $1.28M = <b>$3.68M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 681K cups<br/>about $3.68M a day\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Daily buyers get 1 cup, not 1.5<br/>(259K + 151K + 52K) x 1.15<br/>= about <b>532K</b>\"]\nP --> Q2[\"No commuters or tourists<br/>replace +15% with nothing<br/>= about <b>592K</b>\"]\nP --> Q3[\"Some-day buyers get 0.35 cups<br/>(389K + 212K + 52K) x 1.15<br/>= about <b>750K</b>\"]\nP --> Q4[\"Prices 10% lower<br/>$3.68M x 0.9<br/>= about <b>$3.32M</b>\"]\nP --> Q5[\"More large cups: 15 / 40 / 45<br/>average $5.65<br/>= about <b>$3.85M</b>\"]\nQ1 --> R[\"Updated range<br/>about 530K to 750K cups<br/>about $3.3M to $3.9M a day\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how often daily buyers purchase\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Cups by buying habit",
   "headers": [
    "Buyer group",
    "Share of adults",
    "Adults",
    "Cups per adult per day",
    "Cups bought a day"
   ],
   "rows": [
    [
     "Daily buyers",
     "12%",
     "259K",
     "1.5",
     "388.8K"
    ],
    [
     "Some-day buyers",
     "28%",
     "605K",
     "0.25",
     "151.2K"
    ],
    [
     "Rare or never",
     "60%",
     "1,296K",
     "0.04",
     "51.8K"
    ],
    [
     "Residents total",
     "100%",
     "2,160K",
     "",
     "591.8K"
    ],
    [
     "Commuters and tourists (+15%)",
     "",
     "",
     "",
     "88.8K"
    ],
    [
     "Cups sold a day",
     "",
     "",
     "",
     "680.6K"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Revenue contribution by cup size (per day)",
    "headers": [
     "Cup size",
     "Price each",
     "Share of cups",
     "Cups a day",
     "Revenue a day",
     "Share of revenue"
    ],
    "rows": [
     [
      "Small",
      "$4.25",
      "25%",
      "170.2K",
      "$0.72M",
      "19.6%"
     ],
     [
      "Medium",
      "$5.50",
      "45%",
      "306.3K",
      "$1.68M",
      "45.7%"
     ],
     [
      "Large",
      "$6.25",
      "30%",
      "204.2K",
      "$1.28M",
      "34.6%"
     ],
     [
      "Total",
      "avg $5.41",
      "100%",
      "680.6K",
      "$3.68M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why revenue share is not the same as cup share",
    "headers": [
     "Cup size",
     "Share of cups",
     "Share of revenue",
     "Why"
    ],
    "rows": [
     [
      "Small",
      "25%",
      "19.6%",
      "Cheapest cup, so it earns less than its share of cups"
     ],
     [
      "Medium",
      "45%",
      "45.7%",
      "Slightly above its cup share, because $5.50 is just above the $5.41 average"
     ],
     [
      "Large",
      "30%",
      "34.6%",
      "Highest price, so 3 in 10 cups bring in about a third of the revenue"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "Adults",
      "2.7M x 80%",
      "about 2.16M"
     ],
     [
      "2",
      "Cups from each group",
      "259K x 1.5 + 605K x 0.25 + 1,296K x 0.04 = 389K + 151K + 52K",
      "about 592K"
     ],
     [
      "3",
      "Commuters and tourists",
      "592K x 15%",
      "about 89K"
     ],
     [
      "4",
      "Cups sold a day",
      "592K + 89K",
      "about 681K"
     ],
     [
      "5",
      "Average price",
      "25% x $4.25 + 45% x $5.50 + 30% x $6.25 = 1.06 + 2.48 + 1.88",
      "$5.41"
     ],
     [
      "6",
      "Revenue a day",
      "681K x $5.41",
      "about $3.68M"
     ],
     [
      "7",
      "Per resident check",
      "681K / 2.7M people, and $3.68M / 2.7M people",
      "0.25 cups and about $1.36 a day"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 681K cups and $3.68M a day)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Daily buyers get 1 cup, not 1.5",
     "259K x 1 + 151K + 52K = 462K, x 1.15",
     "about 532K cups"
    ],
    [
     "No commuters or tourists",
     "Residents only",
     "about 592K cups"
    ],
    [
     "Some-day buyers get 0.35 cups, not 0.25",
     "605K x 0.35 = 212K. 389K + 212K + 52K = 653K, x 1.15",
     "about 750K cups"
    ],
    [
     "Prices are 10% lower",
     "$3.68M x 0.9",
     "about $3.32M a day"
    ],
    [
     "Mix shifts to large: small 15%, medium 40%, large 45%",
     "Average $5.65: 681K x $5.65",
     "about $3.85M a day"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate cups of coffee sold per day in the city of Chicago, in cups and in dollars. I'll count cups bought in cafes and shops, and leave out coffee made at home. I'll use retail prices by cup size. Does that work?"
   ],
   [
    "Approach",
    "Top-down from the population. Chicago has about 2.7M people. I'll take the adults, split them by how often they buy coffee, and multiply by cups per person. Then I'll add commuters and tourists, and price the cups by size."
   ],
   [
    "Cups",
    "About 80% are adults, so about 2.16M. Twelve percent buy daily at about 1.5 cups, which is 389K cups. Twenty-eight percent buy some days at 0.25 cups, which is 151K. The rest buy about 0.04, which is 52K. That is 592K. Commuters and tourists add 15%, so about 681K cups a day."
   ],
   [
    "Revenue",
    "I'll assume 25% of cups are small at $4.25, 45% medium at $5.50 and 30% large at $6.25. That is an average of about $5.41. It gives about $0.72M, $1.68M and $1.28M, so about $3.68M a day. Large cups are 30% of cups but about 35% of revenue."
   ],
   [
    "Sanity check",
    "That is about 0.25 cups and about $1.36 per resident per day. One cup for every four residents is plausible in a dense city with many cafes. The biggest driver is how many cups the daily buyers purchase."
   ],
   [
    "Range and pushback",
    "I'd say roughly 530K to 750K cups a day, worth about $3.3M to $3.9M. If daily buyers get one cup, it falls to about 532K. If prices are 10% lower, revenue is about $3.3M. The answer is most sensitive to how often daily buyers purchase."
   ]
  ]
 },
 "manholes": {
  "title": "Estimate the number of manholes in the US, and what they cost to maintain",
  "lead": "Top-down from the US population, split into urban, suburban and rural with a different people-per-manhole ratio each, then upkeep cost by area (figures are illustrative assumptions).",
  "chart": "flowchart TD\nC[\"C: Clarify<br/>Manholes (sewer and storm access covers) in the US, and what they cost to maintain<br/>Street and road manholes, counted from people\"]\nC --> P[\"US population<br/>330M\"]\nP --> U[\"Split by how people live<br/>Urban 60%, suburban 30%, rural 10%\"]\nU --> G1[\"Urban: 60%<br/>198M people<br/>1 per 75 people = 2.64M\"]\nU --> G2[\"Suburban: 30%<br/>99M people<br/>1 per 150 people = 0.66M\"]\nU --> G3[\"Rural: 10%<br/>33M people<br/>1 per 330 people = 0.10M\"]\nG1 --> E[\"E: Evaluate<br/>Count the manholes, then the upkeep cost\"]\nG2 --> E\nG3 --> E\nE --> R[\"Built-up areas<br/>2.64M + 0.66M = <b>3.30M</b>\"]\nE --> N[\"Rural allowance<br/>33M / 330 = <b>0.10M</b>\"]\nR --> T[\"Manholes in the US<br/>3.30M + 0.10M = <b>about 3.4M</b>\"]\nN --> T\nT --> Z1[\"Urban: 78% of manholes<br/>2.64M x $100 a year = <b>$264M</b>\"]\nT --> Z2[\"Suburban: 19% of manholes<br/>0.66M x $50 a year = <b>$33M</b>\"]\nT --> Z3[\"Rural: 3% of manholes<br/>0.10M x $30 a year = <b>$3M</b>\"]\nZ1 --> X[\"Upkeep cost a year<br/>$264M + $33M + $3M = <b>$300M</b>\"]\nZ2 --> X\nZ3 --> X\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass C,P,U c1;\nclass G1,G2,G3 c2;\nclass E c3;\nclass R,N,T c5;\nclass Z1,Z2,Z3 c4;\nclass X c1;",
  "pushChart": "flowchart LR\nB[\"Base answer<br/>about 3.4M manholes<br/>about $300M a year\"] --> P{\"Interviewer pushback\"}\nP --> Q1[\"Highways add 5%<br/>3.4M x 1.05<br/>= about <b>3.6M</b>\"]\nP --> Q2[\"Commercial zones: urban +10%<br/>2.64M x 1.1 = 2.90M, + 0.76M<br/>= about <b>3.7M</b>\"]\nP --> Q3[\"Urban is 1 per 50 people<br/>198M / 50 = 3.96M, + 0.76M<br/>= about <b>4.7M</b>\"]\nP --> Q4[\"Urban upkeep is $150<br/>2.64M x $150 = $396M, + $36M<br/>= about <b>$432M</b>\"]\nP --> Q5[\"Upkeep costs 20% lower<br/>$300M x 0.8<br/>= about <b>$240M</b>\"]\nQ1 --> R[\"Updated range<br/>about 3.4M to 4.7M manholes<br/>about $240M to $432M a year\"]\nQ2 --> R\nQ3 --> R\nQ4 --> R\nQ5 --> R\nR --> S[\"Say: the answer is most sensitive to<br/>how many city people share one manhole\"]\nclassDef base fill:#dbeafe,stroke:#2563eb,color:#000\nclassDef push fill:#fee2e2,stroke:#dc2626,color:#000\nclassDef out fill:#dcfce7,stroke:#16a34a,color:#000\nclass B base\nclass P,Q1,Q2,Q3,Q4,Q5 push\nclass R,S out",
  "table": {
   "title": "Manholes by area type",
   "headers": [
    "Area type",
    "Share of people",
    "People",
    "People per manhole",
    "Manholes"
   ],
   "rows": [
    [
     "Urban",
     "60%",
     "198M",
     "75",
     "2.64M"
    ],
    [
     "Suburban",
     "30%",
     "99M",
     "150",
     "0.66M"
    ],
    [
     "Rural",
     "10%",
     "33M",
     "330",
     "0.10M"
    ],
    [
     "Built-up areas (urban + suburban)",
     "90%",
     "297M",
     "",
     "3.30M"
    ],
    [
     "Manholes in the US",
     "100%",
     "330M",
     "",
     "about 3.4M"
    ]
   ]
  },
  "extraTables": [
   {
    "title": "Upkeep cost contribution by area type (per year)",
    "headers": [
     "Area type",
     "Upkeep each",
     "Share of manholes",
     "Manholes",
     "Cost a year",
     "Share of cost"
    ],
    "rows": [
     [
      "Urban",
      "$100",
      "77.6%",
      "2.64M",
      "$264M",
      "88.0%"
     ],
     [
      "Suburban",
      "$50",
      "19.4%",
      "0.66M",
      "$33M",
      "11.0%"
     ],
     [
      "Rural",
      "$30",
      "2.9%",
      "0.10M",
      "$3M",
      "1.0%"
     ],
     [
      "Total",
      "avg $88",
      "100%",
      "3.40M",
      "$300M",
      "100%"
     ]
    ]
   },
   {
    "title": "Why cost share is not the same as manhole share",
    "headers": [
     "Area type",
     "Share of manholes",
     "Share of cost",
     "Why"
    ],
    "rows": [
     [
      "Urban",
      "77.6%",
      "88.0%",
      "Heavy traffic wears covers and frames fast, so each one costs more to look after"
     ],
     [
      "Suburban",
      "19.4%",
      "11.0%",
      "Lighter traffic, so upkeep is $50 and the cost share is below the manhole share"
     ],
     [
      "Rural",
      "2.9%",
      "1.0%",
      "Few manholes and little traffic, so almost no upkeep"
     ]
    ]
   },
   {
    "title": "The math, step by step",
    "headers": [
     "Step",
     "What we work out",
     "The math",
     "Result"
    ],
    "rows": [
     [
      "1",
      "People in each area type",
      "330M x 60%, 30% and 10%",
      "198M, 99M and 33M"
     ],
     [
      "2",
      "Urban manholes",
      "198M / 75 people per manhole",
      "2.64M"
     ],
     [
      "3",
      "Suburban manholes",
      "99M / 150 people per manhole",
      "0.66M"
     ],
     [
      "4",
      "Rural allowance",
      "33M / 330 people per manhole",
      "0.10M"
     ],
     [
      "5",
      "Manholes in the US",
      "2.64M + 0.66M + 0.10M",
      "about 3.4M"
     ],
     [
      "6",
      "Average upkeep",
      "(2.64M x $100 + 0.66M x $50 + 0.10M x $30) / 3.40M = $300M / 3.40M",
      "about $88"
     ],
     [
      "7",
      "Upkeep cost a year",
      "$264M + $33M + $3M",
      "$300M"
     ],
     [
      "8",
      "Per person check",
      "330M / 3.4M manholes, and $300M / 330M people",
      "1 per 97 people and about $0.90 a person"
     ]
    ]
   }
  ],
  "pushMath": {
   "title": "Pushback math (base about 3.4M manholes and $300M)",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Highways add 5%",
     "3.4M x 1.05",
     "about 3.6M manholes"
    ],
    [
     "Commercial zones add 10% to urban",
     "2.64M x 1.1 = 2.90M. 2.90M + 0.66M + 0.10M",
     "about 3.7M manholes"
    ],
    [
     "Urban is 1 manhole per 50 people",
     "198M / 50 = 3.96M. 3.96M + 0.66M + 0.10M",
     "about 4.7M manholes"
    ],
    [
     "Urban upkeep is $150, not $100",
     "2.64M x $150 = $396M. $396M + $33M + $3M",
     "about $432M"
    ],
    [
     "Upkeep costs are 20% lower",
     "$300M x 0.8",
     "about $240M"
    ]
   ]
  },
  "sample": [
   [
    "Clarify",
    "I'll estimate how many manholes there are in the US, and roughly what they cost to maintain each year. I'll count sewer and storm access covers in streets, and add a small allowance for rural areas. Is that fine?"
   ],
   [
    "Approach",
    "I'll start from the US population of 330M and split it into urban, suburban and rural. Where people are packed together there are more pipes underneath. So I'll use a different number of people per manhole for each group."
   ],
   [
    "Inputs",
    "Urban is 60%, so 198M people at 1 manhole per 75 people. That is 2.64M. Suburban is 30%, so 99M people at 1 per 150. That is 0.66M. Rural is 10%, or 33M people, and I'll assume 1 per 330, so 0.10M. The total is about 3.4M manholes."
   ],
   [
    "Cost",
    "I'll assume upkeep per manhole is $100 a year in cities, $50 in suburbs and $30 in rural areas. That gives $264M, $33M and $3M. The total is about $300M a year. Cities are 78% of manholes but 88% of the cost."
   ],
   [
    "Sanity check",
    "As a check, 1 manhole per 80 people nationwide gives 330M divided by 80, about 4.1M. My answer is 1 per 97 people, so it is in the same range. The cost is about $0.90 per person a year, which feels reasonable."
   ],
   [
    "Range and pushback",
    "I'd say roughly 3 to 5 million manholes. If highways add 5% it is about 3.6M. If cities are denser, at 1 per 50 people, it is about 4.7M. The answer is most sensitive to how many city people share one manhole."
   ]
  ]
 },
 "us330": {
  "chart": "flowchart TD\nP[\"US population<br/><b>330M</b>\"]\nP --> A[\"Adults: 70%<br/>330M x 70% = <b>231M</b>\"]\nP --> E[\"Elderly: 20%<br/>330M x 20% = <b>66M</b>\"]\nP --> K[\"Under 18: 10%<br/>330M x 10% = <b>33M</b>\"]\nP --> H[\"Households<br/>330M / 2.5 people = <b>132M</b>\"]\nA --> A1[\"Workers: 70% of adults<br/><b>162M</b>\"]\nA --> A2[\"Drivers: 85% of adults<br/><b>196M</b>\"]\nA --> A3[\"Bank accounts: 95%<br/><b>219M</b>\"]\nA --> A4[\"Credit card holders: 80%<br/><b>185M</b>\"]\nK --> K1[\"In school: 80%<br/><b>26M</b>\"]\nH --> H1[\"Homeowners: 65%<br/><b>86M</b>\"]\nP --> V[\"Everyone, by rate<br/>Vehicles 85% = <b>280M</b><br/>Smartphones 85% = <b>280M</b><br/>Internet 90% = <b>297M</b>\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass P c1;\nclass A,E,K c2;\nclass H c3;\nclass A1,A2,A3,A4,K1,H1,V c4;",
  "split": {
   "title": "Step 1: split 330M into three groups",
   "headers": [
    "Group",
    "Share",
    "People",
    "Use it for"
   ],
   "rows": [
    [
     "Adults",
     "70%",
     "231M",
     "Jobs, driving, banking, cards, loans, most purchases"
    ],
    [
     "Elderly",
     "20%",
     "66M",
     "Retirement, healthcare, lower adoption of new products"
    ],
    [
     "Under 18",
     "10%",
     "33M",
     "School, toys, first phones, no loans or cards"
    ],
    [
     "Total",
     "100%",
     "330M",
     ""
    ]
   ]
  },
  "derived": {
   "title": "Step 2: common numbers built from the 330M",
   "headers": [
    "Number",
    "Rule",
    "The math",
    "Result"
   ],
   "rows": [
    [
     "Households",
     "Average 2.5 people each",
     "330M / 2.5",
     "132M"
    ],
    [
     "Workers",
     "70% of adults work or look for work",
     "231M x 70%",
     "162M"
    ],
    [
     "Drivers",
     "85% of adults hold a license",
     "231M x 85%",
     "196M"
    ],
    [
     "Vehicles on the road",
     "0.85 per person",
     "330M x 0.85",
     "280M"
    ],
    [
     "Smartphone users",
     "85% of people",
     "330M x 85%",
     "280M"
    ],
    [
     "Internet users",
     "90% of people",
     "330M x 90%",
     "297M"
    ],
    [
     "People with a bank account",
     "95% of adults",
     "231M x 95%",
     "219M"
    ],
    [
     "Credit card holders",
     "80% of adults",
     "231M x 80%",
     "185M"
    ],
    [
     "Homeowners (households)",
     "65% of households",
     "132M x 65%",
     "86M"
    ],
    [
     "Children in school",
     "80% of under 18",
     "33M x 80%",
     "26M"
    ]
   ]
  },
  "how": {
   "title": "How to use it in an interview",
   "headers": [
    "Step",
    "Say this",
    "Example"
   ],
   "rows": [
    [
     "1",
     "Start from 330M and name the group",
     "I'll start with 330M people, and adults are 70%, about 231M."
    ],
    [
     "2",
     "Apply one rate per group",
     "85% of adults drive, so about 196M drivers."
    ],
    [
     "3",
     "Round, then say the result",
     "About 200M drivers."
    ],
    [
     "4",
     "Say it is an assumption",
     "Those shares are my assumptions. Tell me if you have better ones."
    ]
   ]
  },
  "handy": {
   "title": "Handy round numbers on a 330M basis",
   "headers": [
    "Item",
    "Round number"
   ],
   "rows": [
    [
     "US population",
     "330M"
    ],
    [
     "Adults / elderly / under 18",
     "231M / 66M / 33M"
    ],
    [
     "US households",
     "132M (about 2.5 people each)"
    ],
    [
     "US workers",
     "162M"
    ],
    [
     "Vehicles on the road",
     "280M"
    ],
    [
     "New vehicles sold per year",
     "15M"
    ],
    [
     "New York City population",
     "8.3M"
    ],
    [
     "Chicago, city / metro",
     "2.7M / 9.5M"
    ],
    [
     "Working days per year",
     "250"
    ],
    [
     "Working hours per year",
     "2,000"
    ],
    [
     "Seconds in a day / year",
     "86,400 / 31.5M"
    ]
   ]
  },
  "chartB": "flowchart TD\nB[\"1 Base<br/>The starting group<br/>US population <b>330M</b>\"]\nB --> G1[\"2 Group 1<br/>share of base<br/>for example 10%\"]\nB --> G2[\"2 Group 2<br/>share of base<br/>for example 70%\"]\nB --> G3[\"2 Group 3<br/>share of base<br/>for example 20%\"]\nG1 --> R1[\"3 Rate for group 1<br/>share who use it<br/>x times a year\"]\nG2 --> R2[\"3 Rate for group 2<br/>share who use it<br/>x times a year\"]\nG3 --> R3[\"3 Rate for group 3<br/>share who use it<br/>x times a year\"]\nR1 --> T[\"4 Add the groups<br/>group 1 + group 2 + group 3<br/>= <b>the total count</b>\"]\nR2 --> T\nR3 --> T\nT --> U[\"5 Convert the units<br/>count to size, price or volume\"]\nU --> U1[\"Size<br/>count x size<br/>= volume\"]\nU --> U2[\"Price<br/>count x price<br/>= value\"]\nU --> U3[\"Time<br/>year / 365<br/>= per day\"]\nU1 --> C[\"6 Sanity check<br/>divide by 330M<br/>per person, per day<br/>does it feel right?\"]\nU2 --> C\nU3 --> C\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass B,C c1;\nclass G1,G2,G3,R1,R2,R3 c2;\nclass T c3;\nclass U,U1,U2,U3 c4;",
  "gen": {
   "title": "Generic formula: break down any number",
   "headers": [
    "Part",
    "What it is",
    "Example (phones sold a year)"
   ],
   "rows": [
    [
     "Base",
     "The starting group, such as 330M people",
     "330M people"
    ],
    [
     "Share",
     "The part of the base that matters",
     "85% own a smartphone = 280M"
    ],
    [
     "Rate",
     "How often each one acts or how long it lasts",
     "Upgrade every 3 years = 1 / 3 a year"
    ],
    [
     "Count",
     "Base x share x rate",
     "280M x 1 / 3 = about 93M a year"
    ],
    [
     "Value",
     "Count x price (or size)",
     "102M phones x $545 = $55.6B"
    ],
    [
     "Check",
     "Divide by the base",
     "0.31 phones per person a year"
    ]
   ]
  },
  "chartD": "flowchart TD\nB[\"1 Base<br/>US population <b>330M</b>\"]\nB --> K[\"Under 18: 10%<br/>= <b>33M</b>\"]\nB --> A[\"Adults: 70%<br/>= <b>231M</b>\"]\nB --> L[\"Elderly: 20%<br/>= <b>66M</b>\"]\nK --> K2[\"Eat pizza: 90%<br/>= <b>29.7M</b> people<br/>x 30 meals a year\"]\nA --> A2[\"Eat pizza: 85%<br/>= <b>196M</b> people<br/>x 30 meals a year\"]\nL --> L2[\"Eat pizza: 70%<br/>= <b>46M</b> people<br/>x 15 meals a year\"]\nK2 --> T[\"Add the groups<br/>891M + 5,890M + 693M<br/>= <b>7.5B pizza meals a year</b>\"]\nA2 --> T\nL2 --> T\nT --> U[\"Convert the units<br/>meals to slices, pizzas and dollars\"]\nU --> SL[\"Slices<br/>7.5B meals x 2.5<br/>= <b>18.7B slices</b>\"]\nU --> PZ[\"Whole pizzas<br/>18.7B slices / 8<br/>= <b>2.3B pizzas</b>\"]\nU --> V[\"Value<br/>2.3B pizzas x $15<br/>= <b>$35B a year</b>\"]\nSL --> C[\"Sanity check<br/>2.3B / 330M = <b>7 pizzas</b> a person<br/>$35B / 330M = <b>$106</b> a person\"]\nPZ --> C\nV --> C\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass B,C c1;\nclass K,A,L,K2,A2,L2 c2;\nclass T c3;\nclass U,SL,PZ,V c4;",
  "dg": {
   "title": "Groups: who eats pizza and how often (assumptions)",
   "headers": [
    "Group",
    "People",
    "Share who eat pizza",
    "Pizza eaters",
    "Meals each a year",
    "Meals a year"
   ],
   "rows": [
    [
     "Under 18",
     "33M",
     "90%",
     "29.7M",
     "30",
     "891M"
    ],
    [
     "Adults",
     "231M",
     "85%",
     "196M",
     "30",
     "5,890M"
    ],
    [
     "Elderly",
     "66M",
     "70%",
     "46M",
     "15",
     "693M"
    ],
    [
     "Total",
     "330M",
     "",
     "272M",
     "",
     "7.5B"
    ]
   ]
  },
  "ds": {
   "title": "Step by step: how each number is built",
   "headers": [
    "Step",
    "What we work out",
    "The math",
    "Result",
    "Rule used"
   ],
   "rows": [
    [
     "1",
     "Split the base",
     "330M x 10% / 70% / 20%",
     "33M / 231M / 66M",
     "Shares add to 100%"
    ],
    [
     "2",
     "Keep only the people who use it",
     "33M x 90%, 231M x 85%, 66M x 70%",
     "29.7M / 196M / 46M",
     "Base x share"
    ],
    [
     "3",
     "Apply the rate",
     "29.7M x 30, 196M x 30, 46M x 15",
     "891M / 5,890M / 693M",
     "Eaters x times a year"
    ],
    [
     "4",
     "Add the groups",
     "891M + 5,890M + 693M",
     "about 7.5B meals",
     "Add, never average"
    ],
    [
     "5",
     "Change the unit",
     "7.5B meals x 2.5 slices",
     "about 18.7B slices",
     "Count x size"
    ],
    [
     "6",
     "Change the unit again",
     "18.7B slices / 8 per pizza",
     "about 2.3B pizzas",
     "Divide to go to bigger units"
    ],
    [
     "7",
     "Add the price",
     "2.3B pizzas x $15",
     "about $35B a year",
     "Count x price"
    ],
    [
     "8",
     "Check per person",
     "2.3B / 330M, and $35B / 330M",
     "7 pizzas and $106 a year",
     "Divide by the base"
    ]
   ]
  },
  "dt": {
   "title": "Which group matters most? (a quick way to find the biggest driver)",
   "headers": [
    "Group",
    "Meals a year",
    "Share of the total"
   ],
   "rows": [
    [
     "Under 18",
     "891M",
     "12%"
    ],
    [
     "Adults",
     "5,890M",
     "79%"
    ],
    [
     "Elderly",
     "693M",
     "9%"
    ],
    [
     "Total",
     "7,474M",
     "100%"
    ]
   ]
  },
  "dsay": [
   [
    "Say the base",
    "I'll start from 330M people and split them into under 18, adults and elderly: 10%, 70% and 20%."
   ],
   [
    "Say the filter",
    "Not everyone eats pizza. I'll assume 90% of kids, 85% of adults and 70% of the elderly do."
   ],
   [
    "Say the rate",
    "Kids and adults have about 30 pizza meals a year, about one every 12 days, and the elderly about 15."
   ],
   [
    "Say the total",
    "That is 891M plus 5,890M plus 693M, so about 7.5B pizza meals a year."
   ],
   [
    "Say the units",
    "At 2.5 slices a meal and 8 slices a pizza, that is about 2.3B pizzas, and at $15 each about $35B."
   ],
   [
    "Say the check",
    "That is about 7 pizzas and $106 per person a year. That feels reasonable, and adults are about 80% of it, so the adult rate is my biggest assumption."
   ]
  ],
  "dtips": {
   "title": "Common mistakes when breaking down a number",
   "headers": [
    "Mistake",
    "Fix"
   ],
   "rows": [
    [
     "Splitting into groups that do not add to 100%",
     "Check the shares add up before you move on"
    ],
    [
     "Skipping the filter (assuming everyone does it)",
     "Add a share step: who actually uses it?"
    ],
    [
     "Mixing units (meals, slices, pizzas)",
     "Write the unit next to every number"
    ],
    [
     "Averaging the groups instead of adding them",
     "Work out each group, then add"
    ],
    [
     "Forgetting the sanity check",
     "Divide by 330M and ask: does one per person feel right?"
    ]
   ]
  },
  "chartS": "flowchart TD\nO[\"Old answer<br/>Example: 102M phones a year\"] --> Q{\"Interviewer changes a number\"}\nQ --> M[\"Input that MULTIPLIES<br/>population, share, rate, price, frequency<br/>New answer = old x (new / old)\"]\nQ --> D[\"Input in the DENOMINATOR<br/>life of a product, years between upgrades<br/>New answer = old x (old / new)\"]\nQ --> A[\"Input that is ADDED<br/>first-time buyers, extras, fixed costs<br/>Change only that part, then add again\"]\nM --> X1[\"Example: 85% to 75% own a phone<br/>96M x 75 / 85 = <b>85M</b>\"]\nD --> X2[\"Example: upgrade every 4 years, not 3<br/>96M x 3 / 4 = <b>72M</b>\"]\nA --> X3[\"Example: first-time buyers 6M to 10M<br/>96M + 10M = <b>106M</b>\"]\nX1 --> N[\"New answer<br/>Say what changed, the ratio, the result\"]\nX2 --> N\nX3 --> N\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclass O,N c1;\nclass Q c3;\nclass M,D,A c2;\nclass X1,X2,X3 c4;",
  "ratio": {
   "title": "Ratio method: change one input without redoing the math",
   "headers": [
    "Interviewer says",
    "Which kind of input",
    "Calculation",
    "New result"
   ],
   "rows": [
    [
     "Use 75% instead of 85% who own a phone",
     "Multiplies",
     "96M replacements x 75 / 85",
     "about 85M"
    ],
    [
     "Phones last 4 years instead of 3",
     "In the denominator",
     "96M x 3 / 4",
     "about 72M"
    ],
    [
     "Prices are 10% higher",
     "Multiplies",
     "$55.6B x 1.10",
     "about $61.1B"
    ],
    [
     "Only half as many people",
     "Multiplies",
     "$55.6B x 0.5",
     "about $27.8B"
    ],
    [
     "First-time buyers are 10M, not 6M",
     "Added",
     "96M + 10M",
     "106M"
    ],
    [
     "Do the same for New York City (8.3M people)",
     "Resize the base",
     "102M x 8.3 / 330",
     "about 2.6M"
    ]
   ]
  },
  "base": {
   "title": "Resize the base: from the US to a city or a company",
   "headers": [
    "New base",
    "Size",
    "Share of the US",
    "Multiply the US answer by"
   ],
   "rows": [
    [
     "US",
     "330M",
     "100%",
     "1"
    ],
    [
     "New York City",
     "8.3M",
     "2.5%",
     "0.025"
    ],
    [
     "Chicago (city)",
     "2.7M",
     "0.82%",
     "0.0082"
    ],
    [
     "A state of 10M people",
     "10M",
     "3.0%",
     "0.030"
    ],
    [
     "A company with 10M customers",
     "10M",
     "3.0%",
     "0.030"
    ],
    [
     "A town of 1M people",
     "1M",
     "0.3%",
     "0.003"
    ]
   ]
  },
  "time": {
   "title": "Change the time period",
   "headers": [
    "From",
    "To",
    "Do this",
    "Example (102M phones a year)"
   ],
   "rows": [
    [
     "Year",
     "Day",
     "Divide by 365",
     "about 279K a day"
    ],
    [
     "Year",
     "Week",
     "Divide by 52",
     "about 2.0M a week"
    ],
    [
     "Year",
     "Month",
     "Divide by 12",
     "about 8.5M a month"
    ],
    [
     "Day",
     "Year",
     "Multiply by 365",
     "1M a day = 365M a year"
    ],
    [
     "Day (working)",
     "Year",
     "Multiply by 250",
     "1M a day = 250M a year"
    ]
   ]
  },
  "say": {
   "title": "What to say when the interviewer changes a number",
   "headers": [
    "Step",
    "Say this",
    "Example"
   ],
   "rows": [
    [
     "1",
     "Repeat the change",
     "So the share who own a phone drops from 85% to 75%."
    ],
    [
     "2",
     "Name the type of input",
     "That multiplies the answer, so I scale by 75 over 85."
    ],
    [
     "3",
     "Do one line of math",
     "96M x 75 / 85 = about 85M."
    ],
    [
     "4",
     "Say the new answer and what it means",
     "Replacements fall to about 85M, so the total is about 91M. Share of owners is a key driver."
    ]
   ]
  }
 }
};
