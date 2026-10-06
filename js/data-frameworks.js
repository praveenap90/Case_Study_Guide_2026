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
    "id": "profitability",
    "name": "Profitability",
    "tags": [
      "consulting",
      "banking",
      "tech"
    ],
    "when": "Profit is falling, below target, or the client wants to raise it. Triggers: 'profits are down', 'margins are shrinking', 'how do we increase profit?'",
    "example": "Revenue is flat at $400M but profit fell from $40M to $28M. The decline splits into mix (-$4M) and margin compression (-$8M). Same numbers as the Industrial Pump Maker: Profit Down case.",
    "speak": [
      [
        "C: Clarify",
        "So a pump maker has flat sales of $400M, but profit fell from $40M to $28M in two years. We want to know why and how to win it back. I would like to get back toward $40M in 18 months. Can I ask about the two product lines, prices, margins and what we can spend? If I do not get answers, I will assume."
      ],
      [
        "L: Lay out",
        "I will ask two questions. First, where did the $12M go? Second, what can win it back? Since sales are flat and fixed costs did not change, I will split the drop by product line."
      ],
      [
        "E: Evaluate",
        "Premium sales fell $40M at a 30% margin, so that is minus $12M. Standard sales grew $40M at 20%, so that is plus $8M. Together the mix costs $4M. Then Standard's margin slid from 20% to 16.7%, which on $240M is minus $8M. That adds up to $12M. For fixes, I see Standard margin back to 19% for $5.6M, winning back $20M of Premium for $6.0M, and 5% off fixed cost for $3M. That is $14.6M."
      ],
      [
        "A: Assess",
        "So two thirds of the drop is Standard margin, mostly steel and import pressure. I would not count on all of the plan. At 70% we get $10.2M and profit is about $38.2M. The one-time cost is $6M, so it pays back in about 7 months. To reach $40M we would need 82% of the plan."
      ],
      [
        "R: Recommend",
        "I recommend we fix Standard first and win back Premium in parallel. Two reasons: each $10M of Premium earns $3M against under $2M for Standard, and the Standard fix is fast and the largest. The risks are customer pushback on surcharges and steel rising again, so I would stage it and track each fix monthly. As an alternative, if imports keep squeezing Standard, I would shrink it and put capacity into Premium."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Pump maker: sales flat at $400M<br/>Profit fell from $40M to $28M<br/>Why, and how do we fix it?\"]\nC --> L[\"L: Lay out<br/>1 Where did the $12M go?<br/>2 What can win it back?\"]\nL --> E[\"E: Evaluate<br/>Split the drop by product line\"]\nE --> E1[\"Where it went<br/>Premium volume and mix: -$4M<br/>Standard margin 20% to 16.7%: -$8M<br/>Total -$12M\"]\nE --> E2[\"Fixes<br/>Standard margin to 19%: +$5.6M<br/>Win back $20M Premium: +$6.0M<br/>Fixed cost 5%: +$3.0M = $14.6M\"]\nE --> E3[\"Reality check<br/>Expect 70% = $10.2M<br/>Profit about $38.2M<br/>Costs $6M one time\"]\nE1 --> A[\"A: Assess<br/>Two thirds is Standard margin<br/>Fixes pay back in 7 months<br/>$40M needs 82% of the plan\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Fix Standard price and steel cost, win back Premium.<br/>Go in stages and track each fix every month\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Where we are<br/>Profit fell $40M to $28M<br/>= <b>$12M lost</b>\"]\nA --> B[\"2 Premium<br/>Sales $200M to $160M<br/>-$40M x 30% = <b>-$12M</b>\"]\nA --> C[\"3 Standard sales grew<br/>$200M to $240M<br/>+$40M x 20% = <b>+$8M</b>\"]\nB --> M[\"4 Mix effect<br/>-$12M + $8M = <b>-$4M</b>\"]\nC --> M\nA --> D[\"5 Standard margin<br/>$40M / $240M = 16.7%, was 20%<br/>$240M x -3.3% = <b>-$8M</b>\"]\nM --> T[\"6 Check: -$4M + -$8M<br/>= <b>-$12M</b>\"]\nD --> T\nT --> F1[\"7 Fix Standard<br/>$240M x 19% = $45.6M<br/>$45.6M - $40M = <b>+$5.6M</b>\"]\nT --> F2[\"8 Win back Premium<br/>$20M x 30% = <b>+$6.0M</b>\"]\nT --> F3[\"9 Fixed costs<br/>$60M x 5% = <b>+$3.0M</b>\"]\nF1 --> G[\"10 Total plan $14.6M<br/>x 70% we get = <b>$10.2M</b><br/>$28M + $10.2M = <b>$38.2M</b>\"]\nF2 --> G\nF3 --> G\nG --> H1[\"Break-even for $40M<br/>$12M / $14.6M = 82% of plan\"]\nG --> H2[\"Payback of $6M cost<br/>$6M / $10.2M = 7 months\"]\nG --> H3[\"If steel rises 8% again<br/>-$7.7M, profit falls to $30.5M\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C,M n1;\nclass D,T n2;\nclass F1,F2,F3 n3;\nclass G n4;\nclass H1,H2,H3 n1;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the problem back in your own words. Ask for the goal, the timeline and the data. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "Profit measure, target, margin by line, steel cost, one-time budget"
          ],
          [
            "L Lay out",
            "Say your two questions before you calculate",
            "Shows structure and lets the interviewer steer",
            "Where did the $12M go? What can win it back?"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "Premium and mix -$4M, Standard margin -$8M, fixes $14.6M"
          ],
          [
            "A Assess",
            "Say what the numbers mean: what you will really get, payback, break-even",
            "Turns numbers into a business view",
            "70% of the plan is $10.2M, profit about $38.2M, payback 7 months"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Fix Standard price and steel first, win back Premium. Alternative: shrink Standard"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How much profit did we lose?",
            "$40M - $28M",
            "$12M"
          ],
          [
            "2",
            "What did the Premium drop cost?",
            "Sales fell $40M. $40M x 30%",
            "-$12M"
          ],
          [
            "3",
            "What did Standard growth add?",
            "Sales grew $40M. $40M x 20% (the old margin)",
            "+$8M, so mix is -$4M"
          ],
          [
            "4",
            "What did the Standard margin slide cost?",
            "$40M / $240M = 16.7%. $240M x (16.7% - 20%)",
            "-$8M"
          ],
          [
            "5",
            "What can the fixes earn?",
            "$5.6M (Standard) + $6.0M (Premium) + $3.0M (fixed cost)",
            "$14.6M"
          ],
          [
            "6",
            "What will we really get?",
            "$14.6M x 70% = $10.2M. $28M + $10.2M",
            "Profit about $38.2M"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Profit after fixes",
          "What it tells you"
        ],
        "rows": [
          [
            "We get 100% of the plan",
            "$42.6M",
            "Above the old $40M. Good, but do not promise it."
          ],
          [
            "We get only 50% of the plan",
            "$35.3M",
            "Close to the $36M floor. Plan for this case too."
          ],
          [
            "Imports stop us fixing Standard ($0 from that idea)",
            "$34.3M",
            "($6.0M + $3.0M) x 70% = $6.3M added. Premium and costs must carry it."
          ],
          [
            "We win back only half of the Premium sales ($10M)",
            "$36.1M",
            "Just above the $36M floor. Premium win-back is the key driver."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What Standard margin m gives Standard contribution of $45.6M?",
            "$240M x m = $45.6M",
            "m = 45.6 / 240 = 19%"
          ],
          [
            "If only Premium is won back, how many Premium sales x are needed to get back to $40M?",
            "$28M + 30% x x = $40M",
            "0.3x = 12, so x = $40M, which is all of the $40M lost"
          ],
          [
            "What share r of the $14.6M plan do we need to get back to $40M?",
            "14.6 x r = 12",
            "r = 12 / 14.6 = 82%"
          ],
          [
            "If volume stays the same, how much must the Standard price rise to get back to a 20% margin?",
            "Cost is $200M. Price p: (p - 200) / p = 20%",
            "p = 200 / 0.8 = $250M, up 4.2% from $240M"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Customers push back on surcharges",
            "Standard buyers can switch to imports",
            "Pass on steel with a clear index, and give discounts to loyal customers"
          ],
          [
            "Steel keeps rising",
            "Another 8% rise would cost about $7.7M",
            "Sign steel contracts early and find a second supplier"
          ],
          [
            "Premium sales do not come back",
            "Customers may like the cheaper catalog pumps",
            "Talk to lost customers and offer a better entry-level Premium pump"
          ],
          [
            "Cost cuts hurt service",
            "Cutting too deep slows delivery and quality",
            "Cut in stages and watch on-time delivery"
          ],
          [
            "Plan delivers less than hoped",
            "Most plans fall short",
            "Use 70% as the base. Track each fix every month"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Contribution",
            "Revenue minus variable costs. It pays for fixed costs and then becomes profit"
          ],
          [
            "Fixed cost",
            "A cost that stays the same when sales move, like the $60M of plant and staff"
          ],
          [
            "Margin",
            "Contribution divided by revenue. Premium is 30%"
          ],
          [
            "Mix effect",
            "Profit change from selling more of a low-margin product and less of a high-margin one"
          ],
          [
            "Price pass-through",
            "Raising prices to cover a higher cost, such as steel"
          ],
          [
            "Realization (haircut)",
            "The share of a plan that we actually expect to get, such as 70%"
          ],
          [
            "Payback",
            "Months it takes for the extra profit to repay the one-time cost"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Blaming one thing like steel without sizing it",
            "Split the $12M into mix and margin, and give each a dollar value."
          ],
          [
            "Using one blended margin for the whole company",
            "Each line has its own margin. Premium is 30% and Standard is 16.7%."
          ],
          [
            "Presenting 100% of the plan as the result",
            "Always haircut, for example to 70%, and show a range."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ],
          [
            "Hiding the math",
            "Say each step out loud, with units, and check that the parts add up to $12M."
          ],
          [
            "Forgetting to say assumptions",
            "Say 'I will assume...' and invite correction."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "sizing",
    "name": "Market Sizing & Estimation",
    "tags": [
      "consulting",
      "tech",
      "banking"
    ],
    "when": "'How many X are sold / used / needed in Y?' Also used as the first step of market entry and growth cases.",
    "example": "US car tires per year: about 280M vehicles x 4 tires / 3.75 year life gives about 300M replacements, plus 60M new-vehicle tires, so roughly 350M to 400M. More worked examples are in the Guesstimates tab.",
    "speak": [
      [
        "C: Clarify",
        "So we want to know how many car and light-truck tires are sold in the US in one year, in units. I will count replacement tires and tires on new vehicles. I will leave out retreads and heavy trucks unless you want them. Is that fine?"
      ],
      [
        "L: Lay out",
        "Tires wear out, so I will use stock and flow. I need four inputs: vehicles on the road, tires per vehicle, how long a tire lasts, and new vehicles sold each year."
      ],
      [
        "E: Evaluate",
        "About 280M vehicles with 4 tires each is about 1.1B tires in use. A set lasts about 3.75 years, so about 300M replacements a year. About 15M new vehicles add 60M tires. That is 360M. I will add 10% for commercial and other vehicles, which gives about 395M."
      ],
      [
        "A: Assess",
        "Let me check another way. One tire per vehicle per year, plus the 60M new-vehicle tires, is 340M. With the 10% add, that is about 375M. It is within 5% of the first answer. It is also about 1.2 tires per person per year, which feels right."
      ],
      [
        "R: Recommend",
        "I would say about 350M to 400M tires a year. Two reasons: both methods agree, and the per-person number is sensible. The main risk is tire lifespan. At 5 years the answer drops to about 312M. So I would check lifespan first. If you want a different view, I could size it top-down from households, and see if it lands in the same range."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>How many car tires are sold<br/>in the US each year?<br/>Cars and light trucks, in units\"]\nC --> L[\"L: Lay out<br/>Tires wear out, so use stock and flow<br/>Inputs: vehicles, tires each,<br/>lifespan, new vehicles\"]\nL --> E[\"E: Evaluate<br/>Do the math in short steps\"]\nE --> E1[\"Tires in use<br/>280M vehicles x 4 = 1.1B\"]\nE --> E2[\"Replacements<br/>1.1B / 3.75 years = 300M\"]\nE --> E3[\"New-vehicle tires<br/>15M x 4 = 60M<br/>Total 360M, +10% = 395M\"]\nE1 --> A[\"A: Assess<br/>Cross-check: 280M x 1 + 60M<br/>x 1.1 = 375M, within 5%<br/>About 1.2 tires per person\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>About 350M to 400M tires a year<br/>Lifespan is the input to check first\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Vehicles on the road<br/>335M people x 0.85<br/>= <b>about 280M</b>\"]\nA --> B[\"2 Tires in use<br/>280M x 4 tires<br/>= <b>1.1B</b>\"]\nA --> C[\"3 Tire life<br/>45,000 miles / 12,000 a year<br/>= <b>3.75 years</b>\"]\nB --> D[\"4 Replacements a year<br/>1.1B / 3.75<br/>= <b>300M</b>\"]\nC --> D\nA --> N[\"5 New-vehicle tires<br/>15M x 4<br/>= <b>60M</b>\"]\nD --> S[\"6 Subtotal<br/>300M + 60M = <b>360M</b>\"]\nN --> S\nS --> T[\"7 Add 10% commercial<br/>360M x 1.1<br/>= <b>about 395M</b>\"]\nA --> X[\"8 Second method<br/>(280M x 1 + 60M) x 1.1<br/>= <b>about 375M</b>\"]\nT --> K1[\"Check: 395M vs 375M<br/>within 5%\"]\nX --> K1\nT --> K2[\"Check: 395M / 335M people<br/>= 1.2 tires each, reasonable\"]\nT --> K3[\"Check: lifespan 5 years<br/>gives 312M, so lifespan<br/>moves the answer most\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C,N n1;\nclass D,S n2;\nclass T,X n3;\nclass K1,K2,K3 n4;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the question back. Fix the scope: place, time, units. Ask what to include and leave out",
            "A guess means nothing until everyone agrees what is being counted",
            "US, one year, count tires not sets, cars and light trucks"
          ],
          [
            "L Lay out",
            "Pick one approach and say why. List 3 to 5 round inputs",
            "Shows structure, and lets the interviewer steer you",
            "Tires wear out, so stock and flow: vehicles, 4 tires, lifespan, new vehicles"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps. Put units on every line",
            "The interviewer follows your logic, not just the answer",
            "1.1B / 3.75 = 300M. Add 60M new. Add 10%"
          ],
          [
            "A Assess",
            "Check the answer with a second method or a per-person figure",
            "A cross-check shows the number is not a fluke",
            "Second method gives 375M. About 1.2 tires per person"
          ],
          [
            "R Recommend",
            "Give the number first, then a range, the key driver and the next step",
            "You must commit to an answer and explain it",
            "350M to 400M. Check tire lifespan first"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How many vehicles are on the road?",
            "335M people x 0.85 vehicles each",
            "about 280M"
          ],
          [
            "2",
            "How many tires are in use?",
            "280M x 4 tires",
            "about 1.1B"
          ],
          [
            "3",
            "How long does a tire last?",
            "45,000 miles / 12,000 miles a year",
            "3.75 years"
          ],
          [
            "4",
            "How many replacements a year?",
            "1.1B / 3.75 years",
            "about 300M"
          ],
          [
            "5",
            "How many tires go on new vehicles?",
            "15M new vehicles x 4",
            "60M"
          ],
          [
            "6",
            "What is the total, with commercial vehicles?",
            "(300M + 60M) x 1.1",
            "about 395M"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Total tires a year",
          "What it tells you"
        ],
        "rows": [
          [
            "Tires last 5 years, not 3.75",
            "about 312M (-21%)",
            "(1.12B / 5 + 60M) x 1.1. Lifespan moves the answer most."
          ],
          [
            "Tires last 3 years, not 3.75",
            "about 477M (+21%)",
            "(1.12B / 3 + 60M) x 1.1. A short life means many more sales."
          ],
          [
            "Only 250M vehicles, not 280M",
            "about 359M (-9%)",
            "(1.0B / 3.75 + 60M) x 1.1. Vehicle count matters, but less."
          ],
          [
            "12M new vehicles, not 15M",
            "about 381M (-3%)",
            "(300M + 48M) x 1.1. New vehicles matter little."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What tire life L gives 300M replacements a year?",
            "1.12B / L = 300M",
            "L = 1.12B / 300M = 3.73 years"
          ],
          [
            "How many vehicles V give a total of 400M tires if each tire lasts 4 years?",
            "(V x 4 / 4 + 60M) x 1.1 = 400M",
            "V + 60M = 364M, so V = about 300M"
          ],
          [
            "If the total is 395M and there are 335M people, how many tires t per person?",
            "335M x t = 395M",
            "t = 395 / 335 = 1.2 tires a year"
          ],
          [
            "If a tire lasts 3.75 years, how many miles m does a driver drive each year?",
            "45,000 / m = 3.75",
            "m = 45,000 / 3.75 = 12,000 miles"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Tire lifespan is wrong",
            "It is the input the answer moves with most",
            "Say it is the first thing to verify, and show the range"
          ],
          [
            "Wrong vehicle count",
            "Missing trucks, fleets or vehicles that sit unused",
            "State what you include, and cross-check with people x vehicles each"
          ],
          [
            "Counting the same tire twice",
            "New-vehicle tires and replacements are separate flows",
            "Add them as two clear lines, not one blended number"
          ],
          [
            "Round numbers hide big errors",
            "One bad input can swing the answer a lot",
            "Flex each input once and find which one matters"
          ],
          [
            "Answer looks odd",
            "A very high or low number per person",
            "Divide by people, and fix the input that looks wrong"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Estimation (guesstimate)",
            "Using round numbers and logic to size something with no data"
          ],
          [
            "Stock",
            "How many units are in use right now, like 1.1B tires on the road"
          ],
          [
            "Flow",
            "How many units are added each year, like replacements and new-vehicle tires"
          ],
          [
            "Lifespan",
            "How long one unit lasts before it is replaced"
          ],
          [
            "Top-down",
            "Start with a large group, like all people, and narrow it with shares"
          ],
          [
            "Bottom-up",
            "Count small pieces, like sites, and scale up"
          ],
          [
            "Sanity check",
            "A quick test that the answer is in a sensible range"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Starting to calculate before agreeing the scope",
            "Restate the question and fix place, year and units first."
          ],
          [
            "Using many tiny inputs",
            "Use 3 to 5 round inputs that you can defend."
          ],
          [
            "Forgetting new units, only counting replacements",
            "Add the new-vehicle tires as a separate line."
          ],
          [
            "Mixing units, such as tires and sets",
            "Write the unit on every line, for example 'tires' or 'years'."
          ],
          [
            "Giving one exact number",
            "Give a range, like 350M to 400M, and say the key driver."
          ],
          [
            "Skipping the cross-check",
            "Try a second method or divide by people to see if it is sensible."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "entry",
    "name": "Market Entry",
    "tags": [
      "consulting",
      "tech",
      "banking"
    ],
    "when": "A company wants to enter a new geography, segment or product category.",
    "example": "Regional grocer launching delivery in a metro: size the households, share and order economics, then payback on a $25M investment. Same numbers as the Grocery Chain: Launch Delivery? case.",
    "speak": [
      [
        "C: Clarify",
        "So a regional grocer with 40 stores in a metro of 2M households is thinking of putting $25M into home delivery. The goal is payback in four years without hurting the stores. Can I ask: how many households already order groceries online, what do the economics look like per order, and how many delivery orders would replace a store trip? If I do not get data, I will assume."
      ],
      [
        "L: Lay out",
        "I will ask three questions. How many orders can we win? What do we earn on each? And does $25M pay back, and what could break that?"
      ],
      [
        "E: Evaluate",
        "Twenty percent of 2M households order online, which is 400K. If we win 10%, that is 40K households. At 2 orders a month, that is 960K orders a year. A $90 basket at 25% margin is $22.50. Take off $11 for delivery and $2 for marketing, and we earn $9.50 an order. So 960K x $9.50 is $9.12M a year."
      ],
      [
        "A: Assess",
        "At full volume, $25M pays back in 2.7 years, or about 3.5 years with a ramp. That passes the four year goal. But if 20% of delivery orders just replace a store trip, we lose $4.50 on each, so we earn $5.00 an order, $4.8M a year, and payback is 5.2 years. To stay inside four years, cannibalization must stay below 13.3%, or delivery cost must fall to $9.49."
      ],
      [
        "R: Recommend",
        "I recommend we do not commit the full $25M yet. We pilot first. Two reasons: the plan only works if cannibalization is low, and we do not know yet whether we can win 10% share against two national rivals. I would pilot in 10 to 12 dense stores or through a delivery partner, and scale only if share is near 10%, delivery cost is $11 or less, and cannibalization is below about 13%. Risks are cannibalization, rivals with promotions, and delivery cost. A defensible alternative is to partner first and build our own only in dense zones."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Regional grocer, 40 stores, metro of 2M households<br/>Invest $25M in home delivery? Payback in 4 years\"]\nC --> L[\"L: Lay out<br/>1 How many orders can we win?<br/>2 What do we earn per order?<br/>3 Does $25M pay back, and what could break it?\"]\nL --> E[\"E: Evaluate<br/>Size the orders, then the profit per order\"]\nE --> E1[\"Orders<br/>2M x 20% online = 400K households<br/>x 10% share = 40K, x 24 = 960K orders a year\"]\nE --> E2[\"Per order<br/>$90 x 25% = $22.50<br/>- $11 delivery - $2 marketing = $9.50\"]\nE --> E3[\"Payback<br/>960K x $9.50 = $9.12M a year<br/>$25M / $9.12M = 2.7 years, 3.5 with a ramp\"]\nE1 --> A[\"A: Assess<br/>If 20% of orders replace store trips<br/>profit is $5.00 an order and payback is 5.2 years\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Do not commit the full $25M yet. Pilot first<br/>Scale only if the three tests pass\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 How many orders?<br/>2M households x 20% = 400K online<br/>x 10% share = <b>40K households</b>\"]\nA --> B[\"2 Orders a year<br/>40K x 2 a month x 12<br/>= <b>960K orders</b>\"]\nA --> C[\"3 Profit per order<br/>$90 x 25% = $22.50<br/>- $11 - $2 = <b>$9.50</b>\"]\nB --> D[\"4 Profit a year<br/>960K x $9.50 = <b>$9.12M</b>\"]\nC --> D\nD --> D1[\"5 Payback<br/>$25M / $9.12M = <b>2.7 years</b><br/>With a ramp of 40%, 80%, 100%: <b>3.5 years</b>\"]\nC --> C1[\"6 Cannibalization<br/>20% of orders replace a store trip<br/>20% x $22.50 = $4.50 lost\"]\nC1 --> C2[\"Net per order<br/>$9.50 - $4.50 = <b>$5.00</b><br/>960K x $5 = $4.8M. Payback <b>5.2 years</b>\"]\nD1 --> E[\"7 Verdict on a 4 year goal<br/>Passes without cannibalization<br/>Fails with 20%\"]\nC2 --> E\nE --> F1[\"Break-even cannibalization<br/>9.50 - 22.50 x c = 6.51<br/><b>c = 13.3%</b>\"]\nE --> F2[\"Needed cost per order<br/>22.50 - f - 2 - 4.50 = 6.51<br/><b>f = $9.49</b>\"]\nE --> F3[\"Needed orders<br/>9.6M x n = $25M<br/><b>n = 2.6 a month</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,B1 n1;\nclass C,C1,C2 n2;\nclass D,D1 n3;\nclass E n4;\nclass F1,F2,F3 n1;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Ask the questions below and get the data you need. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "Market size, goal, rivals, basket, margin, delivery cost, cannibalization"
          ],
          [
            "L Lay out",
            "Say your three questions before calculating",
            "Shows structure and lets the interviewer steer",
            "How many orders? What per order? Does $25M pay back and what could break it?"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "960K orders x $9.50 = $9.12M a year"
          ],
          [
            "A Assess",
            "Say what the numbers mean: payback, break-even, what if it goes wrong",
            "Turns numbers into a business view",
            "2.7 years looks good, but 20% cannibalization makes it 5.2"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Pilot first, do not commit the full $25M. Alternative: go in dense zones with a partner"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How many households will order from us?",
            "2M x 20% = 400K online. 400K x 10% share",
            "40,000 households"
          ],
          [
            "2",
            "How many orders a year?",
            "40,000 x 2 a month x 12 months",
            "960,000 orders"
          ],
          [
            "3",
            "What do we earn on one order?",
            "$90 x 25% = $22.50. Then - $11 delivery - $2 marketing",
            "$9.50"
          ],
          [
            "4",
            "What do we earn in a year at full run-rate?",
            "960,000 x $9.50",
            "$9.12M"
          ],
          [
            "5",
            "How long to pay back $25M?",
            "$25M / $9.12M. With a ramp of 40%, 80%, 100% of volume, we have $20.06M after year 3, then 0.54 of year 4",
            "2.7 years, or 3.5 with the ramp"
          ],
          [
            "6",
            "What if 20% of orders replace a store trip?",
            "20% x $22.50 = $4.50 lost. $9.50 - $4.50 = $5.00. 960K x $5 = $4.8M. $25M / $4.8M",
            "5.2 years"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Result",
          "What it tells you"
        ],
        "rows": [
          [
            "We win 5% share, not 10%",
            "20K households, $4.56M a year, payback 5.5 years",
            "Share is the biggest driver. The pilot must prove it."
          ],
          [
            "Delivery cost falls to $9 an order",
            "$11.50 an order, $11.04M a year, payback 2.3 years",
            "Route batching and density matter a lot."
          ],
          [
            "10% of orders replace a store trip",
            "$7.25 an order, $6.96M a year, payback 3.6 years",
            "Still inside 4 years. Cannibalization is the swing factor."
          ],
          [
            "20% of orders replace a store trip",
            "$5.00 an order, $4.8M a year, payback 5.2 years",
            "Misses the 4 year goal. Do not go all in."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "How many households do we need to pay back $25M in 4 years at $9.50 an order and 24 orders a household a year?",
            "9.50 x 24 x h x 4 = 25,000,000",
            "912 h = 25M, so h = 27,412. That is 6.9% of the 400K online households"
          ],
          [
            "What share of orders can replace store trips (c) and still pay back in 4 years at run-rate?",
            "Need $25M / 4 = $6.25M a year, or $6.51 an order. 9.50 - 22.50 c = 6.51",
            "22.50 c = 2.99, so c = 13.3%"
          ],
          [
            "With 20% cannibalization, what delivery cost f gives a 4 year payback?",
            "22.50 - f - 2 - 4.50 = 6.51",
            "f = 22.50 - 2 - 4.50 - 6.51 = $9.49 an order"
          ],
          [
            "With $5.00 net an order, how many orders a month (n) per household give a 4 year payback?",
            "40,000 x 12 x n x 5 x 4 = 25,000,000",
            "9.6M n = 25M, so n = 2.6 orders a month"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Cannibalization",
            "Delivery takes sales from our own stores",
            "Measure it in the pilot and add pickup and membership to keep store trips"
          ],
          [
            "Share is lower than 10%",
            "Two national players already deliver and may use promotions",
            "Pilot in dense zones and compete on freshness and local brands, not on fees"
          ],
          [
            "Delivery cost stays above $11",
            "Picking and last mile are hard to run well",
            "Batch picks, cluster delivery windows, and set minimum baskets"
          ],
          [
            "Service and freshness problems",
            "One bad delivery can lose a customer",
            "Track late, missing and substitute rates from day one"
          ],
          [
            "Spending $25M too early",
            "Money is locked in before we know the answer",
            "Release money in stages tied to pilot results"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Household",
            "One home that buys groceries"
          ],
          [
            "Basket",
            "The total value of one order"
          ],
          [
            "Gross margin",
            "The share of sales left after the cost of the goods. 25% of $90 is $22.50"
          ],
          [
            "Contribution",
            "Profit on one order after the costs that come with that order"
          ],
          [
            "Cannibalization",
            "New sales that simply take sales from our own existing stores"
          ],
          [
            "Payback",
            "Years it takes for the profit to repay the investment"
          ],
          [
            "Ramp",
            "The slow build-up to full volume, such as 40%, 80%, 100%"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Stopping at market size",
            "Go on to profit per order and payback. Size alone does not answer the question."
          ],
          [
            "Ignoring cannibalization of store sales",
            "Ask how many delivery orders replace a store trip. Here 20% cuts profit from $9.50 to $5.00."
          ],
          [
            "Not stating what would make you say no",
            "Name your tests: share near 10%, delivery cost at or below $11, cannibalization at or below about 13%."
          ],
          [
            "Using full volume from day one",
            "Show a ramp. 2.7 years at full run-rate becomes 3.5 years with a ramp."
          ],
          [
            "Hiding the math",
            "Say each step out loud, with units, and check the result makes sense."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "growth",
    "name": "Growth Strategy",
    "tags": [
      "consulting",
      "tech"
    ],
    "when": "'How do we grow revenue from $X to $Y?' or 'what should the CEO do next?'",
    "example": "An amusement park wants to grow revenue from $150M to $180M in three years. We size five levers, cut each for risk, and defer the 1,000-acre lease because capacity is not the problem.",
    "speak": [
      [
        "C: Clarify",
        "So the park has $150M in revenue and 3M visitors, and it has been flat for two years. We want $180M in three years, which is a $30M gap. The board is asking about leasing 1,000 more acres. Can I ask how full the park is through the year, and what we can spend? If I do not get answers, I will assume."
      ],
      [
        "L: Lay out",
        "I will use four growth directions: sell more to today's guests, new products for them, new markets, and new businesses. I will size each lever in dollars. Then I will rank them by impact, effort, risk and fit."
      ],
      [
        "E: Evaluate",
        "Summer pricing, from $25 to $30 and losing 5% of guests, adds $6.3M. Off-season events lifting visits 15% add $9.0M. Food, premium tiers and retail add $6.0M, $6.0M and $3.0M. That is $30.3M on paper."
      ],
      [
        "A: Assess",
        "Not every lever will land, so I haircut each one: pricing 90%, events 50%, the others 70 to 80%. That gives $21.6M, or 72% of the gap. Also, capacity is not the limit. The park is 90% full on summer weekends but only 10% full off-season, so more land adds cost, not demand."
      ],
      [
        "R: Recommend",
        "I recommend we grow the core first and defer the 1,000 acres. Two reasons: the core levers are faster and cheaper, and demand off-season is the real gap. The risks are guests pushing back on price and events not drawing crowds, so I would pilot both. In year 3, a phase 2 like season passes closes the last $8M. As an alternative, if summer demand still beats capacity then, I would lease the land."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Amusement park: $150M revenue, flat 2 years<br/>Goal: $180M in 3 years. Gap $30M<br/>Board asks about leasing 1,000 acres\"]\nC --> L[\"L: Lay out<br/>1 Sell more to today's guests<br/>2 New products for them<br/>3 New markets and land\"]\nL --> E[\"E: Evaluate<br/>Size each lever in dollars\"]\nE --> E1[\"Five levers<br/>Summer pricing +$6.3M<br/>Off-season events +$9.0M<br/>Food, tiers, retail +$15.0M\"]\nE --> E2[\"Gross total<br/>$30.3M on paper<br/>Covers the $30M gap\"]\nE --> E3[\"Reality check<br/>Haircut each lever<br/>Expect $21.6M<br/>Revenue about $171.6M\"]\nE1 --> A[\"A: Assess<br/>Plan fills 72% of the gap<br/>Park is 90% full in summer, 10% off-season<br/>Capacity is not the problem\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Grow the core first. Defer the 1,000 acres.<br/>Revisit land in year 3 if summer demand still beats capacity\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 The gap<br/>$180M - $150M<br/>= <b>$30M</b>\"]\nA --> P[\"2 Summer pricing<br/>1.71M x $30 - 1.8M x $25<br/>= <b>+$6.3M</b>\"]\nA --> O[\"3 Off-season events<br/>1.2M x 15% = 180K x $50<br/>= <b>+$9.0M</b>\"]\nA --> S[\"4 Spend per guest<br/>3M x ($2 + $2 + $1)<br/>= <b>+$15.0M</b>\"]\nP --> G[\"5 Gross plan<br/>$6.3M + $9.0M + $15.0M<br/>= <b>$30.3M</b>\"]\nO --> G\nS --> G\nG --> H[\"6 Haircut each lever<br/>Pricing 90% = $5.7M, F&B 80% = $4.8M<br/>Tiers 70% = $4.2M, Events 50% = $4.5M<br/>Retail 80% = $2.4M\"]\nH --> T[\"7 Expected total<br/><b>$21.6M</b> = 72% of gap<br/>Revenue <b>$171.6M</b>\"]\nT --> L[\"8 Gap left<br/>$30M - $21.6M<br/>= <b>$8.4M</b>\"]\nL --> K1[\"Check: break-even visitors<br/>$45M / $30 = 1.5M, can lose 17%\"]\nL --> K2[\"Check: events fail<br/>$21.6M - $4.5M = $17.1M\"]\nL --> K3[\"Check: price loses 10% of guests<br/>1.62M x $30 - $45M = $3.6M\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,P,O,S n1;\nclass G,H n3;\nclass T,L n2;\nclass K1,K2,K3 n4;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the goal back. Ask for the time frame, the money available and what the board wants. Say what you will assume",
            "You lead the case and show a business owner mindset",
            "$150M to $180M in 3 years is a $30M gap. About $15M of capital. Board asks about 1,000 acres"
          ],
          [
            "L Lay out",
            "Name the four growth directions, then pick the ones to size",
            "Shows structure and lets the interviewer steer",
            "Sell more to today's guests, new products for them, new markets, new businesses"
          ],
          [
            "E Evaluate",
            "Size each lever in dollars with short math and units",
            "The interview has several math problems, often with algebra",
            "Five levers: pricing $6.3M, events $9.0M, food $6.0M, tiers $6.0M, retail $3.0M"
          ],
          [
            "A Assess",
            "Haircut each lever, add them up and test the big assumption",
            "Turns a paper plan into a real one",
            "Expect $21.6M, 72% of the gap. Capacity is not the limit"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and a next step",
            "Several answers can be defended; you must commit and explain",
            "Grow the core first and defer the land. Alternative: lease land in year 3"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How big is the gap?",
            "$180M - $150M",
            "$30M"
          ],
          [
            "2",
            "What does summer pricing add?",
            "Gate $25 to $30. 5% fewer of 1.8M visitors = 1.71M. 1.71M x $30 - 1.8M x $25",
            "+$6.3M"
          ],
          [
            "3",
            "What do off-season events add?",
            "1.2M x 15% = 180K visitors. 180K x $50",
            "+$9.0M"
          ],
          [
            "4",
            "What do food, tiers and retail add?",
            "3M guests x ($2 + $2 + $1)",
            "+$15.0M"
          ],
          [
            "5",
            "What is the plan worth on paper?",
            "$6.3M + $9.0M + $15.0M",
            "$30.3M gross"
          ],
          [
            "6",
            "What do we really expect?",
            "Haircut: $5.7M + $4.8M + $4.2M + $4.5M + $2.4M",
            "$21.6M, 72% of gap"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Expected total",
          "What it tells you"
        ],
        "rows": [
          [
            "Every lever works fully (100%)",
            "$30.3M",
            "Closes the gap on paper. Do not promise it."
          ],
          [
            "Off-season events fail ($0 instead of $4.5M)",
            "$17.1M",
            "The plan falls well short. Events are the biggest risk."
          ],
          [
            "Summer price hike loses 10% of visitors, not 5%",
            "$19.1M",
            "Pricing adds $3.6M, not $6.3M. Test the price first."
          ],
          [
            "Events lift visits 7.5%, not 15%",
            "$19.3M",
            "Events now add $2.3M after the haircut. Pilot them before you scale."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "How many summer visitors v can we lose at a $30 gate and still earn the old $45M?",
            "$30 x v = $45M",
            "v = 1.5M, so we can lose 0.3M of 1.8M, or 17%"
          ],
          [
            "If only spend per guest s rose, how much must it rise to close the $30M gap?",
            "3M x s = $30M",
            "s = $10 more per guest"
          ],
          [
            "What share r of the $30.3M gross plan must we get to close the gap?",
            "30.3 x r = 30",
            "r = 30 / 30.3 = 99%"
          ],
          [
            "How many extra off-season visitors n close the $8.4M left, at $50 and 50% confidence?",
            "n x $50 x 50% = $8.4M",
            "n = 8.4M / 25 = 336K, about 28% of 1.2M"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Guests dislike the higher gate price",
            "More visitors leave than the 5% we planned",
            "Test the price on a few summer days. Add a cheaper weekday option"
          ],
          [
            "Off-season events do not draw crowds",
            "Cold months stay quiet and the $9.0M does not appear",
            "Pilot a few events first. Scale only the winners"
          ],
          [
            "Premium tiers upset regular guests",
            "Long lines for fast-pass can annoy others",
            "Cap the number sold and watch guest ratings"
          ],
          [
            "The plan delivers less than hoped",
            "Most plans fall short",
            "Use haircuts. Track each lever every month. Keep a year-3 phase 2"
          ],
          [
            "Competitor moves into the area",
            "Rivals may cut prices or add rides",
            "Watch rival prices and lock in season pass holders early"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Lever",
            "One action that can move revenue, like price or visits"
          ],
          [
            "Growth directions (Ansoff)",
            "Four ways to grow: sell more to today's guests, new products, new markets, new businesses"
          ],
          [
            "Yield pricing",
            "Charge more when demand is high, like summer weekends"
          ],
          [
            "Premium tier",
            "A paid upgrade, like a fast pass, for guests who want more"
          ],
          [
            "Haircut",
            "Cutting a number to the share you really expect, such as 70%"
          ],
          [
            "Capacity",
            "The most guests the park can serve at one time"
          ],
          [
            "Gross vs expected",
            "Gross is the paper total. Expected is after haircuts"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Listing ideas with no dollar values",
            "Size every lever in dollars with short math."
          ],
          [
            "Counting the full plan as the result",
            "Haircut each lever and show the expected total."
          ],
          [
            "Saying yes to more land because it sounds big",
            "Check demand first. The park is only 10% full off-season."
          ],
          [
            "Ignoring that price rises lose some guests",
            "Subtract lost visitors, then test with a worse case."
          ],
          [
            "Giving a long list with no order",
            "Rank by impact, effort, risk and fit. Say what comes first."
          ],
          [
            "Hiding the math or the assumptions",
            "Say each step out loud with units and say 'I will assume...'."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "pricing",
    "name": "Pricing",
    "tags": [
      "consulting",
      "tech",
      "banking"
    ],
    "when": "Price a new product, change an existing price, or respond to a competitor price move.",
    "example": "A premium card annual fee goes from $95 to $120. We check the fee gain against customers who leave, by segment, then test before rolling out.",
    "speak": [
      [
        "C: Clarify",
        "So we have a premium rewards card with 1M customers and a $95 annual fee, and we are thinking of $120. I will assume the goal is profit, not just revenue. May I ask how engaged and casual customers differ in value, and what rivals charge?"
      ],
      [
        "L: Lay out",
        "I will ask two questions. First, what do we gain from the higher fee? Second, what do we lose when some customers leave? I will do it by segment, because engaged and casual customers act differently."
      ],
      [
        "E: Evaluate",
        "Each customer who stays pays $25 more. Engaged customers, 400K of them, leave at about 3% and are worth $150 each, so the net is about $17 each, or $6.8M. Casual customers, 600K, leave at about 12% and are worth $40, so the net is about $6 each, or $3.5M."
      ],
      [
        "A: Assess",
        "That is about plus $10.2M a year on a $95M fee base. It depends on who leaves. Break-even is about 9% for engaged and 16% for casual customers. If attrition doubles, we lose about $4.5M, mostly from casual customers."
      ],
      [
        "R: Recommend",
        "I would raise the fee, but test it first. Two reasons: the gain is real, and the risk is in casual customers, which a test can measure. I would test on 10% of cards for three months and go if attrition stays under break-even in each segment. The risk is casual customers leaving, so I would waive the extra $25 above a spend level. If the test is weak, I would raise the fee for engaged customers only."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Premium card: 1M customers, $95 fee<br/>Raise to $120? Goal: more profit\"]\nC --> L[\"L: Lay out<br/>1 What do we gain from the fee?<br/>2 What do we lose when people leave?\"]\nL --> E[\"E: Evaluate<br/>Do the math for each segment\"]\nE --> E1[\"Engaged: 400K<br/>3% leave, worth $150 each<br/>Net +$6.8M\"]\nE --> E2[\"Casual: 600K<br/>12% leave, worth $40 each<br/>Net +$3.5M\"]\nE --> E3[\"Reality check<br/>Break-even leave rate:<br/>engaged 9%, casual 16%\"]\nE1 --> A[\"A: Assess<br/>Total +$10.2M a year<br/>Doubling attrition loses $4.5M\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Raise it, but test on 10% of cards first.<br/>Waive the extra $25 for high spenders\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Where we are<br/>1M cards x $95 = <b>$95M fees</b><br/>Engaged 400K, casual 600K\"]\nA --> B[\"2 Gain if a customer stays<br/>$120 - $95 = <b>+$25</b>\"]\nB --> E1[\"3 Engaged, 3% leave<br/>0.97 x $120 - $95 = $21.40<br/>Lost: 3% x $150 = $4.50<br/>Net <b>$16.90</b> each\"]\nB --> C1[\"4 Casual, 12% leave<br/>0.88 x $120 - $95 = $10.60<br/>Lost: 12% x $40 = $4.80<br/>Net <b>$5.80</b> each\"]\nE1 --> E2[\"5 Engaged total<br/>400K x $16.90<br/>= <b>+$6.8M</b>\"]\nC1 --> C2[\"6 Casual total<br/>600K x $5.80<br/>= <b>+$3.5M</b>\"]\nE2 --> T[\"7 Total<br/>$6.8M + $3.5M<br/>= <b>+$10.2M a year</b>\"]\nC2 --> T\nT --> K1[\"Break-even leave rate<br/>Engaged: $25 / ($120 + $150) = 9.3%<br/>Casual: $25 / ($120 + $40) = 15.6%\"]\nT --> K2[\"If attrition doubles (6% and 24%)<br/>Engaged +$3.5M, casual -$8.0M<br/>Total <b>-$4.5M</b>\"]\nT --> K3[\"Test size<br/>10% of 1M cards = 100K cards<br/>for 3 months\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,K3 n1;\nclass E1,C1 n2;\nclass E2,C2,T n3;\nclass K1,K2 n4;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the problem back. Ask about the goal, the customer groups and what rivals charge. Say what you will assume if you do not get answers",
            "In Capital One cases you lead the talk and ask for data, like a business owner",
            "Goal is profit. Engaged 400K, casual 600K. Rivals charge $95 to $150"
          ],
          [
            "L Lay out",
            "Say your two questions before you calculate: what do we gain, and what do we lose",
            "Shows a clear plan and lets the interviewer steer",
            "Fee gain per customer who stays. Lost value per customer who leaves"
          ],
          [
            "E Evaluate",
            "Do the math out loud, one segment at a time, with units",
            "The case has several math steps, often with algebra",
            "Engaged +$6.8M, casual +$3.5M, break-even leave rates"
          ],
          [
            "A Assess",
            "Say what the numbers mean: the total, how sure you are, and what could break it",
            "Turns numbers into a business view",
            "+$10.2M a year, but doubling attrition loses $4.5M"
          ],
          [
            "R Recommend",
            "Give the answer first, then two reasons, then risks and a back-up plan",
            "Many answers work. You must pick one and defend it",
            "Raise the fee after a 10% test. Back-up: raise for engaged only"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "What do we gain if a customer stays?",
            "$120 - $95",
            "+$25 each"
          ],
          [
            "2",
            "What is one engaged customer worth after the change?",
            "0.97 x $120 - $95 = $21.40. Then minus 3% x $150 = $4.50",
            "+$16.90 each"
          ],
          [
            "3",
            "What is the engaged segment worth?",
            "400K x $16.90",
            "+$6.8M"
          ],
          [
            "4",
            "What is one casual customer worth after the change?",
            "0.88 x $120 - $95 = $10.60. Then minus 12% x $40 = $4.80",
            "+$5.80 each"
          ],
          [
            "5",
            "What is the casual segment worth?",
            "600K x $5.80",
            "+$3.5M"
          ],
          [
            "6",
            "What is the total?",
            "$6.8M + $3.5M",
            "+$10.2M a year"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Total per year",
          "What it tells you"
        ],
        "rows": [
          [
            "Casual customers leave at 8%, not 12%",
            "+$14.1M",
            "Casual attrition is the biggest swing in the plan."
          ],
          [
            "Casual customers leave at 16%, not 12%",
            "+$6.4M",
            "At about 16% casual customers add nothing. Engaged carry the plan."
          ],
          [
            "Raise the fee for engaged customers only",
            "+$6.8M",
            "Lower reward, much lower risk."
          ],
          [
            "Both rates double (6% and 24%)",
            "-$4.5M",
            "The plan loses money. This is why we test first."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "At what leave rate a do engaged customers break even?",
            "$25 - a x ($120 + $150) = 0",
            "a = 25 / 270 = 9.3%"
          ],
          [
            "At what leave rate a do casual customers break even?",
            "$25 - a x ($120 + $40) = 0",
            "a = 25 / 160 = 15.6%"
          ],
          [
            "What fee F makes casual customers break even if 12% leave?",
            "0.88 x F - $95 - 0.12 x $40 = 0",
            "0.88F = $99.80, so F = $113.40"
          ],
          [
            "If engaged stay at 3%, what casual leave rate a wipes out the whole gain?",
            "$6.76M + 600K x ($25 - a x $160) = 0",
            "$15M - $96M x a = -$6.76M, so a = 22.7%"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Casual customers leave in large numbers",
            "They do not value the card much more than the fee",
            "Waive the extra $25 above a spend level. Watch casual attrition first"
          ],
          [
            "Rivals do not follow",
            "We look expensive next to $95 cards",
            "Check rival fees. Stress the rewards that engaged customers earn"
          ],
          [
            "Engaged customers get upset",
            "They are our best customers and are worth $150 each",
            "Give notice early and add a benefit, such as extra rewards"
          ],
          [
            "The test is not like the full base",
            "10% may differ from everyone else",
            "Pick cards at random and run for 3 months"
          ],
          [
            "Leaving is slow to show",
            "Many people leave at the next renewal, not at once",
            "Track renewals and calls to cancel, not just closed cards"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Attrition",
            "Share of customers who leave in a year"
          ],
          [
            "Contribution",
            "Profit a customer brings each year, apart from the fee"
          ],
          [
            "Elasticity",
            "How much demand falls when the price rises"
          ],
          [
            "Break-even",
            "The point where the gain exactly equals the loss, so the net is $0"
          ],
          [
            "Segment",
            "A group of customers who act in a similar way, like engaged or casual"
          ],
          [
            "Fence",
            "A rule that gives a price break to one group only, such as a waiver for high spenders"
          ],
          [
            "A/B test",
            "Try the new price on a small random group and compare it with a group that keeps the old price"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Counting only the extra fee",
            "Subtract the contribution lost from customers who leave."
          ],
          [
            "Using one attrition rate for everyone",
            "Split into segments. Engaged and casual customers react very differently."
          ],
          [
            "Saying yes to the price without a test",
            "Test on 10% of cards for 3 months and set go and no-go rules first."
          ],
          [
            "Skipping break-even",
            "Say the leave rate where the plan stops paying. Compare it with your guess."
          ],
          [
            "Ignoring rivals and customer value",
            "Ask what rivals charge and what the customer gets for the fee."
          ],
          [
            "Giving one number and stopping",
            "Give a range and say what would change your mind."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "ma",
    "name": "M&A / Acquisition",
    "tags": [
      "consulting",
      "banking"
    ],
    "when": "Should we buy company X? What is it worth to us?",
    "example": "Bank buying a payments fintech for $300M: standalone value plus haircut synergies against the price. Same numbers as the Bank Acquires a Payments Fintech case.",
    "speak": [
      [
        "C: Clarify",
        "So a regional bank with 2M retail customers may buy a payments fintech for $300M. The fintech has $40M of sales growing 35% and is slightly loss-making. The bank wants better payments and lower processing costs, and needs a return above its cost of capital within five years. Can I ask what similar companies trade at, and what savings and cross-sell are realistic? If not, I will assume."
      ],
      [
        "L: Lay out",
        "I will look at three things. What is the fintech worth on its own? What extra value does the bank add, with a haircut and the cost to get it? And how does the price compare with that value, including risks?"
      ],
      [
        "E: Evaluate",
        "Peers trade at 6x to 8x sales, so $40M is worth $240M to $320M. I will use 7x, which is $280M. For benefits, moving 40% of $12M of processing in-house saves $4.8M a year. Cross-selling to 3% of 2M customers at $60 adds $3.6M. That is $8.4M a year. Valued at 6 times, it is $50.4M."
      ],
      [
        "A: Assess",
        "I would count only half, which is $25.2M, and subtract $8M of integration cost. That leaves $17.2M. So the deal is worth about $297M to the bank, and the ask is $300M. There is no safety margin, and it only works if growth stays near 35%. To justify $300M, 55.6% of the benefits must arrive."
      ],
      [
        "R: Recommend",
        "I recommend we do not pay $300M. My top price is $275M, which leaves about $22M of safety. I would open at $250M, or pay part through an earn-out tied to growth. Two reasons: the ask pays the seller for all the benefits, and growth risk stays with the bank. Risks are engineers leaving, slow integration and rules, so diligence is a condition. If the seller will not move, I would partner or take a minority stake instead."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Bank asks $300M for a fintech<br/>Sales $40M, growing 35%, EBITDA -$2M<br/>What is the most we should pay?\"]\nC --> L[\"L: Lay out<br/>1 What is the fintech worth alone?<br/>2 What extra value does the bank add?<br/>3 Price against value, and risks\"]\nL --> E[\"E: Evaluate<br/>Value alone, then deal benefits\"]\nE --> E1[\"Worth alone<br/>Peers trade at 6x to 8x sales<br/>$40M x 7 = $280M\"]\nE --> E2[\"Deal benefits<br/>Processing $4.8M + cross-sell $3.6M<br/>= $8.4M a year x 6 = $50.4M\"]\nE --> E3[\"Reality check<br/>Half = $25.2M, less $8M cost<br/>= $17.2M\"]\nE1 --> A[\"A: Assess<br/>Worth about $297M to the bank<br/>Ask is $300M, so no safety margin<br/>Works only if 35% growth holds\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Do not pay $300M. Pay up to $275M<br/>Open at $250M, add an earn-out<br/>Else partner or buy a small stake\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Price asked<br/>$300M / $40M sales<br/>= <b>7.5x sales</b>\"]\nA --> B[\"2 Worth alone<br/>Peers 6x to 8x = $240M to $320M<br/>Midpoint 7x = <b>$280M</b>\"]\nA --> C[\"3 Deal benefits per year\"]\nC --> C1[\"Processing<br/>40% x $12M<br/>= <b>$4.8M</b>\"]\nC --> C2[\"Cross-sell<br/>3% x 2M = 60,000 x $60<br/>= <b>$3.6M</b>\"]\nC1 --> D[\"4 Total $8.4M a year<br/>x 6 (assumed) = <b>$50.4M</b>\"]\nC2 --> D\nD --> E[\"5 Haircut 50%<br/>$50.4M x 50% = $25.2M<br/>- $8M cost ($4M x 2 years)<br/>= <b>$17.2M</b>\"]\nB --> F[\"6 Value to the bank<br/>$280M + $17.2M<br/>= <b>$297.2M</b>\"]\nE --> F\nF --> G[\"7 Compare<br/>Ask $300M is $2.8M above value<br/>Max price $275M leaves <b>$22.2M</b> safety\"]\nG --> H1[\"Break-even: share of benefits needed<br/>$280M + $50.4M x r - $8M = $300M<br/>r = <b>55.6%</b>\"]\nG --> H2[\"Multiple needed to justify $300M<br/>40 x m + $17.2M = $300M<br/>m = <b>7.07x</b>\"]\nG --> H3[\"If no benefits arrive<br/>$280M - $8M = <b>$272M</b><br/>Ask is $28M too high\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C,C1,C2 n1;\nclass D,E n2;\nclass F n3;\nclass G n4;\nclass H1,H2,H3 n1;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the problem back in your own words. Ask for the goal, the limit and the data. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "Why buy, peer multiples, sales, cross-sell, processing spend, integration cost"
          ],
          [
            "L Lay out",
            "Say your questions before you calculate",
            "Shows structure and lets the interviewer steer",
            "What is it worth alone? What does the bank add? Price against value"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "Alone $280M. Benefits $8.4M a year x 6 = $50.4M"
          ],
          [
            "A Assess",
            "Say what the numbers mean: what you will really get, break-even, safety margin",
            "Turns numbers into a business view",
            "Half the benefits less $8M gives $17.2M. Worth $297M. Ask is $300M"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Do not pay $300M. Pay up to $275M. Alternative: partner or minority stake"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "What is the fintech worth on its own?",
            "$40M x 7 (midpoint of 6x to 8x)",
            "$280M"
          ],
          [
            "2",
            "What can the bank save on processing?",
            "40% x $12M",
            "$4.8M a year"
          ],
          [
            "3",
            "What can the bank earn from cross-sell?",
            "3% x 2M = 60,000 customers x $60",
            "$3.6M a year"
          ],
          [
            "4",
            "What are the benefits worth?",
            "($4.8M + $3.6M) x 6",
            "$50.4M"
          ],
          [
            "5",
            "What do we count after haircut and cost?",
            "$50.4M x 50% - $8M integration",
            "$17.2M"
          ],
          [
            "6",
            "What is the deal worth to the bank?",
            "$280M + $17.2M. Compare with the $300M ask",
            "$297.2M"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Value to the bank",
          "What it tells you"
        ],
        "rows": [
          [
            "Peers trade at 6x, not 7x",
            "$257.2M",
            "$240M + $17.2M. The ask is $43M too high."
          ],
          [
            "Peers trade at 8x",
            "$337.2M",
            "$320M + $17.2M. The ask looks cheap, but growth must hold."
          ],
          [
            "No benefits arrive at all",
            "$272M",
            "$280M - $8M integration. The ask is $28M too high."
          ],
          [
            "All the benefits arrive (100%)",
            "$322.4M",
            "$280M + $50.4M - $8M. The ask would be a good deal."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What share r of the benefits must arrive to justify $300M?",
            "280 + 50.4 x r - 8 = 300",
            "50.4r = 28, so r = 55.6%"
          ],
          [
            "What sales multiple m makes $300M fair, if we keep the $17.2M?",
            "40 x m + 17.2 = 300",
            "40m = 282.8, so m = 7.07x"
          ],
          [
            "How many cross-sell customers n would match the $4.8M processing saving?",
            "n x $60 = $4.8M",
            "n = 80,000, which is 4% of 2M customers"
          ],
          [
            "How many years t until sales double at 35% growth?",
            "40 x 1.35^t = 80",
            "1.35^t = 2, so t = 2.3 years"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Growth slows",
            "The price assumes 35% growth. Slower growth cuts the value",
            "Pay part of the price later with an earn-out tied to growth"
          ],
          [
            "Key engineers leave",
            "The value is in the people and the technology",
            "Retention bonuses and a check on this in diligence"
          ],
          [
            "Benefits arrive late or small",
            "Integration is often slower than planned",
            "Count only 50% and track savings every quarter"
          ],
          [
            "Rules and approvals",
            "A bank must meet strict rules on the fintech's products",
            "Check compliance and approvals before closing"
          ],
          [
            "Overpaying",
            "The ask leaves no safety margin",
            "Set a walk-away price of $275M"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Multiple",
            "Price divided by sales. $300M / $40M = 7.5x"
          ],
          [
            "Comparable (comp)",
            "A similar listed company used to judge a fair price"
          ],
          [
            "Synergies",
            "Extra value the buyer creates by combining, such as savings and cross-sell"
          ],
          [
            "Cross-sell",
            "Selling the fintech's product to the bank's own customers"
          ],
          [
            "Earn-out",
            "Part of the price paid later, only if targets are met"
          ],
          [
            "Haircut",
            "Counting only part of a benefit, such as 50%, because it is uncertain"
          ],
          [
            "Walk-away price",
            "The highest price at which you still do the deal"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Paying the ask because the deal sounds strategic",
            "Compute the value first, then compare it with the price."
          ],
          [
            "Counting 100% of the deal benefits",
            "Haircut them, for example to 50%, and subtract the cost to get them."
          ],
          [
            "Forgetting integration cost",
            "Subtract the $8M cost before you decide what the benefits are worth."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ],
          [
            "Hiding the math",
            "Say each step out loud, with units, and say which numbers are assumptions."
          ],
          [
            "Giving only one price",
            "Give a walk-away price, an opening offer and a different structure such as an earn-out."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "ops",
    "name": "Operations & Cost Reduction",
    "tags": [
      "banking",
      "consulting"
    ],
    "when": "Cut cost by X%, improve efficiency, or fix a process.",
    "example": "Contact center: $130M cost, 15% target. Size deflection, handle-time and repeat-call levers by call type. Same numbers as the Contact Center Cost Reduction case.",
    "speak": [
      [
        "C: Clarify",
        "So a retail bank spends $130.4M a year on its contact center, with 8M calls. The COO wants cost down 15%, which is about $19.6M, without hurting customer satisfaction. Can I ask how the calls split by type and cost, and whether a digital channel could take some? If not, I will assume."
      ],
      [
        "L: Lay out",
        "Cost is calls times cost per call. So I will look at fewer calls, cheaper calls, and then protect service. I will size each type of call first."
      ],
      [
        "E: Evaluate",
        "Simple calls cost $22.4M, transactional $48.0M and complex $60.0M. If half of simple calls move to the app, that is 1.4M calls at $8, or $11.2M. Cutting transactional handle time by 10% saves $4.8M. Removing 100,000 repeat complex calls at $30 saves $3.0M. Better scheduling adds about $0.65M."
      ],
      [
        "A: Assess",
        "That totals $19.65M, which is 15.1%, just above the target. One-time cost is about $3M, so payback is under 2 months. The risk is the app. At 30% use instead of 50%, savings fall to $15.2M, or 11.6%. To hit the target, about 50% of simple calls must move."
      ],
      [
        "R: Recommend",
        "I recommend we do all four levers, with the app first. Two reasons: the app is the biggest and fastest lever, and agent tools and repeat fixes protect service. I would track satisfaction and first-call resolution every week and pause any lever that hurts them. I would not cut handle time on complex calls. As an alternative, if app use is low, I would move simple calls to a lower-cost team after the app work."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Bank contact center costs $130.4M<br/>COO wants -15% = $19.6M<br/>Keep customers happy\"]\nC --> L[\"L: Lay out<br/>Cost = calls x cost per call<br/>1 Fewer calls<br/>2 Cheaper calls<br/>3 Protect service\"]\nL --> E[\"E: Evaluate<br/>Size each pool, then each lever\"]\nE --> E1[\"Where the cost is<br/>Simple $22.4M, transactional $48.0M<br/>Complex $60.0M\"]\nE --> E2[\"Levers<br/>Move simple calls to the app $11.2M<br/>Faster transactional calls $4.8M<br/>Fewer repeats $3.0M, scheduling $0.65M\"]\nE --> E3[\"Reality check<br/>Total $19.65M = 15.1%<br/>App use at 30% gives only $15.2M\"]\nE1 --> A[\"A: Assess<br/>Just above target, $3M one time<br/>Pays back in under 2 months<br/>App use must reach 50%\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Do all four, app first<br/>Watch satisfaction every week<br/>Pause any lever that hurts it\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Where the money goes<br/>Simple 2.8M x $8 = $22.4M<br/>Transactional 3.2M x $15 = $48.0M<br/>Complex 2.0M x $30 = $60.0M<br/>Total <b>$130.4M</b>\"]\nA --> B[\"2 Target<br/>15% x $130.4M<br/>= <b>$19.56M</b>\"]\nA --> C1[\"3 Move simple calls to app<br/>50% x 2.8M = 1.4M calls<br/>x $8 = <b>$11.2M</b>\"]\nA --> C2[\"4 Faster transactional calls<br/>10% x $48.0M<br/>= <b>$4.8M</b>\"]\nA --> C3[\"5 Fewer repeat complex calls<br/>5% x 2.0M = 100,000 calls<br/>x $30 = <b>$3.0M</b>\"]\nA --> C4[\"6 Better scheduling<br/>0.5% x $130.4M<br/>= <b>$0.65M</b>\"]\nC1 --> D[\"7 Total savings<br/>11.2 + 4.8 + 3.0 + 0.65<br/>= <b>$19.65M, which is 15.1%</b>\"]\nC2 --> D\nC3 --> D\nC4 --> D\nB --> D\nD --> E[\"8 Payback<br/>$3M one time / $19.65M a year<br/>= <b>1.8 months</b>\"]\nE --> F1[\"Break-even: app use needed<br/>22.4 x d + 8.45 = 19.56<br/>d = <b>49.6%, so about 50%</b>\"]\nE --> F2[\"If app use is only 30%<br/>$6.72M + 8.45M = <b>$15.17M</b><br/>11.6%, short by $4.4M\"]\nE --> F3[\"Then handle time must fall<br/>48 x h = 9.19<br/>h = <b>19.1%, not 10%</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B n1;\nclass C1,C2,C3,C4 n2;\nclass D,E n3;\nclass F1,F2,F3 n4;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the problem back in your own words. Ask for the goal, the timeline and the data. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "Target in dollars, calls by type, cost per call, app, repeats, one-time cost"
          ],
          [
            "L Lay out",
            "Say your structure before you calculate",
            "Shows structure and lets the interviewer steer",
            "Cost = calls x cost per call. Fewer calls, cheaper calls, protect service"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "Four levers add up to $19.65M"
          ],
          [
            "A Assess",
            "Say what the numbers mean: what you will really get, payback, break-even",
            "Turns numbers into a business view",
            "15.1% of cost. Payback under 2 months. App use must reach about 50%"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Do all four levers, app first. Alternative: offshore simple calls"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How much is the 15% target?",
            "15% x $130.4M",
            "$19.56M"
          ],
          [
            "2",
            "What does moving simple calls to the app save?",
            "50% x 2.8M = 1.4M calls x $8",
            "$11.2M"
          ],
          [
            "3",
            "What does faster transactional handling save?",
            "10% x $48.0M",
            "$4.8M"
          ],
          [
            "4",
            "What does removing repeat complex calls save?",
            "100,000 calls x $30",
            "$3.0M"
          ],
          [
            "5",
            "What does better scheduling save?",
            "0.5% x $130.4M",
            "$0.65M"
          ],
          [
            "6",
            "Do we reach the target, and what is the payback?",
            "$11.2M + $4.8M + $3.0M + $0.65M = $19.65M. $3M / $19.65M x 12",
            "15.1% of cost, 1.8 months"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Total savings",
          "What it tells you"
        ],
        "rows": [
          [
            "Only 30% of simple calls move to the app",
            "$15.17M (11.6%)",
            "Short of the target by $4.4M. The app lever decides the case."
          ],
          [
            "Handle time falls only 5%",
            "$17.25M (13.2%)",
            "Short by $2.3M. Needs another lever."
          ],
          [
            "Only half of the repeats are removed",
            "$18.15M (13.9%)",
            "Short by $1.4M."
          ],
          [
            "We get 70% of everything",
            "$13.76M (10.5%)",
            "Well short. Be honest that the target is tight."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What share d of simple calls must move to the app to hit $19.56M?",
            "2.8M x d x $8 + $4.8M + $3.0M + $0.65M = $19.56M",
            "22.4d = 11.11, so d = 49.6%, about 50%"
          ],
          [
            "If only 30% move to the app, what handle-time cut h is needed on transactional calls?",
            "$6.72M + $48.0M x h + $3.0M + $0.65M = $19.56M",
            "48h = 9.19, so h = 19.1%"
          ],
          [
            "What is the payback in months if the one-time cost is $3M?",
            "$3M = ($19.65M / 12) x months",
            "months = 3 / 1.64 = 1.8 months"
          ],
          [
            "How many calls at the average $16.30 would have to disappear to save $19.56M?",
            "$16.30 x n = $19.56M",
            "n = 1.2M calls, which is 15% of 8M"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Customers do not use the app",
            "Savings fall quickly if fewer than 50% of simple calls move",
            "Add phone menu nudges and text links, and fix the top journeys"
          ],
          [
            "Satisfaction falls",
            "Cheaper calls can feel worse",
            "Watch satisfaction and first-call resolution weekly, and pause any lever that hurts them"
          ],
          [
            "Rushed agents make mistakes",
            "Faster calls may cause repeat calls",
            "Give better tools, not just time targets, and watch repeat rate"
          ],
          [
            "Complex calls get worse",
            "Fraud and complaint callers need care",
            "Keep humans and do not cut handle time on complex calls"
          ],
          [
            "Savings arrive late",
            "Changes take months to build",
            "Stage the roll-out and track savings monthly"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Contact center",
            "The team that answers customer calls and chats"
          ],
          [
            "Call deflection",
            "Moving a call to a cheaper channel, such as the app"
          ],
          [
            "Handle time",
            "How long an agent spends on one call"
          ],
          [
            "IVR",
            "The phone menu that callers hear before they reach an agent"
          ],
          [
            "First-call resolution",
            "Share of issues solved on the first contact"
          ],
          [
            "Repeat contact",
            "A caller who calls again for the same issue"
          ],
          [
            "Guardrail metric",
            "A number you watch to make sure a change does no harm"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Using one average cost per call",
            "Calls have three different costs: $8, $15 and $30. Size each pool."
          ],
          [
            "Cutting cost without protecting service",
            "Name a guardrail, such as satisfaction, and say when you would pause."
          ],
          [
            "Assuming 100% of customers use the app",
            "Haircut it and show what happens at 30%."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ],
          [
            "Hiding the math",
            "Say each step out loud, with units, and check the total against the $19.56M target."
          ],
          [
            "Forgetting to say assumptions",
            "Say 'I will assume...' and invite correction."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "retention",
    "name": "Retention & Churn",
    "tags": [
      "tech",
      "banking",
      "consulting"
    ],
    "when": "Retention is falling, customers leave, or LTV is dropping.",
    "example": "E-commerce retention fell 65% to 55% while CAC rose: test old vs new cohorts, segment mix and timing, then size the prize. Same numbers as the E-commerce Retention Decline case.",
    "speak": [
      [
        "C: Clarify",
        "So retention fell from 65% to 55% in six months, and we have 480K active users. We spent an extra $500K a month on acquisition and profit is still falling. I will define retention as the share of last month's active users who order this month. Can I ask: do older customers retain differently than before, what changed in acquisition, and what is a retained user worth? If I do not get data, I will assume."
      ],
      [
        "L: Lay out",
        "I will ask three questions. Who is leaving, old or new customers? Why are the new ones leaving? And what is a fix worth?"
      ],
      [
        "E: Evaluate",
        "Customers older than 12 months hold at about 66%, so the product is not broken. New customers fell from 61% to 44%, and they are now half of the base, up from 20%. Before: 0.8 x 66 + 0.2 x 61 = 65. Now: 0.5 x 66 + 0.5 x 44 = 55. If new customers had stayed at 61%, we would be at 63.5, so 8.5 of the 10 points are weaker new customers and 1.5 are mix. Each point is 4,800 users. Back to the category 60% is 24K users, at $120 a year each, which is $2.88M a year."
      ],
      [
        "A: Assess",
        "So we pay 50% more for a customer, $18 versus $12, who stays less. LTV to CAC fell from 12.5 to 7.2. That is still above 3 on average, but the newest channels are worse than the average. A $1.2M fix breaks even at 10K users, which is 2.1 points. If only half of it works, we still net $0.24M."
      ],
      [
        "R: Recommend",
        "I recommend we fix new-customer quality and early life, not the whole product. Two reasons: 85% of the drop sits in new customers, and the fix pays back with only 2.1 points. First, cap coupon and paid social channels with a low 90-day LTV to CAC and shift money to referral, search and email. Second, build a day-14 to day-60 onboarding and second-order program and fix the top support issues for new users. Risks: I may be wrong on the channel, and cutting acquisition too hard slows growth, so I would run a holdout by channel first. A defensible alternative is to keep acquisition as it is and fix onboarding only, if the test shows no gap between channels."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Retention fell from 65% to 55% in six months<br/>480K active users. Extra $500K a month on acquisition\"]\nC --> L[\"L: Lay out<br/>1 Who is leaving, old or new customers?<br/>2 Why are new customers leaving?<br/>3 What is a fix worth?\"]\nL --> E[\"E: Evaluate<br/>Split the customers, then size the prize\"]\nE --> E1[\"Who<br/>Old customers hold at 66%<br/>New customers fell from 61% to 44%\"]\nE --> E2[\"Why<br/>New customers are now half the base, up from 20%<br/>CAC rose $12 to $18\"]\nE --> E3[\"Prize<br/>Back to 60% = 5 points = 24K users<br/>x $120 a year = $2.88M\"]\nE1 --> A[\"A: Assess<br/>85% of the drop is weaker new customers<br/>A $1.2M fix breaks even at 10K users, 2.1 points\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Fix new-customer quality and early life.<br/>Cap weak channels, add onboarding, test first\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Where we are<br/>Retention 65% to 55%. Category is 60%<br/>Gap to category = <b>5 points</b>\"]\nA --> B[\"2 Who is leaving?<br/>Old customers 66% before and now<br/>New customers 61% before, <b>44% now</b>\"]\nB --> B1[\"Before: 80% old x 66% + 20% new x 61%<br/>= 52.8 + 12.2 = <b>65%</b>\"]\nB --> B2[\"Now: 50% old x 66% + 50% new x 44%<br/>= 33 + 22 = <b>55%</b>\"]\nB1 --> B3[\"Split the 10 point drop<br/>Mix: 65 to 63.5 = <b>1.5 points</b><br/>Quality: 63.5 to 55 = <b>8.5 points</b>\"]\nB2 --> B3\nA --> C[\"3 What did the extra spend buy?<br/>$500K / $18 CAC = <b>28K customers a month</b><br/>who stay less\"]\nB3 --> D[\"4 What is the prize?<br/>1 point = 4,800 users<br/>5 points = <b>24K users</b>\"]\nD --> D1[\"24K x $10 profit a month x 12<br/>= <b>$2.88M a year</b>\"]\nD1 --> E[\"5 Does a $1.2M fix pay?<br/>$2.88M - $1.2M = <b>$1.68M net</b>\"]\nE --> F1[\"Break-even<br/>$1.2M / $120 = 10K users<br/>= 2.1 points\"]\nD1 --> F2[\"Needed for 60% overall<br/>0.5 x 66 + 0.5 x r = 60<br/>New retention r = 54%\"]\nD1 --> F3[\"If only half works<br/>12K x $120 = $1.44M<br/>Net still $0.24M\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,B1,B2,B3 n1;\nclass C,D,D1 n2;\nclass E n4;\nclass F1,F2,F3 n3;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Ask the questions below and get the data you need. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "Retention definition, old versus new customers, CAC, value per user, fix budget"
          ],
          [
            "L Lay out",
            "Say your three questions before calculating",
            "Shows structure and lets the interviewer steer",
            "Who is leaving? Why are new customers leaving? What is a fix worth?"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "Old 66%, new 44%. New customers are half the base. 8.5 of 10 points are quality"
          ],
          [
            "A Assess",
            "Say what the numbers mean: size of prize, break-even, what if it goes wrong",
            "Turns numbers into a business view",
            "24K users is worth $2.88M a year. A $1.2M fix breaks even at 10K users"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Fix new-customer quality and onboarding. Alternative: onboarding only, if the channel test shows no gap"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How big is the drop?",
            "65% - 55%. Category is 60%",
            "-10 points. 5 points below the category"
          ],
          [
            "2",
            "Who is leaving?",
            "Old customers 66% before and now. New customers 61% before, 44% now. New share of the base 20% before, 50% now",
            "New customers"
          ],
          [
            "3",
            "How much is quality, how much is mix?",
            "Hold new at 61%: 0.5 x 66 + 0.5 x 61 = 63.5. Mix = 65 - 63.5. Quality = 63.5 - 55",
            "Mix 1.5, quality 8.5 (85%)"
          ],
          [
            "4",
            "What is getting back to 60% worth?",
            "5 points x 4,800 users = 24,000 users. Each user earns $10 a month = $120 a year",
            "$2.88M a year"
          ],
          [
            "5",
            "What is left after the fix cost?",
            "$2.88M - $1.2M",
            "$1.68M a year"
          ],
          [
            "6",
            "When does the fix break even?",
            "$1.2M / $120 = 10,000 users. 10,000 / 4,800",
            "2.1 points"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Result",
          "What it tells you"
        ],
        "rows": [
          [
            "New-customer retention only reaches 50%",
            "Overall 58%. +3 points = 14,400 users = $1.73M a year",
            "Still above the $1.2M cost, but short of the category average."
          ],
          [
            "Old customers slip 2 points to 64%",
            "Overall 54%. -1 point = -4,800 users = -$0.58M a year",
            "Watch the old base too. Small slips add up."
          ],
          [
            "Only half of the 24K users come back",
            "12K users x $120 = $1.44M. Net $0.24M",
            "Still pays, but the margin for error is thin."
          ],
          [
            "A user is worth $5 a month, not $10",
            "24K x $60 = $1.44M. Break-even needs 20K users (4.2 points)",
            "If we win back low-value users, the fix is much harder to justify."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What retention must new customers reach for 60% overall?",
            "0.5 x 66 + 0.5 x r = 60",
            "33 + 0.5 r = 60, so r = 54%"
          ],
          [
            "How many retained users does a $1.2M fix need to break even?",
            "$120 x n = $1,200,000",
            "n = 10,000 users, which is 2.1 points"
          ],
          [
            "How low can the value per user fall before 24K users no longer covers $1.2M?",
            "24,000 x v = $1,200,000",
            "v = $50 a year, about $4.17 a month"
          ],
          [
            "What share of the base can be new customers (at 44%) with old at 66% and overall 55%?",
            "66 x (1 - s) + 44 x s = 55",
            "66 - 22 s = 55, so s = 0.5, or 50%"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Wrong cause",
            "It may be the channel, not onboarding, or both",
            "Split retention by channel and run a holdout test before spending"
          ],
          [
            "Cutting acquisition too hard",
            "Fewer new customers means slower growth",
            "Cut only channels with weak 90-day LTV to CAC and move money to better ones"
          ],
          [
            "Fix works only partly",
            "Most programs deliver less than planned",
            "Plan for half, as in the check above, and track monthly"
          ],
          [
            "Coupons train customers",
            "People only buy when there is a discount",
            "Offer a second-order reward, not a bigger first coupon"
          ],
          [
            "Support overload",
            "Tickets are up 22% in the first 60 days",
            "Fix the top ticket reasons for new users first"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Retention",
            "Share of last month's active users who order again this month"
          ],
          [
            "Cohort",
            "A group of customers who joined in the same period"
          ],
          [
            "CAC",
            "Customer acquisition cost: what it costs to win one new customer"
          ],
          [
            "LTV",
            "Lifetime value: the profit one customer brings over their life with us"
          ],
          [
            "Mix effect",
            "A change in the total just because the group sizes changed"
          ],
          [
            "Holdout test",
            "Leave one group out of a change so you can compare"
          ],
          [
            "Onboarding",
            "The steps that help a new customer get value in the first weeks"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Declaring a root cause before testing old versus new customers",
            "Split the data first. Here old customers are flat, so the product is not the problem."
          ],
          [
            "Calling LTV to CAC healthy without looking at the trend",
            "It fell from 12.5 to 7.2. Check by channel, because the newest channels are worse than the average."
          ],
          [
            "Mixing 'retention of the base' with 'cohort retention'",
            "State your definition at the start and use it the whole way."
          ],
          [
            "Looking only at the overall number",
            "Overall 55% hides old at 66% and new at 44%. Always split."
          ],
          [
            "Skipping the break-even",
            "Say what the fix costs and how many users it needs. Here, 10K users or 2.1 points."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "metric",
    "name": "Metric Diagnosis (Product)",
    "tags": [
      "tech"
    ],
    "when": "'DAU / revenue / conversion dropped X%. What happened?'",
    "example": "DAU down 8% in a week, concentrated on Android after release 8.4: cut the data, find the mechanism, then fix and add guardrails. Same numbers as the Social App: DAU Down 8% case.",
    "speak": [
      [
        "C: Clarify",
        "So DAU on a social app fell about 8% week over week, from 10M to 9.23M. I will treat DAU as users with at least one session in a day. Can I ask: has logging or the DAU definition changed, can I see the drop by platform, and when did it start? If I do not get data, I will assume."
      ],
      [
        "L: Lay out",
        "I will ask three questions. Is the drop real? Where is it, and when did it start? Why did it happen, and what is it costing us? I will cut the data before I guess causes."
      ],
      [
        "E: Evaluate",
        "The data is clean, so the drop is real. Android is 55% of DAU, 5.5M users, and fell 14%. iOS and web are flat. 0.55 x 14% is 7.7 points, so Android explains the whole 8%. It started the day after release 8.4 reached 100%, and it hits existing users only. Push-started sessions fell 35% while organic opens are flat. So p x 35% = 14%, which means 40% of Android DAU came from push."
      ],
      [
        "A: Assess",
        "So my view is that release 8.4 broke push on Android. We lose 770K users. At about $0.10 a day each, that is $77K a day, or $539K a week, and we hit $1M in 13 days. To confirm, I would compare 8.4 with older versions on push delivery, token registration and opt-in."
      ],
      [
        "R: Recommend",
        "I recommend we hotfix or roll back the push part of 8.4 now. Two reasons: Android is the whole drop, and every day costs about $77K. Next steps: re-register push tokens, send a win-back message, and watch DAU by version. For prevention, use staged rollouts at 1%, 10% and 50% with auto-halt on session and push metrics. A 10% rollout would have cost us about $7.7K a day. Risk: push may be only part of the cause, so I would keep checking. A defensible alternative is to pause the rollout and fix forward, if a rollback would break other features."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Social app: daily active users fell 8% in a week<br/>10M down to 9.23M. What happened and what do we do?\"]\nC --> L[\"L: Lay out<br/>1 Is the drop real?<br/>2 Where is it, and when did it start?<br/>3 Why, and what is it costing?\"]\nL --> E[\"E: Evaluate<br/>Check the data, cut it by platform, then by channel\"]\nE --> E1[\"Real?<br/>No logging or definition change<br/>Backend and warehouse agree\"]\nE --> E2[\"Where and when<br/>Android is 55% of DAU and fell 14%<br/>0.55 x 14% = 7.7 points. Started the day after release 8.4\"]\nE --> E3[\"Why<br/>Push sessions fell 35%, organic opens are flat<br/>14% / 35% = 40% of Android DAU came from push\"]\nE1 --> A[\"A: Assess<br/>8.4 likely broke push on Android<br/>We lose 770K users and about $77K a day\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Hotfix or roll back the push part of 8.4 now<br/>Then add staged rollouts and push alerts\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Size of the drop<br/>DAU 10M to 9.23M<br/>-0.77M = <b>-7.7%, about 8%</b>\"]\nA --> B[\"2 Where is it?<br/>Android 55% = 5.5M, down 14%<br/>5.5M x 14% = <b>0.77M lost</b>\"]\nB --> B1[\"iOS 3.5M and web 1.0M are flat<br/>So Android is <b>all of the drop</b>\"]\nB --> C[\"3 Why Android?<br/>Push sessions -35%, organic flat<br/>p x 35% = 14%, so p = <b>40%</b>\"]\nC --> C1[\"Check: 40% x 5.5M = 2.2M via push<br/>2.2M x 35% = <b>0.77M</b>\"]\nB1 --> D[\"4 What does it cost?<br/>0.77M x $0.10 a day<br/>= <b>$77K a day</b>\"]\nC1 --> D\nD --> D1[\"Per week<br/>$77K x 7 = <b>$539K</b>\"]\nD1 --> E[\"5 How fast must we fix it?<br/>Loss grows every day we wait\"]\nE --> F1[\"Break-even at $1M lost<br/>$1M / $77K = <b>13 days</b>\"]\nE --> F2[\"If fixed in 3 days<br/>$77K x 3 = <b>$231K lost</b>\"]\nE --> F3[\"If a 10% rollout had caught it<br/>10% x $77K = <b>$7.7K a day</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,B1 n1;\nclass C,C1 n2;\nclass D,D1 n3;\nclass E n4;\nclass F1,F2,F3 n1;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Ask the questions below and get the data you need. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "How DAU is defined, data quality, platforms, timing, new versus existing users"
          ],
          [
            "L Lay out",
            "Say your three questions before calculating",
            "Shows structure and lets the interviewer steer",
            "Is it real? Where and when? Why, and what does it cost?"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units. Cut the data before you guess causes",
            "The interview has several separate math problems, often with algebra",
            "Android 55% x 14% = 7.7 points. Push is 40% of Android DAU"
          ],
          [
            "A Assess",
            "Say what the numbers mean: size, cost per day, how long you can wait",
            "Turns numbers into a business view",
            "770K users and $77K a day. $1M is lost in 13 days"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Hotfix or roll back push in 8.4 now. Alternative: pause the rollout and fix forward"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How big is the drop?",
            "10M - 9.23M = 0.77M. 0.77M / 10M",
            "-7.7%, about 8%"
          ],
          [
            "2",
            "Where is it?",
            "Android is 55% x 10M = 5.5M. 5.5M x 14%. iOS and web are 0%",
            "0.77M, all Android"
          ],
          [
            "3",
            "Does Android explain the total?",
            "0.55 x 14% = 7.7 points",
            "Yes, the whole drop"
          ],
          [
            "4",
            "How much of Android DAU comes from push?",
            "Push sessions fell 35% and Android DAU fell 14%. p x 35% = 14%",
            "p = 40% (2.2M users)"
          ],
          [
            "5",
            "What does it cost per day?",
            "0.77M x $0.10 per DAU per day",
            "$77K a day"
          ],
          [
            "6",
            "How long until we lose $1M?",
            "$1M / $77K a day",
            "13 days"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Result",
          "What it tells you"
        ],
        "rows": [
          [
            "We fix it in 1 day, not 5",
            "$77K lost, not $385K",
            "Speed saves real money. Hotfix first, polish later."
          ],
          [
            "iOS also fell 14%",
            "Total fall = 0.9 x 14% = 12.6%",
            "Then it is not an Android release issue. Look at the backend or something outside the app."
          ],
          [
            "Android were only 30% of DAU",
            "0.30 x 14% = 4.2 points only",
            "That would not explain an 8% drop. Keep searching."
          ],
          [
            "Each DAU earns $0.20 a day, not $0.10",
            "$154K a day lost, $1M in about 6.5 days",
            "A higher value per user makes the fix more urgent."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What drop d in Android would explain a total 8% drop, if Android is 55% of DAU and nothing else moved?",
            "0.55 x d = 8",
            "d = 14.5%. We saw 14%, so it fits"
          ],
          [
            "What share p of Android DAU comes from push, if push sessions fell 35% and Android DAU fell 14%?",
            "p x 35% = 14%",
            "p = 0.40, so 40%"
          ],
          [
            "After how many days d have we lost $1M at $77K a day?",
            "77,000 x d = 1,000,000",
            "d = 13 days"
          ],
          [
            "What rollout share r would have kept the total DAU loss under 1%?",
            "0.55 x 14% x r = 1%",
            "7.7% x r = 1%, so r = 13%. A 10% rollout would have lost 0.77%"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Wrong cause",
            "Push may be only part of the story",
            "Compare 8.4 with older versions on push delivery, tokens and opt-in"
          ],
          [
            "The fix is slow",
            "Each day costs about $77K",
            "Roll back the push part first if a hotfix is not ready within days"
          ],
          [
            "Users already lost do not return",
            "Some will have formed a new habit",
            "Send a win-back message and track DAU by app version"
          ],
          [
            "Same bug returns",
            "Another release may break something else",
            "Use staged rollouts at 1%, 10% and 50% with auto-halt on session and push metrics"
          ],
          [
            "Bad reading of the data",
            "A logging error could fake a drop",
            "We checked: backend and warehouse agree. Keep that check in the routine"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "DAU",
            "Daily active users: users with at least one session in a day"
          ],
          [
            "Segment",
            "A slice of users, such as Android or iOS"
          ],
          [
            "Push notification",
            "A message the app sends to the phone that brings a user back"
          ],
          [
            "Organic open",
            "A user opens the app without being prompted by a message"
          ],
          [
            "Staged rollout",
            "Releasing a new version to a small share of users first"
          ],
          [
            "Guardrail metric",
            "A number we watch to make sure a change did not break something"
          ],
          [
            "Percentage points",
            "The plain difference between two percentages. 55% x 14% gives 7.7 points of total DAU"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Brainstorming ten causes before looking at the data",
            "Cut the data by platform, version and channel first. The data shows where to look."
          ],
          [
            "Forgetting to check data quality first",
            "Ask about logging and definition changes first. Here both are clean."
          ],
          [
            "Not computing that Android explains the whole drop",
            "Say 0.55 x 14% = 7.7 points, out loud."
          ],
          [
            "Stopping at the cause",
            "Size the cost ($77K a day) and say how fast you must act."
          ],
          [
            "Giving a fix with no prevention",
            "Add staged rollouts and push alerts so it does not happen again."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "unit",
    "name": "Unit Economics & Credit",
    "tags": [
      "banking",
      "tech"
    ],
    "when": "Card, lending or subscription profitability. 'Is this customer / product profitable?'",
    "example": "Card profit per account fell $100 to $80 with credit losses improving: bridge each P&L line, find the margin squeeze, size the levers. Same numbers as the Credit Card Profit Decline case.",
    "speak": [
      [
        "C: Clarify",
        "So a card issuer has 5M accounts, flat, and profit fell from $500M to $400M, even though credit losses improved. That is $100 to $80 per account. Can I ask: what happened to funding cost and rates, did spend or the mix of revolvers change, and what is the goal? If I do not get data, I will assume."
      ],
      [
        "L: Lay out",
        "I will ask three questions. Is it revenue or cost? Which lines moved? And what can we win back? I will build profit per account first, because a line that improved can hide one that got worse."
      ],
      [
        "E: Evaluate",
        "Profit per account fell $20, and $20 x 5M is $100M. Revenue is flat at $520: interest is up $5 and fees are down $5. Costs are up $20: funding up $15, rewards up $10, credit losses down $5. The bridge adds up: 0 minus 20 is minus 20. On a $2,500 balance, funding cost went from 2.4% to 3.0%, which is the $15."
      ],
      [
        "A: Assess",
        "So this is a margin squeeze, not a credit problem. Funding cost rose faster than APRs repriced, because promo balances do not reprice, and we matched rivals on rewards. Each $1 per account is $5M. Repricing is worth $5 to $8, targeted rewards $4 to $6 and fees $2 to $3, so $11 to $17, or $55M to $85M. A $50M goal needs about 71% of the midpoint."
      ],
      [
        "R: Recommend",
        "I recommend we recover margin and leave underwriting alone. Two reasons: costs, not credit, caused the drop, and the levers are worth $55M to $85M, more than we lost. First reprice faster and manage promo balances, then target rewards at low-engagement accounts, then review fees. Risks are attrition, where losing 13.75% of accounts would wipe out the low end, and rising rates, so I would test by segment with a holdout. A defensible alternative is repricing and fees only, worth $35M to $55M, if rewards cuts look risky."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>5M accounts, flat. Profit fell from $500M to $400M<br/>That is $100 to $80 per account. Credit losses improved\"]\nC --> L[\"L: Lay out<br/>1 Is it revenue or cost?<br/>2 Which lines moved?<br/>3 What can we win back?\"]\nL --> E[\"E: Evaluate<br/>Build profit per account, then compare each line\"]\nE --> E1[\"Revenue<br/>Flat at $520<br/>Interest +$5, fees -$5\"]\nE --> E2[\"Costs<br/>Up $20 to $440<br/>Funding +$15, rewards +$10, credit loss -$5\"]\nE --> E3[\"Win back<br/>Repricing $5 to $8, rewards $4 to $6, fees $2 to $3<br/>= $11 to $17 = $55M to $85M\"]\nE1 --> A[\"A: Assess<br/>A margin squeeze, not a credit problem<br/>Even the low end, $55M, beats a $50M goal\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Recover margin and leave underwriting alone<br/>Reprice, target rewards, review fees, test first\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 Where we are<br/>$100 to $80 per account<br/>x 5M = $500M to $400M = <b>-$100M</b>\"]\nA --> B[\"2 Revenue per account<br/>Interest +5, interchange 0, fees -5<br/>$520 to $520 = <b>flat</b>\"]\nA --> C[\"3 Cost per account<br/>Funding +15, rewards +10, credit loss -5<br/>$420 to $440 = <b>+$20</b>\"]\nC --> C1[\"Why funding rose<br/>On a $2,500 balance: 2.4% to 3.0%<br/>$60 to $75 = <b>+$15</b>\"]\nB --> D[\"4 Check the bridge<br/>Revenue 0 - cost 20 = <b>-$20</b><br/>-$20 x 5M = <b>-$100M</b>\"]\nC --> D\nD --> E[\"5 What can we win back?<br/>Repricing 5 to 8, rewards 4 to 6, fees 2 to 3<br/>= <b>$11 to $17 = $55M to $85M</b>\"]\nE --> F1[\"Goal is $50M = $10 an account<br/>Needs <b>71%</b> of the $14 midpoint\"]\nD --> F2[\"If funding rises 0.5 points more<br/>2,500 x 0.5% = $12.50<br/>= <b>-$62.5M</b>\"]\nE --> F3[\"Break-even attrition<br/>$55M / $80 = 687.5K accounts<br/>= <b>13.75%</b> of 5M\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C,C1 n1;\nclass D n2;\nclass E n4;\nclass F1,F2,F3 n3;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Ask the questions below and get the data you need. Say what you will assume if you do not get it",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "Account count, rates, rewards, fees, balance, goal"
          ],
          [
            "L Lay out",
            "Say your questions before calculating",
            "Shows structure and lets the interviewer steer",
            "Is it revenue or cost? Which lines moved? What can we win back?"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "Profit per account $100 to $80. Costs up $20, revenue flat"
          ],
          [
            "A Assess",
            "Say what the numbers mean: what is driving it, what the fixes are worth, what could go wrong",
            "Turns numbers into a business view",
            "A margin squeeze. $11 to $17 per account is $55M to $85M"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Recover margin, do not touch underwriting. Alternative: reprice and fees only"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How big is the profit drop?",
            "($100 - $80) per account x 5M accounts",
            "-$100M"
          ],
          [
            "2",
            "Did revenue move?",
            "Interest +5, interchange 0, fees -5. $520 to $520",
            "Flat"
          ],
          [
            "3",
            "Did costs move?",
            "Funding +15, rewards +10, credit loss -5, others 0",
            "+$20 per account"
          ],
          [
            "4",
            "Does the bridge add up?",
            "0 revenue change - 20 cost change = -20. -20 x 5M",
            "-$100M. It matches"
          ],
          [
            "5",
            "What can we win back?",
            "Repricing 5 to 8 + rewards 4 to 6 + fees 2 to 3, then x 5M",
            "$55M to $85M"
          ],
          [
            "6",
            "Does that reach a $50M goal?",
            "$50M / 5M = $10 per account. Midpoint is $14. 10 / 14",
            "Need 71% of the midpoint"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Result",
          "What it tells you"
        ],
        "rows": [
          [
            "Funding cost rises another 0.5 points",
            "-$12.50 per account. Profit $67.50, or $337.5M",
            "The squeeze can keep growing. Repricing speed matters."
          ],
          [
            "Only 60% of the midpoint works",
            "$8.40 per account = $42M back. Profit $442M",
            "Short of the $50M goal. Push the faster levers first."
          ],
          [
            "Credit losses go back to $120",
            "-$5 per account = -$25M. Profit $375M",
            "The credit gain may not last. Do not count on it."
          ],
          [
            "Repricing works fully at $8 and nothing else does",
            "+$40M. Profit $440M",
            "Repricing alone covers most of the goal."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "How much must APRs rise to win back $8 per account on a $2,500 balance?",
            "2,500 x x = 8",
            "x = 0.0032, so about 0.32 points"
          ],
          [
            "If a rewards change applies to 40% of accounts and must save $5 per account overall, how much per affected account?",
            "0.4 x s = 5",
            "s = $12.50 per affected account"
          ],
          [
            "What share of the $14 midpoint must work to recover $50M ($10 per account)?",
            "14 x r = 10",
            "r = 0.714, so 71%"
          ],
          [
            "How many points can funding cost rise before profit hits zero?",
            "2,500 x p = $80",
            "p = 0.032, so 3.2 points. Funding would go from 3.0% to 6.2%"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "Customers leave after a rewards change",
            "Heavy users may move to a rival",
            "Change rewards only for low-engagement accounts and test with a holdout. 3% attrition costs about $12M"
          ],
          [
            "Rules on fees",
            "Regulators already hit late fee income",
            "Plan with lower fees and avoid relying on them"
          ],
          [
            "Rates keep rising",
            "Funding cost can climb again",
            "Move APRs faster and watch the lag on promo balances"
          ],
          [
            "Credit losses return",
            "Losses improved this year but may not stay low",
            "Watch early delinquency and do not cut loss reserves"
          ],
          [
            "Rivals react",
            "A rival may raise rewards again",
            "Compete on the flagship card only and track attrition monthly"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Funding cost",
            "What the bank pays to get the money it lends"
          ],
          [
            "Interchange",
            "A fee the merchant pays when a customer swipes the card"
          ],
          [
            "APR",
            "The yearly interest rate a customer pays on a balance"
          ],
          [
            "Charge-off",
            "A balance the bank writes off because it will not be paid"
          ],
          [
            "Revolver and transactor",
            "A revolver carries a balance and pays interest. A transactor pays in full each month"
          ],
          [
            "Promo balance",
            "A balance at a special low rate that does not reprice"
          ],
          [
            "Margin squeeze",
            "Costs rise faster than income, so profit per account falls"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Assuming credit losses must be the cause",
            "Look at every line. Here credit losses improved by $5."
          ],
          [
            "Looking only at the portfolio total",
            "Work per account first ($100 to $80), then multiply by 5M."
          ],
          [
            "Not reconciling the bridge back to $100M",
            "Add up every line: +5 -5 -15 -10 +5 = -20, and -20 x 5M = -$100M."
          ],
          [
            "Presenting the full fix as the plan",
            "Haircut it and show a range, such as 60% of the midpoint."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it. You drive the case."
          ],
          [
            "Forgetting what could go wrong",
            "Name attrition, fee rules and rates, and say how you will test."
          ]
        ]
      }
    ],
    "table": {
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
    "id": "product",
    "name": "Product Deep-Dive",
    "tags": [
      "banking",
      "tech"
    ],
    "when": "The interviewer shows you a product, feature or app screen and asks what to do with it. Common at banks and fintechs: a card, a savings account, a loan, or a mobile app feature.",
    "example": "The Digital Feature case in plain words, with the same numbers as the Digital Feature: Scale It or Not? case. Full case in the Cases section.",
    "speak": [
      [
        "C: Clarify",
        "So we are deciding whether to spend $2M to raise use of this feature from 25% to 40% of 4M app customers, and it should pay back within 18 months. Can I ask whether there is a random group that was never shown the feature, and what an account is worth? If not, I will assume."
      ],
      [
        "L: Lay out",
        "I will check three things. Is the lift real? What is one customer worth? And what does scaling add, and what could go wrong?"
      ],
      [
        "E: Evaluate",
        "The team compares users with non-users and sees $1,600 more spend. But people who pick a budget tool are already careful, so that is not just the feature. The fair test shows $45 more per customer offered. Only a quarter use it, so that is $180 per user. The first number was about nine times too big. Valued at 2% of spend, plus fewer leavers and fewer calls, the feature earns $3.6M plus $1.6M plus $1.44M, which is $6.64M."
      ],
      [
        "A: Assess",
        "Net of $1.5M running cost, that is $5.1M, so the feature already pays for itself. Going from 25% to 40% adds 600K users, or about $4.0M a year. New users are probably less keen, so I plan on half, which is $2.0M. That repays the $2M in about 12 months. To beat 18 months, new users need only 33% of today's gain."
      ],
      [
        "R: Recommend",
        "I recommend yes, in stages. Try the promotion on half of the non-users for eight weeks, and scale up only if each new user gives at least half of today's gain. Two reasons: the effect is proven by the holdout, and the payback has room. I would stop if complaints, late payments or opt-outs rise. As an alternative, if the test is weak, I would improve the feature first and spend less on promotion."
      ]
    ],
    "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Spend $2M to lift feature use from 25% to 40%?<br/>Payback needed in 18 months<br/>4M app customers\"]\nC --> L[\"L: Lay out<br/>1 Is the lift real?<br/>2 What is it worth?<br/>3 What does scaling add, and what can go wrong?\"]\nL --> E[\"E: Evaluate<br/>Use the random holdout, not user vs non-user\"]\nE --> E1[\"Is it real<br/>Users vs non-users: +$1,600<br/>Holdout test: +$45 per customer<br/>= $180 per user\"]\nE --> E2[\"Worth today<br/>Spend $3.6M + retention $1.6M<br/>+ fewer calls $1.4M = $6.6M<br/>Net of $1.5M cost = $5.1M\"]\nE --> E3[\"Scaling<br/>600K new users x $6.64 = $4.0M<br/>New users weaker: plan 50% = $2.0M<br/>Payback 12 months\"]\nE1 --> A[\"A: Assess<br/>First number was 9 times too big<br/>Feature still pays for itself<br/>Need only 33% of today's gain per user\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Yes, in stages. Test on half of non-users for 8 weeks<br/>Scale if each new user gives half the gain<br/>Stop if complaints or late payments rise\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
    "exampleCharts": [
      {
        "id": "numbers",
        "title": "The numbers in one chart",
        "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
        "code": "flowchart TD\nA[\"1 What the team showed<br/>Users $10,200 - non-users $8,600<br/>= <b>$1,600 more spend</b>\"]\nA --> B[\"2 Why it is not fair<br/>People who pick a budget tool<br/>were already careful with money\"]\nB --> C[\"3 Fair test (random holdout)<br/>$9,045 - $9,000 = <b>$45 per customer</b><br/>$45 / 25% use = <b>$180 per user</b><br/>$1,600 / $180 = 8.9 times too big\"]\nC --> D1[\"4 More spend<br/>4M x $45 x 2%<br/>= <b>$3.6M</b>\"]\nC --> D2[\"5 Fewer leavers<br/>4M x 0.1 pt = 4,000 x $400<br/>= <b>$1.6M</b>\"]\nC --> D3[\"6 Fewer service calls<br/>4M x 0.036 = 144,000 x $10<br/>= <b>$1.44M</b>\"]\nD1 --> E[\"7 Total value<br/>3.6 + 1.6 + 1.44 = <b>$6.64M</b><br/>Per user, with 1M users = <b>$6.64</b><br/>Minus $1.5M cost = <b>$5.1M net</b>\"]\nD2 --> E\nD3 --> E\nE --> F[\"8 Scale from 25% to 40%<br/>600K new users x $6.64 = $4.0M<br/>Plan 50% of that = <b>$2.0M a year</b><br/>$2M / $2.0M = <b>12 months</b>\"]\nF --> G1[\"Break-even for 18 months<br/>Need $2M / 1.5 = $1.33M a year<br/>= <b>33% of today's gain per user</b>\"]\nF --> G2[\"Needed per new user<br/>$1.33M / 600K = <b>$2.22 a year</b><br/>vs $6.64 today\"]\nF --> G3[\"If new users give only 25%<br/>$1.0M a year<br/>payback <b>24 months, too slow</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C n1;\nclass D1,D2,D3 n2;\nclass E,F n3;\nclass G1,G2,G3 n4;"
      }
    ],
    "exampleTables": [
      {
        "title": "Step by step: what to do and why",
        "headers": [
          "Step",
          "What you do",
          "Why it matters",
          "In this case"
        ],
        "rows": [
          [
            "C Clarify",
            "Say the problem back in your own words. Ask for the goal, the bar and the data. Ask if there is a random test group",
            "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
            "$2M, 25% to 40%, 18-month payback, holdout group, value per item"
          ],
          [
            "L Lay out",
            "Say your three questions before you calculate",
            "Shows structure and lets the interviewer steer",
            "Is the lift real? What is it worth? What does scaling add?"
          ],
          [
            "E Evaluate",
            "Do the math out loud in short steps, with units",
            "The interview has several separate math problems, often with algebra",
            "Use the $45 holdout lift, not the $1,600 gap. Value is $6.64M"
          ],
          [
            "A Assess",
            "Say what the numbers mean: what you will really get, payback, break-even",
            "Turns numbers into a business view",
            "Scaling adds about $2.0M a year at 50%. Payback 12 months"
          ],
          [
            "R Recommend",
            "Give the decision first, then two reasons, then risks and next steps",
            "Several answers can be defended; what matters is that you commit and explain",
            "Yes, in stages. Alternative: hold the promotion and improve the feature first"
          ]
        ]
      },
      {
        "title": "The numbers, one simple example",
        "headers": [
          "Step",
          "What we are working out",
          "The math",
          "Result"
        ],
        "rows": [
          [
            "1",
            "How much extra does one user spend, fairly?",
            "$45 per customer / 25% use",
            "$180 per user"
          ],
          [
            "2",
            "What is the value of extra spend?",
            "4M x $45 x 2%",
            "$3.6M a year"
          ],
          [
            "3",
            "What is the value of fewer leavers and calls?",
            "4M x 0.1 pt = 4,000 x $400. 4M x 0.036 = 144,000 x $10",
            "$1.6M + $1.44M"
          ],
          [
            "4",
            "What is the feature worth today?",
            "$3.6M + $1.6M + $1.44M. Minus $1.5M cost. Per user: $6.64M / 1.0M users",
            "$6.64M, $5.1M net, $6.64 a user"
          ],
          [
            "5",
            "What would scaling add?",
            "600K new users x $6.64 = $4.0M. New users give 50% of that",
            "$2.0M a year"
          ],
          [
            "6",
            "What is the payback?",
            "$2M / $2.0M a year x 12",
            "12 months"
          ]
        ]
      },
      {
        "title": "Try changing one number",
        "headers": [
          "If this changes...",
          "Extra profit and payback",
          "What it tells you"
        ],
        "rows": [
          [
            "New users give 100% of today's gain",
            "$4.0M a year, 6 months",
            "Best case. Do not plan on it."
          ],
          [
            "New users give only 25% of today's gain",
            "$1.0M a year, 24 months",
            "Misses the 18-month bar. This is the case to test for."
          ],
          [
            "Net interchange is 1%, not 2%",
            "$1.45M a year, 16.5 months",
            "Spend value halves to $1.8M, so per user falls to $4.84. Still inside 18 months."
          ],
          [
            "The promotion only reaches 32.5% use (+7.5 points)",
            "$1.0M a year, 24 months",
            "300K new users x $6.64 x 50%. Too slow."
          ]
        ]
      },
      {
        "title": "Algebra and break-even you may be asked",
        "headers": [
          "Question you may be asked",
          "Set up the equation",
          "Solve"
        ],
        "rows": [
          [
            "What share s of today's gain per user must new users give to pay back in 18 months?",
            "600K x $6.64 x s = $2M / 1.5 = $1.33M",
            "3.98M x s = 1.33M, so s = 33.5%, about $2.22 per user"
          ],
          [
            "If new users give 50%, how many new users n are needed to pay back in 18 months?",
            "n x $6.64 x 0.5 = $1.33M",
            "n = 402,000, which is 10 points, so use must reach 35%"
          ],
          [
            "How many times too big was the first number?",
            "$1,600 = k x $180",
            "k = 8.9, about 9 times"
          ],
          [
            "How much extra spend x per customer would cover the $1.5M running cost on spend alone?",
            "4M x x x 2% = $1.5M",
            "x = 1.5M / 80,000 = $18.75, and the test shows $45"
          ]
        ]
      },
      {
        "title": "What could go wrong, and what to do",
        "headers": [
          "Risk",
          "In plain words",
          "What to do"
        ],
        "rows": [
          [
            "New users are less keen",
            "The easy users joined first. New ones may gain less",
            "Test on half of non-users and scale only if each gives at least half of today's gain"
          ],
          [
            "The promotion annoys customers",
            "Too many alerts can cause opt-outs and complaints",
            "Cap messages and watch opt-outs and complaints weekly"
          ],
          [
            "Late payments rise",
            "Spending insights could change how people spend",
            "Watch late payments in the test and stop if they rise"
          ],
          [
            "The effect fades",
            "Novelty can wear off after a few months",
            "Track results for at least a full billing cycle and for retention longer"
          ],
          [
            "Wrong data trail",
            "Users vs non-users hides a selection effect",
            "Always use the random holdout for the decision"
          ]
        ]
      },
      {
        "title": "Terms in plain words",
        "headers": [
          "Term",
          "Meaning"
        ],
        "rows": [
          [
            "Holdout group",
            "A random group that is not offered the feature. It is the fair comparison"
          ],
          [
            "Selection bias",
            "Users differ from non-users before the feature, so the gap is not only the feature"
          ],
          [
            "Adoption",
            "Share of customers who use the feature"
          ],
          [
            "Attrition",
            "Share of customers who leave in a year"
          ],
          [
            "Net interchange",
            "The fee the issuer keeps on card spend, here 2%"
          ],
          [
            "Payback",
            "Months to earn back the money spent"
          ],
          [
            "Guardrail metric",
            "A number you watch to make sure a change does no harm"
          ]
        ]
      },
      {
        "title": "Common beginner mistakes",
        "headers": [
          "Mistake",
          "What to do instead"
        ],
        "rows": [
          [
            "Comparing users with non-users",
            "Use the random holdout, because users chose the feature."
          ],
          [
            "Using the $1,600 gap as the benefit",
            "Use the $45 lift, which is $180 per user."
          ],
          [
            "Assuming new users act like today's users",
            "Haircut it, for example to 50%, and test it first."
          ],
          [
            "Waiting for the interviewer to give you data",
            "Ask for it, and ask if there is a random test group."
          ],
          [
            "Hiding the math",
            "Say each step out loud, with units, and check payback against the 18-month bar."
          ],
          [
            "Forgetting the risks and guardrails",
            "Name complaints, late payments and opt-outs, and say when you would stop."
          ]
        ]
      }
    ],
    "table": {
      "title": "What changes by product type",
      "headers": [
        "Product",
        "Main profit levers",
        "Main risks"
      ],
      "rows": [
        [
          "Rewards credit card",
          "Spend (interchange), revolve rate, annual fee",
          "Rewards cost, attrition, credit losses"
        ],
        [
          "Savings or deposit account",
          "Spread between loan yield and deposit rate, balance growth",
          "Rate sensitivity, deposit flight"
        ],
        [
          "Auto or personal loan",
          "Volume, yield, channel",
          "Default, collateral value, fraud"
        ],
        [
          "Digital feature or app",
          "Engagement, retention, lower cost to serve, cross-sell",
          "Low adoption, selection bias in measurement, privacy"
        ]
      ]
    }
  }
];
