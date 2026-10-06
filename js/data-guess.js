window.DATA = window.DATA || {};
DATA.guess = {
  lead: "A guesstimate is judged on the path, not the number. Remember SCOPE: Scope it, Choose an approach, Organize inputs, Process the math, Examine the result.",
  scopeChart: "flowchart LR\n  S[\"S - Scope<br/>what, where, when, which units?\"] --> C[\"C - Choose approach<br/>top-down, bottom-up or stock and flow\"]\n  C --> O[\"O - Organize inputs<br/>3 to 5 round numbers\"]\n  O --> P[\"P - Process the math<br/>write units on every line\"]\n  P --> E[\"E - Examine<br/>sanity check and give a range\"]\n  style S fill:#dbeafe,stroke:#2563eb,color:#000\n  style C fill:#fef3c7,stroke:#d97706,color:#000\n  style O fill:#dcfce7,stroke:#16a34a,color:#000\n  style P fill:#fae8ff,stroke:#a21caf,color:#000\n  style E fill:#fee2e2,stroke:#dc2626,color:#000",
  pickChart: "flowchart TD\n  Q[\"Guesstimate question\"] --> Q1{\"Q1: Does a known population<br/>use it regularly?\"}\n  Q1 -- Yes --> TD\n  Q1 -- No --> Q2{\"Q2: Is it durable, or a service<br/>tied to a stock of items?\"}\n  Q2 -- Yes --> SF\n  Q2 -- No --> Q3{\"Q3: Is supply easier<br/>to count than demand?\"}\n  Q3 -- Yes --> BU\n  Q3 -- No --> TD\n\n  TD[\"<b>TOP-DOWN</b><br/>Example: coffee cups per day\"] --> T1[\"Population<br/>330M\"]\n  T1 --> T2[\"x Share who use<br/>70%\"]\n  T2 --> T3[\"x Frequency<br/>1 per day\"]\n  T3 --> T4[\"x Price<br/>$5\"]\n  T4 --> T5[\"= Daily revenue<br/>about $1.2B\"]\n\n  SF[\"<b>STOCK AND FLOW</b><br/>Example: car tires per year\"] --> S1[\"Stock in use<br/>280M cars x 4 tires = 1.1B\"]\n  S1 --> S2[\"divide by lifespan<br/>3.75 years\"]\n  S2 --> S3[\"= Replacements per year<br/>about 300M\"]\n  S3 --> S4[\"+ New-item sales<br/>15M cars x 4 = 60M\"]\n  S4 --> S5[\"= Total per year<br/>about 360M\"]\n\n  BU[\"<b>BOTTOM-UP</b><br/>Example: output of a set of sites\"] --> B1[\"Number of sites\"]\n  B1 --> B2[\"x Capacity per site\"]\n  B2 --> B3[\"x Utilization<br/>share of capacity used\"]\n  B3 --> B4[\"= Total output\"]\n\n  classDef decision fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef top fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef stock fill:#fef3c7,stroke:#d97706,color:#000\n  classDef bottom fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef start fill:#e5e7eb,stroke:#374151,color:#000\n  class Q start\n  class Q1,Q2,Q3 decision\n  class TD,T1,T2,T3,T4,T5 top\n  class SF,S1,S2,S3,S4,S5 stock\n  class BU,B1,B2,B3,B4 bottom",
  scopeTable: {
    title: "SCOPE at a glance",
    headers: ["Letter", "Step", "Do this", "Say this"],
    rows: [
      ["S", "Scope", "Pin down what, where, when and the unit (units sold, dollars, per day).", "\"Do we mean new tires only, in the US, per year?\""],
      ["C", "Choose approach", "Pick top-down, bottom-up or stock and flow. Name it.", "\"I will use stock and flow because tires wear out.\""],
      ["O", "Organize inputs", "List 3 to 5 inputs and round each one aloud.", "\"About 280M vehicles, 4 tires each.\""],
      ["P", "Process", "Multiply or divide step by step with units.", "\"280M x 4 = about 1.1B tires in use.\""],
      ["E", "Examine", "Sanity check against a second angle, then give a range.", "\"Roughly 350 to 400M. About one tire per person per year is plausible.\""]
    ]
  },
  numbersTable: {
    title: "Handy round numbers (approximate, US unless stated)",
    headers: ["Item", "Round number"],
    rows: [
      ["US population", "335M"],
      ["US households", "130M (about 2.6 people each)"],
      ["US adults", "260M"],
      ["Vehicles on the road", "280M"],
      ["New vehicles sold per year", "15M"],
      ["New York City population", "8.3M"],
      ["Chicago, city / metro", "2.7M / 9.5M"],
      ["Working days per year", "250"],
      ["Working hours per year", "2,000"],
      ["Seconds in a day / year", "86,400 / 31.5M"]
    ]
  },
  worksheet: [
    ["S: Scope (what, where, when, unit)", "gs", "New replacement plus original-equipment car tires sold in the US per year, in units."],
    ["C: Approach and why", "gc", "Stock and flow: tires wear out, so tires in use / lifespan = replacements per year."],
    ["O: Inputs (round numbers)", "go", "280M vehicles, 4 tires each, 3.75 year life; 15M new vehicles per year, 4 tires; commercial adds about 10%."],
    ["P: Math with units", "gp", "280M x 4 = 1.1B in use; / 3.75 = about 300M replacements; plus 15M x 4 = 60M original equipment = 360M; +10% commercial = about 395M."],
    ["E: Sanity check and range", "ge", "About 1.2 tires per person per year is reasonable. Range 350 to 400M, point estimate about 375M."]
  ],
  scriptTable: {
    title: "Fill-in answer script",
    headers: ["Step", "Say"],
    rows: [
      ["Scope", "Let me confirm: we are estimating [thing] in [place] per [period], measured in [unit]. Is that right?"],
      ["Choose", "I will use a [top-down / bottom-up / stock and flow] approach because [reason]."],
      ["Organize", "I need [input 1], [input 2] and [input 3]. I will assume about [round numbers]."],
      ["Process", "[A] x [B] gives [C]. Then [C] divided by [D] gives [E]."],
      ["Examine", "So my answer is about [number]. As a check, that is [per person / per site], which seems [reasonable / high / low] because [reason]. I would expect a range of [low] to [high]."]
    ]
  },
  exampleTitle: "Filled example: How many car tires are sold in the US each year?",
  example: [
    ["S", "Scope", "I will count all new tires sold for cars and light trucks in the US in one year, replacement plus original equipment. I will skip retreads and trucks over 10 tons."],
    ["C", "Choose", "Stock and flow. Tires wear out, so tires in use divided by their lifespan gives replacements per year. Then I add tires fitted to new vehicles."],
    ["O", "Organize", "About 280M vehicles, 4 tires each, a tire lasts about 3.75 years. About 15M new vehicles per year. Commercial adds roughly 10%."],
    ["P", "Process", "280M x 4 = 1.1B tires in use. 1.1B / 3.75 = about 300M replacements. 15M x 4 = 60M original equipment. Total about 360M. Add 10% for commercial: about 395M."],
    ["E", "Examine", "395M is about 1.2 tires per person per year. A driver replacing a set every 4 years plus new cars fits that. I would say roughly 350 to 400M."]
  ],
  mistakes: {
    title: "Common mistakes and fixes",
    headers: ["Mistake", "Fix"],
    rows: [
      ["Starting math before scoping", "Spend the first 20 seconds on what, where, when and unit."],
      ["Too many inputs", "Cap at 3 to 5. Merge small factors into one."],
      ["Fake precision", "Round everything. Say \"about\" and give a range."],
      ["Dropping units", "Write the unit next to every number so errors show up."],
      ["No sanity check", "Compare per person, per household or per site against common sense."],
      ["Staying silent", "Think aloud. The interviewer grades the path."]
    ]
  },
  cheat: {
    title: "30-second guesstimate cheat sheet",
    rule: "Find 10% \u2192 Adjust \u2192 Round",
    pct: { title: "Must-know percentages", headers: ["%", "Trick"], rows: [["10%", "Move the decimal"], ["5%", "Half of 10%"], ["20%", "Double 10%"], ["15%", "10% + 5%"]] },
    scale: { title: "Scaling shortcuts", headers: ["Change", "Action"], rows: [["-10%", "\u00d7 0.9"], ["+10%", "\u00d7 1.1"], ["+5%", "Add half of 10%"], ["+20%", "Add double 10%"]] },
    examples: ["10% of 330 = 33", "5% of 330 = 16.5", "20% of 330 = 66", "330 \u2192 300 is about -10%", "330 \u2192 350 is about +5% (really +6%, close enough)"],
    segment: "Use simple splits: High / Medium / Low = 50% / 30% / 20%",
    structure: ["Define base population", "Segment (users / customers)", "Apply rate (usage / conversion)", "Multiply", "Sanity check"],
    rounding: ["Speed beats accuracy", "346 \u2192 345", "297 \u2192 300"],
    phrases: ["I'll estimate and refine.", "I'll scale instead of recalculating.", "I'll round for simplicity."],
    stuck: "I'll take a reasonable assumption and proceed.",
    final: "Structure \u2192 10% \u2192 Scale \u2192 Speak clearly"
  },
  universal: {
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
  seg: {
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
  scaling: {
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
  us: {
  "title": "Generic guesstimate template: US population version",
  "lead": "Structure any guesstimate with the US population as the base. Worked example: coffee cups sold per day in the US.",
  "chart": "flowchart TD\n    %% Nodes\n    A[Start: Clarify Question] \n    B[Define Approach: Top-Down] \n    C[Base Population: US ~330M] \n    D[Segment Population: Adults ~70% \u2192 231M] \n\n    %% Segments with total cups and revenue\n    E1[Segment A: High Usage 50% \u2192 115.5M \u2192 2 cups/day \u2192 231M cups/day \u2192 $1.155B/day] \n    E2[Segment B: Medium Usage 30% \u2192 69.3M \u2192 1 cup/day \u2192 69.3M cups/day \u2192 $346.5M/day] \n    E3[Segment C: Low Usage 20% \u2192 46.2M \u2192 0.5 cups/day \u2192 23.1M cups/day \u2192 $115.5M/day] \n\n    G[Calculate Total Daily Cups & Revenue: ~323.4M cups/day \u2192 $1.617B/day] \n    H[Sanity Check: Compare with benchmark] \n    I{Pushback from Interviewer?} \n    J[Adjust Adoption % / Frequency] \n    K[Recalculate Daily Cups & Revenue] \n    L[Final Answer / Range: ~320\u2013330M cups/day \u2192 ~$1.6B/day]\n\n    %% Arrows\n    A --> B\n    B --> C\n    C --> D\n    D --> E1\n    D --> E2\n    D --> E3\n    E1 --> G\n    E2 --> G\n    E3 --> G\n    G --> H\n    H --> I\n    I --> J\n    J --> K\n    K --> H\n    H --> L\n\n    %% Styling\n    style A fill:#FFD700,stroke:#000,stroke-width:1px,color:#000\n    style B fill:#FFB347,stroke:#000,stroke-width:1px,color:#000\n    style C fill:#98FB98,stroke:#000,stroke-width:1px,color:#000\n    style D fill:#FFA07A,stroke:#000,stroke-width:1px,color:#000\n    style E1 fill:#ADD8E6,stroke:#000,stroke-width:1px,color:#000\n    style E2 fill:#ADD8E6,stroke:#000,stroke-width:1px,color:#000\n    style E3 fill:#ADD8E6,stroke:#000,stroke-width:1px,color:#000\n    style G fill:#FFDEAD,stroke:#000,stroke-width:1px,color:#000\n    style H fill:#D3D3D3,stroke:#000,stroke-width:1px,color:#000\n    style I fill:#FF6347,stroke:#000,stroke-width:1px,color:#000\n    style J fill:#FFE4B5,stroke:#000,stroke-width:1px,color:#000\n    style K fill:#FFE4B5,stroke:#000,stroke-width:1px,color:#000\n    style L fill:#90EE90,stroke:#000,stroke-width:1px,color:#000",
  "segTable": {
    "title": "Daily cups and revenue by segment",
    "headers": [
      "Segment",
      "% of adults",
      "Users",
      "Cups/day/user",
      "Total daily cups",
      "Revenue/day (at $5/cup)"
    ],
    "rows": [
      [
        "A: High usage",
        "50%",
        "115.5M",
        "2",
        "231M",
        "$1.155B"
      ],
      [
        "B: Medium usage",
        "30%",
        "69.3M",
        "1",
        "69.3M",
        "$346.5M"
      ],
      [
        "C: Low usage",
        "20%",
        "46.2M",
        "0.5",
        "23.1M",
        "$115.5M"
      ],
      [
        "Total",
        "100%",
        "231M",
        "-",
        "323.4M",
        "$1.617B"
      ]
    ]
  },
  "segNote": "The chart and table above use the segmented model (adults 70%, three usage tiers). Steps 3 to 9 below use a simpler single-rate model (60% relevant, 70% adoption, 1 unit per day). They give different answers (about 323M versus about 139M per day), so pick one model and stay with it in an interview.",
  "secs": [
    {
      "h": "1. Clarify the problem",
      "ul": [
        "What are we estimating?",
        "Geography: US",
        "Timeframe: daily, monthly or yearly"
      ],
      "say": "Estimate the number of coffee cups sold daily in the US."
    },
    {
      "h": "2. Define approach",
      "ul": [
        "Top-down: start from US population, then segment, adoption, usage, estimate.",
        "Bottom-up: start from per-unit usage and scale up."
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
            "Relevant segment (%)",
            "60% (adults, coffee drinkers, etc.)"
          ],
          [
            "Segment size",
            "198M"
          ]
        ]
      },
      "tip": "Use round numbers for mental math."
    },
    {
      "h": "4. Segment population (optional)",
      "table": {
        "title": "Segments",
        "headers": [
          "Segment",
          "% of segment",
          "Size",
          "Notes"
        ],
        "rows": [
          [
            "A (high usage)",
            "50%",
            "99M",
            "Daily consumers"
          ],
          [
            "B (medium usage)",
            "30%",
            "59M",
            "Occasional consumers"
          ],
          [
            "C (low usage)",
            "20%",
            "40M",
            "Rare consumers"
          ]
        ]
      }
    },
    {
      "h": "5. Apply usage and behavior assumptions",
      "table": {
        "title": "Assumptions",
        "headers": [
          "Metric",
          "Value"
        ],
        "rows": [
          [
            "Adoption rate",
            "70%"
          ],
          [
            "Frequency",
            "1 per day or 30 per month"
          ],
          [
            "Average value per unit",
            "$5"
          ]
        ]
      },
      "ul": [
        "Users = segment size x adoption rate",
        "Usage = users x frequency",
        "Revenue = usage x unit value"
      ]
    },
    {
      "h": "6. Step-by-step calculations",
      "ul": [
        "Target population: 330M x 60% = 198M",
        "Actual users: 198M x 70% = 138.6M",
        "Daily usage: 138.6M x 1 = 138.6M units per day",
        "Monthly usage: 138.6M x 30 = about 4.16B units; revenue 4.16B x $5 = about $20.8B per month"
      ]
    },
    {
      "h": "7. Final answer",
      "say": "Estimated 138M daily users, consuming 138M units per day, which is about 4.16B units per month and approximately $20.8B per month. Roughly 130M to 145M daily users.",
      "ul": [
        "Always give a range to account for uncertainty."
      ]
    },
    {
      "h": "8. Sanity check",
      "ul": [
        "Compare with industry benchmarks (coffee consumption, online transactions, ATM usage).",
        "Check that the numbers make sense for total population and adoption rates."
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
            "Adoption too high",
            "70% to 50%: users = 99M",
            "Monthly usage about 3B units"
          ],
          [
            "Frequency too high",
            "30 to 20 per month",
            "Monthly usage about 2.8B units"
          ],
          [
            "Unit value too high",
            "$5 to $3",
            "Monthly revenue about $12.5B"
          ]
        ]
      },
      "say": "With a more conservative assumption, monthly consumption drops to about 3B units, generating about $15B."
    },
    {
      "h": "10. Key takeaways",
      "ul": [
        "Structure: Clarify, Segment, Adoption, Usage, Value, Sanity check.",
        "Use round numbers and percentages for mental math.",
        "Provide ranges instead of exact numbers.",
        "Verbalize your assumptions clearly.",
        "Be ready to adjust numbers quickly under pushback."
      ],
      "tip": "Works for market sizing, product adoption, revenue estimates, operational capacity, or infrastructure units in the US."
    }
  ],
  "sampleTitle": "Sample answer: coffee cups sold per day in the US (segmented model)",
  "sample": [
    [
      "Clarify",
      "I'll estimate cups of coffee sold per day in the US, in cups and in dollars. I'll count all sales, not just coffee shops. Does that work?"
    ],
    [
      "Approach",
      "I'll go top-down from population: US population, then adults, then three usage groups, then cups per person."
    ],
    [
      "Inputs",
      "US population is about 330M. Adults are about 70%, so about 231M. I'll split adults into heavy drinkers at 50% with 2 cups a day, medium at 30% with 1 cup, and light at 20% with half a cup. Price is about $5 a cup."
    ],
    [
      "Math",
      "Heavy: 115.5M people x 2 = 231M cups. Medium: 69.3M x 1 = 69.3M cups. Light: 46.2M x 0.5 = 23.1M cups. Total is about 323M cups a day. At $5, that is about $1.6B a day."
    ],
    [
      "Sanity check",
      "That is about one cup per person per day for the whole population, which feels high. The heavy group at 2 cups for half of all adults is probably generous."
    ],
    [
      "Adjust and range",
      "If I trim heavy drinkers to 1.5 cups, heavy falls to about 173M and the total to about 266M cups, or $1.3B a day. So I'd say roughly 265 to 325M cups a day, about $1.3 to $1.6B, and I'd lean toward the lower end."
    ],
    [
      "Pushback ready",
      "If you want only urban adults, I'll multiply every segment by about 50%. If you think the price is $3, I'll scale revenue by 0.6 and leave cups unchanged. The total is most sensitive to the heavy-user rate."
    ]
  ]
},
  manhole: {
  "title": "Estimate the number of manholes in the US",
  "chart": "flowchart TD\n    A[Start: Clarify Problem] \n    B[US Population: 330M]\n\n    C[Segment Population]\n    D[Urban: 60% \u2192 198M]\n    E[Suburban: 30% \u2192 99M]\n    F[Rural: 10% \u2192 33M]\n\n    G[Urban Assumption<br>1 per 75 people<br>\u2248 2.6M]\n    H[Suburban Assumption<br>1 per 150 people<br>\u2248 0.7M]\n    I[Rural Estimate<br>~0.1M]\n\n    J[Base Total<br>\u2248 3.4M]\n\n    %% Pushback Node\n    K{Interviewer Pushback?}\n\n    %% Branch 1: Highways\n    L[Highways Added<br>Assume +5% infrastructure<br>\u2248 +0.15M]\n\n    %% Branch 2: Commercial Areas\n    M[Commercial Zones<br>Higher density<br>Add +10% urban<br>\u2248 +0.25M]\n\n    %% Branch 3: Density Challenge\n    N[Density Challenge<br>Urban 1 per 50 instead of 75<br>Revised Urban \u2248 4M]\n\n    %% Recalculation\n    O[Recalculate Total]\n\n    P[Updated Estimate<br>~3.5M \u2013 5M]\n\n    Q[Sanity Check<br>1 per 80 people<br>\u2248 4M]\n\n    R[Final Answer Range<br>~3M \u2013 5M manholes]\n\n    %% Flow\n    A --> B\n    B --> C\n    C --> D\n    C --> E\n    C --> F\n\n    D --> G\n    E --> H\n    F --> I\n\n    G --> J\n    H --> J\n    I --> J\n\n    J --> K\n\n    K --> L\n    K --> M\n    K --> N\n\n    L --> O\n    M --> O\n    N --> O\n\n    O --> P\n    P --> Q\n    Q --> R\n\n    %% Styling\n    style A fill:#FFD700,stroke:#000,color:#000\n    style B fill:#98FB98,stroke:#000,color:#000\n    style C fill:#FFA07A,stroke:#000,color:#000\n    style D fill:#ADD8E6,stroke:#000,color:#000\n    style E fill:#ADD8E6,stroke:#000,color:#000\n    style F fill:#ADD8E6,stroke:#000,color:#000\n    style G fill:#FFDEAD,stroke:#000,color:#000\n    style H fill:#FFDEAD,stroke:#000,color:#000\n    style I fill:#FFDEAD,stroke:#000,color:#000\n    style J fill:#D3D3D3,stroke:#000,color:#000\n    style K fill:#FF6347,stroke:#000,color:#000\n    style L fill:#FFE4B5,stroke:#000,color:#000\n    style M fill:#FFE4B5,stroke:#000,color:#000\n    style N fill:#FFE4B5,stroke:#000,color:#000\n    style O fill:#D3D3D3,stroke:#000,color:#000\n    style P fill:#FFDEAD,stroke:#000,color:#000\n    style Q fill:#FFE4B5,stroke:#000,color:#000\n    style R fill:#90EE90,stroke:#000,color:#000",
  "secs": [
    {
      "h": "Step 1: Clarify",
      "ul": [
        "Manholes = access points for sewer and stormwater systems.",
        "Focus on urban and suburban infrastructure.",
        "Ignore highly sparse rural areas for simplicity (a small rural allowance is added back in the total)."
      ]
    },
    {
      "h": "Step 2: Base numbers",
      "ul": [
        "US population = about 330M",
        "Average household size = about 2.5",
        "Households = about 130M"
      ]
    },
    {
      "h": "Step 3: Segment by area type",
      "table": {
        "title": "Segments",
        "headers": [
          "Segment",
          "% of population",
          "Population"
        ],
        "rows": [
          [
            "Urban",
            "60%",
            "about 198M"
          ],
          [
            "Suburban",
            "30%",
            "about 99M"
          ],
          [
            "Rural",
            "10%",
            "about 33M"
          ]
        ]
      }
    },
    {
      "h": "Step 4: Estimate manholes per segment",
      "ul": [
        "Urban (dense infrastructure): 1 manhole per 75 people. 198M / 75 = about 2.6M manholes.",
        "Suburban (moderate density): 1 manhole per 150 people. 99M / 150 = about 0.66M (about 0.7M) manholes.",
        "Rural (sparse infrastructure, minimal coverage): about 0.1M manholes."
      ]
    },
    {
      "h": "Step 5: Total estimate",
      "table": {
        "title": "Total",
        "headers": [
          "Area",
          "Manholes"
        ],
        "rows": [
          [
            "Urban",
            "about 2.6M"
          ],
          [
            "Suburban",
            "about 0.7M"
          ],
          [
            "Rural",
            "about 0.1M"
          ],
          [
            "Total",
            "about 3.4M"
          ]
        ]
      }
    },
    {
      "h": "Step 6: Sanity check",
      "ul": [
        "Alternate approach: assume 1 manhole per about 80 people nationwide.",
        "330M / 80 = about 4M.",
        "Final range: 3M to 5M manholes."
      ]
    }
  ],
  "summary": "Using population segmentation and density assumptions, I estimate roughly 3 to 5 million manholes in the US, with most concentrated in urban areas.",
  "tips": [
    "Always segment by density (urban, suburban, rural).",
    "Use people-to-infrastructure ratios.",
    "Round numbers for speed.",
    "Provide a range plus a sanity check."
  ],
  "pushTitle": "How to use this in an interview: when challenged",
  "push": [
    [
      "Highways pushback",
      "That's a good point. I'll add about 5% for highway drainage infrastructure."
    ],
    [
      "Commercial areas pushback",
      "Commercial zones are denser, so I'll increase urban contribution by about 10%."
    ],
    [
      "Density challenge",
      "If we assume higher density (1 per 50 people), urban manholes increase significantly, pushing the total closer to about 4 to 5M."
    ]
  ],
  "pushMath": {
    "title": "Pushback math (base total about 3.4M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Effect"
    ],
    "rows": [
      [
        "Highways +5%",
        "3.4M x 5% = about 0.17M",
        "Total about 3.6M"
      ],
      [
        "Commercial +10% urban",
        "2.6M x 10% = about 0.26M",
        "Total about 3.7M"
      ],
      [
        "Density 1 per 50 (urban)",
        "198M / 50 = about 4M urban; plus 0.7M and 0.1M",
        "Total about 4.7M"
      ]
    ]
  }
},
  tennis: {
    "alt": {
      "title": "Alternative version: balls per player model (about 300M)",
      "note": "This version starts from about 25M players and counts balls per player, so it lands higher (about 300M) than the segmented version above (about 247M). Both sit inside a 250M to 350M range, which is a good thing to say out loud: two methods, similar order of magnitude.",
      "table": {
        "title": "Summary table",
        "headers": [
          "Segment",
          "Players",
          "Balls per player per year",
          "Balls"
        ],
        "rows": [
          [
            "Frequent (20%)",
            "5M",
            "30 (about 10 cans)",
            "150M"
          ],
          [
            "Regular (40%)",
            "10M",
            "9 (about 3 cans)",
            "90M"
          ],
          [
            "Occasional (40%)",
            "10M",
            "3 (1 can)",
            "30M"
          ],
          [
            "Player subtotal",
            "25M",
            "-",
            "270M"
          ],
          [
            "Clubs, schools, coaches (+10%)",
            "-",
            "-",
            "27M"
          ],
          [
            "Total",
            "",
            "",
            "about 300M (range 250M to 350M)"
          ]
        ]
      },
      "sample": [
        [
          "Clarify",
          "I'll estimate new tennis balls sold in the US in a year, counting balls rather than cans, across all stores and online. Is that right?"
        ],
        [
          "Approach",
          "I'll go bottom-up from players, because tennis balls go dead after a few sessions, so how much people play drives how many they buy."
        ],
        [
          "Inputs",
          "About 25M Americans play tennis. I'll split them into frequent players at 20%, regular at 40% and occasional at 40%. Frequent players buy about 10 cans a year, which is 30 balls. Regular players buy about 3 cans, 9 balls. Occasional players buy about 1 can, 3 balls."
        ],
        [
          "Math",
          "Frequent: 5M x 30 = 150M. Regular: 10M x 9 = 90M. Occasional: 10M x 3 = 30M. That is 270M balls. I'll add about 10% for clubs, schools and coaches, which is 27M, so about 300M balls a year."
        ],
        [
          "Sanity check",
          "That is about 12 balls, or 4 cans, per player per year, which feels reasonable. At roughly $0.85 a ball it is about $250M a year, a believable size for a niche sporting-goods category."
        ],
        [
          "Range and pushback",
          "I'd say roughly 250 to 350M balls. If you think there are only 20M players, I'll scale everything by 0.8 to about 240M. The answer is most sensitive to how many balls frequent players use."
        ]
      ]
    },
  "title": "Estimate the number of tennis balls sold in the US each year",
  "chart": "flowchart TD\n  A[\"Clarify<br/>New tennis balls sold in the US per year<br/>Count balls, not cans\"] --> B[\"Approach: segment by player type<br/>Casual vs recreational vs serious\"]\n  B --> C[\"US population<br/>330M\"]\n  C --> D[\"Tennis participation 5%<br/>= 16.5M players\"]\n  D --> S1[\"Casual 70%<br/>11.5M players<br/>play a few times a year\"]\n  D --> S2[\"Recreational 25%<br/>4.1M players<br/>play weekly\"]\n  D --> S3[\"Serious 5%<br/>825K players<br/>play 3 to 4 times a week\"]\n  S1 --> U1[\"Buy 1 can per year<br/>11.5M x 1 = 11.5M cans\"]\n  S2 --> U2[\"Buy 12 cans per year<br/>new balls monthly<br/>4.1M x 12 = 49.2M cans\"]\n  S3 --> U3[\"Buy 26 cans per year<br/>new balls every 2 weeks<br/>825K x 26 = 21.5M cans\"]\n  U1 --> T[\"Total cans<br/>11.5M + 49.2M + 21.5M<br/>= 82.2M cans\"]\n  U2 --> T\n  U3 --> T\n  T --> V[\"x 3 balls per can<br/>= about 247M balls\"]\n  V --> W[\"Sense check<br/>about 15 balls per player per year<br/>recreational players = about 60% of volume\"]\n  W --> X[\"Answer<br/>about 240M to 250M balls per year\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef seg fill:#fef3c7,stroke:#d97706,color:#000\n  classDef use fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class S1,S2,S3 seg\n  class U1,U2,U3,T,V use\n  class W,X out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 247M balls\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Participation is 7%, not 5%<br/>scale by 1.4<br/>= about 345M\"]\n  P --> Q2[\"Recreational buy 8 cans, not 12<br/>4.1M x 8 = 32.8M cans<br/>total 65.8M cans x 3 = about 200M\"]\n  P --> Q3[\"Casual players buy no new cans<br/>82.2M - 11.5M = 70.7M cans<br/>x 3 = about 212M\"]\n  Q1 --> R[\"Updated range<br/>about 200M to 345M\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the total is most sensitive to<br/>how many cans recreational players buy\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "pieChart": "pie showData\n  title Share of cans sold by player type (percent)\n  \"Casual (70% of players)\" : 14\n  \"Recreational (25% of players)\" : 60\n  \"Serious (5% of players)\" : 26",
  "framework": [
    "Identify customer segments: casual vs serious players",
    "Estimate segment sizes: how many play tennis?",
    "Usage patterns: how often do they buy?",
    "Calculate per segment, then sum",
    "Sense check: reasonableness check"
  ],
  "insight": "Recreational (weekly) players drive most of the volume, about 60% of cans. Casual players are 70% of players but only about 14% of cans, and serious players are 5% of players but about 26% of cans.",
  "assumptions": [
    "US population: 330 million",
    "Tennis participation: 5% (16.5M people)",
    "Casual (play a few times a year): 70% = 11.5M",
    "Recreational (weekly): 25% = 4.1M",
    "Serious (multiple times a week): 5% = 825K"
  ],
  "calcs": [
    [
      "1. Casual players",
      [
        "Buy 1 can (3 balls) per year",
        "11.5M x 1 can = 11.5M cans"
      ]
    ],
    [
      "2. Recreational players",
      [
        "Play weekly, new balls monthly",
        "Buy 12 cans per year",
        "4.1M x 12 cans = 49.2M cans"
      ]
    ],
    [
      "3. Serious players",
      [
        "Play 3 to 4 times a week, new balls every 2 weeks",
        "Buy 26 cans per year",
        "825K x 26 cans = 21.5M cans"
      ]
    ],
    [
      "4. Total cans",
      [
        "11.5M + 49.2M + 21.5M = 82.2M cans"
      ]
    ],
    [
      "5. Total balls",
      [
        "82.2M cans x 3 balls = about 247 million tennis balls"
      ]
    ]
  ],
  "sense": [
    "That is about 15 balls per tennis player per year.",
    "Recreational players drive most volume (60% of total).",
    "Seems reasonable given ball replacement frequency."
  ],
  "answer": "About 240 to 250 million tennis balls per year.",
  "pushMath": {
    "title": "Pushback math (base about 247M balls)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Participation 7% instead of 5%",
        "247M x 1.4",
        "about 345M"
      ],
      [
        "Recreational buy 8 cans instead of 12",
        "(11.5M + 32.8M + 21.5M) x 3 = 65.8M x 3",
        "about 200M"
      ],
      [
        "Casual players buy none",
        "(82.2M - 11.5M) x 3",
        "about 212M"
      ]
    ]
  }
},
  tires: {
  "title": "Estimate the number of car tires sold in the US each year",
  "chart": "flowchart TD\n  A[\"Clarify<br/>New car and light-truck tires sold in the US per year<br/>Replacement plus original equipment\"] --> B[\"Approach: stock and flow<br/>Tires wear out, so stock / lifespan = yearly sales\"]\n  B --> C[\"Vehicles on the road<br/>335M people x 0.85 = about 280M\"]\n  C --> D[\"Tires in use<br/>280M x 4 = about 1.1B\"]\n  D --> E[\"Lifespan<br/>45,000 miles per set / 12,000 miles per year<br/>= about 3.75 years\"]\n  E --> F[\"Replacement tires per year<br/>1.1B / 3.75 = about 300M\"]\n  B --> G[\"New vehicles<br/>15M per year x 4 tires\"]\n  G --> H[\"Original-equipment tires<br/>= about 60M\"]\n  F --> I[\"Replacement + original equipment<br/>300M + 60M = 360M\"]\n  H --> I\n  I --> J[\"Add about 10% for commercial and other<br/>360M x 1.1 = about 395M\"]\n  J --> K[\"Sanity check<br/>about 1.2 tires per person per year<br/>a set of 4 every 4 years fits\"]\n  K --> L[\"Answer<br/>about 350M to 400M tires per year\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D,E step\n  class F,G,H,I,J calc\n  class K,L out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 395M tires\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 250M vehicles<br/>(250M x 4) / 3.75 = 267M<br/>(267M + 60M) x 1.1 = about 360M\"]\n  P --> Q2[\"Tires last 5 years<br/>1.1B / 5 = 224M<br/>(224M + 60M) x 1.1 = about 312M\"]\n  P --> Q3[\"Skip commercial adder<br/>300M + 60M<br/>= about 360M\"]\n  Q1 --> R[\"Updated range<br/>about 310M to 400M\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>tire lifespan\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Vehicles on the road",
        "335M people x 0.85 per person",
        "about 280M"
      ],
      [
        "Tires in use",
        "280M x 4",
        "about 1.1B"
      ],
      [
        "Lifespan",
        "45,000 miles / 12,000 miles per year",
        "about 3.75 years"
      ],
      [
        "Replacement tires per year",
        "1.1B / 3.75",
        "about 300M"
      ],
      [
        "Original-equipment tires",
        "15M new vehicles x 4",
        "about 60M"
      ],
      [
        "Subtotal",
        "300M + 60M",
        "360M"
      ],
      [
        "Commercial and other (+10%)",
        "360M x 1.1",
        "about 395M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 395M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 250M vehicles",
        "(250M x 4 / 3.75 + 60M) x 1.1",
        "about 360M"
      ],
      [
        "Tires last 5 years",
        "(1.1B / 5 + 60M) x 1.1",
        "about 312M"
      ],
      [
        "Skip commercial adder",
        "300M + 60M",
        "about 360M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate new tires sold for cars and light trucks in the US in a year, replacement plus tires fitted to new vehicles. I'll leave out retreads and heavy trucks. Does that work?"
    ],
    [
      "Approach",
      "Stock and flow. Tires wear out, so tires in use divided by their lifespan gives yearly replacements, and then I add tires on new vehicles."
    ],
    [
      "Inputs",
      "About 335M people and roughly 0.85 vehicles each, so about 280M vehicles with 4 tires each. A set lasts about 45,000 miles, and people drive about 12,000 miles a year, so about 3.75 years. About 15M new vehicles are sold a year."
    ],
    [
      "Math",
      "280M x 4 is about 1.1B tires in use. Divided by 3.75 that is about 300M replacements. New vehicles add 15M x 4, which is 60M. That is 360M, and adding about 10% for commercial and other vehicles gives about 395M."
    ],
    [
      "Sanity check",
      "That is about 1.2 tires per person per year. One set of four every four years per vehicle, plus new cars, fits that."
    ],
    [
      "Range and pushback",
      "I'd say roughly 350 to 400M. If you think there are only 250M vehicles I'd scale down to about 360M, and if tires last 5 years it falls to about 310M. The answer is most sensitive to tire lifespan."
    ]
  ]
},
  smartphones: {
  "title": "Estimate the number of smartphones sold in the US each year",
  "chart": "flowchart TD\n  A[\"Clarify<br/>New smartphones sold in the US per year<br/>Units, all channels, new devices only\"] --> B[\"Approach: stock and flow<br/>Phones in use / replacement cycle = yearly sales\"]\n  B --> C[\"US population<br/>about 335M\"]\n  C --> D[\"Smartphone users<br/>85% x 335M = about 285M\"]\n  D --> E[\"Replacement cycle<br/>about 3 years\"]\n  E --> F[\"Replacement sales<br/>285M / 3 = about 95M per year\"]\n  B --> G[\"New users and second devices<br/>about 10M per year\"]\n  F --> H[\"Total<br/>95M + 10M = about 105M per year\"]\n  G --> H\n  H --> X[\"Cross-check from households<br/>130M households x 2.5 phones / 3 years<br/>= about 108M\"]\n  X --> I[\"Sanity check<br/>about 1 phone sold per 3 people per year<br/>fits a 3-year cycle\"]\n  I --> J[\"Answer<br/>about 100M to 120M per year\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D,E step\n  class F,G,H,X calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 105M phones\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Phones last 4 years, not 3<br/>285M / 4 = 71M<br/>71M + 10M = about 81M\"]\n  P --> Q2[\"Phones last 2.5 years<br/>285M / 2.5 = 114M<br/>114M + 10M = about 124M\"]\n  P --> Q3[\"Only 75% own a smartphone<br/>251M / 3 = 84M<br/>84M + 10M = about 94M\"]\n  Q1 --> R[\"Updated range<br/>about 80M to 125M\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>the replacement cycle\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "lead": "Stock and flow: phones in use divided by the replacement cycle, plus first-time buyers and second devices.",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US population",
        "",
        "about 335M"
      ],
      [
        "Smartphone users",
        "85% x 335M",
        "about 285M"
      ],
      [
        "Replacement cycle",
        "about 3 years",
        "3 years"
      ],
      [
        "Replacement sales",
        "285M / 3",
        "about 95M per year"
      ],
      [
        "New users and second devices",
        "about 10M per year",
        "about 10M"
      ],
      [
        "Total",
        "95M + 10M",
        "about 105M"
      ],
      [
        "Cross-check: households",
        "130M x 2.5 phones / 3 years",
        "about 108M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 105M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Phones last 4 years",
        "285M / 4 + 10M",
        "about 81M"
      ],
      [
        "Phones last 2.5 years",
        "285M / 2.5 + 10M",
        "about 124M"
      ],
      [
        "Only 75% own a smartphone",
        "(335M x 75%) / 3 + 10M = 251M / 3 + 10M",
        "about 94M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate new smartphones sold in the US in a year, counting units across all channels, new devices only. Does that work?"
    ],
    [
      "Approach",
      "Stock and flow. People replace phones every few years, so phones in use divided by the replacement cycle gives yearly sales, and then I add first-time buyers and second devices."
    ],
    [
      "Inputs",
      "US population is about 335M. About 85% have a smartphone, so about 285M users. They replace a phone about every 3 years. About 10M extra phones a year go to new users and second devices."
    ],
    [
      "Math",
      "285M divided by 3 is about 95M replacements. Adding 10M gives about 105M phones a year."
    ],
    [
      "Sanity check",
      "As a cross-check, 130M households with about 2.5 phones each, replaced every 3 years, is about 108M. That is about one phone sold per 3 people per year, which fits a 3-year cycle."
    ],
    [
      "Range and pushback",
      "I'd say roughly 100 to 120M. If phones last 4 years it falls to about 80M, and at 2.5 years it rises to about 125M. The answer is most sensitive to the replacement cycle."
    ]
  ]
},
  pizza: {
  "title": "Estimate the number of pizza orders placed in New York City each day",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Pizza orders placed in NYC per day<br/>Delivery and takeout, count orders not pies\"] --> B[\"Approach: top-down by households<br/>Households x share ordering x frequency\"]\n  B --> C[\"NYC population<br/>about 8.3M\"]\n  C --> D[\"Households<br/>8.3M / 2.6 people = about 3.2M\"]\n  D --> E[\"Households that order pizza<br/>70% x 3.2M = about 2.2M\"]\n  E --> F[\"Orders per household per month<br/>about 2<br/>= about 4.5M orders per month\"]\n  F --> G[\"Per day<br/>4.5M / 30 = about 150K\"]\n  G --> H[\"Add office, student and tourist orders<br/>+30%: 150K x 1.3 = about 200K\"]\n  H --> X[\"Cross-check from supply<br/>about 2,500 pizzerias x 80 orders per day<br/>= about 200K\"]\n  X --> I[\"Sanity check<br/>about 1 order per 40 residents per day\"]\n  I --> J[\"Answer<br/>about 150K to 250K orders per day\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H,X calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 200K orders per day\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 50% of households order<br/>3.2M x 50% x 2 / 30 = 107K<br/>107K x 1.3 = about 140K\"]\n  P --> Q2[\"3 orders per household per month<br/>2.2M x 3 / 30 = 224K<br/>224K x 1.3 = about 290K\"]\n  P --> Q3[\"Skip the office, student and tourist add-on<br/>= about 150K\"]\n  Q1 --> R[\"Updated range<br/>about 140K to 290K\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>orders per household per month\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "lead": "Top-down by households: households x share ordering x orders per month, then add non-household demand.",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "NYC population",
        "",
        "about 8.3M"
      ],
      [
        "Households",
        "8.3M / 2.6 people",
        "about 3.2M"
      ],
      [
        "Households that order pizza",
        "70% x 3.2M",
        "about 2.2M"
      ],
      [
        "Orders per month",
        "2.2M x 2",
        "about 4.5M"
      ],
      [
        "Orders per day",
        "4.5M / 30",
        "about 150K"
      ],
      [
        "Office, student, tourist (+30%)",
        "150K x 1.3",
        "about 200K"
      ],
      [
        "Cross-check: supply",
        "2,500 pizzerias x 80 orders per day",
        "about 200K"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 200K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 50% of households order",
        "3.2M x 50% x 2 / 30 x 1.3",
        "about 140K"
      ],
      [
        "3 orders per household per month",
        "2.2M x 3 / 30 x 1.3",
        "about 290K"
      ],
      [
        "Skip the add-on",
        "2.2M x 2 / 30",
        "about 150K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate pizza orders placed in New York City per day, delivery and takeout, counting orders rather than pizzas. Does that work?"
    ],
    [
      "Approach",
      "Top-down by households. Most people order as part of a household, so I'll go from population to households, then how many order and how often, and then add demand from offices, students and tourists."
    ],
    [
      "Inputs",
      "NYC has about 8.3M people and about 2.6 per household, so about 3.2M households. About 70% order pizza at least some of the time, so about 2.2M. Those households order about twice a month."
    ],
    [
      "Math",
      "2.2M x 2 is about 4.5M orders a month. Divided by 30 that is about 150K a day. I'll add about 30% for offices, students and tourists, which gives about 200K orders a day."
    ],
    [
      "Sanity check",
      "That is about one order per 40 residents per day. From the supply side, about 2,500 pizzerias at about 80 orders a day each is also about 200K."
    ],
    [
      "Range and pushback",
      "I'd say roughly 150K to 250K. If you think only half of households order, it falls to about 140K, and at three orders a month it rises to about 290K. The answer is most sensitive to how often each household orders."
    ]
  ]
},
  gas: {
  "title": "Estimate the number of gas stations in the US",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Number of retail gas stations in the US<br/>Count stations, not pumps\"] --> B[\"Approach: demand vs supply per station<br/>Total daily fill-ups / fill-ups one station can serve\"]\n  B --> C[\"Vehicles on the road<br/>about 280M\"]\n  C --> D[\"Fill-ups per vehicle<br/>1 every 10 days = about 36 per year\"]\n  D --> E[\"Total fill-ups per year<br/>280M x 36 = about 10B\"]\n  E --> F[\"Per day<br/>10B / 365 = about 27M fill-ups\"]\n  B --> G[\"Fill-ups per station per day<br/>8 pumps x 25 fill-ups per pump<br/>= about 200\"]\n  F --> H[\"Number of stations<br/>27M / 200 = about 135K\"]\n  G --> H\n  H --> I[\"Sanity check<br/>about 1 station per 2,500 people<br/>fits a car-based country\"]\n  I --> J[\"Answer<br/>about 130K to 150K stations\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 135K stations\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Fill up every 14 days, not 10<br/>280M x 26 / 365 = 20M per day<br/>20M / 200 = about 100K\"]\n  P --> Q2[\"Busier stations: 30 fill-ups per pump<br/>8 x 30 = 240 per station<br/>27M / 240 = about 112K\"]\n  P --> Q3[\"Only 250M vehicles use gas<br/>250M / 280M x 27M = 24M per day<br/>24M / 200 = about 120K\"]\n  Q1 --> R[\"Updated range<br/>about 100K to 135K\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>fill-ups per station per day\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "lead": "Demand versus supply: total daily fill-ups divided by the fill-ups one station can serve.",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Vehicles",
        "",
        "about 280M"
      ],
      [
        "Fill-ups per vehicle per year",
        "1 every 10 days",
        "about 36"
      ],
      [
        "Total fill-ups per year",
        "280M x 36",
        "about 10B"
      ],
      [
        "Fill-ups per day",
        "10B / 365",
        "about 27M"
      ],
      [
        "Fill-ups per station per day",
        "8 pumps x 25 per pump",
        "about 200"
      ],
      [
        "Number of stations",
        "27M / 200",
        "about 135K"
      ],
      [
        "Sanity: people per station",
        "335M / 135K",
        "about 2,500"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 135K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Fill up every 14 days",
        "280M x 26 / 365 = 20M; 20M / 200",
        "about 100K"
      ],
      [
        "30 fill-ups per pump",
        "27M / (8 x 30)",
        "about 112K"
      ],
      [
        "Only 250M gas vehicles",
        "(250M / 280M x 27M) / 200",
        "about 120K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate the number of retail gas stations in the US, counting stations rather than pumps. Does that work?"
    ],
    [
      "Approach",
      "I'll compare demand and supply. First, how many fill-ups happen per day across the country. Second, how many fill-ups one station can serve. Dividing gives the number of stations."
    ],
    [
      "Inputs",
      "About 280M vehicles. A typical vehicle fills up about once every 10 days, so about 36 times a year. A station has about 8 pumps and each pump serves about 25 fill-ups a day, so about 200 per station."
    ],
    [
      "Math",
      "280M x 36 is about 10B fill-ups a year. Divided by 365 that is about 27M a day. 27M divided by 200 per station is about 135K stations."
    ],
    [
      "Sanity check",
      "That is about one station per 2,500 people, which feels right for a car-based country."
    ],
    [
      "Range and pushback",
      "I'd say roughly 130K to 150K. If people fill up every 14 days it falls to about 100K, and with busier stations at 30 fill-ups per pump it is about 112K. The answer is most sensitive to how many fill-ups each station serves per day."
    ]
  ]
},
  cards: {
  "title": "Estimate the number of credit and debit card transactions in the US each day",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Credit and debit card transactions in the US per day<br/>Count payments, in-store, online and recurring\"] --> B[\"Approach: top-down by cardholders<br/>Cardholders x transactions per cardholder per day\"]\n  B --> C[\"US adults<br/>about 260M\"]\n  C --> D[\"Adults with a debit or credit card<br/>85% x 260M = about 220M\"]\n  D --> E[\"Transactions per cardholder per day<br/>about 1.8<br/>coffee, groceries, online, subscriptions\"]\n  E --> F[\"Daily transactions<br/>220M x 1.8 = about 400M\"]\n  F --> G[\"Cross-check: yearly<br/>400M x 365 = about 145B per year\"]\n  G --> I[\"Sanity check<br/>about 1.5 card payments per adult per day<br/>including online and recurring payments\"]\n  I --> J[\"Answer<br/>about 400M per day, roughly 150B per year\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 400M transactions per day\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 1.5 transactions per cardholder per day<br/>220M x 1.5<br/>= about 330M\"]\n  P --> Q2[\"2.2 transactions per cardholder per day<br/>220M x 2.2<br/>= about 485M\"]\n  P --> Q3[\"Only 75% of adults have a card<br/>260M x 75% = 195M<br/>195M x 1.8 = about 350M\"]\n  Q1 --> R[\"Updated range<br/>about 330M to 485M\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>transactions per cardholder per day\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "lead": "Top-down: cardholders times transactions per cardholder per day.",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US adults",
        "",
        "about 260M"
      ],
      [
        "Adults with a debit or credit card",
        "85% x 260M",
        "about 220M"
      ],
      [
        "Transactions per cardholder per day",
        "coffee, groceries, online, subscriptions",
        "about 1.8"
      ],
      [
        "Transactions per day",
        "220M x 1.8",
        "about 400M"
      ],
      [
        "Transactions per year",
        "400M x 365",
        "about 145B"
      ],
      [
        "Sanity: per adult per day",
        "400M / 260M",
        "about 1.5"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 400M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "1.5 transactions per cardholder per day",
        "220M x 1.5",
        "about 330M"
      ],
      [
        "2.2 transactions per cardholder per day",
        "220M x 2.2",
        "about 485M"
      ],
      [
        "Only 75% of adults have a card",
        "260M x 75% x 1.8 = 195M x 1.8",
        "about 350M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate credit and debit card transactions in the US per day, counting individual payments in store, online and recurring. Does that work?"
    ],
    [
      "Approach",
      "Top-down from cardholders. I'll start with adults, take the share with a card, and multiply by how many card payments each makes in a day."
    ],
    [
      "Inputs",
      "About 260M US adults. About 85% have a debit or credit card, so about 220M cardholders. Each makes about 1.8 card payments a day across coffee, groceries, online purchases and subscriptions."
    ],
    [
      "Math",
      "220M x 1.8 is about 400M transactions a day. Multiplying by 365 gives about 145B a year."
    ],
    [
      "Sanity check",
      "That is about 1.5 card payments per adult per day, including online and recurring payments, which feels right."
    ],
    [
      "Range and pushback",
      "I'd say roughly 330M to 485M, with 400M as my point estimate. If cardholders average 1.5 a day it is about 330M, and at 2.2 it is about 485M. The answer is most sensitive to transactions per cardholder per day."
    ]
  ]
},
  piano: {
  "title": "Estimate the number of piano tuners in Chicago",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Full-time-equivalent piano tuners in the city of Chicago<br/>Households' pianos, ignore institutions for now\"] --> B[\"Approach: demand vs supply<br/>Tunings needed per year / tunings one tuner can do\"]\n  B --> C[\"Chicago population<br/>about 2.7M\"]\n  C --> D[\"Households<br/>2.7M / 2.7 people = about 1M\"]\n  D --> E[\"Households with a piano<br/>1 in 20 = about 50K pianos\"]\n  E --> F[\"Demand: tunings per year<br/>50K pianos x 1 tuning = 50K\"]\n  B --> G[\"Supply per tuner<br/>4 tunings per day x 220 days<br/>= about 880 per year\"]\n  F --> H[\"Tuners needed<br/>50K / 880 = about 57\"]\n  G --> H\n  H --> I[\"Sanity check<br/>many tuners are part-time, so headcount is higher<br/>but full-time equivalents stay near 50 to 60\"]\n  I --> J[\"Answer<br/>about 50 to 60 piano tuners\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 57 tuners\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 1 in 30 households has a piano<br/>1M / 30 = 33K tunings<br/>33K / 880 = about 38\"]\n  P --> Q2[\"3 tunings per day, not 4<br/>3 x 220 = 660 per year<br/>50K / 660 = about 76\"]\n  P --> Q3[\"Pianos tuned every 2 years<br/>50K x 0.5 = 25K tunings<br/>25K / 880 = about 28\"]\n  Q1 --> R[\"Updated range<br/>about 30 to 75 tuners\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>how many pianos there are and how often they are tuned\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "lead": "Demand versus supply: tunings needed per year divided by the tunings one tuner can do.",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Chicago households",
        "2.7M / 2.7 people",
        "about 1M"
      ],
      [
        "Households with a piano",
        "1 in 20",
        "about 50K"
      ],
      [
        "Tunings per piano per year",
        "1",
        "about 50K tunings"
      ],
      [
        "Tunings per tuner per day",
        "about 4, including travel",
        "4"
      ],
      [
        "Working days per year",
        "about 220",
        "220"
      ],
      [
        "Tunings per tuner per year",
        "4 x 220",
        "about 880"
      ],
      [
        "Tuners needed",
        "50K / 880",
        "about 57"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 57)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "1 in 30 households has a piano",
        "(1M / 30) / 880",
        "about 38"
      ],
      [
        "3 tunings per day",
        "50K / (3 x 220)",
        "about 76"
      ],
      [
        "Tuned every 2 years",
        "(50K x 0.5) / 880",
        "about 28"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate full-time-equivalent piano tuners in the city of Chicago, based on household pianos. I'll leave out schools, churches and venues at first. Does that work?"
    ],
    [
      "Approach",
      "Demand versus supply. First, how many tunings Chicago needs in a year. Second, how many tunings one tuner can do in a year. Dividing gives the number of tuners."
    ],
    [
      "Inputs",
      "Chicago has about 2.7M people and about 2.7 per household, so about 1M households. About 1 in 20 has a piano, so about 50K pianos, tuned about once a year. A tuner does about 4 tunings a day including travel and works about 220 days."
    ],
    [
      "Math",
      "Demand is 50K tunings a year. Supply per tuner is 4 x 220, about 880 a year. 50K divided by 880 is about 57 tuners."
    ],
    [
      "Sanity check",
      "Many tuners work part-time, so the actual headcount is probably higher, but in full-time equivalents about 50 to 60 feels right for a city this size."
    ],
    [
      "Range and pushback",
      "I'd say roughly 50 to 60. If only 1 in 30 households has a piano it is about 38, and at 3 tunings a day it is about 76. The answer is most sensitive to how many pianos there are and how often they are tuned."
    ]
  ]
},
  rides: {
  "title": "Estimate the number of ride-hail trips in the Chicago area each day",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Ride-hail trips per day in the Chicago area<br/>Metro area, trips not riders\"] --> B[\"Approach: top-down from population<br/>Cross-check from the driver side\"]\n  B --> C[\"Chicago metro population<br/>about 9.5M\"]\n  C --> D[\"Adults<br/>78% x 9.5M = about 7.4M\"]\n  D --> E[\"Adults who ride on a given day<br/>3% x 7.4M = about 220K riders\"]\n  E --> F[\"Trips per rider per day<br/>about 1.3<br/>220K x 1.3 = about 290K trips\"]\n  B --> G[\"Cross-check: drivers<br/>15K active drivers x 15 trips per day<br/>= about 225K trips\"]\n  F --> H[\"Compare the two methods<br/>290K vs 225K, within 30% of each other\"]\n  G --> H\n  H --> I[\"Sanity check<br/>about 1 trip per 40 residents per day\"]\n  I --> J[\"Answer<br/>about 200K to 300K trips per day\"]\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 250K trips per day\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 2.5% of adults ride per day<br/>7.4M x 2.5% = 185K riders<br/>185K x 1.3 = about 240K\"]\n  P --> Q2[\"3.5% of adults ride per day<br/>7.4M x 3.5% = 259K riders<br/>259K x 1.3 = about 335K\"]\n  P --> Q3[\"Only 12K active drivers<br/>12K x 15 trips<br/>= about 180K\"]\n  Q1 --> R[\"Updated range<br/>about 180K to 335K\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>the share of adults who ride on a given day\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "lead": "Top-down from population, cross-checked from the driver side.",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Metro population",
        "",
        "about 9.5M"
      ],
      [
        "Adults",
        "78% x 9.5M",
        "about 7.4M"
      ],
      [
        "Riders on a given day",
        "3% x 7.4M",
        "about 220K"
      ],
      [
        "Trips per rider per day",
        "about 1.3",
        "1.3"
      ],
      [
        "Trips per day (rider method)",
        "220K x 1.3",
        "about 290K"
      ],
      [
        "Cross-check: drivers",
        "15K active drivers x 15 trips per day",
        "about 225K"
      ],
      [
        "Point estimate",
        "midpoint of the two methods",
        "about 250K"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 250K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "2.5% of adults ride per day",
        "7.4M x 2.5% x 1.3",
        "about 240K"
      ],
      [
        "3.5% of adults ride per day",
        "7.4M x 3.5% x 1.3",
        "about 335K"
      ],
      [
        "Only 12K active drivers",
        "12K x 15",
        "about 180K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate ride-hail trips per day across the Chicago metro area, counting trips rather than riders. Does that work?"
    ],
    [
      "Approach",
      "Top-down from population, then a cross-check from the driver side."
    ],
    [
      "Inputs",
      "The metro area has about 9.5M people. About 78% are adults, so about 7.4M. On a given day about 3% of adults take a ride-hail trip, so about 220K riders, and each takes about 1.3 trips."
    ],
    [
      "Math",
      "220K x 1.3 is about 290K trips a day. As a cross-check, about 15K active drivers at about 15 trips a day is about 225K."
    ],
    [
      "Sanity check",
      "The two methods land within 30% of each other, and the result is about one trip per 40 residents per day, which feels reasonable."
    ],
    [
      "Range and pushback",
      "I'd say roughly 200K to 300K, with about 250K as a midpoint. If only 2.5% of adults ride on a given day it is about 240K, and at 3.5% it is about 335K. The answer is most sensitive to the share of adults who ride on a given day."
    ]
  ]
},
  "bikes": {
  "title": "Estimate the number of bicycles sold in the US each year",
  "lead": "Stock and flow: bikes in use divided by average life gives replacements, then add growth in the stock.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>New bicycles sold in the US per year<br/>Kids and adult bikes, count units\"]\n  B[\"Approach: stock and flow<br/>Bikes wear out or are outgrown, so stock / life = yearly sales\"]\n  C[\"US population<br/>about 335M\"]\n  D[\"Bikes in use<br/>335M x 0.4 per person = about 135M\"]\n  E[\"Average life<br/>kids outgrow them, adults keep them<br/>about 8 years\"]\n  F[\"Replacement sales per year<br/>135M / 8 = about 17M\"]\n  G[\"Growth in the stock<br/>about 5% more bikes each year\"]\n  H[\"Add growth<br/>17M x 1.05 = about 18M\"]\n  I[\"Sanity check<br/>Households: 130M x 12% buy x 1.1 bikes<br/>= about 17M, both routes agree\"]\n  J[\"Answer<br/>about 15M to 20M bikes per year\"]\n  A --> B\n  B --> C\n  C --> D\n  B --> E\n  D --> F\n  E --> F\n  B --> G\n  F --> H\n  G --> H\n  H --> I\n  I --> J\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D,E step\n  class F,G,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 18M bikes\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Pandemic boom year<br/>sales up 40%<br/>18M x 1.4 = about 25M\"]\n  P --> Q2[\"Bikes last 10 years<br/>135M / 10 = 13.5M<br/>13.5M x 1.05 = about 14M\"]\n  P --> Q3[\"Only 0.3 bikes per person<br/>335M x 0.3 = 100M<br/>100M / 8 x 1.05 = about 13M\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 13M to 25M\"]\n  R --> S[\"Say: the answer is most sensitive to<br/>average bike life\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US population",
        "",
        "about 335M"
      ],
      [
        "Bikes in use",
        "335M x 0.4 bikes per person",
        "about 135M"
      ],
      [
        "Average life",
        "kids outgrow them, adults keep them",
        "about 8 years"
      ],
      [
        "Replacement sales per year",
        "135M / 8",
        "about 17M"
      ],
      [
        "Growth in the stock (+5%)",
        "17M x 1.05",
        "about 18M"
      ],
      [
        "Cross-check: households",
        "130M x 12% x 1.1 bikes",
        "about 17M"
      ],
      [
        "Total",
        "",
        "about 18M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 18M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Pandemic boom year (+40%)",
        "18M x 1.4",
        "about 25M"
      ],
      [
        "Bikes last 10 years",
        "135M / 10 x 1.05",
        "about 14M"
      ],
      [
        "Only 0.3 bikes per person",
        "335M x 0.3 / 8 x 1.05",
        "about 13M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate new bicycles sold in the US in a year, kids and adult bikes, counted in units. Does that work?"
    ],
    [
      "Approach",
      "Stock and flow. Bikes wear out or get outgrown, so bikes in use divided by their average life gives yearly replacements, and then I add growth in the stock."
    ],
    [
      "Inputs",
      "About 335M people with roughly 0.4 bikes each, so about 135M bikes in use. Kids outgrow bikes and adults keep them longer, so I'll use an average life of about 8 years."
    ],
    [
      "Math",
      "135M divided by 8 is about 17M replacements. The stock grows about 5%, so 17M x 1.05 is about 18M bikes a year."
    ],
    [
      "Sanity check",
      "From households: 130M households, about 12% buy a bike in a year, about 1.1 bikes each, which is about 17M. Both routes agree."
    ],
    [
      "Range and pushback",
      "I'd say roughly 15 to 20M. If there is a pandemic boom, sales jump to about 25M for a year or two, then fall below normal because the stock is new. If bikes last 10 years it falls to about 14M. The answer is most sensitive to average bike life."
    ]
  ]
},
  "taxis": {
  "title": "Estimate the number of taxi and ride-hail trips per day in New York City",
  "lead": "Supply side: active vehicles times trips per vehicle per day, checked against a demand-side estimate.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Taxi and ride-hail trips in NYC per day<br/>Yellow, green and app cars, one booking = one trip\"]\n  B[\"Approach: supply side<br/>Active vehicles x trips per vehicle, then check demand\"]\n  C[\"Licensed for-hire vehicles<br/>about 100K\"]\n  D[\"Active on a typical day<br/>60% x 100K = about 60K\"]\n  E[\"Trips per hour on the road<br/>about 1.5\"]\n  F[\"Hours on the road per day<br/>about 10\"]\n  G[\"Trips per vehicle per day<br/>1.5 x 10 = about 15\"]\n  H[\"Total trips per day<br/>60K x 15 = about 900K\"]\n  I[\"Sanity check<br/>Demand: 8.3M x 10% = 830K<br/>plus 20% for visitors = about 1.0M\"]\n  J[\"Answer<br/>about 800K to 1.2M trips per day\"]\n  A --> B\n  B --> C\n  C --> D\n  B --> E\n  B --> F\n  E --> G\n  F --> G\n  D --> H\n  G --> H\n  H --> I\n  I --> J\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 900K trips\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 50% of vehicles active<br/>100K x 50% x 15 = about 750K\"]\n  P --> Q2[\"Only 1.2 trips per hour<br/>60K x 1.2 x 10 = about 720K\"]\n  P --> Q3[\"12 hours on the road<br/>60K x 1.5 x 12 = about 1.08M\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 720K to 1.08M\"]\n  R --> S[\"Say: the answer is most sensitive to<br/>trips per hour on the road\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Licensed for-hire vehicles",
        "yellow, green and app cars",
        "about 100K"
      ],
      [
        "Active on a typical day",
        "60% x 100K",
        "about 60K"
      ],
      [
        "Trips per hour on the road",
        "",
        "about 1.5"
      ],
      [
        "Hours on the road per vehicle per day",
        "",
        "about 10"
      ],
      [
        "Trips per vehicle per day",
        "1.5 x 10",
        "about 15"
      ],
      [
        "Total trips per day",
        "60K x 15",
        "about 900K"
      ],
      [
        "Cross-check: demand",
        "8.3M x 10% x 1.2",
        "about 1.0M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 900K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 50% of vehicles active",
        "100K x 50% x 15",
        "about 750K"
      ],
      [
        "Only 1.2 trips per hour",
        "60K x 1.2 x 10",
        "about 720K"
      ],
      [
        "12 hours on the road",
        "60K x 1.5 x 12",
        "about 1.08M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate taxi and ride-hail trips in New York City per day, yellow, green and app cars, counting each booking as one trip. Does that work?"
    ],
    [
      "Approach",
      "Supply side. Active vehicles times trips per vehicle per day, and then I'll check it against a demand-side estimate."
    ],
    [
      "Inputs",
      "About 100K licensed for-hire vehicles, with about 60% active on a typical day, so about 60K. Each is on the road about 10 hours and does about 1.5 trips an hour."
    ],
    [
      "Math",
      "1.5 x 10 is about 15 trips per vehicle per day. 60K x 15 is about 900K trips a day."
    ],
    [
      "Sanity check",
      "From demand: 8.3M residents, about 10% take a cab or app car on a given day, which is about 830K. Add about 20% for visitors and commuters and I get about 1.0M."
    ],
    [
      "Range and pushback",
      "I'd say roughly 800K to 1.2M. If only half the vehicles are active it is about 750K, and at 1.2 trips an hour it is about 720K. A shared ride counts as one booking and changes the total by only a few percent. The answer is most sensitive to trips per hour on the road."
    ]
  ]
},
  "gyms": {
  "title": "Estimate the number of people in the US who have a gym membership",
  "lead": "Top-down: adults times the share who exercise times the share who pay for a gym, plus members who rarely go.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>People in the US with a paid gym membership<br/>Gyms and studios, count members not visits\"]\n  B[\"Approach: top-down<br/>Adults x share who exercise x share who pay\"]\n  C[\"US population<br/>about 335M\"]\n  D[\"Adults<br/>78% x 335M = about 260M\"]\n  E[\"Adults who exercise regularly<br/>50% x 260M = about 130M\"]\n  F[\"Paying for a gym<br/>55% x 130M = about 72M\"]\n  G[\"Sign-ups who rarely go<br/>about 10% extra\"]\n  H[\"Add rarely-go members<br/>72M x 1.1 = about 79M\"]\n  I[\"Sanity check<br/>Supply: 55,000 gyms x 1,400 members<br/>= about 77M\"]\n  J[\"Answer<br/>about 65M to 85M members\"]\n  A --> B\n  B --> C\n  C --> D\n  D --> E\n  E --> F\n  B --> G\n  F --> H\n  G --> H\n  H --> I\n  I --> J\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 79M members\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 40% of adults exercise<br/>260M x 40% x 55% x 1.1 = about 63M\"]\n  P --> Q2[\"65% of exercisers pay<br/>130M x 65% x 1.1 = about 93M\"]\n  P --> Q3[\"Skip the rarely-go add-on<br/>130M x 55% = about 72M\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 63M to 93M\"]\n  R --> S[\"Say: the answer is most sensitive to<br/>share of exercisers who pay\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US population",
        "",
        "about 335M"
      ],
      [
        "Adults",
        "78% x 335M",
        "about 260M"
      ],
      [
        "Adults who exercise regularly",
        "50% x 260M",
        "about 130M"
      ],
      [
        "Paying for a gym",
        "55% x 130M",
        "about 72M"
      ],
      [
        "Sign-ups who rarely go (+10%)",
        "72M x 1.1",
        "about 79M"
      ],
      [
        "Cross-check: supply",
        "55,000 gyms x 1,400 members",
        "about 77M"
      ],
      [
        "Total",
        "",
        "about 79M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 79M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 40% of adults exercise",
        "260M x 40% x 55% x 1.1",
        "about 63M"
      ],
      [
        "65% of exercisers pay",
        "130M x 65% x 1.1",
        "about 93M"
      ],
      [
        "Skip the rarely-go add-on",
        "130M x 55%",
        "about 72M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate how many people in the US hold a paid gym membership, at gyms and studios, counting members rather than visits. Does that work?"
    ],
    [
      "Approach",
      "Top-down. Adults times the share who exercise times the share who pay for a gym, and then I add sign-ups who rarely go."
    ],
    [
      "Inputs",
      "About 335M people, and about 78% are adults, so about 260M. About half exercise regularly, so about 130M, and about 55% of them pay for a gym."
    ],
    [
      "Math",
      "130M x 55% is about 72M. Adding about 10% for people who sign up but rarely go gives 72M x 1.1, about 79M."
    ],
    [
      "Sanity check",
      "From supply: about 55,000 gyms and studios with about 1,400 members each is about 77M, which agrees."
    ],
    [
      "Range and pushback",
      "I'd say roughly 65 to 85M. If only 40% of adults exercise it falls to about 63M, and if 65% of exercisers pay it rises to about 93M. Some people hold two memberships, so unique people may be about 5% lower, still inside the range. The answer is most sensitive to the share of exercisers who pay."
    ]
  ]
},
  "bank-branches": {
  "title": "Estimate the number of ATM withdrawals per day in a city of 1 million people",
  "lead": "Top-down: adults times the share who use ATMs times withdrawals per user, converted to a daily rate.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>ATM cash withdrawals per day in a city of 1M<br/>Count withdrawals, not balance checks\"]\n  B[\"Approach: top-down<br/>Adults x ATM users x withdrawals per user\"]\n  C[\"Population<br/>about 1M\"]\n  D[\"Adults<br/>80% x 1M = about 800K\"]\n  E[\"ATM or debit card users<br/>75% x 800K = about 600K\"]\n  F[\"Withdrawals per user per year<br/>1.5 per month x 12 = about 18\"]\n  G[\"Withdrawals per year<br/>600K x 18 = about 10.8M\"]\n  H[\"Per day<br/>10.8M / 365 = about 30K\"]\n  K[\"Add visitors and commuters<br/>30K x 1.1 = about 33K\"]\n  I[\"Sanity check<br/>Supply: 1,200 ATMs x 25 per day<br/>= about 30K\"]\n  J[\"Answer<br/>about 25K to 40K withdrawals per day\"]\n  A --> B\n  B --> C\n  C --> D\n  D --> E\n  B --> F\n  E --> G\n  F --> G\n  G --> H\n  H --> K\n  K --> I\n  I --> J\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D step\n  class E,F,G,H,K calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 33K withdrawals\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 1 withdrawal per month<br/>600K x 12 / 365 x 1.1 = about 22K\"]\n  P --> Q2[\"Only 60% use ATMs<br/>800K x 60% x 18 / 365 x 1.1 = about 26K\"]\n  P --> Q3[\"Skip the visitor add-on<br/>10.8M / 365 = about 30K\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 22K to 33K\"]\n  R --> S[\"Say: the answer is most sensitive to<br/>withdrawals per user per month\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Population",
        "",
        "about 1M"
      ],
      [
        "Adults",
        "80% x 1M",
        "about 800K"
      ],
      [
        "ATM or debit card users",
        "75% x 800K",
        "about 600K"
      ],
      [
        "Withdrawals per user per year",
        "1.5 per month x 12",
        "about 18"
      ],
      [
        "Withdrawals per year",
        "600K x 18",
        "about 10.8M"
      ],
      [
        "Per day",
        "10.8M / 365",
        "about 30K"
      ],
      [
        "Visitors and commuters (+10%)",
        "30K x 1.1",
        "about 33K"
      ],
      [
        "Cross-check: supply",
        "1,200 ATMs x 25 per day",
        "about 30K"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 33K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 1 withdrawal per month",
        "600K x 12 / 365 x 1.1",
        "about 22K"
      ],
      [
        "Only 60% use ATMs",
        "800K x 60% x 18 / 365 x 1.1",
        "about 26K"
      ],
      [
        "Skip the visitor add-on",
        "10.8M / 365",
        "about 30K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate ATM cash withdrawals per day in a city of 1 million people, counting withdrawals and not balance checks. Does that work?"
    ],
    [
      "Approach",
      "Top-down. Adults times the share who use ATMs times withdrawals per user, then I convert to a daily rate and add visitors."
    ],
    [
      "Inputs",
      "1M people, 80% adults, so 800K. About 75% use ATMs or a debit card, so 600K. They withdraw about 1.5 times a month, which is about 18 a year."
    ],
    [
      "Math",
      "600K x 18 is about 10.8M a year. Divided by 365 that is about 30K a day. Adding about 10% for visitors and commuters gives about 33K."
    ],
    [
      "Sanity check",
      "From supply: about 1.2 ATMs per 1,000 people gives about 1,200 ATMs, at about 25 withdrawals a day each, which is about 30K."
    ],
    [
      "Range and pushback",
      "I'd say roughly 25 to 40K. If people withdraw only once a month it falls to about 22K, and if only 60% use ATMs it is about 26K. Cash use is falling a few percent a year, so this is likely 20 to 30% lower than a decade ago. The answer is most sensitive to withdrawals per user per month."
    ]
  ]
},
  "streaming": {
  "title": "Estimate the number of hours of streaming video people in the US watch per day",
  "lead": "Top-down: people times the share who stream times hours per streamer, with phone viewing added separately.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Total hours of streaming video in the US per day<br/>All services including YouTube, all screens\"]\n  B[\"Approach: top-down<br/>People x share who stream x hours per streamer\"]\n  C[\"US population<br/>about 335M\"]\n  D[\"Streamers on a given day<br/>75% x 335M = about 250M\"]\n  E[\"TV and laptop hours per streamer<br/>about 1.8\"]\n  F[\"TV and laptop hours<br/>250M x 1.8 = about 450M\"]\n  G[\"Phone hours per streamer<br/>about 0.3\"]\n  H[\"Extra phone hours<br/>250M x 0.3 = about 75M\"]\n  K[\"Total hours per day<br/>450M + 75M = about 525M\"]\n  I[\"Sanity check<br/>Households: 130M x 4 hours<br/>= about 520M\"]\n  J[\"Answer<br/>about 400M to 650M hours per day\"]\n  A --> B\n  B --> C\n  C --> D\n  D --> F\n  B --> E\n  E --> F\n  B --> G\n  D --> H\n  G --> H\n  F --> K\n  H --> K\n  K --> I\n  I --> J\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D,E step\n  class F,G,H,K calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 525M hours\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 60% stream<br/>335M x 60% x 2.1 = about 422M\"]\n  P --> Q2[\"2.5 hours on TV and laptop<br/>250M x 2.5 + 75M = about 700M\"]\n  P --> Q3[\"Paid services only<br/>525M / 2 = about 260M\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 260M to 700M\"]\n  R --> S[\"Say: the answer is most sensitive to<br/>hours per streamer\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US population",
        "",
        "about 335M"
      ],
      [
        "People who stream on a given day",
        "75% x 335M",
        "about 250M"
      ],
      [
        "TV and laptop hours per streamer",
        "",
        "about 1.8"
      ],
      [
        "TV and laptop hours",
        "250M x 1.8",
        "about 450M"
      ],
      [
        "Extra hours on phones",
        "250M x 0.3",
        "about 75M"
      ],
      [
        "Total hours per day",
        "450M + 75M",
        "about 525M"
      ],
      [
        "Cross-check: households",
        "130M x 4 hours",
        "about 520M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 525M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 60% stream",
        "335M x 60% x (1.8 + 0.3)",
        "about 422M"
      ],
      [
        "2.5 hours on TV and laptop",
        "250M x 2.5 + 75M",
        "about 700M"
      ],
      [
        "Paid services only",
        "525M / 2",
        "about 260M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate total hours of streaming video watched in the US per day, across all services including YouTube and on all screens. Does that work?"
    ],
    [
      "Approach",
      "Top-down. People times the share who stream on a given day times hours per streamer, with phone viewing added separately."
    ],
    [
      "Inputs",
      "About 335M people and about 75% stream on a given day, so about 250M. They watch about 1.8 hours on TV and laptop, plus about 0.3 hours on phones."
    ],
    [
      "Math",
      "250M x 1.8 is about 450M hours. Phones add 250M x 0.3, about 75M. The total is about 525M hours a day."
    ],
    [
      "Sanity check",
      "From households: about 130M households at about 4 hours of streaming each on all screens is about 520M, which agrees."
    ],
    [
      "Range and pushback",
      "I'd say roughly 400 to 650M. If only 60% stream it is about 422M, and at 2.5 hours on TV and laptop it is about 700M. I included YouTube, and if you mean only paid services I'd cut it roughly in half. The answer is most sensitive to hours per streamer."
    ]
  ]
},
  "cards-issued": {
  "title": "Estimate the number of new credit card applications made per day in the US",
  "lead": "Stock and flow: cards in use divided by card life gives new accounts, then divide by the approval rate to get applications.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>New credit card applications per day in the US<br/>Approved and declined, all issuers\"]\n  B[\"Approach: stock and flow<br/>Cards in use / card life = new accounts<br/>New accounts / approval rate = applications\"]\n  C[\"Adults with a card<br/>260M adults x 80% = about 210M\"]\n  D[\"Cards in use<br/>210M x 4 cards each = about 840M\"]\n  E[\"Card life<br/>about 7 years before a card is replaced or closed\"]\n  F[\"New accounts per year<br/>840M / 7 = about 120M\"]\n  G[\"Approval rate<br/>about 50% of applications\"]\n  H[\"Applications per year<br/>120M / 0.5 = about 240M\"]\n  I[\"Applications per day<br/>240M / 365 = about 650K\"]\n  J[\"Sanity check<br/>260M x 35% apply x 2.5 applications each = 230M per year<br/>230M / 365 = about 620K per day\"]\n  K[\"Answer<br/>about 500K to 800K applications per day\"]\n  B --> C\n  C --> D\n  B --> E\n  D --> F\n  E --> F\n  B --> G\n  F --> H\n  G --> H\n  H --> I\n  I --> J\n  J --> K\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D,E,G step\n  class F,H,I calc\n  class J,K out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 650K applications per day\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Approval rate is 40%<br/>120M / 0.4 = 300M per year<br/>300M / 365 = about 820K\"]\n  P --> Q2[\"Cards last 5 years<br/>840M / 5 = 168M new<br/>168M / 0.5 / 365 = about 920K\"]\n  P --> Q3[\"Approval rate is 60%<br/>120M / 0.6 = 200M<br/>200M / 365 = about 550K\"]\n  Q1 --> R[\"Updated range<br/>about 550K to 920K per day\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>the approval rate and card life\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US adults",
        "",
        "about 260M"
      ],
      [
        "Adults with a credit card",
        "260M x 80%",
        "about 210M"
      ],
      [
        "Cards in use",
        "210M x 4 cards each",
        "about 840M"
      ],
      [
        "New accounts per year",
        "840M / 7 year life",
        "about 120M"
      ],
      [
        "Applications per year",
        "120M / 50% approval rate",
        "about 240M"
      ],
      [
        "Applications per day",
        "240M / 365",
        "about 650K"
      ],
      [
        "Cross-check: adults route",
        "260M x 35% x 2.5 / 365",
        "about 620K"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 650K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Approval rate is 40%",
        "120M / 0.4 / 365",
        "about 820K"
      ],
      [
        "Cards last 5 years",
        "840M / 5 / 0.5 / 365",
        "about 920K"
      ],
      [
        "Approval rate is 60%",
        "120M / 0.6 / 365",
        "about 550K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate new credit card applications per day in the US, approved or declined, across all issuers. Does that work?"
    ],
    [
      "Approach",
      "Stock and flow. Cards in use divided by how long a card lasts gives new accounts per year, and dividing by the approval rate turns accounts into applications."
    ],
    [
      "Inputs",
      "About 260M US adults, with about 80% holding a card, so about 210M. Each holds about 4 cards, so about 840M cards. A card lasts about 7 years, and about half of applications are approved."
    ],
    [
      "Math",
      "840M / 7 is about 120M new accounts a year. Divided by 0.5 that is about 240M applications. Divided by 365 that is about 650K a day."
    ],
    [
      "Sanity check",
      "Another route: 260M adults, about 35% apply in a year, about 2.5 applications each, is about 230M a year, or about 620K a day. It matches."
    ],
    [
      "Range and pushback",
      "I'd say roughly 500K to 800K. If approval is 40% it rises to about 820K, and if cards last only 5 years it rises to about 920K. The answer is most sensitive to the approval rate, so I would ask the bank for its real number."
    ]
  ]
},
  "coffeeshops": {
  "title": "Estimate the number of coffee shops in a mid-size city of 500,000 people",
  "lead": "Demand versus supply: cups sold in dedicated coffee shops divided by the cups one shop sells per day.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Dedicated coffee shops in a city of 500K<br/>Chains and independents, not fast food or offices\"]\n  B[\"Approach: demand vs supply<br/>Cups sold in coffee shops / cups per shop = shops\"]\n  C[\"Population<br/>about 500K\"]\n  D[\"Cups bought outside the home<br/>500K x 0.25 per day = about 125K\"]\n  E[\"Dedicated coffee shop share<br/>125K x 40% = about 50K<br/>rest: fast food, offices, stores\"]\n  F[\"Visitors and commuters<br/>50K x 1.1 = about 55K cups per day\"]\n  G[\"Supply per shop<br/>about 350 cups per day<br/>mix of small cafes and chains\"]\n  H[\"Number of shops<br/>55K / 350 = about 160\"]\n  I[\"Sanity check<br/>US has about 60,000 shops, 1 per 5,500 people<br/>gives about 90 here, a city is denser so 150 fits\"]\n  J[\"Answer<br/>about 100 to 250 coffee shops\"]\n  B --> C\n  C --> D\n  D --> E\n  E --> F\n  B --> G\n  F --> H\n  G --> H\n  H --> I\n  I --> J\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,G step\n  class D,E,F,H calc\n  class I,J out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 160 coffee shops\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"0.35 cups per resident<br/>500K x 0.35 x 0.4 x 1.1 = 77K<br/>77K / 350 = about 220\"]\n  P --> Q2[\"Shops sell 500 cups per day<br/>55K / 500<br/>= about 110\"]\n  P --> Q3[\"Only 30% sold by coffee shops<br/>125K x 0.3 x 1.1 = 41K<br/>41K / 350 = about 118\"]\n  Q1 --> R[\"Updated range<br/>about 110 to 220 shops\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>cups bought per resident per day\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Population",
        "",
        "about 500K"
      ],
      [
        "Cups bought outside the home per day",
        "500K x 0.25",
        "about 125K"
      ],
      [
        "Sold by dedicated coffee shops",
        "125K x 40%",
        "about 50K"
      ],
      [
        "Add visitors and commuters (+10%)",
        "50K x 1.1",
        "about 55K"
      ],
      [
        "Cups per shop per day",
        "mix of small cafes and chains",
        "about 350"
      ],
      [
        "Number of shops",
        "55K / 350",
        "about 160"
      ],
      [
        "Cross-check: US ratio",
        "500K / 5,500 people per shop",
        "about 90"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 160)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "0.35 cups per resident",
        "500K x 0.35 x 0.4 x 1.1 / 350",
        "about 220"
      ],
      [
        "Shops sell 500 cups per day",
        "55K / 500",
        "about 110"
      ],
      [
        "Only 30% sold by coffee shops",
        "500K x 0.25 x 0.3 x 1.1 / 350",
        "about 118"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate dedicated coffee shops, chains and independents, in a city of 500,000. I'll leave out fast food, offices and grocery stores. Does that work?"
    ],
    [
      "Approach",
      "Demand versus supply. I'll estimate cups sold by coffee shops each day, then divide by how many cups one shop sells."
    ],
    [
      "Inputs",
      "500K residents buying about 0.25 cups a day outside the home, so about 125K cups. About 40% come from dedicated coffee shops. Visitors and commuters add about 10%. A typical shop sells about 350 cups a day, mixing small cafes and chains."
    ],
    [
      "Math",
      "125K x 40% is about 50K. Adding 10% gives about 55K cups a day. Divided by 350 that is about 160 shops."
    ],
    [
      "Sanity check",
      "The US has roughly 60,000 coffee shops, about 1 per 5,500 people, which gives about 90 here. A city is denser than average, so about 150 is reasonable."
    ],
    [
      "Range and pushback",
      "I'd say roughly 100 to 250. If shops sell 500 cups a day it falls to about 110, and at 0.35 cups per resident it rises to about 220. The answer is most sensitive to cups bought per resident per day."
    ]
  ]
},
  "elevators": {
  "title": "Estimate the number of elevators in Manhattan",
  "lead": "Bottom-up: buildings with an elevator times elevators per building, plus special buildings.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Passenger and freight elevators in Manhattan<br/>Not escalators\"]\n  B[\"Approach: bottom-up<br/>Buildings with elevators x elevators per building\"]\n  C[\"Buildings in Manhattan<br/>about 40K\"]\n  D[\"Buildings with an elevator<br/>40K x 35% = about 14K<br/>walk-ups and low rises have none\"]\n  E[\"Elevators per such building<br/>1 in small ones, 20+ in towers<br/>average about 2\"]\n  F[\"Elevators in these buildings<br/>14K x 2 = about 28K\"]\n  G[\"Add hotels, hospitals and stations<br/>28K x 1.1 = about 31K\"]\n  H[\"Sanity check<br/>offices: 400M sq ft / 20K = 20K<br/>homes: 1.3M / 150 = 8.7K, total about 29K\"]\n  I[\"Answer<br/>about 25,000 to 40,000 elevators\"]\n  B --> C\n  C --> D\n  B --> E\n  D --> F\n  E --> F\n  F --> G\n  G --> H\n  H --> I\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,E step\n  class D,F,G calc\n  class H,I out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 31K elevators\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 25% of buildings have one<br/>10K x 2 = 20K<br/>20K x 1.1 = about 22K\"]\n  P --> Q2[\"Average 3 per building<br/>14K x 3 = 42K<br/>42K x 1.1 = about 46K\"]\n  P --> Q3[\"Skip the special buildings<br/>14K x 2<br/>= about 28K\"]\n  Q1 --> R[\"Updated range<br/>about 22K to 46K elevators\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>elevators per building\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Buildings in Manhattan",
        "",
        "about 40K"
      ],
      [
        "Buildings with an elevator",
        "40K x 35%",
        "about 14K"
      ],
      [
        "Elevators per such building",
        "1 in small ones, 20+ in towers",
        "about 2"
      ],
      [
        "Elevators in these buildings",
        "14K x 2",
        "about 28K"
      ],
      [
        "Hotels, hospitals, stations (+10%)",
        "28K x 1.1",
        "about 31K"
      ],
      [
        "Cross-check: offices",
        "400M sq ft / 20K sq ft per elevator",
        "about 20K"
      ],
      [
        "Cross-check: homes",
        "1.3M residents / 150 per elevator",
        "about 8.7K"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 31K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 25% of buildings have one",
        "40K x 25% x 2 x 1.1",
        "about 22K"
      ],
      [
        "Average 3 per building",
        "14K x 3 x 1.1",
        "about 46K"
      ],
      [
        "Skip hotels, hospitals, stations",
        "14K x 2",
        "about 28K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll count passenger and freight elevators in Manhattan, and leave out escalators. Does that work?"
    ],
    [
      "Approach",
      "Bottom-up. I'll count buildings, find how many have an elevator, multiply by elevators per building, and add special buildings."
    ],
    [
      "Inputs",
      "About 40K buildings, of which about 35% have an elevator because walk-ups and low rises have none. That is about 14K. Small buildings have 1 and towers have 20 or more, so I'll use an average of about 2."
    ],
    [
      "Math",
      "14K x 2 is about 28K. Hotels, hospitals and stations add about 10%, so about 31K."
    ],
    [
      "Sanity check",
      "By space: 400M sq ft of offices at 20K sq ft per elevator is about 20K, and 1.3M residents at 150 per elevator is about 8.7K. That is about 29K in total, close to my number."
    ],
    [
      "Range and pushback",
      "I'd say roughly 25,000 to 40,000. If only 25% of buildings have one it falls to about 22K, and at 3 per building it rises to about 46K. The answer is most sensitive to elevators per building."
    ]
  ]
},
  "laptops": {
  "title": "Estimate the number of laptops sold in the US each year",
  "lead": "Stock and flow: laptops in use divided by the replacement cycle, plus first-time and extra buyers.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>New laptops sold in the US per year<br/>Consumer, business and education, not tablets\"]\n  B[\"Approach: stock and flow<br/>Laptops in use / replacement cycle = yearly sales\"]\n  C[\"US population<br/>about 335M\"]\n  D[\"People with a laptop<br/>335M x 70% = about 235M<br/>home, work or school\"]\n  E[\"Replacement cycle<br/>about 4 years\"]\n  F[\"Replacement sales per year<br/>235M / 4 = about 59M\"]\n  G[\"Add first-time and extra buyers<br/>59M x 1.05 = about 62M\"]\n  H[\"Sanity check<br/>work 16M + homes 38M + schools 12M<br/>= about 66M\"]\n  I[\"Answer<br/>about 50M to 70M laptops per year\"]\n  B --> C\n  C --> D\n  B --> E\n  D --> F\n  E --> F\n  F --> G\n  G --> H\n  H --> I\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,E step\n  class D,F,G calc\n  class H,I out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 62M laptops\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Cycle is 5 years<br/>235M / 5 = 47M<br/>47M x 1.05 = about 50M\"]\n  P --> Q2[\"Only 60% have a laptop<br/>335M x 60% / 4 = 50M<br/>50M x 1.05 = about 53M\"]\n  P --> Q3[\"Skip first-time buyers<br/>235M / 4<br/>= about 59M\"]\n  Q1 --> R[\"Updated range<br/>about 50M to 62M laptops\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>the replacement cycle\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "US population",
        "",
        "about 335M"
      ],
      [
        "People with a laptop",
        "335M x 70%",
        "about 235M"
      ],
      [
        "Replacement cycle",
        "",
        "about 4 years"
      ],
      [
        "Replacement sales per year",
        "235M / 4",
        "about 59M"
      ],
      [
        "First-time and extra buyers (+5%)",
        "59M x 1.05",
        "about 62M"
      ],
      [
        "Cross-check: segments",
        "160M x 40% / 4 + 130M x 1.3 / 4.5 + 50M / 4",
        "about 66M"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 62M)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Cycle is 5 years",
        "235M / 5 x 1.05",
        "about 50M"
      ],
      [
        "Only 60% have a laptop",
        "335M x 60% / 4 x 1.05",
        "about 53M"
      ],
      [
        "Skip first-time buyers",
        "235M / 4",
        "about 59M"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate new laptops sold in the US per year, for consumers, businesses and schools, and leave out tablets. Does that work?"
    ],
    [
      "Approach",
      "Stock and flow. Laptops in use divided by how often they are replaced gives yearly sales, and then I add first-time and extra buyers."
    ],
    [
      "Inputs",
      "About 335M people, of whom about 70% have a laptop at home, work or school, so about 235M. People replace a laptop about every 4 years."
    ],
    [
      "Math",
      "235M / 4 is about 59M replacements. Adding about 5% for first-time and extra buyers gives about 62M."
    ],
    [
      "Sanity check",
      "By segment: workers 160M x 40% / 4 is about 16M, homes 130M x 1.3 / 4.5 is about 38M, and schools 50M / 4 is about 12M. That is about 66M in total."
    ],
    [
      "Range and pushback",
      "I'd say roughly 50M to 70M. If the cycle is 5 years it falls to about 50M, and if only 60% have a laptop it is about 53M. The answer is most sensitive to the replacement cycle."
    ]
  ]
},
  "flights": {
  "title": "Estimate the number of flights in the air over the US at 2 pm",
  "lead": "Stock and flow: flights per day times flight length gives flight-hours, divided by active hours to get planes in the air.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Aircraft airborne over the US at 2 pm on a normal weekday<br/>Airline, cargo, business and military\"]\n  B[\"Approach: stock and flow<br/>Flights per day x hours per flight / active hours\"]\n  C[\"Airline passengers per day<br/>about 2.5M\"]\n  D[\"Passengers per flight<br/>about 100\"]\n  E[\"Airline flights per day<br/>2.5M / 100 = about 25K\"]\n  F[\"Flight-hours per day<br/>25K x 2 hours each = about 50K\"]\n  G[\"Active hours per day<br/>about 16, few flights from midnight to 6 am\"]\n  H[\"Planes in the air on average<br/>50K / 16 = about 3.1K<br/>2 pm is near peak: x 1.1 = about 3.4K\"]\n  I[\"Add cargo, business jets, military<br/>3.4K x 1.3 = about 4.4K\"]\n  J[\"Sanity check<br/>45K flights x 1.8 hours / 17 active hours = about 4.8K<br/>matches the quoted peak of about 5,000\"]\n  K[\"Answer<br/>about 3,500 to 5,500 flights\"]\n  B --> C\n  B --> D\n  C --> E\n  D --> E\n  E --> F\n  B --> G\n  F --> H\n  G --> H\n  H --> I\n  I --> J\n  J --> K\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C,D,G step\n  class E,F,H,I calc\n  class J,K out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 4.4K flights\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Divide by 24 hours, not 16<br/>50K / 24 = 2.1K<br/>2.1K x 1.1 x 1.3 = about 3.0K\"]\n  P --> Q2[\"120 passengers per flight<br/>2.5M / 120 x 2 / 16 = 2.6K<br/>2.6K x 1.1 x 1.3 = about 3.7K\"]\n  P --> Q3[\"Skip cargo, jets, military<br/>3.1K x 1.1<br/>= about 3.4K\"]\n  Q1 --> R[\"Updated range<br/>about 3.0K to 4.4K flights\"]\n  Q2 --> R\n  Q3 --> R\n  R --> S[\"Say: the answer is most sensitive to<br/>active hours in the day\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Airline passengers per day",
        "",
        "about 2.5M"
      ],
      [
        "Passengers per flight",
        "",
        "about 100"
      ],
      [
        "Airline flights per day",
        "2.5M / 100",
        "about 25K"
      ],
      [
        "Flight-hours per day",
        "25K x 2 hours",
        "about 50K"
      ],
      [
        "Planes in the air on average",
        "50K / 16 active hours",
        "about 3.1K"
      ],
      [
        "2 pm near peak (+10%)",
        "3.1K x 1.1",
        "about 3.4K"
      ],
      [
        "Cargo, business jets, military (+30%)",
        "3.4K x 1.3",
        "about 4.4K"
      ],
      [
        "Cross-check: all flights",
        "45K x 1.8 hours / 17 active hours",
        "about 4.8K"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 4.4K)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Divide by 24 hours, not 16",
        "50K / 24 x 1.1 x 1.3",
        "about 3.0K"
      ],
      [
        "120 passengers per flight",
        "2.5M / 120 x 2 / 16 x 1.1 x 1.3",
        "about 3.7K"
      ],
      [
        "Skip cargo, jets, military",
        "3.1K x 1.1",
        "about 3.4K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate aircraft airborne over the US at 2 pm on a normal weekday, counting airline, cargo, business and military flights. Does that work?"
    ],
    [
      "Approach",
      "Stock and flow. Flights per day times hours per flight gives flight-hours, and spreading those over the active hours of the day gives planes in the air at once."
    ],
    [
      "Inputs",
      "About 2.5M airline passengers a day at about 100 per flight, so about 25K flights. Each flight is about 2 hours. Flights are packed into about 16 active hours. 2 pm is near the peak, and cargo, jets and military add about 30%."
    ],
    [
      "Math",
      "25K x 2 is about 50K flight-hours. Divided by 16 that is about 3.1K in the air. Times 1.1 for the peak is about 3.4K, and times 1.3 for other aircraft is about 4.4K."
    ],
    [
      "Sanity check",
      "Another route: about 45K flights of all types a day x 1.8 hours / 17 active hours is about 4.8K, which matches the often-quoted figure of about 5,000 at peak."
    ],
    [
      "Range and pushback",
      "I'd say roughly 3,500 to 5,500. If you divide by 24 hours it falls to about 3.0K, and at 120 passengers per flight it is about 3.7K. The answer is most sensitive to the active hours, because flights are bunched into the daytime."
    ]
  ]
},
  "data-center": {
  "title": "Estimate the number of servers a video app with 10 million daily users needs",
  "lead": "Bottom-up from peak load: size the streaming servers from peak bandwidth and the app servers from peak requests, then add headroom.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Servers to serve video and app requests at peak<br/>10M daily users, leave out encoding and storage\"]\n  B[\"Approach: bottom-up from peak load<br/>Two parallel workloads, streaming and app requests\"]\n  C1[\"Watch hours per day<br/>10M users x 1 hour = about 10M\"]\n  C2[\"Peak concurrent streams<br/>10 percent of hours in the busiest hour = about 1M\"]\n  C3[\"Peak bandwidth<br/>1M x 3 Mbps = about 3 Tbps\"]\n  C4[\"Streaming servers<br/>3,000 Gbps / 20 Gbps per server = about 150\"]\n  D1[\"App requests at peak<br/>10M x 50 / 86,400 s = about 5.8K per second<br/>x 3 for peak = about 17K per second\"]\n  D2[\"App servers<br/>17K / 1,000 per server = about 20\"]\n  E[\"Combine<br/>150 + 20 = about 170 servers\"]\n  F[\"Headroom and spare: +50 percent<br/>170 x 1.5 = about 250\"]\n  G[\"Sanity check<br/>10M / 250 = 1 server per 40,000 daily users<br/>light apps run 1 per 10K to 50K\"]\n  H[\"Answer<br/>about 200 to 400 servers\"]\n  A --> B\n  B --> C1\n  C1 --> C2\n  C2 --> C3\n  C3 --> C4\n  B --> D1\n  D1 --> D2\n  C4 --> E\n  D2 --> E\n  E --> F\n  F --> G\n  G --> H\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C1,D1 step\n  class C2,C3,C4,D2,E,F calc\n  class G,H out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 250 servers\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"CDN boxes at 100 Gbps<br/>3,000 Gbps / 100 = 30 streaming servers<br/>(30 + 20) x 1.5 = about 75\"]\n  P --> Q2[\"Peak is only 5 percent of hours<br/>500K x 3 Mbps = 1.5 Tbps, 1,500 / 20 = 75<br/>(75 + 20) x 1.5 = about 140\"]\n  P --> Q3[\"Lower headroom of 20 percent<br/>(150 + 20) x 1.2<br/>= about 204\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 75 to 250 servers\"] --> S[\"Say: the answer is most sensitive to<br/>peak share of viewing and bandwidth per server\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Watch hours per day",
        "10M users x 1 hour",
        "about 10M"
      ],
      [
        "Peak concurrent streams",
        "10 percent of daily hours in the busiest hour",
        "about 1M"
      ],
      [
        "Peak bandwidth",
        "1M x 3 Mbps",
        "about 3 Tbps"
      ],
      [
        "Streaming servers",
        "3,000 Gbps / 20 Gbps per server",
        "about 150"
      ],
      [
        "App requests at peak",
        "10M x 50 / 86,400 s, x 3 for peak",
        "about 17K per second"
      ],
      [
        "App servers",
        "17K / 1,000 per server",
        "about 20"
      ],
      [
        "Subtotal",
        "150 + 20",
        "about 170"
      ],
      [
        "With 50 percent headroom and spare",
        "170 x 1.5",
        "about 250"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 250 servers)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "CDN boxes at 100 Gbps",
        "(3,000 / 100 + 20) x 1.5 = (30 + 20) x 1.5",
        "about 75"
      ],
      [
        "Peak is 5 percent of hours",
        "(500K x 3 Mbps / 20 Gbps + 20) x 1.5 = (75 + 20) x 1.5",
        "about 140"
      ],
      [
        "Headroom of only 20 percent",
        "(150 + 20) x 1.2",
        "about 204"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate how many servers a video app with 10 million daily users needs to serve video and app requests at peak. I'll leave out video encoding and storage. Is that fine?"
    ],
    [
      "Approach",
      "Bottom-up from peak load. Streaming bandwidth sizes one group of servers and app requests size another, then I add headroom."
    ],
    [
      "Inputs",
      "Each user watches about 1 hour a day, about 10 percent of that lands in the busiest hour, and a stream is about 3 Mbps. A streaming server pushes about 20 Gbps. Each user makes about 50 app requests a day, peak is 3 times average, and an app server handles about 1,000 per second."
    ],
    [
      "Math",
      "10M hours a day, 10 percent in the peak hour is 1M concurrent streams. 1M x 3 Mbps is 3 Tbps, and 3,000 Gbps / 20 is about 150 streaming servers. Requests are 10M x 50 / 86,400, about 5.8K per second, 17K at peak, so about 20 app servers. 150 + 20 is 170, and 50 percent headroom gives about 250."
    ],
    [
      "Sanity check",
      "250 servers for 10M daily users is 1 server per 40,000 users. Light apps run 1 server per 10K to 50K users, so it is the right order of magnitude."
    ],
    [
      "Range and pushback",
      "I'd say about 200 to 400 servers. Real services put video on CDN boxes close to users, and with 100 Gbps boxes streaming drops to about 30 servers, so about 75 in total, but you pay for the CDN. The answer is most sensitive to peak share of viewing and bandwidth per server."
    ]
  ]
},
  "data-storage": {
  "title": "Estimate the number of photos a social app with 50 million users stores per year, and the space they take",
  "lead": "Bottom-up flow: active posters x photos each x size, then add resized copies and replication.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Photos uploaded per year and storage needed<br/>50M registered users, photos only\"]\n  B[\"Approach: bottom-up flow<br/>Count photos, then size per photo, then multiply\"]\n  C1[\"Active posters<br/>50M x 40 percent = about 20M\"]\n  C2[\"Photos per poster per year<br/>2 per week x 52 = about 100\"]\n  C3[\"Photos per year<br/>20M x 100 = about 2B\"]\n  D1[\"Stored size per photo<br/>compressed original = about 2 MB\"]\n  E[\"Original data per year<br/>2B x 2 MB = about 4 PB\"]\n  F1[\"Resized copies: +50 percent<br/>4 PB x 1.5 = about 6 PB\"]\n  F2[\"Disk with 3 copies<br/>6 PB x 3 = about 18 PB\"]\n  G[\"Sanity check<br/>2B / year = about 63 photos per second<br/>50M x 0.2 x 365 = about 3.7B, same order\"]\n  H[\"Answer<br/>about 2B photos, 6 PB of data, 18 PB of disk\"]\n  A --> B\n  B --> C1\n  C1 --> C2\n  C2 --> C3\n  B --> D1\n  C3 --> E\n  D1 --> E\n  E --> F1\n  F1 --> F2\n  F2 --> G\n  G --> H\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C1,D1 step\n  class C2,C3,E,F1,F2 calc\n  class G,H out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 6 PB of data\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"10 percent of uploads are video at 40 MB<br/>200M x 40 MB = about 8 PB of video<br/>more than all the photos\"]\n  P --> Q2[\"Only 20 percent post<br/>10M x 100 = 1B photos<br/>1B x 2 MB x 1.5 = about 3 PB\"]\n  P --> Q3[\"Photos are 4 MB<br/>2B x 4 MB x 1.5<br/>= about 12 PB\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 3 to 12 PB\"] --> S[\"Say: the answer is most sensitive to<br/>video share, then photo size\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Registered users",
        "Given",
        "about 50M"
      ],
      [
        "Users who post in a month",
        "50M x 40 percent",
        "about 20M"
      ],
      [
        "Photos per poster per year",
        "2 per week x 52",
        "about 100"
      ],
      [
        "Photos per year",
        "20M x 100",
        "about 2B"
      ],
      [
        "Stored size per photo",
        "Compressed original",
        "about 2 MB"
      ],
      [
        "Original data per year",
        "2B x 2 MB",
        "about 4 PB"
      ],
      [
        "Add resized copies (+50 percent)",
        "4 PB x 1.5",
        "about 6 PB"
      ],
      [
        "Disk with 3 copies",
        "6 PB x 3",
        "about 18 PB"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 6 PB)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "10 percent of uploads are video at 40 MB",
        "2B x 10 percent = 200M; 200M x 40 MB",
        "about 8 PB of video"
      ],
      [
        "Only 20 percent of users post",
        "(10M x 100 = 1B) x 2 MB x 1.5",
        "about 3 PB"
      ],
      [
        "Photos are 4 MB",
        "2B x 4 MB x 1.5",
        "about 12 PB"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate how many photos a social app with 50 million registered users stores per year and how much space that is. I'll count photos only, not video. Is that fine?"
    ],
    [
      "Approach",
      "Bottom-up flow. Active posters times photos each gives photos per year, then size per photo gives data, then I add resized copies and replication."
    ],
    [
      "Inputs",
      "About 40 percent of users post in a month, so about 20M posters. They post about 2 a week, so about 100 a year. A compressed original is about 2 MB, resized copies add about 50 percent, and disk keeps 3 copies."
    ],
    [
      "Math",
      "20M x 100 is 2B photos a year. 2B x 2 MB is 4 PB. Resized copies make it 4 x 1.5 = 6 PB, and 3 copies on disk is about 18 PB."
    ],
    [
      "Sanity check",
      "2B a year is about 63 photos per second on average. A big photo app sees about 0.2 posts per user per day, so 50M x 0.2 x 365 is about 3.7B, the same order."
    ],
    [
      "Range and pushback",
      "I'd say about 2 billion photos and 6 PB, 18 PB of disk. If 10 percent of uploads are video at 40 MB, that is 200M x 40 MB, about 8 PB, more than all the photos. The answer is most sensitive to video share, then photo size."
    ]
  ]
},
  "fraud-alerts": {
  "title": "Estimate the number of fraud alerts a bank with 20 million card accounts must review per day",
  "lead": "Top-down funnel: transactions, then flagged, then the share that needs a person, with analyst staffing as a check.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Fraud alerts needing a human review per day<br/>20M card accounts\"]\n  B[\"Approach: top-down funnel<br/>Transactions, then flagged, then left for an analyst\"]\n  C1[\"Card accounts<br/>about 20M\"]\n  C2[\"Transactions per account per day<br/>about 30 per month = about 1\"]\n  C3[\"Transactions per day<br/>20M x 1 = about 20M\"]\n  D1[\"Flagged by rules or a model<br/>20M x 0.2 percent = about 40K\"]\n  D2[\"Cleared by a text to the customer<br/>40K x 70 percent = about 28K\"]\n  E[\"Left for an analyst<br/>40K x 30 percent = about 12K\"]\n  F[\"Analysts needed<br/>12K / 40 reviews each per day = about 300\"]\n  G[\"Sanity check<br/>0.1 percent of 20M = 20K fraud, 3 per case = 7K cases<br/>half false alarms: 7K / 0.5 = about 13K\"]\n  H[\"Answer<br/>about 10,000 to 15,000 alerts per day\"]\n  A --> B\n  B --> C1\n  B --> D1\n  C1 --> C2\n  C2 --> C3\n  C3 --> D1\n  D1 --> D2\n  D1 --> E\n  D2 --> E\n  E --> F\n  F --> G\n  G --> H\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C1,C2 step\n  class C3,D1,D2,E,F calc\n  class G,H out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 12K alerts per day\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Flag rate is 0.3 percent<br/>20M x 0.3 percent = 60K<br/>60K x 30 percent = about 18K\"]\n  P --> Q2[\"Only half cleared by text<br/>40K x 50 percent<br/>= about 20K\"]\n  P --> Q3[\"Only 0.5 transactions a day<br/>10M x 0.2 percent = 20K<br/>20K x 30 percent = about 6K\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 6K to 20K alerts per day\"] --> S[\"Say: the answer is most sensitive to<br/>the flag rate and the auto-clear share\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Card accounts",
        "Given",
        "about 20M"
      ],
      [
        "Transactions per account per day",
        "About 30 per month",
        "about 1"
      ],
      [
        "Transactions per day",
        "20M x 1",
        "about 20M"
      ],
      [
        "Flagged by rules or a model",
        "20M x 0.2 percent",
        "about 40K"
      ],
      [
        "Cleared automatically by a text",
        "40K x 70 percent",
        "about 28K"
      ],
      [
        "Left for an analyst",
        "40K x 30 percent (or 40K - 28K)",
        "about 12K"
      ],
      [
        "Analysts needed",
        "12K / 40 reviews each per day",
        "about 300"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 12K alerts per day)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Flag rate is 0.3 percent",
        "20M x 0.3 percent x 30 percent = 60K x 30 percent",
        "about 18K"
      ],
      [
        "Only 50 percent cleared by text",
        "40K x (1 - 0.5)",
        "about 20K"
      ],
      [
        "Only 0.5 transactions per account per day",
        "10M x 0.2 percent x 30 percent = 20K x 30 percent",
        "about 6K"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate how many fraud alerts a bank with 20 million card accounts must have a person review each day. Alerts cleared automatically by a text to the customer don't count. Does that work?"
    ],
    [
      "Approach",
      "A top-down funnel. Transactions per day, then the share flagged, then the share that can't be cleared automatically and so needs an analyst."
    ],
    [
      "Inputs",
      "About 30 transactions per account per month, so about 1 a day. About 0.2 percent get flagged by rules or a model. About 70 percent of flags are cleared by a text, leaving 30 percent. An analyst reviews about 40 a day."
    ],
    [
      "Math",
      "20M accounts x 1 is 20M transactions a day. 0.2 percent is 40K flagged. 70 percent clear automatically, which is 28K, so 12K are left for people. At 40 reviews each that is about 300 analysts."
    ],
    [
      "Sanity check",
      "Fraud-rate route: about 0.1 percent of 20M is 20K fraud transactions, about 3 per case gives about 7K real cases. If about half the reviews are false alarms, that is about 13K reviews, so it matches."
    ],
    [
      "Range and pushback",
      "I'd say 10,000 to 15,000 a day. If you ask why not review all 40K flags, at 40 each that needs about 1,000 analysts, so auto-clearing saves about 700 staff. The answer is most sensitive to the flag rate and the auto-clear share."
    ]
  ]
},
  "support-calls": {
  "title": "Estimate the number of customer support calls a bank with 10 million customers gets per day",
  "lead": "Top-down: customers x calls per customer, then convert to agents as a staffing check.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Inbound support calls per day<br/>10M customers, phone only\"]\n  B[\"Approach: top-down with staffing check<br/>Customers x calls each, then agent time\"]\n  C1[\"Customers<br/>about 10M\"]\n  C2[\"Calls per customer per year<br/>balance, card, fraud, fees = about 2.5\"]\n  C3[\"Calls per year<br/>10M x 2.5 = about 25M\"]\n  D1[\"Calls per weekday<br/>25M / 250 weekdays = about 100K\"]\n  D2[\"Calls per day, whole week<br/>25M / 365 = about 70K\"]\n  E1[\"Agent time per weekday<br/>100K x 6 min = 600K min = about 10K hours\"]\n  E2[\"Agents needed<br/>10K hours / 5 productive hours = about 2,000\"]\n  G[\"Sanity check<br/>10M / 2,000 = 1 agent per 5,000 customers<br/>centers run 1 per few thousand\"]\n  H[\"Answer<br/>about 70K per day over the week, 100K on a weekday\"]\n  A --> B\n  B --> C1\n  B --> C2\n  C1 --> C3\n  C2 --> C3\n  C3 --> D1\n  C3 --> D2\n  D1 --> E1\n  E1 --> E2\n  E2 --> G\n  D2 --> G\n  G --> H\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C1,C2 step\n  class C3,D1,D2,E1,E2 calc\n  class G,H out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 100K calls per weekday, 2,000 agents\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 1.5 calls per customer<br/>10M x 1.5 / 250<br/>= about 60K per weekday\"]\n  P --> Q2[\"Calls last 12 minutes<br/>100K x 12 min = 20K hours<br/>20K / 5 = about 4,000 agents\"]\n  P --> Q3[\"Peak hour is 12 percent of calls<br/>12K calls x 6 min = 1,200 hours<br/>= about 1,200 agents at once\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 60K to 100K calls, 1,200 to 4,000 agents\"] --> S[\"Say: the answer is most sensitive to<br/>calls per customer and call length\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "Customers",
        "Given",
        "about 10M"
      ],
      [
        "Calls per customer per year",
        "Balance, card, fraud, fees",
        "about 2.5"
      ],
      [
        "Calls per year",
        "10M x 2.5",
        "about 25M"
      ],
      [
        "Calls per weekday",
        "25M / 250 weekdays",
        "about 100K"
      ],
      [
        "Calls per day averaged over the week",
        "25M / 365",
        "about 70K"
      ],
      [
        "Agent time per weekday",
        "100K x 6 min = 600K min / 60",
        "about 10K hours"
      ],
      [
        "Agents needed",
        "10K hours / 5 productive hours each",
        "about 2,000"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 100K calls per weekday and 2,000 agents)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 1.5 calls per customer per year",
        "10M x 1.5 / 250 weekdays = 15M / 250",
        "about 60K calls per weekday"
      ],
      [
        "Calls last 12 minutes",
        "100K x 12 min / 60 = 20K hours; 20K / 5",
        "about 4,000 agents"
      ],
      [
        "12 percent of daily calls in the busiest hour",
        "100K x 12 percent = 12K; 12K x 6 min / 60 = 1,200 hours",
        "about 1,200 agents at once"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate inbound customer support calls per day for a bank with 10 million customers, phone calls only. Is that fine?"
    ],
    [
      "Approach",
      "Top-down. Customers times calls per customer gives calls per year, which I turn into a daily number. Then I convert to agents as a staffing check."
    ],
    [
      "Inputs",
      "About 2.5 calls per customer per year for balances, cards, fraud and fees. About 250 weekdays a year. A call takes about 6 minutes, and an agent has about 5 productive hours a day."
    ],
    [
      "Math",
      "10M x 2.5 is 25M calls a year. Divided by 250 weekdays that is about 100K a weekday, or about 70K a day averaged over 365 days. 100K x 6 minutes is 600K minutes, about 10K hours, and at 5 hours each that is about 2,000 agents."
    ],
    [
      "Sanity check",
      "2,000 agents for 10M customers is 1 agent per 5,000 customers. Contact centers often run 1 agent per few thousand customers, so it fits."
    ],
    [
      "Range and pushback",
      "I'd say about 70,000 a day averaged over the week, near 100,000 on a weekday. At the peak hour, if 12 percent of daily calls land there, that is 12K calls x 6 minutes, 1,200 agent-hours, so about 1,200 agents at once. The answer is most sensitive to calls per customer and call length."
    ]
  ]
},
  "window-washers": {
  "title": "Estimate the number of window cleaners needed for a city skyline of about 300 high-rises",
  "lead": "Bottom-up: windows x cleanings per year divided by the windows one washer cleans per year.",
  "chart": "flowchart TD\n  A[\"Clarify<br/>Full-time exterior window cleaners for 300 high-rises<br/>Glass only, no residential low-rise\"]\n  B[\"Approach: demand over capacity<br/>Windows to clean per year / windows one washer can do\"]\n  C1[\"Windows per tower<br/>40 floors x 100 windows = about 4,000\"]\n  C2[\"Windows in the skyline<br/>300 x 4,000 = about 1.2M\"]\n  C3[\"Cleanings per year<br/>1.2M x 4 = about 4.8M\"]\n  D1[\"Windows per washer per day<br/>20 per hour x 6 hours = about 120\"]\n  D2[\"Windows per washer per year<br/>120 x 200 working days = about 24K\"]\n  E[\"Washers needed<br/>4.8M / 24K = about 200\"]\n  G[\"Sanity check<br/>300 x 150K sq ft x 4 = 180M sq ft a year<br/>1,000 sq ft/hr x 6 x 200 = 1.2M, so 150 washers\"]\n  H[\"Answer<br/>about 150 to 300 window cleaners\"]\n  A --> B\n  B --> C1\n  C1 --> C2\n  C2 --> C3\n  B --> D1\n  D1 --> D2\n  C3 --> E\n  D2 --> E\n  E --> G\n  G --> H\n\n  classDef step fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef calc fill:#dcfce7,stroke:#16a34a,color:#000\n  classDef out fill:#fee2e2,stroke:#dc2626,color:#000\n  class A,B,C1,D1 step\n  class C2,C3,D2,E calc\n  class G,H out",
  "pushChart": "flowchart LR\n  B[\"Base answer<br/>about 200 washers\"] --> P{\"Interviewer pushback\"}\n  P --> Q1[\"Only 3 cleanings a year<br/>300 x 4,000 x 3 = 3.6M<br/>3.6M / 24K = about 150\"]\n  P --> Q2[\"Only 150 working days (weather)<br/>120 x 150 = 18K<br/>4.8M / 18K = about 267\"]\n  P --> Q3[\"Some towers use rigs or robots<br/>trim the answer by 10 percent<br/>200 x 0.9 = about 180\"]\n  Q1 --> R\n  Q2 --> R\n  Q3 --> R\n  R[\"Updated range<br/>about 150 to 270 washers\"] --> S[\"Say: the answer is most sensitive to<br/>cleanings per year and working days\"]\n\n  classDef base fill:#dbeafe,stroke:#2563eb,color:#000\n  classDef push fill:#fee2e2,stroke:#dc2626,color:#000\n  classDef adj fill:#fef3c7,stroke:#d97706,color:#000\n  classDef out fill:#dcfce7,stroke:#16a34a,color:#000\n  class B base\n  class P push\n  class Q1,Q2,Q3 adj\n  class R,S out",
  "table": {
    "title": "Summary table",
    "headers": [
      "Step",
      "Calculation",
      "Value"
    ],
    "rows": [
      [
        "High-rises",
        "Given",
        "about 300"
      ],
      [
        "Windows per tower",
        "40 floors x 100 windows",
        "about 4,000"
      ],
      [
        "Windows in the skyline",
        "300 x 4,000",
        "about 1.2M"
      ],
      [
        "Cleanings per year",
        "1.2M x 4 times a year",
        "about 4.8M"
      ],
      [
        "Windows per washer per day",
        "20 per hour x 6 hours",
        "about 120"
      ],
      [
        "Windows per washer per year",
        "120 x 200 working days",
        "about 24K"
      ],
      [
        "Washers needed",
        "4.8M / 24K",
        "about 200"
      ]
    ]
  },
  "pushMath": {
    "title": "Pushback math (base about 200 washers)",
    "headers": [
      "Pushback",
      "Calculation",
      "Result"
    ],
    "rows": [
      [
        "Only 3 cleanings a year",
        "300 x 4,000 x 3 / 24K = 3.6M / 24K",
        "about 150"
      ],
      [
        "Only 150 working days a year",
        "4.8M / (120 x 150) = 4.8M / 18K",
        "about 267"
      ],
      [
        "Some towers use rigs or robots",
        "200 x 0.9",
        "about 180"
      ]
    ]
  },
  "sample": [
    [
      "Clarify",
      "I'll estimate how many window cleaners a skyline of about 300 high-rises needs, counting exterior glass cleaning only. Is that fine?"
    ],
    [
      "Approach",
      "Bottom-up. Total windows times cleanings per year gives the work, and windows one washer can clean in a year gives the capacity. Work divided by capacity is the headcount."
    ],
    [
      "Inputs",
      "About 40 floors and 100 windows per floor, so 4,000 windows per tower. Each is cleaned about 4 times a year. A washer does about 20 windows an hour for about 6 hours, and works about 200 days a year because of weather."
    ],
    [
      "Math",
      "300 x 4,000 is 1.2M windows, times 4 is 4.8M cleanings a year. A washer does 20 x 6 = 120 a day, times 200 days is 24K a year. 4.8M / 24K is about 200."
    ],
    [
      "Sanity check",
      "Area route: 300 towers x about 150K sq ft of glass x 4 is about 180M sq ft a year. A washer does about 1,000 sq ft an hour x 6 x 200 days, 1.2M, so about 150 washers, the same order."
    ],
    [
      "Range and pushback",
      "I'd say about 150 to 300 window cleaners. If some buildings use rigs or robots I'd trim by about 10 percent, to about 180. With only 3 cleanings a year it falls to about 150. The answer is most sensitive to cleanings per year and working days."
    ]
  ]
}
};
