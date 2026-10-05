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
    answer: {
          "speak": [
                [
                      "C: Clarify",
                      "So we have a 2,000-acre park with $150M of revenue, 3M visitors and about $48.6M of EBITDA. The board wants profit up 20 to 30% in 18 months, which is $10M to $15M, and is asking about leasing 1,000 more acres. I have $15M of capital to work with. Two quick questions: how does demand vary through the year, and how are prices set today?"
                ],
                [
                      "L: Lay out",
                      "Profit is revenue minus cost. On revenue I would look at price, spend per visitor and volume. On cost, labor, utilities, procurement and marketing. And before spending on land, I would check whether capacity is actually the constraint, by looking at utilization by season."
                ],
                [
                      "E: Evaluate",
                      "Average utilization is only 25%: about 10,000 visitors a day against 40,000 capacity. Summer weekends hit 90%, but that is about 30 days, while off-season weekdays run around 10%. So land only binds on a few peak days. Sizing five levers in EBITDA: yield pricing $3M, food and beverage $4.1M, premium tiers $3M, off-season programming $2.7M and cost efficiency $3M, about $15.8M in total."
                ],
                [
                      "A: Assess",
                      "I would not count on 100%. At 70% realization that is about $11M, up 23%, inside the board's range, and it uses only $6M to $8M of the $15M capital. On the lease: about 4,000 unmet visitors on 30 peak days is $6M of revenue, around $3M of EBITDA at best, against $2M a year of lease plus the capital to build attractions. It also does nothing for the 200 under-used days."
                ],
                [
                      "R: Recommend",
                      "Do not lease now. Start with yield pricing and cost efficiency because they are fast and cheap, then food and beverage and premium tiers, then off-season programming. Re-evaluate land after 12 months with peak-demand data, and only if unmet peak demand persists above roughly 10% of capacity. Risks are customer backlash on pricing, which I would mitigate with season-pass protections and online-only dynamic prices, and labor availability."
                ]
          ],
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>2,000-acre park: $150M revenue, 3M visitors, EBITDA $48.6M<br/>Board wants +20 to 30% in 18 months and asks about leasing 1,000 acres\"]\nC --> C2[\"Target = $10M to $15M of EBITDA, $15M capital available<br/>Revenue flat, costs up 6% in 2 years, one price all year\"]\n\nC2 --> L[\"L: Lay out<br/>Profit = revenue - costs<br/>1 Revenue: price, spend per visitor, volume<br/>2 Costs: labor, utilities, procurement, marketing<br/>3 Capacity: is land the constraint?\"]\n\nL --> E1[\"E: Evaluate<br/>Utilization: average 25%, summer weekends 90%, off-season 10%<br/>Land binds on about 30 days only\"]\nE1 --> E2[\"Five levers: yield pricing $3.0M, F&B $4.1M, premium $3.0M<br/>off-season $2.7M, cost efficiency $3.0M = $15.8M\"]\n\nE2 --> A1[\"A: Assess<br/>At 70% realization: about $11.0M, +23%<br/>Inside the board's range, using $6M to $8M of capital\"]\nA1 --> A2[\"Lease: unmet peak demand about $6M revenue, $3M EBITDA at best<br/>vs $2M a year lease plus build capital: does not pay\"]\n\nA2 --> R[\"R: Recommend<br/>Do not lease now\"]\nR --> R1[\"Phase 1: yield pricing and cost efficiency, fast and cheap\"]\nR --> R2[\"Phase 2: F&B and premium tiers. Phase 3: off-season programming\"]\nR --> R3[\"Re-evaluate land after 12 months with peak-demand data\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: is land the constraint, and what can the core earn?",
                      "note": "Two paths: test the capacity question, and size the levers.",
                      "code": "flowchart TD\nQ[\"Lease 1,000 acres, or fix the core?\"] --> U[\"Is land the constraint?<br/>Check utilization by season\"]\nQ --> LV[\"What can the current park earn?<br/>Size each lever in EBITDA\"]\n\nU --> U1[\"Average: 10,000 a day vs 40,000 capacity = 25%\"]\nU --> U2[\"Summer weekends: 36,000 = 90%, about 30 days\"]\nU --> U3[\"Off-season weekdays: 4,000 = 10%, about 200 days\"]\nU1 --> U4[\"Unmet peak: 4,000 x 30 days x $50 = $6M revenue<br/>about $3M EBITDA at best\"]\nU2 --> U4\nU3 --> U5[\"Empty days: land adds nothing there\"]\n\nLV --> V1[\"Yield pricing<br/>+4% x $75M gate = $3.0M\"]\nLV --> V2[\"F&B<br/>+$3 x 3M = $9M x 45% = $4.1M\"]\nLV --> V3[\"Premium tiers<br/>$4M x 75% = $3.0M\"]\nLV --> V4[\"Off-season events<br/>120K x $50 = $6M x 45% = $2.7M\"]\nLV --> V5[\"Cost efficiency<br/>3% x $101.4M = $3.0M\"]\nV1 --> P[\"Plan = $15.8M at full realization\"]\nV2 --> P\nV3 --> P\nV4 --> P\nV5 --> P\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef u fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef v fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,U,LV q;\nclass U1,U2,U3,U5 u;\nclass V1,V2,V3,V4,V5 v;\nclass U4,P r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: haircuts, risks and the lease test",
                      "note": "Realization scenarios, then the lease economics.",
                      "code": "flowchart TD\nB[\"Plan at full realization: $15.8M, +32%<br/>Haircut for execution risk\"] --> H[\"70% realization = $11.0M<br/>+23% on $48.6M EBITDA<br/>Inside the +20% to +30% target\"]\nB --> S1[\"50% realization<br/>$7.9M, +16%: below target\"]\nB --> S2[\"Pricing backlash, yield lever = 0<br/>$12.8M x 70% = $9.0M, +18%\"]\nB --> S3[\"100% realization<br/>$15.8M, +32%: above target\"]\n\nH --> K[\"Capital: about $6M to $8M of the $15M available\"]\n\nB --> LS[\"Lease test<br/>Unmet peak 4,000 x 30 days x $50 = $6M, about $3M EBITDA\"]\nLS --> LS1[\"Lease costs $2M a year plus capital to build attractions<br/>Near zero net, no help on 200 empty days\"]\nLS --> LS2[\"Would revisit if peak unmet demand is much larger<br/>e.g. 12,000 x 30 x $50 = $18M revenue, about $9M EBITDA\"]\n\nS1 --> R[\"Fix pricing and utilization first<br/>re-check land after 12 months\"]\nS2 --> R\nK --> R\nLS1 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass H,K,S3 good;\nclass S1,S2 bad;\nclass LS,LS1,LS2 mid;\nclass R out;"
                }
          ],
          "exampleTables": [
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
                                  "Profit measure, target, constraints, what changed",
                                  "EBITDA $48.6M; +$10M to $15M; $15M capital; costs +6%, revenue flat"
                            ],
                            [
                                  "Lay out",
                                  "Revenue, costs, and the capacity question",
                                  "Price, spend, volume; labor, utilities; is land binding?"
                            ],
                            [
                                  "Evaluate",
                                  "Utilization by season, then size the levers",
                                  "25% average, 90% peak days, 10% off-season; five levers $15.8M"
                            ],
                            [
                                  "Assess",
                                  "Haircut the plan and test the lease",
                                  "70% = $11.0M (+23%); lease adds about $3M EBITDA at best"
                            ],
                            [
                                  "Recommend",
                                  "Sequence and set a trigger to revisit",
                                  "No lease now; phase the levers; re-check land in 12 months"
                            ]
                      ]
                },
                {
                      "title": "The math in a table",
                      "headers": [
                            "Lever",
                            "Sizing logic",
                            "Flow-through",
                            "EBITDA"
                      ],
                      "rows": [
                            [
                                  "Yield management (dynamic gate pricing)",
                                  "+4% x $75M gate",
                                  "~100%",
                                  "+$3.0M"
                            ],
                            [
                                  "F&B throughput and mix",
                                  "+$3 x 3M = $9M",
                                  "~45%",
                                  "+$4.1M"
                            ],
                            [
                                  "Premium tiers",
                                  "+$4M revenue",
                                  "~75%",
                                  "+$3.0M"
                            ],
                            [
                                  "Off-season programming",
                                  "120K visitors x $50 = $6M",
                                  "~45%",
                                  "+$2.7M"
                            ],
                            [
                                  "Cost efficiency",
                                  "3% x $101.4M",
                                  "-",
                                  "+$3.0M"
                            ],
                            [
                                  "Total at full realization",
                                  "",
                                  "",
                                  "$15.8M (+32%)"
                            ],
                            [
                                  "At 70% realization",
                                  "",
                                  "",
                                  "$11.0M (+23%)"
                            ]
                      ]
                },
                {
                      "title": "Sensitivity and lease test",
                      "headers": [
                            "Scenario",
                            "Calculation",
                            "EBITDA gain",
                            "vs target"
                      ],
                      "rows": [
                            [
                                  "100% realization",
                                  "$15.8M",
                                  "+$15.8M (+32%)",
                                  "Above"
                            ],
                            [
                                  "70% realization (base)",
                                  "$15.8M x 70%",
                                  "+$11.0M (+23%)",
                                  "Inside"
                            ],
                            [
                                  "50% realization",
                                  "$15.8M x 50%",
                                  "+$7.9M (+16%)",
                                  "Below"
                            ],
                            [
                                  "Pricing backlash, yield lever lost",
                                  "($15.8M - $3.0M) x 70%",
                                  "+$9.0M (+18%)",
                                  "Slightly below"
                            ],
                            [
                                  "Lease today",
                                  "4,000 x 30 days x $50 = $6M revenue, about 50% flow-through",
                                  "about +$3M at best, less $2M a year lease and build capital",
                                  "Does not pay"
                            ],
                            [
                                  "Lease if peak unmet demand were 3x",
                                  "12,000 x 30 x $50 = $18M revenue",
                                  "about +$9M",
                                  "Worth revisiting"
                            ]
                      ]
                }
          ],
          "table": {
                "title": "Capacity decision cheat sheet",
                "headers": [
                      "Question before adding capacity",
                      "How to check",
                      "In this case"
                ],
                "rows": [
                      [
                            "Is the constraint binding?",
                            "Utilization by season and day type",
                            "25% average; binds on about 30 days"
                      ],
                      [
                            "How big is unmet demand?",
                            "Unmet visitors x days x spend per visitor",
                            "4,000 x 30 x $50 = $6M"
                      ],
                      [
                            "What is the real margin on it?",
                            "Flow-through after variable cost",
                            "About 50%: $3M EBITDA"
                      ],
                      [
                            "What does the expansion cost?",
                            "Lease plus build capital and payback",
                            "$2M a year plus capital"
                      ],
                      [
                            "Can cheaper levers fill the gap?",
                            "Yield pricing, shifting peak to off-peak, premium tiers",
                            "Five levers worth $15.8M"
                      ],
                      [
                            "What would change the answer?",
                            "Much larger unmet demand, or a high-margin use that also fills the off-season",
                            "Water park or hotel with payback under about 5 years"
                      ]
                ]
          }
    },
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
    answer: {
          "speak": [
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
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>E-commerce platform: monthly retention fell 65% to 55% in 6 months<br/>480K active users, $500K extra acquisition spend, profit falling\"]\nC --> C2[\"Retention = share of last month's actives who order this month<br/>Category average is about 60%, no new entrant\"]\n\nC2 --> L[\"L: Lay out<br/>1 Who: old vs new cohorts, value tier, channel<br/>2 When: month 1, 3, 6 of the lifecycle<br/>3 Why: customer quality, experience, price, external<br/>4 So what: size the prize, pick levers\"]\n\nL --> E1[\"E: Evaluate<br/>Old cohorts: within 1 point, so the product is not broken\"]\nE1 --> E2[\"New cohorts: month-3 retention 72% to 60%, CAC $12 to $18<br/>Low-value users are 48% of users but 36% of retained users\"]\nE2 --> E3[\"Support tickets +22%, concentrated in the first 60 days\"]\n\nE3 --> A1[\"A: Assess<br/>We pay 50% more for customers who stay less<br/>LTV:CAC fell from 12.5x to 7.2x\"]\nA1 --> A2[\"Prize: each point = 4,800 users<br/>5 points = 24K users x $40 = $0.96M a month\"]\n\nA2 --> R[\"R: Recommend<br/>Fix acquisition quality and early life\"]\nR --> R1[\"Cap channels with low 90-day LTV:CAC, shift to referral, search, email\"]\nR --> R2[\"Day-14 to day-60 onboarding and second-order program\"]\nR --> R3[\"Fix top support drivers for new users, validate with a holdout\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: product problem or customer problem?",
                      "note": "The old vs new cohort test comes first; it decides where to dig.",
                      "code": "flowchart TD\nQ[\"Is it the product, or the new customers?\"] --> O[\"Old cohorts (12+ months)<br/>Retention within 1 point of six months ago\"]\nQ --> N[\"New cohorts<br/>Month 3: 72% to 60%<br/>CAC: $12 to $18\"]\n\nO --> O1[\"Product has not broadly deteriorated\"]\nN --> N1[\"Segment mix<br/>High 80%, mid 64%, low 42% retention<br/>Low value = 48% of users, 36% of retained\"]\nN --> N2[\"Timing<br/>Curves split by month 3: first order, no habit<br/>Support tickets +22% in first 60 days\"]\n\nN1 --> W[\"Root cause (hypothesis)<br/>Low-intent acquisition from coupon and paid social<br/>plus weak early-life onboarding\"]\nN2 --> W\nO1 --> W\nW --> V[\"Validate: retention and LTV:CAC by channel,<br/>pause test on one suspect channel\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef o fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass O,O1 o;\nclass N,N1,N2 n;\nclass W,V r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: size the prize",
                      "note": "Value per recovered user decides how big the prize is.",
                      "code": "flowchart TD\nB[\"Size the prize<br/>1 point on 480K users = 4,800 users<br/>5 points back to the 60% category average = 24K users\"] --> V[\"Value per recovered user, assumed $40 a month<br/>24K x $40 = $0.96M a month = about $11.5M a year\"]\nB --> F[\"Full recovery to 65%<br/>10 points = 48K users x $40<br/>= $1.9M a month = about $23M a year\"]\n\nV --> S1[\"If recovered users look like low-value, $12 a month<br/>24K x $12 = $0.29M a month\"]\nV --> S2[\"If they look like mid-value, $75 a month<br/>24K x $75 = $1.8M a month\"]\n\nV --> U[\"Acquisition economics<br/>LTV:CAC 12.5x to 7.2x: still above 3x<br/>but the marginal channels are lower than the average\"]\n\nS1 --> R[\"Prize depends on who we win back<br/>so target mid and high value first\"]\nS2 --> R\nF --> R\nU --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass V,F,U mid;\nclass S1 bad;\nclass S2 good;\nclass R out;"
                }
          ],
          "exampleTables": [
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
                      "title": "Cohort retention by acquisition date",
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
                      "title": "Segment mix",
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
                      "title": "Unit economics and prize",
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
                      "title": "Sensitivity: value per recovered user",
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
    answer: {
          "speak": [
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
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Credit card issuer: 5M accounts, flat. Profit fell $500M to $400M<br/>Credit losses actually improved. What is going on?\"]\nC --> C2[\"Spend per account and revolver mix stable<br/>Funding cost up, rewards matched to rivals, late-fee income down\"]\n\nC2 --> L[\"L: Lay out<br/>Profit per account = revenue - costs<br/>Revenue: interest, interchange, fees<br/>Cost: funding, rewards, credit loss, operating, marketing<br/>Compare line by line, watch offsetting moves\"]\n\nL --> E1[\"E: Evaluate<br/>Profit per account $100 to $80, so -$20 x 5M = -$100M\"]\nE1 --> E2[\"Revenue flat at $520: interest +5, fees -5<br/>Costs up $20: funding +15, rewards +10, credit loss -5\"]\n\nE2 --> A1[\"A: Assess<br/>Margin squeeze, not a credit problem<br/>Funding cost rose faster than yields repriced\"]\nA1 --> A2[\"Each $5 per account = $25M<br/>Bridge reconciles: +5 -5 -15 -10 +5 = -$20\"]\n\nA2 --> R[\"R: Recommend<br/>Recover margin, keep underwriting unchanged\"]\nR --> R1[\"APR repricing and promo balances: +$5 to +$8\"]\nR --> R2[\"Target rewards at low-engagement accounts: +$4 to +$6\"]\nR --> R3[\"Fee and tier review +$2 to +$3, total +$11 to +$17 = $55M to $85M\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: the profit-per-account bridge",
                      "note": "Walk each line from $100 to $80, then scale to the portfolio.",
                      "code": "flowchart TD\nS[\"Last year<br/>Profit per account $100\"] --> I[\"Interest income<br/>$330 to $335<br/>+$5\"]\nI --> X[\"Interchange<br/>$150 to $150<br/>$0\"]\nX --> F[\"Fees<br/>$40 to $35<br/>-$5\"]\nF --> FU[\"Funding cost<br/>$60 to $75<br/>-$15\"]\nFU --> RW[\"Rewards<br/>$110 to $120<br/>-$10\"]\nRW --> CL[\"Credit losses<br/>$120 to $115<br/>+$5\"]\nCL --> E[\"This year<br/>Profit per account $80\"]\n\nE --> P[\"x 5M accounts = -$100M<br/>Funding -$75M, rewards -$50M, fees -$25M<br/>interest +$25M, credit +$25M\"]\nP --> T[\"Trap: credit improved, so a risk-first story misses the problem<br/>Real driver: funding and rewards, a margin squeeze\"]\n\nclassDef s fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef g fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef b fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef n fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass S,E s;\nclass I,CL g;\nclass F,FU,RW b;\nclass X n;\nclass P,T r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: size the levers and the risks",
                      "note": "Three levers sized per account, then two downside risks.",
                      "code": "flowchart TD\nB[\"Gap to recover: $20 per account = $100M<br/>Each $5 per account = $25M\"] --> L1[\"APR repricing and promo balances<br/>+$5 to +$8 = $25M to $40M\"]\nB --> L2[\"Rewards for low-engagement accounts<br/>+$4 to +$6 = $20M to $30M\"]\nB --> L3[\"Fee and tier review<br/>+$2 to +$3 = $10M to $15M\"]\n\nL1 --> T[\"Total +$11 to +$17 per account<br/>= $55M to $85M<br/>Profit $91 to $97 per account\"]\nL2 --> T\nL3 --> T\nT --> G[\"Recovers 55% to 85% of the decline<br/>Portfolio profit about $455M to $485M\"]\n\nB --> R1[\"Risk: rewards cuts lose 1% of accounts<br/>50K x $80 profit = $4M\"]\nB --> R2[\"Risk: funding cost rises another $5<br/>-$25M, wipes out one lever\"]\nR1 --> M[\"So test by segment with a holdout<br/>and watch attrition, NPS, early delinquency\"]\nR2 --> M\nG --> M\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass L1,L2,L3 mid;\nclass T,G good;\nclass R1,R2 bad;\nclass M out;"
                }
          ],
          "exampleTables": [
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
    answer: {
          "speak": [
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
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Regional grocer, 40 stores, one metro of 2M households<br/>Should it invest $25M to launch home delivery?\"]\nC --> C2[\"Goal: payback within 4 years, no damage to stores<br/>Two national rivals already deliver\"]\n\nC2 --> L[\"L: Lay out<br/>1 Market: size and share<br/>2 Ability to win<br/>3 How to enter: build, buy, partner<br/>4 Economics: per order, payback, risk\"]\n\nL --> E1[\"E: Evaluate<br/>Volume: 2M households x 20% online = 400K<br/>x 10% share = 40K households\"]\nE1 --> E2[\"40K x 2 orders x 12 months = 960K orders a year\"]\nE2 --> E3[\"Per order: $90 x 25% = $22.50 gross profit<br/>- $11 fulfillment - $2 marketing = $9.50\"]\n\nE3 --> A1[\"A: Assess<br/>960K x $9.50 = $9.1M a year\"]\nA1 --> A2[\"Payback $25M / $9.1M = 2.7 years at full run-rate<br/>3.5 to 4 years with a 12-month ramp: borderline\"]\nA2 --> A3[\"Risk: 20% cannibalization cuts it to about $5.00 an order<br/>and payback to about 5 years\"]\n\nA3 --> R[\"R: Recommend<br/>Not yet a full go: pilot first\"]\nR --> R1[\"Pilot in 10 to 12 dense stores or via a delivery partner\"]\nR --> R2[\"Scale only if share is near 10%, cost per order is $11 or less,<br/>cannibalization is about 20% or less\"]\nR --> R3[\"Protect stores: membership and pickup options\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: volume and unit economics",
                      "note": "Two paths that meet at the annual contribution.",
                      "code": "flowchart TD\nQ[\"Is the market worth entering?\"] --> V[\"Volume\"]\nQ --> U[\"Unit economics\"]\n\nV --> V1[\"2M households in the metro\"]\nV1 --> V2[\"20% order groceries online = 400K\"]\nV2 --> V3[\"We win 10% share = 40K households\"]\nV3 --> V4[\"2 orders a month x 12 = 960K orders a year\"]\n\nU --> U1[\"Basket $90\"]\nU1 --> U2[\"25% gross margin = $22.50\"]\nU2 --> U3[\"- $11 fulfillment - $2 marketing\"]\nU3 --> U4[\"Contribution = $9.50 per order\"]\n\nV4 --> T[\"960K x $9.50 = $9.1M a year<br/>Revenue 960K x $90 = $86M\"]\nU4 --> T\nT --> D{\"Does $25M pay back in 4 years?\"}\nD --> Y[\"Borderline: 2.7 years at run-rate, 3.5 to 4 with ramp\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef v fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef u fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,D q;\nclass V,V1,V2,V3,V4 v;\nclass U,U1,U2,U3,U4 u;\nclass T,Y r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: what breaks the payback",
                      "note": "Cannibalization, share and cost per order, one at a time.",
                      "code": "flowchart TD\nB[\"Base case<br/>$9.50 per order x 960K = $9.1M a year<br/>Payback 2.7 years at run-rate\"] --> S1[\"Cannibalization 20%<br/>$9.50 - 20% x $22.50 = $5.00 per order<br/>960K x $5.00 = $4.8M a year<br/>Payback about 5 years\"]\nB --> S2[\"Cannibalization 40%<br/>$9.50 - 40% x $22.50 = $0.50 per order<br/>$0.5M a year: no payback\"]\nB --> S3[\"Share only 5%<br/>480K orders x $9.50 = $4.6M a year<br/>Payback about 5.5 years\"]\nB --> S4[\"Fulfillment cost $1 lower per order<br/>+ $1M a year\"]\n\nS1 --> R[\"Pays back only if cannibalization stays low<br/>and share reaches about 10%\"]\nS2 --> R\nS3 --> R\nS4 --> R\nR --> M[\"So pilot first, with clear go and no-go thresholds\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2,S3 bad;\nclass S4 mid;\nclass R,M out;"
                }
          ],
          "exampleTables": [
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
                      "title": "The math in a table",
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
                      "title": "Sensitivity",
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
                },
                {
                      "title": "Go / no-go thresholds for the pilot",
                      "headers": [
                            "Metric",
                            "Base case",
                            "Scale only if"
                      ],
                      "rows": [
                            [
                                  "Share of online households",
                                  "10%",
                                  "near 10%"
                            ],
                            [
                                  "Fulfillment cost per order",
                                  "$11",
                                  "$11 or less"
                            ],
                            [
                                  "Cannibalization of store trips",
                                  "not in base",
                                  "about 20% or less"
                            ],
                            [
                                  "Payback on $25M",
                                  "3.5 to 4 years with ramp",
                                  "within 4 years"
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
    answer: {
          "speak": [
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
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Social app: DAU fell 8% week over week<br/>As the analyst: what happened and what do we do?\"]\nC --> C2[\"Metric = users with at least one session a day<br/>Logging and DAU definition unchanged, warehouse matches backend\"]\n\nC2 --> L[\"L: Lay out<br/>1 Is it real: logging, definition, pipeline<br/>2 Where: platform, version, geography, tenure, funnel<br/>3 When: line up with releases and external events<br/>4 Why: internal vs external, then fix and guardrails\"]\n\nL --> E1[\"E: Evaluate<br/>Data is clean, so the drop is real<br/>Android -14%, iOS 0%, web 0%\"]\nE1 --> E2[\"Check: 55% x 14% = 7.7 points of the 8%<br/>So Android explains the whole drop\"]\nE2 --> E3[\"Timing: Tuesday, day after release 8.4 hit 100%<br/>Existing users only, push sessions -35%, organic opens flat\"]\n\nE3 --> A1[\"A: Assess<br/>Hypothesis: release 8.4 broke push delivery on Android\"]\nA1 --> A2[\"Confirm: 8.4 vs older versions on push delivery,<br/>token registration, opt-in, push-to-open\"]\n\nA2 --> R[\"R: Recommend<br/>Fix fast, then add guardrails\"]\nR --> R1[\"Hotfix or roll back the push component of 8.4\"]\nR --> R2[\"Re-register tokens, monitor DAU by version\"]\nR --> R3[\"Staged rollouts with auto-halt on session and push metrics\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: the cut-the-data path",
                      "note": "Each cut removes causes; stop when the drop concentrates in one place.",
                      "code": "flowchart TD\nQ[\"DAU down 8%: where did it go?\"] --> R1{\"1 Is it real?\"}\nR1 --> R1a[\"No logging or definition change<br/>Backend and warehouse agree: real drop\"]\nR1a --> W{\"2 Where?\"}\nW --> W1[\"Android 55% of DAU: -14%\"]\nW --> W2[\"iOS 35%: 0%<br/>Web 10%: 0%\"]\nW1 --> M[\"Arithmetic: 0.55 x 14% = 7.7 points<br/>Android is the whole drop\"]\nW2 --> M\nM --> T{\"3 When and who?\"}\nT --> T1[\"Started Tuesday, day after release 8.4 at 100%\"]\nT --> T2[\"Existing users open fewer days<br/>New signups normal\"]\nT1 --> Y{\"4 Which channel?\"}\nT2 --> Y\nY --> Y1[\"Push-started sessions -35%<br/>Organic opens flat\"]\nY1 --> H[\"Hypothesis: 8.4 broke push on Android<br/>Implied: 14% / 35% = 40% of Android DAU came via push\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef w fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef t fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,R1,W,T,Y q;\nclass R1a,W1,W2 w;\nclass T1,T2,Y1 t;\nclass M,H r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: cost of the bug and what would change the answer",
                      "note": "Illustrative dollar sizing, then findings that would change the diagnosis.",
                      "code": "flowchart TD\nB[\"Size the damage (illustrative: 10M DAU, $0.10 per DAU per day)<br/>Lost DAU = 7.7% x 10M = 770K<br/>Revenue = 770K x $0.10 = $77K a day\"] --> D1[\"Hotfix in 3 days<br/>3 x $77K = $0.23M\"]\nB --> D2[\"Fix takes 10 days<br/>10 x $77K = $0.77M\"]\nB --> D3[\"Unfixed for a month<br/>30 x $77K = $2.3M\"]\n\nD1 --> A[\"Speed of the fix is the lever<br/>so roll back first if the hotfix is slow\"]\nD2 --> A\nD3 --> A\n\nB --> X[\"What would change the answer\"]\nX --> X1[\"Old versions also dropped<br/>Not the release: look at outage, seasonality, algorithm change\"]\nX --> X2[\"Only new users dropped<br/>Acquisition problem, not push\"]\nX --> X3[\"All platforms dropped<br/>External or backend cause\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass D1,D2 mid;\nclass D3 bad;\nclass A out;\nclass X,X1,X2,X3 mid;"
                }
          ],
          "exampleTables": [
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
    answer: {
          "speak": [
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
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Pump maker: revenue flat at $400M, profit down $40M to $28M in two years<br/>Goal: explain why and get back near $40M\"]\nC --> C2[\"Facts: two lines (Premium, Standard), prices flat,<br/>steel costs up 8%, fixed costs flat at $60M\"]\n\nC2 --> L[\"L: Lay out<br/>1 Profit = Revenue - Costs<br/>2 Is the problem revenue or cost?<br/>3 Size each cause<br/>4 Fixes and risks\"]\n\nL --> E1[\"E: Evaluate<br/>Revenue flat, fixed costs flat, so look at mix and margin by line\"]\nE1 --> E2[\"Premium: $200M to $160M, margin steady at 30%<br/>Standard: $200M to $240M, margin 20% to 16.7%\"]\nE2 --> E3[\"Mix effect -$4M + margin squeeze on Standard -$8M = -$12M\"]\n\nE3 --> A1[\"A: Assess<br/>One third mix, two thirds margin compression<br/>Premium is healthy but losing volume\"]\nA1 --> A2[\"Standard back to 19%: 240M x 2.3 pts = +$5.5M\"]\nA1 --> A3[\"Win back $20M Premium x 30% = +$6M\"]\nA2 --> A4[\"Profit $28M + $11.5M = about $39.5M\"]\nA3 --> A4\n\nA4 --> R[\"R: Recommend<br/>Protect Premium first, restore Standard margin second\"]\nR --> R1[\"Steel pass-through and re-sourcing on Standard\"]\nR --> R2[\"Good-better-best packages to stop trade-down\"]\nR --> R3[\"Guardrails: customer pushback, import pricing\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2,A3,A4 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: where did the $12M go?",
                      "note": "Rule out revenue and fixed costs, then split the decline into mix and margin.",
                      "code": "flowchart TD\nQ[\"Profit fell $12M. Where?\"] --> R1{\"Revenue?\"}\nR1 --> R2[\"Flat at $400M: not a revenue total problem\"]\nQ --> K1{\"Fixed costs?\"}\nK1 --> K2[\"Flat at $60M: not the cause\"]\nQ --> M1{\"Contribution by line\"}\n\nM1 --> P1[\"Premium<br/>$200M to $160M<br/>contribution $60M to $48M<br/>= -$12M\"]\nM1 --> S1[\"Standard<br/>$200M to $240M<br/>contribution $40M to $40M<br/>= $0 despite +$40M sales\"]\n\nP1 --> X1[\"Mix effect<br/>-$12M Premium + $8M Standard at old 20%<br/>= -$4M\"]\nS1 --> X1\nS1 --> X2[\"Margin squeeze on Standard<br/>$240M x (20% - 16.7%)<br/>= -$8M\"]\n\nX1 --> T[\"Total -$4M + -$8M = -$12M<br/>$40M to $28M\"]\nX2 --> T\nT --> Z[\"Fix the Standard margin and win back Premium volume\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef ok fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef line fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,R1,K1,M1 q;\nclass R2,K2 ok;\nclass P1,S1 line;\nclass X1,X2,T,Z calc;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: from fixes to the new profit",
                      "note": "Each fix, the new profit, the haircut and the sensitivity.",
                      "code": "flowchart TD\nB[\"Current profit<br/>$28M\"] --> O1[\"Option 1: Standard margin 16.7% to 19%<br/>steel pass-through and sourcing<br/>240M x 2.3 pts = +$5.5M\"]\nB --> O2[\"Option 2: win back Premium volume<br/>$20M x 30% margin = +$6M\"]\n\nO1 --> T[\"Total gain<br/>$5.5M + $6M = $11.5M\"]\nO2 --> T\nT --> N[\"New profit<br/>$28M + $11.5M = about $39.5M\"]\nN --> H[\"Haircut 50% for pushback and import pressure<br/>$5.75M gain = about $33.8M\"]\nH --> D{\"Back to the $40M goal?\"}\nD --> Y[\"Not fully: do both, in stages, and add cost work on Standard\"]\n\nO1 --> S[\"Sensitivity<br/>each $10M of Premium = $3M profit<br/>each $10M of Standard = $1.7M profit\"]\nO2 --> S\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef opt fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef dec fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass O1,O2 opt;\nclass T,N,H,S calc;\nclass D dec;\nclass Y out;"
                }
          ],
          "exampleTables": [
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
                                  "Revenue vs costs, then drill",
                                  "Profit = Revenue - Costs; revenue = volume x price x mix; costs = fixed + variable"
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
                                  "$160M - $200M = -$40M",
                                  "-$40M"
                            ],
                            [
                                  "Premium contribution lost",
                                  "-$40M x 30%",
                                  "-$12M"
                            ],
                            [
                                  "Standard revenue gained",
                                  "$240M - $200M = +$40M",
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
    answer: {
          "speak": [
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
                      "I would not pay $300M. My maximum price is about $275M: break-even is about $297M, and $275M keeps a margin of safety of about $22M. I would open at $250M, or put part of the price in an earn-out tied to growth, and make diligence on engineer retention, customer concentration and regulation a condition. If the seller will not move, I would partner or take a minority stake instead."
                ]
          ],
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Regional bank, 2M retail customers, may buy a payments fintech for $300M<br/>Fintech: $40M revenue, +35% a year, EBITDA -$2M\"]\nC --> C2[\"Why: offer modern payments, cut processing costs<br/>Needs returns above cost of capital within 5 years\"]\n\nC2 --> L[\"L: Lay out<br/>1 Strategic fit: buy, build or partner<br/>2 Standalone value<br/>3 Synergies, with haircut and timing<br/>4 Price vs value, and risks\"]\n\nL --> E1[\"E: Evaluate<br/>Standalone: 6 to 8x revenue = $240M to $320M<br/>Midpoint 7x = $280M\"]\nE1 --> E2[\"Synergies: cost $4.8M + revenue $3.6M = $8.4M a year<br/>Capitalized about $50M\"]\nE2 --> E3[\"Haircut 50% = $25M, less $8M integration = about $17M\"]\n\nE3 --> A1[\"A: Assess<br/>Value to the bank = $280M + $17M = about $297M\"]\nA1 --> A2[\"At $300M the bank pays away all the value<br/>No margin of safety, and growth must hold at 35%\"]\n\nA2 --> R[\"R: Recommend<br/>Do not pay $300M: maximum price about $275M\"]\nR --> R1[\"Open at $250M, cap at $275M, or part earn-out tied to growth\"]\nR --> R2[\"Diligence: engineer retention, customer concentration, regulation\"]\nR --> R3[\"If the seller will not move, partner or take a minority stake\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: standalone value plus synergies",
                      "note": "Two paths that meet at value to the bank, then compared with the price.",
                      "code": "flowchart TD\nQ[\"What is the fintech worth to us?\"] --> S[\"Standalone value\"]\nQ --> Y[\"Synergies\"]\n\nS --> S1[\"Revenue $40M\"]\nS1 --> S2[\"Comparable multiple 6 to 8x\"]\nS2 --> S3[\"Range $240M to $320M<br/>Midpoint 7x = $280M\"]\n\nY --> Y1[\"Cost: $12M processing x 40% insourced<br/>= $4.8M a year x 8 = about $38M\"]\nY --> Y2[\"Revenue: 2M customers x 3% x $60<br/>= $3.6M a year x 4 = about $14M\"]\nY1 --> Y3[\"Gross synergy value about $50M\"]\nY2 --> Y3\nY3 --> Y4[\"50% haircut = $25M<br/>Less $4M x 2 years integration = $17M\"]\n\nS3 --> T[\"Value to the bank<br/>$280M + $17M = about $297M\"]\nY4 --> T\nT --> D{\"Price vs value\"}\nD --> P[\"At $300M: -$3M, nothing left for the bank<br/>At $275M: +$22M. At $250M: +$47M\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef s fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef y fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,D q;\nclass S,S1,S2,S3 s;\nclass Y,Y1,Y2,Y3,Y4 y;\nclass T,P r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: what happens at the price we pay",
                      "note": "Price and scenario sensitivity at the target price.",
                      "code": "flowchart TD\nB[\"Base case at a $275M price<br/>Value $297M, so +$22M for the bank\"] --> S1[\"Growth slows, multiple 6x<br/>$240M + $17M = $257M<br/>-$18M\"]\nB --> S2[\"Synergies fail completely<br/>$280M - $8M integration = $272M<br/>-$3M\"]\nB --> S3[\"Synergies fully realized<br/>$280M + $50M - $8M = $322M<br/>+$47M\"]\nB --> S4[\"Pay the full $300M ask<br/>$297M - $300M<br/>-$3M, and worse in either downside\"]\n\nS1 --> R[\"The deal only works at a price below about $275M<br/>or with the seller sharing the growth risk\"]\nS2 --> R\nS4 --> R\nS3 --> R\nR --> M[\"So negotiate down, add an earn-out,<br/>and make diligence a condition\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2,S4 bad;\nclass S3 good;\nclass R,M out;"
                }
          ],
          "exampleTables": [
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
                                  "Maximum price, offer, structure, conditions, alternative",
                                  "Open at $250M, cap at $275M, earn-out, diligence, partner if no deal"
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
                },
                {
                      "title": "What is the maximum price?",
                      "headers": [
                            "Price point",
                            "Logic",
                            "Bank keeps"
                      ],
                      "rows": [
                            [
                                  "Opening offer",
                                  "$250M = 6.25x revenue",
                                  "+$47M"
                            ],
                            [
                                  "Maximum price (walk away above)",
                                  "$275M = 6.9x revenue, keeps about 7% of value as margin of safety",
                                  "+$22M"
                            ],
                            [
                                  "Break-even price",
                                  "$280M standalone + $17M net synergies",
                                  "$0 at about $297M"
                            ],
                            [
                                  "Seller ask",
                                  "$300M = 7.5x revenue",
                                  "-$3M"
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
    answer: {
          "speak": [
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
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Retail bank contact center: $130M a year, 8M calls<br/>COO wants costs down 15% without hurting satisfaction\"]\nC --> C2[\"Target = 15% x $130M = about $19.5M<br/>Calls: simple $8, transactional $15, complex $30\"]\n\nC2 --> L[\"L: Lay out<br/>Cost = volume x cost per call, by call type<br/>1 Reduce volume: deflect, fix repeat calls<br/>2 Reduce cost per call: handle time, automation, staffing<br/>3 One-time cost and quality risk\"]\n\nL --> E1[\"E: Evaluate<br/>Pools: simple $22.4M, transactional $48.0M, complex $60.0M\"]\nE1 --> E2[\"Deflect simple calls to the app: 1.4M x $8 = $11.2M<br/>Cut transactional handle time 10%: $4.8M<br/>Cut repeat complex calls: 100K x $30 = $3.0M\"]\n\nE2 --> A1[\"A: Assess<br/>Total $19.0M = 14.6% of cost, close to target\"]\nA1 --> A2[\"One-time cost about $3M: payback in about 2 months<br/>Risk: deflection rate of only 30% cuts savings to about $14.5M\"]\n\nA2 --> R[\"R: Recommend<br/>Three levers in sequence\"]\nR --> R1[\"1 Digital deflection of simple calls: biggest and fastest\"]\nR --> R2[\"2 Agent tools to cut transactional handle time, 3 root-cause fixes\"]\nR --> R3[\"Track satisfaction and first-contact resolution weekly, pause any lever that hurts them\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2 c3;\nclass A1,A2 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: pools and levers",
                      "note": "Break cost into volume x unit cost by call type, then match one lever to each pool.",
                      "code": "flowchart TD\nQ[\"Where does the $130M go,<br/>and what can we cut?\"] --> S[\"Simple calls<br/>2.8M x $8 = $22.4M\"]\nQ --> T[\"Transactional calls<br/>3.2M x $15 = $48.0M\"]\nQ --> X[\"Complex calls<br/>2.0M x $30 = $60.0M\"]\n\nS --> S1[\"Lever: deflect to the app<br/>50% of 2.8M = 1.4M calls x $8<br/>Saves $11.2M\"]\nT --> T1[\"Lever: agent tools, handle time down 10%<br/>$48.0M x 10%<br/>Saves $4.8M\"]\nX --> X1[\"Lever: fix root causes of repeat calls<br/>5% of 2.0M = 100K x $30<br/>Saves $3.0M\"]\n\nS1 --> N[\"Total savings = $19.0M<br/>14.6% of $130M, target is $19.5M\"]\nT1 --> N\nX1 --> N\nN --> G[\"Gap about $0.5M<br/>close with scheduling or a lower-cost site\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef p fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef l fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass S,T,X p;\nclass S1,T1,X1 l;\nclass N,G r;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: what if the levers underdeliver",
                      "note": "Each lever weakened one at a time, then all together.",
                      "code": "flowchart TD\nB[\"Base case<br/>$19.0M saved, 14.6%<br/>One-time cost $3M, payback about 2 months\"] --> S1[\"Deflection only 30%<br/>840K calls x $8 = $6.7M instead of $11.2M<br/>Total $14.5M, 11.2%\"]\nB --> S2[\"Handle time cut only 5%<br/>$2.4M instead of $4.8M<br/>Total $16.6M, 12.8%\"]\nB --> S3[\"Repeat calls cut by half<br/>$1.5M instead of $3.0M<br/>Total $17.5M, 13.5%\"]\nB --> S4[\"All three weaker<br/>$6.7M + $2.4M + $1.5M = $10.6M<br/>8.2%: target missed\"]\n\nS1 --> R[\"Deflection is the lever that decides the answer<br/>it is 59% of the savings\"]\nS2 --> R\nS3 --> R\nS4 --> R\nR --> M[\"So fix the app and IVR hand-off first,<br/>and watch satisfaction before scaling\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass S1,S2,S3 mid;\nclass S4 bad;\nclass R,M out;"
                }
          ],
          "exampleTables": [
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
    followups: [
      { q: "What if customers do not adopt the app?", a: "Add proactive nudges in the IVR, in-call SMS links, and simplify the top journeys. Measure adoption by journey and iterate." },
      { q: "Would you offshore?", a: "Possible for simple and transactional calls, but weigh regulatory, quality and brand risks. Do it after digital deflection, since that reduces the volume to move." },
      { q: "How do you protect customer experience?", a: "Guardrail metrics, staged rollout, and keeping humans for complex and sensitive calls." }
    ],
    pitfalls: [
      "Across-the-board headcount cuts.",
      "Not tying levers to specific cost pools."
    ]
  },

  /* ---------------------------------------------------------------- 9 */
  {
    id: "digital-feature",
    title: "Digital Feature: Scale It or Not?",
    track: ["banking", "tech"],
    framework: "product",
    difficulty: "Medium",
    minutes: 30,
    prompt: "A card issuer launched a spending-insights feature in its mobile app six months ago. The product team shows that customers who use it spend more and leave less, and asks for $2M to promote it from 25% to 40% of active app customers. As the analyst, what do you tell them?",
    clarify: [
      { q: "What does the feature do and who is eligible?", a: "It categorizes spending and sends monthly insights and alerts. All 4M active app card customers can use it." },
      { q: "How was it launched?", a: "It was offered to 95% of customers. A random 5% were held out and could not see it, so there is a clean test." },
      { q: "What is the objective?", a: "Decide whether to spend $2M to raise adoption from 25% to 40%, and set the payback bar at 18 months." },
      { q: "What does one account earn?", a: "Net interchange is about 2% of spend. Average annual card spend is $9,000. A retained account is worth about $400 in lifetime profit. A service call costs about $10." },
      { q: "What are the running costs?", a: "$1.5M per year to run the feature today. The $2M promotion is one-time." }
    ],
    tables: [
      {
        title: "What the product team showed (adopters vs. non-adopters)",
        headers: ["Group", "Customers", "Annual spend", "Annual attrition"],
        rows: [["Adopters", "1.0M (25%)", "$10,200", "9%"], ["Non-adopters", "3.0M (75%)", "$8,600", "13%"], ["All", "4.0M", "$9,000", "12%"]]
      },
      {
        title: "Randomized holdout result (offered vs. not offered, per customer)",
        headers: ["Metric", "Not offered", "Offered", "Difference"],
        rows: [["Annual spend", "$9,000", "$9,045", "+$45 (+0.5%)"], ["Annual attrition", "12.0%", "11.9%", "-0.1 pt"], ["Service calls per account", "1.20", "1.164", "-3%"], ["Delinquency rate", "no difference", "no difference", "0"], ["Complaint rate", "no difference", "no difference", "0"]]
      },
      {
        title: "Unit values",
        headers: ["Item", "Value"],
        rows: [["Active app customers", "4.0M"], ["Net interchange on spend", "2%"], ["Lifetime profit of a retained account", "$400"], ["Cost per service call", "$10"], ["Current adoption", "25%"], ["Run cost per year", "$1.5M"], ["Promotion to reach 40% adoption", "$2M one-time"]]
      }
    ],
    answer: {
        "speak": [
            [
                "C: Clarify",
                "So we are deciding whether to spend $2M to raise adoption of this feature from 25% to 40%, and it needs to pay back within 18 months. Can I confirm we have a random group that was never shown the feature?"
            ],
            [
                "L: Lay out",
                "I will check three things. First, is the evidence real, meaning did the feature cause the extra spending. Second, what one customer is worth. Third, what scaling adds and what could go wrong."
            ],
            [
                "E: Evaluate",
                "The team compares users with non-users and sees $1,600 more spend. But people who pick a budgeting tool are already careful, so that is not just the feature. The fair test shows $45 more per customer offered. Only a quarter use it, so it is about $180 per user. The first number was roughly nine times too big."
            ],
            [
                "A: Assess",
                "Using the fair numbers, the feature earns about $6.6M a year, or $5.1M after running costs, so it already pays for itself. Going from 25% to 40% could add about $4M a year, but new users are probably less keen, so I would plan on about $2M. That repays the $2M in about 12 months."
            ],
            [
                "R: Recommend",
                "Yes, in stages. Try the promotion on half of the non-adopters for eight weeks. Scale up only if each new user delivers at least half of today's benefit, and stop if complaints, late payments or opt-outs rise."
            ]
        ],
        "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Decision: spend $2M to raise app adoption from 25% to 40%<br/>Bar: pays back within 18 months\"]\nC --> C2[\"What we have: 4M app customers<br/>and a fair test, a random 5% were never shown the feature\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Is the evidence real?<br/>Did the feature cause the extra spending?\"]\nL --> L2[\"2 What is one customer worth?<br/>Spend, staying, fewer calls\"]\nL --> L3[\"3 What does scaling add?<br/>And what could go wrong?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Test the team's numbers\"]\nE1 --> E2[\"The team says: users spend $1,600 more<br/>($10,200 vs $8,600)\"]\nE2 --> E3[\"But careful savers choose budgeting tools anyway,<br/>so that gap may not be the feature\"]\nE3 --> E4[\"Fair test: customers offered it spend only $45 more.<br/>Only 25% use it, so $45 / 25% = $180 per user\"]\nE4 --> E5[\"The team's number was about 9x too big\"]\n\nE5 --> A[\"A: Assess<br/>What do the real numbers mean?\"]\nA --> A1[\"Worth today: $6.6M a year<br/>$5.1M after $1.5M running cost\"]\nA --> A2[\"Scaling adds: 15 more points x $0.27M = $4.0M<br/>Halve it, new users are less keen = $2.0M a year\"]\nA --> A3[\"Payback: $2M / $2M a year = 12 months<br/>Inside the 18-month bar\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Yes, in stages\"]\nR --> R1[\"Test on half of non-adopters for 8 weeks\"]\nR --> R2[\"Scale only if each new user delivers at least half of today's benefit\"]\nR --> R3[\"Watch complaints, late payments and opt-outs\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4,E5 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
        "exampleCharts": [
            {
                "id": "evaluate",
                "title": "Evaluate: the team's number vs a fair test",
                "note": "Why the raw gap between users and non-users is misleading, in plain steps.",
                "code": "flowchart TD\nQ[\"Did the feature cause the extra spending?\"]\nQ --> N[\"Team's way: compare users with non-users\"]\nQ --> H[\"Fair-test way: compare customers offered the feature<br/>with customers who were never shown it\"]\n\nN --> N1[\"Users spend $10,200\"]\nN --> N2[\"Non-users spend $8,600\"]\nN1 --> N3[\"Gap = +$1,600\"]\nN2 --> N3\nN3 --> N4[\"Problem: careful savers choose budgeting tools anyway,<br/>so the gap is not all the feature (self-selection)\"]\n\nH --> H1[\"Offered: $9,045\"]\nH --> H2[\"Never shown: $9,000\"]\nH1 --> H3[\"Gap = +$45 per offered customer\"]\nH2 --> H3\nH3 --> H4[\"Only 25% use it, so the effect on users is<br/>$45 / 25% = +$180 per user\"]\n\nN3 --> X[\"$1,600 / $180 = about 9x<br/>The team's number was about 9 times too big\"]\nH4 --> X\nX --> Z[\"Use the fair-test number\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef naive fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef hold fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef result fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass N,N1,N2,N3,N4 naive;\nclass H,H1,H2,H3,H4 hold;\nclass X,Z result;"
            },
            {
                "id": "impact",
                "title": "Impact math: from three sources to the decision",
                "note": "Each benefit, the net, the scale-up, the haircut and the payback check.",
                "code": "flowchart TD\nS1[\"Extra spend: $45 x 4M customers = $180M<br/>The bank keeps 2% = $3.6M\"] --> T[\"Total benefit today<br/>$3.6M + $1.6M + $1.44M = $6.64M a year\"]\nS2[\"Customers staying: 0.1 point x 4M = 4,000 accounts<br/>x $400 each = $1.6M\"] --> T\nS3[\"Fewer service calls: 4M x 1.2 calls x 3% = 144K calls<br/>x $10 = $1.44M\"] --> T\n\nT --> N[\"Minus $1.5M running cost<br/>= $5.1M net a year\"]\nT --> P[\"Value of one adoption point<br/>$6.64M / 25 points = $0.27M\"]\nP --> G[\"Scaling from 25% to 40% = 15 more points<br/>15 x $0.27M = $4.0M a year\"]\nG --> H[\"Halve it, because new users are less keen<br/>= $2.0M a year\"]\nH --> PB[\"Payback: $2M promotion / $2M a year<br/>= 12 months\"]\nPB --> D{\"Under the 18-month bar?\"}\nD --> Y[\"Yes: go, in stages\"]\n\nclassDef src fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef dec fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass S1,S2,S3 src;\nclass T,N,P,G,H,PB calc;\nclass D dec;\nclass Y out;"
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
                        "Repeat the decision, ask what you can measure, agree how success is judged",
                        "Stops you solving the wrong problem",
                        "Decision: $2M for 25% to 40%. Bar: payback in 18 months. Data: 4M customers and a fair test (5% never shown the feature)"
                    ],
                    [
                        "L Lay out",
                        "Tell the interviewer your 3 questions before any numbers",
                        "Shows you have a plan and lets them steer",
                        "Is the evidence real? What is a customer worth? What does scaling add, and what are the risks?"
                    ],
                    [
                        "E Evaluate",
                        "Test the evidence first, then calculate",
                        "A big number built on weak evidence is worthless",
                        "The team's +$1,600 shrinks to +$180 once you use the fair test"
                    ],
                    [
                        "A Assess",
                        "Turn the cleaned-up numbers into value, then payback",
                        "This is where you answer the real question",
                        "$5.1M a year today; scaling adds about $2M a year; payback 12 months"
                    ],
                    [
                        "R Recommend",
                        "Give a clear yes or no first, then the conditions",
                        "Interviewers want a decision, not a list",
                        "Yes, in stages, with a test and clear stop signals"
                    ]
                ]
            },
            {
                "title": "Plain-English glossary",
                "headers": [
                    "Term",
                    "Plain meaning",
                    "Example here"
                ],
                "rows": [
                    [
                        "Adoption",
                        "Share of customers who actually use the feature",
                        "25% now, 40% target"
                    ],
                    [
                        "Holdout (fair test)",
                        "A random group kept from seeing the feature, to compare against everyone else",
                        "5% of customers never saw it"
                    ],
                    [
                        "Causal",
                        "The feature itself made the difference, not something else",
                        "Does insights cause more spending?"
                    ],
                    [
                        "Self-selection (the trap)",
                        "People who choose something are different from people who do not",
                        "Careful savers pick budgeting tools, so they already spend sensibly"
                    ],
                    [
                        "Per adopter",
                        "The effect on someone who actually uses it",
                        "$45 across all offered customers = $180 per user"
                    ],
                    [
                        "Haircut",
                        "Cut a forecast to be safe",
                        "New users are less keen, so halve the benefit"
                    ],
                    [
                        "Payback",
                        "Months until the benefit repays the cost",
                        "$2M / $2M a year = 12 months"
                    ],
                    [
                        "Guardrail",
                        "A warning sign that tells you to stop",
                        "Complaints, late payments, opt-outs"
                    ]
                ]
            },
            {
                "title": "The math, one step at a time",
                "headers": [
                    "Step",
                    "What we are working out",
                    "Calculation",
                    "Result"
                ],
                "rows": [
                    [
                        "1",
                        "The team's claim",
                        "$10,200 - $8,600",
                        "+$1,600 a year"
                    ],
                    [
                        "2",
                        "The fair-test effect for everyone offered",
                        "$9,045 - $9,000",
                        "+$45 a year"
                    ],
                    [
                        "3",
                        "Per person who actually uses it",
                        "$45 / 25% (only 1 in 4 uses it)",
                        "+$180"
                    ],
                    [
                        "4",
                        "How wrong was the claim?",
                        "$1,600 / $180",
                        "about 9 times too high"
                    ],
                    [
                        "5",
                        "Extra spending, as profit",
                        "$45 x 4M customers = $180M spend x 2% fee earned",
                        "$3.6M a year"
                    ],
                    [
                        "6",
                        "Customers who stay",
                        "0.1% x 4M = 4,000 accounts x $400 each",
                        "$1.6M a year"
                    ],
                    [
                        "7",
                        "Fewer service calls",
                        "4M x 1.2 calls x 3% fewer = 144K calls x $10",
                        "$1.44M a year"
                    ],
                    [
                        "8",
                        "Value today, after running cost",
                        "$3.6M + $1.6M + $1.44M = $6.6M, minus $1.5M",
                        "$5.1M a year"
                    ],
                    [
                        "9",
                        "Value of one adoption point",
                        "$6.6M / 25 points",
                        "about $0.27M"
                    ],
                    [
                        "10",
                        "Value of going 25% to 40%",
                        "15 points x $0.27M",
                        "about $4.0M a year"
                    ],
                    [
                        "11",
                        "Be careful: new users are less keen",
                        "$4.0M x 50%",
                        "about $2.0M a year"
                    ],
                    [
                        "12",
                        "Payback",
                        "$2M cost / $2M a year",
                        "12 months (bar: 18 months)"
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
                        "Trusting \"users do better\"",
                        "Always ask whether better customers simply chose the feature."
                    ],
                    [
                        "Skipping the structure",
                        "Say your 3 questions before calculating anything."
                    ],
                    [
                        "Forgetting the haircut",
                        "Early users are the keenest, so later users rarely match them."
                    ],
                    [
                        "Ending without a decision",
                        "Finish with a clear yes or no, the conditions, and the stop signals."
                    ]
                ]
            }
        ],
        "table": {
            "title": "Evidence checklist: correlation vs cause",
            "headers": [
                "Evidence",
                "What it shows",
                "Problem",
                "Better"
            ],
            "rows": [
                [
                    "Adopters vs non-adopters",
                    "Adopters spend $1,600 more and churn 4 points less",
                    "Self-selection: engaged people adopt",
                    "Randomized holdout"
                ],
                [
                    "Before vs after",
                    "Metrics moved after launch",
                    "Seasonality, other launches",
                    "Holdout running at the same time"
                ],
                [
                    "Randomized holdout",
                    "Offered vs not offered: +$45 spend, -0.1 pt attrition",
                    "Measures effect per offered customer, diluted by 25% adoption",
                    "Divide by adoption for per-adopter effect"
                ],
                [
                    "Staged promotion test",
                    "Effect on the marginal adopters",
                    "Takes 8 weeks",
                    "Randomize half of non-adopters before scaling"
                ]
            ]
        }
    },
    followups: [
      { q: "Why not just compare adopters with non-adopters?", a: "Because adopters chose the feature, so they differ from non-adopters in engagement and financial habits. A randomized holdout makes the two groups identical on average, so the difference is caused by the feature." },
      { q: "What if the effect is much smaller for new adopters?", a: "Then the gain from scaling falls. The staged test measures this before committing the full $2M, and I would target the segments where early effects were largest." },
      { q: "What other metrics would you track?", a: "Weekly active use of the feature, spend by category, 90-day and 12-month retention, calls, complaints, delinquency and opt-out rates." },
      { q: "How long should the test run?", a: "Long enough to cover at least one full billing cycle and the behaviors you care about; 8 weeks for engagement, with retention tracked longer using a leading indicator such as inactivity." }
    ],
    pitfalls: [
      "Taking adopter vs. non-adopter differences as the feature's effect.",
      "Forgetting that the holdout effect is per offered customer, not per adopter.",
      "Assuming new adopters will behave like early adopters."
    ]
  },
  {
    "id": "card-activation",
    "title": "Card Applications Up, Activation Down",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "metric",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "Credit card applications are up 15%, but the approval-to-activation rate has fallen. What is going on, and what do you do?",
    "clarify": [
      {
        "q": "What does activation mean?",
        "a": "The customer makes a first purchase within 30 days of receiving the card."
      },
      {
        "q": "Did anything change in how we count applications, approvals or activation?",
        "a": "No. The definitions are the same as last year."
      },
      {
        "q": "Did approval rates change?",
        "a": "No. About 60% of applications are approved in both periods."
      },
      {
        "q": "Did we start any new marketing or acquisition channel?",
        "a": "Yes. A new digital partner channel launched this quarter, and it drives most of the extra applications."
      },
      {
        "q": "What is a card worth, and what does marketing cost?",
        "a": "Assume an activated card is worth about $200 in profit and marketing costs about $30 per application. Use these as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "The funnel (illustrative numbers)",
        "headers": [
          "Stage",
          "Before",
          "Now",
          "What it means"
        ],
        "rows": [
          [
            "Applications",
            "100K a month",
            "115K (+15%)",
            "People who applied"
          ],
          [
            "Approved",
            "60K (60%)",
            "69K (60%)",
            "Bank said yes"
          ],
          [
            "Activated",
            "42K (70% of approved)",
            "43.8K (about 63%)",
            "Made a first purchase within 30 days"
          ]
        ]
      },
      {
        "title": "Unit values (assumptions)",
        "headers": [
          "Item",
          "Value"
        ],
        "rows": [
          [
            "Marketing cost per application",
            "$30"
          ],
          [
            "Value of an activated card",
            "$200"
          ],
          [
            "Approval rate",
            "60% in both periods"
          ],
          [
            "Activation window",
            "30 days from card receipt"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So applications are up 15% but fewer approved customers are activating. I will define activation as a first purchase within 30 days, and the funnel as applications, approvals, then activations. Is approval rate stable, and did anything change in marketing recently?"
        ],
        [
          "L: Lay out",
          "I will check three things. First, is the drop real, meaning same definition and same-age cards. Second, where it is: channel, approval mix, product or delivery. Third, why, and what it costs."
        ],
        [
          "E: Evaluate",
          "Say we had 100K applications a month, 60% approved and 70% of those activating, so 42K activated cards. Now applications are 115K. If the extra 15K came from a new campaign and only 20% of those approved activate, that adds just 1.8K cards. Overall activation falls to about 63%, and activated cards grow only 4% while applications grew 15%."
        ],
        [
          "A: Assess",
          "So the growth is mostly low-intent applicants. At $30 per application, the new channel costs about $250 per activated card, against about $71 in the existing channels. If an activated card is worth $200, the new channel loses money today. It breaks even at 25% activation."
        ],
        [
          "R: Recommend",
          "I would fix activation first with onboarding nudges when the card arrives and on day 1, 7 and 14, and an easy digital-wallet setup. I would pay for the new channel per activated card, not per application, and track activated cards per dollar. If activation reaches around 50%, the channel is worth scaling."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Problem: card applications are up 15%,<br/>but fewer approved customers activate their card\"]\nC --> C2[\"Define terms: activation = first purchase within 30 days<br/>Funnel: Applications > Approved > Activated\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Is the drop real?<br/>Same definition, same-age customers\"]\nL --> L2[\"2 Where is it?<br/>Channel, approval mix, product, delivery\"]\nL --> L3[\"3 Why, and what is it worth?<br/>Fix the cause, not the number\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Split the funnel by where applicants came from\"]\nE1 --> E2[\"Existing channels: 100K applications<br/>60% approved, 70% activate = 42K\"]\nE2 --> E3[\"New channel: 15K extra applications<br/>60% approved, only 20% activate = 1.8K\"]\nE3 --> E4[\"Total: 43.8K activated of 69K approved = 63%<br/>Applications +15%, activated cards only +4%\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Cause: the growth came from low-intent applicants<br/>(for example a bonus-hunting campaign)\"]\nA --> A2[\"Cost: existing channels $71 per activated card<br/>new channel $250, above an assumed $200 value\"]\nA --> A3[\"Fix potential: lift activation from 20% to 50%<br/>turns a $90K loss into a $450K gain\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Fix activation, then fund the channel that works\"]\nR --> R1[\"Onboarding nudges: card arrives, activate day 1, 7, 14\"]\nR --> R2[\"Pay for the new channel per activated card, not per application\"]\nR --> R3[\"Track activated cards per dollar, not applications\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "diagnose",
          "title": "How we found it: the diagnosis path",
          "note": "Rule out a measurement problem first, then cut the funnel until the drop sits in one place.",
          "code": "flowchart TD\nQ[\"Applications +15%, activation rate down. Why?\"] --> R1{\"1 Is it real?\"}\nR1 --> R1a[\"Check the definition has not changed<br/>Compare cards of the same age,<br/>for example activated within 30 days\"]\nR1a --> W{\"2 Where is it?\"}\n\nW --> W1[\"By channel<br/>Which source grew?\"]\nW --> W2[\"By approval mix<br/>More lower-score approvals?\"]\nW --> W3[\"By delivery and onboarding<br/>Card late? Activation hard?\"]\nW --> W4[\"By product<br/>One card offer weaker?\"]\n\nW1 --> X[\"Finding: the extra 15K applications came from one new campaign\"]\nX --> X1[\"Existing channels: 100K x 60% x 70% = 42K activated\"]\nX --> X2[\"New channel: 15K x 60% x 20% = 1.8K activated\"]\nX1 --> T[\"Total: 43.8K / 69K approved = 63% (was 70%)\"]\nX2 --> T\nT --> H[\"Hypothesis: low-intent applicants, not a broken product<br/>Test: activation by channel for same-age cards\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef w fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef x fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef r fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q,R1,W q;\nclass R1a,W1,W2,W3,W4 w;\nclass X,X1,X2 x;\nclass T,H r;"
        },
        {
          "id": "worth",
          "title": "What it is worth, and what would change the answer",
          "note": "Cost per activated card, the value of a fix and the break-even point.",
          "code": "flowchart TD\nB[\"Assumed: $30 marketing per application, $200 value per activated card<br/>Existing channels: $3.0M / 42K = $71 per activated card\"] --> N[\"New channel today<br/>15K x $30 = $450K spend, 1.8K activated<br/>$450K / 1.8K = $250 per activated card\"]\nN --> N1[\"Value 1.8K x $200 = $360K<br/>Net = $360K - $450K = -$90K\"]\n\nB --> F[\"After onboarding fixes: 50% activate<br/>9K approved x 50% = 4.5K activated\"]\nF --> F1[\"Value 4.5K x $200 = $900K<br/>Net = $900K - $450K = +$450K\"]\n\nB --> BE[\"Break-even for the new channel<br/>$450K / $200 = 2,250 activations<br/>2,250 / 9K approved = 25% activation\"]\n\nB --> S[\"Lift activation 5 points across all 69K approved<br/>69K x 5% = 3,450 cards x $200 = +$690K\"]\n\nN1 --> R[\"Fix activation before scaling the channel<br/>Pay per activated card\"]\nF1 --> R\nBE --> R\nS --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass N,N1 bad;\nclass F,F1,S good;\nclass BE mid;\nclass R out;"
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
              "Define the funnel and what \"activated\" means",
              "The answer changes if activation means first swipe or first 90-day spend",
              "Applications > Approved > Activated; activation = first purchase in 30 days"
            ],
            [
              "L Lay out",
              "Say your 3 questions before calculating",
              "Shows a plan and lets the interviewer steer",
              "Is it real? Where is it? Why, and what is it worth?"
            ],
            [
              "E Evaluate",
              "Split the funnel by source and compare",
              "The average hides which group is causing the drop",
              "Existing channels still activate 70%; the new channel only 20%"
            ],
            [
              "A Assess",
              "Turn the finding into a cause and a dollar cost",
              "A diagnosis without money attached does not drive action",
              "New channel costs $250 per activated card against a $200 value"
            ],
            [
              "R Recommend",
              "Give the fix, who owns it and how to measure it",
              "Interviewers want a decision",
              "Fix onboarding, pay per activation, track activated cards"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Plain meaning",
            "Example here"
          ],
          "rows": [
            [
              "Funnel",
              "The steps a customer goes through, with people dropping out at each step",
              "Applied > Approved > Activated"
            ],
            [
              "Activation",
              "The first real use of the card",
              "First purchase within 30 days"
            ],
            [
              "Same-age cohort",
              "Compare groups that have had the same time to act",
              "Cards issued 30 days ago, not cards issued yesterday"
            ],
            [
              "Low-intent applicant",
              "Someone who applies for a perk, not to use the card",
              "Applies for a sign-up bonus, never uses it"
            ],
            [
              "Channel",
              "Where the applicant came from",
              "Search, partner site, a new promo campaign"
            ],
            [
              "Cost per activated card",
              "Marketing spend divided by cards that get used",
              "$450K / 1.8K = $250"
            ],
            [
              "Break-even",
              "The point where cost equals value",
              "25% activation on the new channel"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "What we are working out",
            "Calculation",
            "Result"
          ],
          "rows": [
            [
              "1",
              "Before: activated cards",
              "100K x 60% x 70%",
              "42,000"
            ],
            [
              "2",
              "Existing channels now (unchanged)",
              "100K x 60% x 70%",
              "42,000"
            ],
            [
              "3",
              "New channel: applications",
              "115K - 100K",
              "15,000"
            ],
            [
              "4",
              "New channel: approved",
              "15K x 60%",
              "9,000"
            ],
            [
              "5",
              "New channel: activated",
              "9K x 20%",
              "1,800"
            ],
            [
              "6",
              "Total approved and activated now",
              "60K + 9K = 69K; 42K + 1.8K = 43.8K",
              "69,000 and 43,800"
            ],
            [
              "7",
              "New activation rate",
              "43.8K / 69K",
              "about 63% (was 70%)"
            ],
            [
              "8",
              "Growth check",
              "Applications +15%; activated 43.8K / 42K",
              "+15% vs only +4%"
            ],
            [
              "9",
              "Cost per activated card, existing",
              "$30 x 100K = $3.0M / 42K",
              "$71"
            ],
            [
              "10",
              "Cost per activated card, new channel",
              "$30 x 15K = $450K / 1.8K",
              "$250"
            ],
            [
              "11",
              "Is the new channel worth it?",
              "1.8K x $200 = $360K, less $450K spend",
              "-$90K"
            ],
            [
              "12",
              "Break-even activation, new channel",
              "$450K / $200 = 2,250 cards; 2,250 / 9K",
              "25%"
            ],
            [
              "13",
              "If onboarding lifts it to 50%",
              "9K x 50% = 4.5K cards x $200 = $900K, less $450K",
              "+$450K"
            ],
            [
              "14",
              "Company-wide 5-point lift",
              "69K x 5% = 3,450 cards x $200",
              "+$690K"
            ]
          ]
        }
      ],
      "table": {
        "title": "Funnel diagnosis checklist",
        "headers": [
          "Question",
          "What to check",
          "Typical cause",
          "Fix"
        ],
        "rows": [
          [
            "Is it real?",
            "Definition, timing, same-age cohorts",
            "Recent cards have not had time to activate",
            "Compare at the same card age"
          ],
          [
            "Which channel?",
            "Activation by source",
            "Bonus-hunting or low-intent traffic",
            "Pay per activation, tighten targeting"
          ],
          [
            "Which customers?",
            "Activation by score band and income",
            "More thin-file or lower-score approvals",
            "Adjust offer, set credit limits and nudges by segment"
          ],
          [
            "Delivery and setup?",
            "Days from approval to card arrival, activation steps",
            "Late cards, clumsy activation",
            "Faster delivery, in-app and wallet activation"
          ],
          [
            "Offer and product?",
            "Activation by card type",
            "Offer not relevant to the customer",
            "Match the card to the need"
          ],
          [
            "Competition?",
            "Offers from rivals, share of wallet",
            "Customer uses a rival card first",
            "Early-use incentive, targeted spend offer"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "How would you confirm the new channel is the cause?",
        "a": "Split activation by acquisition channel and compare cards of the same age. If existing channels still activate about 70% and the new channel about 20%, the blended drop is a mix effect, not a general decline."
      },
      {
        "q": "What if all channels show lower activation?",
        "a": "Then look at things that affect everyone: card delivery time, the activation steps, the offer, and competitor behavior. Check days from approval to card arrival first."
      },
      {
        "q": "Would you stop the new channel?",
        "a": "Not yet. At $250 per activated card it loses money, but it breaks even at 25% activation. I would fix onboarding, then pay the partner per activated card."
      },
      {
        "q": "What metrics would you track going forward?",
        "a": "Activated cards per dollar of marketing, activation rate by channel and card age, days to first purchase, and 90-day spend."
      }
    ],
    "pitfalls": [
      "Celebrating applications. Always follow the funnel to the end.",
      "Comparing cards of different ages. New cards have had less time to activate.",
      "Using one blended average. Split by channel and customer type first.",
      "Naming causes without numbers. Show the funnel math and the cost per activated card.",
      "Forgetting to say your assumptions. The scenario had no figures, so state yours and invite correction."
    ]
  },
  {
    "id": "market-entry-category",
    "title": "Market Entry: A New Transaction Category",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "entry",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "A card issuer is considering expanding into a new transaction category it does not serve today, such as rent, healthcare or business-to-business payments. Should it go in, and how?",
    "clarify": [
      {
        "q": "Which category are we considering?",
        "a": "Rent payments by card. Treat all figures as working assumptions."
      },
      {
        "q": "What does success look like?",
        "a": "Profit after build cost, marketing and losses, with payback inside two years."
      },
      {
        "q": "Do we have a right to win here?",
        "a": "We have a large card base and rewards products. Rivals include payment apps and landlord portals."
      },
      {
        "q": "Are there constraints?",
        "a": "A budget of about $30M up front and a regulatory review. Fraud losses must stay near 0.1% of volume."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Number",
          "Value",
          "How we got it"
        ],
        "rows": [
          [
            "Renter households",
            "44M",
            "Assumed US figure; ask the interviewer"
          ],
          [
            "Rent per month",
            "$1,400",
            "Assumed average"
          ],
          [
            "Total yearly rent spend",
            "about $740B",
            "44M x $1,400 x 12 = $739B"
          ],
          [
            "Share that can be paid electronically",
            "30%",
            "Assumed; rest is cheque, cash or direct bank transfer. $740B x 30% = $222B"
          ],
          [
            "Our share in year 3",
            "2%",
            "Assumed. $222B x 2% = $4.4B volume. 'Volume' means total dollars paid through us"
          ],
          [
            "Users",
            "about 260K",
            "$4.4B / ($1,400 x 12 = $16.8K per user) = 262K"
          ],
          [
            "Net revenue per dollar",
            "0.8%",
            "Assumed: fee income minus rewards and processing. $4.4B x 0.8% = $35M"
          ],
          [
            "Losses (fraud, disputes)",
            "0.1% of volume",
            "Assumed = $4.4M"
          ],
          [
            "Running cost",
            "$8M a year",
            "Assumed team, tech and support"
          ],
          [
            "Up-front cost",
            "about $31M",
            "Build $15M + marketing 260K users x $60 = $15.6M"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm the question: should we start serving a new spending category? I will assume rent payments and that success means profit after build, marketing and losses. Is that right?"
        ],
        [
          "L: Lay out",
          "I will look at three things: how big the market is and how much we can reach, whether we have a reason to win, and whether the economics and risks work."
        ],
        [
          "E: Evaluate",
          "About 44M renter households paying $1,400 a month is roughly $740B a year. About 30% can be paid electronically, so $222B is reachable. A 2% share is $4.4B. At 0.8% net revenue and 0.1% losses, that is about $31M before an $8M running cost, so about $23M a year."
        ],
        [
          "A: Assess",
          "Up-front cost is about $31M, so payback is about 16 months at full size. Break-even is only about 68K users. The big risk is net revenue per dollar: at 0.3% the profit is about zero. Cannibalization and fraud are the next risks."
        ],
        [
          "R: Recommend",
          "I would enter, in stages: pilot in two or three cities with one property-management partner, check that net revenue stays at 0.6% or more and fraud under 0.1%, then scale. If the gates fail, I would redesign pricing before spending more."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Decision: should a card issuer start serving a new<br/>transaction category? (we assume rent payments)\"]\nC --> C2[\"Define terms: category = a type of spending<br/>Success = profit after build, marketing and losses\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Market: how big is the spend,<br/>and how much can we reach?\"]\nL --> L2[\"2 Right to win: why would customers<br/>use us, and who competes?\"]\nL --> L3[\"3 Economics and risk: does it make money,<br/>and what could go wrong?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Size the market, then the money\"]\nE1 --> E2[\"Spend: 44M renter households x $1,400 x 12<br/>= about $740B a year\"]\nE2 --> E3[\"Reachable: 30% pay electronically = $222B<br/>Our share in year 3: 2% = $4.4B\"]\nE3 --> E4[\"Money: $4.4B x 0.8% net revenue = $35M<br/>minus losses $4.4M and running cost $8M = $23M a year\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Payback: $31M up-front cost<br/>pays back in about 16 months once at full size\"]\nA --> A2[\"Break-even: about $1.1B of volume,<br/>around 68K users, under 2% of the target\"]\nA --> A3[\"Biggest risk: net revenue per dollar.<br/>At 0.3% the profit is about zero\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Enter, but in stages\"]\nR --> R1[\"Pilot in 2 or 3 cities with one<br/>property-management partner\"]\nR --> R2[\"Go or stop gates: 0.6%+ net revenue,<br/>activation, fraud under 0.1%\"]\nR --> R3[\"Scale nationally only after the gates are met\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "gates",
          "title": "How we decide: four gates",
          "note": "Each gate is a yes or no. If any answer is no, the plan changes before more money is spent.",
          "code": "flowchart TD\nQ[\"Should we enter this new category?\"] --> G1{\"1 Is the market big enough?\"}\nG1 -->|\"No: small or shrinking\"| X1[\"Stop. Look at a different category\"]\nG1 -->|\"Yes: $740B spend, $222B reachable\"| G2{\"2 Can we win a share?\"}\nG2 -->|\"No: no edge, strong rivals\"| X2[\"Stop, or partner instead of building\"]\nG2 -->|\"Yes: rewards, trusted brand, existing customers\"| G3{\"3 Do the economics work?\"}\nG3 -->|\"No: net revenue per dollar too low\"| X3[\"Redesign pricing and rewards, then re-test\"]\nG3 -->|\"Yes: about $23M a year at full size\"| G4{\"4 Can we manage the risks?\"}\nG4 -->|\"No: fraud, regulation, cannibalization\"| X4[\"Fix the risk first, or limit the pilot\"]\nG4 -->|\"Yes\"| GO[\"Enter in stages: pilot, gates, then scale\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef stop fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef go fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclass Q,G1,G2,G3,G4 q;\nclass X1,X2,X3,X4 stop;\nclass GO go;"
        },
        {
          "id": "money",
          "title": "The money: base case, break-even and what-ifs",
          "note": "Green is good, orange is a weaker case, red is the danger case.",
          "code": "flowchart TD\nB[\"Assumed: 260K users in year 3, each paying about $16.8K of rent a year<br/>Net revenue 0.8% of volume, losses 0.1%, running cost $8M a year\"] --> BASE[\"Base case<br/>Volume $4.4B x (0.8% - 0.1%) = $30.8M<br/>minus $8M running cost = +$22.8M a year\"]\n\nB --> INV[\"Up-front cost<br/>Build $15M + marketing 260K x $60 = $15.6M<br/>Total about $31M\"]\nBASE --> PB[\"Payback<br/>$31M / $22.8M a year = about 1.4 years<br/>about 16 months at full size\"]\nINV --> PB\n\nB --> BE[\"Break-even volume<br/>$8M / 0.7% = about $1.14B<br/>1.14B / 16.8K = about 68K users\"]\n\nB --> S1[\"Net revenue falls to 0.5%<br/>$4.4B x 0.4% = $17.6M, minus $8M = +$9.6M\"]\nB --> S2[\"Net revenue falls to 0.3%<br/>$4.4B x 0.2% = $8.8M, minus $8M = about +$0.8M\"]\nB --> S3[\"Share only 1% = $2.2B<br/>$2.2B x 0.7% = $15.4M, minus $8M = +$7.4M\"]\nB --> S4[\"Only 70% of volume is new (30% already on our cards)<br/>$3.08B x 0.7% = $21.6M, minus $8M = +$13.6M\"]\n\nPB --> R[\"Enter in stages<br/>The key number to prove in the pilot is net revenue per dollar\"]\nBE --> R\nS1 --> R\nS2 --> R\nS3 --> R\nS4 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B,BASE,INV base;\nclass PB,BE good;\nclass S1,S3,S4 mid;\nclass S2 bad;\nclass R out;"
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
              "Ask what the category is, who the company is, and what success means",
              "The answer changes a lot between rent, healthcare and B2B",
              "Assume rent; success = profit after build, marketing and losses"
            ],
            [
              "L Lay out",
              "Say your 3 areas before calculating",
              "Shows a plan and lets the interviewer steer",
              "Market, right to win, economics and risk"
            ],
            [
              "E Evaluate",
              "Size the market top-down, then work out the money per year",
              "A big market is not the same as a profitable one",
              "$740B spend, $4.4B our volume, about $23M profit"
            ],
            [
              "A Assess",
              "Turn numbers into payback, break-even and the biggest risk",
              "Shows you know what could break the plan",
              "16-month payback; profit depends on net revenue per dollar"
            ],
            [
              "R Recommend",
              "Give a decision with stages and stop or go gates",
              "Interviewers want a decision, not a list",
              "Pilot first, scale only if the gates are met"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Transaction category",
              "A type of spending, such as groceries, travel or rent"
            ],
            [
              "Volume",
              "Total dollars that flow through our product"
            ],
            [
              "Net revenue (take rate)",
              "What we keep per dollar of volume after rewards and processing costs"
            ],
            [
              "Interchange",
              "The fee a merchant pays on a card payment, shared with the card issuer"
            ],
            [
              "Cannibalization",
              "New product revenue that simply moves from our existing products, so it is not truly new"
            ],
            [
              "Right to win",
              "The reason customers would pick us over rivals"
            ],
            [
              "CAC",
              "Customer acquisition cost: marketing cost to win one user"
            ],
            [
              "Payback period",
              "Time for profit to repay the up-front cost"
            ],
            [
              "Break-even",
              "The volume where profit is exactly zero"
            ],
            [
              "Pilot",
              "A small, real test in limited places before a full launch"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Total spend: 44M households x $1,400 x 12 months = about $740B a year."
            ],
            [
              "2",
              "Reachable spend: $740B x 30% pay electronically = $222B."
            ],
            [
              "3",
              "Our volume in year 3: $222B x 2% share = $4.4B."
            ],
            [
              "4",
              "Users: $4.4B / $16.8K per user = about 260K."
            ],
            [
              "5",
              "Revenue: $4.4B x 0.8% = $35.2M."
            ],
            [
              "6",
              "Losses: $4.4B x 0.1% = $4.4M."
            ],
            [
              "7",
              "Contribution before running cost: $35.2M - $4.4M = $30.8M (same as $4.4B x 0.7%)."
            ],
            [
              "8",
              "Profit a year: $30.8M - $8M running cost = $22.8M."
            ],
            [
              "9",
              "Up-front cost: $15M build + 260K x $60 = $15.6M marketing = about $31M."
            ],
            [
              "10",
              "Payback: $31M / $22.8M = about 1.4 years, roughly 16 months once at full size."
            ],
            [
              "11",
              "Break-even volume: $8M / 0.7% = about $1.14B, which is $1.14B / $16.8K = about 68K users."
            ],
            [
              "12",
              "Net revenue at 0.5%: $4.4B x 0.4% = $17.6M, minus $8M = $9.6M. At 0.3%: $4.4B x 0.2% = $8.8M, minus $8M = about $0.8M, so about zero."
            ],
            [
              "13",
              "Share only 1%: $2.2B x 0.7% = $15.4M, minus $8M = $7.4M."
            ],
            [
              "14",
              "Cannibalization: if 30% of volume already sits on our cards, new volume is $3.08B. $3.08B x 0.7% = $21.6M, minus $8M = $13.6M."
            ]
          ]
        }
      ],
      "table": {
        "title": "Market entry checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical risk",
          "Response"
        ],
        "rows": [
          [
            "Is the market big and growing?",
            "Total spend, growth, how it is paid today",
            "Spend moves to other methods",
            "Choose a growing niche first"
          ],
          [
            "Can we win?",
            "Rivals, our brand, our existing customers, data advantage",
            "Strong incumbents, no clear edge",
            "Partner or find a clear differentiator"
          ],
          [
            "Does it make money?",
            "Net revenue per dollar, losses, running cost",
            "Rewards eat the margin",
            "Redesign rewards and pricing"
          ],
          [
            "Is it new money?",
            "How much volume is already on our cards",
            "Cannibalization",
            "Measure incremental volume in the pilot"
          ],
          [
            "Can we run it?",
            "Compliance, fraud controls, partners, tech",
            "Fraud and regulation",
            "Start small with strong controls"
          ],
          [
            "Build, buy or partner?",
            "Speed, cost, control",
            "Slow or expensive build",
            "Partner for the pilot"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if the category is already crowded?",
        "a": "Then the question is right to win. I would look for a clear edge such as better rewards for renters or ties with property managers, or choose to partner instead of building."
      },
      {
        "q": "How do you handle cannibalization?",
        "a": "Measure how much volume is already on our cards. If 30% is, only 70% is new volume, so profit falls from about $23M to about $14M a year. I would measure this in the pilot."
      },
      {
        "q": "What would make you stop?",
        "a": "Net revenue per dollar below about 0.3%, fraud well above 0.1%, or activation too low to reach break-even of about 68K users."
      },
      {
        "q": "Build, buy or partner?",
        "a": "Partner for the pilot to learn quickly and cheaply, then decide on build or buy once the economics are proven."
      }
    ],
    "pitfalls": [
      "Stopping at market size. A big market is not a profitable market; always reach the economics.",
      "Using 100% of the market. Narrow to reachable spend, then to a realistic share.",
      "Forgetting cannibalization. Count only new volume.",
      "No decision. End with enter, do not enter, or enter in stages, plus the checkpoints.",
      "Hiding assumptions. Say each number is an assumption and ask for the real one."
    ]
  },
  {
    "id": "savings-adoption",
    "title": "Savings Account Launch: Adoption Below Plan",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "metric",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "We launched a new savings account product 6 months ago and adoption has been slower than projected. How would you diagnose what is going wrong?",
    "clarify": [
      {
        "q": "What does adoption mean here?",
        "a": "A customer opens the account and funds it. Sign-ups with no deposit do not count."
      },
      {
        "q": "What was the plan?",
        "a": "200,000 funded accounts at 6 months, from about 5 million eligible existing customers. Actual is about 120,000."
      },
      {
        "q": "Has anything changed since launch?",
        "a": "Competitors raised their savings rates a little. We have not changed our rate, and marketing has been light."
      },
      {
        "q": "Do we have funnel data?",
        "a": "Yes: awareness from surveys, plus counts of application starts, completions and funded accounts."
      },
      {
        "q": "What is an account worth?",
        "a": "Assume about a 1.5% net interest margin on balances and about $40 of marketing per new account."
      }
    ],
    "tables": [
      {
        "title": "The funnel (illustrative numbers)",
        "headers": [
          "Stage",
          "Plan",
          "Actual",
          "What it means"
        ],
        "rows": [
          [
            "Eligible customers",
            "5.0M",
            "5.0M",
            "Existing customers who could open it"
          ],
          [
            "Aware",
            "40% = 2.0M",
            "30% = 1.5M",
            "Have seen or heard about the account"
          ],
          [
            "Start an application",
            "20% of aware = 400K",
            "20% of aware = 300K",
            "Interested enough to begin"
          ],
          [
            "Finish and fund",
            "50% = 200K",
            "40% = 120K",
            "Account opened with money in it (this is 'adoption')"
          ],
          [
            "Average balance",
            "$8K",
            "$6K",
            "Deposits per account"
          ],
          [
            "Total deposits",
            "$1.6B",
            "$0.72B",
            "Accounts x balance"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: we launched a savings account six months ago and have fewer funded accounts than planned. I will define adoption as a funded account. What was the plan, and has anything changed since launch, like rates or marketing?"
        ],
        [
          "L: Lay out",
          "I would look at three things. First, was the plan realistic? Second, where in the funnel do customers drop out: aware, start, finish, fund? Third, why, and what is the fix worth? Then I would decide whether to keep, fix or stop."
        ],
        [
          "E: Evaluate",
          "Assuming a plan of 200K accounts from 5M customers at 40% aware, 20% start and 50% finish, the actual is 30% aware and 40% finish, so 120K accounts, 60% of plan. Awareness and application drop-off each explain 40K accounts."
        ],
        [
          "A: Assess",
          "At about $90 a year per account, each 40K accounts is about $3.6M a year. Average balance is also $6K versus $8K planned, another $3.6M. So the causes are awareness, a long application, and a weak reason to deposit more."
        ],
        [
          "R: Recommend",
          "I would fix the application flow first because it is cheapest, promote the account in the app to existing customers, and test a rate or bonus on a small group. At month 9, if we are on pace for 160K or more accounts, I would keep going. If not, I would rethink the offer or stop."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Problem: a savings account launched 6 months ago<br/>has fewer customers than planned\"]\nC --> C2[\"Define terms: adoption = funded account (money deposited)<br/>Plan = 200K accounts at 6 months\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Was the plan realistic?<br/>Or is the product really underperforming?\"]\nL --> L2[\"2 Where do customers drop out?<br/>Aware, interested, applied, funded\"]\nL --> L3[\"3 Why, and what is the fix worth?<br/>Then decide: keep, fix or stop\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Compare the real funnel with the plan, stage by stage\"]\nE1 --> E2[\"Plan: 5M eligible x 40% aware x 20% start x 50% finish<br/>= 200K accounts\"]\nE2 --> E3[\"Actual: 5M x 30% aware x 20% start x 40% finish<br/>= 120K accounts, 60% of plan\"]\nE3 --> E4[\"Gap of 80K: awareness explains 40K,<br/>application drop-off explains 40K\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Causes: too few customers know about it,<br/>and 6 in 10 who start do not finish\"]\nA --> A2[\"Value: each account is worth about $90 a year,<br/>so each 40K accounts is about $3.6M a year\"]\nA --> A3[\"Also: balance per account is $6K vs $8K planned,<br/>another $3.6M a year gap\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Fix the funnel first, then decide at a checkpoint\"]\nR --> R1[\"Fix the application flow first: cheapest and fastest\"]\nR --> R2[\"Promote to existing customers in the app,<br/>and test a rate or bonus on a small group\"]\nR --> R3[\"Month 9 checkpoint: on pace for 160K+ accounts?<br/>Keep going. If not, rethink the offer or stop\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "diagnose",
          "title": "How we found it: the diagnosis path",
          "note": "Check the plan first, then walk the funnel. Red boxes are the stages that are off plan.",
          "code": "flowchart TD\nQ[\"Savings account adoption is below plan. Why?\"] --> P{\"1 Was the plan realistic?\"}\nP -->|\"Check how it was built\"| P1[\"Compare with similar past launches and rivals<br/>If the plan was too high, reset it\"]\nP --> F{\"2 Where is the funnel leaking?\"}\nF --> S1[\"Aware<br/>30% vs 40% planned\"]\nF --> S2[\"Starts application<br/>20% of aware, as planned\"]\nF --> S3[\"Finishes application<br/>40% vs 50% planned\"]\nF --> S4[\"Funds the account<br/>$6K average vs $8K planned\"]\n\nS1 --> W1[\"Why: little promotion, hard to find in the app<br/>Fix: in-app banners, emails to existing customers\"]\nS3 --> W3[\"Why: long form, ID checks, no instant funding<br/>Fix: fewer steps, pre-filled details, instant transfer\"]\nS4 --> W4[\"Why: rate not competitive, no reason to move more money<br/>Fix: tiered rate or bonus, test first\"]\nS2 --> OK[\"On plan: the offer interests people who see it\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef ok fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef fix fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclass Q,P,F,P1 q;\nclass S1,S3,S4 bad;\nclass S2,OK ok;\nclass W1,W3,W4 fix;"
        },
        {
          "id": "worth",
          "title": "What it is worth, and what would change the answer",
          "note": "Green is a lever, orange is its cost, the last box is the total.",
          "code": "flowchart TD\nB[\"Assumed: 1.5% net interest margin on balances<br/>Value per account = $6K x 1.5% = $90 a year\"] --> G[\"The gap<br/>Plan: 200K x $8K x 1.5% = $24M a year<br/>Actual: 120K x $6K x 1.5% = $10.8M a year<br/>Gap = $13.2M\"]\n\nB --> L1[\"Lever 1: awareness back to 40%<br/>2.0M x 20% x 40% = 160K accounts<br/>+40K x $90 = +$3.6M a year\"]\nB --> L2[\"Lever 2: application finish rate back to 50%<br/>2.0M x 20% x 50% = 200K accounts<br/>+40K x $90 = +$3.6M a year\"]\nB --> L3[\"Lever 3: balance back to $8K<br/>120K x $2K x 1.5% = +$3.6M a year\"]\n\nL1 --> C1[\"Cost: 40K accounts x $40 acquisition cost = $1.6M once<br/>Pays back in about 5 months\"]\nL2 --> C2[\"Cost: mostly design and tech work<br/>Cheapest lever, do it first\"]\nL3 --> C3[\"Cost of a rate rise of 0.25 points:<br/>120K x $6K x 0.25% = $1.8M a year<br/>Breaks even if it brings 20K more accounts ($1.8M / $90)\"]\n\nL1 --> T[\"All three together = $24M, a $13.2M gain<br/>More than the $10.8M sum, because the levers multiply\"]\nL2 --> T\nL3 --> T\nG --> T\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass G bad;\nclass L1,L2,L3 good;\nclass C1,C2,C3 mid;\nclass T out;"
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
              "Define adoption and the plan; ask what has changed since launch",
              "Adoption could mean signed up, funded or active",
              "Adoption = funded account; plan was 200K at 6 months"
            ],
            [
              "L Lay out",
              "Say your 3 questions before calculating",
              "Shows a plan and lets the interviewer steer",
              "Was the plan realistic? Where do customers drop out? Why, and what is the fix worth?"
            ],
            [
              "E Evaluate",
              "Put actual next to plan for every funnel stage",
              "The total hides which stage is failing",
              "Awareness 30% vs 40%, finish rate 40% vs 50%; start rate on plan"
            ],
            [
              "A Assess",
              "Turn each gap into accounts and dollars",
              "A cause without a dollar value does not drive action",
              "Each gap is 40K accounts, about $3.6M a year"
            ],
            [
              "R Recommend",
              "Give the fix, the order, and a keep-or-stop checkpoint",
              "Interviewers want a decision",
              "Fix application first, promote, pilot a rate test; month 9 gate"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Adoption",
              "How many customers actually use the product; here, accounts opened and funded"
            ],
            [
              "Funnel",
              "The steps customers pass through: aware, interested, applied, funded"
            ],
            [
              "Conversion rate",
              "The share of people who move from one step to the next"
            ],
            [
              "Drop-off",
              "People who leave the funnel at a step"
            ],
            [
              "Net interest margin",
              "What the bank earns on balances after paying the customer interest"
            ],
            [
              "Acquisition cost",
              "Marketing cost to win one account"
            ],
            [
              "Go / no-go checkpoint",
              "A planned date with a clear test for whether to keep investing or stop"
            ],
            [
              "Cannibalization",
              "Money that simply moves from the bank's other accounts, so it is not truly new"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Plan: 5M x 40% aware = 2.0M; x 20% start = 400K; x 50% finish = 200K accounts."
            ],
            [
              "2",
              "Actual: 5M x 30% aware = 1.5M; x 20% start = 300K; x 40% finish = 120K accounts."
            ],
            [
              "3",
              "Adoption versus plan: 120K / 200K = 60%. The gap is 80K accounts."
            ],
            [
              "4",
              "Fix awareness only: 2.0M x 20% x 40% = 160K, which adds 40K accounts."
            ],
            [
              "5",
              "Fix finish rate as well: 2.0M x 20% x 50% = 200K, which adds another 40K. Together they close the 80K gap."
            ],
            [
              "6",
              "Value per account: $6K x 1.5% = $90 a year."
            ],
            [
              "7",
              "Each 40K accounts: 40K x $90 = $3.6M a year."
            ],
            [
              "8",
              "Balance gap: 120K x ($8K - $6K) = $240M more deposits; x 1.5% = $3.6M a year."
            ],
            [
              "9",
              "Plan value: 200K x $8K x 1.5% = $24M a year. Actual: 120K x $6K x 1.5% = $10.8M. Gap = $13.2M."
            ],
            [
              "10",
              "Awareness campaign: 40K accounts x $40 = $1.6M one-time; payback $1.6M / $3.6M a year = about 5 months."
            ],
            [
              "11",
              "Rate rise of 0.25 points: 120K x $6K x 0.25% = $1.8M a year. Break-even: $1.8M / $90 = 20K extra accounts."
            ],
            [
              "12",
              "All three levers together restore the $24M plan, a $13.2M gain, which is more than the $10.8M sum because accounts and balances multiply."
            ]
          ]
        }
      ],
      "table": {
        "title": "Adoption diagnosis checklist",
        "headers": [
          "Question",
          "What to look at",
          "Typical cause",
          "Fix"
        ],
        "rows": [
          [
            "Was the plan realistic?",
            "Past launches, rival products, market size",
            "Plan assumed best case",
            "Reset the target to a realistic range"
          ],
          [
            "Do customers know?",
            "Awareness by channel and segment",
            "Little promotion, hidden in the app",
            "In-app banners, emails, branch mention"
          ],
          [
            "Are they interested?",
            "Click and start rates",
            "Weak offer or unclear benefit",
            "Clearer message, test the rate"
          ],
          [
            "Do they finish?",
            "Drop-off by application step",
            "Long form, ID checks, no instant funding",
            "Fewer steps, pre-filled data, instant transfer"
          ],
          [
            "Do they deposit enough?",
            "Balance after 30 and 90 days",
            "Rate not competitive, no reason to move money",
            "Tiered rate or bonus, tested first"
          ],
          [
            "Is the money new?",
            "Share of deposits moved from our other accounts",
            "Cannibalization",
            "Measure new money only"
          ],
          [
            "Did something change?",
            "Rate moves, rival launches, outages",
            "Competitors raised rates",
            "Match selectively or differentiate"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if the plan itself was too optimistic?",
        "a": "Then the product is not failing, the target is. Compare the plan with similar past launches and rivals. If it was too high, reset the target and judge the product against the new one."
      },
      {
        "q": "How would you decide whether to keep or stop the product?",
        "a": "Set a checkpoint, for example month 9: if funded accounts are on pace for 160K or more and balances are rising, continue. If not, rethink the offer or stop."
      },
      {
        "q": "How do you know the deposits are new money?",
        "a": "Check how much came from the bank's own checking or other savings accounts. Only new money, or money that would have left, counts as a gain."
      },
      {
        "q": "What would you test first?",
        "a": "The application flow, because it is cheapest to change and the effect shows in weeks. Then a small rate or bonus test with a holdout group."
      }
    ],
    "pitfalls": [
      "Guessing a cause. Follow the funnel and let the numbers show the stage.",
      "Not questioning the plan. Sometimes the target was too high.",
      "Counting sign-ups, not funded accounts. Adoption means money in the account.",
      "Ignoring balances. Many small accounts can still miss the deposit goal.",
      "No decision. End with keep, fix or stop and a dated checkpoint."
    ]
  },
  {
    "id": "smb-credit-line",
    "title": "Small Business Line of Credit: Go / No-Go",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "entry",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "Our small business lending team wants to launch a new line of credit product for businesses under $500K in revenue. How would you evaluate the opportunity?",
    "clarify": [
      {
        "q": "What is the product?",
        "a": "A revolving line of credit: a limit the business can borrow from, repay and borrow again. Assume a $25K typical limit."
      },
      {
        "q": "Who is the customer?",
        "a": "Businesses under $500K revenue, starting with our existing small business deposit customers."
      },
      {
        "q": "What does success look like?",
        "a": "Profit after credit losses, with payback inside two years."
      },
      {
        "q": "What do we know about rivals and risk?",
        "a": "Online lenders are fast but expensive. Our past small business loans lost about 4 to 6% of balances. Treat all figures as working assumptions."
      },
      {
        "q": "Any constraints?",
        "a": "About $15M of up-front investment, and risk and legal must approve the credit policy."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Number",
          "Value",
          "How we got it"
        ],
        "rows": [
          [
            "Small businesses under $500K revenue",
            "25M",
            "Assumed, includes one-person businesses"
          ],
          [
            "Use credit",
            "20% = 5M",
            "Assumed"
          ],
          [
            "We would approve",
            "30% of 5M = 1.5M",
            "Assumed from our risk rules"
          ],
          [
            "Our share in year 3",
            "2% = 30K customers",
            "1.5M x 2%"
          ],
          [
            "Credit limit and usage",
            "$25K limit, 40% used = $10K balance",
            "Assumed"
          ],
          [
            "Interest rate / funding cost",
            "15% / 4%",
            "Assumed. Spread = 11%"
          ],
          [
            "Losses (unpaid balances)",
            "5% of balances",
            "Assumed"
          ],
          [
            "Servicing cost",
            "$120 per customer a year",
            "Assumed"
          ],
          [
            "Fixed cost",
            "$5M a year",
            "Assumed team, tech and compliance"
          ],
          [
            "Up-front cost",
            "$15M",
            "Build $6M + 30K x $300 acquisition = $9M"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: should our small business lending team launch a line of credit for businesses under $500K revenue? I will treat success as profit after credit losses with payback inside two years. Is that right, and is this for existing customers or new ones too?"
        ],
        [
          "L: Lay out",
          "I would look at three things. First, the market: how many businesses need this and would qualify. Second, our right to win: why us, and can we judge who repays. Third, the economics and risk: does each customer make money after losses?"
        ],
        [
          "E: Evaluate",
          "Assuming 25M small businesses, 20% use credit and we would approve 30%, that is 1.5M. A 2% share is 30K customers. Each carries a $10K balance and earns about $1,100 after funding costs, minus $500 of losses and $120 of servicing, so $480. That is $14.4M, minus $5M fixed, about $9.4M a year."
        ],
        [
          "A: Assess",
          "The $15M up-front cost pays back in about 19 months, and we break even at about 10K customers. The big risk is losses: at 8% the profit is about zero, and in a downturn it turns negative. So the number to prove is the loss rate."
        ],
        [
          "R: Recommend",
          "I would go in stages: a pilot with about 2,000 existing customers and small limits of $5K to $10K. At six months, I would check losses under 6%, usage of 35% or more, and acquisition cost of $300 or less. If we meet them, we raise limits and open to new customers. If not, we redesign or stop."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Decision: should the small business lending team launch<br/>a line of credit for businesses under $500K revenue?\"]\nC --> C2[\"Define terms: line of credit = borrow up to a limit, repay, borrow again<br/>Success = profit after losses, with payback inside 2 years\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Market: how many businesses need and<br/>qualify for this, and could we reach them?\"]\nL --> L2[\"2 Right to win: why us, and can we judge<br/>who will repay?\"]\nL --> L3[\"3 Economics and risk: does each customer<br/>make money after losses?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Size the market, then the profit per customer\"]\nE1 --> E2[\"Market: 25M businesses x 20% use credit = 5M<br/>x 30% we would approve = 1.5M. Our 2% share = 30K customers\"]\nE2 --> E3[\"Per customer: $10K balance earns $1,100 after funding cost<br/>minus $500 losses and $120 servicing = $480 a year\"]\nE3 --> E4[\"Total: 30K x $480 = $14.4M, minus $5M fixed cost<br/>= about $9.4M a year\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Payback: $15M up-front cost pays back<br/>in about 19 months\"]\nA --> A2[\"Break-even: about 10K customers,<br/>about 35% of the target\"]\nA --> A3[\"Biggest risk: losses. At an 8% loss rate<br/>profit is about zero. In a downturn it turns negative\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Go, but in stages\"]\nR --> R1[\"Pilot with about 2,000 existing customers,<br/>small limits of $5K to $10K\"]\nR --> R2[\"Go or stop gates at 6 months: losses under 6%,<br/>usage 35% or more, acquisition cost $300 or less\"]\nR --> R3[\"Raise limits and open to new customers only<br/>after the gates are met\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "gates",
          "title": "How we decide: four gates",
          "note": "Each gate is a yes or no. If any answer is no, the plan changes before more money is spent.",
          "code": "flowchart TD\nQ[\"Should we launch a line of credit for businesses under $500K revenue?\"] --> G1{\"1 Is there real demand?\"}\nG1 -->|\"No: owners use cards or personal loans\"| X1[\"Stop, or learn why before building\"]\nG1 -->|\"Yes: 5M businesses use credit, 1.5M we would approve\"| G2{\"2 Can we win and judge risk?\"}\nG2 -->|\"No: no data edge, rivals are cheaper or faster\"| X2[\"Partner, or pick a niche where we have an edge\"]\nG2 -->|\"Yes: our deposit data shows cash flow\"| G3{\"3 Does each customer make money?\"}\nG3 -->|\"No: losses and servicing eat the spread\"| X3[\"Change limits, pricing or customer type, then re-test\"]\nG3 -->|\"Yes: about $480 per customer a year\"| G4{\"4 Can we handle the risks?\"}\nG4 -->|\"No: losses spike, rules not met\"| X4[\"Limit the pilot, add controls, review with risk and legal\"]\nG4 -->|\"Yes\"| GO[\"Pilot, then gates, then scale\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef stop fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef go fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclass Q,G1,G2,G3,G4 q;\nclass X1,X2,X3,X4 stop;\nclass GO go;"
        },
        {
          "id": "money",
          "title": "The money: per customer, base case and what-ifs",
          "note": "Green is the base case, orange is a weaker case, red is the danger case.",
          "code": "flowchart TD\nB[\"Assumed: $25K limit, 40% used = $10K balance, 15% interest rate, 4% funding cost<br/>5% of balances lost, $120 servicing, $5M fixed cost, 30K customers\"] --> U[\"Per customer per year<br/>Interest $10K x 15% = $1,500, minus funding $400 = $1,100<br/>minus losses $500, minus servicing $120 = $480\"]\nU --> T[\"Base case<br/>30K x $480 = $14.4M, minus $5M fixed = +$9.4M a year\"]\n\nB --> INV[\"Up-front cost<br/>Build $6M + 30K x $300 acquisition = $9M<br/>Total $15M\"]\nT --> PB[\"Payback<br/>$15M / $9.4M = 1.6 years<br/>about 19 months\"]\nINV --> PB\n\nU --> BE[\"Break-even customers<br/>$5M / $480 = about 10.4K<br/>35% of the 30K target\"]\n\nT --> S1[\"Losses rise to 8%<br/>$1,100 - $800 - $120 = $180 each<br/>$5.4M - $5M = +$0.4M\"]\nT --> S2[\"Interest rate only 12%<br/>$800 - $500 - $120 = $180 each<br/>+$0.4M\"]\nT --> S3[\"Usage only 25% ($6.25K balance)<br/>$255 each = $7.65M - $5M = +$2.7M\"]\nT --> S4[\"Downturn: losses double to 10%<br/>-$20 each = -$0.6M - $5M = -$5.6M\"]\n\nPB --> R[\"Go, in stages<br/>The number to prove in the pilot is the loss rate\"]\nBE --> R\nS1 --> R\nS2 --> R\nS3 --> R\nS4 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B,U,INV base;\nclass T,PB,BE good;\nclass S1,S2,S3 mid;\nclass S4 bad;\nclass R out;"
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
              "Define the product, the customer and what success means",
              "'Small' and 'line of credit' can mean different things",
              "Under $500K revenue; success = profit after losses, payback under 2 years"
            ],
            [
              "L Lay out",
              "Say your 3 areas before calculating",
              "Shows a plan and lets the interviewer steer",
              "Market, right to win, economics and risk"
            ],
            [
              "E Evaluate",
              "Size the market top-down, then work out profit per customer",
              "A big market is not a profitable one",
              "30K customers x $480 = $14.4M, minus $5M fixed = $9.4M"
            ],
            [
              "A Assess",
              "Find payback, break-even and the biggest risk",
              "Shows you know what could break the plan",
              "19-month payback; losses are the key risk"
            ],
            [
              "R Recommend",
              "Give a decision with stages and gates",
              "Interviewers want a decision",
              "Pilot, gates at 6 months, then scale"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Line of credit",
              "A limit the business can borrow from, repay and borrow again"
            ],
            [
              "Utilization",
              "The share of the limit actually borrowed; here 40%"
            ],
            [
              "Spread / net interest income",
              "Interest earned minus what it costs the bank to fund the loan"
            ],
            [
              "Loss rate (charge-off)",
              "The share of balances the bank never gets back"
            ],
            [
              "Underwriting",
              "Deciding who to approve and for how much"
            ],
            [
              "Cash-flow underwriting",
              "Judging a business by its bank account inflows and outflows, useful when there is little credit history"
            ],
            [
              "Thin file",
              "A customer with little credit history"
            ],
            [
              "Unit economics",
              "Profit for one customer; multiply by customers to get the total"
            ],
            [
              "Acquisition cost",
              "Marketing and sales cost to win one customer"
            ],
            [
              "Pilot",
              "A small, real test before a full launch"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Market: 25M businesses x 20% use credit = 5M; x 30% we would approve = 1.5M."
            ],
            [
              "2",
              "Our customers in year 3: 1.5M x 2% = 30K."
            ],
            [
              "3",
              "Balance per customer: $25K limit x 40% used = $10K."
            ],
            [
              "4",
              "Interest: $10K x 15% = $1,500. Funding cost: $10K x 4% = $400. Spread income = $1,100."
            ],
            [
              "5",
              "Losses: $10K x 5% = $500. Servicing = $120."
            ],
            [
              "6",
              "Profit per customer: $1,100 - $500 - $120 = $480 a year."
            ],
            [
              "7",
              "Total: 30K x $480 = $14.4M; minus $5M fixed cost = $9.4M a year."
            ],
            [
              "8",
              "Up-front cost: $6M build + 30K x $300 = $9M acquisition = $15M."
            ],
            [
              "9",
              "Payback: $15M / $9.4M = 1.6 years, about 19 months."
            ],
            [
              "10",
              "Break-even customers: $5M / $480 = about 10.4K, which is 35% of the 30K target."
            ],
            [
              "11",
              "Losses at 8%: $10K x 8% = $800, so $1,100 - $800 - $120 = $180 each. 30K x $180 = $5.4M, minus $5M = $0.4M. About zero."
            ],
            [
              "12",
              "Interest rate only 12%: spread $800 - $500 - $120 = $180 each, same $0.4M."
            ],
            [
              "13",
              "Usage only 25% ($6.25K balance): spread $687, losses $312, servicing $120 = $255 each. 30K x $255 = $7.65M, minus $5M = $2.7M."
            ],
            [
              "14",
              "Downturn, losses double to 10%: $1,100 - $1,000 - $120 = -$20 each. 30K x -$20 = -$0.6M, minus $5M = -$5.6M."
            ]
          ]
        }
      ],
      "table": {
        "title": "Go / no-go checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical risk",
          "Response"
        ],
        "rows": [
          [
            "Is there demand?",
            "How owners fund themselves today, survey and usage data",
            "They use personal cards or loans",
            "Interview owners, test an offer"
          ],
          [
            "Can we win?",
            "Our deposit data, speed, price versus fintechs",
            "No edge against online lenders",
            "Use cash-flow data, fast approval, link to the business account"
          ],
          [
            "Can we judge risk?",
            "Past loan performance in similar segments",
            "Thin files hide risk",
            "Cash-flow underwriting, small starting limits"
          ],
          [
            "Does it make money?",
            "Spread, loss rate, servicing and fixed cost",
            "Losses eat the spread",
            "Tune limits, pricing and who we approve"
          ],
          [
            "What if the economy worsens?",
            "Loss rate under stress",
            "Losses double",
            "Stress test, cap total exposure"
          ],
          [
            "Rules and fairness?",
            "Credit rules, fair lending, disclosures",
            "Compliance issues delay launch",
            "Involve risk and legal from the start"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why start with existing customers?",
        "a": "We can see their cash flow in their account, so we can judge who will repay. This lowers losses and acquisition cost compared with strangers."
      },
      {
        "q": "What if losses come in at 8%?",
        "a": "Profit falls to about zero. I would cut starting limits, tighten who we approve, or raise the rate before scaling."
      },
      {
        "q": "How would you run a downturn test?",
        "a": "Double the loss rate to 10%. Per-customer profit turns slightly negative and the total loses about $5.6M a year, so I would cap total exposure and keep limits small until losses are proven."
      },
      {
        "q": "Build, buy or partner?",
        "a": "Partner or use existing systems for the pilot to move fast, then decide on build once the loss rate and usage are proven."
      }
    ],
    "pitfalls": [
      "Looking only at demand. For lending, losses decide profit.",
      "Using the whole market. Narrow to those who use credit and whom we would approve.",
      "Forgetting servicing and fixed costs. Revenue minus losses is not profit.",
      "Ignoring a downturn. Show what happens when losses double.",
      "No decision. End with go, no-go or staged go, plus the gates."
    ]
  },
  {
    "id": "genz-travel-card",
    "title": "Gen Z Travel Card: Is There a Real Market?",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "entry",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "Marketing wants to launch a premium travel rewards card targeting Gen Z customers. How would you determine if there is a real market for it?",
    "clarify": [
      {
        "q": "Who counts as Gen Z here?",
        "a": "Adults aged 18 to 28 who could hold a card. Assume about 45M in the US."
      },
      {
        "q": "What is the card?",
        "a": "An annual-fee card, assumed at $150, that earns extra rewards on travel and includes some travel perks."
      },
      {
        "q": "What do we already know about demand?",
        "a": "A marketing survey says about 20% of Gen Z are interested. Nobody has tested real sign-ups."
      },
      {
        "q": "What data do we have on young customers?",
        "a": "We can see card and debit spend by category for our existing customers aged 18 to 28, including travel."
      },
      {
        "q": "What is the budget and success bar?",
        "a": "About $22M up front, with payback inside two years. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Number",
          "Value",
          "How we got it"
        ],
        "rows": [
          [
            "Gen Z (ages 18 to 28)",
            "45M",
            "Assumed US figure"
          ],
          [
            "Can get a card",
            "50% = 22.5M",
            "Assumed: old enough, has income and a usable credit history"
          ],
          [
            "Interested and willing to pay a fee",
            "8% = 1.8M",
            "Survey says 20% are interested, but only about 40% of them act: 20% x 40% = 8%"
          ],
          [
            "Our share in year 3",
            "5% = 90K cards",
            "1.8M x 5%"
          ],
          [
            "Spend per card",
            "$18K a year",
            "Assumed"
          ],
          [
            "Annual fee",
            "$150",
            "Assumed"
          ],
          [
            "Rewards cost",
            "1.2% of spend = $216",
            "Points, cash back and travel perks"
          ],
          [
            "Fixed cost",
            "$6M a year",
            "Assumed team, tech and marketing"
          ],
          [
            "Up-front cost",
            "$22M",
            "Build $4M + 90K x $200 sign-up bonus and marketing = $18M"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: marketing wants a premium travel rewards card for Gen Z, and I need to judge whether a real market exists. I will treat a real market as enough people who want it, will pay the fee, and make the card profitable. Is that right?"
        ],
        [
          "L: Lay out",
          "I would look at three things. First, size: how many Gen Z can and would take this card. Second, real behavior: do they actually travel, spend and pay fees, or only say they would. Third, our right to win and whether each card is profitable."
        ],
        [
          "E: Evaluate",
          "Assuming 45M Gen Z and half can get a card, that is 22.5M. A survey might say 20% are interested, but only about 40% of those act, so 8%, or 1.8M. A 5% share is 90K cards. Each card earns about $630 and costs about $406, so $224. That is $20.2M, minus $6M fixed, about $14.2M a year."
        ],
        [
          "A: Assess",
          "The $22M up-front cost pays back in about 19 months and we break even at about 27K cards. The risks are lower spend per card, resistance to the fee, and customers closing the card after the sign-up bonus. Surveys overstate demand, so I want real behavior."
        ],
        [
          "R: Recommend",
          "I would check our own data on young customers' travel spend, run a waitlist with a few fee levels, then pilot with existing young customers. If applications reach 1.5% or more of those invited and spend reaches about $1,200 a month, I would scale. If not, I would redesign the card or stop."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Question: is there a real market for a premium travel<br/>rewards card aimed at Gen Z (ages 18 to 28)?\"]\nC --> C2[\"Define terms: real market = enough people who want it,<br/>will pay the fee, and make the card profitable\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Size: how many Gen Z can and<br/>would take this card?\"]\nL --> L2[\"2 Behavior: do they really travel, spend and pay fees,<br/>or only say they would?\"]\nL --> L3[\"3 Right to win and economics: why us,<br/>and is each card profitable?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Size the market, then the profit per card\"]\nE1 --> E2[\"Market: 45M Gen Z x 50% card-eligible = 22.5M<br/>x 8% interested and willing to pay = 1.8M\"]\nE2 --> E3[\"Our share 5% = 90K cards. Survey says 20% interested,<br/>but only 40% of them act, so 8%\"]\nE3 --> E4[\"Per card: $630 revenue minus $406 cost = $224 a year<br/>90K x $224 = $20.2M, minus $6M fixed = $14.2M\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Payback: $22M up-front cost pays back in about 19 months<br/>Break-even: about 27K cards\"]\nA --> A2[\"Biggest risks: spend per card, the annual fee,<br/>and customers closing after the sign-up bonus\"]\nA --> A3[\"Evidence: surveys overstate demand,<br/>so test real behavior before committing\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Test the demand with real behavior, then launch in stages\"]\nR --> R1[\"Step 1: check our own data for Gen Z travel spend,<br/>run a waitlist and fee test\"]\nR --> R2[\"Step 2: pilot with existing young customers;<br/>pass if applications 1.5%+ and spend $1.2K a month\"]\nR --> R3[\"Step 3: scale marketing only after the pilot gates are met\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "evidence",
          "title": "How we test it: the evidence plan",
          "note": "Orange boxes say what evidence to collect and how strong it is. Real behavior beats stated opinion.",
          "code": "flowchart TD\nQ[\"Is there a real market for a premium Gen Z travel card?\"] --> T1{\"1 Is it big enough?\"}\nT1 --> T1a[\"Evidence: public data on Gen Z size, income, credit scores<br/>Strength: medium<br/>Pass: at least 1M eligible and interested people\"]\nQ --> T2{\"2 Do they truly need it?\"}\nT2 --> T2a[\"Evidence: our own data on young customers' travel and spend<br/>Strength: strong, it is real behavior<br/>Pass: travel spend is high enough to earn rewards\"]\nQ --> T3{\"3 Will they pay the fee?\"}\nT3 --> T3a[\"Evidence: waitlist and price test with 2 or 3 fee levels<br/>Strength: strong, they act, not just answer<br/>Pass: sign-ups hold up at a $150 fee\"]\nQ --> T4{\"4 Can we win?\"}\nT4 --> T4a[\"Evidence: rival cards, our rewards, brand with young customers<br/>Strength: medium<br/>Pass: a clear edge, such as no foreign fees or easy points\"]\n\nT1a --> P[\"Pilot with a small group of existing customers<br/>Real applications and real spend are the strongest proof\"]\nT2a --> P\nT3a --> P\nT4a --> P\nP --> D{\"Gates met?\"}\nD -->|\"Yes\"| GO[\"Scale in stages\"]\nD -->|\"No\"| NG[\"Redesign the card or stop\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef ev fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef pilot fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef go fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef stop fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclass Q,T1,T2,T3,T4,D q;\nclass T1a,T2a,T3a,T4a ev;\nclass P pilot;\nclass GO go;\nclass NG stop;"
        },
        {
          "id": "money",
          "title": "The money: per card, base case and what-ifs",
          "note": "Green is the base case, orange is a weaker case, red is a danger case.",
          "code": "flowchart TD\nB[\"Assumed per card per year: $18K spend, 2.0% interchange, $150 annual fee,<br/>$120 net interest, rewards 1.2% of spend, $60 benefits, $90 losses, $40 servicing\"] --> U[\"Per card<br/>Revenue: $360 + $150 + $120 = $630<br/>Cost: $216 rewards + $60 + $90 + $40 = $406<br/>Profit = $224 a year\"]\nU --> T[\"Base case<br/>90K cards x $224 = $20.2M, minus $6M fixed = +$14.2M a year\"]\n\nB --> INV[\"Up-front cost<br/>Build $4M + 90K x $200 sign-up bonus and marketing = $18M<br/>Total $22M\"]\nT --> PB[\"Payback<br/>$22M / $14.2M = 1.55 years<br/>about 19 months\"]\nINV --> PB\n\nU --> BE[\"Break-even cards<br/>$6M / $224 = about 27K<br/>30% of the 90K target\"]\n\nT --> S1[\"Spend only $10K a year<br/>Revenue $470, cost $310 = $160 each<br/>90K x $160 = $14.4M - $6M = +$8.4M\"]\nT --> S2[\"Fee waived to $0<br/>$224 - $150 = $74 each<br/>$6.7M - $6M = +$0.7M\"]\nT --> S3[\"Only 45K cards<br/>45K x $224 = $10.1M - $6M = +$4.1M\"]\nU --> L1[\"Card life 3 years: $224 x 3 = $672 vs $200 to win = 3.4x<br/>Closed after year 1: $224 vs $200 = 1.1x, too thin\"]\n\nPB --> R[\"Test real demand first, then scale<br/>Watch spend per card and how long customers stay\"]\nBE --> R\nS1 --> R\nS2 --> R\nS3 --> R\nL1 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B,U,INV base;\nclass T,PB,BE good;\nclass S1,S3 mid;\nclass S2,L1 bad;\nclass R out;"
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
              "Define Gen Z, the card and what 'real market' means",
              "A real market needs demand, willingness to pay and profit, not just interest",
              "Ages 18 to 28; fee card; real market = enough buyers that make the card profitable"
            ],
            [
              "L Lay out",
              "Say your 3 areas before calculating",
              "Shows a plan and lets the interviewer steer",
              "Size, real behavior, right to win and economics"
            ],
            [
              "E Evaluate",
              "Size the market top-down, adjust for the say-do gap, then compute profit per card",
              "Survey interest overstates real demand",
              "1.8M reachable, 90K cards, $224 profit per card"
            ],
            [
              "A Assess",
              "Find payback, break-even and the biggest risks",
              "Shows you know what could break the plan",
              "19-month payback; spend, fee and early closure are the risks"
            ],
            [
              "R Recommend",
              "Give a testing plan with gates, not just a yes or no",
              "Real proof is cheaper than a failed launch",
              "Own-data check, waitlist, pilot, then scale"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Gen Z",
              "People born roughly 1997 to 2012; here, ages 18 to 28 who can hold a card"
            ],
            [
              "Premium travel card",
              "A card with an annual fee that earns extra rewards on travel and gives perks"
            ],
            [
              "Annual fee",
              "A yearly charge to hold the card; here $150"
            ],
            [
              "Interchange",
              "The fee a merchant pays on each card payment, shared with the card issuer"
            ],
            [
              "Say-do gap",
              "The difference between what people say in a survey and what they actually do"
            ],
            [
              "Sign-up bonus",
              "Points or cash given for opening the card and spending a set amount"
            ],
            [
              "Unit economics",
              "Profit for one card; multiply by cards to get the total"
            ],
            [
              "Card life",
              "How many years a customer keeps the card"
            ],
            [
              "Pilot",
              "A small, real test before a full launch"
            ],
            [
              "Waitlist test",
              "Asking people to sign up for a card that does not exist yet, to measure real interest"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Gen Z who can get a card: 45M x 50% = 22.5M."
            ],
            [
              "2",
              "Say-do gap: survey interest 20%, but only 40% of them act. 20% x 40% = 8%."
            ],
            [
              "3",
              "Interested and willing to pay: 22.5M x 8% = 1.8M people."
            ],
            [
              "4",
              "Our share in year 3: 1.8M x 5% = 90K cards."
            ],
            [
              "5",
              "Revenue per card: interchange $18K x 2.0% = $360, plus fee $150, plus net interest $120 = $630."
            ],
            [
              "6",
              "Cost per card: rewards $18K x 1.2% = $216, benefits $60, losses $90, servicing $40 = $406."
            ],
            [
              "7",
              "Profit per card: $630 - $406 = $224 a year."
            ],
            [
              "8",
              "Total: 90K x $224 = $20.2M; minus $6M fixed = $14.2M a year."
            ],
            [
              "9",
              "Up-front cost: $4M build + 90K x $200 = $18M, total $22M."
            ],
            [
              "10",
              "Payback: $22M / $14.2M = 1.55 years, about 19 months."
            ],
            [
              "11",
              "Break-even: $6M / $224 = about 27K cards, which is 30% of the target."
            ],
            [
              "12",
              "Spend only $10K: revenue $200 + $150 + $120 = $470; cost $120 + $60 + $90 + $40 = $310; profit $160. 90K x $160 = $14.4M, minus $6M = $8.4M."
            ],
            [
              "13",
              "Fee waived: $224 - $150 = $74 each. 90K x $74 = $6.7M, minus $6M = $0.7M, about zero."
            ],
            [
              "14",
              "Only 45K cards: 45K x $224 = $10.1M, minus $6M = $4.1M."
            ],
            [
              "15",
              "Card life: 3 years x $224 = $672 against $200 to win = 3.4x. If the customer closes after 1 year, $224 against $200 = 1.1x, which is too thin."
            ]
          ]
        }
      ],
      "table": {
        "title": "Market validation checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical risk",
          "Response"
        ],
        "rows": [
          [
            "How big is it?",
            "Population, income, credit scores",
            "Many Gen Z have thin credit files",
            "Narrow to those who qualify"
          ],
          [
            "Do they need it?",
            "Our own data on travel and card spend",
            "Lower travel spend than assumed",
            "Check real behavior before building"
          ],
          [
            "Will they pay the fee?",
            "Waitlist and fee test at 2 or 3 prices",
            "They prefer no-fee cards",
            "Test a lower fee or a first-year waiver"
          ],
          [
            "Can we win?",
            "Rival cards, our rewards, our brand with young people",
            "Strong rivals, no clear edge",
            "Pick a clear edge such as no foreign fees"
          ],
          [
            "Will they stay?",
            "Closure rate after the sign-up bonus",
            "Customers leave after the bonus",
            "Design rewards that build over time"
          ],
          [
            "Is it profitable?",
            "Spend, rewards cost, losses, servicing",
            "Rewards cost eats the profit",
            "Tune rewards and fee"
          ],
          [
            "Credit risk?",
            "Loss rate for young, new-to-credit customers",
            "Higher losses than expected",
            "Start with existing customers, small limits"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not just trust the survey?",
        "a": "Surveys overstate demand because saying yes is free. Here only about 40% of interested people act, so 20% interest becomes about 8%. Real behavior, such as waitlist sign-ups at a real fee, is stronger proof."
      },
      {
        "q": "What would you test first?",
        "a": "Our own data on young customers' travel spend, because it is fast, cheap and real. Then a waitlist with two or three fee levels."
      },
      {
        "q": "What if Gen Z will not pay a $150 fee?",
        "a": "Test a lower fee or a first-year waiver. With no fee at all the profit is about zero in this model, so the rewards and perks would need redesigning."
      },
      {
        "q": "How would you handle credit risk for young customers?",
        "a": "Start with existing customers whose accounts we can see, use small limits, and watch losses in the pilot before opening to new-to-credit customers."
      }
    ],
    "pitfalls": [
      "Trusting a survey. Stated interest overstates real demand; test behavior.",
      "Using the whole age group. Narrow to those who can get a card and would pay the fee.",
      "Stopping at market size. Show profit per card too.",
      "Forgetting what happens after sign-up. Many customers close the card once the bonus is paid.",
      "No test plan. End with a pilot, gates, and a decision."
    ]
  },
  {
    "id": "budget-feature",
    "title": "Budgeting Feature: Is It Working?",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "metric",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "A new mobile app feature for budgeting and spend tracking launched last quarter. Leadership wants to know if it is working. How do you define 'working' and what would you look at?",
    "clarify": [
      {
        "q": "What was the feature meant to achieve?",
        "a": "Help customers manage their money so they stay with the bank and use the app and card more."
      },
      {
        "q": "Who can see it?",
        "a": "All 4M active app customers, except a random 5% holdout group that cannot see it."
      },
      {
        "q": "Were targets set at launch?",
        "a": "Yes: 25% of customers try it, and 50% of those are still using it after 4 weeks."
      },
      {
        "q": "What data do we have?",
        "a": "App usage events, budgets set, attrition, spend, service calls, complaints and opt-outs, for offered and holdout groups."
      },
      {
        "q": "What are the unit values?",
        "a": "A retained account is worth about $400, net interchange is 2% of spend, a service call costs $10, and the feature costs $2M a year to run. Treat these as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Number",
          "Value",
          "What it means"
        ],
        "rows": [
          [
            "Active app customers",
            "4M",
            "Everyone who could see the feature"
          ],
          [
            "Tried the feature",
            "20% = 800K (target 25% = 1.0M)",
            "Reach: opened it at least once this quarter"
          ],
          [
            "Still using it after 4 weeks",
            "40% of those = 320K (target 50%)",
            "Repeat use: 'regular users', 8% of all customers"
          ],
          [
            "Regular users who set a budget",
            "60% (target 50%)",
            "Customer outcome: they actually did the helpful thing"
          ],
          [
            "Holdout group",
            "5% of customers cannot see it",
            "Lets us measure the true effect"
          ],
          [
            "Holdout result",
            "Attrition 12.0% to 11.7%; spend +$30 a year; service calls -2%",
            "Measured per customer offered the feature"
          ],
          [
            "Unit values",
            "Retained account $400; net interchange 2%; a call costs $10",
            "Assumed"
          ],
          [
            "Costs",
            "$2M a year to run; $4M to build",
            "Assumed"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: a budgeting feature launched last quarter, and leadership wants to know if it is working. First, what was it meant to achieve, and was any group held out from seeing it?"
        ],
        [
          "L: Lay out",
          "I would define working as a ladder. Do people try it, do they come back, does it help them, does it help the bank, and does it cause any harm. Then I would check the feature caused the change, using a holdout group."
        ],
        [
          "E: Evaluate",
          "Assuming 4M customers, 20% tried it against a 25% target, and 40% of those still use it after four weeks against a 50% target, so 320K regular users. 60% of them set a budget. The holdout shows attrition down 0.3 points, spend up $30 a year, and fewer calls, worth about $8.2M a year."
        ],
        [
          "A: Assess",
          "Value is $8.2M against a $2M running cost, so it is working, but below target on reach and repeat use. Comparing adopters with non-adopters would say $18.9M, nearly four times too high, because keen customers choose the feature. It is also only one quarter of data."
        ],
        [
          "R: Recommend",
          "I would keep it, fix repeat use with weekly summaries and budget alerts, which could add about $2M a year, and keep a 5% holdout. If value stays below the running cost after two more quarters, I would rethink it."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Question: a budgeting and spend-tracking feature launched<br/>last quarter. Is it working, and how do we know?\"]\nC --> C2[\"Define terms: working = people use it, it helps them,<br/>and it helps the bank, with no harm\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Goal: what was the feature meant to achieve?\"]\nL --> L2[\"2 Ladder of metrics: reach, repeat use,<br/>customer outcome, bank impact, guardrails\"]\nL --> L3[\"3 Proof: did the feature cause the change,<br/>or did keen customers just pick it?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Score each rung of the ladder against its target\"]\nE1 --> E2[\"Reach: 20% tried it (target 25%) = 800K of 4M<br/>Repeat: 40% still use it after 4 weeks (target 50%) = 320K\"]\nE2 --> E3[\"Outcome: 60% of regular users set a budget (target 50%)<br/>Guardrails: complaints flat, opt-outs 3%\"]\nE3 --> E4[\"Bank impact from a holdout test: retention $4.8M +<br/>spend $2.4M + fewer calls $1.0M = $8.2M a year\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Verdict: working, but below target on reach and repeat use<br/>$8.2M a year against a $2M running cost\"]\nA --> A2[\"Do not trust adopter vs non-adopter gaps:<br/>they suggest $18.9M, nearly 4x the true $4.8M\"]\nA --> A3[\"Early read: one quarter only,<br/>so confirm at six months\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Keep it, fix repeat use, re-measure\"]\nR --> R1[\"Fix repeat use: weekly summary, budget alerts, nudges<br/>Lifting repeat use to 50% adds about $2M a year\"]\nR --> R2[\"Keep a 5% holdout group so the effect<br/>can be measured every quarter\"]\nR --> R3[\"Decision rule: if value stays below the $2M running cost<br/>after two more quarters, rethink or retire it\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "scorecard",
          "title": "The scorecard: what 'working' means",
          "note": "Green meets the target, yellow is below target. The last step is proving cause.",
          "code": "flowchart TD\nG[\"Goal of the feature<br/>Help customers manage money, so they stay and use the app more\"] --> M1[\"1 Reach: do people try it?<br/>Tried it: 20% vs 25% target\"]\nM1 --> M2[\"2 Repeat use: do they come back?<br/>Active after 4 weeks: 40% vs 50% target\"]\nM2 --> M3[\"3 Customer outcome: does it help them?<br/>Regular users who set a budget: 60% vs 50% target\"]\nM3 --> M4[\"4 Bank impact: does it help the bank?<br/>$8.2M a year vs $2M running cost\"]\nM4 --> M5[\"5 Guardrails: does it cause harm?<br/>Complaints flat, opt-outs 3%\"]\n\nM1 --> Y1[\"Yellow: 80% of target\"]\nM2 --> Y2[\"Yellow: 80% of target\"]\nM3 --> GR1[\"Green\"]\nM4 --> GR2[\"Green, if the holdout test confirms it\"]\nM5 --> GR3[\"Green\"]\n\nY1 --> V[\"Verdict: working, with room to improve<br/>Weak spot is getting people to come back\"]\nY2 --> V\nGR1 --> V\nGR2 --> V\nGR3 --> V\nV --> P{\"3 Proof: is the effect caused by the feature?\"}\nP --> P1[\"Holdout test: 5% of customers cannot see it<br/>Compare offered vs not offered\"]\nP --> P2[\"Not adopters vs non-adopters:<br/>keen customers choose it, so the gap is inflated\"]\n\nclassDef goal fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef m fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef y fill:#FFF8E1,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef g fill:#C8E6C9,stroke:#2E7D32,stroke-width:2px,color:#000;\nclassDef v fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclass G goal;\nclass M1,M2,M3,M4,M5 m;\nclass Y1,Y2 y;\nclass GR1,GR2,GR3 g;\nclass V,P v;\nclass P1 g;\nclass P2 bad;"
        },
        {
          "id": "worth",
          "title": "What it is worth, and what would change the answer",
          "note": "Green is measured value, orange is a what-if, red is the misleading shortcut.",
          "code": "flowchart TD\nB[\"Holdout test result, per customer offered the feature (4M customers)<br/>Annual attrition 12.0% to 11.7%, spend +$30 a year, service calls -2%<br/>Assumed: retained account worth $400, net interchange 2%, call costs $10\"] --> V1[\"Retention: 0.3 points x 4M = 12,000 accounts kept<br/>12,000 x $400 = $4.8M\"]\nB --> V2[\"Spend: $30 x 4M = $120M more spend<br/>x 2% = $2.4M\"]\nB --> V3[\"Calls: 4M x 1.2 calls = 4.8M, 2% fewer = 96K calls<br/>96K x $10 = $1.0M\"]\n\nV1 --> T[\"Total value = $8.2M a year<br/>Running cost $2M, so net +$6.2M<br/>Build cost $4M pays back in about 8 months\"]\nV2 --> T\nV3 --> T\n\nT --> W1[\"Per regular user: $8.2M / 320K = about $25 a year\"]\nT --> W2[\"Lift repeat use from 40% to 50%<br/>320K to 400K users (+25%) adds about $2.0M a year\"]\nT --> W3[\"If the true effect is half of what we measured<br/>$4.1M - $2M = still +$2.1M\"]\nT --> W4[\"Break-even: only 25% of the measured effect<br/>is needed to cover the $2M running cost\"]\n\nB --> N[\"Naive method: adopters 7% attrition vs others 12.9%<br/>800K x 5.9 points x $400 = $18.9M<br/>Nearly 4x the true $4.8M\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass V1,V2,V3 good;\nclass T out;\nclass W1,W2,W3,W4 mid;\nclass N bad;"
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
              "Ask what the feature was meant to achieve, and who sees it",
              "You cannot judge success without a goal",
              "Goal: help customers manage money so they stay and use the app more"
            ],
            [
              "L Lay out",
              "Say your ladder of metrics, then how you will prove cause",
              "Shows structure and lets the interviewer steer",
              "Reach, repeat use, outcome, bank impact, guardrails, then holdout"
            ],
            [
              "E Evaluate",
              "Score each rung against its target",
              "A single number hides the weak spot",
              "Reach and repeat use at 80% of target; outcome and guardrails fine"
            ],
            [
              "A Assess",
              "Turn effects into dollars and check cause",
              "Leadership wants value, not just usage",
              "$8.2M a year vs $2M running cost; naive method overstates 4x"
            ],
            [
              "R Recommend",
              "Give a decision, a fix and a re-check date",
              "Interviewers want a decision",
              "Keep it, fix repeat use, re-measure with the holdout"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Adoption (reach)",
              "The share of customers who try the feature"
            ],
            [
              "Repeat use",
              "The share of those who come back, for example after 4 weeks"
            ],
            [
              "Regular user",
              "Someone who keeps using the feature"
            ],
            [
              "Customer outcome",
              "The helpful thing the feature is meant to cause, such as setting a budget"
            ],
            [
              "Guardrail metric",
              "A number that must not get worse, such as complaints or opt-outs"
            ],
            [
              "Holdout group",
              "A random small group that is not shown the feature, used as a fair comparison"
            ],
            [
              "Selection bias",
              "Keen customers choose the feature, so comparing them with others exaggerates its effect"
            ],
            [
              "Attrition",
              "The share of customers who leave in a year"
            ],
            [
              "Value of a retained account",
              "Profit the bank expects from a customer who stays; here $400"
            ],
            [
              "Net interchange",
              "What the bank keeps from the fee on each card payment; here 2% of spend"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Reach: 4M x 20% = 800K tried it. Target was 1.0M, so we are at 80% of target."
            ],
            [
              "2",
              "Repeat use: 800K x 40% = 320K regular users, which is 8% of customers. Target 50% would give 400K, so we are at 80% of target."
            ],
            [
              "3",
              "Customer outcome: 320K x 60% = 192K regular users set a budget."
            ],
            [
              "4",
              "Retention: attrition fell 0.3 points. 4M x 0.3% = 12,000 accounts kept. 12,000 x $400 = $4.8M."
            ],
            [
              "5",
              "Spend: +$30 per customer x 4M = $120M more spend. $120M x 2% = $2.4M."
            ],
            [
              "6",
              "Service calls: 4M x 1.2 calls = 4.8M calls. 2% fewer = 96K calls. 96K x $10 = about $1.0M."
            ],
            [
              "7",
              "Total value: $4.8M + $2.4M + $1.0M = about $8.2M a year."
            ],
            [
              "8",
              "Net of running cost: $8.2M - $2M = $6.2M a year. Build cost $4M / $6.2M = 0.65 years, about 8 months to pay back."
            ],
            [
              "9",
              "Per regular user: $8.2M / 320K = about $25 a year."
            ],
            [
              "10",
              "Naive method: adopters 7% attrition vs others 12.9%, a gap of 5.9 points. 800K x 5.9% = 47,200 accounts x $400 = $18.9M. That is nearly 4x the true $4.8M."
            ],
            [
              "11",
              "Fix repeat use to 50%: 400K / 320K = +25%. 25% x $8.2M = about $2.0M more a year."
            ],
            [
              "12",
              "Break-even: $2M / $8.2M = 25% of the measured effect covers the running cost."
            ],
            [
              "13",
              "If the true effect is half: $8.2M / 2 = $4.1M, minus $2M = +$2.1M, still positive."
            ]
          ]
        }
      ],
      "table": {
        "title": "Feature assessment checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical problem",
          "Response"
        ],
        "rows": [
          [
            "What was the goal?",
            "Launch plan, targets",
            "No clear target",
            "Agree one or two target metrics first"
          ],
          [
            "Do people try it?",
            "Share of customers who open it",
            "Feature is hard to find",
            "Better placement, in-app prompts"
          ],
          [
            "Do they come back?",
            "Active after 1, 4 and 12 weeks",
            "One-time curiosity",
            "Alerts, weekly summaries, habit loops"
          ],
          [
            "Does it help them?",
            "Budgets set, goals met, overspending down",
            "Use without benefit",
            "Simplify, add useful nudges"
          ],
          [
            "Does it help the bank?",
            "Holdout: retention, spend, calls",
            "Gains are small or missing",
            "Compare value with running cost"
          ],
          [
            "Does it cause harm?",
            "Complaints, opt-outs, support contacts",
            "Annoying alerts",
            "Let customers control alerts"
          ],
          [
            "Is the evidence fair?",
            "Holdout or A/B vs adopters vs non-adopters",
            "Selection bias",
            "Always use a random comparison group"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not just compare adopters with non-adopters?",
        "a": "Keen customers choose the feature, so the gap is inflated. Here it would suggest $18.9M, nearly four times the true $4.8M from the holdout."
      },
      {
        "q": "What if repeat use never improves?",
        "a": "Then the value stays near $8M on these assumptions, still above the $2M running cost, but I would set a date to re-check and rethink if value falls below running cost."
      },
      {
        "q": "Which metric matters most?",
        "a": "The bank impact measured with a holdout, because it ties the feature to money. The usage metrics explain why the impact is large or small."
      },
      {
        "q": "One quarter is short. What would you do?",
        "a": "Treat it as an early read, keep the holdout, and confirm at six months, using early signs such as repeat use to predict retention."
      }
    ],
    "pitfalls": [
      "Jumping to metrics. Define what working means and the goal first.",
      "Looking only at downloads or sign-ups. Usage that fades is not success.",
      "Comparing adopters with non-adopters. Keen users choose the feature; use a holdout.",
      "Ignoring guardrails. A feature that raises complaints can cost more than it earns.",
      "No decision. End with keep, fix or stop, and a date to re-measure."
    ]
  },
  {
    "id": "fraud-alert",
    "title": "Fraud Alert Feature: Keep, Fix or Kill?",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "metric",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "We rolled out a new fraud alert feature and customer complaints went up, not down. How would you assess whether to keep, fix, or kill it?",
    "clarify": [
      {
        "q": "What does the feature do?",
        "a": "It sends a real-time message such as 'Was this you?' for suspicious card payments, and the customer can confirm or deny."
      },
      {
        "q": "Was there a comparison group?",
        "a": "Yes, a random 10% of cardholders did not get alerts. Their complaint rate is 0.40%; with alerts it is 0.52%."
      },
      {
        "q": "What are the complaints about?",
        "a": "Fraud-related complaints fell, but complaints about wrongly blocked purchases and about too many alerts rose."
      },
      {
        "q": "What are the costs and values?",
        "a": "A complaint costs about $15 to handle plus extra churn. A retained account is worth about $400. The feature costs $2M a year to run."
      },
      {
        "q": "Is there any regulatory or customer-harm concern?",
        "a": "Complaint volume is watched closely by leadership and regulators, and some older customers find the alerts confusing."
      }
    ],
    "tables": [
      {
        "title": "Complaints per quarter, before and after",
        "headers": [
          "Complaints per quarter",
          "Before",
          "After",
          "Change"
        ],
        "rows": [
          [
            "About fraud losses (unauthorized charges)",
            "8,000",
            "5,000",
            "-3,000 (good)"
          ],
          [
            "About wrongly blocked purchases",
            "4,000",
            "7,000",
            "+3,000 (bad)"
          ],
          [
            "About too many or confusing alerts",
            "0",
            "6,000",
            "+6,000 (bad, new)"
          ],
          [
            "Everything else",
            "8,000",
            "8,000",
            "0"
          ],
          [
            "Total",
            "20,000 (0.40% of 5M cardholders)",
            "26,000 (0.52%)",
            "+6,000 (+30%)"
          ]
        ]
      },
      {
        "title": "Other numbers we will use (assumptions)",
        "headers": [
          "Other number",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Cardholders",
            "5M",
            "Assumed"
          ],
          [
            "Holdout group",
            "10% get no alerts",
            "Complaint rate 0.40% without alerts vs 0.52% with alerts, so the feature caused the rise"
          ],
          [
            "Fraud losses",
            "$40M a year to $34M",
            "A $6M saving, measured against the holdout"
          ],
          [
            "Cost of one complaint",
            "$43",
            "$15 to handle + 7 points extra churn x $400 account value = $28"
          ],
          [
            "Cost to run the feature",
            "$2M a year",
            "Assumed"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: we launched a fraud alert feature and complaints went up. I need to decide keep, fix or kill. First, was there a holdout group, and what are the complaints about?"
        ],
        [
          "L: Lay out",
          "I would answer three questions. Did the feature cause the rise? Which complaints rose and which fell? And what is the feature worth against what the complaints cost? Then I would choose keep, fix or kill."
        ],
        [
          "E: Evaluate",
          "Assuming 5M cardholders, complaints went from 20K to 26K a quarter. Fraud complaints fell 3K, but blocked purchases rose 3K and alert complaints rose 6K. Fraud losses fell from $40M to $34M, a $6M saving. A complaint costs about $43, so 24K extra a year is about $1.0M."
        ],
        [
          "A: Assess",
          "Net of a $2M running cost, the feature is worth about $3.0M a year. Killing it would lose that. The problems, too many alerts and wrongly blocked purchases, can be fixed. It would become a kill if the fraud saving fell to about $3M or complaint costs rose about four times."
        ],
        [
          "R: Recommend",
          "I would keep it and fix it: send alerts only for risky transactions, add a one-tap 'This was me', and re-check in 90 days against a holdout. I expect net value to rise to about $4.0M a year."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Problem: a new fraud alert feature launched,<br/>but customer complaints went up, not down\"]\nC --> C2[\"Decision: keep, fix or kill it?<br/>Define terms: complaint, fraud loss, false alarm\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Cause: did the feature cause the rise,<br/>or something else?\"]\nL --> L2[\"2 Mix: which complaints rose, which fell?\"]\nL --> L3[\"3 Value: what does the feature save, and what do<br/>the complaints cost? Then keep, fix or kill\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Split complaints by type and price the trade-off\"]\nE1 --> E2[\"Complaints: 20K to 26K a quarter (+30%)<br/>Fraud complaints -3K, blocked purchases +3K, alert complaints +6K\"]\nE2 --> E3[\"Fraud losses: $40M to $34M a year = $6M saved<br/>Each extra complaint costs about $43, so +24K a year = $1.0M\"]\nE3 --> E4[\"Net: $6M saved - $2M running cost - $1.0M complaints<br/>= +$3.0M a year\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"The feature pays for itself: killing it would lose about $3.0M a year\"]\nA --> A2[\"The pain is fixable: too many alerts and wrongly blocked purchases\"]\nA --> A3[\"It becomes a kill only if the saving drops below about $3M<br/>or the complaint cost rises about 4x\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Keep it and fix it\"]\nR --> R1[\"Send alerts only for risky transactions, to halve alert complaints\"]\nR --> R2[\"Fix wrongly blocked purchases with a one-tap 'This was me'\"]\nR --> R3[\"Re-check in 90 days with a holdout. Net should reach about +$4.0M\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "decide",
          "title": "How we decide: keep, fix or kill",
          "note": "Green is a good change, red is a bad change, orange is the evidence or the money.",
          "code": "flowchart TD\nQ[\"Complaints went up after the fraud alert launch. Keep, fix or kill?\"] --> S1{\"1 Did the feature cause it?\"}\nS1 --> S1a[\"Compare with a holdout group (10% get no alerts)<br/>Complaint rate: 0.40% without vs 0.52% with alerts<br/>Yes, the feature caused the rise\"]\nS1a --> S2{\"2 What are the complaints about?\"}\nS2 --> G[\"Good: fraud complaints 8K to 5K<br/>-3K a quarter\"]\nS2 --> B1[\"Bad: blocked legitimate purchases 4K to 7K<br/>+3K a quarter\"]\nS2 --> B2[\"Bad: too many alerts, new<br/>+6K a quarter\"]\nG --> S3{\"3 What is it worth?\"}\nB1 --> S3\nB2 --> S3\nS3 --> W[\"Saves $6M fraud losses a year<br/>Costs $2M to run and $1.0M in complaints<br/>Net +$3.0M\"]\nW --> S4{\"4 Keep, fix or kill?\"}\nS4 -->|\"Net positive, complaints fixable\"| K[\"FIX: keep and cut the pain\"]\nS4 -->|\"Net positive, nothing to fix\"| K2[\"KEEP: monitor\"]\nS4 -->|\"Net negative, or harms customers\"| X[\"KILL: switch off, replace with a better design\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass Q,S1,S2,S3,S4 q;\nclass S1a,W mid;\nclass G,K2 good;\nclass B1,B2,X bad;\nclass K out;"
        },
        {
          "id": "money",
          "title": "The money: keep, kill and fix compared",
          "note": "Green is the benefit, red is a cost or a loss, orange is a comparison.",
          "code": "flowchart TD\nB[\"Assumed: 5M cardholders, a complaint costs $15 to handle plus churn<br/>7 points extra x $400 account value = $28, so $43 in total<br/>Running cost $2M a year\"] --> V[\"Value: fraud losses fall from $40M to $34M = +$6M a year\"]\nB --> CC[\"Complaint cost: +6K a quarter x 4 = 24K a year<br/>24K x $43 = -$1.0M\"]\nB --> RC[\"Running cost: -$2M a year\"]\n\nV --> N[\"Keep as is<br/>$6M - $2M - $1.0M = +$3.0M a year\"]\nCC --> N\nRC --> N\n\nN --> K[\"Kill it<br/>Lose $6M saving, save $2M and $1.0M<br/>= -$3.0M a year\"]\nN --> F[\"Fix it: alert complaints 6K to 3K, blocked purchases 7K to 4K<br/>Complaints back to 20K a quarter, cost $1.0M to $0<br/>$6M - $2M = +$4.0M a year\"]\n\nN --> BE1[\"Break-even on complaints<br/>$4.0M / $43 = about 93K extra complaints a year<br/>3.9x today's 24K\"]\nN --> BE2[\"If the fraud saving halves to $3M<br/>$3M - $2M - $1.0M = $0, so fixing is a must<br/>After the fix: +$1.0M\"]\n\nF --> R[\"Recommend: fix, do not kill<br/>Re-check in 90 days against a holdout\"]\nK --> R\nBE1 --> R\nBE2 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B base;\nclass V,F good;\nclass CC,RC,K bad;\nclass N,BE1,BE2 mid;\nclass R out;"
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
              "Define complaint, fraud loss and the decision",
              "Different complaint types mean different things",
              "Complaints up 30%; decision is keep, fix or kill"
            ],
            [
              "L Lay out",
              "Say your 3 questions before calculating",
              "Shows a plan and lets the interviewer steer",
              "Cause? Mix? Value, then decide"
            ],
            [
              "E Evaluate",
              "Split complaints by type and price each side",
              "The total hides good and bad changes",
              "Fraud complaints down 3K; blocked purchases and alerts up 9K"
            ],
            [
              "A Assess",
              "Net the benefit against costs and test the decision",
              "Shows when keep turns into kill",
              "+$3.0M a year; kill loses $3.0M; fix reaches +$4.0M"
            ],
            [
              "R Recommend",
              "Give a decision, the fixes and a re-check date",
              "Interviewers want a decision",
              "Keep and fix; re-check in 90 days"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Fraud alert",
              "A message to the customer about a suspicious payment, asking them to confirm or deny it"
            ],
            [
              "False positive",
              "A real purchase wrongly flagged as fraud"
            ],
            [
              "Alert fatigue",
              "Customers get so many alerts that they ignore or resent them"
            ],
            [
              "Holdout group",
              "A random group that does not get the feature, used as a fair comparison"
            ],
            [
              "Complaint mix",
              "The breakdown of complaints by topic"
            ],
            [
              "Fraud loss",
              "Money the bank loses to fraud"
            ],
            [
              "Churn",
              "Customers leaving the bank"
            ],
            [
              "Guardrail",
              "A number that must not get worse, such as complaints"
            ],
            [
              "Break-even",
              "The point where the feature's value equals its cost"
            ],
            [
              "Keep, fix or kill",
              "The three decisions: leave it, improve it, or switch it off"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Complaint rate: before 20K / 5M = 0.40%. After 26K / 5M = 0.52%. That is +6K a quarter, +30%."
            ],
            [
              "2",
              "Mix: fraud complaints -3K, blocked purchases +3K, alert complaints +6K, other 0. Net +6K."
            ],
            [
              "3",
              "Fraud losses: $40M to $34M = $6M a year saved, 15%."
            ],
            [
              "4",
              "Cost of a complaint: $15 handling + (7% extra churn x $400) = $15 + $28 = $43."
            ],
            [
              "5",
              "Extra complaints a year: +6K a quarter x 4 = 24K. 24K x $43 = about $1.0M a year."
            ],
            [
              "6",
              "Running cost: $2M a year."
            ],
            [
              "7",
              "Keep as is: $6M - $2M - $1.0M = +$3.0M a year."
            ],
            [
              "8",
              "Kill it: lose the $6M saving, save the $2M running cost and the $1.0M complaint cost. Net = -$3.0M a year."
            ],
            [
              "9",
              "Fix it: alert complaints 6K to 3K, blocked purchases 7K to 4K. Complaints return to 26K - 3K - 3K = 20K. Complaint cost goes to $0, so net = $6M - $2M = +$4.0M a year."
            ],
            [
              "10",
              "Break-even on complaints: $4.0M / $43 = about 93K extra complaints a year, which is 3.9x today's 24K."
            ],
            [
              "11",
              "If the fraud saving halves to $3M: $3M - $2M - $1.0M = $0, so fixing is a must. After the fix: $3M - $2M = +$1.0M."
            ]
          ]
        }
      ],
      "table": {
        "title": "Keep, fix or kill checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical cause",
          "Response"
        ],
        "rows": [
          [
            "Did the feature cause it?",
            "Holdout complaint rate, timing",
            "Seasonality or another change",
            "Use a random comparison group"
          ],
          [
            "What are the complaints about?",
            "Complaint mix before and after",
            "Alerts too frequent or confusing",
            "Cut alerts, simplify the message"
          ],
          [
            "Are real purchases blocked?",
            "False positive rate, declined purchase complaints",
            "Rules too strict",
            "Tune rules, add 'This was me'"
          ],
          [
            "What does it save?",
            "Fraud losses vs holdout, time to catch fraud",
            "Savings are small or unproven",
            "Measure it before deciding"
          ],
          [
            "What do complaints cost?",
            "Handling cost and extra churn",
            "Complainers leave more often",
            "Price it per complaint"
          ],
          [
            "Are any customers harmed?",
            "Vulnerable customers, accessibility, regulators",
            "Alerts confuse some groups",
            "Fix first, or pause for that group"
          ],
          [
            "Can it be fixed quickly?",
            "Effort and time to improve",
            "Needs big redesign",
            "If not fixable and net negative, kill it"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not kill it, since complaints went up?",
        "a": "Because it saves about $6M a year in fraud losses against about $1.0M of extra complaint cost and a $2M running cost. Killing it would lose about $3.0M a year."
      },
      {
        "q": "What would make you kill it?",
        "a": "A net value below zero that cannot be fixed, for example the fraud saving halving and complaints not improving, or clear harm to a group of customers."
      },
      {
        "q": "How would you cut the alert complaints?",
        "a": "Alert only on risky transactions, group alerts, let customers choose the channel, and add a one-tap 'This was me' so real purchases are not blocked."
      },
      {
        "q": "How do you know the feature caused the complaints?",
        "a": "The 10% holdout: complaint rate 0.40% without alerts versus 0.52% with. Before and after alone could be seasonality."
      }
    ],
    "pitfalls": [
      "Killing the feature because complaints rose. Look at what it saves first.",
      "Using one total. Split complaints by type to see good and bad changes.",
      "Skipping the holdout. Without one you cannot tell cause from coincidence.",
      "Ignoring cost per complaint. Price complaints in dollars so they can be compared with the saving.",
      "No decision rule. Say when you would switch from keep to fix to kill."
    ]
  },
  {
    "id": "auto-refi-gap",
    "title": "Auto-Refinance: Signups on Target, Revenue Below Plan",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "profitability",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "Our new auto-refinance product hit its signup target but revenue is below plan. Walk me through how you would investigate the gap.",
    "clarify": [
      {
        "q": "What counts as a signup?",
        "a": "A customer who applied for a rate quote. It is not yet a funded loan."
      },
      {
        "q": "How is revenue measured?",
        "a": "First-year net interest margin on funded loans plus origination fees."
      },
      {
        "q": "How was the plan built?",
        "a": "10,000 signups, 50% funded, a $28K average loan, a 3.0% margin and a $300 fee."
      },
      {
        "q": "Could this be timing?",
        "a": "Loans are funding about 12 days after signup, as planned, so timing does not explain it."
      },
      {
        "q": "What changed in sales and pricing?",
        "a": "Promotional rates and fee waivers were used to win signups. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "Plan vs actual (assumptions)",
        "headers": [
          "Piece of revenue",
          "Plan",
          "Actual",
          "What it means"
        ],
        "rows": [
          [
            "Signups",
            "10,000",
            "10,000",
            "Customers who applied for a rate quote (target met)"
          ],
          [
            "Share funded",
            "50% = 5,000 loans",
            "40% = 4,000 loans",
            "Signups that became a funded loan"
          ],
          [
            "Average loan",
            "$28K",
            "$22K",
            "Balance refinanced"
          ],
          [
            "Margin (net interest earned per year)",
            "3.0%",
            "2.5%",
            "Interest rate minus the bank's cost of funds"
          ],
          [
            "Fee collected per loan",
            "$300",
            "$150",
            "Origination fee; half were waived"
          ],
          [
            "First-year revenue per loan",
            "$1,140",
            "$700",
            "Loan x margin + fee: $28K x 3.0% + $300 vs $22K x 2.5% + $150"
          ],
          [
            "Total first-year revenue",
            "$5.7M",
            "$2.8M",
            "Gap $2.9M, 51% below plan"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: the auto-refinance product hit its signup target but revenue is below plan. I will treat revenue as first-year interest margin plus fees. How was the plan built, and could timing or counting explain it?"
        ],
        [
          "L: Lay out",
          "I would check three things. First, whether it is timing or measurement. Second, which part of revenue is short: signups, share funded, loan size, margin or fees. Third, why, and what to do about it."
        ],
        [
          "E: Evaluate",
          "Assuming plan was 10,000 signups, 50% funded at $28K, a 3.0% margin and a $300 fee, that is 5,000 loans at $1,140, or $5.7M. Actual is 40% funded, $22K, 2.5% and a $150 fee, so 4,000 loans at $700, or $2.8M. The gap is $2.9M."
        ],
        [
          "A: Assess",
          "The gap splits into $1.14M from fewer loans funded, $0.72M from smaller loans, $0.44M from lower margin and $0.60M from fee waivers. So signups was the wrong target: it measured interest, not funded loans. Conversion is the biggest piece at about 39%."
        ],
        [
          "R: Recommend",
          "I would fix the funnel after signup first, such as documents, verification and speed. Then set rules for fee waivers and promo rates, and aim marketing at larger balances. I would change the goal to funded loans and revenue per signup. A price rise is worth it only if it loses fewer than about 14% of loans."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Problem: the auto-refinance product hit its signup target<br/>(10,000) but revenue is below plan\"]\nC --> C2[\"Define terms: signup = applied for a rate quote<br/>Revenue = funded loans x size x margin + fees\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Is it timing or measurement?<br/>Late funding or a counting difference\"]\nL --> L2[\"2 Which part of revenue is short?<br/>Volume, loan size, price or fees\"]\nL --> L3[\"3 Why, and what to do?<br/>Fix the biggest gap, change the target\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Break revenue into its parts and compare with plan\"]\nE1 --> E2[\"Plan: 10,000 signups x 50% funded = 5,000 loans<br/>$1,140 each = $5.7M\"]\nE2 --> E3[\"Actual: 10,000 x 40% funded = 4,000 loans<br/>$22K balance, 2.5% margin, $150 fee = $700 each = $2.8M\"]\nE3 --> E4[\"Gap $2.9M: fewer loans funded -$1.14M, smaller loans -$0.72M,<br/>lower margin -$0.44M, fee waivers -$0.60M\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Signups was the wrong target:<br/>it measured interest, not funded loans or revenue\"]\nA --> A2[\"Biggest gap is conversion (39% of the gap),<br/>then fee waivers and smaller loans\"]\nA --> A3[\"Price changes only help if they lose fewer than<br/>about 14% of funded loans\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Fix conversion first, then pricing discipline\"]\nR --> R1[\"Fix the funnel after signup: documents, verification, speed\"]\nR --> R2[\"Set rules for fee waivers and promo rates;<br/>target larger balances\"]\nR --> R3[\"Change the goal to funded loans and revenue per signup\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "formula",
          "title": "How we found it: the revenue formula",
          "note": "Rule out timing first, then check each piece of the formula. Red boxes are below plan.",
          "code": "flowchart TD\nQ[\"Signups on target, revenue below plan. Why?\"] --> T{\"1 Timing or measurement?\"}\nT --> T1[\"Loans funded on time, revenue counted the same way<br/>Ruled out\"]\nT1 --> R0[\"Revenue = signups x funded rate x loan size x margin, plus fees\"]\nR0 --> F1[\"Signups<br/>10,000 vs 10,000<br/>On plan\"]\nR0 --> F2[\"Funded rate<br/>40% vs 50%<br/>Gap -$1.14M\"]\nR0 --> F3[\"Loan size<br/>$22K vs $28K<br/>Gap -$0.72M\"]\nR0 --> F4[\"Margin<br/>2.5% vs 3.0%<br/>Gap -$0.44M\"]\nR0 --> F5[\"Fee collected<br/>$150 vs $300<br/>Gap -$0.60M\"]\n\nF2 --> W2[\"Why: slow documents and verification, more declines,<br/>rate shoppers who never intended to switch\"]\nF3 --> W3[\"Why: promotions attracted people with small balances\"]\nF4 --> W4[\"Why: promo rates used to win signups\"]\nF5 --> W5[\"Why: fees waived to close the deal\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef ok fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef why fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclass Q,T,T1,R0 q;\nclass F1 ok;\nclass F2,F3,F4,F5 bad;\nclass W2,W3,W4,W5 why;"
        },
        {
          "id": "gap",
          "title": "What it is worth, and what would change the answer",
          "note": "Each step changes one piece from plan to actual, so the steps add up to the gap.",
          "code": "flowchart TD\nP[\"Plan revenue<br/>5,000 loans x ($28K x 3.0% + $300) = 5,000 x $1,140 = $5.7M\"] --> S1[\"Step 1: funded rate 50% to 40%<br/>4,000 x $1,140 = $4.56M<br/>Gap -$1.14M\"]\nS1 --> S2[\"Step 2: loan size $28K to $22K<br/>4,000 x ($22K x 3.0% + $300) = 4,000 x $960 = $3.84M<br/>Gap -$0.72M\"]\nS2 --> S3[\"Step 3: margin 3.0% to 2.5%<br/>4,000 x ($22K x 2.5% + $300) = 4,000 x $850 = $3.40M<br/>Gap -$0.44M\"]\nS3 --> S4[\"Step 4: fee $300 to $150<br/>4,000 x ($550 + $150) = 4,000 x $700 = $2.80M<br/>Gap -$0.60M\"]\nS4 --> A[\"Actual revenue $2.8M<br/>Total gap $2.9M, 51% below plan\"]\n\nA --> X1[\"Fix conversion to 50%<br/>5,000 x $700 = $3.5M, +$0.7M\"]\nA --> X2[\"Price back to 3.0% margin<br/>$810 per loan. Worth it if fewer than 14% of loans are lost<br/>($2.8M / $810 = 3,457 loans, 86% of 4,000)\"]\nA --> X3[\"Fees back to $300<br/>4,000 x $850 = $3.4M, +$0.6M\"]\n\nX1 --> R[\"Fix conversion first, then set fee and price rules<br/>Fixes overlap, so total is less than the sum\"]\nX2 --> R\nX3 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass P base;\nclass S1,S2,S3,S4,A bad;\nclass X1,X2,X3 good;\nclass R out;"
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
              "Define signup and revenue, and ask how plan was built",
              "'Signup' and 'revenue' can mean different things",
              "Signup = rate quote request; revenue = first-year interest margin plus fees"
            ],
            [
              "L Lay out",
              "Say your 3 questions before calculating",
              "Shows a plan and lets the interviewer steer",
              "Timing or counting? Which part is short? Why, and what to do?"
            ],
            [
              "E Evaluate",
              "Break revenue into pieces and compare each with plan",
              "The total hides which piece is short",
              "Signups on plan; funded rate, loan size, margin and fees all below"
            ],
            [
              "A Assess",
              "Convert each gap to dollars and rank",
              "Tells you where to act first",
              "Funded rate -$1.14M, fees -$0.60M, loan size -$0.72M, margin -$0.44M"
            ],
            [
              "R Recommend",
              "Fix the biggest gap first and change the goal",
              "Interviewers want a decision",
              "Fix conversion; set fee and price rules; target funded loans"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Refinance",
              "Replace an existing loan with a new one, usually at a lower rate"
            ],
            [
              "Signup",
              "A customer who applied for a quote; not yet a loan"
            ],
            [
              "Funded loan",
              "A loan that closed and paid out"
            ],
            [
              "Conversion rate",
              "The share who move to the next step; here signup to funded"
            ],
            [
              "Margin (net interest margin)",
              "Interest earned minus the bank's cost of funds, as a share of the balance"
            ],
            [
              "Origination fee",
              "A one-time fee charged when the loan is made"
            ],
            [
              "Fee waiver",
              "Dropping the fee to win the customer"
            ],
            [
              "Promo rate",
              "A discounted rate used to attract customers"
            ],
            [
              "Gap analysis",
              "Splitting the difference between plan and actual into its causes"
            ],
            [
              "Rate shopper",
              "Someone who requests quotes to compare, with no plan to switch"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Plan: 10,000 x 50% = 5,000 loans. Revenue per loan = $28K x 3.0% + $300 = $840 + $300 = $1,140. Total = 5,000 x $1,140 = $5.7M."
            ],
            [
              "2",
              "Actual: 10,000 x 40% = 4,000 loans. Revenue per loan = $22K x 2.5% + $150 = $550 + $150 = $700. Total = 4,000 x $700 = $2.8M."
            ],
            [
              "3",
              "Gap: $5.7M - $2.8M = $2.9M, which is 51% below plan."
            ],
            [
              "4",
              "Step 1, funded rate 50% to 40%: 4,000 x $1,140 = $4.56M. Gap = $1.14M."
            ],
            [
              "5",
              "Step 2, loan size $28K to $22K: $22K x 3.0% + $300 = $960. 4,000 x $960 = $3.84M. Gap = $0.72M."
            ],
            [
              "6",
              "Step 3, margin 3.0% to 2.5%: $22K x 2.5% + $300 = $850. 4,000 x $850 = $3.40M. Gap = $0.44M."
            ],
            [
              "7",
              "Step 4, fee $300 to $150: $550 + $150 = $700. 4,000 x $700 = $2.80M. Gap = $0.60M."
            ],
            [
              "8",
              "Check: $1.14M + $0.72M + $0.44M + $0.60M = $2.90M. Conversion is $1.14M / $2.9M = 39% of the gap."
            ],
            [
              "9",
              "Fix conversion to 50% alone: 5,000 x $700 = $3.5M, which is +$0.7M."
            ],
            [
              "10",
              "Fees back to $300 alone: 4,000 x ($550 + $300) = $3.4M, which is +$0.6M."
            ],
            [
              "11",
              "Price back to 3.0% alone: $22K x 3.0% + $150 = $810 per loan. Break-even loans = $2.8M / $810 = 3,457, which is 86% of 4,000. So a price rise helps only if it loses fewer than about 14% of funded loans."
            ],
            [
              "12",
              "The fixes overlap (for example, more loans multiplies the fee gain), so the total gain is not the sum of the parts."
            ]
          ]
        }
      ],
      "table": {
        "title": "Revenue gap checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical cause",
          "Response"
        ],
        "rows": [
          [
            "Is it timing?",
            "Days from signup to funding, loans funded late in the period",
            "Revenue starts when the loan funds",
            "Compare revenue per month of life, not per period"
          ],
          [
            "Is it measured the same way?",
            "Plan definition vs actual definition",
            "Different treatment of fees or promo periods",
            "Align definitions with finance"
          ],
          [
            "Do signups become loans?",
            "Funnel from signup to funded",
            "Slow documents, declines, rate shoppers",
            "Fix the funnel, qualify earlier"
          ],
          [
            "Are loans the right size?",
            "Average balance, by channel",
            "Promotions attract small balances",
            "Target higher-balance customers"
          ],
          [
            "Is price right?",
            "Margin, promo rates, competitor rates",
            "Discounts to win signups",
            "Set price floors, test small changes"
          ],
          [
            "Are fees being waived?",
            "Share of fees waived, who approved",
            "Waivers used to close deals",
            "Rules and approval limits for waivers"
          ],
          [
            "Will loans last?",
            "Early payoff and prepayment rates",
            "Customers refinance again quickly",
            "Look at lifetime value, not just year one"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Which gap would you fix first?",
        "a": "Conversion from signup to funded loan, the biggest piece at about $1.14M, or 39% of the gap. It is also the least likely to hurt pricing."
      },
      {
        "q": "Would you raise the price back to plan?",
        "a": "Only after testing. At a 3.0% margin each loan earns $810, so the change is worth it if it loses fewer than about 14% of funded loans."
      },
      {
        "q": "Why was the signup target a poor goal?",
        "a": "It rewarded interest, not funded loans, so the team used discounts and fee waivers to win signups. A better goal is funded loans or revenue per signup."
      },
      {
        "q": "What if revenue per loan is fine but early payoff is high?",
        "a": "Then first-year revenue overstates value. Look at lifetime value and prepayment, and consider a prepayment fee or a stronger relationship offer."
      }
    ],
    "pitfalls": [
      "Celebrating signups. Signups are not revenue; follow the funnel to funded loans.",
      "Looking at one total. Break revenue into pieces to find which is short.",
      "Skipping timing. Rule out late funding or counting differences first.",
      "Fixing price first. A price rise can lose more loans than it earns; test the break-even.",
      "Not changing the target. A goal on signups encourages the wrong behavior."
    ]
  },
  {
    "id": "two-product-priority",
    "title": "Trade-Off: Small Business Card or High-Yield Savings?",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "growth",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "We can only invest in one of two new products this year, a small business credit card or a high-yield savings account. How would you decide which to prioritize?",
    "clarify": [
      {
        "q": "What is the goal?",
        "a": "Maximize profit over three years, while keeping risk acceptable and fitting the bank's strategy."
      },
      {
        "q": "What does each product need?",
        "a": "About $15M for the card and $10M for savings. Only one can be funded this year."
      },
      {
        "q": "What do we know about demand and risk?",
        "a": "The card is new for us and has a 50% chance of reaching plan. Savings is simpler, with an 80% chance of reaching plan."
      },
      {
        "q": "What are the main risks?",
        "a": "For the card: credit losses and regulation. For savings: the spread shrinking if rates fall, and customers chasing higher rates."
      },
      {
        "q": "Can the other product be done later?",
        "a": "Yes, next year, if the numbers justify it. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Item",
          "Small business card",
          "High-yield savings",
          "Note"
        ],
        "rows": [
          [
            "Investment this year",
            "$15M",
            "$10M",
            "Build plus launch marketing"
          ],
          [
            "Profit year 1 / 2 / 3 (before investment)",
            "$2M / $14M / $26M",
            "$5M / $11M / $15M",
            "Card ramps slowly; savings starts earning sooner"
          ],
          [
            "3-year profit if plan is met",
            "$42M",
            "$31M",
            "Sum of the three years"
          ],
          [
            "Net profit if plan is met",
            "$27M (1.8x)",
            "$21M (2.1x)",
            "Profit minus investment"
          ],
          [
            "Chance of hitting plan",
            "50%",
            "80%",
            "Card depends on credit losses and sales; savings on the rate"
          ],
          [
            "Profit if plan is missed",
            "25% of plan = $10.5M",
            "60% of plan = $18.6M",
            "Assumed"
          ],
          [
            "Main risk",
            "Credit losses, regulation",
            "Falling spread, customers chase higher rates",
            "Assumed"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: we can fund only one of a small business credit card or a high-yield savings account this year. I will define best as risk-adjusted profit per dollar over three years, plus speed and strategic fit. Is that right, and what is the budget for each?"
        ],
        [
          "L: Lay out",
          "I would pick criteria first. Then compare the value of each, how soon it earns and how sure we are. Then look at risk and fit, and what would change the answer."
        ],
        [
          "E: Evaluate",
          "Assuming the card needs $15M and earns $42M over three years, and savings needs $10M and earns $31M, the card looks better on raw profit, $27M net against $21M. But the card has a 50% chance of reaching plan and savings 80%. Adjusted for that, the card nets about $11M and savings about $18.5M."
        ],
        [
          "A: Assess",
          "Savings also pays back sooner, 17 months against 23, and scores 3.7 against 3.3 on a weighted scorecard. The card would win only if its chance of hitting plan were about 73% or more. The main risk for savings is the spread falling, but at 0.6% it is still profitable."
        ],
        [
          "R: Recommend",
          "I would prioritize savings, with a rate floor so the spread stays at 0.6% or more. Meanwhile I would prepare the card with a small partner pilot and tighter underwriting, and revisit next year with real data on demand and losses."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Decision: we can invest in only one of two products this year,<br/>a small business credit card or a high-yield savings account\"]\nC --> C2[\"Define terms: best = most risk-adjusted profit per dollar,<br/>reaching profit fast, and fitting the bank's strategy\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Criteria: what matters,<br/>and how much?\"]\nL --> L2[\"2 Value: what does each product earn,<br/>how soon, and how sure are we?\"]\nL --> L3[\"3 Risk and fit: what could go wrong,<br/>and what would change the answer?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Compare both on the same terms\"]\nE1 --> E2[\"Card: invest $15M, 3-year profit $42M, net $27M<br/>Savings: invest $10M, 3-year profit $31M, net $21M\"]\nE2 --> E3[\"Adjust for risk: card has a 50% chance of hitting plan,<br/>savings 80%. Card net $11.3M (0.75x), savings net $18.5M (1.85x)\"]\nE3 --> E4[\"Scorecard (value, speed, risk, fit, ease):<br/>card 3.3 out of 5, savings 3.7 out of 5\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"The card has the bigger prize but is slower and riskier,<br/>so it loses once risk is counted\"]\nA --> A2[\"Savings pays back in 17 months, the card in 23\"]\nA --> A3[\"The card wins only if its chance of hitting plan is 73% or more\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Prioritize the savings account\"]\nR --> R1[\"Launch savings this year, with a rate floor:<br/>keep the spread at 0.6% or more\"]\nR --> R2[\"Use the year to prepare the card: test demand with<br/>a small partner pilot, tighten underwriting\"]\nR --> R3[\"Revisit next year with real data on card demand and losses\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "scorecard",
          "title": "How we compare: the weighted scorecard",
          "note": "Each criterion is scored 1 to 5, multiplied by its weight, then added. Then check the score against the money.",
          "code": "flowchart TD\nQ[\"Which one product do we fund this year?\"] --> K[\"Step 1: choose criteria and weights<br/>Value 30%, Speed to profit 15%, Risk 25%, Strategic fit 20%, Ease 10%\"]\nK --> V[\"Value (30%)<br/>Card 5: $42M profit<br/>Savings 3: $31M profit\"]\nK --> SP[\"Speed (15%)<br/>Card 2: payback 23 months<br/>Savings 4: payback 17 months\"]\nK --> RK[\"Risk (25%)<br/>Card 2: credit losses, 50% chance of plan<br/>Savings 4: rate risk, 80% chance of plan\"]\nK --> FT[\"Fit (20%)<br/>Card 4: small business relationships, spend data<br/>Savings 4: cheap funding for lending\"]\nK --> EA[\"Ease (10%)<br/>Card 2: underwriting, rewards, servicing to build<br/>Savings 4: simpler product\"]\n\nV --> SC[\"Weighted score<br/>Card: 1.5 + 0.3 + 0.5 + 0.8 + 0.2 = 3.3<br/>Savings: 0.9 + 0.6 + 1.0 + 0.8 + 0.4 = 3.7\"]\nSP --> SC\nRK --> SC\nFT --> SC\nEA --> SC\n\nSC --> CK{\"Step 2: does the money agree?\"}\nCK --> M[\"Risk-adjusted net profit<br/>Card $11.3M vs Savings $18.5M\"]\nM --> D[\"Prioritize savings<br/>Both the scorecard and the money agree\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef crit fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef sc fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass Q,K,CK q;\nclass V,SP,RK,FT,EA crit;\nclass SC,M sc;\nclass D out;"
        },
        {
          "id": "money",
          "title": "The money: risk-adjusted profit and what would change the answer",
          "note": "Green is the stronger option, orange is a comparison, red is a danger case.",
          "code": "flowchart TD\nB[\"Assumed 3-year profit before investment ($M, years 1, 2, 3)<br/>Card: 2 + 14 + 26 = $42M, invest $15M<br/>Savings: 5 + 11 + 15 = $31M, invest $10M\"] --> N1[\"Net profit if all goes to plan<br/>Card: $42M - $15M = $27M, 1.8x<br/>Savings: $31M - $10M = $21M, 2.1x\"]\n\nN1 --> P1[\"Card, 50% chance of plan, else 25% of plan<br/>0.5 x $42M + 0.5 x $10.5M = $26.25M<br/>Net = $26.25M - $15M = $11.3M, 0.75x\"]\nN1 --> P2[\"Savings, 80% chance of plan, else 60% of plan<br/>0.8 x $31M + 0.2 x $18.6M = $28.5M<br/>Net = $28.5M - $10M = $18.5M, 1.85x\"]\n\nN1 --> PB[\"Payback<br/>Card: -$15M + $2M + $14M, about 23 months<br/>Savings: -$10M + $5M + $11M, about 17 months\"]\n\nP1 --> BE[\"What would change the answer?<br/>Card net = 31.5 x p - 4.5. Set equal to $18.5M<br/>p = 23 / 31.5 = 73% chance of plan\"]\nP2 --> BE\n\nP2 --> S1[\"Savings spread falls from 1.0% to 0.6%<br/>profit x 0.6 = $18.6M, net = $8.6M, still positive\"]\nP1 --> S2[\"Card losses double (contribution $400 to $150)<br/>profit = $42M x 150 / 400 = $15.75M, net = $0.75M\"]\n\nBE --> R[\"Prioritize savings, with a rate floor<br/>Prepare the card for next year\"]\nS1 --> R\nS2 --> R\nPB --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B,N1 base;\nclass P2,PB good;\nclass P1,BE mid;\nclass S1 mid;\nclass S2 bad;\nclass R out;"
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
              "Define what 'best' means and the time horizon",
              "The answer depends on the goal (profit, speed or strategy)",
              "Best = risk-adjusted profit per dollar, over 3 years, with fit"
            ],
            [
              "L Lay out",
              "Say your criteria before comparing",
              "Shows a plan and lets the interviewer steer",
              "Criteria, value, risk and fit"
            ],
            [
              "E Evaluate",
              "Put both products on the same numbers, then adjust for risk",
              "Raw profit ignores how likely it is",
              "Card $11.3M risk-adjusted vs savings $18.5M"
            ],
            [
              "A Assess",
              "Check speed, a weighted score, and what would flip the answer",
              "Shows your answer is robust",
              "Savings 3.7 vs card 3.3; card wins only at a 73% chance of plan"
            ],
            [
              "R Recommend",
              "Pick one, set conditions, and say what you do about the other",
              "Interviewers want a decision with a plan",
              "Savings with a rate floor; prepare the card for next year"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Prioritization",
              "Choosing what to do first when you cannot do everything"
            ],
            [
              "Trade-off",
              "Giving up one good thing to get another"
            ],
            [
              "Weighted scorecard",
              "Scoring each option on several criteria, with the more important criteria counting more"
            ],
            [
              "Risk-adjusted value",
              "Expected profit after allowing for the chance of missing the plan"
            ],
            [
              "Expected value",
              "Each outcome times its probability, added up"
            ],
            [
              "Payback period",
              "Time for profit to repay the investment"
            ],
            [
              "Spread",
              "What the bank earns on deposits after paying the customer interest, versus its other funding costs"
            ],
            [
              "Interchange",
              "The fee a merchant pays on a card payment, shared with the card issuer"
            ],
            [
              "Credit loss",
              "Money the bank never gets back from borrowers"
            ],
            [
              "Pilot",
              "A small, real test before a full launch"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Card 3-year profit: $2M + $14M + $26M = $42M. Net of $15M investment = $27M, or 1.8x."
            ],
            [
              "2",
              "Savings 3-year profit: $5M + $11M + $15M = $31M. Net of $10M = $21M, or 2.1x."
            ],
            [
              "3",
              "Card expected profit: 50% x $42M + 50% x $10.5M = $21M + $5.25M = $26.25M. Net = $11.25M, about $11.3M, or 0.75x."
            ],
            [
              "4",
              "Savings expected profit: 80% x $31M + 20% x $18.6M = $24.8M + $3.72M = $28.5M. Net = $18.5M, or 1.85x."
            ],
            [
              "5",
              "Payback, card: -$15M + $2M = -$13M after year 1; $13M / $14M = 0.93 of year 2, so about 23 months."
            ],
            [
              "6",
              "Payback, savings: -$10M + $5M = -$5M after year 1; $5M / $11M = 0.45 of year 2, so about 17 months."
            ],
            [
              "7",
              "Scorecard, card: 5 x 30% + 2 x 15% + 2 x 25% + 4 x 20% + 2 x 10% = 1.5 + 0.3 + 0.5 + 0.8 + 0.2 = 3.3."
            ],
            [
              "8",
              "Scorecard, savings: 3 x 30% + 4 x 15% + 4 x 25% + 4 x 20% + 4 x 10% = 0.9 + 0.6 + 1.0 + 0.8 + 0.4 = 3.7."
            ],
            [
              "9",
              "What would flip it: card net = p x $42M + (1 - p) x $10.5M - $15M = 31.5p - 4.5. Set equal to $18.5M: p = 23 / 31.5 = 73%."
            ],
            [
              "10",
              "Savings spread falls from 1.0% to 0.6%: profit x 0.6 = $18.6M. Net = $8.6M, still positive."
            ],
            [
              "11",
              "Card credit losses double so contribution per card falls from $400 to $150: profit = $42M x 150 / 400 = $15.75M. Net = $0.75M, about break-even."
            ]
          ]
        }
      ],
      "table": {
        "title": "Prioritization checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical problem",
          "Response"
        ],
        "rows": [
          [
            "What is the goal?",
            "Profit, growth, deposits, customers",
            "Leaders disagree on the goal",
            "Agree the goal first"
          ],
          [
            "What is each worth?",
            "Profit over 3 years, net of investment",
            "Comparing revenue instead of profit",
            "Use net profit per dollar invested"
          ],
          [
            "How sure are we?",
            "Evidence of demand, past launches, pilot data",
            "Optimistic plans",
            "Weight by probability of success"
          ],
          [
            "How fast does it pay back?",
            "Cash flow by year, payback",
            "Slow ramp ties up money",
            "Prefer faster payback if value is close"
          ],
          [
            "What are the risks?",
            "Credit losses, rate changes, regulation, competition",
            "One risk can erase the profit",
            "Stress test the main risk"
          ],
          [
            "Does it fit our strategy?",
            "Customers, data, funding needs",
            "Product does not help the core business",
            "Score fit explicitly"
          ],
          [
            "Can we do the other later?",
            "Cost of waiting, option value",
            "Missing a window",
            "Plan a small step now, a full launch later"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if leadership prefers the card?",
        "a": "Show what has to be true: its chance of hitting plan must be about 73% or higher. Then find evidence for that, such as a pilot, partner data or proof of lower losses."
      },
      {
        "q": "How do you handle uncertainty in the estimates?",
        "a": "Use probabilities and a miss case, then stress test the biggest risk. Here a falling savings spread and doubled card losses are the two stress tests."
      },
      {
        "q": "Why not do both in a smaller way?",
        "a": "The prompt says one only. If a small second step is allowed, I would run a low-cost card pilot to learn about demand and losses without a full launch."
      },
      {
        "q": "What would make you change to the card?",
        "a": "Strong pilot evidence that the card hits plan with at least 73% confidence, a sharp fall in the savings spread, or a strategic need such as winning small business primary relationships."
      }
    ],
    "pitfalls": [
      "Choosing the biggest number. Adjust for risk and speed before comparing.",
      "Comparing profit, not return. The two products need different amounts of money.",
      "Skipping criteria. Say what matters and how much before scoring.",
      "No sensitivity. Say what would flip the answer, such as the 73% chance of plan.",
      "Forgetting the other option. Say how you would prepare it for next year."
    ]
  },
  {
    "id": "cannibalization",
    "title": "Cannibalization: Is It a Problem?",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "growth",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "A new product is hitting its growth targets but cannibalizing an existing product's customer base. How do you think about whether that is a problem?",
    "clarify": [
      {
        "q": "What are the two products?",
        "a": "A new no-fee cash-back card and an older annual-fee rewards card. Assume the old card earns $300 profit per customer a year and the new one $150."
      },
      {
        "q": "How much is cannibalized?",
        "a": "About 40% of the new card's 300K accounts belong to customers who closed or downgraded the old card within 90 days."
      },
      {
        "q": "Would those customers have left anyway?",
        "a": "We estimate about 25% of switchers were about to leave for a rival."
      },
      {
        "q": "How are the growth targets defined?",
        "a": "Total new accounts of the new product, not net of switchers."
      },
      {
        "q": "Which customers are switching?",
        "a": "We have not yet split switchers by value. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Existing product (annual-fee rewards card)",
            "1.0M customers, $300 profit each a year",
            "Assumed"
          ],
          [
            "New product (no-fee cash-back card)",
            "300K new accounts, $150 profit each a year",
            "The target was 300K accounts"
          ],
          [
            "Reported profit from the new product",
            "300K x $150 = $45M",
            "What the growth target counts"
          ],
          [
            "Switchers (cannibalized)",
            "40% = 120K",
            "New accounts held by customers who closed or downgraded the old card within 90 days"
          ],
          [
            "Truly new customers",
            "60% = 180K",
            "Would not have joined otherwise"
          ],
          [
            "Switchers who would have left for a rival anyway",
            "25% = 30K",
            "Assumed from past attrition and competitor offers"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: the new product is hitting its growth targets, but some of its customers came from our existing product. I will treat cannibalization as new accounts held by customers who left our old product. Is the goal profit growth, and do we know how many are switchers?"
        ],
        [
          "L: Lay out",
          "I would answer three questions. How much of the growth is cannibalized? What is it worth after counting what we lose and what we keep? And what does it mean strategically, such as whether those customers would have left anyway?"
        ],
        [
          "E: Evaluate",
          "Assuming 300K new accounts at $150 profit, the reported growth is $45M. If 40% are switchers from a $300 product, then 180K are truly new, worth $27M. Of the 120K switchers, a quarter would have left anyway, which saves $4.5M, and the rest cost us $150 each, or $13.5M. Net, $18M."
        ],
        [
          "A: Assess",
          "So it is not a problem by itself: it is a net gain, but only 40% of the reported number. At these margins it turns negative only if more than about two thirds of new accounts are switchers. I would also check which customers switched, since losing top-tier customers matters more."
        ],
        [
          "R: Recommend",
          "I would accept some cannibalization and manage it: change the target to net incremental profit, protect high-value customers with targeting rules and an upgrade path, and set a trigger to act if switchers pass 50% or top-tier customers start moving."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Situation: a new product is hitting its growth targets,<br/>but many of its customers come from an existing product\"]\nC --> C2[\"Question: is that cannibalization a problem?<br/>Define terms: cannibalization rate, incremental profit\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 How much? What share of new customers<br/>are switchers from our own product?\"]\nL --> L2[\"2 What is it worth? Net profit after counting<br/>what we lose and what we keep\"]\nL --> L3[\"3 Strategy: would we lose them to a rival anyway?<br/>Then decide whether to act\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Split the new customers by where they came from\"]\nE1 --> E2[\"300K new accounts at $150 profit each = $45M reported<br/>60% truly new (180K), 40% switchers (120K)\"]\nE2 --> E3[\"New customers +$27.0M. Switchers who would have left: 30K x $150 = +$4.5M<br/>Switchers who would have stayed: 90K x $150 lost = -$13.5M\"]\nE3 --> E4[\"Net incremental profit = $18.0M, only 40% of the $45M reported\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Still a net gain, so not a problem by itself,<br/>but the growth target overstates the real result\"]\nA --> A2[\"It becomes a problem if more than about 67% of<br/>new accounts are switchers (50% if no one would have left)\"]\nA --> A3[\"The existing base falls 12% (1.0M to 880K),<br/>so watch the high-value customers\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Accept some cannibalization, manage it, change the target\"]\nR --> R1[\"Change the target to net incremental profit,<br/>not gross new accounts\"]\nR --> R2[\"Protect high-value customers: targeting rules,<br/>an upgrade path, clear differences between products\"]\nR --> R3[\"Set a trigger: act if switchers pass 50%<br/>or top-tier customers start moving\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "source",
          "title": "Where the new customers come from",
          "note": "Green adds profit, red reduces it. The last box is the real result.",
          "code": "flowchart TD\nN[\"300K new accounts, $150 profit each<br/>Reported profit = $45M\"] --> T[\"Where did they come from?<br/>Track whether each new customer closed or downgraded<br/>our existing product within 90 days\"]\nT --> I[\"60% truly new: 180K<br/>Would not have joined us otherwise<br/>180K x $150 = +$27.0M\"]\nT --> S[\"40% switchers: 120K<br/>They already paid us $300 a year\"]\nS --> S1[\"25% would have left for a rival: 30K<br/>We keep them at $150 instead of $0<br/>30K x $150 = +$4.5M\"]\nS --> S2[\"75% would have stayed: 90K<br/>We now earn $150 instead of $300<br/>90K x $150 = -$13.5M\"]\nI --> NET[\"Net incremental profit<br/>$27.0M + $4.5M - $13.5M = +$18.0M<br/>40% of the reported $45M\"]\nS1 --> NET\nS2 --> NET\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass N,T q;\nclass I,S1 good;\nclass S,S2 bad;\nclass NET out;"
        },
        {
          "id": "break-even",
          "title": "When does it become a problem?",
          "note": "Each box shows the result at a different cannibalization rate (c). The decision rule is at the bottom.",
          "code": "flowchart TD\nB[\"Net profit per new account = $150 x (1 - 1.5 x c)<br/>c = cannibalization rate, assuming 25% of switchers would have left<br/>Total = per account x 300K\"] --> R1[\"c = 20%<br/>$150 x 0.70 = $105<br/>+$31.5M\"]\nB --> R2[\"c = 40% (today)<br/>$150 x 0.40 = $60<br/>+$18.0M\"]\nB --> R3[\"c = 60%<br/>$150 x 0.10 = $15<br/>+$4.5M\"]\nB --> R4[\"c = 67%<br/>$150 x 0 = $0<br/>Break-even\"]\nB --> R5[\"c = 80%<br/>$150 x -0.2 = -$30<br/>-$9.0M\"]\n\nB --> Z[\"If no switcher would have left rival-ward<br/>Net per account = $150 - $300 x c<br/>At 40%: $30 x 300K = +$9.0M. Break-even c = 50%\"]\n\nR2 --> D{\"Is it a problem?\"}\nR3 --> D\nR4 --> D\nR5 --> D\nZ --> D\nD -->|\"c below about 50% and net positive\"| OK[\"Not a problem: monitor it, update the target\"]\nD -->|\"c between 50% and 67%\"| W[\"Manage it: protect high-value customers, change pricing or targeting\"]\nD -->|\"c above 67%, or top customers leave\"| X[\"A problem: slow the new product or redesign it\"]\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef q fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass B base;\nclass R1,R2,OK good;\nclass R3,R4,Z,W mid;\nclass R5,X bad;\nclass D q;"
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
              "Define cannibalization and the goal of the new product",
              "Some overlap is expected; the question is how much and at what cost",
              "Goal: profit growth; cannibalization = new accounts from our own customers"
            ],
            [
              "L Lay out",
              "Say your 3 questions before calculating",
              "Shows a plan and lets the interviewer steer",
              "How much? What is it worth net? What is the strategy view?"
            ],
            [
              "E Evaluate",
              "Split new customers by source and value each group",
              "Gross growth hides the real result",
              "New +$27.0M, saved +$4.5M, lost -$13.5M"
            ],
            [
              "A Assess",
              "Find the net, the break-even and the risk to top customers",
              "Shows when it turns into a problem",
              "Net $18.0M; break-even at 67% cannibalization"
            ],
            [
              "R Recommend",
              "Give a decision and the change to targets",
              "Interviewers want a decision",
              "Accept, manage, and measure net incremental profit"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Cannibalization",
              "A new product taking customers or sales from the company's own existing product"
            ],
            [
              "Cannibalization rate",
              "The share of the new product's customers who came from our own product"
            ],
            [
              "Incremental",
              "Truly new profit that would not exist without the new product"
            ],
            [
              "Switcher",
              "An existing customer who moves to the new product"
            ],
            [
              "Net profit",
              "What is left after adding gains and subtracting losses"
            ],
            [
              "Gross vs net growth",
              "Gross counts all new accounts; net counts only what we gain after the losses"
            ],
            [
              "Break-even",
              "The point where the net gain is exactly zero"
            ],
            [
              "Holdout or matched comparison",
              "A comparison group that shows what would have happened without the new product"
            ],
            [
              "Offensive vs defensive launch",
              "Launching to win new customers, or to stop customers leaving for rivals"
            ],
            [
              "Trigger",
              "A pre-agreed warning level that causes action"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Reported: 300K x $150 = $45M. The growth target looks achieved."
            ],
            [
              "2",
              "Source: 40% x 300K = 120K switchers; 60% x 300K = 180K truly new."
            ],
            [
              "3",
              "Truly new: 180K x $150 = +$27.0M."
            ],
            [
              "4",
              "Switchers who would have left (25%): 30K x $150 = +$4.5M, because we keep them at $150 instead of $0."
            ],
            [
              "5",
              "Switchers who would have stayed (75%): 90K x ($300 - $150) = 90K x $150 = -$13.5M."
            ],
            [
              "6",
              "Net: $27.0M + $4.5M - $13.5M = +$18.0M, which is 40% of the reported $45M."
            ],
            [
              "7",
              "Existing base: 1.0M - 120K = 880K, a 12% fall. Check which customers moved."
            ],
            [
              "8",
              "Net per account for any cannibalization rate c: new share (1 - c) x $150, plus switcher share c x (25% x $150 - 75% x $150 = -$75). So $150 - $225c = $150 x (1 - 1.5c)."
            ],
            [
              "9",
              "Break-even: 1 - 1.5c = 0, so c = 67%."
            ],
            [
              "10",
              "At c = 20%: $150 x 0.70 = $105, x 300K = +$31.5M. At 60%: $15 x 300K = +$4.5M. At 80%: -$30 x 300K = -$9.0M."
            ],
            [
              "11",
              "If no switcher would have left: per account = $150 - $300c. At 40%: $30 x 300K = +$9.0M. Break-even c = 50%."
            ],
            [
              "12",
              "Check: at c = 40%, $150 - $225 x 0.4 = $60; $60 x 300K = $18.0M, matching step 6."
            ]
          ]
        }
      ],
      "table": {
        "title": "Cannibalization checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical problem",
          "Response"
        ],
        "rows": [
          [
            "How much is cannibalized?",
            "Share of new accounts held by existing customers",
            "Counting only gross new accounts",
            "Track switchers and new customers separately"
          ],
          [
            "Who is switching?",
            "Value of switchers: top tier or low tier",
            "Best customers move to the cheaper product",
            "Segment switchers by profit"
          ],
          [
            "Would they have left anyway?",
            "Past attrition, rival offers, product aging",
            "Over- or under-estimating the loss",
            "Use a holdout or matched group"
          ],
          [
            "What is each customer worth?",
            "Profit per account for both products",
            "Comparing revenue, not profit",
            "Use profit per customer"
          ],
          [
            "Is the old product declining anyway?",
            "Trend in the old product without the new one",
            "Blaming the new product for an existing decline",
            "Compare with the trend before launch"
          ],
          [
            "Is the target right?",
            "What the goal counts",
            "Gross accounts rewarded",
            "Switch to net incremental profit"
          ],
          [
            "Can we reduce the overlap?",
            "Targeting, pricing, benefits that differ",
            "Products too similar",
            "Make products clearly different, add upgrade paths"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Is cannibalization ever good?",
        "a": "Yes, when the new product keeps customers who would otherwise leave for a rival, or when it has better margins or lower costs. It is better to cannibalize yourself than to be cannibalized by a competitor."
      },
      {
        "q": "How would you measure it properly?",
        "a": "Track each new customer's history to see whether they closed or downgraded our product. Use a holdout or matched comparison to estimate how many would have left anyway."
      },
      {
        "q": "What would you do if top customers are switching?",
        "a": "Protect them: avoid promoting the new product to them, add an upgrade path, and make benefits of the premium product clearly better. Re-segment the switchers by value."
      },
      {
        "q": "What would you change about the targets?",
        "a": "Move from gross new accounts to net incremental profit, and track cannibalization rate as a guardrail with a trigger level, for example 50%."
      }
    ],
    "pitfalls": [
      "Saying cannibalization is always bad. Compare the loss with the gain and with what rivals would take.",
      "Counting gross growth. Report net incremental profit.",
      "Ignoring who switched. Losing top customers hurts more than losing low-value ones.",
      "Forgetting the \"would have left anyway\" group. Some switchers are a save, not a loss.",
      "No decision rule. Say the level at which you would act."
    ]
  },
  {
    "id": "instant-preapproval",
    "title": "Instant Pre-Approval: Speed vs Credit Risk",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "unit",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "We want to launch an instant pre-approval feature that reduces underwriting friction. How would you balance speed-to-approval against credit risk?",
    "clarify": [
      {
        "q": "What does the feature do?",
        "a": "Applicants get an instant credit offer based on a soft credit check and limited data. A full review follows later if they accept."
      },
      {
        "q": "What is the current process and its cost?",
        "a": "A decision takes about two days. Only 55% of approved applicants accept, because many give up while waiting."
      },
      {
        "q": "What do we know about risk?",
        "a": "Our loss rate is about 4.0% of balances. Faster decisions use fewer checks, which could raise losses."
      },
      {
        "q": "What are the unit values?",
        "a": "Average balance $5K, revenue 12% a year, servicing $60 a year. Treat these as working assumptions."
      },
      {
        "q": "Are there rules to follow?",
        "a": "Yes: fair lending, clear decline reasons and identity checks. Compliance must review the design."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Approved applicants per year",
            "100K",
            "Assumed"
          ],
          [
            "Accept the offer today",
            "55% = 55K accounts",
            "The rest drop out while waiting"
          ],
          [
            "Accept if instant",
            "70% = 70K accounts",
            "Assumed"
          ],
          [
            "Average balance / revenue",
            "$5K / 12% = $600 a year",
            "Assumed"
          ],
          [
            "Servicing cost",
            "$60 a year",
            "Assumed"
          ],
          [
            "Loss rate today",
            "4.0% = $200 a year",
            "Profit today = $600 - $60 - $200 = $340"
          ],
          [
            "Loss rate if instant for everyone",
            "5.5% = $275",
            "Weaker checks and adverse selection"
          ],
          [
            "Tiered design",
            "70% low risk, 3.5% loss, 80% accept; 30% higher risk, 5.5% loss, 50% accept, $3K balance",
            "Assumed"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: we want an instant pre-approval feature and need to balance speed against credit risk. I will define success as profit after credit losses. Is that right, and what is today's acceptance rate and loss rate?"
        ],
        [
          "L: Lay out",
          "I would look at three things. First, the benefit: how many more applicants accept if the decision is instant. Second, the risk: how much losses and fraud rise with fewer checks. Third, whether a design can keep the speed and limit the risk."
        ],
        [
          "E: Evaluate",
          "Assuming 100K approved applicants and 55% accept today at $340 profit each, that is $18.7M. Instant for everyone lifts acceptance to 70%, but losses rise from 4.0% to 5.5%, so profit is $18.55M, no gain. A tiered design, instant for low-risk applicants and an extra check with a smaller limit for the rest, earns about $22.5M."
        ],
        [
          "A: Assess",
          "So speed alone only breaks even: instant for everyone matches today only if losses stay under about 5.5%. The main risks are adverse selection, fraud, fair lending and losses that appear months later."
        ],
        [
          "R: Recommend",
          "I would launch the tiered design in a pilot on 10% of applications with a control group, judged on 90-day delinquency, with a kill switch if early delinquency or fraud passes the limit. I would also test approvals and limits for fairness across groups."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Decision: launch an instant pre-approval feature that<br/>cuts the wait for a credit decision. Balance speed against credit risk\"]\nC --> C2[\"Define terms: pre-approval = a quick offer using limited checks<br/>Success = profit after credit losses, not just more approvals\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Benefit: how many more applicants<br/>would accept if the decision is instant?\"]\nL --> L2[\"2 Risk: how much do losses and fraud rise<br/>when we use fewer checks?\"]\nL --> L3[\"3 Design and guardrails: can we keep the speed<br/>and limit the risk?\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Compare today, instant for everyone, and tiered instant\"]\nE1 --> E2[\"Today: 100K approved applicants, 55% accept = 55K accounts<br/>$340 profit each = $18.7M\"]\nE2 --> E3[\"Instant for everyone: 70% accept = 70K accounts, but losses rise<br/>from 4.0% to 5.5%. Profit $265 each = $18.55M, no gain\"]\nE3 --> E4[\"Tiered instant: low risk 70% get instant approval, riskier 30% get a<br/>1-day check and a smaller limit. Profit $22.5M, +$3.8M\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"Speed raises volume, but weaker checks raise losses,<br/>so instant for everyone only breaks even\"]\nA --> A2[\"Instant for everyone matches today only if losses stay<br/>below about 5.5%\"]\nA --> A3[\"Risks to watch: adverse selection, fraud, fair lending,<br/>and losses that show up months later\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Launch tiered instant pre-approval in a controlled pilot\"]\nR --> R1[\"Instant for low-risk applicants, small limits and one extra check for the rest\"]\nR --> R2[\"Pilot on 10% of applications with a control group,<br/>judged on 90-day delinquency\"]\nR --> R3[\"Set a kill switch: pause if early delinquency or fraud passes the limit\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "tiers",
          "title": "How the tiered design works",
          "note": "Applicants are checked in seconds and sent to a tier. Monitoring and a stop rule protect the launch.",
          "code": "flowchart TD\nA[\"Applicant asks for a decision\"] --> K[\"Instant checks, a few seconds<br/>Identity and fraud check, soft credit check, income signal,<br/>existing relationship data\"]\nK --> T{\"Risk tier\"}\nT --> T1[\"Tier 1: low risk, 70% of approved applicants<br/>Instant approval, full offer<br/>Expected loss 3.5%, 80% accept\"]\nT --> T2[\"Tier 2: higher risk, 30%<br/>Instant conditional offer: smaller limit,<br/>one extra check within a day<br/>Expected loss 5.5%, 50% accept\"]\nT --> T3[\"Tier 3: very high risk or fraud signals<br/>Decline, or send to manual review\"]\n\nT1 --> M[\"After approval: monitor\"]\nT2 --> M\nM --> M1[\"Early warning: missed first payment, 90-day delinquency,<br/>fraud rate, by tier\"]\nM --> M2[\"Fair lending checks: approval and limits across groups<br/>Clear reasons for any decline\"]\nM1 --> KS{\"Over the limit?\"}\nM2 --> KS\nKS -->|\"Yes\"| PA[\"Pause or tighten the tier, review the model\"]\nKS -->|\"No\"| SC[\"Widen the pilot step by step\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass A,K,T,M,KS q;\nclass T1,SC good;\nclass T2,M1,M2 mid;\nclass T3,PA bad;"
        },
        {
          "id": "money",
          "title": "The money: today, instant for everyone, and tiered",
          "note": "Green is the recommended design, orange is a comparison, red is a danger case.",
          "code": "flowchart TD\nB[\"Assumed: 100K approved applicants. Average balance $5K, revenue 12% = $600,<br/>servicing $60, loss = rate x $5K<br/>Profit per account = $600 - $60 - loss\"] --> TD[\"Today: 55% accept = 55K accounts<br/>Loss 4.0% = $200, profit $340 each<br/>55K x $340 = $18.7M\"]\nB --> IA[\"Option A, instant for everyone: 70% accept = 70K accounts<br/>Loss 5.5% = $275, profit $265 each<br/>70K x $265 = $18.55M, change -$0.15M\"]\nB --> IB[\"Option B, tiered instant<br/>Tier 1: 70K x 80% = 56K accounts, loss 3.5%, profit $365 = $20.4M<br/>Tier 2: 30K x 50% = 15K accounts, $3K balance, profit $135 = $2.0M\"]\nIB --> TB[\"Tiered total = $22.5M, change +$3.8M vs today\"]\n\nIA --> BE[\"Break-even for Option A<br/>$18.7M / 70K = $267 profit per account<br/>loss = ($540 - $267) / $5K = about 5.5%\"]\nTB --> S1[\"If Tier 1 loss is 5.0% instead of 3.5%<br/>profit $290 x 56K = $16.2M + $2.0M = $18.3M, below today\"]\nTB --> S2[\"Pilot first: 10% of applications, control group<br/>Judge on 90-day delinquency, because full losses take about a year\"]\n\nBE --> R[\"Launch tiered, not instant for everyone<br/>Keep the Tier 1 loss rate near 3.5%\"]\nS1 --> R\nS2 --> R\nTD --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B,TD base;\nclass IB,TB good;\nclass IA,BE,S2 mid;\nclass S1 bad;\nclass R out;"
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
              "Define pre-approval and what 'good' means",
              "Success is profit after losses, not just more approvals",
              "Success = profit after credit losses; pre-approval = quick offer with limited checks"
            ],
            [
              "L Lay out",
              "Say your 3 questions before calculating",
              "Shows a plan and lets the interviewer steer",
              "Benefit of speed? Rise in risk? Design and guardrails?"
            ],
            [
              "E Evaluate",
              "Compare today, instant for everyone and tiered instant",
              "One option rarely wins on both speed and risk",
              "Today $18.7M, instant for all $18.55M, tiered $22.5M"
            ],
            [
              "A Assess",
              "Find the break-even loss rate and the risks",
              "Shows how much risk the plan can take",
              "Instant for everyone breaks even at about 5.5% losses"
            ],
            [
              "R Recommend",
              "Give a design, a pilot and a stop rule",
              "Interviewers want a decision and controls",
              "Tiered, 10% pilot with control group, kill switch"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Pre-approval",
              "A quick offer based on limited checks, before a full review"
            ],
            [
              "Underwriting",
              "Deciding who to approve and for how much"
            ],
            [
              "Credit risk",
              "The chance a borrower does not repay"
            ],
            [
              "Loss rate",
              "The share of balances the bank never gets back"
            ],
            [
              "Adverse selection",
              "Riskier applicants are more likely to take a fast, easy offer"
            ],
            [
              "Friction",
              "Steps or waiting that make customers give up"
            ],
            [
              "Tiering",
              "Treating applicants differently by risk level"
            ],
            [
              "Early delinquency",
              "Missed payments in the first months, an early warning of losses"
            ],
            [
              "Holdout or control group",
              "A group that gets the old process, used as a fair comparison"
            ],
            [
              "Kill switch",
              "A pre-agreed trigger to pause the feature"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Today: 100K x 55% = 55K accounts. Profit per account = $600 - $60 - ($5K x 4.0% = $200) = $340. Total = 55K x $340 = $18.7M."
            ],
            [
              "2",
              "Instant for everyone: 100K x 70% = 70K accounts. Loss = $5K x 5.5% = $275, so profit = $600 - $60 - $275 = $265. Total = 70K x $265 = $18.55M, a change of -$0.15M."
            ],
            [
              "3",
              "Break-even for instant for everyone: $18.7M / 70K = $267 per account. Loss = ($540 - $267) / $5K = about 5.5%."
            ],
            [
              "4",
              "Tier 1: 70% of 100K = 70K applicants x 80% accept = 56K accounts. Loss = $5K x 3.5% = $175, profit = $600 - $60 - $175 = $365. Total = 56K x $365 = $20.4M."
            ],
            [
              "5",
              "Tier 2: 30K applicants x 50% accept = 15K accounts. Balance $3K, so revenue $360, loss 5.5% = $165, servicing $60, profit = $135. Total = 15K x $135 = $2.0M."
            ],
            [
              "6",
              "Tiered total: $20.4M + $2.0M = $22.5M, which is +$3.8M against today."
            ],
            [
              "7",
              "Accounts: 56K + 15K = 71K, similar to instant for everyone but with lower losses."
            ],
            [
              "8",
              "Stress test: if the Tier 1 loss is 5.0%, profit per account = $600 - $60 - $250 = $290; 56K x $290 = $16.2M; plus $2.0M = $18.3M, below today."
            ],
            [
              "9",
              "Pilot: 10% of applications get the new process and 10% stay on the old one. Judge on 90-day delinquency, because full losses take about a year."
            ]
          ]
        }
      ],
      "table": {
        "title": "Speed vs risk checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical problem",
          "Response"
        ],
        "rows": [
          [
            "How much does speed help?",
            "Drop-off by wait time, acceptance by speed",
            "Applicants give up while waiting",
            "Measure acceptance now and after a test"
          ],
          [
            "How much does risk rise?",
            "Loss rate by tier and by check used",
            "Losses rise when checks are removed",
            "Keep strong checks for riskier tiers"
          ],
          [
            "Who takes the fast offer?",
            "Risk mix of fast vs slow applicants",
            "Adverse selection",
            "Compare the mix in a pilot"
          ],
          [
            "Is fraud controlled?",
            "Identity checks, fraud rate in the pilot",
            "Fraudsters target easy approvals",
            "Add layered identity checks"
          ],
          [
            "Is it fair?",
            "Approval rates, limits and reasons by group",
            "Models treat groups unequally",
            "Test outcomes by group, explain decisions"
          ],
          [
            "How will we know early?",
            "90-day delinquency, first-payment miss",
            "Losses take a year to show",
            "Use leading indicators"
          ],
          [
            "What if it goes wrong?",
            "Stop rules, owners, speed to switch off",
            "No pre-agreed trigger",
            "Set a kill switch before launch"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not make everyone instant?",
        "a": "It lifts acceptance but also losses. At 5.5% losses the profit is about the same as today, so there is no gain for the added risk."
      },
      {
        "q": "How do you measure risk before losses appear?",
        "a": "Use early indicators such as first-payment misses and 90-day delinquency, compared with a control group, and track fraud rate by tier."
      },
      {
        "q": "What is adverse selection here?",
        "a": "Applicants who were turned down elsewhere or are riskier may be more likely to take a fast, easy offer, so the mix gets worse as speed rises."
      },
      {
        "q": "How do you keep it fair?",
        "a": "Test approval rates, limits and decline reasons across groups, avoid proxies for protected traits, and keep human review for borderline cases."
      }
    ],
    "pitfalls": [
      "Optimizing for approvals. Approvals that become losses reduce profit.",
      "Treating all applicants the same. Use tiers so low-risk applicants get speed and others get extra checks.",
      "Waiting a year for results. Use early indicators like 90-day delinquency.",
      "Ignoring fairness and rules. Test for fair outcomes and give clear reasons for declines.",
      "No stop rule. Say what number would make you pause the launch."
    ]
  },
  {
    "id": "underbanked-product",
    "title": "Underbanked Segment: Opportunity and Risk",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "entry",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "A new product targets a historically underbanked segment. How would you assess both the business opportunity and the risk and compliance considerations?",
    "clarify": [
      {
        "q": "Who is the segment?",
        "a": "Adults with a bank account but little access to credit, who rely on costly services such as check cashing and payday loans. Assume about 15M in the US."
      },
      {
        "q": "What is the product?",
        "a": "A low-fee checking account with a small-dollar credit-builder line, offered through a mobile app and community partners."
      },
      {
        "q": "What is the business goal?",
        "a": "Profit with payback inside two years, plus responsible lending and a path to bigger products."
      },
      {
        "q": "What constraints do we have?",
        "a": "Compliance and legal must review the design. Models must be tested for fair outcomes, and the product must not depend on penalty fees."
      },
      {
        "q": "What are the unit values?",
        "a": "Revenue about $250 a year per customer, costs about $160, fixed cost about $2.5M a year. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "The numbers we will use (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Adults in the segment",
            "15M",
            "Assumed"
          ],
          [
            "Reachable (bank account and smartphone)",
            "60% = 9M",
            "Assumed"
          ],
          [
            "Interested in the product",
            "15% = 1.35M",
            "Assumed"
          ],
          [
            "Our share in year 3",
            "4% = 54K customers",
            "1.35M x 4%"
          ],
          [
            "Revenue per customer a year",
            "$250",
            "Interchange $60 + deposit value $50 + small credit $140"
          ],
          [
            "Cost per customer a year",
            "$160",
            "Servicing $40 + credit losses $90 + compliance and support $30"
          ],
          [
            "Profit per customer a year",
            "$90",
            "Before graduation"
          ],
          [
            "Graduation to bigger products",
            "25% move up, worth $300 a year each",
            "Adds $75 per customer on average"
          ],
          [
            "Fixed cost / up-front",
            "$2.5M a year / $10.3M",
            "Build $6M + 54K x $80 acquisition = $4.3M"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "Let me confirm: we want to launch a product for an underbanked segment and I need to judge the business opportunity and the risk and compliance issues. Who is the segment and what is the product, for example a low-fee account with small credit?"
        ],
        [
          "L: Lay out",
          "I would use two lenses. The opportunity: how big the segment is, what customers need, whether we can win, and the economics. And risk and compliance: credit risk, fair lending, fees and conduct, identity checks and reputation."
        ],
        [
          "E: Evaluate",
          "Assuming 15M adults, 60% reachable and 15% interested, that is 1.35M. A 4% share is 54K customers. Each earns about $90 a year directly, and 25% graduate to bigger products worth $300, which adds $75. That is about $8.9M, minus $2.5M fixed, so $6.4M a year, with a payback of about 19 months."
        ],
        [
          "A: Assess",
          "The case depends on graduation. Without it profit is $2.4M and payback is 4.4 years. Break-even is about 15K customers. The main risks are higher credit losses, unfair outcomes from models, profiting from fees, and weak identity checks."
        ],
        [
          "R: Recommend",
          "I would go, with a fee-light design, cash-flow underwriting and a clear path to graduate. I would involve compliance and legal from day one, test models for fair outcomes, and pilot in two markets with community partners before scaling on gates such as loss rate, complaints and graduation."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>What are we being asked?\"]\nC --> C1[\"Decision: a new product for a historically underbanked segment.<br/>Judge the business opportunity and the risk and compliance issues\"]\nC --> C2[\"Define terms: underbanked = has little or no access to mainstream<br/>banking or credit. Success = profit, plus fair and lawful treatment\"]\n\nC1 --> L\nC2 --> L\nL[\"L: Lay out<br/>What do we need to find out?\"]\nL --> L1[\"1 Opportunity: how big is the segment,<br/>what do they need, can we win?\"]\nL --> L2[\"2 Economics: does each customer make money,<br/>including a path to better products?\"]\nL --> L3[\"3 Risk and compliance: credit, fair lending,<br/>fees and conduct, identity checks, reputation\"]\n\nL1 --> E1\nL2 --> E1\nL3 --> E1\nE1[\"E: Evaluate<br/>Size the segment, then the profit per customer\"]\nE1 --> E2[\"Segment: 15M adults x 60% reachable = 9M<br/>x 15% interested = 1.35M. Our 4% share = 54K customers\"]\nE2 --> E3[\"Per customer: $250 revenue minus $160 cost = $90 a year<br/>Plus 25% graduate to bigger products worth $300 a year = $75\"]\nE3 --> E4[\"54K x $165 = $8.9M, minus $2.5M fixed = $6.4M a year<br/>Up-front $10.3M pays back in about 19 months\"]\n\nE4 --> A[\"A: Assess<br/>What do the numbers mean?\"]\nA --> A1[\"The case depends on graduation: without it the profit is<br/>$2.4M and payback is about 4.4 years\"]\nA --> A2[\"Break-even is about 15K customers, 28% of the target\"]\nA --> A3[\"Biggest risks: higher credit losses, unfair outcomes in models,<br/>profiting from fees, and weak identity checks\"]\n\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Go, but design for fairness and run a pilot\"]\nR --> R1[\"Fee-light design: no profit from overdraft or late-fee mistakes,<br/>cash-flow underwriting, a clear path to graduate\"]\nR --> R2[\"Involve compliance and legal from day one: fair lending tests,<br/>clear disclosures, identity and anti-money-laundering checks\"]\nR --> R3[\"Pilot in 2 markets with community partners, then scale on gates\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C1,C2 c1;\nclass L,L1,L2,L3 c2;\nclass E1,E2,E3,E4 c3;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
      "exampleCharts": [
        {
          "id": "lenses",
          "title": "How we assess it: two lenses",
          "note": "Green boxes are the business opportunity, red boxes are risk and compliance, each with a mitigation.",
          "code": "flowchart TD\nQ[\"New product for an underbanked segment\"] --> O[\"Lens 1: Business opportunity\"]\nQ --> RK[\"Lens 2: Risk and compliance\"]\n\nO --> O1[\"Size: 15M adults, 1.35M interested, 54K ours\"]\nO --> O2[\"Need: low fees, fast access to money, small credit<br/>that builds a history\"]\nO --> O3[\"Right to win: trust, mobile app, partners,<br/>data from existing accounts\"]\nO --> O4[\"Economics: $165 a year per customer including graduation\"]\n\nRK --> R1[\"Credit risk: thin files, higher losses<br/>Mitigate: small limits, cash-flow data, step-up limits\"]\nRK --> R2[\"Fair lending: models must not treat groups unfairly<br/>Mitigate: test outcomes by group, explain decisions\"]\nRK --> R3[\"Fees and conduct: do not profit from customer mistakes<br/>Mitigate: no surprise fees, plain-language terms\"]\nRK --> R4[\"Identity and anti-money-laundering: thin documents<br/>Mitigate: layered checks that do not block honest customers\"]\nRK --> R5[\"Reputation and data privacy: label and use of alternative data<br/>Mitigate: clear consent, limit data use, regular review\"]\n\nO1 --> D{\"Decision\"}\nO2 --> D\nO3 --> D\nO4 --> D\nR1 --> D\nR2 --> D\nR3 --> D\nR4 --> D\nR5 --> D\nD --> G[\"Go, with a pilot and gates:<br/>loss rate, complaints, fair-lending results, graduation rate\"]\n\nclassDef q fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef opp fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef risk fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass Q,D q;\nclass O,O1,O2,O3,O4 opp;\nclass RK,R1,R2,R3,R4,R5 risk;\nclass G out;"
        },
        {
          "id": "money",
          "title": "The money: base case, graduation and what-ifs",
          "note": "Green is the base case, orange is a weaker case, red is the danger case.",
          "code": "flowchart TD\nB[\"Assumed per customer per year: revenue $250 (interchange $60, deposit value $50, small credit $140)<br/>Cost $160 (servicing $40, losses $90, compliance and support $30)<br/>Profit = $90. Fixed cost $2.5M. Acquisition $80 each\"] --> D1[\"Direct profit<br/>54K x $90 = $4.86M a year\"]\nB --> G1[\"Graduation: 25% move to bigger products worth $300 a year<br/>13.5K x $300 = $4.05M, or $75 per customer\"]\nD1 --> T[\"Total = $4.86M + $4.05M - $2.5M fixed = $6.4M a year\"]\nG1 --> T\n\nB --> INV[\"Up-front cost<br/>Build and launch $6M + 54K x $80 = $4.3M<br/>Total $10.3M\"]\nT --> PB[\"Payback<br/>$10.3M / $6.4M = 1.6 years, about 19 months\"]\nINV --> PB\n\nT --> BE[\"Break-even customers<br/>$2.5M / $165 = about 15K<br/>28% of the 54K target\"]\n\nT --> S1[\"No graduation<br/>$4.86M - $2.5M = $2.4M a year<br/>Payback $10.3M / $2.4M = about 4.4 years\"]\nT --> S2[\"Credit losses double to $180<br/>Direct profit $0, graduation $4.05M - $2.5M = +$1.55M\"]\nT --> S3[\"Only 27K customers<br/>27K x $165 = $4.5M - $2.5M = +$1.96M\"]\n\nPB --> R[\"Go, with a path to graduation<br/>The key number to prove in the pilot is graduation, then losses\"]\nBE --> R\nS1 --> R\nS2 --> R\nS3 --> R\n\nclassDef base fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef good fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef mid fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef bad fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass B,INV base;\nclass D1,G1,T,PB,BE good;\nclass S2,S3 mid;\nclass S1 bad;\nclass R out;"
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
              "Define underbanked, the product and the goal",
              "The segment and product shape both the risk and the profit",
              "Little access to mainstream banking; low-fee account and small credit; success = profit plus fair treatment"
            ],
            [
              "L Lay out",
              "Say your two lenses and three areas",
              "Shows structure and lets the interviewer steer",
              "Opportunity, economics, risk and compliance"
            ],
            [
              "E Evaluate",
              "Size the segment, then work out profit per customer",
              "A large segment is not a profitable one",
              "54K customers, $165 a year each, $6.4M a year after fixed cost"
            ],
            [
              "A Assess",
              "Find payback, break-even and what the case depends on",
              "Shows which assumption matters most",
              "Graduation drives the case; break-even about 15K customers"
            ],
            [
              "R Recommend",
              "Give a decision with design rules and a pilot",
              "Interviewers want a decision and safeguards",
              "Go, fee-light, compliance from day one, pilot in 2 markets"
            ]
          ]
        },
        {
          "title": "Plain-English glossary",
          "headers": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "Underbanked",
              "People who have limited access to mainstream banking or credit, or use costly alternatives"
            ],
            [
              "Thin file",
              "A person with little credit history"
            ],
            [
              "Cash-flow underwriting",
              "Judging a customer by money in and out of their account, useful with no credit history"
            ],
            [
              "Graduation",
              "A customer moving up to bigger, more profitable products"
            ],
            [
              "Fair lending",
              "Rules that require similar customers to be treated fairly, regardless of protected traits"
            ],
            [
              "Disparate impact",
              "A rule that looks neutral but harms one group more than another"
            ],
            [
              "Fee-light",
              "Designed so the bank does not depend on penalty fees for profit"
            ],
            [
              "KYC / anti-money-laundering",
              "Checks to confirm who the customer is and prevent illegal use of accounts"
            ],
            [
              "Alternative data",
              "Information other than credit scores, such as rent or utility payments"
            ],
            [
              "Pilot",
              "A small, real test before a full launch"
            ]
          ]
        },
        {
          "title": "The math, one step at a time",
          "headers": [
            "Step",
            "Calculation"
          ],
          "rows": [
            [
              "1",
              "Reachable: 15M x 60% = 9M. Interested: 9M x 15% = 1.35M. Our share: 1.35M x 4% = 54K customers."
            ],
            [
              "2",
              "Profit per customer: revenue $250 - cost $160 = $90 a year."
            ],
            [
              "3",
              "Direct profit: 54K x $90 = $4.86M a year."
            ],
            [
              "4",
              "Graduation: 25% x 54K = 13.5K customers x $300 = $4.05M a year, or $75 per customer."
            ],
            [
              "5",
              "Total: $4.86M + $4.05M = $8.9M, minus $2.5M fixed = $6.4M a year."
            ],
            [
              "6",
              "Up-front cost: $6M + 54K x $80 = $4.3M, total $10.3M. Payback = $10.3M / $6.4M = 1.6 years, about 19 months."
            ],
            [
              "7",
              "Break-even customers: $2.5M / ($90 + $75 = $165) = about 15K, which is 28% of the target."
            ],
            [
              "8",
              "No graduation: $4.86M - $2.5M = $2.4M a year. Payback = $10.3M / $2.4M = about 4.4 years."
            ],
            [
              "9",
              "Credit losses double to $180: direct profit = $250 - ($40 + $180 + $30) = $0. Graduation $4.05M - $2.5M fixed = +$1.55M a year."
            ],
            [
              "10",
              "Only 27K customers: 27K x $165 = $4.5M, minus $2.5M = +$1.96M a year."
            ]
          ]
        }
      ],
      "table": {
        "title": "Opportunity and risk checklist: questions to ask",
        "headers": [
          "Question",
          "What to look at",
          "Typical problem",
          "Response"
        ],
        "rows": [
          [
            "How big is the segment?",
            "Population, accounts, current services used",
            "Overstating who is reachable",
            "Narrow to those who can use the product"
          ],
          [
            "What do they need?",
            "Costs they pay today, reasons for avoiding banks",
            "Product does not fit real needs",
            "Interview customers, test with partners"
          ],
          [
            "Can we win?",
            "Trust, partners, app, data",
            "Low trust in banks",
            "Community partners, simple and fair terms"
          ],
          [
            "Does it make money?",
            "Profit per customer, graduation, fixed cost",
            "Fees are the profit source",
            "Design a fee-light model with a graduation path"
          ],
          [
            "Is credit risk managed?",
            "Loss rates, limits, data used",
            "Thin files hide risk",
            "Small limits, cash-flow data, step-up"
          ],
          [
            "Is it fair and lawful?",
            "Fair lending tests, disclosures, complaints",
            "Disparate impact, unclear terms",
            "Test by group, plain language, legal review"
          ],
          [
            "Who is protected?",
            "Vulnerable customers, consent, data use",
            "Harm to people with little cushion",
            "Safeguards, clear consent, ongoing review"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "How do you make the product profitable without penalty fees?",
        "a": "Use interchange, deposit value and small-dollar credit with fair pricing, and rely on graduation to bigger products for most of the long-term profit."
      },
      {
        "q": "How would you underwrite customers with thin files?",
        "a": "Use cash-flow data from their account, small starting limits and step-up limits as they pay on time, and test the model for fair outcomes."
      },
      {
        "q": "What would make you stop or redesign?",
        "a": "Loss rates well above plan, complaints about fees or terms, unfair model results across groups, or graduation far below the level the case needs."
      },
      {
        "q": "Who should be involved in the launch?",
        "a": "Compliance, legal, risk, product and community partners from the start, not only at the end."
      }
    ],
    "pitfalls": [
      "Treating underbanked as a pure risk. Many customers are reliable and under-served; the opportunity is real.",
      "Making money from fees. A model that depends on penalty fees creates conduct and reputation risk.",
      "Skipping fairness tests. Check outcomes across groups and explain decisions.",
      "Ignoring graduation. The case often depends on moving customers to better products.",
      "Leaving compliance to the end. Involve legal and compliance from the start."
    ]
  }
];
