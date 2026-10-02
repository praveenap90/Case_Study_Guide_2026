window.DATA = window.DATA || {};
DATA.guess = {
  lead: "A guesstimate is judged on the path, not the number. Remember SCOPE: Scope it, Choose an approach, Organize inputs, Process the math, Examine the result.",
  scopeChart: "flowchart LR\n  S[\"S - Scope<br/>what, where, when, which units?\"] --> C[\"C - Choose approach<br/>top-down, bottom-up or stock and flow\"]\n  C --> O[\"O - Organize inputs<br/>3 to 5 round numbers\"]\n  O --> P[\"P - Process the math<br/>write units on every line\"]\n  P --> E[\"E - Examine<br/>sanity check and give a range\"]\n  style S fill:#dbeafe,stroke:#2563eb,color:#000\n  style C fill:#fef3c7,stroke:#d97706,color:#000\n  style O fill:#dcfce7,stroke:#16a34a,color:#000\n  style P fill:#fae8ff,stroke:#a21caf,color:#000\n  style E fill:#fee2e2,stroke:#dc2626,color:#000",
  pickChart: "flowchart TD\n  Q[\"Guesstimate question\"] --> Q1{\"Does a known population<br/>use it regularly?\"}\n  Q1 -- Yes --> TD[\"Top-down<br/>population x share x frequency x price\"]\n  Q1 -- No --> Q2{\"Is it durable, or a service<br/>tied to a stock of items?\"}\n  Q2 -- Yes --> SF[\"Stock and flow<br/>stock / lifespan, or stock x service rate / worker capacity\"]\n  Q2 -- No --> Q3{\"Is supply easier to count<br/>than demand?\"}\n  Q3 -- Yes --> BU[\"Bottom-up<br/>sites x capacity x utilization\"]\n  Q3 -- No --> TD\n  style TD fill:#dbeafe,stroke:#2563eb,color:#000\n  style SF fill:#fef3c7,stroke:#d97706,color:#000\n  style BU fill:#dcfce7,stroke:#16a34a,color:#000",
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
    ["P: Math with units", "gp", "280M x 4 = 1.1B in use; / 3.75 = about 300M replacements; plus 15M x 4 = 60M original equipment = 360M; +10% commercial = about 390M."],
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
    ["P", "Process", "280M x 4 = 1.1B tires in use. 1.1B / 3.75 = about 300M replacements. 15M x 4 = 60M original equipment. Total about 360M. Add 10% for commercial: about 390M."],
    ["E", "Examine", "390M is about 1.2 tires per person per year. A driver replacing a set every 4 years plus new cars fits that. I would say roughly 350 to 400M."]
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
    "title": "4. Segmentation (optional but strong)",
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
    "title": "9. Handling interviewer pushback",
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
    "title": "1. Population segmentation examples",
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
    "title": "2. Behavior rates and frequencies (common anchors)",
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
  "calcTitle": "3. Multi-segment calculation template: annual new credit cards in the US (adults = 250M)",
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
    "title": "4. Quick adjustment examples",
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
      "title": "1. New credit cards issued annually (US)",
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
      "title": "2. Daily mobile banking app logins (US)",
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
      "title": "3. People opening new checking accounts annually",
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
      "title": "4. ATM withdrawals out-of-network",
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
      "title": "5. Daily coffee purchases in NYC",
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
      "title": "6. People applying for personal loans annually",
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
      "title": "7. Buy now pay later (BNPL) transactions annually",
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
      "title": "8. Annual revenue from credit card late fees",
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
      "title": "9. Small business credit applications annually",
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
      "title": "10. Car loans issued annually",
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
}
};
