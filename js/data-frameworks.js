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
    example: "Revenue is flat at $400M but profit fell from $40M to $28M. The decline splits into mix (-$4M) and margin compression (-$8M). Same numbers as the Industrial Pump Maker case.",
    speak: [
      [
            "C: Clarify",
            "Let me make sure I understand. A pump maker has flat revenue of $400M, but profit fell from $40M to $28M over two years, and we want to know why and how to recover. Two quick questions: what are the product lines, and what happened to prices and costs?"
      ],
      [
            "L: Lay out",
            "I would look at four things. First, profit is revenue minus costs, so is the problem revenue or cost? Second, within each, where specifically? Third, size each cause in dollars. Fourth, the fixes and risks. Since revenue is flat, I will start with mix and margin by product line."
      ],
      [
            "E: Evaluate",
            "Fixed costs did not change, so the problem is in the lines. Premium fell $40M but held a 30% margin, which costs $12M of contribution. Standard grew $40M, which adds $8M at the old 20% margin, so the mix effect is minus $4M. Standard's margin also slid from 20% to 16.7%, which is another minus $8M. Together that is the $12M decline."
      ],
      [
            "A: Assess",
            "So one third of the decline is mix and two thirds is margin compression on Standard, driven by steel costs and import pricing. Premium is healthy, it is just losing volume. Restoring Standard to 19% is worth about $5.5M, and winning back $20M of Premium is worth about $6M, which gets profit to about $39.5M."
      ],
      [
            "R: Recommend",
            "I would protect Premium first, because each $10M of Premium is $3M of profit versus under $2M for Standard. In parallel, pass steel costs through and re-source on Standard. I would stage it, and watch customer pushback on surcharges and further import pressure, since that could cut the gain roughly in half."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Pump maker: revenue flat at $400M, profit down $40M to $28M in two years<br/>Goal: explain why and get back near $40M\"]\nC --> C2[\"Facts: two lines (Premium, Standard), prices flat,<br/>steel costs up 8%, fixed costs flat at $60M\"]\n\nC2 --> L[\"L: Lay out<br/>1 Profit = Revenue - Costs<br/>2 Is the problem revenue or cost?<br/>3 Size each cause<br/>4 Fixes and risks\"]\n\nL --> E1[\"E: Evaluate<br/>Revenue flat, fixed costs flat, so look at mix and margin by line\"]\nE1 --> E2[\"Premium: $200M to $160M, margin steady at 30%<br/>Standard: $200M to $240M, margin 20% to 16.7%\"]\nE2 --> E3[\"Mix effect -$4M + margin squeeze on Standard -$8M = -$12M\"]\n\nE3 --> A1[\"A: Assess<br/>One third mix, two thirds margin compression<br/>Premium is healthy but losing volume\"]\nA1 --> A2[\"Standard back to 19%: 240M x 2.3 pts = +$5.5M\"]\nA1 --> A3[\"Win back $20M Premium x 30% = +$6M\"]\nA2 --> A4[\"Profit $28M + $11.5M = about $39.5M\"]\nA3 --> A4\n\nA4 --> R[\"R: Recommend<br/>Protect Premium first, restore Standard margin second\"]\nR --> R1[\"Steel pass-through and re-sourcing on Standard\"]\nR --> R2[\"Good-better-best packages to stop trade-down\"]\nR --> R3[\"Guardrails: customer pushback, import pricing\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2,A3,A4 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: where did the $12M go?", note: "Rule out revenue and fixed costs, then split the decline into mix and margin.", code: "flowchart TD\nQ[\"Profit fell $12M. Where?\"] --> R1{\"Revenue?\"}\nR1 --> R2[\"Flat at $400M: not a revenue total problem\"]\nQ --> K1{\"Fixed costs?\"}\nK1 --> K2[\"Flat at $60M: not the cause\"]\nQ --> M1{\"Contribution by line\"}\n\nM1 --> P1[\"Premium<br/>$200M to $160M<br/>contribution $60M to $48M<br/>= -$12M\"]\nM1 --> S1[\"Standard<br/>$200M to $240M<br/>contribution $40M to $40M<br/>= $0 despite +$40M sales\"]\n\nP1 --> X1[\"Mix effect<br/>-$12M Premium + $8M Standard at old 20%<br/>= -$4M\"]\nS1 --> X1\nS1 --> X2[\"Margin squeeze on Standard<br/>$240M x (20% - 16.7%)<br/>= -$8M\"]\n\nX1 --> T[\"Total -$4M + -$8M = -$12M<br/>$40M to $28M\"]\nX2 --> T\nT --> Z[\"Fix the Standard margin and win back Premium volume\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef ok fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef line fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,R1,K1,M1 q;\nclass R2,K2 ok;\nclass P1,S1 line;\nclass X1,X2,T,Z calc;" },
      { id: "impact", title: "Impact math: from fixes to the new profit", note: "Each fix, the new profit, the haircut and the sensitivity.", code: "flowchart TD\nB[\"Current profit<br/>$28M\"] --> O1[\"Option 1: Standard margin 16.7% to 19%<br/>steel pass-through and sourcing<br/>240M x 2.3 pts = +$5.5M\"]\nB --> O2[\"Option 2: win back Premium volume<br/>$20M x 30% margin = +$6M\"]\n\nO1 --> T[\"Total gain<br/>$5.5M + $6M = $11.5M\"]\nO2 --> T\nT --> N[\"New profit<br/>$28M + $11.5M = about $39.5M\"]\nN --> H[\"Haircut 50% for pushback and import pressure<br/>$5.75M gain = about $33.8M\"]\nH --> D{\"Back to the $40M goal?\"}\nD --> Y[\"Not fully: do both, in stages, and add cost work on Standard\"]\n\nO1 --> S[\"Sensitivity<br/>each $10M of Premium = $3M profit<br/>each $10M of Standard = $1.7M profit\"]\nO2 --> S\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef opt fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef dec fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass O1,O2 opt;\nclass T,N,H,S calc;\nclass D dec;\nclass Y out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the profitability steps",
            "headers": [
                  "CLEAR step",
                  "Profitability step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Restate the company, ask the objective",
                        "Flat $400M revenue, profit $40M to $28M. Goal: explain and recover."
                  ],
                  [
                        "Lay out",
                        "Profit = Revenue - Costs; Revenue = Volume x Price x Mix; Costs = Fixed + Variable",
                        "Is it revenue or cost? Then which product line?"
                  ],
                  [
                        "Evaluate",
                        "Find what changed, and where",
                        "Fixed costs flat, prices flat, so mix and Standard margin explain the $12M"
                  ],
                  [
                        "Assess",
                        "Size each cause and each fix",
                        "Mix -$4M, margin -$8M; fixes +$5.5M and +$6M"
                  ],
                  [
                        "Recommend",
                        "Staged action with risks",
                        "Protect Premium, fix Standard margin, test surcharges first"
                  ]
            ]
      },
      {
            "title": "The impact math",
            "headers": [
                  "Item",
                  "Logic",
                  "Value"
            ],
            "rows": [
                  [
                        "Premium revenue change",
                        "$160M - $200M",
                        "-$40M"
                  ],
                  [
                        "Premium contribution lost",
                        "-$40M x 30%",
                        "-$12M"
                  ],
                  [
                        "Standard revenue gained",
                        "$240M - $200M",
                        "+$40M"
                  ],
                  [
                        "Standard gain at old margin",
                        "+$40M x 20%",
                        "+$8M"
                  ],
                  [
                        "Mix effect",
                        "-$12M + $8M",
                        "-$4M"
                  ],
                  [
                        "Standard margin squeeze",
                        "$240M x (20% - 16.7%)",
                        "-$8M"
                  ],
                  [
                        "Total decline",
                        "-$4M + -$8M",
                        "-$12M ($40M to $28M)"
                  ],
                  [
                        "Fix 1: Standard to 19%",
                        "$240M x 2.3 pts",
                        "+$5.5M"
                  ],
                  [
                        "Fix 2: win back Premium",
                        "$20M x 30%",
                        "+$6M"
                  ],
                  [
                        "New profit",
                        "$28M + $5.5M + $6M",
                        "about $39.5M"
                  ],
                  [
                        "With 50% haircut",
                        "$28M + $5.75M",
                        "about $33.8M"
                  ]
            ]
      }
],
    table: {
      "title": "What changes by business type",
      "headers": [
            "Business",
            "Main profit levers",
            "Main risks"
      ],
      "rows": [
            [
                  "Manufacturer",
                  "Price realization, material cost, mix, capacity utilization",
                  "Commodity inputs, imports, trade-down"
            ],
            [
                  "Retailer",
                  "Traffic x conversion x basket, gross margin, shrink, rent",
                  "Markdowns, inventory, labor cost"
            ],
            [
                  "Subscription or software",
                  "New customers, churn, ARPU, cost to serve",
                  "Discounting, churn, rising acquisition cost"
            ],
            [
                  "Bank or lender",
                  "Net interest spread, fees, credit losses, cost to serve",
                  "Rate moves, defaults, regulation"
            ]
      ]
}
  },
  {
    id: "sizing",
    name: "Market Sizing & Estimation",
    tags: ["consulting", "tech", "banking"],
    when: "'How many X are sold / used / needed in Y?' Also used as the first step of market entry and growth cases.",
    example: "US car tires per year: about 280M vehicles x 4 tires / ~3.75 year life is ~300M replacements, plus ~60M original-equipment tires from ~15M new vehicles, so roughly 350 to 400M. More worked examples are in the Guesstimates tab.",
    speak: [
      [
            "C: Clarify",
            "Let me restate: we want the number of car and light-truck tires sold in the US in a year, in units, replacement plus tires on new vehicles. I will leave out retreads and heavy trucks unless you want them included."
      ],
      [
            "L: Lay out",
            "I would pick an approach, list three to five round inputs, calculate with units, and then cross-check with a second method. Tires wear out, so a stock-and-flow approach fits best."
      ],
      [
            "E: Evaluate",
            "About 280M vehicles with 4 tires each is about 1.1B tires in use. A set lasts about 3.75 years, so about 300M replacements a year. About 15M new vehicles add 60M more, so 360M. Adding about 10% for commercial and other vehicles gives about 395M."
      ],
      [
            "A: Assess",
            "As a cross-check, one tire per vehicle per year plus the 60M new-vehicle tires is 340M, or about 375M with the commercial add. That is within 5% of the first method. It is also about 1.2 tires per person per year, which feels right."
      ],
      [
            "R: Recommend",
            "So I would say roughly 350 to 400 million tires a year. The answer is most sensitive to tire lifespan, so if I had data, that is the first input I would verify."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>How many car tires are sold in the US each year?<br/>Cars and light trucks, replacement plus new-vehicle tires, in units\"]\nC --> C2[\"Scope: US, one year, count tires not sets,<br/>leave out retreads and heavy trucks\"]\n\nC2 --> L[\"L: Lay out<br/>1 Pick an approach<br/>2 List 3 to 5 round inputs<br/>3 Calculate with units<br/>4 Cross-check with a second method\"]\n\nL --> E1[\"E: Evaluate<br/>Tires wear out, so use stock and flow:<br/>tires in use / lifespan + tires on new vehicles\"]\nE1 --> E2[\"Inputs: 280M vehicles x 4 tires = 1.1B in use<br/>Lifespan 3.75 years, 15M new vehicles a year\"]\nE2 --> E3[\"1.1B / 3.75 = 300M replacements<br/>+ 15M x 4 = 60M new-vehicle tires = 360M\"]\n\nE3 --> A1[\"A: Assess<br/>+10% commercial and other = about 395M\"]\nA1 --> A2[\"Cross-check per vehicle: 280M x 1 tire a year + 60M = 340M<br/>x 1.1 = about 375M, within 5%\"]\nA2 --> A3[\"About 1.2 tires per person per year: reasonable\"]\n\nA3 --> R[\"R: Recommend<br/>About 350M to 400M tires a year\"]\nR --> R1[\"Most sensitive input: tire lifespan\"]\nR --> R2[\"Next step: check lifespan and vehicle count against industry data\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2,A3 c4;\nclass R,R1,R2 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: pick the approach and cross-check", note: "Method A gives the answer, Method B tests it.", code: "flowchart TD\nQ[\"Which approach fits tires?\"] --> D1{\"Durable good that wears out?\"}\nD1 -- Yes --> SF[\"Method A: stock and flow\"]\nQ --> D2[\"Method B: per-vehicle check\"]\n\nSF --> A1[\"Vehicles 280M x 4 tires = 1.1B in use\"]\nA1 --> A2[\"1.1B / 3.75 years = 300M replacements\"]\nA2 --> A3[\"+ 60M new-vehicle tires = 360M\"]\nA3 --> A4[\"x 1.1 commercial = about 395M\"]\n\nD2 --> B1[\"Vehicles 280M x 1 tire a year<br/>(a set of 4 every 4 years)\"]\nB1 --> B2[\"+ 60M new-vehicle tires = 340M\"]\nB2 --> B3[\"x 1.1 commercial = about 375M\"]\n\nA4 --> X{\"Within 10% of each other?\"}\nB3 --> X\nX -- \"Yes: 395M vs 375M, within 5%\" --> Z[\"Confident: 350M to 400M\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef a fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef b fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,D1,X q;\nclass SF,A1,A2,A3,A4 a;\nclass D2,B1,B2,B3 b;\nclass Z r;" },
      { id: "impact", title: "Impact math: which input moves the answer most", note: "Flex one input at a time to find the biggest swing.", code: "flowchart TD\nB[\"Base answer<br/>about 395M tires a year\"] --> S1[\"Lifespan 5 years, not 3.75<br/>(1.12B / 5 + 60M) x 1.1 = about 312M<br/>-21%\"]\nB --> S2[\"Lifespan 3 years, not 3.75<br/>(1.12B / 3 + 60M) x 1.1 = about 476M<br/>+21%\"]\nB --> S3[\"Only 250M vehicles<br/>(1.0B / 3.75 + 60M) x 1.1 = about 360M<br/>-9%\"]\nB --> S4[\"12M new vehicles, not 15M<br/>(300M + 48M) x 1.1 = about 382M<br/>-3%\"]\n\nS1 --> R[\"Range 310M to 475M on extreme inputs<br/>Plausible range 350M to 400M\"]\nS2 --> R\nS3 --> R\nS4 --> R\nR --> M[\"Say: the answer is most sensitive to lifespan,<br/>so I would check that input first\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef big fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef small fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2 big;\nclass S3,S4 small;\nclass R,M out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the market sizing steps",
            "headers": [
                  "CLEAR step",
                  "Market sizing step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Restate the question, scope: geography, year, units",
                        "US, one year, tires not sets, replacement + new-vehicle"
                  ],
                  [
                        "Lay out",
                        "Choose the approach and say why; list 3 to 5 inputs",
                        "Stock and flow because tires wear out; vehicles, tires per vehicle, lifespan, new vehicles"
                  ],
                  [
                        "Evaluate",
                        "Calculate out loud, units on every line",
                        "1.1B / 3.75 = 300M; + 60M = 360M; x 1.1 = 395M"
                  ],
                  [
                        "Assess",
                        "Sanity check against a second approach or per-person figure",
                        "Per-vehicle method gives 375M; 1.2 tires per person"
                  ],
                  [
                        "Recommend",
                        "State the number, a range and the key driver",
                        "350M to 400M; lifespan matters most"
                  ]
            ]
      },
      {
            "title": "The math",
            "headers": [
                  "Item",
                  "Logic",
                  "Value"
            ],
            "rows": [
                  [
                        "Vehicles on the road",
                        "335M people x 0.85",
                        "about 280M"
                  ],
                  [
                        "Tires in use",
                        "280M x 4",
                        "about 1.1B"
                  ],
                  [
                        "Replacements per year",
                        "1.1B / 3.75 years",
                        "about 300M"
                  ],
                  [
                        "New-vehicle tires",
                        "15M vehicles x 4",
                        "60M"
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
                  ],
                  [
                        "Cross-check",
                        "(280M x 1 + 60M) x 1.1",
                        "about 375M"
                  ]
            ]
      },
      {
            "title": "Sensitivity: which input moves the answer most",
            "headers": [
                  "Input changed",
                  "Calculation",
                  "Result",
                  "Change vs 395M"
            ],
            "rows": [
                  [
                        "Tire lifespan 5 years",
                        "(1.12B / 5 + 60M) x 1.1",
                        "about 312M",
                        "-21%"
                  ],
                  [
                        "Tire lifespan 3 years",
                        "(1.12B / 3 + 60M) x 1.1",
                        "about 476M",
                        "+21%"
                  ],
                  [
                        "250M vehicles",
                        "(1.0B / 3.75 + 60M) x 1.1",
                        "about 360M",
                        "-9%"
                  ],
                  [
                        "12M new vehicles",
                        "(300M + 48M) x 1.1",
                        "about 382M",
                        "-3%"
                  ]
            ]
      }
],
    table: {
      "title": "Which approach to use",
      "headers": [
            "Approach",
            "Formula",
            "Best for",
            "Watch out for"
      ],
      "rows": [
            [
                  "Top-down",
                  "Population x share who use x frequency x price",
                  "Consumer goods and services used by people regularly",
                  "Using the wrong population base; forgetting non-household demand"
            ],
            [
                  "Bottom-up",
                  "Number of sites x capacity per site x utilization",
                  "Locations or capacity you can count (stores, stations, tuners)",
                  "Assuming 100% utilization; missing small sites"
            ],
            [
                  "Stock and flow",
                  "Stock in use / lifespan + new units",
                  "Durable goods (tires, phones, appliances)",
                  "Lifespan is the key swing input; forgetting first-time buyers"
            ]
      ]
}
  },
  {
    id: "entry",
    name: "Market Entry",
    tags: ["consulting", "tech", "banking"],
    when: "A company wants to enter a new geography, segment or product category.",
    example: "Regional grocer launching delivery in a metro: size the households, share and order economics, then payback on a $25M investment. Same numbers as the Grocery Chain case.",
    speak: [
      [
            "C: Clarify",
            "Let me make sure I understand. A regional grocer with 40 stores in a metro of 2M households is considering a $25M investment to launch home delivery. The goal is payback within four years without hurting the stores. Two quick questions: how many households already order groceries online, and what do the economics look like per order?"
      ],
      [
            "L: Lay out",
            "I would look at four things. First, the market, meaning size and the share we can win. Second, our ability to win. Third, how to enter: build, buy or partner. Fourth, the economics, meaning contribution per order, payback and risks. I will start with volume and unit economics because the payback question depends on them."
      ],
      [
            "E: Evaluate",
            "About 20% of 2M households order online, which is 400K. If we win 10%, that is 40K households. At 2 orders a month that is about 960K orders a year. Each $90 basket at 25% margin earns $22.50, less $11 fulfillment and $2 marketing, so $9.50 contribution per order."
      ],
      [
            "A: Assess",
            "960K orders at $9.50 is about $9.1M a year, so $25M pays back in 2.7 years at run-rate and 3.5 to 4 years with a ramp, which is borderline. The big risk is cannibalization: if 20% of delivery orders replace store trips, contribution falls to about $5 an order and payback stretches to about 5 years."
      ],
      [
            "R: Recommend",
            "I would not commit the full $25M yet. I would pilot in 10 to 12 dense stores or through a delivery partner, and scale only if share is near 10%, fulfillment cost is $11 or less per order and cannibalization is around 20% or less. In parallel, protect the stores with membership and pickup options."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Regional grocer, 40 stores, one metro of 2M households<br/>Should it invest $25M to launch home delivery?\"]\nC --> C2[\"Goal: payback within 4 years, no damage to stores<br/>Two national rivals already deliver\"]\n\nC2 --> L[\"L: Lay out<br/>1 Market: size and share<br/>2 Ability to win<br/>3 How to enter: build, buy, partner<br/>4 Economics: per order, payback, risk\"]\n\nL --> E1[\"E: Evaluate<br/>Volume: 2M households x 20% online = 400K<br/>x 10% share = 40K households\"]\nE1 --> E2[\"40K x 2 orders x 12 months = 960K orders a year\"]\nE2 --> E3[\"Per order: $90 x 25% = $22.50 gross profit<br/>- $11 fulfillment - $2 marketing = $9.50\"]\n\nE3 --> A1[\"A: Assess<br/>960K x $9.50 = $9.1M a year\"]\nA1 --> A2[\"Payback $25M / $9.1M = 2.7 years at full run-rate<br/>3.5 to 4 years with a 12-month ramp: borderline\"]\nA2 --> A3[\"Risk: 20% cannibalization cuts it to about $5.00 an order<br/>and payback to about 5 years\"]\n\nA3 --> R[\"R: Recommend<br/>Not yet a full go: pilot first\"]\nR --> R1[\"Pilot in 10 to 12 dense stores or via a delivery partner\"]\nR --> R2[\"Scale only if share is near 10%, cost per order is $11 or less,<br/>cannibalization is about 20% or less\"]\nR --> R3[\"Protect stores: membership and pickup options\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: volume and unit economics", note: "Two paths that meet at the annual contribution.", code: "flowchart TD\nQ[\"Is the market worth entering?\"] --> V[\"Volume\"]\nQ --> U[\"Unit economics\"]\n\nV --> V1[\"2M households in the metro\"]\nV1 --> V2[\"20% order groceries online = 400K\"]\nV2 --> V3[\"We win 10% share = 40K households\"]\nV3 --> V4[\"2 orders a month x 12 = 960K orders a year\"]\n\nU --> U1[\"Basket $90\"]\nU1 --> U2[\"25% gross margin = $22.50\"]\nU2 --> U3[\"- $11 fulfillment - $2 marketing\"]\nU3 --> U4[\"Contribution = $9.50 per order\"]\n\nV4 --> T[\"960K x $9.50 = $9.1M a year<br/>Revenue 960K x $90 = $86M\"]\nU4 --> T\nT --> D{\"Does $25M pay back in 4 years?\"}\nD --> Y[\"Borderline: 2.7 years at run-rate, 3.5 to 4 with ramp\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef v fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef u fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,D q;\nclass V,V1,V2,V3,V4 v;\nclass U,U1,U2,U3,U4 u;\nclass T,Y r;" },
      { id: "impact", title: "Impact math: what breaks the payback", note: "Cannibalization, share and cost per order, one at a time.", code: "flowchart TD\nB[\"Base case<br/>$9.50 per order x 960K = $9.1M a year<br/>Payback 2.7 years at run-rate\"] --> S1[\"Cannibalization 20%<br/>$9.50 - 20% x $22.50 = $5.00 per order<br/>960K x $5.00 = $4.8M a year<br/>Payback about 5 years\"]\nB --> S2[\"Cannibalization 40%<br/>$9.50 - 40% x $22.50 = $0.50 per order<br/>$0.5M a year: no payback\"]\nB --> S3[\"Share only 5%<br/>480K orders x $9.50 = $4.6M a year<br/>Payback about 5.5 years\"]\nB --> S4[\"Fulfillment cost $1 lower per order<br/>+ $1M a year\"]\n\nS1 --> R[\"Pays back only if cannibalization stays low<br/>and share reaches about 10%\"]\nS2 --> R\nS3 --> R\nS4 --> R\nR --> M[\"So pilot first, with clear go and no-go thresholds\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2,S3 bad;\nclass S4 mid;\nclass R,M out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the market entry steps",
            "headers": [
                  "CLEAR step",
                  "Market entry step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Objective, budget, timeline",
                        "$25M, payback within 4 years, protect the store business"
                  ],
                  [
                        "Lay out",
                        "Market, ability to win, how to enter, economics",
                        "Size and share, store network and brand, build vs partner, per-order economics"
                  ],
                  [
                        "Evaluate",
                        "Size the market and the share we can win",
                        "400K online households x 10% = 40K; 960K orders; $9.50 per order"
                  ],
                  [
                        "Assess",
                        "Competition, payback and risk",
                        "$9.1M a year; 2.7 to 4 years; cannibalization is the swing risk"
                  ],
                  [
                        "Recommend",
                        "Go or no-go with conditions",
                        "Pilot first, with thresholds on share, cost per order and cannibalization"
                  ]
            ]
      },
      {
            "title": "The math",
            "headers": [
                  "Item",
                  "Logic",
                  "Value"
            ],
            "rows": [
                  [
                        "Households ordering online",
                        "2M x 20%",
                        "400K"
                  ],
                  [
                        "Households we win",
                        "400K x 10%",
                        "40K"
                  ],
                  [
                        "Orders per year",
                        "40K x 2 x 12",
                        "960K"
                  ],
                  [
                        "Gross profit per order",
                        "$90 x 25%",
                        "$22.50"
                  ],
                  [
                        "Contribution per order",
                        "$22.50 - $11 - $2",
                        "$9.50"
                  ],
                  [
                        "Annual contribution",
                        "960K x $9.50",
                        "$9.1M"
                  ],
                  [
                        "Revenue",
                        "960K x $90",
                        "$86M"
                  ],
                  [
                        "Payback at run-rate",
                        "$25M / $9.1M",
                        "2.7 years"
                  ],
                  [
                        "Payback with 12-month ramp",
                        "",
                        "3.5 to 4 years"
                  ]
            ]
      },
      {
            "title": "Sensitivity: what breaks the payback",
            "headers": [
                  "Change",
                  "Calculation",
                  "Annual contribution",
                  "Payback on $25M"
            ],
            "rows": [
                  [
                        "Cannibalization 20%",
                        "$9.50 - 0.2 x $22.50 = $5.00; 960K x $5.00",
                        "$4.8M a year",
                        "about 5 years"
                  ],
                  [
                        "Cannibalization 40%",
                        "$9.50 - 0.4 x $22.50 = $0.50; 960K x $0.50",
                        "$0.5M a year",
                        "no payback"
                  ],
                  [
                        "Share 5%",
                        "480K x $9.50",
                        "$4.6M a year",
                        "about 5.5 years"
                  ],
                  [
                        "Fulfillment $1 lower",
                        "960K x $1",
                        "+$1M a year",
                        "-"
                  ]
            ]
      }
],
    table: {
      "title": "Entry modes compared",
      "headers": [
            "Mode",
            "Cost",
            "Speed",
            "Control",
            "Main risk"
      ],
      "rows": [
            [
                  "Build (organic)",
                  "Highest",
                  "Slowest",
                  "Full",
                  "Capability gaps, slow ramp"
            ],
            [
                  "Buy (acquire)",
                  "High",
                  "Fast",
                  "Full",
                  "Overpaying, integration"
            ],
            [
                  "Partner / JV / license",
                  "Low",
                  "Fastest",
                  "Shared",
                  "Gives away margin and customer data"
            ]
      ]
}
  },
  {
    id: "growth",
    name: "Growth Strategy",
    tags: ["consulting", "tech"],
    when: "'How do we grow revenue from $X to $Y?' or 'what should the CEO do next?'",
    example: "Amusement park growing revenue from $150M to $180M: size five core levers, risk-adjust them, and defer the 1,000 acres because capacity is not the constraint. Uses the Park case facts; levers are sized on revenue with their own assumptions, so figures differ from the case EBITDA sizing.",
    speak: [
      [
            "C: Clarify",
            "The park has $150M in revenue, 3M visitors and has been flat for two years. The goal is 20% growth, so $30M, within three years, and the board is asking about leasing 1,000 more acres. Two quick questions: how full is the park through the year, and how are prices set today?"
      ],
      [
            "L: Lay out",
            "I would use the four growth directions. First, sell more to existing customers through price, spend per visit and visits. Second, new products for those customers, like premium tiers and events. Third, new markets such as new segments or new land. Fourth, new businesses. I will size each lever in dollars, then rank by impact, effort, risk and fit."
      ],
      [
            "E: Evaluate",
            "Summer yield pricing, raising the gate from $25 to $30 and losing 5% of visitors, adds about $6M. Off-season events lifting visits 15% add about $9M. Raising food and beverage by $2 a visitor adds $6M, premium tiers another $6M, and retail $3M. That is about $30M gross."
      ],
      [
            "A: Assess",
            "Not every lever will land, so I haircut each one: pricing 90%, events 50%, others 70 to 80%. That gives about $22M, roughly 70% of the gap. Importantly, capacity is not the constraint. The park is 90% full on summer weekends but only 10% full off-season, so more land adds cost without adding demand."
      ],
      [
            "R: Recommend",
            "I would grow the core first. In year one, summer yield pricing plus food and retail upsell. In years one and two, premium tiers and an off-season events pilot. Defer the 1,000 acres and revisit in year three only if summer demand still exceeds capacity. A year-three phase two, such as season passes and loyalty, closes the remaining $8M."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Amusement park: $150M revenue, 3M visitors, flat for 2 years<br/>Goal: grow revenue 20% to $180M in 3 years\"]\nC --> C2[\"Gap = $30M. About $15M of capital available<br/>Board is asking about leasing 1,000 more acres\"]\n\nC2 --> L[\"L: Lay out the growth levers (Ansoff)<br/>1 Existing products, existing customers: price, spend, visits<br/>2 New products, existing customers: premium tiers, events<br/>3 New markets: new segments, new land<br/>4 New businesses: diversify or acquire\"]\n\nL --> E1[\"E: Evaluate<br/>Size each lever in dollars\"]\nE1 --> E2[\"Summer pricing +$6.3M, off-season events +$9.0M, F&B +$6.0M<br/>premium tiers +$6.0M, retail +$3.0M = $30.3M gross\"]\nE2 --> E3[\"Rank by impact, effort, risk and fit<br/>Risk-adjust each lever\"]\n\nE3 --> A1[\"A: Assess<br/>Risk-adjusted total about $21.6M = 72% of the gap\"]\nA1 --> A2[\"Capacity is not the constraint: 90% full on summer weekends only,<br/>10% full off-season. New land adds cost, not demand\"]\n\nA2 --> R[\"R: Recommend<br/>Grow the core first, defer the land\"]\nR --> R1[\"Year 1: summer yield pricing, F&B and retail upsell\"]\nR --> R2[\"Year 1 to 2: premium tiers, pilot off-season events\"]\nR --> R3[\"Year 3: revisit land only if summer demand still exceeds capacity\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: size and rank the levers", note: "Five levers sized from the case numbers, then ranked.", code: "flowchart TD\nG[\"Gap: $150M to $180M = $30M\"] --> P[\"Lever 1: Summer yield pricing<br/>1.8M summer visitors, gate $25 to $30<br/>5% fewer visitors: 1.71M x $30 - 1.8M x $25 = +$6.3M\"]\nG --> O[\"Lever 2: Off-season events<br/>1.2M off-season visitors, +15% = 180K<br/>180K x $50 = +$9.0M\"]\nG --> F[\"Lever 3: Food and beverage<br/>$15 to $17 per visitor<br/>3M x $2 = +$6.0M\"]\nG --> T[\"Lever 4: Premium tiers<br/>$1.33 to $3.33 per visitor<br/>3M x $2 = +$6.0M\"]\nG --> RT[\"Lever 5: Retail<br/>$6 to $7 per visitor<br/>3M x $1 = +$3.0M\"]\n\nP --> S[\"Gross total = $30.3M<br/>Covers the gap on paper\"]\nO --> S\nF --> S\nT --> S\nRT --> S\nS --> K{\"Rank by impact, effort, risk, fit\"}\nK --> K1[\"Do first: pricing, F&B, retail<br/>fast, cheap, controllable\"]\nK --> K2[\"Build next: premium tiers, off-season events<br/>bigger or less certain\"]\nK --> K3[\"Defer: new land, diversification<br/>$15M capital, slow, capacity not binding\"]\n\nclassDef g fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef l fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef s fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef k fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclass G g;\nclass P,O,F,T,RT l;\nclass S s;\nclass K,K1,K2,K3 k;" },
      { id: "impact", title: "Impact math: risk-adjust the plan", note: "Haircut each lever, then stress the two weakest.", code: "flowchart TD\nB[\"Gross plan: $30.3M<br/>Gap to close: $30M\"] --> H[\"Risk-adjust each lever<br/>Pricing 90% = $5.7M<br/>F&B 80% = $4.8M<br/>Premium 70% = $4.2M<br/>Off-season 50% = $4.5M<br/>Retail 80% = $2.4M\"]\nH --> T[\"Risk-adjusted total = $21.6M<br/>Revenue $150M to about $172M (+14%)\"]\nT --> G2[\"Remaining gap about $8.4M\"]\n\nG2 --> N1[\"Close it with a year-3 phase 2<br/>season pass and loyalty, more off-season days\"]\nG2 --> N2[\"Or land: $15M for 1,000 acres<br/>only if summer demand still exceeds capacity\"]\n\nB --> S1[\"If off-season events fall flat (0% instead of 50%)<br/>total drops by $4.5M to $17.1M\"]\nB --> S2[\"If summer price hike loses 10% of visitors<br/>1.62M x $30 - 45M = +$3.6M, not $6.3M\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclass B base;\nclass H,T mid;\nclass G2,N1,N2 out;\nclass S1,S2 bad;" }
    ],
    exampleTables: [
      {
      "title": "CLEAR applied to the growth steps",
      "headers": [
            "CLEAR step",
            "Growth step it uses",
            "In this case"
      ],
      "rows": [
            [
                  "Clarify",
                  "Quantify the gap, constraints, timeline",
                  "$150M to $180M = $30M in 3 years; $15M capital"
            ],
            [
                  "Lay out",
                  "Ansoff levers: existing, new products, new markets, new businesses",
                  "Price, spend, visits, premium tiers, events, new land"
            ],
            [
                  "Evaluate",
                  "Size each lever in dollars and rank them",
                  "Five levers, $30.3M gross; ranked by impact, effort, risk, fit"
            ],
            [
                  "Assess",
                  "Risk-adjust and test the capacity constraint",
                  "About $21.6M risk-adjusted; capacity is not binding"
            ],
            [
                  "Recommend",
                  "Sequenced plan with quick wins",
                  "Core levers first, defer the land, phase 2 in year 3"
            ]
      ]
},
      {
      "title": "The math in a table",
      "headers": [
            "Lever",
            "Logic",
            "Gross",
            "Confidence",
            "Risk-adjusted"
      ],
      "rows": [
            [
                  "Summer yield pricing",
                  "1.8M x $25 = $45.0M; 1.71M x $30 = $51.3M",
                  "+$6.3M",
                  "90%",
                  "$5.7M"
            ],
            [
                  "Off-season events",
                  "1.2M x 15% = 180K visitors x $50",
                  "+$9.0M",
                  "50%",
                  "$4.5M"
            ],
            [
                  "Food and beverage",
                  "3M x ($17 - $15)",
                  "+$6.0M",
                  "80%",
                  "$4.8M"
            ],
            [
                  "Premium tiers",
                  "3M x ($3.33 - $1.33)",
                  "+$6.0M",
                  "70%",
                  "$4.2M"
            ],
            [
                  "Retail",
                  "3M x ($7 - $6)",
                  "+$3.0M",
                  "80%",
                  "$2.4M"
            ],
            [
                  "Total",
                  "",
                  "$30.3M",
                  "",
                  "$21.6M"
            ],
            [
                  "Revenue after plan",
                  "$150M + $30.3M / $150M + $21.6M",
                  "$180.3M",
                  "",
                  "$171.6M (+14%)"
            ]
      ]
},
      {
      "title": "Sensitivity",
      "headers": [
            "Change",
            "Calculation",
            "Effect"
      ],
      "rows": [
            [
                  "Off-season events fail",
                  "Remove $4.5M",
                  "Total $17.1M"
            ],
            [
                  "Summer price hike loses 10% of visitors",
                  "1.62M x $30 - $45M",
                  "+$3.6M, not $6.3M"
            ],
            [
                  "Add 1,000 acres",
                  "$15M capital; no demand at 10% off-season fill",
                  "Adds cost, little revenue near term"
            ]
      ]
}
    ],
    table: {
      "title": "Growth levers cheat sheet (Ansoff)",
      "headers": [
            "Direction",
            "Example levers",
            "Typical risk",
            "Park example"
      ],
      "rows": [
            [
                  "Existing products, existing customers",
                  "Win share, raise frequency or basket, raise price",
                  "Low",
                  "Summer yield pricing, F&B and retail upsell"
            ],
            [
                  "New products, existing customers",
                  "Premium tiers, bundles, adjacent products",
                  "Medium",
                  "Fast-pass tiers, off-season events"
            ],
            [
                  "Existing products, new markets",
                  "New geographies, segments, channels",
                  "Medium",
                  "Group and corporate sales, new regions"
            ],
            [
                  "New products, new markets",
                  "Diversify or acquire",
                  "Highest",
                  "Hotel, water park, new land"
            ]
      ]
}
  },
  {
    id: "pricing",
    name: "Pricing",
    tags: ["consulting", "tech", "banking"],
    when: "Price a new product, change an existing price, or respond to a competitor price move.",
    example: "Premium card annual fee: raise $95 to $120, size the fee gain against attrition by segment, then test before rolling out. Numbers are illustrative.",
    speak: [
      [
            "C: Clarify",
            "So we have a premium rewards card with 1M cardholders and a $95 annual fee, and we are considering $120. The goal is profit, not just revenue. Two quick questions: how do engaged and casual customers differ in value, and what do competitors charge?"
      ],
      [
            "L: Lay out",
            "I would use the pricing inputs. The floor is cost to serve plus rewards. The ceiling is the value each segment gets. Then competitors and substitutes, and finally elasticity, meaning how many customers leave and what we lose when they do. I will do this by segment because the answer differs."
      ],
      [
            "E: Evaluate",
            "For each customer who stays we gain $25. For each who leaves we lose their contribution. Engaged customers, 400K of them, leave at about 3% and are worth $150 each, so net about +$6.8M. Casual customers, 600K, leave at about 12% and are worth $40, so net about +$3.5M."
      ],
      [
            "A: Assess",
            "That is about +$10.2M a year on a $95M fee base. But it depends on attrition. The breakeven is about 9% for engaged and 16% for casual customers. If attrition doubles, the plan loses about $4.5M, driven by casual customers."
      ],
      [
            "R: Recommend",
            "I would raise the fee but test it first: an A/B test on 10% of the base for three months. Go if attrition stays under breakeven in each segment. To protect casual users, offer a waiver of the extra $25 above a spend threshold. If the test is weak, raise the fee for engaged customers only."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Premium rewards card: 1M cardholders, $95 annual fee<br/>Should we raise it to $120? Goal: more profit, not just revenue\"]\nC --> C2[\"Two segments: engaged 400K, casual 600K<br/>Competitors charge $95 to $150 for similar rewards\"]\n\nC2 --> L[\"L: Lay out<br/>1 Floor: cost to serve and rewards<br/>2 Ceiling: value to each segment<br/>3 Competition and substitutes<br/>4 Elasticity: who leaves, and what do we lose\"]\n\nL --> E1[\"E: Evaluate<br/>Per customer: +$25 fee, minus lost contribution if they leave\"]\nE1 --> E2[\"Engaged: 3% leave, worth $150 each = +$6.8M<br/>Casual: 12% leave, worth $40 each = +$3.5M\"]\n\nE2 --> A1[\"A: Assess<br/>Total +$10.2M a year on a $95M fee base\"]\nA1 --> A2[\"Breakeven attrition: engaged 9%, casual 16%<br/>If attrition doubles, the plan loses $4.5M\"]\n\nA2 --> R[\"R: Recommend<br/>Raise it, but test and fence it\"]\nR --> R1[\"A/B test on 10% of the base for 3 months\"]\nR --> R2[\"Go if attrition stays under breakeven in each segment\"]\nR --> R3[\"Waive the extra $25 above a spend threshold to protect casual users\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: floor, ceiling and segment math", note: "Value to the customer sets the ceiling; each segment is priced on what it gains and what it costs us when it leaves.", code: "flowchart TD\nQ[\"Can the fee go from $95 to $120?\"] --> F[\"Floor<br/>Cost to serve plus rewards<br/>fee must not fall below this\"]\nQ --> V[\"Ceiling<br/>Value to the customer<br/>engaged earn about $400 in rewards, casual about $120\"]\nQ --> K[\"Competition<br/>$95 to $150 for similar cards\"]\n\nV --> S1[\"Engaged: 400K customers<br/>Value far above $120, so low price sensitivity<br/>3% leave\"]\nV --> S2[\"Casual: 600K customers<br/>Value close to the fee, so high price sensitivity<br/>12% leave\"]\nK --> S1\nK --> S2\n\nS1 --> M1[\"Engaged per customer<br/>Fee gain: 0.97 x $120 - $95 = +$21.40<br/>Lost contribution: 3% x $150 = -$4.50<br/>Net +$16.90 x 400K = +$6.8M\"]\nS2 --> M2[\"Casual per customer<br/>Fee gain: 0.88 x $120 - $95 = +$10.60<br/>Lost contribution: 12% x $40 = -$4.80<br/>Net +$5.80 x 600K = +$3.5M\"]\n\nM1 --> T[\"Total = +$10.2M a year\"]\nM2 --> T\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef f fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef s fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass F,V,K f;\nclass S1,S2 s;\nclass M1,M2,T r;" },
      { id: "impact", title: "Impact math: what breaks the price increase", note: "Attrition and breakeven, one change at a time.", code: "flowchart TD\nB[\"Base case<br/>Engaged 3% leave, casual 12% leave<br/>+$10.2M a year\"] --> S1[\"Attrition doubles<br/>Engaged 6%: +$3.5M<br/>Casual 24%: -$8.0M<br/>Total -$4.5M\"]\nB --> S2[\"Raise engaged only<br/>Casual stays at $95<br/>+$6.8M, low risk\"]\nB --> S3[\"Casual attrition at breakeven<br/>$25 / ($120 + $40) = 15.6%<br/>Net effect $0\"]\nB --> S4[\"Engaged attrition at breakeven<br/>$25 / ($120 + $150) = 9.3%<br/>Net effect $0\"]\n\nS1 --> R[\"The result hinges on casual customers<br/>and how many of them leave\"]\nS3 --> R\nS4 --> R\nS2 --> R\nR --> M[\"So test first, and fence the increase<br/>with a spend-based fee waiver\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1 bad;\nclass S2,S3,S4 mid;\nclass R,M out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the pricing steps",
            "headers": [
                  "CLEAR step",
                  "Pricing step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Goal (profit, share, adoption), segments, competitors",
                        "Profit; engaged 400K and casual 600K; rivals charge $95 to $150"
                  ],
                  [
                        "Lay out",
                        "Floor (cost), ceiling (value), competition, elasticity",
                        "Cost to serve and rewards, value by segment, rival fees, attrition"
                  ],
                  [
                        "Evaluate",
                        "Fee gain minus lost contribution, by segment",
                        "Engaged +$6.8M, casual +$3.5M"
                  ],
                  [
                        "Assess",
                        "Total effect and breakeven attrition",
                        "+$10.2M; breakeven 9% engaged, 16% casual"
                  ],
                  [
                        "Recommend",
                        "Test, fence, roll out",
                        "A/B test, spend-based waiver, thresholds to go"
                  ]
            ]
      },
      {
            "title": "The math in a table",
            "headers": [
                  "Item",
                  "Logic",
                  "Engaged (400K)",
                  "Casual (600K)"
            ],
            "rows": [
                  [
                        "Current fee revenue",
                        "customers x $95",
                        "$38.0M",
                        "$57.0M"
                  ],
                  [
                        "Attrition at $120",
                        "assumed",
                        "3%",
                        "12%"
                  ],
                  [
                        "Fee revenue at $120",
                        "customers x (1 - attrition) x $120",
                        "$46.6M",
                        "$63.4M"
                  ],
                  [
                        "Fee gain",
                        "new - current",
                        "+$8.6M",
                        "+$6.4M"
                  ],
                  [
                        "Contribution per customer",
                        "excl. fee",
                        "$150",
                        "$40"
                  ],
                  [
                        "Lost contribution",
                        "customers x attrition x contribution",
                        "-$1.8M",
                        "-$2.9M"
                  ],
                  [
                        "Net effect",
                        "fee gain - lost contribution",
                        "+$6.8M",
                        "+$3.5M"
                  ],
                  [
                        "Breakeven attrition",
                        "$25 / ($120 + contribution)",
                        "9.3%",
                        "15.6%"
                  ]
            ]
      },
      {
            "title": "Sensitivity",
            "headers": [
                  "Change",
                  "Calculation",
                  "Annual effect"
            ],
            "rows": [
                  [
                        "Attrition doubles (6% and 24%)",
                        "400K x ($25 - 6% x $270) + 600K x ($25 - 24% x $160)",
                        "-$4.5M"
                  ],
                  [
                        "Raise engaged only",
                        "Casual stays at $95",
                        "+$6.8M"
                  ],
                  [
                        "Casual attrition hits breakeven",
                        "$25 / $160",
                        "$0 from casual"
                  ],
                  [
                        "Engaged attrition hits breakeven",
                        "$25 / $270",
                        "$0 from engaged"
                  ],
                  [
                        "5% price cut on a 20% margin",
                        "5 / (20 - 5)",
                        "needs about 33% more volume to break even"
                  ]
            ]
      }
],
    table: {
      "title": "Pricing methods cheat sheet",
      "headers": [
            "Method",
            "Idea",
            "Use when",
            "Watch out for"
      ],
      "rows": [
            [
                  "Cost-plus",
                  "Cost + target margin",
                  "Commodity, regulated, no value data",
                  "Ignores what customers value"
            ],
            [
                  "Value-based",
                  "Price by value vs. best alternative",
                  "Differentiated products",
                  "Needs segment value data"
            ],
            [
                  "Competitor-based",
                  "Match or position vs. rivals",
                  "Mature, transparent markets",
                  "Race to the bottom"
            ],
            [
                  "Penetration",
                  "Low price to win share",
                  "Network effects, scale economics",
                  "Hard to raise later"
            ],
            [
                  "Skimming",
                  "High price, then lower",
                  "New, differentiated launch",
                  "Invites competitors"
            ],
            [
                  "Tiering and fences",
                  "Segment by tier, timing, channel",
                  "Heterogeneous willingness to pay",
                  "Cannibalization between tiers"
            ]
      ]
}
  },
  {
    id: "ma",
    name: "M&A / Acquisition",
    tags: ["consulting", "banking"],
    when: "Should we buy company X? What is it worth to us?",
    example: "Bank buying a payments fintech for $300M: standalone value plus haircut synergies against the price. Same numbers as the Bank Acquires a Payments Fintech case.",
    speak: [
      [
            "C: Clarify",
            "A regional bank with 2M retail customers is considering buying a payments fintech for $300M. The fintech has $40M of revenue growing 35% and is slightly loss-making. The bank wants modern payments and lower processing costs, and needs returns above its cost of capital within five years. Two quick questions: what do comparable companies trade at, and what synergies are realistic?"
      ],
      [
            "L: Lay out",
            "I would look at four things. Strategic fit, meaning buy versus build versus partner. The target's standalone value. Synergies, with a haircut and timing. And finally price against value, including risks. I will start with value because the price question depends on it."
      ],
      [
            "E: Evaluate",
            "Comparable payments companies trade at 6 to 8 times revenue, so $40M is worth $240M to $320M, about $280M at the midpoint. Synergies: insourcing 40% of $12M of processing saves $4.8M a year, and cross-selling to 3% of 2M customers at $60 adds $3.6M. Capitalized, that is about $50M. I would haircut it by half and subtract $8M of integration cost, which leaves about $17M."
      ],
      [
            "A: Assess",
            "So the deal is worth about $297M to the bank, and the ask is $300M. The bank would pay away all the synergies and take on integration and talent risk for no margin of safety. It only works if 35% growth holds."
      ],
      [
            "R: Recommend",
            "I would not pay $300M. I would negotiate to $250M to $275M, or put part of the price in an earn-out tied to growth, and make diligence on engineer retention, customer concentration and regulation a condition. If the seller will not move, I would partner or take a minority stake instead."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Regional bank, 2M retail customers, may buy a payments fintech for $300M<br/>Fintech: $40M revenue, +35% a year, EBITDA -$2M\"]\nC --> C2[\"Why: offer modern payments, cut processing costs<br/>Needs returns above cost of capital within 5 years\"]\n\nC2 --> L[\"L: Lay out<br/>1 Strategic fit: buy, build or partner<br/>2 Standalone value<br/>3 Synergies, with haircut and timing<br/>4 Price vs value, and risks\"]\n\nL --> E1[\"E: Evaluate<br/>Standalone: 6 to 8x revenue = $240M to $320M<br/>Midpoint 7x = $280M\"]\nE1 --> E2[\"Synergies: cost $4.8M + revenue $3.6M = $8.4M a year<br/>Capitalized about $50M\"]\nE2 --> E3[\"Haircut 50% = $25M, less $8M integration = about $17M\"]\n\nE3 --> A1[\"A: Assess<br/>Value to the bank = $280M + $17M = about $297M\"]\nA1 --> A2[\"At $300M the bank pays away all the value<br/>No margin of safety, and growth must hold at 35%\"]\n\nA2 --> R[\"R: Recommend<br/>Do not pay $300M\"]\nR --> R1[\"Negotiate to $250M to $275M, or part earn-out tied to growth\"]\nR --> R2[\"Diligence: engineer retention, customer concentration, regulation\"]\nR --> R3[\"If the seller will not move, partner or take a minority stake\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: standalone value plus synergies", note: "Two paths that meet at value to the bank, then compared with the price.", code: "flowchart TD\nQ[\"What is the fintech worth to us?\"] --> S[\"Standalone value\"]\nQ --> Y[\"Synergies\"]\n\nS --> S1[\"Revenue $40M\"]\nS1 --> S2[\"Comparable multiple 6 to 8x\"]\nS2 --> S3[\"Range $240M to $320M<br/>Midpoint 7x = $280M\"]\n\nY --> Y1[\"Cost: $12M processing x 40% insourced<br/>= $4.8M a year x 8 = about $38M\"]\nY --> Y2[\"Revenue: 2M customers x 3% x $60<br/>= $3.6M a year x 4 = about $14M\"]\nY1 --> Y3[\"Gross synergy value about $50M\"]\nY2 --> Y3\nY3 --> Y4[\"50% haircut = $25M<br/>Less $4M x 2 years integration = $17M\"]\n\nS3 --> T[\"Value to the bank<br/>$280M + $17M = about $297M\"]\nY4 --> T\nT --> D{\"Price vs value\"}\nD --> P[\"At $300M: -$3M, nothing left for the bank<br/>At $275M: +$22M. At $250M: +$47M\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef s fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef y fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,D q;\nclass S,S1,S2,S3 s;\nclass Y,Y1,Y2,Y3,Y4 y;\nclass T,P r;" },
      { id: "impact", title: "Impact math: what happens at the price we pay", note: "Price and scenario sensitivity at the target price.", code: "flowchart TD\nB[\"Base case at a $275M price<br/>Value $297M, so +$22M for the bank\"] --> S1[\"Growth slows, multiple 6x<br/>$240M + $17M = $257M<br/>-$18M\"]\nB --> S2[\"Synergies fail completely<br/>$280M - $8M integration = $272M<br/>-$3M\"]\nB --> S3[\"Synergies fully realized<br/>$280M + $50M - $8M = $322M<br/>+$47M\"]\nB --> S4[\"Pay the full $300M ask<br/>$297M - $300M<br/>-$3M, and worse in either downside\"]\n\nS1 --> R[\"The deal only works at a price below about $275M<br/>or with the seller sharing the growth risk\"]\nS2 --> R\nS4 --> R\nS3 --> R\nR --> M[\"So negotiate down, add an earn-out,<br/>and make diligence a condition\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2,S4 bad;\nclass S3 good;\nclass R,M out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the M&A steps",
            "headers": [
                  "CLEAR step",
                  "M&A step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Strategic rationale, constraints, comparables",
                        "Payments and lower processing cost; return above cost of capital in 5 years; 6 to 8x revenue"
                  ],
                  [
                        "Lay out",
                        "Fit, standalone value, synergies, price and risk",
                        "Buy vs build vs partner; value; synergies; price vs value"
                  ],
                  [
                        "Evaluate",
                        "Standalone value and haircut synergies",
                        "$280M standalone; synergies about $50M, haircut to about $17M net"
                  ],
                  [
                        "Assess",
                        "Value to us vs price",
                        "About $297M vs $300M ask: no margin of safety"
                  ],
                  [
                        "Recommend",
                        "Offer, structure, conditions, alternative",
                        "$250M to $275M, earn-out, diligence, partner if no deal"
                  ]
            ]
      },
      {
            "title": "The math in a table",
            "headers": [
                  "Item",
                  "Logic",
                  "Value"
            ],
            "rows": [
                  [
                        "Standalone value",
                        "$40M x 7 (range 6 to 8x = $240M to $320M)",
                        "$280M"
                  ],
                  [
                        "Cost synergies",
                        "$12M x 40%",
                        "$4.8M a year"
                  ],
                  [
                        "Revenue synergies",
                        "2M x 3% x $60",
                        "$3.6M a year"
                  ],
                  [
                        "Run-rate synergies",
                        "$4.8M + $3.6M",
                        "$8.4M a year"
                  ],
                  [
                        "Capitalized synergies",
                        "$4.8M x 8 + $3.6M x 4",
                        "about $50M"
                  ],
                  [
                        "Risk-adjusted synergies",
                        "50% haircut",
                        "$25M"
                  ],
                  [
                        "Integration cost",
                        "$4M x 2 years",
                        "$8M"
                  ],
                  [
                        "Net synergy value",
                        "$25M - $8M",
                        "about $17M"
                  ],
                  [
                        "Value to the bank",
                        "$280M + $17M",
                        "about $297M"
                  ]
            ]
      },
      {
            "title": "Sensitivity: price paid vs value",
            "headers": [
                  "Price paid",
                  "Value $297M minus price",
                  "Bank keeps"
            ],
            "rows": [
                  [
                        "$300M (ask)",
                        "$297M - $300M",
                        "-$3M"
                  ],
                  [
                        "$275M",
                        "$297M - $275M",
                        "+$22M"
                  ],
                  [
                        "$250M",
                        "$297M - $250M",
                        "+$47M"
                  ]
            ]
      },
      {
            "title": "Scenarios at a $275M price",
            "headers": [
                  "Scenario at $275M",
                  "Calculation",
                  "Result"
            ],
            "rows": [
                  [
                        "Base",
                        "$297M - $275M",
                        "+$22M"
                  ],
                  [
                        "Multiple 6x",
                        "$240M + $17M - $275M",
                        "-$18M"
                  ],
                  [
                        "Synergies fail",
                        "$280M - $8M - $275M",
                        "-$3M"
                  ],
                  [
                        "Synergies fully realized",
                        "$280M + $50M - $8M - $275M",
                        "+$47M"
                  ]
            ]
      }
],
    table: {
      "title": "Synergy and deal cheat sheet",
      "headers": [
            "Item",
            "Examples",
            "How to value",
            "Watch out for"
      ],
      "rows": [
            [
                  "Cost synergies",
                  "Procurement, overlap, insourcing",
                  "Annual saving x multiple",
                  "Realized late; one-off integration cost"
            ],
            [
                  "Revenue synergies",
                  "Cross-sell, new markets",
                  "Lower multiple, bigger haircut",
                  "Often over-counted at full value"
            ],
            [
                  "Standalone value",
                  "Revenue and EBITDA, growth",
                  "Comparable multiples, precedent deals, DCF",
                  "Paying a peak multiple for growth that fades"
            ],
            [
                  "Walk-away price",
                  "Standalone + share of synergies",
                  "Never the full synergy value",
                  "Paying 100% of synergies to the seller"
            ],
            [
                  "Alternatives",
                  "Build, partner, minority stake, earn-out",
                  "Compare cost, speed, control",
                  "Build is slow; partner gives away margin"
            ],
            [
                  "Risks",
                  "Talent, culture, tech, regulation",
                  "Diligence conditions",
                  "Key engineers leaving after the deal"
            ]
      ]
}
  },
  {
    id: "ops",
    name: "Operations & Cost Reduction",
    tags: ["banking", "consulting"],
    when: "Cut cost by X%, improve efficiency, or fix a process.",
    example: "Contact center: $130M cost, 15% target. Size deflection, handle-time and repeat-call levers by call type. Same numbers as the Contact Center Cost Reduction case.",
    speak: [
      [
            "C: Clarify",
            "A retail bank spends $130M a year on its contact center, 8M calls, and the COO wants costs down 15%, about $19.5M, without hurting customer satisfaction. Two quick questions: how do the calls split by type and cost, and is there a digital channel that could take some of them?"
      ],
      [
            "L: Lay out",
            "Cost is volume times cost per call, so I would break it down by call type and look at two kinds of levers. Volume levers: deflect simple calls to digital and fix the root causes of repeat calls. Cost-per-call levers: handle time, automation and staffing. Then I would check one-time cost and the risk to service quality."
      ],
      [
            "E: Evaluate",
            "There are three pools: simple calls cost $22.4M, transactional $48M and complex $60M. If half the simple calls move to the app, that is 1.4M calls at $8, or $11.2M. Cutting transactional handle time by 10% saves $4.8M. Cutting repeat complex calls by 5% saves 100K calls at $30, or $3M."
      ],
      [
            "A: Assess",
            "That totals $19M, or 14.6%, very close to the target, and a small scheduling lever closes the last half million. One-time cost is about $3M, so payback is around two months. The biggest risk is deflection: at 30% instead of 50% savings fall to about $14.5M, so that lever decides whether we hit the target."
      ],
      [
            "R: Recommend",
            "I would sequence three levers: digital deflection first because it is the largest and fastest, then agent tools to cut transactional handle time, then root-cause fixes for repeat calls. I would track satisfaction and first-contact resolution weekly and pause any lever that hurts them, and I would not cut handle time on complex calls."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Retail bank contact center: $130M a year, 8M calls<br/>COO wants costs down 15% without hurting satisfaction\"]\nC --> C2[\"Target = 15% x $130M = about $19.5M<br/>Calls: simple $8, transactional $15, complex $30\"]\n\nC2 --> L[\"L: Lay out<br/>Cost = volume x cost per call, by call type<br/>1 Reduce volume: deflect, fix repeat calls<br/>2 Reduce cost per call: handle time, automation, staffing<br/>3 One-time cost and quality risk\"]\n\nL --> E1[\"E: Evaluate<br/>Pools: simple $22.4M, transactional $48.0M, complex $60.0M\"]\nE1 --> E2[\"Deflect simple calls to the app: 1.4M x $8 = $11.2M<br/>Cut transactional handle time 10%: $4.8M<br/>Cut repeat complex calls: 100K x $30 = $3.0M\"]\n\nE2 --> A1[\"A: Assess<br/>Total $19.0M = 14.6% of cost, close to target\"]\nA1 --> A2[\"One-time cost about $3M: payback in about 2 months<br/>Risk: deflection rate of only 30% cuts savings to about $14.5M\"]\n\nA2 --> R[\"R: Recommend<br/>Three levers in sequence\"]\nR --> R1[\"1 Digital deflection of simple calls: biggest and fastest\"]\nR --> R2[\"2 Agent tools to cut transactional handle time, 3 root-cause fixes\"]\nR --> R3[\"Track satisfaction and first-contact resolution weekly, pause any lever that hurts them\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: pools and levers", note: "Break cost into volume x unit cost by call type, then match one lever to each pool.", code: "flowchart TD\nQ[\"Where does the $130M go,<br/>and what can we cut?\"] --> S[\"Simple calls<br/>2.8M x $8 = $22.4M\"]\nQ --> T[\"Transactional calls<br/>3.2M x $15 = $48.0M\"]\nQ --> X[\"Complex calls<br/>2.0M x $30 = $60.0M\"]\n\nS --> S1[\"Lever: deflect to the app<br/>50% of 2.8M = 1.4M calls x $8<br/>Saves $11.2M\"]\nT --> T1[\"Lever: agent tools, handle time down 10%<br/>$48.0M x 10%<br/>Saves $4.8M\"]\nX --> X1[\"Lever: fix root causes of repeat calls<br/>5% of 2.0M = 100K x $30<br/>Saves $3.0M\"]\n\nS1 --> N[\"Total savings = $19.0M<br/>14.6% of $130M, target is $19.5M\"]\nT1 --> N\nX1 --> N\nN --> G[\"Gap about $0.5M<br/>close with scheduling or a lower-cost site\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef p fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef l fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass S,T,X p;\nclass S1,T1,X1 l;\nclass N,G r;" },
      { id: "impact", title: "Impact math: what if the levers underdeliver", note: "Each lever weakened one at a time, then all together.", code: "flowchart TD\nB[\"Base case<br/>$19.0M saved, 14.6%<br/>One-time cost $3M, payback about 2 months\"] --> S1[\"Deflection only 30%<br/>840K calls x $8 = $6.7M instead of $11.2M<br/>Total $14.5M, 11.2%\"]\nB --> S2[\"Handle time cut only 5%<br/>$2.4M instead of $4.8M<br/>Total $16.6M, 12.8%\"]\nB --> S3[\"Repeat calls cut by half<br/>$1.5M instead of $3.0M<br/>Total $17.5M, 13.5%\"]\nB --> S4[\"All three weaker<br/>$6.7M + $2.4M + $1.5M = $10.6M<br/>8.2%: target missed\"]\n\nS1 --> R[\"Deflection is the lever that decides the answer<br/>it is 59% of the savings\"]\nS2 --> R\nS3 --> R\nS4 --> R\nR --> M[\"So fix the app and IVR hand-off first,<br/>and watch satisfaction before scaling\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2,S3 mid;\nclass S4 bad;\nclass R,M out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the cost reduction steps",
            "headers": [
                  "CLEAR step",
                  "Cost reduction step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Target, constraints, baseline",
                        "15% of $130M = $19.5M; keep satisfaction; 8M calls"
                  ],
                  [
                        "Lay out",
                        "Cost = volume x cost per unit; volume and unit-cost levers",
                        "By call type: deflect, handle time, repeat calls"
                  ],
                  [
                        "Evaluate",
                        "Find the pools and size each lever",
                        "Pools $22.4M, $48.0M, $60.0M; levers $11.2M, $4.8M, $3.0M"
                  ],
                  [
                        "Assess",
                        "Total vs target, one-time cost, quality risk",
                        "$19.0M = 14.6%; $3M one-time; deflection is the swing"
                  ],
                  [
                        "Recommend",
                        "Sequence by payback with guardrails",
                        "Deflect, then tools, then root causes; weekly quality tracking"
                  ]
            ]
      },
      {
            "title": "The math in a table",
            "headers": [
                  "Call type",
                  "Calls",
                  "Cost per call",
                  "Total cost",
                  "Lever",
                  "Savings"
            ],
            "rows": [
                  [
                        "Simple",
                        "2.8M",
                        "$8",
                        "$22.4M",
                        "Deflect 50% to app: 1.4M x $8",
                        "$11.2M"
                  ],
                  [
                        "Transactional",
                        "3.2M",
                        "$15",
                        "$48.0M",
                        "Handle time -10%: $48.0M x 10%",
                        "$4.8M"
                  ],
                  [
                        "Complex",
                        "2.0M",
                        "$30",
                        "$60.0M",
                        "Repeat calls -5%: 100K x $30",
                        "$3.0M"
                  ],
                  [
                        "Total",
                        "8.0M",
                        "-",
                        "$130.4M",
                        "",
                        "$19.0M (14.6%)"
                  ]
            ]
      },
      {
            "title": "Sensitivity",
            "headers": [
                  "Change",
                  "Calculation",
                  "Total savings",
                  "% of cost"
            ],
            "rows": [
                  [
                        "Deflection 30%, not 50%",
                        "2.8M x 30% x $8 = $6.7M (not $11.2M)",
                        "$14.5M",
                        "11.2%"
                  ],
                  [
                        "Handle time cut 5%, not 10%",
                        "$48M x 5% = $2.4M",
                        "$16.6M",
                        "12.8%"
                  ],
                  [
                        "Repeat calls cut by half",
                        "$3.0M / 2 = $1.5M",
                        "$17.5M",
                        "13.5%"
                  ],
                  [
                        "All three weaker",
                        "$6.7M + $2.4M + $1.5M",
                        "$10.6M",
                        "8.2%"
                  ]
            ]
      }
],
    table: {
      "title": "Cost levers cheat sheet",
      "headers": [
            "Lever",
            "Examples",
            "Sizing logic",
            "Watch out for"
      ],
      "rows": [
            [
                  "Reduce volume",
                  "Self-service, deflect to digital, fix repeat contacts",
                  "Calls avoided x cost per call",
                  "Customers who fail in the app call back angrier"
            ],
            [
                  "Reduce handle time",
                  "Agent tools, scripts, better routing",
                  "Cost pool x % time saved",
                  "Rushed calls hurt resolution"
            ],
            [
                  "Automate",
                  "IVR, chatbots, workflow automation",
                  "Tasks automated x cost per task",
                  "Upfront build cost; complex cases still need people"
            ],
            [
                  "Staffing and scheduling",
                  "Match staff to call peaks",
                  "Idle hours x hourly cost",
                  "Burnout and service levels at peaks"
            ],
            [
                  "Sourcing",
                  "Offshore, outsource, lower-cost site",
                  "Rate difference x volume",
                  "Quality, language, regulation"
            ],
            [
                  "One-time cost",
                  "Technology, training, severance",
                  "Investment / annual savings = payback",
                  "Counting savings with no investment"
            ]
      ]
}
  },
  {
    id: "retention",
    name: "Retention & Churn",
    tags: ["tech", "banking", "consulting"],
    when: "Retention is falling, customers leave, or LTV is dropping.",
    example: "E-commerce retention fell 65% to 55% while CAC rose: test old vs new cohorts, segment mix and timing, then size the prize. Same numbers as the E-commerce Retention Decline case.",
    speak: [
      [
            "C: Clarify",
            "Monthly retention fell from 65% to 55% over six months, with 480K active users, and the company spent an extra $500K on acquisition while profit is falling. I will define retention as the share of last month's active users who order this month. Two quick questions: do older customers retain differently than before, and what changed in acquisition?"
      ],
      [
            "L: Lay out",
            "I would look at four things. Who is leaving: old versus new cohorts, value tiers and acquisition channels. When: month one, three and six of the customer lifecycle. Why: customer quality, experience, price or external factors. And so what: size the prize and choose levers. The first test is old versus new cohorts."
      ],
      [
            "E: Evaluate",
            "Customers acquired a year or more ago retain within a point of before, so the product has not broadly broken. The decline is in new cohorts: month-3 retention fell from 72% to 60% while CAC rose from $12 to $18. Low-value users are 48% of users but only 36% of retained users, and support tickets are up 22% in the first 60 days."
      ],
      [
            "A: Assess",
            "So we are paying 50% more for customers who stay less. LTV to CAC fell from 12.5x to 7.2x, still above 3x on average, but marginal channels are worse than the average. Each retention point is 4,800 users, so recovering 5 points to the category average is 24K users, about $0.96M a month at an assumed $40 each."
      ],
      [
            "R: Recommend",
            "My hypothesis is low-intent acquisition from coupon and paid-social channels plus weak early-life onboarding. I would cap channels with low 90-day LTV to CAC and shift to referral, search and email, build a day-14 to day-60 onboarding and second-order program, and fix the top support drivers for new users. I would validate with a holdout test by channel and track cohort curves, LTV to CAC and tickets per new user."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>E-commerce platform: monthly retention fell 65% to 55% in 6 months<br/>480K active users, $500K extra acquisition spend, profit falling\"]\nC --> C2[\"Retention = share of last month's actives who order this month<br/>Category average is about 60%, no new entrant\"]\n\nC2 --> L[\"L: Lay out<br/>1 Who: old vs new cohorts, value tier, channel<br/>2 When: month 1, 3, 6 of the lifecycle<br/>3 Why: customer quality, experience, price, external<br/>4 So what: size the prize, pick levers\"]\n\nL --> E1[\"E: Evaluate<br/>Old cohorts: within 1 point, so the product is not broken\"]\nE1 --> E2[\"New cohorts: month-3 retention 72% to 60%, CAC $12 to $18<br/>Low-value users are 48% of users but 36% of retained users\"]\nE2 --> E3[\"Support tickets +22%, concentrated in the first 60 days\"]\n\nE3 --> A1[\"A: Assess<br/>We pay 50% more for customers who stay less<br/>LTV:CAC fell from 12.5x to 7.2x\"]\nA1 --> A2[\"Prize: each point = 4,800 users<br/>5 points = 24K users x $40 = $0.96M a month\"]\n\nA2 --> R[\"R: Recommend<br/>Fix acquisition quality and early life\"]\nR --> R1[\"Cap channels with low 90-day LTV:CAC, shift to referral, search, email\"]\nR --> R2[\"Day-14 to day-60 onboarding and second-order program\"]\nR --> R3[\"Fix top support drivers for new users, validate with a holdout\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: product problem or customer problem?", note: "The old vs new cohort test comes first; it decides where to dig.", code: "flowchart TD\nQ[\"Is it the product, or the new customers?\"] --> O[\"Old cohorts (12+ months)<br/>Retention within 1 point of six months ago\"]\nQ --> N[\"New cohorts<br/>Month 3: 72% to 60%<br/>CAC: $12 to $18\"]\n\nO --> O1[\"Product has not broadly deteriorated\"]\nN --> N1[\"Segment mix<br/>High 80%, mid 64%, low 42% retention<br/>Low value = 48% of users, 36% of retained\"]\nN --> N2[\"Timing<br/>Curves split by month 3: first order, no habit<br/>Support tickets +22% in first 60 days\"]\n\nN1 --> W[\"Root cause (hypothesis)<br/>Low-intent acquisition from coupon and paid social<br/>plus weak early-life onboarding\"]\nN2 --> W\nO1 --> W\nW --> V[\"Validate: retention and LTV:CAC by channel,<br/>pause test on one suspect channel\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef o fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass O,O1 o;\nclass N,N1,N2 n;\nclass W,V r;" },
      { id: "impact", title: "Impact math: size the prize", note: "Value per recovered user decides how big the prize is.", code: "flowchart TD\nB[\"Size the prize<br/>1 point on 480K users = 4,800 users<br/>5 points back to the 60% category average = 24K users\"] --> V[\"Value per recovered user, assumed $40 a month<br/>24K x $40 = $0.96M a month = about $11.5M a year\"]\nB --> F[\"Full recovery to 65%<br/>10 points = 48K users x $40<br/>= $1.9M a month = about $23M a year\"]\n\nV --> S1[\"If recovered users look like low-value, $12 a month<br/>24K x $12 = $0.29M a month\"]\nV --> S2[\"If they look like mid-value, $75 a month<br/>24K x $75 = $1.8M a month\"]\n\nV --> U[\"Acquisition economics<br/>LTV:CAC 12.5x to 7.2x: still above 3x<br/>but the marginal channels are lower than the average\"]\n\nS1 --> R[\"Prize depends on who we win back<br/>so target mid and high value first\"]\nS2 --> R\nF --> R\nU --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass V,F,U mid;\nclass S1 bad;\nclass S2 good;\nclass R out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the retention steps",
            "headers": [
                  "CLEAR step",
                  "Retention step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Define retention, window, what changed",
                        "Monthly actives who order again; 65% to 55%; extra $500K acquisition"
                  ],
                  [
                        "Lay out",
                        "Who, when, why, so what",
                        "Cohorts, value tiers, channels; month 1, 3, 6; quality, experience, price"
                  ],
                  [
                        "Evaluate",
                        "Old vs new cohorts, segments, timing",
                        "Old flat; new month-3 72% to 60%; low-value mix; support +22%"
                  ],
                  [
                        "Assess",
                        "Economics and size of the prize",
                        "LTV:CAC 12.5x to 7.2x; 5 points = 24K users = $0.96M a month"
                  ],
                  [
                        "Recommend",
                        "Levers with a measurement plan",
                        "Channel mix, onboarding, support fixes, holdout test"
                  ]
            ]
      },
      {
            "title": "The math in a table",
            "headers": [
                  "Cohort",
                  "CAC",
                  "Month 1",
                  "Month 3",
                  "Month 6"
            ],
            "rows": [
                  [
                        "6 months ago",
                        "$12",
                        "85%",
                        "72%",
                        "65%"
                  ],
                  [
                        "3 months ago",
                        "$15",
                        "82%",
                        "68%",
                        "58%"
                  ],
                  [
                        "Current",
                        "$18",
                        "78%",
                        "60%",
                        "-"
                  ]
            ]
      },
      {
            "title": "Cohort retention by acquisition date",
            "headers": [
                  "Segment",
                  "Users",
                  "Retention",
                  "Retained users",
                  "Share of users",
                  "Share of retained"
            ],
            "rows": [
                  [
                        "High value",
                        "50K",
                        "80%",
                        "40.0K",
                        "10%",
                        "15%"
                  ],
                  [
                        "Mid value",
                        "200K",
                        "64%",
                        "128.0K",
                        "42%",
                        "48%"
                  ],
                  [
                        "Low value",
                        "230K",
                        "42%",
                        "96.6K",
                        "48%",
                        "36%"
                  ],
                  [
                        "Total",
                        "480K",
                        "55%",
                        "264.6K",
                        "100%",
                        "100%"
                  ]
            ]
      },
      {
            "title": "Segment mix",
            "headers": [
                  "Item",
                  "Logic",
                  "Value"
            ],
            "rows": [
                  [
                        "CAC change",
                        "$18 / $12 - 1",
                        "+50%"
                  ],
                  [
                        "LTV:CAC six months ago",
                        "$150 / $12",
                        "12.5x"
                  ],
                  [
                        "LTV:CAC now",
                        "$130 / $18",
                        "7.2x"
                  ],
                  [
                        "Users per retention point",
                        "1% x 480K",
                        "4,800"
                  ],
                  [
                        "Prize: 5 points",
                        "5 x 4,800 x $40 a month",
                        "$0.96M a month, about $11.5M a year"
                  ]
            ]
      },
      {
            "title": "Unit economics and prize",
            "headers": [
                  "Recovered users look like",
                  "Revenue per user per month",
                  "24K users (5 points)"
            ],
            "rows": [
                  [
                        "Low-value ($0.8 orders x $15)",
                        "$12",
                        "$0.29M a month"
                  ],
                  [
                        "Assumed blend",
                        "$40",
                        "$0.96M a month"
                  ],
                  [
                        "Mid-value (1.5 orders x $50)",
                        "$75",
                        "$1.8M a month"
                  ],
                  [
                        "Full recovery to 65% (48K users, $40)",
                        "$40",
                        "$1.9M a month"
                  ]
            ]
      }
],
    table: {
      "title": "Retention levers cheat sheet",
      "headers": [
            "Lifecycle stage",
            "Problem signal",
            "Lever",
            "Metric to track"
      ],
      "rows": [
            [
                  "Acquire",
                  "New cohorts retain worse, CAC rising",
                  "Shift to higher-intent channels, cap low LTV:CAC channels",
                  "90-day LTV:CAC by channel"
            ],
            [
                  "Onboard",
                  "Curves split by month 1 to 3, support tickets up early",
                  "Day-14 to day-60 program, second-order incentive, fix support drivers",
                  "Second order within 30 days"
            ],
            [
                  "Engage",
                  "Mid-life drop-off, no habit",
                  "Personalization, loyalty, tiered offers by value",
                  "Orders per month by tier"
            ],
            [
                  "Win back",
                  "Lapsed high and mid-value users",
                  "Targeted offers, only where LTV justifies cost",
                  "Reactivation rate and payback"
            ],
            [
                  "Diagnose first",
                  "Blended averages hide mix",
                  "Old vs new cohort test, then segment, then channel",
                  "Cohort curves"
            ]
      ]
}
  },
  {
    id: "metric",
    name: "Metric Diagnosis (Product)",
    tags: ["tech"],
    when: "'DAU / revenue / conversion dropped X%. What happened?'",
    example: "DAU down 8% in a week, concentrated on Android after release 8.4: cut the data, find the mechanism, then fix and add guardrails. Same numbers as the Social App: DAU Down 8% case.",
    speak: [
      [
            "C: Clarify",
            "DAU of a social app fell 8% week over week. I will treat DAU as users with at least one session in a day. First, is the data reliable: any change to logging or the DAU definition? And can I see the drop by platform, and when it started?"
      ],
      [
            "L: Lay out",
            "I would go in this order. First, is it real: logging, definitions, pipeline. Second, where: platform, app version, geography, new versus existing users. Third, when: line it up with releases and external events. Fourth, why, internal versus external, and then fix and guardrails. I will cut the data before brainstorming causes."
      ],
      [
            "E: Evaluate",
            "The data is clean, so the drop is real. Android is 55% of DAU and fell 14%, iOS and web are flat. 55% times 14% is 7.7 points, so Android explains essentially the whole 8%. It started on Tuesday, the day after release 8.4 reached 100%, it hits existing users only, and push-started sessions fell 35% while organic opens are flat."
      ],
      [
            "A: Assess",
            "So my hypothesis is that release 8.4 broke push delivery on Android. Consistent with that, 14% divided by 35% implies about 40% of Android DAU comes through push. To confirm, I would compare 8.4 against older versions on push delivery rate, token registration, opt-in and push-to-open, and check Android OS versions and concurrent experiments."
      ],
      [
            "R: Recommend",
            "Hotfix or roll back the push component of 8.4, re-register tokens for affected users and watch DAU by version. For prevention, add push delivery and opt-in as guardrail metrics, and use staged rollouts at 1%, 10% and 50% with automatic halts when sessions or notification metrics drop."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Social app: DAU fell 8% week over week<br/>As the analyst: what happened and what do we do?\"]\nC --> C2[\"Metric = users with at least one session a day<br/>Logging and DAU definition unchanged, warehouse matches backend\"]\n\nC2 --> L[\"L: Lay out<br/>1 Is it real: logging, definition, pipeline<br/>2 Where: platform, version, geography, tenure, funnel<br/>3 When: line up with releases and external events<br/>4 Why: internal vs external, then fix and guardrails\"]\n\nL --> E1[\"E: Evaluate<br/>Data is clean, so the drop is real<br/>Android -14%, iOS 0%, web 0%\"]\nE1 --> E2[\"Check: 55% x 14% = 7.7 points of the 8%<br/>So Android explains the whole drop\"]\nE2 --> E3[\"Timing: Tuesday, day after release 8.4 hit 100%<br/>Existing users only, push sessions -35%, organic opens flat\"]\n\nE3 --> A1[\"A: Assess<br/>Hypothesis: release 8.4 broke push delivery on Android\"]\nA1 --> A2[\"Confirm: 8.4 vs older versions on push delivery,<br/>token registration, opt-in, push-to-open\"]\n\nA2 --> R[\"R: Recommend<br/>Fix fast, then add guardrails\"]\nR --> R1[\"Hotfix or roll back the push component of 8.4\"]\nR --> R2[\"Re-register tokens, monitor DAU by version\"]\nR --> R3[\"Staged rollouts with auto-halt on session and push metrics\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: the cut-the-data path", note: "Each cut removes causes; stop when the drop concentrates in one place.", code: "flowchart TD\nQ[\"DAU down 8%: where did it go?\"] --> R1{\"1 Is it real?\"}\nR1 --> R1a[\"No logging or definition change<br/>Backend and warehouse agree: real drop\"]\nR1a --> W{\"2 Where?\"}\nW --> W1[\"Android 55% of DAU: -14%\"]\nW --> W2[\"iOS 35%: 0%<br/>Web 10%: 0%\"]\nW1 --> M[\"Arithmetic: 0.55 x 14% = 7.7 points<br/>Android is the whole drop\"]\nW2 --> M\nM --> T{\"3 When and who?\"}\nT --> T1[\"Started Tuesday, day after release 8.4 at 100%\"]\nT --> T2[\"Existing users open fewer days<br/>New signups normal\"]\nT1 --> Y{\"4 Which channel?\"}\nT2 --> Y\nY --> Y1[\"Push-started sessions -35%<br/>Organic opens flat\"]\nY1 --> H[\"Hypothesis: 8.4 broke push on Android<br/>Implied: 14% / 35% = 40% of Android DAU came via push\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef w fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef t fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,R1,W,T,Y q;\nclass R1a,W1,W2 w;\nclass T1,T2,Y1 t;\nclass M,H r;" },
      { id: "impact", title: "Impact math: cost of the bug and what would change the answer", note: "Illustrative dollar sizing, then findings that would change the diagnosis.", code: "flowchart TD\nB[\"Size the damage (illustrative: 10M DAU, $0.10 per DAU per day)<br/>Lost DAU = 7.7% x 10M = 770K<br/>Revenue = 770K x $0.10 = $77K a day\"] --> D1[\"Hotfix in 3 days<br/>3 x $77K = $0.23M\"]\nB --> D2[\"Fix takes 10 days<br/>10 x $77K = $0.77M\"]\nB --> D3[\"Unfixed for a month<br/>30 x $77K = $2.3M\"]\n\nD1 --> A[\"Speed of the fix is the lever<br/>so roll back first if the hotfix is slow\"]\nD2 --> A\nD3 --> A\n\nB --> X[\"What would change the answer\"]\nX --> X1[\"Old versions also dropped<br/>Not the release: look at outage, seasonality, algorithm change\"]\nX --> X2[\"Only new users dropped<br/>Acquisition problem, not push\"]\nX --> X3[\"All platforms dropped<br/>External or backend cause\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass D1,D2 mid;\nclass D3 bad;\nclass A out;\nclass X,X1,X2,X3 mid;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the diagnosis steps",
            "headers": [
                  "CLEAR step",
                  "Diagnosis step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Define metric, size and timing; data quality",
                        "DAU, -8% week over week; logging and definition unchanged"
                  ],
                  [
                        "Lay out",
                        "Real? Where? When? Why?",
                        "Platform, version, tenure, funnel; releases and external events"
                  ],
                  [
                        "Evaluate",
                        "Cut the data until the drop concentrates",
                        "Android -14%, 55% x 14% = 7.7 points; push sessions -35%"
                  ],
                  [
                        "Assess",
                        "Form a hypothesis and test it",
                        "Release 8.4 broke push; compare 8.4 vs older versions"
                  ],
                  [
                        "Recommend",
                        "Fix, rollback, guardrails",
                        "Hotfix or roll back, re-register tokens, staged rollouts"
                  ]
            ]
      },
      {
            "title": "The math in a table",
            "headers": [
                  "Segment",
                  "Share of DAU",
                  "DAU change",
                  "Contribution to total"
            ],
            "rows": [
                  [
                        "Android",
                        "55%",
                        "-14%",
                        "-7.7 points"
                  ],
                  [
                        "iOS",
                        "35%",
                        "0%",
                        "0"
                  ],
                  [
                        "Web",
                        "10%",
                        "0%",
                        "0"
                  ],
                  [
                        "Total",
                        "100%",
                        "",
                        "-7.7%, about -8%"
                  ]
            ]
      },
      {
            "title": "Derived checks",
            "headers": [
                  "Item",
                  "Logic",
                  "Value"
            ],
            "rows": [
                  [
                        "Share of the drop explained by Android",
                        "7.7 / 7.7",
                        "about 100%"
                  ],
                  [
                        "Implied push share of Android DAU",
                        "14% / 35%",
                        "about 40%"
                  ],
                  [
                        "Lost DAU (illustrative, 10M DAU)",
                        "7.7% x 10M",
                        "770K"
                  ],
                  [
                        "Revenue per day (illustrative, $0.10 per DAU)",
                        "770K x $0.10",
                        "$77K a day"
                  ]
            ]
      },
      {
            "title": "Sensitivity",
            "headers": [
                  "Change",
                  "Calculation",
                  "Result"
            ],
            "rows": [
                  [
                        "Fixed in 3 days",
                        "3 x $77K",
                        "$0.23M lost"
                  ],
                  [
                        "Fixed in 10 days",
                        "10 x $77K",
                        "$0.77M lost"
                  ],
                  [
                        "Unfixed for a month",
                        "30 x $77K",
                        "$2.3M lost"
                  ],
                  [
                        "Old versions also dropped",
                        "Not the release",
                        "Look at outage, seasonality, algorithm change"
                  ],
                  [
                        "Only new users dropped",
                        "Not push",
                        "Acquisition problem"
                  ],
                  [
                        "All platforms dropped",
                        "Not Android-specific",
                        "External or backend cause"
                  ]
            ]
      }
],
    table: {
      "title": "Metric diagnosis checklist",
      "headers": [
            "Question",
            "Cuts to run",
            "Typical causes",
            "Example here"
      ],
      "rows": [
            [
                  "Is it real?",
                  "Logging, definition, pipeline delay, dashboards vs warehouse",
                  "Instrumentation change, late data",
                  "Ruled out: backend matches warehouse"
            ],
            [
                  "Where?",
                  "Platform, app version, geography, new vs existing, funnel step",
                  "Bug, localized outage, channel change",
                  "Android only"
            ],
            [
                  "When?",
                  "Daily timeline vs launches and events",
                  "Release, experiment, holiday, day-of-week",
                  "Day after 8.4 rollout"
            ],
            [
                  "Why: internal",
                  "Release, experiment, notification, ranking change",
                  "Bug, config, notification change",
                  "Push delivery in 8.4"
            ],
            [
                  "Why: external",
                  "Seasonality, competitor, outage, OS change",
                  "Calendar, news, platform policy",
                  "Not indicated"
            ],
            [
                  "So what",
                  "Fix, rollback or experiment; guardrail metric",
                  "Staged rollout with auto-halt",
                  "Push and session guardrails"
            ]
      ]
}
  },
  {
    id: "unit",
    name: "Unit Economics & Credit",
    tags: ["banking", "tech"],
    when: "Card, lending or subscription profitability. 'Is this customer / product profitable?'",
    example: "Card profit per account fell $100 to $80 with credit losses improving: bridge each P&L line, find the margin squeeze, size the levers. Same numbers as the Credit Card Profit Decline case.",
    speak: [
      [
            "C: Clarify",
            "A credit card issuer has 5M accounts, flat, and profit fell from $500M to $400M, even though credit losses improved. Two quick questions: what happened to funding costs and interest rates, and did spend, revolver mix or competitor rewards change?"
      ],
      [
            "L: Lay out",
            "I would build the per-account P&L. Revenue is interest income, interchange and fees. Costs are funding, rewards, credit losses, operating cost and marketing. Then I compare each line year over year and watch for offsetting moves, because a line that improved can hide one that got worse."
      ],
      [
            "E: Evaluate",
            "Profit per account fell from $100 to $80, which times 5M accounts is $100M. Revenue is flat at $520: interest is up $5, fees are down $5. Costs are up $20: funding up $15, rewards up $10, and credit losses down $5. That bridge reconciles: plus 5, minus 5, minus 15, minus 10, plus 5 is minus 20."
      ],
      [
            "A: Assess",
            "So this is a margin squeeze, not a credit problem. Funding costs rose faster than customer yields repriced, because APRs reprice with a lag and promotional balances do not reprice, and the bank matched competitors on rewards. A risk-first story would have missed it. Each $5 per account is worth $25M."
      ],
      [
            "R: Recommend",
            "I would recover margin and leave underwriting alone. First, accelerate APR repricing and manage promo balances, worth $5 to $8 per account. Second, target rewards at low-engagement accounts, $4 to $6. Third, review fees and product tiers, $2 to $3. That is $11 to $17 per account, or $55M to $85M, and I would test by segment with a holdout and watch attrition, NPS and early delinquency."
      ]
],
    exampleChart: "flowchart TD\nC[\"C: Clarify<br/>Credit card issuer: 5M accounts, flat. Profit fell $500M to $400M<br/>Credit losses actually improved. What is going on?\"]\nC --> C2[\"Spend per account and revolver mix stable<br/>Funding cost up, rewards matched to rivals, late-fee income down\"]\n\nC2 --> L[\"L: Lay out<br/>Profit per account = revenue - costs<br/>Revenue: interest, interchange, fees<br/>Cost: funding, rewards, credit loss, operating, marketing<br/>Compare line by line, watch offsetting moves\"]\n\nL --> E1[\"E: Evaluate<br/>Profit per account $100 to $80, so -$20 x 5M = -$100M\"]\nE1 --> E2[\"Revenue flat at $520: interest +5, fees -5<br/>Costs up $20: funding +15, rewards +10, credit loss -5\"]\n\nE2 --> A1[\"A: Assess<br/>Margin squeeze, not a credit problem<br/>Funding cost rose faster than yields repriced\"]\nA1 --> A2[\"Each $5 per account = $25M<br/>Bridge reconciles: +5 -5 -15 -10 +5 = -$20\"]\n\nA2 --> R[\"R: Recommend<br/>Recover margin, keep underwriting unchanged\"]\nR --> R1[\"APR repricing and promo balances: +$5 to +$8\"]\nR --> R2[\"Target rewards at low-engagement accounts: +$4 to +$6\"]\nR --> R3[\"Fee and tier review +$2 to +$3, total +$11 to +$17 = $55M to $85M\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
    exampleCharts: [
      { id: "evaluate", title: "Evaluate: the profit-per-account bridge", note: "Walk each line from $100 to $80, then scale to the portfolio.", code: "flowchart TD\nS[\"Last year<br/>Profit per account $100\"] --> I[\"Interest income<br/>$330 to $335<br/>+$5\"]\nI --> X[\"Interchange<br/>$150 to $150<br/>$0\"]\nX --> F[\"Fees<br/>$40 to $35<br/>-$5\"]\nF --> FU[\"Funding cost<br/>$60 to $75<br/>-$15\"]\nFU --> RW[\"Rewards<br/>$110 to $120<br/>-$10\"]\nRW --> CL[\"Credit losses<br/>$120 to $115<br/>+$5\"]\nCL --> E[\"This year<br/>Profit per account $80\"]\n\nE --> P[\"x 5M accounts = -$100M<br/>Funding -$75M, rewards -$50M, fees -$25M<br/>interest +$25M, credit +$25M\"]\nP --> T[\"Trap: credit improved, so a risk-first story misses the problem<br/>Real driver: funding and rewards, a margin squeeze\"]\n\nclassDef s fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef g fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef b fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef n fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass S,E s;\nclass I,CL g;\nclass F,FU,RW b;\nclass X n;\nclass P,T r;" },
      { id: "impact", title: "Impact math: size the levers and the risks", note: "Three levers sized per account, then two downside risks.", code: "flowchart TD\nB[\"Gap to recover: $20 per account = $100M<br/>Each $5 per account = $25M\"] --> L1[\"APR repricing and promo balances<br/>+$5 to +$8 = $25M to $40M\"]\nB --> L2[\"Rewards for low-engagement accounts<br/>+$4 to +$6 = $20M to $30M\"]\nB --> L3[\"Fee and tier review<br/>+$2 to +$3 = $10M to $15M\"]\n\nL1 --> T[\"Total +$11 to +$17 per account<br/>= $55M to $85M<br/>Profit $91 to $97 per account\"]\nL2 --> T\nL3 --> T\nT --> G[\"Recovers 55% to 85% of the decline<br/>Portfolio profit about $455M to $485M\"]\n\nB --> R1[\"Risk: rewards cuts lose 1% of accounts<br/>50K x $80 profit = $4M\"]\nB --> R2[\"Risk: funding cost rises another $5<br/>-$25M, wipes out one lever\"]\nR1 --> M[\"So test by segment with a holdout<br/>and watch attrition, NPS, early delinquency\"]\nR2 --> M\nG --> M\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass L1,L2,L3 mid;\nclass T,G good;\nclass R1,R2 bad;\nclass M out;" }
    ],
    exampleTables: [
      {
            "title": "CLEAR applied to the unit economics steps",
            "headers": [
                  "CLEAR step",
                  "Unit economics step it uses",
                  "In this case"
            ],
            "rows": [
                  [
                        "Clarify",
                        "Scope: accounts, mix, rates, competition",
                        "5M accounts flat; funding up; rivals raised rewards; credit improved"
                  ],
                  [
                        "Lay out",
                        "Per-account P&L, compare line by line",
                        "Interest, interchange, fees vs funding, rewards, credit loss, opex, marketing"
                  ],
                  [
                        "Evaluate",
                        "Bridge the change and reconcile",
                        "$100 to $80 per account = -$100M; +5 -5 -15 -10 +5"
                  ],
                  [
                        "Assess",
                        "Find the real driver, avoid the trap",
                        "Margin squeeze from funding and rewards, not credit"
                  ],
                  [
                        "Recommend",
                        "Tie each driver to a lever and size it",
                        "Repricing, rewards targeting, fees: +$11 to +$17 = $55M to $85M"
                  ]
            ]
      },
      {
            "title": "The math in a table",
            "headers": [
                  "Line ($ per account a year)",
                  "Last year",
                  "This year",
                  "Change",
                  "Portfolio (x 5M)"
            ],
            "rows": [
                  [
                        "Interest income",
                        "330",
                        "335",
                        "+5",
                        "+$25M"
                  ],
                  [
                        "Interchange",
                        "150",
                        "150",
                        "0",
                        "0"
                  ],
                  [
                        "Fees",
                        "40",
                        "35",
                        "-5",
                        "-$25M"
                  ],
                  [
                        "Total revenue",
                        "520",
                        "520",
                        "0",
                        "0"
                  ],
                  [
                        "Funding cost",
                        "60",
                        "75",
                        "-15",
                        "-$75M"
                  ],
                  [
                        "Rewards",
                        "110",
                        "120",
                        "-10",
                        "-$50M"
                  ],
                  [
                        "Credit losses",
                        "120",
                        "115",
                        "+5",
                        "+$25M"
                  ],
                  [
                        "Operating cost",
                        "100",
                        "100",
                        "0",
                        "0"
                  ],
                  [
                        "Marketing",
                        "30",
                        "30",
                        "0",
                        "0"
                  ],
                  [
                        "Total cost",
                        "420",
                        "440",
                        "-20",
                        "-$100M"
                  ],
                  [
                        "Profit per account",
                        "100",
                        "80",
                        "-20",
                        "-$100M"
                  ]
            ]
      },
      {
            "title": "Lever sizing",
            "headers": [
                  "Lever",
                  "Gain per account",
                  "Portfolio (x 5M)"
            ],
            "rows": [
                  [
                        "APR repricing, promo balances",
                        "+$5 to +$8",
                        "$25M to $40M"
                  ],
                  [
                        "Rewards for low-engagement accounts",
                        "+$4 to +$6",
                        "$20M to $30M"
                  ],
                  [
                        "Fee and tier review",
                        "+$2 to +$3",
                        "$10M to $15M"
                  ],
                  [
                        "Total",
                        "+$11 to +$17",
                        "$55M to $85M"
                  ]
            ]
      },
      {
            "title": "Sensitivity",
            "headers": [
                  "Change",
                  "Calculation",
                  "Effect"
            ],
            "rows": [
                  [
                        "Levers deliver the low end",
                        "$80 + $11",
                        "$91 per account, about $455M"
                  ],
                  [
                        "Levers deliver the high end",
                        "$80 + $17",
                        "$97 per account, about $485M"
                  ],
                  [
                        "Rewards cuts lose 1% of accounts",
                        "50K x $80 profit",
                        "-$4M"
                  ],
                  [
                        "Funding cost rises another $5",
                        "$5 x 5M",
                        "-$25M"
                  ]
            ]
      }
],
    table: {
      "title": "Unit economics cheat sheet",
      "headers": [
            "Line",
            "Formula",
            "Lever",
            "Watch out for"
      ],
      "rows": [
            [
                  "Interest income",
                  "Balance x yield",
                  "Repricing, promo management",
                  "Repricing lag; revolvers vs transactors"
            ],
            [
                  "Interchange",
                  "Spend x rate",
                  "Spend per account, category mix",
                  "Regulation of rates"
            ],
            [
                  "Fees",
                  "Count x fee",
                  "Fee design, value-based tiers",
                  "Regulatory limits on late fees"
            ],
            [
                  "Funding cost",
                  "Balances x cost of funds",
                  "Deposit mix, hedging",
                  "Rises faster than yields reprice"
            ],
            [
                  "Credit loss",
                  "PD x LGD x EAD",
                  "Underwriting, collections, line management",
                  "One good year is not a trend"
            ],
            [
                  "Rewards",
                  "Spend x reward rate x redemption",
                  "Tier by engagement, rebalance categories",
                  "Competitor response and attrition"
            ],
            [
                  "Lifetime view",
                  "LTV = profit per period x expected life; LTV:CAC and payback",
                  "Retention, CAC, cross-sell",
                  "Averaging revolvers and transactors"
            ]
      ]
}
  },
  {
    id: "product",
    name: "Product Deep-Dive",
    tags: ["banking", "tech"],
    when: "The interviewer shows you a product, feature or app screen and asks what to do with it. Common at banks and fintechs: a card, a savings account, a loan, or a mobile app feature.",
    example: "The Digital Feature case run through CLEAR: a card issuer's spending-insights feature is at 25% adoption and the team wants $2M to reach 40%. Adopters spend $1,600 more than non-adopters, but a randomized holdout shows the real effect is much smaller. Full case in the Cases section.",
    speak: [
      ["C: Clarify", "Let me make sure I understand. The bank has a spending-insights feature at 25% adoption, and the team wants $2M to push it to 40%, with payback under 18 months. Two quick questions: how was it launched, and what does one customer earn?"],
      ["L: Lay out", "I would look at four things. First, is the evidence causal. Second, the value per customer. Third, the math for scaling it. Fourth, the risks. I will start with causality, because the team's evidence compares adopters with non-adopters."],
      ["E: Evaluate", "Adopters spend $1,600 more, but people who choose a budgeting feature were already more careful with money. The random holdout shows the real effect is $45 per offered customer. Only 25% adopted, so that is about $180 per adopter. The raw gap overstated the effect about 9 times."],
      ["A: Assess", "Across 4M customers the feature adds about $6.6M a year from spend, retention and fewer calls, or $5.1M after running costs. Each adoption point is worth about $0.27M, so 15 more points is about $4M. New adopters are probably less engaged, so I would haircut that by half to $2M a year. That pays back the $2M in about 12 months."],
      ["R: Recommend", "Yes, but in stages. Test the promotion on half of the non-adopters for 8 weeks and scale only if each new adopter delivers at least half of today's benefit. The main risk is that new adopters respond less, so I would keep the original holdout running and watch complaints and delinquency."]
    ],
    exampleChart: `flowchart TD
C["C: Clarify<br/>Decide on a $2M promotion to lift adoption from 25% to 40%<br/>Payback under 18 months"]
C --> C2["Facts: 4M app customers, random 5% holdout"]

C2 --> L["L: Lay out<br/>1 Is the evidence causal?<br/>2 Value per customer<br/>3 Scale-up math<br/>4 Risks"]

L --> E1["E: Evaluate<br/>Naive gap: adopters spend $10,200 vs $8,600 = +$1,600"]
E1 --> E2["Holdout: +$45 per offered customer<br/>= +$180 per adopter (÷ 25% adoption)"]
E2 --> E3["Naive view overstated the effect about 9x"]

E3 --> A1["A: Assess<br/>Spend $3.6M + Retention $1.6M + Calls $1.44M = $6.6M a year"]
A1 --> A2["Less run cost $1.5M = $5.1M net a year"]
A2 --> A3["+15 adoption points x $0.27M = $4.0M<br/>50% haircut = $2.0M a year"]
A3 --> A4["Payback = $2M / $2M per year = 12 months"]

A4 --> R["R: Recommend<br/>Yes, in stages"]
R --> R1["Test on half of non-adopters for 8 weeks"]
R --> R2["Scale if benefit per new adopter is at least half of today's"]
R --> R3["Guardrails: complaints, delinquency, opt-outs"]

classDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;
classDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;
classDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;
class C,C2 c1;
class L c2;
class E1,E2,E3 c3;
class A1,A2,A3,A4 c4;
class R,R1,R2,R3 c5;`,
    exampleCharts: [
      {
        id: "evaluate",
        title: "Evaluate: naive view vs. holdout",
        note: "Why the raw gap between adopters and non-adopters is misleading.",
        code: `flowchart TD
Q["Does the feature cause more spend?"]
Q --> N["Naive view: compare adopters with non-adopters"]
Q --> H["Holdout view: compare offered vs not offered"]

N --> N1["Adopters: $10,200"]
N --> N2["Non-adopters: $8,600"]
N1 --> N3["Gap = +$1,600"]
N2 --> N3
N3 --> N4["Problem: adopters were already more engaged (selection bias)"]

H --> H1["Offered: $9,045"]
H --> H2["Not offered: $9,000"]
H1 --> H3["Gap = +$45 per offered customer"]
H2 --> H3
H3 --> H4["Only 25% adopted: $45 ÷ 25% = +$180 per adopter"]

N3 --> X["$1,600 ÷ $180 = naive view overstated the effect about 9x"]
H4 --> X
X --> Z["Use the holdout number"]

classDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef naive fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;
classDef hold fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;
classDef result fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
class Q q;
class N,N1,N2,N3,N4 naive;
class H,H1,H2,H3,H4 hold;
class X,Z result;`
      },
      {
        id: "impact",
        title: "Impact math: from three sources to the decision",
        note: "Each benefit source, the net, the scale-up, the haircut and the payback check.",
        code: `flowchart TD
S1["Extra spend<br/>$45 x 4M = $180M x 2% = $3.6M"] --> T["Total benefit<br/>$6.64M a year"]
S2["Retention<br/>0.1 pt x 4M = 4,000 accounts x $400 = $1.6M"] --> T
S3["Fewer calls<br/>4M x 1.2 x 3% = 144K calls x $10 = $1.44M"] --> T

T --> N["Net of $1.5M run cost<br/>= $5.1M a year"]
N --> P["Per adoption point<br/>$6.64M ÷ 25 = $0.27M"]
P --> G["Scale-up<br/>+15 points x $0.27M = $4.0M"]
G --> H["50% haircut<br/>= $2.0M a year"]
H --> PB["Payback<br/>$2M ÷ $2M per year = 12 months"]
PB --> D{"Under the 18-month bar?"}
D --> Y["Yes: go, in stages"]

classDef src fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef dec fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;
class S1,S2,S3 src;
class T,N,P,G,H,PB calc;
class D dec;
class Y out;`
      }
    ],
    exampleTables: [
      {
        title: "CLEAR applied to the product deep-dive steps",
        headers: ["CLEAR step", "Product deep-dive step it uses", "In this case"],
        rows: [
          ["Clarify", "Restate the product, ask the objective", "A free feature costing $1.5M a year. The decision is a $2M promotion, with payback under 18 months."],
          ["Lay out", "Customer, economics, measurement, risk", "Causal evidence, value per customer, scale-up math, risks"],
          ["Evaluate", "Measure with a test, not adopters vs. non-adopters", "The holdout shows +$180 per adopter, not the naive +$1,600"],
          ["Assess", "Convert the effect to dollars", "$6.6M a year benefit, $5.1M net, about $2.0M a year from scaling after a haircut"],
          ["Recommend", "Staged action with guardrails", "Yes, test on half of non-adopters first"]
        ]
      },
      {
        title: "The impact math",
        headers: ["Source", "Logic", "Value"],
        rows: [
          ["Extra spend", "$45 x 4M = $180M spend x 2%", "$3.6M"],
          ["Retention", "0.1 pt x 4M = 4,000 accounts x $400", "$1.6M"],
          ["Fewer calls", "4M x 1.2 calls x 3% = 144K calls x $10", "$1.44M"],
          ["Total benefit", "", "$6.6M a year"],
          ["Less running cost", "", "-$1.5M"],
          ["Net", "", "$5.1M a year"],
          ["Scale-up (+15 points)", "$6.64M / 25 = $0.27M per point x 15", "$4.0M"],
          ["After 50% haircut", "New adopters are less engaged", "$2.0M a year"],
          ["Payback", "$2M / $2M per year", "12 months"]
        ]
      }
    ],
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
