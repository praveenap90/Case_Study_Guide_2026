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
}
};
