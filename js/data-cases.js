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
                      "Let me make sure I understand. The bank has a spending-insights feature at 25% adoption, and the team wants $2M to push it to 40%, with payback under 18 months. Two quick questions: how was it launched, and what does one customer earn?"
                ],
                [
                      "L: Lay out",
                      "I would look at four things. First, is the evidence causal. Second, the value per customer. Third, the math for scaling it. Fourth, the risks. I will start with causality, because the team's evidence compares adopters with non-adopters."
                ],
                [
                      "E: Evaluate",
                      "Adopters spend $1,600 more, but people who choose a budgeting feature were already more careful with money. The random holdout shows the real effect is $45 per offered customer. Only 25% adopted, so that is about $180 per adopter. The raw gap overstated the effect about 9 times."
                ],
                [
                      "A: Assess",
                      "Across 4M customers the feature adds about $6.6M a year from spend, retention and fewer calls, or $5.1M after running costs. Each adoption point is worth about $0.27M, so 15 more points is about $4M. New adopters are probably less engaged, so I would haircut that by half to $2M a year. That pays back the $2M in about 12 months."
                ],
                [
                      "R: Recommend",
                      "Yes, but in stages. Test the promotion on half of the non-adopters for 8 weeks and scale only if each new adopter delivers at least half of today's benefit. The main risk is that new adopters respond less, so I would keep the original holdout running and watch complaints and delinquency."
                ]
          ],
          "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Decide on a $2M promotion to lift adoption from 25% to 40%<br/>Payback under 18 months\"]\nC --> C2[\"Facts: 4M app customers, random 5% holdout\"]\n\nC2 --> L[\"L: Lay out<br/>1 Is the evidence causal?<br/>2 Value per customer<br/>3 Scale-up math<br/>4 Risks\"]\n\nL --> E1[\"E: Evaluate<br/>Naive gap: adopters spend $10,200 vs $8,600 = +$1,600\"]\nE1 --> E2[\"Holdout: +$45 per offered customer<br/>= +$180 per adopter (÷ 25% adoption)\"]\nE2 --> E3[\"Naive view overstated the effect about 9x\"]\n\nE3 --> A1[\"A: Assess<br/>Spend $3.6M + Retention $1.6M + Calls $1.44M = $6.6M a year\"]\nA1 --> A2[\"Less run cost $1.5M = $5.1M net a year\"]\nA2 --> A3[\"+15 adoption points x $0.27M = $4.0M<br/>50% haircut = $2.0M a year\"]\nA3 --> A4[\"Payback = $2M / $2M per year = 12 months\"]\n\nA4 --> R[\"R: Recommend<br/>Yes, in stages\"]\nR --> R1[\"Test on half of non-adopters for 8 weeks\"]\nR --> R2[\"Scale if benefit per new adopter is at least half of today's\"]\nR --> R3[\"Guardrails: complaints, delinquency, opt-outs\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C,C2 c1;\nclass L c2;\nclass E1,E2,E3 c3;\nclass A1,A2,A3,A4 c4;\nclass R,R1,R2,R3 c5;",
          "exampleCharts": [
                {
                      "id": "evaluate",
                      "title": "Evaluate: naive view vs. holdout",
                      "note": "Why the raw gap between adopters and non-adopters is misleading.",
                      "code": "flowchart TD\nQ[\"Does the feature cause more spend?\"]\nQ --> N[\"Naive view: compare adopters with non-adopters\"]\nQ --> H[\"Holdout view: compare offered vs not offered\"]\n\nN --> N1[\"Adopters: $10,200\"]\nN --> N2[\"Non-adopters: $8,600\"]\nN1 --> N3[\"Gap = +$1,600\"]\nN2 --> N3\nN3 --> N4[\"Problem: adopters were already more engaged (selection bias)\"]\n\nH --> H1[\"Offered: $9,045\"]\nH --> H2[\"Not offered: $9,000\"]\nH1 --> H3[\"Gap = +$45 per offered customer\"]\nH2 --> H3\nH3 --> H4[\"Only 25% adopted: $45 ÷ 25% = +$180 per adopter\"]\n\nN3 --> X[\"$1,600 ÷ $180 = naive view overstated the effect about 9x\"]\nH4 --> X\nX --> Z[\"Use the holdout number\"]\n\nclassDef q fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef naive fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef hold fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef result fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass Q q;\nclass N,N1,N2,N3,N4 naive;\nclass H,H1,H2,H3,H4 hold;\nclass X,Z result;"
                },
                {
                      "id": "impact",
                      "title": "Impact math: from three sources to the decision",
                      "note": "Each benefit source, the net, the scale-up, the haircut and the payback check.",
                      "code": "flowchart TD\nS1[\"Extra spend<br/>$45 x 4M = $180M x 2% = $3.6M\"] --> T[\"Total benefit<br/>$6.64M a year\"]\nS2[\"Retention<br/>0.1 pt x 4M = 4,000 accounts x $400 = $1.6M\"] --> T\nS3[\"Fewer calls<br/>4M x 1.2 x 3% = 144K calls x $10 = $1.44M\"] --> T\n\nT --> N[\"Net of $1.5M run cost<br/>= $5.1M a year\"]\nN --> P[\"Per adoption point<br/>$6.64M ÷ 25 = $0.27M\"]\nP --> G[\"Scale-up<br/>+15 points x $0.27M = $4.0M\"]\nG --> H[\"50% haircut<br/>= $2.0M a year\"]\nH --> PB[\"Payback<br/>$2M ÷ $2M per year = 12 months\"]\nPB --> D{\"Under the 18-month bar?\"}\nD --> Y[\"Yes: go, in stages\"]\n\nclassDef src fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef calc fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef dec fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;\nclassDef out fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass S1,S2,S3 src;\nclass T,N,P,G,H,PB calc;\nclass D dec;\nclass Y out;"
                }
          ],
          "exampleTables": [
                {
                      "title": "CLEAR applied to the product deep-dive steps",
                      "headers": [
                            "CLEAR step",
                            "Product deep-dive step it uses",
                            "In this case"
                      ],
                      "rows": [
                            [
                                  "Clarify",
                                  "Restate the product, ask the objective",
                                  "A free feature costing $1.5M a year. The decision is a $2M promotion, with payback under 18 months."
                            ],
                            [
                                  "Lay out",
                                  "Customer, economics, measurement, risk",
                                  "Causal evidence, value per customer, scale-up math, risks"
                            ],
                            [
                                  "Evaluate",
                                  "Measure with a test, not adopters vs. non-adopters",
                                  "The holdout shows +$180 per adopter, not the naive +$1,600"
                            ],
                            [
                                  "Assess",
                                  "Convert the effect to dollars",
                                  "$6.6M a year benefit, $5.1M net, about $2.0M a year from scaling after a haircut"
                            ],
                            [
                                  "Recommend",
                                  "Staged action with guardrails",
                                  "Yes, test on half of non-adopters first"
                            ]
                      ]
                },
                {
                      "title": "The impact math",
                      "headers": [
                            "Source",
                            "Logic",
                            "Value"
                      ],
                      "rows": [
                            [
                                  "Extra spend",
                                  "$45 x 4M = $180M spend x 2%",
                                  "$3.6M"
                            ],
                            [
                                  "Retention",
                                  "0.1 pt x 4M = 4,000 accounts x $400",
                                  "$1.6M"
                            ],
                            [
                                  "Fewer calls",
                                  "4M x 1.2 calls x 3% = 144K calls x $10",
                                  "$1.44M"
                            ],
                            [
                                  "Total benefit",
                                  "",
                                  "$6.6M a year"
                            ],
                            [
                                  "Less running cost",
                                  "",
                                  "-$1.5M"
                            ],
                            [
                                  "Net",
                                  "",
                                  "$5.1M a year"
                            ],
                            [
                                  "Scale-up (+15 points)",
                                  "$6.64M / 25 = $0.27M per point x 15",
                                  "$4.0M"
                            ],
                            [
                                  "After 50% haircut",
                                  "New adopters are less engaged",
                                  "$2.0M a year"
                            ],
                            [
                                  "Payback",
                                  "$2M / $2M per year",
                                  "12 months"
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
  }
];
