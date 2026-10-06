// Case studies. All numbers in each case are internally consistent (checked in verify step).
window.DATA = window.DATA || {};

DATA.cases = [
  {
    "id": "park-profit",
    "title": "Amusement Park Profitability",
    "track": [
      "banking",
      "consulting"
    ],
    "framework": "profitability",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "You are advising the CEO of a 2,000-acre amusement park with $150M in annual revenue and 3M visitors a year. Attendance is stable but costs are rising and profit is shrinking. The board wants profit up 20 to 30% within 18 months and is asking whether to lease 1,000 additional acres. What do you recommend?",
    "clarify": [
      {
        "q": "What profit measure, target and capital?",
        "a": "EBITDA, currently $48.6M. Target is +20 to 30% (about $9.7M to $14.6M) within 18 months. About $15M of capital is available."
      },
      {
        "q": "What changed recently?",
        "a": "Revenue is flat. Operating costs grew about 6% over two years, mostly labor and maintenance."
      },
      {
        "q": "What does demand look like through the year?",
        "a": "300 operating days. Summer (about 100 days) draws 60% of visitors. Off-season (about 200 days) draws 40%."
      },
      {
        "q": "What is ride capacity, and how full does it get?",
        "a": "40,000 visitors a day. Summer weekends reach about 36,000 (90%) on about 30 days. Off-season weekdays are around 4,000 (10%)."
      },
      {
        "q": "How many people are turned away on the busiest days?",
        "a": "About 4,000 a day on those 30 days. Assume we keep about 50% of the revenue from extra visitors, at $50 each."
      },
      {
        "q": "What would the lease cost?",
        "a": "$2M a year in rent, plus about $10M to build attractions on the new land."
      },
      {
        "q": "How are prices set today?",
        "a": "Essentially one price all year, with heavy promotions. No demand-based pricing."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Profit measure and target",
            "EBITDA $48.6M. Target +20 to 30% in 18 months",
            "= +$9.7M to +$14.6M"
          ],
          [
            "Capital available",
            "$15M",
            ""
          ],
          [
            "Revenue",
            "$150M, which is $50 per visitor",
            "Gate $25, food and drink $15, retail $6, other $4"
          ],
          [
            "Operating cost",
            "$101.4M",
            "Labor $54M, goods sold $18.9M, utilities and upkeep $15M, marketing $9M, insurance $4.5M"
          ],
          [
            "Visitors and capacity",
            "3M a year over 300 days = 10,000 a day. Capacity 40,000 a day",
            "25% used on average"
          ],
          [
            "Busy and quiet days",
            "About 30 summer weekend days at 36,000 (90%). About 200 off-season days at about 4,000 (10%)",
            ""
          ],
          [
            "Turned away on peak days",
            "About 4,000 a day",
            "Assumed"
          ],
          [
            "Margin on extra visitors",
            "About 50%",
            "Assumed"
          ],
          [
            "Lease",
            "$2M a year rent. About $10M to build attractions",
            "Assumed"
          ],
          [
            "Pricing today",
            "About one price all year, with heavy promotions",
            "No pricing by demand"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So we have a 2,000-acre park with $150M of revenue, 3M visitors and about $48.6M of EBITDA. The board wants profit up 20 to 30% in 18 months, which is $9.7M to $14.6M, and is asking about leasing 1,000 more acres. I have $15M of capital. Before I start: how does demand vary through the year, how are prices set today, and what would the lease and build cost? If you do not have them, I will assume."
        ],
        [
          "L: Lay out",
          "I will ask two questions: do we need more land, and can we grow profit without it? On the second, I would look at price, spend per visitor and volume, and then costs."
        ],
        [
          "E: Evaluate",
          "We use only 25% of capacity on average: 10,000 visitors a day against 40,000. Summer weekends are full, but that is about 30 days. If 4,000 people are turned away on those days at $50 each, that is $6M of revenue, and about $3M of profit. Without land, I see five ideas: pricing $3.0M, food and drink $4.1M, premium tickets $3.0M, off-season events $2.7M and cost savings $3.0M. That is $15.8M."
        ],
        [
          "A: Assess",
          "I would not count on all of it. At 70% that is about $11M, up 23%, inside the target. The lease earns about $3M but costs $2M a year in rent, so $1M a year. A $10M build then takes 10 years to pay back. It also does nothing for the 200 quiet days."
        ],
        [
          "R: Recommend",
          "Do not lease now. Two reasons: the ideas reach the target without land, and the lease pays back too slowly. Start with pricing and cost savings because they are fast and cheap, then food and premium, then off-season events. Recheck land after 12 months, and lease only if more than about 5,000 visitors a day are turned away. Risks are customer backlash on prices and labor. If you wanted a more aggressive answer, I would lease only if a high-margin use such as a hotel also fills the quiet days."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Park earns $48.6M EBITDA. Board wants +20 to 30%<br/>and asks about leasing 1,000 acres\"]\nC --> L[\"L: Lay out<br/>1 Do we need more land?<br/>2 Can we grow profit without it?\"]\nL --> E[\"E: Evaluate<br/>Check the land, then size the ideas\"]\nE --> E1[\"Land<br/>Average use 25%, full on only 30 days<br/>4,000 turned away x 30 x $50 = $6M<br/>x 50% = $3M\"]\nE --> E2[\"Ideas<br/>Pricing $3.0M, food $4.1M, premium $3.0M<br/>off-season $2.7M, costs $3.0M = $15.8M\"]\nE --> E3[\"Reality check<br/>Expect 70% = $11M, which is +23%<br/>Target is +$9.7M to +$14.6M\"]\nE1 --> A[\"A: Assess<br/>Lease nets $1M a year after $2M rent<br/>$10M build pays back in 10 years\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Do not lease now. Do the ideas first.<br/>Look at land again in 12 months\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Where we are<br/>Revenue $150M - cost $101.4M<br/>= <b>$48.6M profit (EBITDA)</b><br/>Target +20 to 30% = <b>+$9.7M to +$14.6M</b>\"]\nA --> B[\"2 Do we need more land?<br/>3M visitors / 300 days = 10,000 a day<br/>vs 40,000 capacity = <b>25% used</b>\"]\nB --> B1[\"Full on only 30 summer days<br/>4,000 turned away a day\"]\nB1 --> B2[\"4,000 x 30 days x $50 = $6M revenue<br/>x 50% margin = <b>$3M profit</b>\"]\nA --> C[\"3 Ideas without land, profit in $M\"]\nC --> C1[\"Pricing<br/>4% x $75M gate<br/>= <b>$3.0M</b>\"]\nC --> C2[\"Food and drink<br/>+$3 x 3M = $9M<br/>x 45% = <b>$4.1M</b>\"]\nC --> C3[\"Premium tickets<br/>$4M x 75%<br/>= <b>$3.0M</b>\"]\nC --> C4[\"Off-season events<br/>120K x $50 = $6M<br/>x 45% = <b>$2.7M</b>\"]\nC --> C5[\"Cost savings<br/>3% x $101.4M<br/>= <b>$3.0M</b>\"]\nC1 --> D[\"Total $15.8M<br/>x 70% we actually get<br/>= <b>$11M, which is +23%</b>\"]\nC2 --> D\nC3 --> D\nC4 --> D\nC5 --> D\nD --> E[\"4 Compare the lease<br/>$3M profit - $2M rent = <b>$1M a year</b><br/>$10M build / $1M = <b>10-year payback</b>\"]\nB2 --> E\nE --> F1[\"Needed to pay back in 5 years<br/>5,333 turned away a day, not 4,000\"]\nD --> F2[\"Needed for +20%<br/>61% of the ideas, not 70%\"]\nD --> F3[\"If pricing backlash kills that idea<br/>$12.8M x 70% = $9.0M, +18%\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,B1,B2 n1;\nclass C,C1,C2,C3,C4,C5 n2;\nclass D n3;\nclass E n4;\nclass F1,F2,F3 n1;"
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
              "Profit measure, target, capital, busy and quiet days, capacity, pricing, lease cost"
            ],
            [
              "L Lay out",
              "Say your two questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Do we need more land? Can we grow profit without it?"
            ],
            [
              "E Evaluate",
              "Do the math out loud in short steps, with units",
              "The interview has several separate math problems, often with algebra",
              "Land is full on 30 days only. Five ideas add up to $15.8M"
            ],
            [
              "A Assess",
              "Say what the numbers mean: what you will really get, payback, break-even",
              "Turns numbers into a business view",
              "70% of the ideas is about $11M, inside the target. The lease pays back in 10 years"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "No lease now. A defensible alternative: lease if turned-away visitors are much higher"
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
              "How much profit do we make, and what is the target?",
              "$150M revenue - $101.4M cost = $48.6M. 20% to 30% of $48.6M",
              "+$9.7M to +$14.6M"
            ],
            [
              "2",
              "Is land really the problem?",
              "3M visitors / 300 days = 10,000 a day. Capacity is 40,000. 10,000 / 40,000. Only about 30 summer days are full",
              "25% used on average"
            ],
            [
              "3",
              "What would more land earn?",
              "4,000 turned away x 30 days x $50 = $6M revenue. We keep about 50% of it",
              "$3M profit at best"
            ],
            [
              "4",
              "What do the five ideas earn?",
              "Pricing $3.0M + food $4.1M + premium $3.0M + off-season $2.7M + costs $3.0M",
              "$15.8M"
            ],
            [
              "5",
              "How much will we really get?",
              "$15.8M x 70% (not every idea works fully). Compare with $48.6M",
              "About $11M, +23%"
            ],
            [
              "6",
              "Does the lease pay for itself?",
              "$3M profit - $2M rent = $1M a year. Build cost $10M. $10M / $1M",
              "10 years"
            ]
          ]
        },
        {
          "title": "Try changing one number",
          "headers": [
            "If this changes...",
            "Profit gain",
            "What it tells you"
          ],
          "rows": [
            [
              "We get all 100% of the ideas",
              "+$15.8M (+32%)",
              "Above the target. Good, but do not promise it."
            ],
            [
              "We get only 50% of the ideas",
              "+$7.9M (+16%)",
              "Below the target. We would need more ideas or a longer timeline."
            ],
            [
              "Pricing backlash kills the pricing idea",
              "+$9.0M (+18%)",
              "($15.8M - $3.0M) x 70%. Slightly below target."
            ],
            [
              "Turned-away visitors are 3 times higher (12,000 a day)",
              "Lease profit: $9M - $2M rent = $7M",
              "$10M pays back in about 1.4 years. Now worth a look."
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
              "What share of the ideas must work to reach +20%?",
              "15.8M x r = 20% x 48.6M = 9.72M",
              "r = 9.72 / 15.8 = 61.5%. At +30% (14.58M) it is 92%"
            ],
            [
              "If pricing fails, what share of the other ideas must work for +20%?",
              "12.8M x r = 9.72M",
              "r = 9.72 / 12.8 = 76%"
            ],
            [
              "If only food and drink changed, how much more must each visitor spend for +20%?",
              "x per visitor x 3M visitors x 45% = 9.72M",
              "x = 9.72M / 1.35M = $7.20 more per visitor"
            ],
            [
              "How many visitors a day must be turned away for the lease to pay back in 5 years?",
              "Need $10M / 5 = $2M a year. 30 days x $50 x 50% x n - $2M rent = $2M",
              "750 n = $4M, so n = 5,333 a day"
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
              "Customer backlash on prices",
              "Visitors may dislike paying more on busy days",
              "Raise prices only on peak days, online, and protect season-pass holders"
            ],
            [
              "Ideas deliver less than planned",
              "Most plans fall short of the full number",
              "Plan for 70%, track each idea monthly, and keep spare ideas ready"
            ],
            [
              "Labor shortage",
              "More food, events and visitors need more staff",
              "Hire and train early; schedule staff by expected crowds"
            ],
            [
              "Quality drops on full days",
              "Long queues and crowding hurt reviews and repeat visits",
              "Watch wait times and satisfaction scores on peak days"
            ],
            [
              "Spending too much capital",
              "Building too early ties up cash",
              "Start with cheap ideas first and release capital in stages"
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
              "EBITDA",
              "Profit from running the park, before depreciation, interest and tax"
            ],
            [
              "Utilization",
              "How much of the capacity is used. 10,000 visitors a day out of 40,000 = 25%"
            ],
            [
              "Yield pricing",
              "Charging more when demand is high and less when it is low"
            ],
            [
              "Flow-through",
              "How much of extra revenue turns into profit. 50% means 50 cents of each dollar"
            ],
            [
              "Realization (haircut)",
              "The share of a plan that we actually expect to get, such as 70%"
            ],
            [
              "Payback",
              "Years it takes for the profit to repay the cost"
            ],
            [
              "Peak and off-season",
              "Peak is the busy summer days. Off-season is the quiet days"
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
              "Jumping to the lease",
              "First check whether land is actually full. Here it is full on only 30 days."
            ],
            [
              "Using one blended price and margin for everything",
              "Each part earns a different margin. Food is about 45%, tickets close to 100%."
            ],
            [
              "Presenting 100% as the plan",
              "Always haircut and show a range."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Which profit measure? What is the target? How much capital?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Busy and quiet days, capacity, turned-away visitors, lease and build cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume we keep 50% of the revenue from extra visitors'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Share needed = $9.72M / $15.8M = 61.5%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we do not lease now, because the land is full on only 30 days and the lease pays back in 10 years'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Customer backlash, ideas delivering less, labor; recheck land in 12 months"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Lease only if 5,000 or more visitors a day are turned away on peak days"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not just raise gate prices across the board?",
        "a": "Demand is very uneven. Peak days are full and can bear higher prices; off-season days need lower prices to stimulate volume. A flat increase hurts the days you want to fill and under-charges the days that sell out. Test elasticity by day type first."
      },
      {
        "q": "How confident are you in the F&B number?",
        "a": "Medium. It rests on conversion (queues, locations) and mix. I would pilot at the highest-queue locations, measure spend per visitor and flow-through, and scale only if margin holds above ~40%."
      },
      {
        "q": "What if a competitor matches your pricing?",
        "a": "Yield management is hard to copy well because it needs data on demand by day. The bigger moat is the season-pass base and loyalty. I would watch visitor share by day type and keep a response plan for promotions."
      },
      {
        "q": "What would change your mind about leasing?",
        "a": "Evidence that unmet peak demand is much larger than 4,000 per day, or a high-margin non-park use for the land (water park, hotel) with payback under about 5 years and a way to also fill off-season days."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Turned-away visitors by day for the last two summers, price tests by day type, spend per visitor by area, and queue times on the busiest days."
      }
    ],
    "pitfalls": [
      "Jumping to the lease. First check whether land is actually full. Here it is full on only 30 days.",
      "Using one blended price and margin for everything. Each part earns a different margin. Food is about 45%, tickets close to 100%.",
      "Presenting 100% as the plan. Always haircut and show a range.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
    ]
  },
  {
    "id": "ecom-retention",
    "title": "E-commerce Retention Decline",
    "track": [
      "tech",
      "banking"
    ],
    "framework": "retention",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "An e-commerce platform's monthly retention fell from 65% to 55% over six months. Marketing spent an extra $500K on acquisition, yet profit is falling. Find the root cause and recommend actions.",
    "clarify": [
      {
        "q": "How is retention defined, and how many users do we have?",
        "a": "Retention is the share of last month's active users who place at least one order this month. We have 480K active users now and had 500K six months ago. One point is 4,800 users."
      },
      {
        "q": "Do customers acquired a year or more ago retain differently than before?",
        "a": "No. They retain at about 66%, within 1 point of six months ago."
      },
      {
        "q": "What about newer customers?",
        "a": "Customers under 6 months old retained 61% before and 44% now. They were 20% of the base and are now 50%."
      },
      {
        "q": "What changed in acquisition?",
        "a": "We spend an extra $500K a month, moved toward paid social and coupon channels. CAC went from $12 to $15 to $18 by cohort. Month-3 retention of those cohorts went 72%, 68%, 60%."
      },
      {
        "q": "Any product or operations change? Any competition?",
        "a": "No product change. Support tickets are up 22%, mostly in the first 60 days. Category retention is about 60% and there is no major new entrant."
      },
      {
        "q": "What is a retained user worth?",
        "a": "About $40 of sales a month and 25% profit, so $10 a month or $120 a year."
      },
      {
        "q": "What is the goal and the budget for a fix?",
        "a": "Get back toward 60%. An onboarding and second-order program would cost about $1.2M a year."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal",
            "Find the root cause and get retention back toward the category average of 60%",
            "Retention is now 55%"
          ],
          [
            "Retention and users",
            "Share of last month's active users who order this month. 480K active now, 500K six months ago",
            "1 point = 4,800 users"
          ],
          [
            "Old customers (12+ months)",
            "About 66% before and now",
            "Within 1 point of six months ago"
          ],
          [
            "New customers (under 6 months)",
            "61% before, 44% now. Share of the base 20% before, 50% now",
            "Mix of the base changed a lot"
          ],
          [
            "Acquisition",
            "Extra $500K a month. CAC $12, $15, $18 by cohort. Month-3 retention 72%, 68%, 60%",
            "Blended LTV $150 to $130, so LTV to CAC 12.5 to 7.2"
          ],
          [
            "Value of a user",
            "$40 sales a month, 25% profit = $10 a month",
            "$120 a year (assumed)"
          ],
          [
            "Fix cost",
            "$1.2M a year for onboarding and second-order program",
            "Assumed"
          ],
          [
            "Support",
            "Tickets up 22%, mostly in the first 60 days",
            ""
          ],
          [
            "Competition",
            "Category retention about 60%. No major new entrant",
            ""
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "How is retention defined? What is a retained user worth? What is the fix budget?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Old versus new customers, CAC by cohort, support tickets, category retention"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume a retained user earns $10 profit a month'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "0.5 x 66 + 0.5 x 44 = 55. New retention needed for 60% = 54%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we fix new-customer quality, because 85% of the drop is there and the fix breaks even at 2.1 points'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Wrong cause, partial fix, growth slows; run a holdout by channel first"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Fix onboarding only and keep acquisition if the channel test shows no gap"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "How would you validate the channel hypothesis?",
        "a": "Join users to acquisition source, compare 90-day retention and revenue by source, and run a geo or audience holdout where a suspect channel is paused."
      },
      {
        "q": "What if old cohorts were also declining?",
        "a": "Then it would be a product or market problem: look at delivery times, assortment, pricing and competitor activity, and cut old cohorts by tenure to find when the drop began."
      },
      {
        "q": "Should we stop acquiring low-value users?",
        "a": "Not necessarily. Acquire them only at a CAC that pays back within a threshold (e.g., 6 months) given their expected LTV, and treat them differently in lifecycle marketing."
      },
      {
        "q": "What metric would you put on the executive dashboard?",
        "a": "Cohort retention curves, LTV : CAC and payback by channel, and share of new users placing a second order within 30 days."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Retention by acquisition channel for the last three cohorts, share of new users who place a second order in 30 days, tickets per new user, and 90-day LTV to CAC by channel."
      }
    ],
    "pitfalls": [
      "Declaring a root cause before testing old versus new customers. Split the data first. Here old customers are flat, so the product is not the problem.",
      "Calling LTV to CAC healthy without looking at the trend. It fell from 12.5 to 7.2. Check by channel, because the newest channels are worse than the average.",
      "Mixing 'retention of the base' with 'cohort retention'. State your definition at the start and use it the whole way.",
      "Looking only at the overall number. Overall 55% hides old at 66% and new at 44%. Always split.",
      "Skipping the break-even. Say what the fix costs and how many users it needs. Here, 10K users or 2.1 points.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case."
    ]
  },
  {
    "id": "card-profit",
    "title": "Credit Card Profit Decline",
    "track": [
      "banking"
    ],
    "framework": "unit",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "A credit card issuer has 5M accounts, flat year over year. Portfolio profit fell from $500M to $400M. Credit losses actually improved. What is going on and what would you do?",
    "clarify": [
      {
        "q": "Is the account count or mix stable?",
        "a": "Accounts are flat at 5M. Spend per account is flat at about $7,500 a year. The mix of revolvers and transactors is stable."
      },
      {
        "q": "What happened to interest rates and funding cost?",
        "a": "Our funding cost rose over the year, from 2.4% to 3.0% of a $2,500 average balance. Customer APRs are mostly variable but reprice with a lag. Promo balances do not reprice."
      },
      {
        "q": "Any competitive changes?",
        "a": "Rivals raised rewards rates. We matched on our flagship card."
      },
      {
        "q": "Any change in fees?",
        "a": "Fee income fell from $40 to $35 per account after a rule change on late fees and changes in customer behavior."
      },
      {
        "q": "What does profit per account look like by line?",
        "a": "Revenue is $520 both years. Costs went from $420 to $440. Funding $60 to $75, rewards $110 to $120, credit loss $120 to $115, operating $100, marketing $30."
      },
      {
        "q": "What is the goal and the time frame?",
        "a": "Win back at least $50M, which is $10 per account, within 12 months, without raising credit risk."
      },
      {
        "q": "Do we have an estimate of what each fix is worth?",
        "a": "Yes. Per account: repricing $5 to $8, targeted rewards $4 to $6, fee and tier review $2 to $3."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Accounts and profit",
            "5M accounts, flat. Profit $500M to $400M",
            "$100 to $80 per account. $1 per account = $5M"
          ],
          [
            "Revenue per account",
            "$520 both years",
            "Interest $330 to $335, interchange $150, fees $40 to $35"
          ],
          [
            "Costs per account",
            "$420 to $440",
            "Funding $60 to $75, rewards $110 to $120, credit loss $120 to $115, operating $100, marketing $30"
          ],
          [
            "Average balance",
            "$2,500 per account",
            "Funding 2.4% to 3.0% of balance, interest yield about 13.4%"
          ],
          [
            "Spend",
            "$7,500 per account a year",
            "Interchange is 2.0% of spend"
          ],
          [
            "Rates and APRs",
            "APRs are mostly variable and reprice with a lag",
            "Promo balances do not reprice"
          ],
          [
            "Competition",
            "Rivals raised rewards. We matched on the flagship card",
            ""
          ],
          [
            "Goal",
            "Win back at least $50M within 12 months",
            "Without raising credit risk"
          ],
          [
            "Lever sizes (per account)",
            "Repricing $5 to $8, rewards $4 to $6, fees $2 to $3",
            "Team estimate"
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Are accounts and mix stable? What happened to rates? What is the goal?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Profit per account by line, average balance, spend per account"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume the fix levers are worth $11 to $17 per account'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "+5 -5 -15 -10 +5 = -20. -20 x 5M = -$100M"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we recover margin and leave underwriting alone, because costs, not credit, caused the drop'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Attrition after rewards changes, fee rules, rising rates; test by segment"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Reprice and fees only: $7 to $11 per account, $35M to $55M"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "How would you know if rewards cuts hurt retention?",
        "a": "Run a controlled rollout by segment with a holdout, and track spend per account, attrition and active rate. Cuts that move low-spend accounts barely affect profit but save cost; cuts for top spenders risk attrition."
      },
      {
        "q": "What if interest income per account fell instead of rose?",
        "a": "I would look at balance and revolve rate (mix between revolvers and transactors), promo balances, APR mix and delinquency-driven non-accrual."
      },
      {
        "q": "How do credit losses relate to funding cost?",
        "a": "Independent drivers in the P&L but linked in strategy: higher rates stress customers, so I would watch early delinquency as a leading indicator and avoid cutting loss provisions based on one good year."
      },
      {
        "q": "Which single number would you show the CEO?",
        "a": "Profit per account bridge: $100 to $80, with funding -$15, rewards -$10, fees -$5, interest +$5, credit +$5."
      }
    ],
    "pitfalls": [
      "Assuming credit losses must be the cause. Look at every line. Here credit losses improved by $5.",
      "Looking only at the portfolio total. Work per account first ($100 to $80), then multiply by 5M.",
      "Not reconciling the bridge back to $100M. Add up every line: +5 -5 -15 -10 +5 = -20, and -20 x 5M = -$100M.",
      "Presenting the full fix as the plan. Haircut it and show a range, such as 60% of the midpoint.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Forgetting what could go wrong. Name attrition, fee rules and rates, and say how you will test."
    ]
  },
  {
    "id": "grocery-entry",
    "title": "Grocery Chain: Launch Delivery?",
    "track": [
      "consulting"
    ],
    "framework": "entry",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "A regional grocery chain with 40 stores in one metro area is considering launching home delivery. It would invest $25M. Should it go?",
    "clarify": [
      {
        "q": "How big is the metro, and how many households order groceries online?",
        "a": "2M households. About 20% of them, 400K, order groceries online at least monthly."
      },
      {
        "q": "What is the goal and the timeline?",
        "a": "Payback of the $25M within 4 years, and no damage to the store business."
      },
      {
        "q": "What is the competition?",
        "a": "Two national players already deliver in the metro."
      },
      {
        "q": "How much of the online market could we win?",
        "a": "Assume 10% of online households by year 3, which is 40,000 households. They order about 2 times a month."
      },
      {
        "q": "What does one order look like?",
        "a": "Average basket $90 at a 25% gross margin, which is $22.50. Picking, packing and last mile cost about $11. Marketing and platform cost about $2."
      },
      {
        "q": "How fast would volume build up?",
        "a": "Assume 40% of full volume in year 1, 80% in year 2 and 100% from year 3."
      },
      {
        "q": "Would delivery take sales from our stores?",
        "a": "Assume 20% of delivery orders would have been a store trip, losing about $22.50 of store margin each."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and investment",
            "Invest $25M. Payback within 4 years. No damage to the store business",
            ""
          ],
          [
            "Market",
            "2M households. 20% order groceries online = 400K",
            "Two national players already deliver"
          ],
          [
            "Share we can win",
            "10% of online households by year 3 = 40,000",
            "Assumed"
          ],
          [
            "Orders",
            "2 per household per month = 960,000 a year",
            ""
          ],
          [
            "Basket and margin",
            "$90 basket. 25% gross margin = $22.50",
            ""
          ],
          [
            "Costs per order",
            "$11 picking, packing and last mile. $2 marketing and platform",
            "Contribution $9.50 before cannibalization"
          ],
          [
            "Ramp",
            "40% of full volume in year 1, 80% in year 2, 100% in year 3",
            "Assumed"
          ],
          [
            "Cannibalization",
            "20% of delivery orders would have been store trips",
            "Each loses $22.50 of store margin. Assumed"
          ],
          [
            "Our shoppers",
            "About 20% of households, or 400K",
            "Our current customers"
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What is the goal? How many households order online? What are the rivals doing?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Basket, margin, delivery cost, marketing cost, cannibalization"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume we win 10% of online households by year 3'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "960,000 x $9.50 = $9.12M. $25M / $9.12M = 2.7 years"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we pilot first, because payback is 2.7 years only if delivery does not take sales from our stores'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Cannibalization, lower share, delivery cost; pilot in 10 to 12 dense stores"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Partner with a delivery platform first and build only in dense zones"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "How would you reduce fulfillment cost?",
        "a": "Batch picking in stores with highest density, delivery windows to cluster routes, minimum basket or fee thresholds, and partnership with a gig platform for the last mile."
      },
      {
        "q": "Build vs. partner?",
        "a": "Partnering is faster and cheaper but gives away margin and customer data. Building has higher control and long-term margin but needs capital and capability. A phased approach: partner first, build in dense zones."
      },
      {
        "q": "How do competitors react?",
        "a": "Expect promotions and free-delivery offers. Differentiate on freshness, assortment of local brands and price perception, not on delivery fees."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Delivery orders that replace store trips in a pilot, cost per order by zone, repeat rate after the first order, and the promotions rivals run."
      }
    ],
    "pitfalls": [
      "Stopping at market size. Go on to profit per order and payback. Size alone does not answer the question.",
      "Ignoring cannibalization of store sales. Ask how many delivery orders replace a store trip. Here 20% cuts profit from $9.50 to $5.00.",
      "Not stating what would make you say no. Name your tests: share near 10%, delivery cost at or below $11, cannibalization at or below about 13%.",
      "Using full volume from day one. Show a ramp. 2.7 years at full run-rate becomes 3.5 years with a ramp.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case."
    ]
  },
  {
    "id": "dau-drop",
    "title": "Social App: DAU Down 8%",
    "track": [
      "tech"
    ],
    "framework": "metric",
    "difficulty": "Easy",
    "minutes": 20,
    "prompt": "Daily active users (DAU) of a social app fell 8% week over week. As the data analyst, how do you figure out what happened and what to do?",
    "clarify": [
      {
        "q": "How is DAU defined, and how big is the drop?",
        "a": "DAU is users with at least one session in a day. It was 10M last week and is 9.23M this week, down 0.77M, or 7.7%, about 8%."
      },
      {
        "q": "Is the data reliable? Any logging or definition change?",
        "a": "No changes to logging or the DAU definition. Backend dashboards agree with the data warehouse."
      },
      {
        "q": "Which segments are affected?",
        "a": "Android only. It is 55% of DAU (5.5M) and is down 14%. iOS (35%) and web (10%) are flat."
      },
      {
        "q": "When did it start?",
        "a": "On Tuesday, the day after Android release 8.4 reached 100% of users. It was released to everyone at once."
      },
      {
        "q": "What about new versus existing users?",
        "a": "New-user signups are normal. The drop is in existing users who open the app on fewer days per week."
      },
      {
        "q": "Where do sessions come from?",
        "a": "Sessions started from push notifications on Android fell about 35%. Organic app opens are flat."
      },
      {
        "q": "What is a user worth, and what is the goal?",
        "a": "Assume about $0.10 of ad revenue per DAU per day. The goal is to find the cause and recover DAU within a week."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Metric and size",
            "DAU is users with at least one session in a day. 10M last week, 9.23M this week",
            "-0.77M = -7.7%, about 8%"
          ],
          [
            "Data quality",
            "No logging or definition change",
            "Backend and warehouse agree"
          ],
          [
            "Android",
            "55% of DAU = 5.5M. Down 14%",
            "= 0.77M users lost"
          ],
          [
            "iOS and web",
            "iOS 35% = 3.5M. Web 10% = 1.0M. Both flat",
            ""
          ],
          [
            "Timing",
            "Release 8.4 reached 100% of Android users on Monday. The drop started Tuesday",
            "Shipped to 100% at once, no staged rollout (assumed)"
          ],
          [
            "Who",
            "Existing users open the app on fewer days. New signups are normal",
            ""
          ],
          [
            "Channel",
            "Push-started sessions on Android down 35%. Organic opens flat",
            ""
          ],
          [
            "Value of a user",
            "About $0.10 of ad revenue per DAU per day",
            "Assumed"
          ],
          [
            "Goal",
            "Find the cause and recover DAU within a week",
            ""
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "How is DAU defined? Any logging change? Which platform? When did it start?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "DAU by platform, release dates, push sessions, new versus existing users"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume each DAU earns about $0.10 a day'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "0.55 x 14% = 7.7 points. 14% / 35% = 40% from push"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we hotfix or roll back the push part of 8.4 now, because Android is the whole drop and it costs $77K a day'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Wrong cause, slow fix, lost users; compare 8.4 with older versions"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Pause the rollout and fix forward if rollback is risky"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if the drop were across all platforms?",
        "a": "Then I would suspect an external or backend cause: outage, seasonality, competitor launch, a ranking or feed-algorithm change, or acquisition changes. I would check day-of-week patterns and year-over-year seasonality."
      },
      {
        "q": "How would you size the revenue impact?",
        "a": "DAU lost x ad impressions per DAU x revenue per impression, per day, until fixed; compare with a counterfactual from iOS trend."
      },
      {
        "q": "How do you prevent this next time?",
        "a": "Staged rollouts, automatic guardrail alerts, and a release dashboard with notification and session metrics by version."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Push delivery rate, token registration and opt-in by app version, DAU by Android OS version, and any experiments running on Android at the same time."
      }
    ],
    "pitfalls": [
      "Brainstorming ten causes before looking at the data. Cut the data by platform, version and channel first. The data shows where to look.",
      "Forgetting to check data quality first. Ask about logging and definition changes first. Here both are clean.",
      "Not computing that Android explains the whole drop. Say 0.55 x 14% = 7.7 points, out loud.",
      "Stopping at the cause. Size the cost ($77K a day) and say how fast you must act.",
      "Giving a fix with no prevention. Add staged rollouts and push alerts so it does not happen again.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case."
    ]
  },
  {
    "id": "pump-maker",
    "title": "Industrial Pump Maker: Profit Down",
    "track": [
      "consulting"
    ],
    "framework": "profitability",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "A Midwest manufacturer of industrial pumps has flat revenue of $400M, but profit fell from $40M to $28M over two years. Find out why and recommend what to do.",
    "clarify": [
      {
        "q": "What is the goal and the timeline?",
        "a": "Get profit back toward $40M within 18 months. Anything near $36M or more would be a good result."
      },
      {
        "q": "What products do they sell, and how big is each?",
        "a": "Two lines. Premium is custom engineered pumps, $200M two years ago and $160M now. Standard is catalog pumps, $200M before and $240M now."
      },
      {
        "q": "What happened to prices?",
        "a": "Flat on both lines. Imports make it hard to raise Standard prices."
      },
      {
        "q": "What are the margins on each line?",
        "a": "Premium makes 30% after variable costs. Standard made 20% before and makes 16.7% now, which is $40M on $240M. Profit is contribution of $88M minus $60M of fixed cost."
      },
      {
        "q": "What happened to costs?",
        "a": "Steel and parts are about half of Standard's cost and are up 8%, which is about $8M a year. Fixed costs are $60M and unchanged."
      },
      {
        "q": "What is happening with customers and competitors?",
        "a": "Imports undercut the Standard line. Some Premium customers now buy cheaper catalog pumps. We think we can win back about $20M of Premium sales."
      },
      {
        "q": "What can we spend, and how much can we cut?",
        "a": "About $6M one time. Fixed costs could fall about 5%, which is $3M. Plan on getting 70% of any plan."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and timeline",
            "Get profit back toward $40M within 18 months",
            "At least $36M is a good result"
          ],
          [
            "Revenue",
            "$400M two years ago and now",
            "Premium $200M to $160M. Standard $200M to $240M"
          ],
          [
            "Margin by line",
            "Premium 30%. Standard 20% before, 16.7% now",
            "Contribution = revenue minus variable cost"
          ],
          [
            "Profit",
            "$40M two years ago, $28M now",
            "Fixed costs $60M, unchanged"
          ],
          [
            "Prices",
            "Flat on both lines",
            "Imports stop us raising Standard prices"
          ],
          [
            "Steel and parts",
            "About half of Standard cost, up 8%",
            "Costs about $8M a year"
          ],
          [
            "Premium customers",
            "Some move to cheaper catalog pumps",
            "Could win back about $20M"
          ],
          [
            "One-time cost of fixes",
            "About $6M",
            "Assumed. Sourcing work and sales team"
          ],
          [
            "Fixed cost savings",
            "About 5% of $60M is possible",
            "Assumed. About $3M"
          ],
          [
            "Share of plan we expect",
            "70%",
            "Assumed haircut"
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What is the goal? Which lines? What happened to price and cost?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Sales and margin by line, steel cost, one-time budget"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume we get 70% of the plan'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Share needed = $12M / $14.6M = 82%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we fix Standard price and steel cost first and win back Premium'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Surcharge pushback, steel prices, Premium not returning; track monthly"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "If imports win, shrink Standard and focus capacity on Premium"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if Standard is structurally unprofitable?",
        "a": "Consider exiting the least profitable SKUs, outsourcing to a low-cost manufacturer under our brand, or focusing capacity on Premium."
      },
      {
        "q": "How would you explain the mix effect to the CEO?",
        "a": "We sold the same dollars but swapped $40M of 30%-margin products for $40M of 20%-margin products, that alone costs $4M."
      },
      {
        "q": "What would you do if steel rises another 8%?",
        "a": "That costs about $7.7M and would pull profit to about $30.5M. I would lock steel contracts early, add a steel index to Standard prices, and use a second supplier."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Sales and margin by customer and by SKU, quotes lost to imports, steel use per pump, and why Premium customers switched to catalog pumps."
      }
    ],
    "pitfalls": [
      "Blaming one thing like steel without sizing it. Split the $12M into mix and margin, and give each a dollar value.",
      "Using one blended margin for the whole company. Each line has its own margin. Premium is 30% and Standard is 16.7%.",
      "Presenting 100% of the plan as the result. Always haircut, for example to 70%, and show a range.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check that the parts add up to $12M.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
    ]
  },
  {
    "id": "bank-fintech",
    "title": "Bank Acquires a Payments Fintech",
    "track": [
      "banking",
      "consulting"
    ],
    "framework": "ma",
    "difficulty": "Hard",
    "minutes": 35,
    "prompt": "A regional bank is considering acquiring a payments fintech for $300M. The fintech has $40M of revenue growing 35% per year and is slightly loss-making. Should the bank do the deal, and at what maximum price?",
    "clarify": [
      {
        "q": "Why does the bank want the fintech?",
        "a": "To offer modern payments to its 2M retail customers and to lower what it pays third parties to process payments."
      },
      {
        "q": "What is the goal and the limit on price?",
        "a": "The deal should earn more than the bank's cost of capital within five years. The bank can do a deal up to about $300M."
      },
      {
        "q": "What are the fintech's numbers?",
        "a": "Sales are $40M and growing 35% a year. EBITDA is -$2M, a -5% margin. The seller asks $300M, which is 7.5x sales."
      },
      {
        "q": "What do similar companies sell for?",
        "a": "Listed payments fintechs trade at 6x to 8x sales. That is $240M to $320M for $40M of sales, and $280M at 7x."
      },
      {
        "q": "What cross-sell can the bank expect?",
        "a": "About 3% of the bank's 2M customers adopt, and each pays about $60 a year. That is 60,000 x $60 = $3.6M a year."
      },
      {
        "q": "What can the bank save on processing?",
        "a": "The bank spends $12M a year with third parties. About 40% could move in-house, which saves $4.8M a year."
      },
      {
        "q": "What does integration cost, and how do we value benefits?",
        "a": "Integration costs $4M a year for two years, $8M in total. Value a year of benefit at 6 times, and count only 50% of it because benefits are uncertain."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and constraints",
            "Return above cost of capital within 5 years. Deal size up to about $300M",
            ""
          ],
          [
            "Fintech sales",
            "$40M, growing 35% a year",
            "Doubles in about 2.3 years"
          ],
          [
            "Fintech EBITDA",
            "-$2M (-5% margin)",
            "Slightly loss-making"
          ],
          [
            "Asking price",
            "$300M",
            "7.5x sales"
          ],
          [
            "Peer valuations",
            "6x to 8x sales",
            "$240M to $320M. Midpoint 7x = $280M"
          ],
          [
            "Bank customers and cross-sell",
            "2M customers. 3% adopt at $60 a year",
            "60,000 x $60 = $3.6M a year"
          ],
          [
            "Bank processing spend",
            "$12M a year. 40% can be moved in-house",
            "Saves $4.8M a year"
          ],
          [
            "Integration cost",
            "$4M a year for 2 years",
            "$8M in total"
          ],
          [
            "How to value yearly benefits",
            "6 times one year of benefit",
            "Assumed"
          ],
          [
            "Haircut on benefits",
            "Count 50%",
            "Assumed"
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Why buy? What is the price limit? What return is needed?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Peer multiples, cross-sell rate, processing spend, integration cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume benefits are worth 6 times a year, and count 50%'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Share needed = ($300M - $280M + $8M) / $50.4M = 55.6%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we do not pay $300M. My top price is $275M'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Growth slowing, engineers leaving, late benefits; diligence and an earn-out"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Partner or take a minority stake if the seller will not move"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What are the main integration risks?",
        "a": "Talent retention, culture clash, technology integration, regulatory approvals and bank compliance requirements on the fintech's product."
      },
      {
        "q": "How would you structure an earn-out?",
        "a": "Fixed payment at around standalone value, with extra consideration if revenue growth and margin targets are met in the next 2 to 3 years, so the seller shares the risk."
      },
      {
        "q": "Why not build in-house?",
        "a": "Build costs less but is slower and riskier; time to market of 2 to 3 years against a 35% growth market. A partnership is a middle path."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Sales by customer and how concentrated they are, how long customers stay, engineer turnover, rules the product must meet, and what the bank's own processing contracts allow."
      }
    ],
    "pitfalls": [
      "Paying the ask because the deal sounds strategic. Compute the value first, then compare it with the price.",
      "Counting 100% of the deal benefits. Haircut them, for example to 50%, and subtract the cost to get them.",
      "Forgetting integration cost. Subtract the $8M cost before you decide what the benefits are worth.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and say which numbers are assumptions.",
      "Giving only one price. Give a walk-away price, an opening offer and a different structure such as an earn-out."
    ]
  },
  {
    "id": "call-center",
    "title": "Contact Center Cost Reduction",
    "track": [
      "banking",
      "consulting"
    ],
    "framework": "ops",
    "difficulty": "Medium",
    "minutes": 25,
    "prompt": "A retail bank spends $130M per year on its customer contact center. The COO wants costs down 15% without hurting customer satisfaction. How would you do it?",
    "clarify": [
      {
        "q": "What is the goal and the timeline?",
        "a": "Cut the $130.4M cost by 15%, which is $19.56M, within 12 months. Customer satisfaction must not fall."
      },
      {
        "q": "How many calls are there, and what types?",
        "a": "8M calls a year. Simple calls (balance, password reset) are 35%. Transactional calls (disputes, card replacement) are 40%. Complex calls (fraud, complaints, loans) are 25%."
      },
      {
        "q": "What does each type cost?",
        "a": "Simple $8 per call, transactional $15, complex $30. That is $22.4M, $48.0M and $60.0M."
      },
      {
        "q": "Is there a digital channel?",
        "a": "A mobile app exists but is not linked to the phone menu. About 50% of simple calls could be done in the app."
      },
      {
        "q": "How long are calls, and can they be shorter?",
        "a": "Better agent tools could cut transactional handle time by 10%. Complex calls should not be rushed."
      },
      {
        "q": "How many calls are repeats?",
        "a": "About 5% of complex calls are repeats for the same issue. That is 100,000 calls a year. Fixing root causes could remove them."
      },
      {
        "q": "What does it cost to make the changes?",
        "a": "About $3M one time. Better staff scheduling could also save about 0.5% of total cost, which is $0.65M."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and timeline",
            "Cut cost 15% with no drop in satisfaction",
            "15% of $130.4M = $19.56M. Within 12 months"
          ],
          [
            "Total cost and calls",
            "$130.4M a year. 8M calls",
            "Average $16.30 a call"
          ],
          [
            "Simple calls",
            "35%, 2.8M calls, $8 each",
            "$22.4M. About 50% could be done in the app"
          ],
          [
            "Transactional calls",
            "40%, 3.2M calls, $15 each",
            "$48.0M. Handle time could fall 10%"
          ],
          [
            "Complex calls",
            "25%, 2.0M calls, $30 each",
            "$60.0M"
          ],
          [
            "Repeat calls",
            "5% of complex calls, 100,000",
            "Can be removed by fixing root causes"
          ],
          [
            "Better scheduling",
            "About 0.5% of total cost",
            "About $0.65M. Assumed"
          ],
          [
            "One-time cost",
            "About $3M",
            "App links, agent tools, training. Assumed"
          ],
          [
            "Satisfaction guardrail",
            "Must not fall",
            "Watch satisfaction and first-call resolution"
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What is the target in dollars? What must not get worse?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Calls and cost by type, app use, repeat rate, one-time cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume 50% of simple calls can move to the app'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "App share needed = 11.11 / 22.4 = 49.6%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we do all four levers, with the app first'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "App use too low, satisfaction falls; track weekly and pause levers"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Offshore simple calls if the app falls short, after moving volume"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if customers do not adopt the app?",
        "a": "Add proactive nudges in the IVR, in-call SMS links, and simplify the top journeys. Measure adoption by journey and iterate."
      },
      {
        "q": "Would you offshore?",
        "a": "Possible for simple and transactional calls, but weigh regulatory, quality and brand risks. Do it after digital deflection, since that reduces the volume to move."
      },
      {
        "q": "How do you protect customer experience?",
        "a": "Guardrail metrics, staged rollout, and keeping humans for complex and sensitive calls."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Calls by reason and by day, app use by journey, repeat rate by issue, handle time by agent team, and satisfaction by call type."
      }
    ],
    "pitfalls": [
      "Using one average cost per call. Calls have three different costs: $8, $15 and $30. Size each pool.",
      "Cutting cost without protecting service. Name a guardrail, such as satisfaction, and say when you would pause.",
      "Assuming 100% of customers use the app. Haircut it and show what happens at 30%.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the total against the $19.56M target.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
    ]
  },
  {
    "id": "digital-feature",
    "title": "Digital Feature: Scale It or Not?",
    "track": [
      "banking",
      "tech"
    ],
    "framework": "product",
    "difficulty": "Medium",
    "minutes": 30,
    "prompt": "A card issuer launched a spending-insights feature in its mobile app six months ago. The product team shows that customers who use it spend more and leave less, and asks for $2M to promote it from 25% to 40% of active app customers. As the analyst, what do you tell them?",
    "clarify": [
      {
        "q": "What is the decision and the bar for success?",
        "a": "Decide whether to spend $2M one time to raise use of the feature from 25% to 40% of active app customers. It must pay back within 18 months."
      },
      {
        "q": "What does the feature do and who can use it?",
        "a": "It sorts spending into categories and sends monthly insights and alerts. All 4M active app card customers can use it. Today 25% use it, which is 1.0M."
      },
      {
        "q": "What did the product team show?",
        "a": "Users spend $10,200 a year and non-users $8,600, a gap of $1,600. Users also leave less: 9% against 13%."
      },
      {
        "q": "Was there a test group?",
        "a": "Yes. The feature was offered to 95% of customers. A random 5% could not see it, so we have a clean test."
      },
      {
        "q": "What did the holdout show?",
        "a": "Per customer offered, spend rose from $9,000 to $9,045 (+$45). Leaving fell from 12.0% to 11.9%. Service calls fell from 1.200 to 1.164 a year. Late payments and complaints did not change."
      },
      {
        "q": "What is each result worth?",
        "a": "We keep about 2% of spend as net interchange. A retained account is worth about $400. A service call costs about $10."
      },
      {
        "q": "What does it cost to run?",
        "a": "$1.5M a year today. The $2M promotion is one time. Assume running cost does not rise with more users."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Decision and bar",
            "Spend $2M one time to lift use from 25% to 40%",
            "Payback within 18 months"
          ],
          [
            "Customers",
            "4M active app customers. 25% use it today (1.0M)",
            "40% would be 1.6M, so 600K new users"
          ],
          [
            "Naive comparison",
            "Users $10,200, non-users $8,600 a year",
            "Gap of $1,600. Users chose the feature"
          ],
          [
            "Holdout: spend",
            "$9,000 not offered, $9,045 offered",
            "+$45 per customer, $180 per user"
          ],
          [
            "Holdout: leaving",
            "12.0% not offered, 11.9% offered",
            "-0.1 point, which is 4,000 accounts of 4M"
          ],
          [
            "Holdout: service calls",
            "1.200 not offered, 1.164 offered",
            "-3%, about 144,000 fewer calls"
          ],
          [
            "Value per item",
            "Net interchange 2% of spend. Retained account $400. Call $10",
            ""
          ],
          [
            "Late payments and complaints",
            "No difference",
            ""
          ],
          [
            "Run cost",
            "$1.5M a year",
            "Assume it does not rise with more users"
          ],
          [
            "Quality of new users",
            "Likely less keen than today's users",
            "Plan on 50% of today's gain per user"
          ]
        ]
      }
    ],
    "answer": {
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
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What is the bar? Is there a random holdout?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Holdout results, value per item, run cost, promotion cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume new users give 50% of today's gain'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Share needed = $1.33M / $3.98M = 33.5%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend yes, in stages, starting with half of non-users'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "New users weaker, opt-outs, late payments; 8-week test"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "If the test is weak, improve the feature first and spend less on promotion"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not just compare adopters with non-adopters?",
        "a": "Because adopters chose the feature, so they differ from non-adopters in engagement and financial habits. A randomized holdout makes the two groups identical on average, so the difference is caused by the feature."
      },
      {
        "q": "What if the effect is much smaller for new adopters?",
        "a": "Then the gain from scaling falls. The staged test measures this before committing the full $2M, and I would target the segments where early effects were largest."
      },
      {
        "q": "What other metrics would you track?",
        "a": "Weekly active use of the feature, spend by category, 90-day and 12-month retention, calls, complaints, delinquency and opt-out rates."
      },
      {
        "q": "How long should the test run?",
        "a": "Long enough to cover at least one full billing cycle and the behaviors you care about; 8 weeks for engagement, with retention tracked longer using a leading indicator such as inactivity."
      },
      {
        "q": "What would change your answer?",
        "a": "If new users give only 25% of today's gain, payback is 24 months and misses the bar. If late payments or opt-outs rise in the test, I would stop."
      }
    ],
    "pitfalls": [
      "Comparing users with non-users. Use the random holdout, because users chose the feature.",
      "Using the $1,600 gap as the benefit. Use the $45 lift, which is $180 per user.",
      "Assuming new users act like today's users. Haircut it, for example to 50%, and test it first.",
      "Waiting for the interviewer to give you data. Ask for it, and ask if there is a random test group.",
      "Hiding the math. Say each step out loud, with units, and check payback against the 18-month bar.",
      "Forgetting the risks and guardrails. Name complaints, late payments and opt-outs, and say when you would stop."
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
        "q": "What is the goal and timeline?",
        "a": "Find the cause of the drop and a fix this quarter. Success is more activated cards for each marketing dollar."
      },
      {
        "q": "What does activation mean, and did any definition change?",
        "a": "The customer makes a first purchase within 30 days of receiving the card. Nothing changed from last year."
      },
      {
        "q": "How many applications do we get, and what is the approval rate?",
        "a": "About 100K a month before and 115K now (+15%). About 60% are approved in both periods, so 60K before and 69K now."
      },
      {
        "q": "Did we launch anything new?",
        "a": "Yes. A new digital partner channel launched this quarter. It brings the extra 15K applications."
      },
      {
        "q": "How well do cards from each channel activate?",
        "a": "Old channels activate about 70% of approved cards. The new channel is at about 20% so far. Assume approval is 60% in both."
      },
      {
        "q": "What is an activated card worth, and what does marketing cost?",
        "a": "An activated card is worth about $200 in profit. Marketing costs about $30 per application. Use these as working assumptions."
      },
      {
        "q": "Any constraints?",
        "a": "Approval and risk rules stay the same. We can change marketing terms, onboarding and how the card is delivered."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and timeline",
            "Find the cause and a fix this quarter",
            "Success = more activated cards per marketing dollar"
          ],
          [
            "Activation",
            "First purchase within 30 days of getting the card",
            "Same definition as last year"
          ],
          [
            "Applications",
            "100K a month before, 115K now (+15%)",
            "Extra 15K come from the new channel"
          ],
          [
            "Approval rate",
            "60% in both periods",
            "Approved: 60K before, 69K now"
          ],
          [
            "Activation of approved cards",
            "70% in old channels. About 20% in the new channel",
            "Assumed from early data"
          ],
          [
            "Value of an activated card",
            "$200 profit",
            "Working assumption"
          ],
          [
            "Marketing cost",
            "$30 per application",
            "Working assumption"
          ],
          [
            "Constraints",
            "Approval and risk rules stay as they are",
            "We fix activation, not approval"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So applications are up 15%, but fewer approved customers are activating. I will define activation as a first purchase within 30 days. My goal is to find the cause and a fix this quarter. Can I ask a few things? Did the definitions change? Did approval rates change? Did we launch any new channel? And what is a card worth and what does an application cost? If you do not have them, I will assume $200 and $30."
        ],
        [
          "L: Lay out",
          "I will ask three questions. Is the drop real? Where does it come from? And is it worth fixing? To answer the second one I will split the funnel by channel."
        ],
        [
          "E: Evaluate",
          "Say we had 100K applications a month. 60% are approved, so 60K, and 70% of those activate, so 42K cards. Now we have 115K applications, so 69K approved. The extra 15K came from the new channel. 9K were approved and only 20% activated, so 1.8K cards. In total we have 43.8K activated cards out of 69K approved. That is 63%, down from 70%. Cards grew about 4% while applications grew 15%."
        ],
        [
          "A: Assess",
          "So the old channels are fine at 70%. The drop is a mix effect from the new channel. At $30 an application, the new channel pays $450K to get 1.8K cards, which is $250 a card. The old channels pay about $71. A card is worth $200, so the new channel loses about $90K a month. It breaks even at 25% activation."
        ],
        [
          "R: Recommend",
          "I recommend we keep the new channel but change the deal. Two reasons. First, the channel is only 15K of the 115K applications, and activation can be improved. Second, paying per application rewards the partner for traffic that does not use the card. So I would pay per activated card and add onboarding nudges on day 1, 7 and 14. If nudges lift activation to 35%, the channel earns about $180K a month. Risks are that the nudges annoy customers or that the traffic is low quality. I would review after 8 weeks. If activation is still under 25%, I would pause the channel."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Applications up 15%, activation rate down<br/>Activation = first purchase in 30 days<br/>Goal: find the cause and fix it this quarter\"]\nC --> L[\"L: Lay out<br/>1 Is the drop real?<br/>2 Where does it come from?<br/>3 Is it worth fixing?\"]\nL --> E[\"E: Evaluate<br/>Split the funnel by channel\"]\nE --> E1[\"Funnel<br/>Apps 100K to 115K (+15%)<br/>Approved 60K to 69K<br/>Activated 42K to 43.8K (+4%)<br/>Rate falls from 70% to 63%\"]\nE --> E2[\"Cause<br/>New channel: 15K apps, 9K approved<br/>Only 20% activate = 1.8K<br/>Old channels still at 70%\"]\nE --> E3[\"Money<br/>Old channels: $71 per activated card<br/>New channel: $250 per activated card<br/>A card is worth $200\"]\nE1 --> A[\"A: Assess<br/>The drop is a mix effect, not a general decline<br/>New channel loses $50 per card<br/>It breaks even at 25% activation\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Keep the channel, but fix it.<br/>Pay per activated card and add onboarding nudges.<br/>Pause it if activation stays under 25% after 8 weeks\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Old channels, per month<br/>100K apps x 60% = 60K approved<br/>60K x 70% = <b>42K activated</b>\"]\nB[\"2 New channel, per month<br/>15K apps x 60% = 9K approved<br/>9K x 20% = <b>1.8K activated</b>\"]\nA --> C[\"3 Blended result<br/>42K + 1.8K = <b>43.8K activated</b><br/>43.8K / 69K approved = <b>63% (was 70%)</b><br/>Activated cards up only <b>4%</b>, apps up 15%\"]\nB --> C\nA --> D1[\"4 Cost per activated card, old<br/>100K x $30 = $3.0M<br/>$3.0M / 42K = <b>$71</b>\"]\nB --> D2[\"4 Cost per activated card, new<br/>15K x $30 = $450K<br/>$450K / 1.8K = <b>$250</b>\"]\nD1 --> E1[\"5 Profit at $200 a card, old<br/>42K x $200 - $3.0M = <b>+$5.4M</b>\"]\nD2 --> E2[\"5 Profit at $200 a card, new<br/>1.8K x $200 - $450K = <b>-$90K</b>\"]\nE2 --> F1[\"Check: break-even<br/>9K x a x $200 = $450K<br/>a = <b>25%</b>\"]\nE2 --> F2[\"Check: to hold 70% overall<br/>42K + 9K x a = 48.3K<br/>a = <b>70%</b>, not realistic\"]\nE2 --> F3[\"What if nudges lift it to 35%<br/>9K x 35% = 3.15K cards<br/>3.15K x $200 - $450K = <b>+$180K</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B n1;\nclass C n3;\nclass D1,D2 n2;\nclass E1,E2 n4;\nclass F1,F2,F3 n1;"
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
              "Say the problem back. Define activation. Ask for the funnel and the money numbers. Say what you will assume if you do not get them",
              "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
              "First purchase in 30 days. Approval is 60% in both periods. A new channel launched. A card is worth $200 and an application costs $30"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Is the drop real? Where does it come from? Is it worth fixing?"
            ],
            [
              "E Evaluate",
              "Split the funnel by channel and do the math out loud, with units",
              "Blended numbers hide the cause. The interview often has several small math problems, some with algebra",
              "Old channels: 42K activated. New channel: 1.8K. Blended rate 63%"
            ],
            [
              "A Assess",
              "Say what the numbers mean: who loses money, and what the break-even is",
              "Turns numbers into a business view",
              "New channel costs $250 per activated card against $200 of value. Break-even is 25% activation"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Keep the channel but pay per activated card and fix onboarding. Alternative: pause it"
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
              "How many cards do the old channels activate?",
              "100K apps x 60% approved x 70% activate",
              "42K a month"
            ],
            [
              "2",
              "How many does the new channel activate?",
              "15K apps x 60% approved x 20% activate",
              "1.8K a month"
            ],
            [
              "3",
              "What is the blended activation rate?",
              "(42K + 1.8K) / (60K + 9K) = 43.8K / 69K",
              "63%, down from 70%. Cards are up only 4%"
            ],
            [
              "4",
              "What does one activated card cost us?",
              "Old: $3.0M / 42K. New: $450K / 1.8K",
              "$71 old, $250 new"
            ],
            [
              "5",
              "Is the new channel profitable?",
              "1.8K x $200 value - 15K x $30 cost = $360K - $450K",
              "-$90K a month"
            ],
            [
              "6",
              "What activation rate would break even?",
              "9K x a x $200 = 15K x $30, so a = $450K / $1.8M",
              "25%"
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
              "New channel activation rises to 35%",
              "+$180K a month",
              "3.15K cards x $200 = $630K, minus $450K. Onboarding nudges could turn the channel profitable."
            ],
            [
              "New channel activation rises to 70%",
              "+$810K a month",
              "6.3K cards x $200 = $1.26M, minus $450K. Same quality as old channels, so the channel is great."
            ],
            [
              "New channel activation falls to 10%",
              "-$270K a month",
              "900 cards x $200 = $180K, minus $450K. Pause the channel quickly."
            ],
            [
              "We negotiate $20 per application at 20% activation",
              "+$60K a month",
              "1.8K x $200 = $360K, minus 15K x $20 = $300K. Better terms alone can fix it."
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
              "What activation rate does the new channel need to break even?",
              "9,000 x a x $200 = 15,000 x $30 = $450K",
              "a = 450,000 / 1,800,000 = 25%"
            ],
            [
              "At 20% activation, what is the most we can pay per application?",
              "1,800 x $200 = 15,000 x c",
              "c = 360,000 / 15,000 = $24"
            ],
            [
              "What new-channel activation gives a blended rate of 65%?",
              "(42,000 + 9,000 x a) / 69,000 = 0.65",
              "9,000 a = 44,850 - 42,000 = 2,850, so a = 31.7%"
            ],
            [
              "What new-channel activation earns $100K a month?",
              "9,000 x a x $200 - $450K = $100K",
              "1,800,000 a = 550,000, so a = 30.6%"
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
              "It is not the channel",
              "Other things may also hurt activation, such as late cards or a clumsy setup",
              "Split activation by channel and by card age. If all channels fall, check card delivery and the activation steps"
            ],
            [
              "Cards are too new",
              "Recent cards have not had 30 days to activate yet",
              "Compare cards of the same age"
            ],
            [
              "Low-quality partner traffic",
              "People may apply only for a bonus and never use the card",
              "Pay per activated card, tighten targeting, and review fraud signals"
            ],
            [
              "Nudges annoy customers",
              "Too many messages can cause opt-outs",
              "Test a few messages on day 1, 7 and 14 with a holdout group"
            ],
            [
              "Cutting the channel too early",
              "We lose growth and learning before we fix the problem",
              "Set a clear test: pause only if activation is under 25% after 8 weeks"
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
              "Funnel",
              "The steps customers pass through: apply, get approved, activate"
            ],
            [
              "Activation",
              "The customer makes a first purchase within 30 days of receiving the card"
            ],
            [
              "Mix effect",
              "The overall rate falls because more of the group comes from a weaker segment, not because every segment got worse"
            ],
            [
              "Cohort",
              "A group of cards of the same age, so we compare like with like"
            ],
            [
              "Cost per activated card",
              "Marketing spend divided by activated cards, not by applications"
            ],
            [
              "Break-even",
              "The point where profit is zero. Here it is 25% activation on the new channel"
            ],
            [
              "Holdout group",
              "A group that does not get the change, so we can see what the change really did"
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
              "Saying 'the product is failing' without splitting the data",
              "Split the funnel by channel, segment and card age before you decide the cause."
            ],
            [
              "Using the blended rate only",
              "Look at each channel. Old channels are still at 70%."
            ],
            [
              "Counting cost per application",
              "Count cost per activated card: $250 on the new channel, not $30."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Ending without a decision",
              "Give the answer first, then two reasons, risks and an alternative."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Applications are up 15% but activation is down. What does activation mean, and what is the goal?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Funnel by stage, approval rate, new channels, value of a card, cost per application"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume a card is worth $200 and an application costs $30'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "9,000 x a x $200 = $450K, so a = 25%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we keep the new channel but pay per activated card'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Cards may be too new, partner quality, nudges annoying customers; review at 8 weeks"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Pause the channel if activation stays under 25%"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "How would you confirm the new channel is the cause?",
        "a": "Split activation by channel and compare cards of the same age. If old channels still activate about 70% and the new channel about 20%, the blended drop is a mix effect, not a general decline."
      },
      {
        "q": "What if all channels show lower activation?",
        "a": "Then look at things that affect everyone: card delivery time, the activation steps, the offer and competitor behavior. Check days from approval to card arrival first."
      },
      {
        "q": "Would you stop the new channel?",
        "a": "Not yet. At $250 per activated card it loses about $90K a month, but it breaks even at 25% activation. I would fix onboarding, then pay the partner per activated card, and pause it if activation is still under 25% after 8 weeks."
      },
      {
        "q": "What metrics would you track going forward?",
        "a": "Activated cards per dollar of marketing, activation rate by channel and card age, days to first purchase, and 90-day spend."
      },
      {
        "q": "What if the partner will not agree to pay per activation?",
        "a": "Then negotiate the price per application. At 20% activation we can pay at most $24 per application. Otherwise I would cap the volume from that partner."
      }
    ],
    "pitfalls": [
      "Saying 'the product is failing' without splitting the data. Split the funnel by channel, segment and card age before you decide the cause.",
      "Using the blended rate only. Look at each channel. Old channels are still at 70%.",
      "Counting cost per application. Count cost per activated card: $250 on the new channel, not $30.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Ending without a decision. Give the answer first, then two reasons, risks and an alternative."
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
        "q": "Which category are we considering, and what is the goal?",
        "a": "Rent payments by card. We want to know whether to go in and how. Treat all figures as working assumptions."
      },
      {
        "q": "What does success look like?",
        "a": "Profit after build cost, marketing and losses, with payback inside two years."
      },
      {
        "q": "How big is the market?",
        "a": "About 44M renter households paying about $1,400 a month. Only about 30% of rent can be paid electronically today."
      },
      {
        "q": "What share could we win?",
        "a": "Assume 2% of the online rent market by year 3. A typical user pays $16.8K of rent a year through us."
      },
      {
        "q": "What are the revenue and loss rates?",
        "a": "Net revenue (fees minus rewards and processing) is 0.8% of volume. Fraud and dispute losses are 0.1% of volume."
      },
      {
        "q": "What does it cost to build and run?",
        "a": "Build about $14M. Marketing about $60 per new user. Running cost about $8M a year."
      },
      {
        "q": "Are there constraints, and do we have a right to win?",
        "a": "Budget is about $30M up front, and a regulatory review is needed. Fraud must stay near 0.1%. We have a large card base and rewards. Rivals are payment apps and landlord portals."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and timeline",
            "Profit after build, marketing and losses. Payback inside 2 years",
            "Category is rent payments by card"
          ],
          [
            "Renter households and rent",
            "44M households, $1,400 a month",
            "Total = 44M x $1,400 x 12 = $740B a year"
          ],
          [
            "Share that can be paid online",
            "30%",
            "$740B x 30% = $222B. Rest is cheque, cash or bank transfer"
          ],
          [
            "Our share in year 3",
            "2%",
            "$222B x 2% = $4.4B of volume"
          ],
          [
            "Users",
            "About 260K",
            "$16.8K a year each: $4.4B / $16.8K"
          ],
          [
            "Net revenue",
            "0.8% of volume",
            "Fees minus rewards and processing. $4.4B x 0.8% = $35.2M"
          ],
          [
            "Losses (fraud, disputes)",
            "0.1% of volume",
            "$4.4M. Must stay near 0.1%"
          ],
          [
            "Running cost",
            "$8M a year",
            "Team, tech and support"
          ],
          [
            "Up-front cost",
            "$29.6M",
            "Build $14M + marketing 260K x $60 = $15.6M"
          ],
          [
            "Constraints",
            "Budget about $30M. Regulatory review",
            "Fraud loss must stay near 0.1%"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So we are asking whether a card issuer should start serving a new category, and I will assume rent payments. I will treat success as profit after build cost, marketing and losses, with payback inside two years. Our budget is about $30M. Do we know the number of renters, the rent, and how much can be paid online? If not, I will assume."
        ],
        [
          "L: Lay out",
          "I will look at three things. First, how big is the market and how much can we reach? Second, can we win? We have a large card base and rewards, but rivals include payment apps. Third, do the economics and risks work?"
        ],
        [
          "E: Evaluate",
          "About 44M renter households pay $1,400 a month. That is 44M x $1,400 x 12, about $740B a year. About 30% can be paid online, so $222B. With a 2% share in year 3, that is $4.4B of volume, and about 260K users at $16.8K each a year. We earn 0.8% net revenue, which is $35.2M. Losses are 0.1%, so $4.4M. Running cost is $8M. So profit is about $22.8M a year."
        ],
        [
          "A: Assess",
          "The up-front cost is $14M to build plus $15.6M of marketing, so $29.6M. That pays back in about 16 months. We break even at about 68K users. The key number is net revenue per dollar. If it falls to 0.28%, profit is zero. And if 30% of the volume is already on our cards, profit drops to about $13.6M and payback is 2.2 years, which misses our two-year goal."
        ],
        [
          "R: Recommend",
          "I recommend we enter, but in stages. First, the market is large and the numbers pay back in 16 months. Second, a pilot limits the risk before we spend the full $30M. I would start in two or three cities with one property-management partner. We scale only if net revenue is 0.7% or more, fraud is 0.1% or less, and most of the volume is new. Risks are thin margin, cannibalization and rivals. If the pilot shows net revenue below about 0.6%, I would partner only and not build."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Should we start taking rent payments by card?<br/>Success = profit after build, marketing, losses<br/>Payback inside 2 years. Budget about $30M\"]\nC --> L[\"L: Lay out<br/>1 How big is the market?<br/>2 Can we win?<br/>3 Do the economics and risks work?\"]\nL --> E[\"E: Evaluate<br/>Size the market, then the profit\"]\nE --> E1[\"Market<br/>44M renters x $1,400 x 12 = $740B<br/>30% can be paid online = $222B<br/>2% share = $4.4B, about 260K users\"]\nE --> E2[\"Profit a year<br/>Net revenue 0.8% = $35.2M<br/>Losses 0.1% = $4.4M, running cost $8M<br/>Profit = $22.8M\"]\nE --> E3[\"Cost and payback<br/>Build $14M + marketing $15.6M = $29.6M<br/>Payback about 16 months<br/>Break-even at 68K users\"]\nE1 --> A[\"A: Assess<br/>The key number is net revenue per dollar<br/>At 0.28% profit is zero<br/>If 30% of volume is not new, payback is 2.2 years\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Enter, but in stages.<br/>Pilot in 2 or 3 cities with a partner.<br/>Scale only if net revenue is 0.7% or more and fraud is 0.1% or less\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Market size<br/>44M renters x $1,400 x 12 months<br/>= <b>$740B a year</b>\"]\nA --> B[\"2 Reachable<br/>$740B x 30% paid online<br/>= <b>$222B</b>\"]\nB --> C[\"3 Our share, year 3<br/>$222B x 2%<br/>= <b>$4.4B volume</b><br/>$4.4B / $16.8K per user = <b>260K users</b>\"]\nC --> D1[\"4 Net revenue<br/>$4.4B x 0.8%<br/>= <b>$35.2M</b>\"]\nC --> D2[\"4 Losses<br/>$4.4B x 0.1%<br/>= <b>$4.4M</b>\"]\nD1 --> E[\"5 Profit a year<br/>$35.2M - $4.4M - $8M running<br/>= <b>$22.8M</b>\"]\nD2 --> E\nC --> F[\"6 Up-front cost<br/>Build $14M + 260K x $60 = $15.6M<br/>= <b>$29.6M</b>\"]\nE --> G[\"7 Payback<br/>$29.6M / $22.8M = 1.3 years<br/>= <b>about 16 months</b>\"]\nF --> G\nG --> H1[\"Check: break-even users<br/>$117.60 net per user x u = $8M<br/>u = <b>68K</b>\"]\nG --> H2[\"Check: net revenue for profit of zero<br/>$4.4B x (r - 0.1%) = $8M<br/>r = <b>0.28%</b>\"]\nG --> H3[\"What if 30% of volume is not new<br/>$4.4B x 70% x 0.7% - $8M = <b>$13.6M</b><br/>Payback <b>2.2 years</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C n1;\nclass D1,D2 n2;\nclass E,F n3;\nclass G n4;\nclass H1,H2,H3 n1;"
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
              "Say the question back. Pick the category (rent). Say what success means. Ask for the market and money numbers",
              "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
              "Rent by card. Success = profit after build, marketing and losses, payback in 2 years. Budget about $30M"
            ],
            [
              "L Lay out",
              "Say your three questions before calculating",
              "Shows structure and lets the interviewer steer",
              "How big is the market? Can we win? Do the economics and risks work?"
            ],
            [
              "E Evaluate",
              "Size the market step by step, then work out profit and cost, with units",
              "The interview has several separate math problems, often with algebra",
              "$740B -> $222B -> $4.4B -> $22.8M profit a year on $29.6M up front"
            ],
            [
              "A Assess",
              "Say what the numbers mean: payback, break-even, and what could break the case",
              "Turns numbers into a business view",
              "Payback is about 16 months. Net revenue per dollar is the key risk"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Enter in stages with a pilot. Alternative: partner only, or wait"
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
              "How big is rent spending?",
              "44M households x $1,400 x 12 months",
              "$740B a year"
            ],
            [
              "2",
              "How much can be paid online?",
              "$740B x 30%",
              "$222B"
            ],
            [
              "3",
              "How much would we get in year 3?",
              "$222B x 2% share. Users: $4.4B / $16.8K a year each",
              "$4.4B, about 260K users"
            ],
            [
              "4",
              "What is the profit a year?",
              "$4.4B x 0.8% = $35.2M. Minus losses $4.4M. Minus running cost $8M",
              "$22.8M"
            ],
            [
              "5",
              "What is the up-front cost?",
              "Build $14M + marketing 260K x $60 = $15.6M",
              "$29.6M"
            ],
            [
              "6",
              "How long to pay back?",
              "$29.6M / $22.8M = 1.3 years x 12 months",
              "About 16 months"
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
              "Net revenue falls from 0.8% to 0.3%",
              "Profit $0.8M a year",
              "$4.4B x (0.3% - 0.1%) = $8.8M, minus $8M running. About zero, so the case fails."
            ],
            [
              "30% of volume is already on our cards",
              "Profit $13.6M a year",
              "Only 70% is new: $3.08B x 0.7% = $21.6M, minus $8M. Payback 2.2 years, longer than the 2-year goal."
            ],
            [
              "Fraud loss doubles to 0.2%",
              "Profit $18.4M a year",
              "$4.4B x (0.8% - 0.2%) = $26.4M, minus $8M. Payback 1.6 years. Still fine."
            ],
            [
              "Our share is 1%, not 2%",
              "Profit $7.4M a year",
              "$2.2B x 0.7% = $15.4M, minus $8M. Up-front falls to $21.8M (130K users), payback 2.9 years. Weak."
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
              "How many users do we need to break even on running cost?",
              "Net per user = $16,800 x (0.8% - 0.1%) = $117.60. 117.60 x u = $8M",
              "u = 8,000,000 / 117.60 = about 68K users"
            ],
            [
              "At what net revenue rate is profit zero (volume $4.4B)?",
              "4.4B x (r - 0.1%) = $8M",
              "r - 0.1% = 0.1818%, so r = 0.28%"
            ],
            [
              "What net revenue rate gives a 2-year payback?",
              "Profit needed = $29.6M / 2 = $14.8M. 4.4B x (r - 0.1%) - $8M = $14.8M",
              "r - 0.1% = 0.518%, so r = 0.62%"
            ],
            [
              "What market share do we need to break even?",
              "$222B x s x 0.7% = $8M",
              "s = 8M / 1.554B = 0.5%"
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
              "Thin margin",
              "Rewards and processing can eat most of the 0.8% net revenue",
              "Test pricing and rewards in the pilot. Stop if net revenue stays under 0.3%"
            ],
            [
              "Cannibalization",
              "Some rent spend is already on our cards, so it is not new money",
              "Measure new volume in the pilot, not total volume"
            ],
            [
              "Fraud and disputes",
              "Rent payments are large, so losses can be big",
              "Strong ID checks and limits. Keep losses near 0.1% of volume"
            ],
            [
              "Strong rivals",
              "Payment apps and landlord portals already serve this need",
              "Partner with property managers and give renters a clear reason to use us"
            ],
            [
              "Rules",
              "A regulatory review may delay launch",
              "Involve risk and legal from the start"
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
              "Volume",
              "Total dollars paid through us. Here $4.4B in year 3"
            ],
            [
              "Net revenue",
              "Fee income minus rewards and processing costs. Here 0.8% of volume"
            ],
            [
              "TAM (total market)",
              "The full yearly spend in the market. Here $740B"
            ],
            [
              "Cannibalization",
              "Volume that was already on our cards, so it is not new"
            ],
            [
              "Payback",
              "How long it takes for the profit to repay the up-front cost"
            ],
            [
              "Break-even",
              "The point where profit is zero. Here it is 68K users"
            ],
            [
              "Pilot",
              "A small test in a few places before we scale"
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
              "Stopping at the market size",
              "Market size is only step one. Also check right to win, margin and risks."
            ],
            [
              "Using total spend, not what we can reach",
              "Only 30% can be paid online, and we win a small share."
            ],
            [
              "Forgetting that volume is not profit",
              "Profit is 0.8% minus 0.1% of volume, minus running cost."
            ],
            [
              "Ignoring cannibalization",
              "Ask how much of the volume is already on our cards."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Ending without a decision",
              "Give the answer first, then two reasons, risks and an alternative."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Should we start taking rent by card? What does success mean? What is the budget?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Renter households, average rent, share paid online, rewards cost, fraud rate"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume we win 2% of the online rent market in year 3'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "$4.4B x (r - 0.1%) = $8M, so r = 0.28%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we enter rent payments in stages, starting with a pilot'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Thin margin, cannibalization, fraud, rivals; pilot gates at 0.7% net revenue and 0.1% fraud"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Partner only and do not build, or wait if the pilot shows margin under 0.62%"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What if the category is already crowded?",
        "a": "Then the question is right to win. I would look for a clear edge such as better rewards for renters or ties with property managers, or I would partner instead of building."
      },
      {
        "q": "How do you handle cannibalization?",
        "a": "Measure how much volume is already on our cards. If 30% is, only 70% is new, so profit falls from $22.8M to about $13.6M a year and payback is 2.2 years. I would measure this in the pilot."
      },
      {
        "q": "What would make you stop?",
        "a": "Net revenue per dollar below about 0.3%, fraud well above 0.1%, or too few users to reach break-even at about 68K."
      },
      {
        "q": "Build, buy or partner?",
        "a": "Partner for the pilot to learn quickly and cheaply, then decide on build or buy once the economics are proven."
      },
      {
        "q": "What is the most important number to test in the pilot?",
        "a": "Net revenue per dollar after rewards. We need about 0.62% for a two-year payback, and I would want 0.7% before scaling."
      }
    ],
    "pitfalls": [
      "Stopping at the market size. Market size is only step one. Also check right to win, margin and risks.",
      "Using total spend, not what we can reach. Only 30% can be paid online, and we win a small share.",
      "Forgetting that volume is not profit. Profit is 0.8% minus 0.1% of volume, minus running cost.",
      "Ignoring cannibalization. Ask how much of the volume is already on our cards.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Ending without a decision. Give the answer first, then two reasons, risks and an alternative."
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
        "q": "What does adoption mean here, and what is the goal?",
        "a": "A customer opens the account and funds it. Sign-ups with no deposit do not count. We want to find the cause of the gap and decide to keep, fix or stop."
      },
      {
        "q": "What was the plan, and what is the actual?",
        "a": "The plan was 200K funded accounts at 6 months, from about 5M eligible existing customers. Actual is about 120K."
      },
      {
        "q": "Has anything changed since launch?",
        "a": "Rivals raised their savings rates a little. We have not changed our rate, and marketing has been light."
      },
      {
        "q": "Do we have funnel data?",
        "a": "Yes. Awareness from surveys is 30% of eligible customers (plan 40%). 20% of aware customers start an application, as planned. 40% of starters finish and fund (plan 50%)."
      },
      {
        "q": "What are the balances?",
        "a": "Average balance is about $6K. The plan was $8K. Assume all deposits are new money for now."
      },
      {
        "q": "What is an account worth, and what does it cost?",
        "a": "Assume a 1.5% net interest margin on balances, so about $90 a year at a $6K balance. Marketing costs about $40 per new account."
      },
      {
        "q": "What is the timeline and what decision is needed?",
        "a": "We need a diagnosis and a plan now, with a checkpoint at month 9. Keep going if on pace for 160K accounts."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and timeline",
            "Find the cause of low adoption, then keep, fix or stop",
            "Product launched 6 months ago"
          ],
          [
            "Eligible customers",
            "5.0M existing customers",
            "Adoption = account opened and funded"
          ],
          [
            "Aware",
            "Plan 40% = 2.0M. Actual 30% = 1.5M",
            "From surveys"
          ],
          [
            "Start an application",
            "20% of aware in both",
            "Plan 400K. Actual 300K"
          ],
          [
            "Finish and fund",
            "Plan 50%. Actual 40%",
            "Plan 200K accounts. Actual 120K"
          ],
          [
            "Average balance",
            "Plan $8K. Actual $6K",
            "Deposits $1.6B plan, $0.72B actual"
          ],
          [
            "Margin",
            "1.5% a year on balances",
            "$6K x 1.5% = $90 a year per account"
          ],
          [
            "Marketing cost",
            "$40 per new account",
            "Assumed"
          ],
          [
            "What changed",
            "Rivals raised rates a little. Our rate is the same. Marketing is light",
            "Assume all deposits are new money for now"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So we launched a savings account six months ago and have fewer customers than planned. I will define adoption as a funded account, because sign-ups with no deposit do not count. Can I ask what the plan was, and whether anything changed since launch, like rates or marketing? Do we have funnel data, and what is an account worth? If not, I will assume a 1.5% margin and $40 of marketing per account."
        ],
        [
          "L: Lay out",
          "I will ask three questions. Was the plan realistic? Where in the funnel do customers drop out: aware, start, finish, fund? And what is the fix worth? Then I will decide whether to keep, fix or stop."
        ],
        [
          "E: Evaluate",
          "The plan was 5M eligible customers, 40% aware, 20% start and 50% finish, which is 200K accounts. Actual is 30% aware, 20% start and 40% finish. That is 5M x 30% x 20% x 40%, so 120K accounts, or 60% of plan. If we fix awareness to 40%, we get 160K, so 40K more. If we then fix the finish rate to 50%, we get 200K, another 40K. Balances are also $6K, not $8K."
        ],
        [
          "A: Assess",
          "At a 1.5% margin, an account with a $6K balance earns $90 a year. So each 40K accounts is worth $3.6M a year. The balance gap is 200K accounts x $2K x 1.5%, which is $6.0M. In total we earn $10.8M against a plan of $24M, a gap of $13.2M. So there are three causes: awareness, a long application and weak reasons to deposit more. The $40 marketing cost pays back in about 5 months."
        ],
        [
          "R: Recommend",
          "I recommend we fix the product, not stop it. Two reasons. The application fix is cheap and quick, and each 40K accounts adds $3.6M a year. And the $40 cost per account pays back in about 5 months. So I would shorten the application, promote the account in the app to existing customers, and test a small rate bonus on a small group. At month 9, if we are on pace for 160K accounts, we continue. Risks are that the plan was too high and that deposits are not new money. If not on pace, I would reset the target or stop."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Funded accounts: 120K, plan was 200K (60%)<br/>Adoption = account opened and funded<br/>Goal: find the cause, then keep, fix or stop\"]\nC --> L[\"L: Lay out<br/>1 Was the plan realistic?<br/>2 Where do customers drop out?<br/>3 What is the fix worth?\"]\nL --> E[\"E: Evaluate<br/>Compare plan and actual, step by step\"]\nE --> E1[\"Funnel<br/>Aware: 40% plan, 30% actual<br/>Finish and fund: 50% plan, 40% actual<br/>Start rate is the same at 20%\"]\nE --> E2[\"Gap in accounts<br/>Awareness fix: +40K = 160K<br/>Finish fix: +40K = 200K<br/>Total gap 80K accounts\"]\nE --> E3[\"Gap in money<br/>Balance $6K, plan $8K<br/>Income $10.8M vs plan $24M<br/>Gap $13.2M a year\"]\nE1 --> A[\"A: Assess<br/>Three causes: awareness, long application, low balances<br/>Each 40K accounts is worth $3.6M a year<br/>Balances are worth $6.0M of the gap\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Fix first, do not stop.<br/>Shorten the application, promote in the app, test a bonus.<br/>Checkpoint at month 9: 160K accounts or rethink\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Plan, 5M eligible customers<br/>5M x 40% aware = 2.0M<br/>2.0M x 20% start = 400K<br/>400K x 50% fund = <b>200K accounts</b>\"]\nB[\"2 Actual<br/>5M x 30% aware = 1.5M<br/>1.5M x 20% start = 300K<br/>300K x 40% fund = <b>120K accounts</b>\"]\nA --> C[\"3 Gap<br/>200K - 120K = <b>80K accounts</b><br/>120K is <b>60%</b> of plan\"]\nB --> C\nC --> D1[\"4 Fix awareness to 40%<br/>5M x 40% x 20% x 40% = <b>160K</b><br/>+40K accounts\"]\nD1 --> D2[\"5 Then fix finish rate to 50%<br/>2.0M x 20% x 50% = <b>200K</b><br/>+40K accounts\"]\nD2 --> E[\"6 Money a year at 1.5% margin<br/>Actual: 120K x $6K x 1.5% = <b>$10.8M</b><br/>Plan: 200K x $8K x 1.5% = <b>$24M</b>\"]\nE --> F[\"7 Where the $13.2M gap comes from<br/>Awareness 40K x $90 = <b>$3.6M</b><br/>Finish rate 40K x $90 = <b>$3.6M</b><br/>Balance 200K x $2K x 1.5% = <b>$6.0M</b>\"]\nF --> G1[\"Check: payback of $40 per account<br/>$90 a year = $7.50 a month<br/>$40 / $7.50 = <b>5.3 months</b>\"]\nF --> G2[\"Check: awareness needed for plan<br/>5M x a x 20% x 40% = 200K<br/>a = <b>50%</b>\"]\nF --> G3[\"What if only awareness and finish are fixed<br/>200K x $90 = <b>$18M</b><br/>Balance gap of $6M stays\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C n1;\nclass D1,D2 n2;\nclass E n3;\nclass F n4;\nclass G1,G2,G3 n1;"
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
              "Say the problem back. Define adoption. Ask for the plan, the funnel and what changed. Say what you will assume",
              "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
              "Adoption = funded account. Plan 200K, actual 120K. Rivals raised rates, we did not, marketing was light"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Was the plan realistic? Where do customers drop out? What is the fix worth?"
            ],
            [
              "E Evaluate",
              "Walk the funnel from eligible customers to funded accounts and compare plan with actual. Do the math out loud",
              "Finding the step with the biggest gap tells you where to act",
              "Awareness 30% vs 40%. Finish and fund 40% vs 50%. Balance $6K vs $8K"
            ],
            [
              "A Assess",
              "Say what each gap is worth in dollars and which fix is cheapest",
              "Turns numbers into a business view",
              "Each 40K accounts is $3.6M a year. The balance gap is $6.0M"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Fix the product first. Checkpoint at month 9. Alternative: reset the target or stop"
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
              "How many accounts did we plan?",
              "5M x 40% aware x 20% start x 50% fund",
              "200K"
            ],
            [
              "2",
              "How many do we have?",
              "5M x 30% aware x 20% start x 40% fund",
              "120K, which is 60% of plan"
            ],
            [
              "3",
              "What does fixing awareness add?",
              "5M x 40% x 20% x 40% = 160K, so 160K - 120K",
              "+40K accounts"
            ],
            [
              "4",
              "What does fixing the finish rate add?",
              "2.0M aware x 20% x 50% = 200K, so 200K - 160K",
              "+40K accounts"
            ],
            [
              "5",
              "What are the accounts worth a year?",
              "120K x $6K x 1.5% = $10.8M. Plan: 200K x $8K x 1.5% = $24M",
              "Gap $13.2M"
            ],
            [
              "6",
              "Where does the gap come from?",
              "40K x $90 + 40K x $90 + 200K x ($8K - $6K) x 1.5%",
              "$3.6M + $3.6M + $6.0M"
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
              "Awareness rises to 40% (others stay)",
              "160K accounts, $14.4M a year",
              "160K x $90. Cheap in-app promotion could do this."
            ],
            [
              "Finish rate rises to 50% (others stay)",
              "150K accounts, $13.5M a year",
              "1.5M x 20% x 50% = 150K, then x $90. A shorter application is the cheapest fix."
            ],
            [
              "Average balance rises to $8K (others stay)",
              "120K accounts, $14.4M a year",
              "120K x $120. Needs a reason to deposit more, such as a bonus."
            ],
            [
              "All three reach plan",
              "200K accounts, $24M a year",
              "200K x $120. This is the full plan."
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
              "What awareness do we need to reach the plan of 200K (other rates as now)?",
              "5M x a x 20% x 40% = 200K",
              "400,000 a = 200,000, so a = 50%"
            ],
            [
              "What finish rate do we need to reach 200K at today's 30% awareness?",
              "1.5M x 20% x f = 200K",
              "300,000 f = 200,000, so f = 66.7%. Too high, so we need other fixes too"
            ],
            [
              "What awareness gives the month 9 checkpoint of 160K (finish at 40%)?",
              "5M x a x 20% x 40% = 160K",
              "a = 160,000 / 400,000 = 40%"
            ],
            [
              "What balance repays the $40 marketing cost in one year?",
              "B x 1.5% = $40",
              "B = 40 / 0.015 = $2,667"
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
              "The plan was too high",
              "The product may be fine and the target too optimistic",
              "Compare with past launches and rivals. Reset the target if needed"
            ],
            [
              "Not new money",
              "Deposits may just move from our checking or other savings accounts",
              "Measure only new money, or money that would have left"
            ],
            [
              "Rate war",
              "Rivals raised their rates and customers may move",
              "Test a small bonus or tiered rate. Do not match every rival"
            ],
            [
              "Fixes do not work",
              "A shorter application may not lift the finish rate",
              "Run quick tests with a holdout group and look at results in weeks"
            ],
            [
              "Bonus hunters",
              "Customers may take a bonus and leave",
              "Require a minimum balance for 90 days"
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
              "Funded account",
              "An account that is opened and has money in it. This is our adoption"
            ],
            [
              "Funnel",
              "Steps customers pass through: aware, start, finish, fund"
            ],
            [
              "Net interest margin",
              "What we earn on balances minus what we pay. Here 1.5% a year"
            ],
            [
              "Balance",
              "Money in the account. Plan $8K, actual $6K"
            ],
            [
              "Cannibalization",
              "Money that moves from our other accounts into this one, so it is not new"
            ],
            [
              "Holdout group",
              "A group that does not get the change, so we can see what the change really did"
            ],
            [
              "Checkpoint",
              "A date to decide keep, fix or stop. Here month 9"
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
              "Blaming the product at once",
              "First check whether the plan was realistic."
            ],
            [
              "Looking at one blended number",
              "Walk the funnel and find the step with the biggest gap."
            ],
            [
              "Counting accounts only",
              "Also look at balances. A $2K gap in balance is worth $6.0M a year."
            ],
            [
              "Counting all deposits as new money",
              "Check how much came from our own other accounts."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Ending without a decision",
              "Give the answer first, then two reasons, risks and an alternative."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Adoption is below plan. What does adoption mean, and what was the plan?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Funnel counts, plan versus actual, balances, margin, marketing cost, rival moves"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume all deposits are new money for now'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "5M x a x 20% x 40% = 200K, so a = 50%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we fix the product, not stop it, and check again at month 9'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Plan too high, not new money, rate war; test with a holdout group"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Reset the target to 150K, or stop if the month 9 pace is below 160K"
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
        "a": "Set a checkpoint at month 9. If funded accounts are on pace for 160K or more and balances are rising, continue. If not, rethink the offer or stop."
      },
      {
        "q": "How do you know the deposits are new money?",
        "a": "Check how much came from the bank's own checking or other savings accounts. Only new money, or money that would have left, counts as a gain."
      },
      {
        "q": "What would you test first?",
        "a": "The application flow, because it is cheapest to change and the effect shows in weeks. Then a small rate or bonus test with a holdout group."
      },
      {
        "q": "Should we match the rivals' higher rates?",
        "a": "Not across the board. Test a small bonus or a tiered rate on a small group first. Each extra 0.1% of rate on $0.72B of balances costs about $0.72M a year, so we need new money to pay for it."
      }
    ],
    "pitfalls": [
      "Blaming the product at once. First check whether the plan was realistic.",
      "Looking at one blended number. Walk the funnel and find the step with the biggest gap.",
      "Counting accounts only. Also look at balances. A $2K gap in balance is worth $6.0M a year.",
      "Counting all deposits as new money. Check how much came from our own other accounts.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Ending without a decision. Give the answer first, then two reasons, risks and an alternative."
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
        "q": "What is the product, and what is the goal?",
        "a": "A revolving line of credit: a limit the business can borrow from, repay and borrow again. Assume a $25K typical limit. We want a go or no-go decision."
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
        "q": "How big is the market?",
        "a": "About 25M small businesses. About 20% use credit. We would approve about 30% of those. Assume we win 2% of that group by year 3."
      },
      {
        "q": "How much do customers borrow and what do we earn?",
        "a": "On average 40% of the limit is used, so $10K. We charge about 15% and our funding cost is 4%."
      },
      {
        "q": "What do we know about risk and cost?",
        "a": "Past small business loans lost about 4 to 6% of balances. Assume 5%. Servicing is $120 per customer a year and fixed cost is $5M a year."
      },
      {
        "q": "What are the constraints?",
        "a": "About $15M of up-front investment: $6M to build and about $300 to acquire each customer. Risk and legal must approve the credit policy."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal and timeline",
            "Profit after credit losses. Payback inside 2 years",
            "Revolving line, $25K typical limit"
          ],
          [
            "Small businesses under $500K revenue",
            "25M",
            "Assumed. Includes one-person businesses"
          ],
          [
            "Use credit",
            "20% = 5M",
            "Assumed"
          ],
          [
            "We would approve",
            "30% of 5M = 1.5M",
            "From our risk rules"
          ],
          [
            "Our share in year 3",
            "2% = 30K customers",
            "1.5M x 2%"
          ],
          [
            "Balance",
            "$25K limit x 40% used = $10K",
            "Assumed"
          ],
          [
            "Interest rate and funding cost",
            "15% and 4%",
            "Spread 11% = $1,100 a year per customer"
          ],
          [
            "Losses",
            "5% of balances = $500 a customer",
            "Past loans lost 4 to 6%"
          ],
          [
            "Servicing and fixed cost",
            "$120 per customer a year. $5M a year fixed",
            "Team, tech and compliance"
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
          "So the small business lending team wants to launch a line of credit for businesses under $500K revenue. I will treat it as a revolving line with a typical $25K limit, starting with our existing small business customers. I will define success as profit after credit losses, with payback inside two years. Can I ask how many businesses there are, what rates and loss rates look like, and what it costs to build and run? If not, I will assume."
        ],
        [
          "L: Lay out",
          "I will look at three things. First, the market: how many businesses need this and would qualify. Second, our right to win: why us, and can we judge who will repay. Third, the economics and risk: does each customer make money after losses?"
        ],
        [
          "E: Evaluate",
          "There are 25M small businesses. About 20% use credit, so 5M. We would approve 30%, so 1.5M. A 2% share is 30K customers. Each uses 40% of a $25K limit, so a $10K balance. We earn 15% and fund at 4%, so 11%, or $1,100. Losses are 5%, so $500. Servicing is $120. That leaves $480 per customer. 30K x $480 is $14.4M. Minus $5M fixed cost, profit is $9.4M a year."
        ],
        [
          "A: Assess",
          "The up-front cost is $6M to build plus 30K x $300 to acquire, so $15M. That pays back in about 19 months. We break even at about 10K customers. The big risk is losses. At 8.1% profit is zero. For a two-year payback we need losses at 5.6% or lower. In a downturn at 10%, we would lose about $5.6M a year."
        ],
        [
          "R: Recommend",
          "I recommend we go, but in stages. Two reasons. The numbers work, with $9.4M a year and a 19-month payback. And we can start with existing customers, where we see cash flow in their account and so can judge who repays. I would run a pilot with about 2,000 customers and limits of $5K to $10K. At six months we check three things: losses of 5.5% or less, usage of 36% or more, and acquisition cost of $300 or less. If we pass, we raise limits and open to new customers. Risks are losses and a downturn, so I would cap total exposure. If the pilot loss rate is above 5.6%, I would partner with an online lender instead of lending ourselves."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Launch a small business credit line?<br/>Limit $25K, businesses under $500K revenue<br/>Success = profit after losses, payback in 2 years\"]\nC --> L[\"L: Lay out<br/>1 Is the market big enough?<br/>2 Can we win and judge risk?<br/>3 Does each customer make money?\"]\nL --> E[\"E: Evaluate<br/>Size the market, then one customer, then total\"]\nE --> E1[\"Market<br/>25M businesses x 20% use credit = 5M<br/>We approve 30% = 1.5M<br/>2% share = 30K customers\"]\nE --> E2[\"One customer a year<br/>Balance $10K, spread 11% = $1,100<br/>Losses 5% = $500, servicing $120<br/>Profit = $480\"]\nE --> E3[\"Total<br/>30K x $480 = $14.4M, minus $5M fixed<br/>Profit = $9.4M a year<br/>Up-front $15M, payback 19 months\"]\nE1 --> A[\"A: Assess<br/>Break-even at about 10K customers<br/>Losses are the key risk: at 8.1% profit is zero<br/>At 10% we lose $5.6M a year\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Go, but in stages.<br/>Pilot with 2,000 existing customers, limits $5K to $10K.<br/>Scale only if losses are 5.5% or less\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Market size<br/>25M businesses x 20% use credit = 5M<br/>5M x 30% we would approve = 1.5M<br/>1.5M x 2% share = <b>30K customers</b>\"]\nA --> B[\"2 One customer, per year<br/>Balance: $25K limit x 40% used = <b>$10K</b><br/>Spread: $10K x (15% - 4%) = <b>$1,100</b>\"]\nB --> C1[\"3 Losses<br/>$10K x 5% = <b>$500</b>\"]\nB --> C2[\"3 Servicing<br/>= <b>$120</b>\"]\nC1 --> D[\"4 Profit per customer<br/>$1,100 - $500 - $120<br/>= <b>$480</b>\"]\nC2 --> D\nD --> E[\"5 Total profit a year<br/>30K x $480 = $14.4M<br/>$14.4M - $5M fixed = <b>$9.4M</b>\"]\nE --> F[\"6 Up-front cost and payback<br/>Build $6M + 30K x $300 = <b>$15M</b><br/>$15M / $9.4M = 1.6 years = <b>19 months</b>\"]\nF --> G1[\"Check: break-even customers<br/>$480 x n = $5M<br/>n = <b>10.4K</b>\"]\nF --> G2[\"Check: loss rate for 2-year payback<br/>30K x (980 - L) - $5M = $7.5M<br/>L = $563, which is <b>5.6%</b>\"]\nF --> G3[\"What if the economy gets worse<br/>Losses 10% = $1,000<br/>30K x ($1,100 - $1,000 - $120) - $5M = <b>-$5.6M</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B n1;\nclass C1,C2 n2;\nclass D,E n3;\nclass F n4;\nclass G1,G2,G3 n1;"
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
              "Say the question back. Define the product and the customer. Say what success means. Ask for market, risk and money numbers",
              "In Capital One cases you drive the conversation and ask for data, with a business owner mindset",
              "Revolving line, $25K limit, businesses under $500K revenue. Success = profit after losses, payback in 2 years"
            ],
            [
              "L Lay out",
              "Say your three questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Is the market big? Can we win and judge risk? Does each customer make money?"
            ],
            [
              "E Evaluate",
              "Size the market, then one customer, then the total, with units",
              "The interview has several separate math problems, often with algebra",
              "30K customers x $480 = $14.4M, minus $5M fixed = $9.4M"
            ],
            [
              "A Assess",
              "Say what the numbers mean: payback, break-even, and the risk that matters most",
              "Turns numbers into a business view",
              "Payback 19 months. Break-even 10K customers. Losses are the key risk"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Go in stages with a pilot. Alternative: wait or partner"
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
              "How many customers could we win?",
              "25M x 20% use credit x 30% we approve x 2% share",
              "30K customers"
            ],
            [
              "2",
              "What does one customer earn from interest?",
              "Balance $25K x 40% = $10K. Spread 15% - 4% = 11%. $10K x 11%",
              "$1,100 a year"
            ],
            [
              "3",
              "What is profit per customer?",
              "$1,100 - losses $500 ($10K x 5%) - servicing $120",
              "$480 a year"
            ],
            [
              "4",
              "What is total profit a year?",
              "30K x $480 = $14.4M. Minus $5M fixed cost",
              "$9.4M"
            ],
            [
              "5",
              "What is the up-front cost?",
              "Build $6M + acquisition 30K x $300 = $9M",
              "$15M"
            ],
            [
              "6",
              "How long to pay back?",
              "$15M / $9.4M = 1.6 years x 12 months",
              "About 19 months"
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
              "Losses rise from 5% to 8%",
              "+$0.4M a year",
              "Per customer $1,100 - $800 - $120 = $180. 30K x $180 = $5.4M, minus $5M. Almost no profit."
            ],
            [
              "Losses double to 10% (downturn)",
              "-$5.6M a year",
              "Per customer -$20. 30K x -$20 = -$0.6M, minus $5M. We lose money, so cap total exposure."
            ],
            [
              "Usage rises from 40% to 50%",
              "$13.9M a year",
              "Balance $12.5K. Per customer $630. 30K x $630 = $18.9M, minus $5M. Payback 1.1 years."
            ],
            [
              "Only 15K customers (1% share)",
              "$2.2M a year",
              "15K x $480 = $7.2M, minus $5M. Up-front is $6M + 15K x $300 = $10.5M, payback 4.8 years. Weak."
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
              "How many customers do we need to cover the $5M fixed cost?",
              "$480 x n = $5M",
              "n = 5,000,000 / 480 = about 10.4K customers"
            ],
            [
              "At what loss rate is profit zero (30K customers)?",
              "30,000 x (1,100 - L - 120) = $5M",
              "980 - L = 166.7, so L = $813, which is 8.1% of a $10K balance"
            ],
            [
              "What loss rate gives a 2-year payback?",
              "Profit needed = $15M / 2 = $7.5M. 30,000 x (980 - L) - $5M = $7.5M",
              "980 - L = 416.7, so L = $563, which is 5.6%"
            ],
            [
              "What usage gives a 2-year payback (loss 5%)?",
              "Per customer needed = $416.7. Balance B x (11% - 5%) - $120 = $416.7",
              "0.06 B = 536.7, so B = $8,945, which is 36% of a $25K limit"
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
              "Credit losses",
              "Small business files are thin, so losses are hard to predict",
              "Start with existing customers whose cash flow we can see. Use small limits"
            ],
            [
              "Downturn",
              "Losses can double when the economy gets worse",
              "Stress test at 10% losses. Cap total exposure"
            ],
            [
              "Low usage",
              "Customers may borrow less than the 40% we assume",
              "Track usage in the pilot. We need about 36% for a two-year payback"
            ],
            [
              "Online rivals",
              "Online lenders are fast",
              "Use speed and our deposit data. Do not compete only on price"
            ],
            [
              "Rules and fairness",
              "Credit rules and fair lending checks can delay launch",
              "Involve risk and legal from the start"
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
              "Line of credit",
              "A limit the business can borrow from, repay and borrow again"
            ],
            [
              "Spread",
              "Interest rate minus our funding cost. Here 15% - 4% = 11%"
            ],
            [
              "Loss rate",
              "Share of balances that is never repaid. Here 5%"
            ],
            [
              "Utilization",
              "How much of the limit is used. Here 40% of $25K = $10K"
            ],
            [
              "Fixed cost",
              "Cost that does not change with customers, such as team and tech. Here $5M a year"
            ],
            [
              "Payback",
              "How long it takes for profit to repay the up-front cost"
            ],
            [
              "Stress test",
              "Checking the numbers under a bad case, such as losses doubling"
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
              "Forgetting credit losses",
              "Always take losses off the interest income. Here they are $500 of $1,100."
            ],
            [
              "Using the limit as the balance",
              "Customers use only part of the limit. Use $10K, not $25K."
            ],
            [
              "Ignoring fixed cost",
              "Subtract the $5M before you judge profit and payback."
            ],
            [
              "Only showing the good case",
              "Run a bad case. At 10% losses we lose $5.6M a year."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Ending without a decision",
              "Give the answer first, then two reasons, risks and an alternative."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Should we launch a credit line for businesses under $500K? What does success mean?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Number of businesses, who qualifies, rates, loss rate, servicing and fixed cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume a 40% usage and a 5% loss rate'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "30,000 x (980 - L) - $5M = $7.5M, so L = $563"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we go, in stages, starting with a pilot'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Credit losses, downturn, low usage; pilot gates on losses, usage and cost"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Partner with an online lender first if the pilot loss rate is above 5.6%"
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
        "a": "Profit falls to about $0.4M a year, close to zero. I would cut starting limits, tighten who we approve, or raise the rate before scaling."
      },
      {
        "q": "How would you run a downturn test?",
        "a": "Double the loss rate to 10%. Per-customer profit turns slightly negative at -$20, and the total loses about $5.6M a year, so I would cap total exposure and keep limits small until losses are proven."
      },
      {
        "q": "Build, buy or partner?",
        "a": "Partner or use existing systems for the pilot to move fast, then decide on build once the loss rate and usage are proven."
      },
      {
        "q": "What if acquisition costs $400, not $300?",
        "a": "Up-front rises to $6M + 30K x $400 = $18M. Payback becomes $18M / $9.4M = 1.9 years, about 23 months. Still inside two years, but with less room for error."
      }
    ],
    "pitfalls": [
      "Forgetting credit losses. Always take losses off the interest income. Here they are $500 of $1,100.",
      "Using the limit as the balance. Customers use only part of the limit. Use $10K, not $25K.",
      "Ignoring fixed cost. Subtract the $5M before you judge profit and payback.",
      "Only showing the good case. Run a bad case. At 10% losses we lose $5.6M a year.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Ending without a decision. Give the answer first, then two reasons, risks and an alternative."
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
        "q": "Who counts as Gen Z here, and how many can get a card?",
        "a": "Ages 18 to 28, about 45M in the US. About half (22.5M) can get a card: old enough, with income and a usable credit history."
      },
      {
        "q": "What is the card?",
        "a": "An annual-fee card at $150, with extra rewards on travel and some perks."
      },
      {
        "q": "What do we know about demand?",
        "a": "A marketing survey says 20% are interested. Assume only 40% of those would act, so 8% (1.8M people). Nobody has tested real sign-ups. We can win about 5% of them by year 3."
      },
      {
        "q": "What does one card earn and cost?",
        "a": "Spend is $18K a year and we keep 2.5% as interchange. Rewards cost 1.2% of spend. Losses and servicing are about $184 a card."
      },
      {
        "q": "What are the fixed and up-front costs?",
        "a": "Fixed cost is $6M a year. Up-front is a $4M build plus a $200 sign-up bonus and marketing for each card."
      },
      {
        "q": "What is the budget and success bar?",
        "a": "About $22M up front, with payback inside two years. Treat all figures as working assumptions."
      },
      {
        "q": "What data do we have on young customers?",
        "a": "We can see card and debit spend by category for our existing customers aged 18 to 28, including travel."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Gen Z and who can get a card",
            "45M aged 18 to 28. 50% can get a card = 22.5M",
            "Old enough, has income and credit history"
          ],
          [
            "Who acts",
            "Survey: 20% interested. 40% of them act = 8% = 1.8M",
            "Nobody has tested real sign-ups"
          ],
          [
            "Our share in year 3",
            "5% of 1.8M = 90K cards",
            "Assumed"
          ],
          [
            "Spend per card",
            "$18K a year",
            "Interchange 2.5% = $450"
          ],
          [
            "Annual fee",
            "$150",
            "Revenue per card = $600"
          ],
          [
            "Cost per card",
            "Rewards 1.2% of spend = $216. Losses and servicing $184",
            "Total $400. Profit $200 a card"
          ],
          [
            "Fixed cost",
            "$6M a year",
            "Team, tech and marketing"
          ],
          [
            "Up-front cost",
            "$4M build + $200 sign-up bonus per card = $22M at 90K cards",
            "Budget is about $22M"
          ],
          [
            "Success bar",
            "Payback inside 2 years",
            "All figures are working assumptions"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So marketing wants a premium travel rewards card for Gen Z, ages 18 to 28, and I need to judge if there is a real market. I will treat that as enough people who want it, will pay the fee, and make the card profitable. I have $22M of budget and need payback inside two years. Can I ask: what is the fee, what does the survey say, and do we have data on our own young customers? If not, I will assume."
        ],
        [
          "L: Lay out",
          "I will answer three questions. First, how many people would really take the card. Second, is each card profitable. Third, do we pay back in time."
        ],
        [
          "E: Evaluate",
          "There are 45M Gen Z and half can get a card, so 22.5M. The survey says 20% are interested, but only 40% of them act, so 8%, or 1.8M. A 5% share is 90K cards. One card earns $150 fee plus $450 interchange, so $600. It costs $216 in rewards plus $184 other, so $400. That is $200 a card, $18M in total. Take off $6M of fixed cost and we make $12M a year."
        ],
        [
          "A: Assess",
          "The up-front cost is $4M to build plus $18M of sign-up bonus, so $22M. Divided by $12M that is about 22 months, so we only just meet the 2-year bar. We break even at 30K cards and need about 80K cards for a 2-year payback. If spend falls to $14K, payback is 3 years. Surveys overstate demand, so this is the part I trust least."
        ],
        [
          "R: Recommend",
          "I recommend we do not launch in full yet. Pilot first. Two reasons: the case works on paper but only just meets the payback bar, and the demand number comes from a survey, not real behavior. Next steps: check our own young customers' travel spend, run a waitlist at two or three fee levels, then pilot with existing customers. Scale if sign-ups and spend of about $1,430 a month are met. Risks are lower spend, bonus hunters and credit losses. If you wanted a bolder answer, I would launch in full if our own data shows strong demand."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Premium travel card for Gen Z, ages 18 to 28<br/>Is there a real market? Budget $22M, payback in 2 years\"]\nC --> L[\"L: Lay out<br/>1 How many would really take it?<br/>2 Is each card profitable?<br/>3 Do we pay back in time?\"]\nL --> E[\"E: Evaluate<br/>Size the market, then one card, then the total\"]\nE --> E1[\"People<br/>45M x 50% can get a card = 22.5M<br/>x 8% who act = 1.8M<br/>x 5% share = 90K cards\"]\nE --> E2[\"One card<br/>Revenue $600, cost $400<br/>= $200 profit a card\"]\nE --> E3[\"Total<br/>90K x $200 = $18M<br/>- $6M fixed = $12M a year\"]\nE1 --> A[\"A: Assess<br/>Break-even is 30K cards<br/>Payback 22 months, needs 80K cards<br/>Surveys overstate demand\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Yes, likely a market, but pilot first<br/>Use our own young customers<br/>Scale only if sign-ups and spend hit the bar\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Who could take the card<br/>45M Gen Z x 50% can get a card<br/>= <b>22.5M people</b>\"]\nA --> B[\"2 Who would really sign up<br/>Survey says 20% interested<br/>Only 40% of them act: 20% x 40% = 8%<br/>22.5M x 8% = <b>1.8M people</b>\"]\nB --> C[\"3 Our share in year 3<br/>1.8M x 5% = <b>90K cards</b>\"]\nC --> D[\"4 Profit on one card<br/>Revenue: $150 fee + 2.5% x $18K = <b>$600</b><br/>Cost: rewards $216 + other $184 = <b>$400</b><br/>Profit = <b>$200 a card</b>\"]\nD --> E[\"5 Profit each year<br/>90K x $200 = $18M<br/>- $6M fixed cost = <b>$12M</b>\"]\nE --> F[\"6 Payback<br/>Up-front: $4M build + 90K x $200 bonus = $22M<br/>$22M / $12M = <b>1.8 years (22 months)</b>\"]\nD --> G1[\"Check: break-even<br/>$6M / $200 = <b>30K cards</b>\"]\nF --> G2[\"Check: needed for 2-year payback<br/>2 x (200n - 6M) = 4M + 200n<br/>n = <b>80K cards</b>\"]\nF --> G3[\"Check: what if spend is $14K<br/>Profit $148 a card = $7.3M a year<br/>Payback <b>3.0 years</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C n1;\nclass D,E n2;\nclass F n3;\nclass G1,G2,G3 n4;\n"
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
              "Who is Gen Z, the fee and perks, what the survey says, our own data, budget and payback bar"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "How many would really take it? Is each card profitable? Do we pay back in time?"
            ],
            [
              "E Evaluate",
              "Do the math out loud in short steps, with units",
              "The interview has several separate math problems, often with algebra",
              "22.5M can get a card, 1.8M would act, 90K cards, $200 a card, $12M a year"
            ],
            [
              "A Assess",
              "Say what the numbers mean: break-even, payback, what could go wrong",
              "Turns numbers into a business view",
              "Break-even 30K cards. Payback 22 months, which only just meets the 2-year bar"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Pilot first. A defensible alternative: launch in full if our own data shows strong demand"
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
              "How many people could take the card?",
              "45M x 50%",
              "22.5M people"
            ],
            [
              "2",
              "How many would really sign up and pay a fee?",
              "The survey says 20% are interested. Only 40% of them act. 20% x 40% = 8%. 22.5M x 8%",
              "1.8M people"
            ],
            [
              "3",
              "How many cards do we win?",
              "1.8M x 5% share in year 3",
              "90K cards"
            ],
            [
              "4",
              "What does one card earn?",
              "Revenue $150 + (2.5% x $18K) = $600. Cost (1.2% x $18K) + $184 = $400",
              "$200 a card"
            ],
            [
              "5",
              "What is profit each year?",
              "90K x $200 = $18M. Then take off $6M of fixed cost",
              "$12M a year"
            ],
            [
              "6",
              "How long to pay back the up-front cost?",
              "Up-front = $4M + (90K x $200) = $22M. $22M / $12M",
              "1.8 years (22 months)"
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
              "Spend per card falls from $18K to $14K",
              "Profit $7.3M a year, payback 3.0 years",
              "Misses the 2-year bar. Spend is a key driver."
            ],
            [
              "Fee is $100 instead of $150",
              "Profit $7.5M a year, payback 2.9 years",
              "Cheaper fee may win more cards, but each card earns $50 less."
            ],
            [
              "Only 4% act instead of 8% (survey is more optimistic than real life)",
              "45K cards, profit $3M a year, payback 4.3 years",
              "Still profitable, but too slow. Demand is the biggest risk."
            ],
            [
              "No annual fee at all",
              "Profit per card is $50, so $4.5M - $6M = -$1.5M a year",
              "The fee is what makes the card work."
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
              "How many cards to break even?",
              "$200 x n - $6M = 0",
              "n = $6M / $200 = 30K cards (1.7% of the 1.8M people)"
            ],
            [
              "How many cards to pay back in 2 years?",
              "2 x (200n - 6M) = 4M + 200n",
              "400n - 12M = 4M + 200n, so 200n = 16M and n = 80K cards"
            ],
            [
              "At 90K cards, what yearly spend per card breaks even?",
              "90K x (150 + 0.025x - 0.012x - 184) = 6M",
              "0.013x - 34 = 66.67, so x = 100.67 / 0.013 = about $7.7K"
            ],
            [
              "At 90K cards, what spend gives a 2-year payback?",
              "90K x (0.013x - 34) - 6M = 11M",
              "0.013x - 34 = 188.9, so x = 222.9 / 0.013 = about $17.1K ($1,430 a month)"
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
              "Surveys overstate demand",
              "Saying 'I am interested' is free. Paying a fee is not",
              "Test real sign-ups on a waitlist at a real fee"
            ],
            [
              "Lower spend per card",
              "Young customers may spend less than $18K a year",
              "Check our own young customers' travel spend before building"
            ],
            [
              "Sign-up bonus hunters",
              "People may take the $200 bonus and close the card",
              "Set spend rules for the bonus and watch closures in the pilot"
            ],
            [
              "Credit risk",
              "Young customers may have thin credit files",
              "Start with existing customers we can see, with small limits"
            ],
            [
              "Fee resistance",
              "Gen Z may not pay $150",
              "Test fee levels and a first-year waiver"
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
              "Annual fee",
              "A yearly charge for holding the card"
            ],
            [
              "Interchange",
              "A fee the store pays the card network on each purchase. We keep part of it. Here 2.5% of spend"
            ],
            [
              "Rewards cost",
              "What we pay out in points, cash back and perks. Here 1.2% of spend"
            ],
            [
              "Fixed cost",
              "Cost that does not change with the number of cards, such as the team and tech. Here $6M a year"
            ],
            [
              "Break-even",
              "The number of cards where profit is zero"
            ],
            [
              "Payback",
              "The time it takes for profit to repay the up-front cost"
            ],
            [
              "Share",
              "The part of the interested group that picks our card"
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
              "Trusting the survey as demand",
              "Only a fraction of interested people act. Use 20% x 40% = 8%, and test with real sign-ups."
            ],
            [
              "Using revenue and ignoring costs",
              "Show profit per card: revenue $600 minus cost $400 is $200."
            ],
            [
              "Skipping the up-front cost",
              "Include build and sign-up bonus. That is $22M, not just the $4M build."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Is a real market one that wants it, pays the fee and is profitable? Who is Gen Z and what is the card?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Survey result, our own young-customer spend, fee, rewards, fixed and up-front cost, payback bar"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume we keep 2.5% of spend as interchange and win 5% of the people who act'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Break-even cards = $6M / $200 = 30K. Payback = $22M / $12M = 1.8 years"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'Yes there is a market, but I would pilot first, because payback is 22 months and demand is unproven'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Lower spend, bonus hunters, credit risk, fee resistance. Next: pilot with existing young customers"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Launch in full if our own data shows strong travel spend and the waitlist converts"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not just trust the survey?",
        "a": "Saying yes is free. Only about 40% of interested people act, so 20% becomes 8%. If only 4% acted, payback would be 4.3 years, so real sign-ups at a real fee are stronger proof."
      },
      {
        "q": "What would you test first?",
        "a": "Our own data on young customers' travel spend, because it is fast, cheap and real. Then a waitlist with two or three fee levels."
      },
      {
        "q": "What if Gen Z will not pay a $150 fee?",
        "a": "Test a lower fee or a first-year waiver. At $100 the profit is $7.5M a year, and with no fee the card loses $1.5M a year, so the rewards and perks would need redesigning."
      },
      {
        "q": "How would you handle credit risk for young customers?",
        "a": "Start with existing customers whose accounts we can see, use small limits, and watch losses in the pilot before opening to new-to-credit customers."
      },
      {
        "q": "What would make you stop?",
        "a": "If the pilot shows spend well below $1,430 a month or sign-ups far below plan. At 30K cards or fewer, the card does not cover its $6M fixed cost."
      }
    ],
    "pitfalls": [
      "Trusting the survey as demand. Only a fraction of interested people act. Use 20% x 40% = 8%, and test with real sign-ups.",
      "Using revenue and ignoring costs. Show profit per card: revenue $600 minus cost $400 is $200.",
      "Skipping the up-front cost. Include build and sign-up bonus. That is $22M, not just the $4M build.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
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
        "q": "Who can see it, and is there a holdout?",
        "a": "All 4M active app customers, except a random 5% holdout group that cannot see it."
      },
      {
        "q": "Were targets set at launch?",
        "a": "Yes: 25% of customers try it, 50% of those still use it after 4 weeks, and 50% of regular users set a budget."
      },
      {
        "q": "What are the results so far?",
        "a": "20% tried it (800K). 40% of those still use it after 4 weeks (320K). 60% of regular users set a budget."
      },
      {
        "q": "What does the holdout show?",
        "a": "Per customer offered the feature: leave rate 12.0% to 11.7%, spend up $30 a year, service calls down 2%."
      },
      {
        "q": "What are the unit values?",
        "a": "A retained account is worth $400. Net interchange is 2% of spend. A service call costs $10, and there are about 5M calls a year."
      },
      {
        "q": "What does the feature cost?",
        "a": "$2M a year to run and $4M to build. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Customers who can see it",
            "4M active app customers",
            "A random 5% holdout cannot see it"
          ],
          [
            "Reach",
            "20% tried it = 800K",
            "Target was 25% = 1.0M"
          ],
          [
            "Repeat use",
            "40% still use after 4 weeks = 320K",
            "Target was 50%. 8% of all customers"
          ],
          [
            "Budgets set",
            "60% of regular users",
            "Target was 50%"
          ],
          [
            "Holdout result",
            "Leave rate 12.0% to 11.7%. Spend +$30 a year. Service calls -2%",
            "Per customer offered the feature"
          ],
          [
            "Unit values",
            "Retained account $400. Net interchange 2% of spend. Service call $10",
            "Assumed. About 5M calls a year"
          ],
          [
            "Costs",
            "$2M a year to run. $4M to build",
            "Assumed"
          ],
          [
            "Adopters vs others (for contrast)",
            "Triers leave at 8% vs 12%. Spend $90 a year more",
            "Biased: keen customers choose the feature"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So a budgeting feature launched last quarter and leadership wants to know if it is working. I will define working as: people use it, it helps them, and it helps the bank more than it costs. Can I ask what the feature was meant to do, what the targets were, and whether any customers were held out from seeing it? If not, I will assume."
        ],
        [
          "L: Lay out",
          "I will check three things. First, do people try it and come back. Second, did it cause real change, which I would measure with the holdout group. Third, is the value bigger than the cost."
        ],
        [
          "E: Evaluate",
          "There are 4M customers. 20% tried it, which is 800K, against a 25% target. 40% of them still use it after four weeks, so 320K regular users, against a 50% target. In the holdout, leaving fell 0.3 points. That is 4M x 0.3% x $400, or $4.8M. More spend adds 4M x $30 x 2%, or $2.4M. Fewer calls add $1.0M. Total value is $8.2M a year."
        ],
        [
          "A: Assess",
          "The running cost is $2M, so net is $6.2M and the $4M build pays back in under eight months. We only need about a quarter of the effect to break even. So it is working, but below target on reach and repeat use. If I had compared adopters with non-adopters, I would have said $14.2M, which is too high because keen customers choose the feature. It is also one quarter of data."
        ],
        [
          "R: Recommend",
          "I recommend we keep it and fix repeat use. Two reasons: it earns about $6.2M net a year, and repeat use is the weak spot, where weekly summaries and alerts could add about $2M a year. Keep a 5% holdout and recheck in two quarters. Risks are the effect fading and customers finding alerts annoying. If value falls under the $2M running cost, I would redesign or pause it."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Budgeting feature launched last quarter<br/>Is it working? What does working mean?\"]\nC --> L[\"L: Lay out<br/>1 Do people try it and come back?<br/>2 Did it cause real change? (holdout)<br/>3 Is the value more than the cost?\"]\nL --> E[\"E: Evaluate<br/>Check use, then cause, then money\"]\nE --> E1[\"Use<br/>20% tried it (target 25%)<br/>40% still use it (target 50%)<br/>= 320K regular users\"]\nE --> E2[\"Effect (holdout)<br/>Fewer leave: $4.8M<br/>More spend: $2.4M<br/>Fewer calls: $1.0M\"]\nE --> E3[\"Money<br/>Value $8.2M - cost $2M<br/>= $6.2M a year\"]\nE1 --> A[\"A: Assess<br/>Working, but below target on use<br/>Break-even needs only 24% of the value<br/>Adopter gap says $14.2M, too high\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Keep it and fix repeat use<br/>Weekly summaries and alerts, +$2M<br/>Keep the 5% holdout. Recheck in 2 quarters\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Do people use it?<br/>4M customers x 20% tried = <b>800K</b><br/>x 40% still use after 4 weeks = <b>320K regular users</b><br/>60% of them set a budget = 192K\"]\nA --> B[\"2 What did the holdout show?<br/>Leave rate 12.0% to 11.7% = 0.3 points<br/>Spend +$30 a year. Calls -2%\"]\nB --> C1[\"Fewer leave<br/>4M x 0.3% x $400 = <b>$4.8M</b>\"]\nB --> C2[\"More spend<br/>4M x $30 x 2% interchange = <b>$2.4M</b>\"]\nB --> C3[\"Fewer calls<br/>5M calls x 2% x $10 = <b>$1.0M</b>\"]\nC1 --> D[\"3 Value per year<br/>$4.8M + $2.4M + $1.0M = <b>$8.2M</b>\"]\nC2 --> D\nC3 --> D\nD --> E[\"4 Net of running cost<br/>$8.2M - $2.0M = <b>$6.2M a year</b><br/>$4M build / $6.2M = <b>7.7 months</b> to pay back\"]\nD --> F1[\"Check: break-even<br/>Value must beat $2M<br/>$2M / $8.2M = <b>24% of the effect</b>\"]\nD --> F2[\"Check: if repeat use rises to 50%<br/>Value scales to $10.25M<br/>Gain <b>+$2.05M</b>\"]\nE --> F3[\"Check: if the leave effect fades to zero<br/>Value $3.4M, net <b>$1.4M</b><br/>Still positive\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B n1;\nclass C1,C2,C3 n2;\nclass D,E n3;\nclass F1,F2,F3 n4;\n"
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
              "Goal of the feature, who can see it, targets, holdout group, unit values, costs"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Do people try it and come back? Did it cause the change? Is value above cost?"
            ],
            [
              "E Evaluate",
              "Do the math out loud in short steps, with units",
              "The interview has several separate math problems, often with algebra",
              "320K regular users. Holdout effects add up to $8.2M a year"
            ],
            [
              "A Assess",
              "Say what the numbers mean: break-even, what is below target, what could mislead",
              "Turns numbers into a business view",
              "Net $6.2M a year, below target on reach and repeat use, one quarter only"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Keep it and fix repeat use. A defensible alternative: pause spending on it if value drops under cost"
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
              "How many regular users?",
              "4M x 20% tried = 800K. 800K x 40% still use it",
              "320K (8% of customers)"
            ],
            [
              "2",
              "Value of fewer customers leaving",
              "Holdout: leave rate falls 12.0% to 11.7%, so 0.3 points. 4M x 0.3% x $400",
              "$4.8M"
            ],
            [
              "3",
              "Value of more spend",
              "4M x $30 more spend x 2% interchange",
              "$2.4M"
            ],
            [
              "4",
              "Value of fewer service calls",
              "5M calls x 2% fewer x $10 a call",
              "$1.0M"
            ],
            [
              "5",
              "Total value a year, and net of running cost",
              "$4.8M + $2.4M + $1.0M = $8.2M. Then $8.2M - $2.0M",
              "$6.2M net"
            ],
            [
              "6",
              "How fast does the $4M build pay back?",
              "$4M / $6.2M a year x 12 months",
              "7.7 months"
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
              "Repeat use rises from 40% to 50% (the target)",
              "Value $10.25M, +$2.05M a year",
              "Weekly summaries and alerts are worth doing."
            ],
            [
              "Repeat use falls to 30%",
              "Value $6.15M, net $4.15M",
              "Still above the $2M cost."
            ],
            [
              "The effect on customers leaving fades to zero",
              "Value $3.4M, net $1.4M",
              "Still positive, but thin. Keep measuring."
            ],
            [
              "The true effect is only half of the holdout result",
              "Value $4.1M, net $2.1M",
              "Only just above cost. Confirm with more data."
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
              "How much of the effect must be real to cover the $2M running cost?",
              "$8.2M x s = $2M",
              "s = 2 / 8.2 = 24%"
            ],
            [
              "How many regular users cover the running cost? (value per regular user is $8.2M / 320K = $25.63)",
              "25.63 x u = $2M",
              "u = 2,000,000 / 25.63 = about 78K, which is 2% of customers"
            ],
            [
              "What repeat rate pays back the build and one year of cost in year 1?",
              "$8.2M x (r / 40%) = $4M + $2M",
              "r = 6 / 8.2 x 40% = 29%"
            ],
            [
              "What reach gives 400K regular users at 40% repeat?",
              "4M x p x 40% = 400K",
              "p = 400K / 1.6M = 25% (the target)"
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
              "Comparing adopters with non-adopters",
              "Keen customers choose the feature, so the gap looks too big",
              "Use the holdout group. Adopter gap here would say $14.2M, not $8.2M"
            ],
            [
              "Only one quarter of data",
              "The effect may fade or grow",
              "Keep the holdout and recheck at six months"
            ],
            [
              "Low repeat use",
              "60% of users set a budget, but only 40% stay",
              "Weekly summaries, alerts and nudges"
            ],
            [
              "Harm to customers",
              "Budget alerts may annoy or stress some people",
              "Watch complaints and opt-outs, and allow easy turn-off"
            ],
            [
              "Wrong unit values",
              "$400 per account and 2% interchange are assumptions",
              "Show a range and ask Finance to confirm"
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
              "A random group that cannot see the feature. It shows what would have happened anyway"
            ],
            [
              "Reach",
              "The share of customers who tried the feature"
            ],
            [
              "Repeat use",
              "The share of triers who are still using it after 4 weeks"
            ],
            [
              "Attrition",
              "Customers leaving the bank. Here 12.0% a year without the feature"
            ],
            [
              "Net interchange",
              "The fee we earn on card spend. Here 2% of spend"
            ],
            [
              "Selection bias",
              "When the people who pick a feature are different from those who do not"
            ],
            [
              "Payback",
              "The time it takes for net value to repay the build cost"
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
              "Defining working as sign-ups only",
              "Use a ladder: try it, come back, helps the customer, helps the bank, no harm."
            ],
            [
              "Comparing adopters with non-adopters",
              "Use the holdout group, because keen customers choose the feature."
            ],
            [
              "Ignoring the cost",
              "Net the $2M running cost from the $8.2M value."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What does working mean here? What was the feature meant to do?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Targets, holdout group, usage events, attrition, spend, calls, unit values and running cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume the holdout effect applies to all 4M customers who see the feature'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Value = 4M x 0.3% x $400 = $4.8M, plus $2.4M, plus $1.0M = $8.2M. Break-even = $2M / $8.2M = 24%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'Yes it is working: $6.2M net a year. It is below target on use, so I would fix repeat use'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "One quarter only, adopter bias, low repeat use, harm to customers. Recheck in two quarters"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Pause or redesign if value stays under the $2M running cost for two more quarters"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not just compare adopters with non-adopters?",
        "a": "Keen customers choose the feature, so the gap is inflated. Here it would say $14.2M a year, against $8.2M from the holdout, about 1.7 times too high."
      },
      {
        "q": "What if repeat use never improves?",
        "a": "Then value stays near $8.2M, net $6.2M, still above cost. Even at 30% repeat use the net is $4.15M. I would set a date to recheck."
      },
      {
        "q": "Which metric matters most?",
        "a": "The bank impact measured with a holdout, because it ties the feature to money. The usage metrics explain why the impact is large or small."
      },
      {
        "q": "One quarter is short. What would you do?",
        "a": "Treat it as an early read, keep the holdout, and confirm at six months. If the leave effect faded to zero, net would still be $1.4M."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Holdout results by customer group, repeat use by week, complaints and opt-outs, and how many budgets lead to later action such as saving."
      }
    ],
    "pitfalls": [
      "Defining working as sign-ups only. Use a ladder: try it, come back, helps the customer, helps the bank, no harm.",
      "Comparing adopters with non-adopters. Use the holdout group, because keen customers choose the feature.",
      "Ignoring the cost. Net the $2M running cost from the $8.2M value.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
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
        "a": "Yes, a random 10% of the 5M cardholders did not get alerts. Their complaint rate is 0.40% a quarter (20,000 in total). With alerts it is 0.52% (26,000)."
      },
      {
        "q": "What are the complaints about?",
        "a": "Fraud complaints fell from 8,000 to 5,000. Wrongly blocked purchases rose from 4,000 to 7,000. Too many alerts is new at 6,000. Everything else stays at 8,000."
      },
      {
        "q": "What do fraud losses look like?",
        "a": "$40M a year without alerts and $34M with alerts, measured against the holdout."
      },
      {
        "q": "What does a complaint cost?",
        "a": "$15 to handle plus about 7 points of extra churn. A retained account is worth $400, so about $43 a complaint."
      },
      {
        "q": "What does the feature cost to run?",
        "a": "$2M a year."
      },
      {
        "q": "Is there any regulatory or customer-harm concern?",
        "a": "Complaint volume is watched closely by leadership and regulators, and some older customers find the alerts confusing."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
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
            "Holdout",
            "10% get no alerts. Complaint rate 0.40% vs 0.52% with alerts",
            "So the feature caused the rise"
          ],
          [
            "Complaints per quarter, total",
            "20,000 without alerts. 26,000 with alerts",
            "+6,000 (+30%)"
          ],
          [
            "By type: fraud / blocked purchase / too many alerts / other",
            "8,000 to 5,000. 4,000 to 7,000. 0 to 6,000. 8,000 to 8,000",
            "-3,000, +3,000, +6,000, 0"
          ],
          [
            "Fraud losses",
            "$40M a year without alerts. $34M with alerts",
            "$6M saving"
          ],
          [
            "Cost of one complaint",
            "$43",
            "$15 to handle + 7 points of extra churn x $400"
          ],
          [
            "Cost to run the feature",
            "$2M a year",
            "Assumed"
          ],
          [
            "Customer harm",
            "Some older customers find alerts confusing",
            "Complaints are watched by regulators"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So we rolled out a fraud alert feature and complaints went up. I need to decide whether to keep, fix or kill it. Can I ask what the alert does, whether some customers did not get it, what the complaints are about, and what each complaint and the feature cost? If not, I will assume."
        ],
        [
          "L: Lay out",
          "I will answer three questions. Did the feature cause the rise? Which complaints rose and which fell? And is the feature worth more than it costs?"
        ],
        [
          "E: Evaluate",
          "With 5M cardholders, the holdout without alerts has 0.40%, or 20,000 complaints a quarter. With alerts it is 0.52%, or 26,000, up 30%. So the feature caused the rise. Fraud complaints fell 3,000, blocked purchases rose 3,000 and alert complaints rose 6,000. A complaint costs $15 plus 7 points of churn on a $400 account, so $43. 24,000 extra a year is about $1.03M. Fraud losses fell from $40M to $34M, a $6M saving."
        ],
        [
          "A: Assess",
          "Net of the $2M running cost, that is $6M minus $1.03M minus $2M, about $3.0M a year. Killing it would lose that. The kill point is a fraud saving of $3.03M, or each complaint costing $167. The problems are too many alerts and blocked purchases, and both can be fixed."
        ],
        [
          "R: Recommend",
          "I recommend we keep it and fix it. Two reasons: it adds about $3.0M a year, and the complaint causes are fixable. Alert only on risky payments, add a one-tap 'This was me', and recheck in 90 days against the holdout. If the fix works, net rises to about $4.0M. Risks are confused older customers and regulator attention. If you wanted a more cautious answer, I would pause alerts for older customers while we fix it."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Fraud alert feature launched, complaints went up<br/>Keep, fix or kill?\"]\nC --> L[\"L: Lay out<br/>1 Did the feature cause the rise?<br/>2 Which complaints rose, which fell?<br/>3 Is it worth more than it costs?\"]\nL --> E[\"E: Evaluate<br/>Use the holdout, split the complaints, then price them\"]\nE --> E1[\"Cause<br/>Holdout: 0.40% without alerts<br/>0.52% with alerts<br/>20K to 26K a quarter (+30%)\"]\nE --> E2[\"Complaints<br/>Fraud: -3K. Blocked purchases: +3K<br/>Too many alerts: +6K (new)\"]\nE --> E3[\"Money<br/>Fraud saved $6M<br/>Extra complaints cost $1.03M<br/>Run cost $2M\"]\nE1 --> A[\"A: Assess<br/>Net value is about $3.0M a year<br/>Kill only if the saving drops to $3.03M<br/>Both problems can be fixed\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Keep it and fix it<br/>Alert only on risky payments, one-tap This was me<br/>Recheck in 90 days. Net target $4.0M\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Did the feature cause the rise?<br/>No alerts (holdout): 20,000 a quarter = <b>0.40%</b><br/>With alerts: 26,000 = <b>0.52%</b><br/>Rise = <b>+6,000 (+30%)</b>\"]\nA --> B[\"2 What moved? (per quarter)<br/>Fraud complaints: 8,000 to 5,000 = <b>-3,000</b><br/>Blocked purchases: 4,000 to 7,000 = <b>+3,000</b><br/>Too many alerts: 0 to 6,000 = <b>+6,000</b>\"]\nB --> C1[\"Cost of one complaint<br/>$15 to handle + 7 points x $400 = $28<br/>= <b>$43</b>\"]\nC1 --> C2[\"Extra complaints a year<br/>6,000 x 4 = 24,000<br/>24,000 x $43 = <b>$1.03M</b>\"]\nA --> D[\"3 Fraud saved<br/>$40M - $34M = <b>$6M a year</b>\"]\nC2 --> E[\"4 Net value a year<br/>$6M - $1.03M - $2M run cost<br/>= <b>about $3.0M</b>\"]\nD --> E\nE --> F[\"5 After the fix (target)<br/>Alert complaints 6,000 to 2,000<br/>Blocked 7,000 to 5,000<br/>Extra complaints = 0, net = <b>$4.0M</b>\"]\nE --> G1[\"Check: kill point<br/>Saving must fall to $1.03M + $2M<br/>= <b>$3.03M</b>\"]\nE --> G2[\"Check: complaint cost to kill<br/>$4M / 24,000 = <b>$167</b> each<br/>3.9 times today's $43\"]\nE --> G3[\"Check: if fraud saving halves<br/>$3M - $1.03M - $2M<br/>= <b>about $0</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B n1;\nclass C1,C2,D n2;\nclass E,F n3;\nclass G1,G2,G3 n4;\n"
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
              "What the feature does, holdout group, what the complaints are about, costs, customer harm"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Did it cause the rise? Which complaints? Is it worth the cost?"
            ],
            [
              "E Evaluate",
              "Do the math out loud in short steps, with units",
              "The interview has several separate math problems, often with algebra",
              "Complaints +30%. Fraud saving $6M. Complaint cost $1.03M"
            ],
            [
              "A Assess",
              "Say what the numbers mean: net value, kill point, what can be fixed",
              "Turns numbers into a business view",
              "Net about $3.0M a year. Kill point is a $3.03M saving"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Keep and fix. A defensible alternative: pause for older customers while you fix it"
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
              "How much did complaints rise?",
              "Without alerts 20,000 a quarter. With alerts 26,000. 6,000 / 20,000",
              "+30% (0.40% to 0.52%)"
            ],
            [
              "2",
              "How much does one complaint cost?",
              "$15 to handle + (7% x $400 lost account value = $28)",
              "$43"
            ],
            [
              "3",
              "What do the extra complaints cost a year?",
              "6,000 x 4 quarters = 24,000. 24,000 x $43",
              "$1.03M"
            ],
            [
              "4",
              "How much fraud does the feature stop?",
              "$40M - $34M, measured against the holdout",
              "$6M a year"
            ],
            [
              "5",
              "What is the net value?",
              "$6M - $1.03M - $2M run cost",
              "About $3.0M a year"
            ],
            [
              "6",
              "What if the fix works?",
              "Extra complaints go to 0, so $6M - $0 - $2M",
              "$4.0M a year"
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
              "Fix works only half way (23,000 complaints a quarter)",
              "Net $3.48M a year",
              "Still better than today."
            ],
            [
              "Fraud saving halves to $3M",
              "Net about $0 (-$0.03M)",
              "This is close to the kill line."
            ],
            [
              "Extra complaints double to 48,000 a year",
              "Net $1.94M a year",
              "Still positive, but the fix becomes urgent."
            ],
            [
              "Each complaint loses 14 points of churn, not 7",
              "Complaint cost $71, net $2.3M",
              "Churn per complaint matters. Check it."
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
              "How much must the fraud saving fall before net is zero?",
              "S - $1.03M - $2M = 0",
              "S = $3.03M, about half of today's $6M"
            ],
            [
              "How much would each complaint have to cost for net to be zero?",
              "$6M - 24,000 x c - $2M = 0",
              "c = $4M / 24,000 = $167 (3.9 times $43)"
            ],
            [
              "How many extra complaints a year before net is zero?",
              "$6M - n x $43 - $2M = 0",
              "n = $4M / $43 = about 93,000 (3.9 times today's 24,000)"
            ],
            [
              "Where does the $43 come from? What churn gives a $43 complaint?",
              "$15 + p x $400 = $43",
              "p = 28 / 400 = 7%"
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
              "Too many alerts",
              "Customers get tired and ignore real fraud warnings",
              "Alert only on risky payments, and group alerts"
            ],
            [
              "Real purchases blocked",
              "Customers get stuck at the till or checkout",
              "Add one-tap 'This was me' so a real purchase goes through"
            ],
            [
              "Older customers confused",
              "Some do not understand the messages",
              "Plain words, a phone option and a human line"
            ],
            [
              "Regulator and leadership attention",
              "Complaint volume is watched closely",
              "Report complaints by type and show the fix plan"
            ],
            [
              "Fraud saving may shrink",
              "Fraudsters change tactics",
              "Track the saving against the holdout each quarter"
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
              "A random 10% of cardholders who get no alerts. It shows what would happen without the feature"
            ],
            [
              "Complaint rate",
              "Complaints divided by cardholders. Here 0.40% to 0.52% a quarter"
            ],
            [
              "False positive",
              "A real purchase flagged as suspicious"
            ],
            [
              "Fraud loss",
              "Money lost to unauthorized charges. Here $40M a year before alerts"
            ],
            [
              "Churn",
              "Customers leaving the bank"
            ],
            [
              "Net value",
              "Money saved minus the cost of complaints minus the cost to run the feature"
            ],
            [
              "Kill point",
              "The level where net value reaches zero"
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
              "Killing it because complaints went up",
              "Price the complaints and compare with the $6M fraud saving."
            ],
            [
              "Counting all complaints as one group",
              "Split them: fraud complaints fell, other types rose."
            ],
            [
              "Using before and after only",
              "Use the holdout group, because seasons and other changes can move complaints."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Keep, fix or kill? What does the alert do and who gets it?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Holdout rates, complaint types, fraud losses, cost per complaint, running cost, customer harm"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume the holdout effect is the same across all customers'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Extra complaints cost 24,000 x $43 = $1.03M. Net = $6M - $1.03M - $2M = about $3.0M"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'Keep it and fix it, because it still adds about $3.0M a year'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Too many alerts, blocked purchases, confused older customers, regulator attention. Recheck in 90 days"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Kill it if the fraud saving falls to about $3M and the fix does not work"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Why not kill it, since complaints went up?",
        "a": "It saves about $6M a year in fraud losses against $1.03M of extra complaint cost and a $2M running cost. Killing it would lose about $3.0M a year."
      },
      {
        "q": "What would make you kill it?",
        "a": "A net value below zero that cannot be fixed, for example the fraud saving falling to about $3M, or each complaint costing about $167. Also clear harm to a group of customers."
      },
      {
        "q": "How would you cut the alert complaints?",
        "a": "Alert only on risky transactions, group alerts, let customers choose the channel, and add a one-tap 'This was me' so real purchases are not blocked."
      },
      {
        "q": "How do you know the feature caused the complaints?",
        "a": "The 10% holdout: 0.40% without alerts versus 0.52% with. Before and after alone could be seasonality."
      },
      {
        "q": "What data would you ask for next?",
        "a": "Complaints by customer age group, how many alerts each customer gets, how often 'This was me' is tapped, and fraud caught per alert."
      }
    ],
    "pitfalls": [
      "Killing it because complaints went up. Price the complaints and compare with the $6M fraud saving.",
      "Counting all complaints as one group. Split them: fraud complaints fell, other types rose.",
      "Using before and after only. Use the holdout group, because seasons and other changes can move complaints.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
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
        "a": "10,000 signups, 50% funded, a $28K average loan, a 3.0% margin and a $300 fee. That is $1,140 a loan and $5.7M in total."
      },
      {
        "q": "What is the actual?",
        "a": "10,000 signups, 40% funded (4,000 loans), a $22K average loan, a 2.5% margin and a $150 average fee. That is $700 a loan and $2.8M."
      },
      {
        "q": "Could this be timing?",
        "a": "Loans are funding about 12 days after signup, as planned, so timing does not explain it."
      },
      {
        "q": "What changed in sales and pricing?",
        "a": "Promotional rates and fee waivers were used to win signups. Half of the fees were waived."
      },
      {
        "q": "What data can we see in the funnel?",
        "a": "Counts at each step from quote to funded loan, loan size, rate and fee for each loan. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Signups",
            "10,000 in the plan and 10,000 actual",
            "A signup is a rate quote request"
          ],
          [
            "Share funded",
            "Plan 50% = 5,000 loans. Actual 40% = 4,000 loans",
            ""
          ],
          [
            "Average loan",
            "Plan $28K. Actual $22K",
            "Balance refinanced"
          ],
          [
            "Margin (net interest a year)",
            "Plan 3.0%. Actual 2.5%",
            "Interest rate minus cost of funds"
          ],
          [
            "Origination fee",
            "Plan $300. Actual $150",
            "Half of fees were waived"
          ],
          [
            "Revenue per loan",
            "Plan $1,140. Actual $700",
            "Loan x margin + fee"
          ],
          [
            "Total first-year revenue",
            "Plan $5.7M. Actual $2.8M",
            "Gap $2.9M, 51% below plan"
          ],
          [
            "Timing",
            "Loans fund about 12 days after signup, as planned",
            "So timing does not explain the gap"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So the auto-refinance product hit its signup target but revenue is below plan. I will treat revenue as first-year interest margin plus fees. Can I ask what a signup is, how the plan was built, and whether timing could explain it? If not, I will assume."
        ],
        [
          "L: Lay out",
          "I will check three things. First, is it timing or counting. Second, which part of revenue is short: loans funded, loan size, margin or fees. Third, why, and what to fix."
        ],
        [
          "E: Evaluate",
          "The plan was 10,000 signups, 50% funded, so 5,000 loans. Each loan earns $28K times 3.0%, which is $840, plus a $300 fee, so $1,140. That is $5.7M. The actual is 40% funded, so 4,000 loans, at $22K times 2.5% plus $150, so $700 each. That is $2.8M. The gap is $2.9M, 51% below plan."
        ],
        [
          "A: Assess",
          "Loans fund in 12 days as planned, so it is not timing. The gap splits four ways: $1.14M from fewer loans funded, $0.72M from smaller loans, $0.44M from lower margin, and $0.60M from fee waivers. That adds to $2.9M. So the funnel is the biggest piece at 39%. Signups was the wrong goal, because it rewarded discounts and waivers."
        ],
        [
          "R: Recommend",
          "I recommend we fix the funnel after signup first. Two reasons: it is the biggest piece, and it does not hurt pricing. Then set rules for fee waivers and promo rates, and aim marketing at larger balances. Change the goal to funded loans and revenue per signup. Risks are a slow fix and early payoff. If the funnel is hard to fix, a price rise back to 3.0% is worth it only if we lose fewer than 13.6% of loans."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Auto-refinance hit 10,000 signups<br/>but revenue is below plan. Why?\"]\nC --> L[\"L: Lay out<br/>1 Is it timing or counting?<br/>2 Which piece of revenue is short?<br/>3 Why, and what do we fix?\"]\nL --> E[\"E: Evaluate<br/>Rebuild the plan, rebuild the actual, find the gap\"]\nE --> E1[\"Plan<br/>10,000 x 50% funded = 5,000 loans<br/>x $1,140 each = $5.7M\"]\nE --> E2[\"Actual<br/>10,000 x 40% funded = 4,000 loans<br/>x $700 each = $2.8M\"]\nE --> E3[\"Gap = $2.9M (51%)<br/>Fewer loans $1.14M, smaller loans $0.72M<br/>Lower margin $0.44M, fee waivers $0.60M\"]\nE1 --> A[\"A: Assess<br/>Signups was the wrong goal<br/>Funnel is the biggest piece: 39% of the gap<br/>Not timing: loans fund in 12 days\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Fix the funnel after signup first<br/>Set rules for waivers and promo rates<br/>Change the goal to funded loans\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 The plan, one loan<br/>$28K x 3.0% margin = $840<br/>+ $300 fee = <b>$1,140</b><br/>5,000 loans x $1,140 = <b>$5.7M</b>\"]\nA --> B[\"2 The actual, one loan<br/>$22K x 2.5% margin = $550<br/>+ $150 fee = <b>$700</b><br/>4,000 loans x $700 = <b>$2.8M</b>\"]\nB --> C[\"3 The gap<br/>$5.7M - $2.8M = <b>$2.9M (51% below plan)</b>\"]\nC --> D1[\"Fewer loans funded<br/>(5,000 - 4,000) x $1,140<br/>= <b>$1.14M (39%)</b>\"]\nC --> D2[\"Smaller loans<br/>4,000 x ($28K - $22K) x 3.0%<br/>= <b>$0.72M (25%)</b>\"]\nC --> D3[\"Lower margin<br/>4,000 x $22K x (3.0% - 2.5%)<br/>= <b>$0.44M (15%)</b>\"]\nC --> D4[\"Fee waivers<br/>4,000 x ($300 - $150)<br/>= <b>$0.60M (21%)</b>\"]\nD1 --> E[\"4 Check: sum of the four<br/>1.14 + 0.72 + 0.44 + 0.60 = <b>$2.90M</b>\"]\nD2 --> E\nD3 --> E\nD4 --> E\nE --> F1[\"Check: price rise break-even<br/>Margin back to 3.0% = $810 a loan<br/>OK if we lose fewer than <b>13.6%</b> of loans\"]\nE --> F2[\"Check: needed funded share<br/>$5.7M / (10,000 x $700)<br/>= <b>81%</b>, so fix more than the funnel\"]\nE --> F3[\"Check: if funnel only gets to 50%<br/>5,000 x $700 = $3.5M<br/>Gap closes by <b>$0.7M</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A,B,C n1;\nclass D1,D2,D3,D4 n2;\nclass E n3;\nclass F1,F2,F3 n4;\n"
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
              "What a signup is, how revenue is measured, how the plan was built, timing, what changed"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Timing or counting? Which piece is short? Why, and what to fix?"
            ],
            [
              "E Evaluate",
              "Do the math out loud in short steps, with units",
              "The interview has several separate math problems, often with algebra",
              "Plan $5.7M, actual $2.8M, gap $2.9M split four ways"
            ],
            [
              "A Assess",
              "Say what the numbers mean: biggest piece, root cause, break-even",
              "Turns numbers into a business view",
              "Funnel is 39% of the gap. Signups was the wrong goal"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Fix the funnel first. A defensible alternative: raise the price first if the funnel is hard to fix"
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
              "What was the plan?",
              "$28K x 3.0% + $300 = $1,140 a loan. 10,000 x 50% = 5,000 loans. 5,000 x $1,140",
              "$5.7M"
            ],
            [
              "2",
              "What is the actual?",
              "$22K x 2.5% + $150 = $700 a loan. 10,000 x 40% = 4,000 loans. 4,000 x $700",
              "$2.8M"
            ],
            [
              "3",
              "How big is the gap?",
              "$5.7M - $2.8M. Divide by $5.7M",
              "$2.9M, 51% below plan"
            ],
            [
              "4",
              "How much comes from fewer loans funded?",
              "(5,000 - 4,000) x $1,140",
              "$1.14M (39%)"
            ],
            [
              "5",
              "How much from smaller loans, lower margin and fee waivers?",
              "4,000 x $6K x 3.0% = $0.72M. 4,000 x $22K x 0.5% = $0.44M. 4,000 x $150 = $0.60M",
              "$1.76M together"
            ],
            [
              "6",
              "Do the pieces add up?",
              "1.14 + 0.72 + 0.44 + 0.60",
              "$2.90M"
            ]
          ]
        },
        {
          "title": "Try changing one number",
          "headers": [
            "If this changes...",
            "Revenue",
            "What it tells you"
          ],
          "rows": [
            [
              "Share funded goes back to 50%",
              "5,000 x $700 = $3.5M (+$0.7M)",
              "Helps, but does not close the gap alone."
            ],
            [
              "No more fee waivers (fee back to $300)",
              "4,000 x $850 = $3.4M (+$0.6M)",
              "Easy, but may cost signups."
            ],
            [
              "Average loan goes back to $28K",
              "4,000 x ($700 + $150) = $3.4M (+$0.6M)",
              "Aim marketing at bigger balances."
            ],
            [
              "Price rises to 3.0% and we lose 20% of loans",
              "3,200 x $810 = $2.59M (-$0.21M)",
              "Worse than today. A big loss of loans wipes out the gain."
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
              "What share must fund to hit plan revenue if everything else stays at actual?",
              "10,000 x c x $700 = $5.7M",
              "c = 5.7M / 7M = 81%"
            ],
            [
              "If we raise the margin back to 3.0%, what share of loans can we lose before revenue is worse than today?",
              "4,000 x (1 - x) x $810 = 4,000 x $700",
              "1 - x = 700 / 810 = 0.864, so x = 13.6%"
            ],
            [
              "How many signups would we need to hit plan at today's $280 of revenue per signup?",
              "n x $280 = $5.7M",
              "n = 5.7M / 280 = about 20,400 signups"
            ],
            [
              "What margin alone would close the gap? (4,000 loans of $22K, $150 fee)",
              "4,000 x (22,000 x m + 150) = $5.7M",
              "22,000 m = 1,275, so m = 5.8%"
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
              "Funnel fix takes longer than planned",
              "Document and verification problems are slow to fix",
              "Start with the top two drop-off steps and track weekly"
            ],
            [
              "Price rise loses too many customers",
              "Customers can shop around for refinance rates",
              "Test on a small group. Stop if loss is above 13.6%"
            ],
            [
              "Early payoff",
              "Customers may refinance away, so first-year revenue overstates value",
              "Look at lifetime value and prepayment"
            ],
            [
              "Wrong incentive",
              "If the team is paid for signups, it will use discounts",
              "Change the goal to funded loans and revenue per signup"
            ],
            [
              "Credit risk on larger loans",
              "Chasing bigger balances may bring more risk",
              "Keep credit rules the same and watch losses"
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
              "Signup",
              "A customer who applied for a rate quote. Not yet a funded loan"
            ],
            [
              "Funded loan",
              "A loan where the money has been paid out"
            ],
            [
              "Funnel",
              "The steps from signup to funded loan"
            ],
            [
              "Net interest margin",
              "Interest we earn minus our cost of funds, as a percent of the loan. 3.0% plan, 2.5% actual"
            ],
            [
              "Origination fee",
              "A one-time fee when the loan is made. $300 plan, $150 actual"
            ],
            [
              "Waiver",
              "Choosing not to charge a fee"
            ],
            [
              "Conversion",
              "The share of signups that become funded loans. 50% plan, 40% actual"
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
              "Saying the gap is just timing",
              "Check it first. Here loans fund in 12 days, as planned."
            ],
            [
              "Looking at revenue as one number",
              "Break it into loans, size, margin and fee."
            ],
            [
              "Blaming the market",
              "Look at what we did: promos, waivers and a funnel that leaks."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the pieces add up to $2.9M."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Signups are on target but revenue is not. What is a signup and how is revenue counted?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "How the plan was built, funded share, loan size, margin, fee, timing, what changed"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume the plan and actual use the same first-year revenue definition'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Plan 5,000 x $1,140 = $5.7M. Actual 4,000 x $700 = $2.8M. Fewer loans: 1,000 x $1,140 = $1.14M"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'The biggest piece is the funnel, so I would fix that first'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Funnel fix may be slow, price rise may lose loans, early payoff. Test small"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Raise the price first if the funnel is hard to fix and we lose less than 13.6% of loans"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "Which gap would you fix first?",
        "a": "Conversion from signup to funded loan, the biggest piece at $1.14M, or 39% of the gap. It is also the least likely to hurt pricing."
      },
      {
        "q": "Would you raise the price back to plan?",
        "a": "Only after testing. At a 3.0% margin each loan earns $810, so the change is worth it if it loses fewer than about 13.6% of funded loans."
      },
      {
        "q": "Why was the signup target a poor goal?",
        "a": "It rewarded interest, not funded loans, so the team used discounts and fee waivers to win signups. A better goal is funded loans or revenue per signup. Plan was $570 a signup and actual is $280."
      },
      {
        "q": "What if revenue per loan is fine but early payoff is high?",
        "a": "Then first-year revenue overstates value. Look at lifetime value and prepayment, and consider a prepayment fee or a stronger relationship offer."
      },
      {
        "q": "Can we close the gap by fixing the funnel alone?",
        "a": "No. Even at 50% funded, revenue is $3.5M, so $2.2M still missing. We would need 81% funded to hit plan, so we also need fee rules, bigger balances and price discipline."
      }
    ],
    "pitfalls": [
      "Saying the gap is just timing. Check it first. Here loans fund in 12 days, as planned.",
      "Looking at revenue as one number. Break it into loans, size, margin and fee.",
      "Blaming the market. Look at what we did: promos, waivers and a funnel that leaks.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the pieces add up to $2.9M.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
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
        "q": "What is the goal, and over what time?",
        "a": "Maximize profit over three years, while keeping risk acceptable and fitting the bank's strategy."
      },
      {
        "q": "What does each product need this year?",
        "a": "About $15M for the card and $10M for savings. Only one can be funded this year."
      },
      {
        "q": "What profit does each earn if the plan works?",
        "a": "Card: $2M, $14M, $26M over years 1 to 3, so $42M. Savings: $5M, $11M, $15M, so $31M. The card ramps slowly. Savings starts earning sooner."
      },
      {
        "q": "How likely is each to hit plan?",
        "a": "The card is new for us, with a 50% chance of reaching plan. Savings is simpler, with an 80% chance."
      },
      {
        "q": "What happens if the plan is missed?",
        "a": "The card earns about 25% of plan, which is $10.5M. Savings earns about 60% of plan, which is $18.6M."
      },
      {
        "q": "What are the main risks?",
        "a": "For the card: credit losses and regulation. For savings: the spread (about 0.6%) shrinking if rates fall, and customers chasing higher rates."
      },
      {
        "q": "Can the other product be done later?",
        "a": "Yes, next year, if the numbers justify it. Treat all figures as working assumptions."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal",
            "Maximize profit over three years, with acceptable risk",
            "Also fits the bank's strategy"
          ],
          [
            "Investment this year",
            "Card $15M. Savings $10M",
            "Build plus launch. Only one can be funded"
          ],
          [
            "Profit by year (plan)",
            "Card $2M / $14M / $26M. Savings $5M / $11M / $15M",
            "Card ramps slowly"
          ],
          [
            "3-year profit (plan)",
            "Card $42M. Savings $31M",
            "Net: card $27M, savings $21M"
          ],
          [
            "Chance of hitting plan",
            "Card 50%. Savings 80%",
            "Card is new to us"
          ],
          [
            "Profit if plan is missed",
            "Card 25% of plan = $10.5M. Savings 60% of plan = $18.6M",
            "Assumed"
          ],
          [
            "Main risks",
            "Card: credit losses, regulation. Savings: falling spread, customers chasing rates",
            "Spread is about 0.6% today"
          ],
          [
            "Timing",
            "The other product can be done next year",
            "If the numbers justify it"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So we can fund only one of two products this year, a small business credit card or a high-yield savings account. I will define best as the most profit over three years after risk. Can I ask what each one needs, what it earns each year, and how likely each is to hit plan? If you do not have it, I will assume."
        ],
        [
          "L: Lay out",
          "I will ask two questions. Which earns more if the plan works? And which is more likely to work? Then I will combine them and see what would change the answer."
        ],
        [
          "E: Evaluate",
          "The card needs $15M and earns 2, 14 and 26, so $42M over three years. That is $27M net. Savings needs $10M and earns 5, 11 and 15, so $31M, or $21M net. On plan, the card looks better. But the card has a 50% chance of plan and pays $10.5M if it misses. That gives $26.25M, or $11.25M net. Savings has an 80% chance and pays $18.6M if it misses. That gives $28.5M, or $18.5M net."
        ],
        [
          "A: Assess",
          "So after risk, savings is ahead by about $7M. It also pays back faster, 17 months against 23. The card would only win if its chance of plan were 73% or higher. The main risk for savings is the spread falling. The main risk for the card is credit losses."
        ],
        [
          "R: Recommend",
          "I recommend we fund savings this year. Two reasons: it earns more after risk, $18.5M against $11.3M, and it pays back sooner. Risks are a falling spread, so I would set a rate floor, and customers chasing higher rates. Next step, run a small card pilot to learn about demand and losses. If you want the card, I would back it only if the pilot shows a 73% or better chance of reaching plan."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Fund only one: card ($15M) or savings ($10M)<br/>Goal: best 3-year profit after risk\"]\nC --> L[\"L: Lay out<br/>1 Which earns more if the plan works?<br/>2 Which is more likely to work?\"]\nL --> E[\"E: Evaluate<br/>Compare the plan case, then the risk case\"]\nE --> E1[\"Plan case<br/>Card $42M - $15M = $27M<br/>Savings $31M - $10M = $21M\"]\nE --> E2[\"Risk case<br/>Card: 50% chance of plan, miss pays $10.5M<br/>Savings: 80% chance, miss pays $18.6M\"]\nE --> E3[\"Risk-adjusted<br/>Card $26.3M - $15M = $11.3M<br/>Savings $28.5M - $10M = $18.5M\"]\nE1 --> A[\"A: Assess<br/>Savings wins by about $7M<br/>Card needs a 73% chance of plan to win\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Fund savings this year<br/>Pilot the card, then look again next year\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Plan case, 3 years<br/>Card 2 + 14 + 26 = <b>$42M</b><br/>Savings 5 + 11 + 15 = <b>$31M</b>\"]\nA --> B[\"2 Take off the investment<br/>Card 42 - 15 = <b>$27M</b><br/>Savings 31 - 10 = <b>$21M</b>\"]\nB --> C[\"3 If the plan is missed<br/>Card 25% x 42 = <b>$10.5M</b><br/>Savings 60% x 31 = <b>$18.6M</b>\"]\nC --> D1[\"4 Card, expected profit<br/>50% x 42 + 50% x 10.5<br/>= <b>$26.25M</b>\"]\nC --> D2[\"4 Savings, expected profit<br/>80% x 31 + 20% x 18.6<br/>= <b>$28.52M</b>\"]\nD1 --> E1[\"5 Card net<br/>26.25 - 15<br/>= <b>$11.25M</b>\"]\nD2 --> E2[\"5 Savings net<br/>28.52 - 10<br/>= <b>$18.52M</b>\"]\nE1 --> F[\"6 Compare<br/>18.52 - 11.25<br/>= <b>$7.3M more for savings</b><br/>Payback: savings 17 months, card 23\"]\nE2 --> F\nF --> G1[\"Check 1: card break-even<br/>10.5 + 31.5 x p - 15 = 18.52<br/>p = <b>73% chance of plan</b>\"]\nF --> G2[\"Check 2: if the card chance is 80%<br/>0.8 x 42 + 0.2 x 10.5 - 15<br/>= <b>$20.7M, card wins</b>\"]\nF --> G3[\"Check 3: if savings only gets 60% of plan<br/>18.6 - 10 = <b>$8.6M</b><br/>Card wins at $11.25M\"]\nclass A,B,C n1;\nclass D1,D2,E1,E2 n2;\nclass F n4;\nclass G1,G2,G3 n3;\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;"
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
              "Restate the choice. Ask what 'best' means, what each costs, and how likely each is to work",
              "You drive the case and show a business owner mindset",
              "One product only. Goal is 3-year profit with acceptable risk. Card $15M, savings $10M"
            ],
            [
              "L Lay out",
              "Say your two questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Which earns more if the plan works? Which is more likely to work?"
            ],
            [
              "E Evaluate",
              "Do the math out loud: plan case, then the risk case",
              "Product choices are usually about money and risk together",
              "Card nets $27M and savings $21M on plan. After risk, card $11.3M and savings $18.5M"
            ],
            [
              "A Assess",
              "Say what the numbers mean and what would change the answer",
              "Turns numbers into a business view",
              "Savings wins by about $7M. The card would win only if its chance of plan is 73% or more"
            ],
            [
              "R Recommend",
              "Decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; you must commit and explain",
              "Fund savings. Pilot the card. Revisit next year"
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
              "3-year profit if the plan works",
              "Card 2 + 14 + 26. Savings 5 + 11 + 15",
              "Card $42M, savings $31M"
            ],
            [
              "2",
              "Net after the investment",
              "Card 42 - 15. Savings 31 - 10",
              "Card $27M, savings $21M"
            ],
            [
              "3",
              "Profit if the plan is missed",
              "Card 25% x 42. Savings 60% x 31",
              "Card $10.5M, savings $18.6M"
            ],
            [
              "4",
              "Expected 3-year profit",
              "Card 50% x 42 + 50% x 10.5. Savings 80% x 31 + 20% x 18.6",
              "Card $26.25M, savings $28.52M"
            ],
            [
              "5",
              "Expected net profit",
              "Card 26.25 - 15. Savings 28.52 - 10",
              "Card $11.25M, savings $18.52M"
            ],
            [
              "6",
              "Which one wins?",
              "18.52 - 11.25",
              "Savings by $7.3M"
            ]
          ]
        },
        {
          "title": "Try changing one number",
          "headers": [
            "If this changes...",
            "Net profit",
            "What it tells you"
          ],
          "rows": [
            [
              "Card chance of plan rises from 50% to 80%",
              "Card $20.7M vs savings $18.5M",
              "The card now wins. This is why a pilot to prove demand is worth doing."
            ],
            [
              "Savings chance of plan falls from 80% to 60%",
              "Savings $16.0M vs card $11.3M",
              "Savings still wins. It is not very sensitive to its own chance."
            ],
            [
              "Savings gets only 60% of plan for sure (spread shrinks)",
              "Savings $8.6M vs card $11.3M",
              "The card wins. This is the main thing that could change my answer."
            ],
            [
              "Card needs only $8M, not $15M",
              "Card $18.3M vs savings $18.5M",
              "Close to a tie. Cost control on the card matters."
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
              "What chance of plan must the card have to beat savings?",
              "p x 42 + (1 - p) x 10.5 - 15 = 18.52",
              "10.5 + 31.5p = 33.52, so p = 23.02 / 31.5 = 73%"
            ],
            [
              "Savings is only worth it if its chance of plan is above what?",
              "q x 31 + (1 - q) x 18.6 - 10 = 11.25",
              "18.6 + 12.4q = 21.25, so q = 2.65 / 12.4 = 21%"
            ],
            [
              "If the card has a 50% chance, how much must it pay when it misses?",
              "0.5 x 42 + 0.5 x m - 15 = 18.52",
              "0.5m = 12.52, so m = $25.0M (60% of plan, not 25%)"
            ],
            [
              "How little must the card cost to tie savings?",
              "26.25 - I = 18.52",
              "I = 26.25 - 18.52 = $7.7M"
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
              "Credit losses on the card",
              "Small businesses may fail to repay, and losses can be higher than planned",
              "Tighten the approval rules and start with a small pilot"
            ],
            [
              "Regulation",
              "New products face extra rules and checks",
              "Involve compliance from the start"
            ],
            [
              "Falling spread on savings",
              "If rates fall, we earn less on each deposit",
              "Set a rate floor so the spread stays at 0.6% or more"
            ],
            [
              "Customers chase higher rates",
              "Savers may move to a bank that pays more",
              "Track balances monthly and keep the rate competitive"
            ],
            [
              "Estimates are guesses",
              "All the figures are working assumptions",
              "Show a range, test the biggest risks, and update with real data"
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
              "Net profit",
              "Profit after taking off what we invested"
            ],
            [
              "Expected value",
              "Each result times its chance, added together"
            ],
            [
              "Risk-adjusted",
              "Counted after allowing for the chance things go worse than plan"
            ],
            [
              "Spread",
              "What we earn on deposits minus what we pay to savers"
            ],
            [
              "Payback",
              "How long until the profit repays the investment"
            ],
            [
              "Break-even",
              "The point where two choices are equal"
            ],
            [
              "Pilot",
              "A small test before a full launch"
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
              "Picking the biggest number",
              "The card wins on plan profit ($27M vs $21M). Always compare after risk, too."
            ],
            [
              "Ignoring the chance of success",
              "Use probabilities and a miss case, then show the expected value."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ],
            [
              "No alternative or next step",
              "Say what would flip your answer and what you would test first."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What does 'best' mean? Profit over how long? What does each need?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Investment, profit by year, chance of plan, profit if missed"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume the miss case is 25% of plan for the card'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Card chance needed: 10.5 + 31.5p - 15 = 18.52, so p = 73%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we fund savings: it nets $18.5M after risk, against $11.3M'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Credit losses, falling spread; run a card pilot and revisit next year"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Choose the card if pilot data shows a 73% or better chance of plan"
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
      "Picking the biggest number. The card wins on plan profit ($27M vs $21M). Always compare after risk, too.",
      "Ignoring the chance of success. Use probabilities and a miss case, then show the expected value.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction.",
      "No alternative or next step. Say what would flip your answer and what you would test first."
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
        "q": "What is the goal, and over what time?",
        "a": "Grow annual profit from our card business. The growth target counts total new accounts of the new product, not net of switchers."
      },
      {
        "q": "What are the two products?",
        "a": "A new no-fee cash-back card and an older annual-fee rewards card with about 1.0M customers. The old card earns $300 profit per customer a year. The new one earns $150."
      },
      {
        "q": "How many new accounts, and how much profit is reported?",
        "a": "300K new accounts, which was the target. At $150 each, that is $45M of reported profit."
      },
      {
        "q": "How much is cannibalized?",
        "a": "About 40% of the new accounts, 120K, belong to customers who closed or downgraded the old card within 90 days."
      },
      {
        "q": "Would those customers have left anyway?",
        "a": "We estimate about 25% of switchers, 30K, were about to leave for a rival."
      },
      {
        "q": "Which customers are switching?",
        "a": "We have not yet split switchers by value. Assume an average mix."
      },
      {
        "q": "Is there a constraint on how you answer?",
        "a": "Treat all figures as working assumptions and show the math. I care about your reasoning and your recommendation."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
        "headers": [
          "Item",
          "Value",
          "Note"
        ],
        "rows": [
          [
            "Goal",
            "Annual profit from the card business",
            "Growth target counts total new accounts"
          ],
          [
            "Old card (annual-fee rewards)",
            "1.0M customers. $300 profit each a year",
            "Assumed"
          ],
          [
            "New card (no-fee cash-back)",
            "300K new accounts. $150 profit each a year",
            "300K was the target"
          ],
          [
            "Reported profit",
            "300K x $150 = $45M",
            "What the target counts"
          ],
          [
            "Switchers",
            "40% = 120K",
            "Closed or downgraded the old card within 90 days"
          ],
          [
            "Truly new customers",
            "60% = 180K",
            "Would not have joined otherwise"
          ],
          [
            "Switchers leaving anyway",
            "25% = 30K",
            "Were about to leave for a rival"
          ],
          [
            "Switchers by value",
            "Not known yet",
            "Assume an average mix"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So the new no-fee card is hitting its growth target, but some of its customers came from our older rewards card. I will treat cannibalization as new accounts held by customers who closed or downgraded the old card. Can I ask how many accounts, what each product earns, and how many switchers were about to leave anyway? If you do not have it, I will assume."
        ],
        [
          "L: Lay out",
          "I will answer three questions. How much of the growth is really new? What is it worth after what we lose and what we keep? And does it matter strategically?"
        ],
        [
          "E: Evaluate",
          "We have 300K new accounts at $150 profit, so $45M reported. 40% are switchers, that is 120K. So 180K are truly new, worth $27M. Of the 120K switchers, a quarter, 30K, were leaving anyway, so we keep $150 each, plus $4.5M. The other 90K each swap a $300 customer for a $150 one, so we lose $150 each, minus $13.5M. Net is $18M."
        ],
        [
          "A: Assess",
          "So the net gain is $18M, only 40% of the $45M reported. It is a gain, not a loss. It only turns negative if more than two thirds of the new accounts are switchers. What matters most is which customers switched. Losing top-tier customers is far worse."
        ],
        [
          "R: Recommend",
          "I would accept some cannibalization and manage it. Two reasons: it is still a net gain of $18M, and it keeps customers who would otherwise leave for a rival. I would change the target to net incremental profit, protect high-value customers with targeting rules and an upgrade path, and act if switchers pass 50%. An alternative is to stop promoting the new card to existing customers entirely, which trades growth for less cannibalization."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>New no-fee card hit 300K accounts<br/>Is taking from our $300 rewards card a problem?\"]\nC --> L[\"L: Lay out<br/>1 How much growth is really new?<br/>2 What do we lose and keep?<br/>3 Is it a problem for strategy?\"]\nL --> E[\"E: Evaluate<br/>Split the 300K accounts, then count profit\"]\nE --> E1[\"New vs switchers<br/>40% switch = 120K<br/>60% new = 180K\"]\nE --> E2[\"Value<br/>New: 180K x $150 = $27M<br/>Saved leavers: 30K x $150 = +$4.5M\"]\nE --> E3[\"Cost<br/>Lost switchers: 90K x ($300 - $150)<br/>= -$13.5M\"]\nE1 --> A[\"A: Assess<br/>Net $18M, only 40% of the $45M reported<br/>Bad only if over 2/3 are switchers\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Accept some cannibalization and manage it<br/>Track net profit, protect top customers\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 What is reported<br/>300K accounts x $150<br/>= <b>$45M</b>\"]\nA --> B[\"2 Split the accounts<br/>40% x 300K = <b>120K switchers</b><br/>60% x 300K = <b>180K truly new</b>\"]\nB --> C1[\"3 Truly new<br/>180K x $150<br/>= <b>+$27M</b>\"]\nB --> C2[\"3 Switchers who would leave anyway<br/>25% x 120K = 30K<br/>30K x $150 = <b>+$4.5M</b>\"]\nB --> C3[\"3 Switchers who would have stayed<br/>75% x 120K = 90K<br/>90K x ($300 - $150) = <b>-$13.5M</b>\"]\nC1 --> D[\"4 Net gain<br/>27 + 4.5 - 13.5<br/>= <b>$18M</b>\"]\nC2 --> D\nC3 --> D\nD --> E[\"5 Per new account<br/>$18M / 300K = <b>$60</b><br/>$18M / $45M = <b>40% of reported</b>\"]\nE --> F1[\"Check 1: break-even switcher share s<br/>150 x (1 - 1.5 x s) = 0<br/><b>s = 2/3 = 67%</b>\"]\nE --> F2[\"Check 2: accounts needed for $45M net<br/>$45M / $60<br/><b>750K accounts</b>\"]\nE --> F3[\"Check 3: if 60% switch<br/>150 x (1 - 0.9) x 300K<br/><b>$4.5M</b>\"]\nclass A,B n1;\nclass C1,C2,C3 n2;\nclass D,E n4;\nclass F1,F2,F3 n3;\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;"
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
              "Restate the problem. Ask what the two products are, how many customers switched, and what the goal is",
              "You drive the case and show a business owner mindset",
              "New $150 card, old $300 card, 300K new accounts, 40% are switchers"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "How much is new? What do we lose and keep? What does it mean for strategy?"
            ],
            [
              "E Evaluate",
              "Split the accounts, then count the profit gained and lost",
              "Cannibalization is a counting problem: compare with what would have happened anyway",
              "$27M from new customers, +$4.5M saved, -$13.5M lost"
            ],
            [
              "A Assess",
              "Say what the net number means and when it turns bad",
              "Turns numbers into a business view",
              "Net $18M, which is 40% of the $45M reported. Bad only if over 67% are switchers"
            ],
            [
              "R Recommend",
              "Decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; you must commit and explain",
              "Accept and manage it. Change the target to net profit. Protect top customers"
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
              "Profit the new card reports",
              "300K accounts x $150",
              "$45M"
            ],
            [
              "2",
              "How many are switchers or new?",
              "40% x 300K and 60% x 300K",
              "120K switchers, 180K new"
            ],
            [
              "3",
              "Profit from truly new customers",
              "180K x $150",
              "+$27M"
            ],
            [
              "4",
              "Switchers who were leaving anyway",
              "25% x 120K = 30K. We keep $150 each",
              "+$4.5M"
            ],
            [
              "5",
              "Switchers who would have stayed",
              "75% x 120K = 90K. Each swaps $300 for $150, so loses $150",
              "-$13.5M"
            ],
            [
              "6",
              "Net gain and share of reported",
              "27 + 4.5 - 13.5. Then 18 / 45",
              "$18M, which is 40%"
            ]
          ]
        },
        {
          "title": "Try changing one number",
          "headers": [
            "If this changes...",
            "Net profit",
            "What it tells you"
          ],
          "rows": [
            [
              "60% of accounts are switchers (not 40%)",
              "$4.5M",
              "150 x (1 - 0.9) x 300K. A small rise in switchers wipes out most of the gain."
            ],
            [
              "Only 20% are switchers",
              "$31.5M",
              "150 x (1 - 0.3) x 300K. Close to the reported $45M, but still lower."
            ],
            [
              "None of the switchers would have left anyway",
              "$9.0M",
              "Half of the $18M. Check this assumption with data."
            ],
            [
              "Switchers are top customers worth $450, not $300",
              "$4.5M",
              "The value of the old card matters as much as the share of switchers."
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
              "What share of accounts can be switchers before the net gain is zero?",
              "Per account: 150 x (1 - s) + 150 x s x (0.25 - 0.75) = 0",
              "150 - 225s = 0, so s = 150 / 225 = 67%"
            ],
            [
              "How high must the old card profit P be for the net gain to reach zero (40% switchers)?",
              "0.6 x 150 + 0.4 x (0.25 x 150 + 0.75 x (150 - P)) = 0",
              "150 - 0.3P = 0, so P = $500"
            ],
            [
              "How many new accounts give $45M net, at $60 each?",
              "60 x n = 45,000,000",
              "n = 750,000 accounts"
            ],
            [
              "What share of accounts can be switchers if we want at least $90 net per account?",
              "150 x (1 - 1.5s) = 90",
              "1 - 1.5s = 0.6, so s = 0.4 / 1.5 = 27%"
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
              "Top customers switch",
              "The best customers move to the cheaper card",
              "Do not promote the new card to them. Add an upgrade path"
            ],
            [
              "Wrong target",
              "Counting gross accounts rewards growth that is only a swap",
              "Measure net incremental profit, and watch the switcher share"
            ],
            [
              "Estimates are weak",
              "We do not yet know the value of switchers or who would have left anyway",
              "Segment switchers by value and use a holdout group"
            ],
            [
              "Rival picks off our customers",
              "If we do not offer a cheaper option, someone else will",
              "Cannibalizing ourselves is better than being cannibalized by a rival"
            ],
            [
              "Old card loses its appeal",
              "If the new card looks better, fewer pay the annual fee",
              "Make the premium benefits clearly better"
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
              "Cannibalization",
              "New product sales that take customers from our own existing product"
            ],
            [
              "Incremental profit",
              "Profit we would not have had without the new product"
            ],
            [
              "Switcher",
              "A customer who closed or downgraded the old card within 90 days of getting the new one"
            ],
            [
              "Counterfactual",
              "What would have happened if we had not launched"
            ],
            [
              "Attrition",
              "Customers leaving us"
            ],
            [
              "Holdout group",
              "A group left out of the test so we can compare"
            ],
            [
              "Guardrail",
              "A limit that triggers action when crossed, such as 50% switchers"
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
              "Calling all growth good",
              "Reported growth is $45M but the net gain is $18M. Count what we lose."
            ],
            [
              "Calling cannibalization always bad",
              "Some switchers were leaving anyway. Cannibalizing ourselves beats losing them to a rival."
            ],
            [
              "Forgetting the value difference",
              "The old card earns $300 and the new one $150. A switcher costs us $150."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What are the two products? What is the goal? How is growth counted?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Profit per customer, share of switchers, share who were leaving anyway"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume switchers are an average mix of customers'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Net = 27 + 4.5 - 13.5 = $18M. Break-even: 150 - 225s = 0, so s = 67%"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'It is a problem only partly: we net $18M, 40% of the $45M reported'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Top customers switching; split switchers by value; set a 50% guardrail"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "If top customers are the switchers, stop promoting the new card to them"
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
      "Calling all growth good. Reported growth is $45M but the net gain is $18M. Count what we lose.",
      "Calling cannibalization always bad. Some switchers were leaving anyway. Cannibalizing ourselves beats losing them to a rival.",
      "Forgetting the value difference. The old card earns $300 and the new one $150. A switcher costs us $150.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction."
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
        "q": "What does the feature do, and what is the goal?",
        "a": "Applicants get an instant credit offer from a soft credit check and limited data. A full review follows if they accept. The goal is profit after credit losses."
      },
      {
        "q": "What is the current process, and how many accept?",
        "a": "A decision takes about two days. We approve about 100K applicants a year, and only 55% accept (55K) because many give up while waiting. Assume 70% would accept if it were instant."
      },
      {
        "q": "What are the unit economics?",
        "a": "Average balance $5K. Revenue 12% a year, which is $600. Servicing $60 a year."
      },
      {
        "q": "What is the loss rate?",
        "a": "4.0% of balances today, which is $200 a year. If instant for everyone with fewer checks, assume 5.5%, which is $275."
      },
      {
        "q": "Can we treat applicants differently?",
        "a": "Yes. Assume 70% are low risk with a 3.5% loss rate and 80% acceptance if instant. The other 30% are higher risk with a 5.5% loss rate. With an extra check and a $3K limit, 50% accept."
      },
      {
        "q": "Are there rules to follow?",
        "a": "Yes: fair lending, clear decline reasons and identity checks. Compliance must review the design."
      },
      {
        "q": "Any other constraints?",
        "a": "Treat all figures as working assumptions. We can pilot on part of the traffic first."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
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
            "Decision takes about 2 days; the rest give up"
          ],
          [
            "Accept if instant",
            "70% = 70K accounts",
            "Assumed"
          ],
          [
            "Balance, revenue, servicing",
            "$5K balance. 12% revenue = $600. Servicing $60 a year",
            "Assumed"
          ],
          [
            "Loss rate today",
            "4.0% = $200 a year",
            "Profit per account today $340"
          ],
          [
            "Loss rate if instant for everyone",
            "5.5% = $275 a year",
            "Weaker checks and adverse selection"
          ],
          [
            "Tier 1: low risk (70%)",
            "80% accept. Loss 3.5%",
            "Instant offer"
          ],
          [
            "Tier 2: higher risk (30%)",
            "50% accept. Loss 5.5%. Balance $3K",
            "Extra check and smaller limit"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "So we want to launch instant pre-approval and need to balance speed against credit risk. I will define success as profit after credit losses. Can I ask what a decision takes today, how many accept, what the loss rate is, and what the unit economics are? If you do not have it, I will assume."
        ],
        [
          "L: Lay out",
          "I will look at three things. The benefit: how many more applicants accept if it is instant. The risk: how much losses rise with fewer checks. And whether a design can keep the speed and limit the risk."
        ],
        [
          "E: Evaluate",
          "Each account earns $600 a year, costs $60 to service, and loses $200 at today's 4.0%. That is $340. With 100K approved and 55% accepting, 55K accounts give $18.7M. If instant is for everyone, 70K accept but losses rise to 5.5%, so profit per account is $265 and the total is $18.55M. That is no gain. A tiered design gives instant offers to the low-risk 70%. 56K accept at $365 each, $20.4M. The higher-risk 30% get an extra check and a $3K limit. 15K accept at $135 each, $2.0M. Total $22.5M."
        ],
        [
          "A: Assess",
          "So tiered adds about $3.8M, up 20%. Instant for everyone breaks even at a 5.46% loss rate. The main risks are adverse selection, fraud, fair lending, and losses that show up months later."
        ],
        [
          "R: Recommend",
          "I recommend the tiered design, launched as a pilot on 10% of applications with a control group. Two reasons: it earns about $3.8M more, and it keeps strict checks where risk is higher. Risks are adverse selection and fairness, so I would test approvals and limits across groups and set a kill switch if early delinquency or fraud passes a limit. An alternative is instant for everyone, but only if the pilot shows losses stay under 5.46%."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Launch instant pre-approval<br/>Goal: profit after credit losses\"]\nC --> L[\"L: Lay out<br/>1 Benefit: more people accept<br/>2 Risk: losses go up<br/>3 Can a design keep both?\"]\nL --> E[\"E: Evaluate<br/>Compare three options, per year\"]\nE --> E1[\"Today<br/>55K accounts x $340<br/>= $18.7M\"]\nE --> E2[\"Instant for everyone<br/>70K accounts x $265<br/>= $18.55M, no gain\"]\nE --> E3[\"Tiered<br/>Low risk 56K x $365 = $20.4M<br/>Higher risk 15K x $135 = $2.0M<br/>= $22.5M\"]\nE1 --> A[\"A: Assess<br/>Tiered adds about $3.8M, up 20%<br/>Instant for all breaks even at 5.5% losses\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Launch the tiered design as a 10% pilot<br/>Use a control group and a kill switch\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Profit per account today<br/>Revenue 12% x $5,000 = $600<br/>$600 - $60 service - $200 loss<br/>= <b>$340</b>\"]\nA --> B[\"2 Today's total<br/>100K x 55% = 55K accounts<br/>55K x $340 = <b>$18.7M</b>\"]\nB --> C1[\"3 Instant for everyone<br/>Loss 5.5% = $275<br/>$600 - $60 - $275 = <b>$265</b>\"]\nC1 --> C2[\"70K accounts x $265<br/>= <b>$18.55M</b><br/>No gain\"]\nB --> D1[\"4 Tiered: low risk (70%)<br/>70K x 80% = 56K accounts<br/>Loss 3.5% so profit <b>$365</b><br/>56K x $365 = <b>$20.4M</b>\"]\nB --> D2[\"4 Tiered: higher risk (30%)<br/>30K x 50% = 15K accounts<br/>Balance $3K: 360 - 60 - 165 = <b>$135</b><br/>15K x $135 = <b>$2.0M</b>\"]\nD1 --> E[\"5 Tiered total<br/>20.4 + 2.0 = <b>$22.5M</b><br/>$22.5M - $18.7M<br/>= <b>+$3.8M, up 20%</b>\"]\nD2 --> E\nC2 --> E\nE --> F1[\"Check 1: instant-for-all break-even loss<br/>70K x (540 - L) = 18.7M<br/><b>L = $273, or 5.46%</b>\"]\nE --> F2[\"Check 2: higher-risk tier makes no money at<br/>360 - 60 - L = 0<br/><b>L = $300, or 10%</b>\"]\nE --> F3[\"Check 3: low-risk loss can rise to 4.84%<br/>before tiered falls back to $18.7M\"]\nclass A,B n1;\nclass C1,C2,D1,D2 n2;\nclass E n4;\nclass F1,F2,F3 n3;\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;"
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
              "Restate the goal. Ask about today's process, acceptance, losses and rules",
              "You drive the case and show a business owner mindset",
              "Success is profit after credit losses. Today 55% accept and loss is 4.0%"
            ],
            [
              "L Lay out",
              "Say your questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Benefit: more accept. Risk: more losses. Can a design keep both?"
            ],
            [
              "E Evaluate",
              "Work out profit per account, then total for each option",
              "Speed and risk must be put in one number",
              "Today $18.7M. Instant for all $18.55M. Tiered $22.5M"
            ],
            [
              "A Assess",
              "Say what the numbers mean and where it breaks even",
              "Turns numbers into a business view",
              "Speed alone does not pay. Tiered adds about $3.8M. Fairness and fraud are the risks"
            ],
            [
              "R Recommend",
              "Decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; you must commit and explain",
              "Pilot the tiered design on 10% with a control group"
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
              "Profit per account today",
              "12% x $5,000 = $600. Then $600 - $60 - 4.0% x $5,000 ($200)",
              "$340"
            ],
            [
              "2",
              "Total profit today",
              "100K x 55% = 55K accounts. 55K x $340",
              "$18.7M"
            ],
            [
              "3",
              "Instant for everyone",
              "Loss 5.5% x $5,000 = $275. Profit $600 - $60 - $275 = $265. 70K x $265",
              "$18.55M"
            ],
            [
              "4",
              "Tiered, low-risk group",
              "70K x 80% = 56K accounts. Profit $600 - $60 - $175 = $365. 56K x $365",
              "$20.4M"
            ],
            [
              "5",
              "Tiered, higher-risk group",
              "30K x 50% = 15K accounts. $360 - $60 - $165 = $135. 15K x $135",
              "$2.0M"
            ],
            [
              "6",
              "Tiered total and gain",
              "20.4 + 2.0 = 22.5. Then 22.5 - 18.7",
              "$22.5M, up $3.8M (20%)"
            ]
          ]
        },
        {
          "title": "Try changing one number",
          "headers": [
            "If this changes...",
            "Yearly profit",
            "What it tells you"
          ],
          "rows": [
            [
              "Instant-for-all losses stay at 4.5%, not 5.5%",
              "$22.05M",
              "70K x ($600 - $60 - $225). Speed alone would pay. Test the real loss rate."
            ],
            [
              "Instant-for-all acceptance is only 60%, losses 5.5%",
              "$15.9M",
              "60K x $265. Worse than today. Acceptance gain is not enough."
            ],
            [
              "Low-risk tier losses are 4.5%, not 3.5%",
              "$19.7M",
              "56K x $315 + $2.0M. Still above $18.7M, but the gain shrinks to about $1M."
            ],
            [
              "Only 30% of the higher-risk group accepts",
              "$21.7M",
              "$20.4M + 9K x $135. The higher-risk tier is a small part of the gain."
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
              "At what loss rate does instant-for-all only match today?",
              "70,000 x (600 - 60 - L) = 18,700,000",
              "540 - L = 267, so L = $273, which is 5.46% of $5,000"
            ],
            [
              "What acceptance does instant-for-all need to match today at 5.5% losses?",
              "a x 100,000 x 265 = 18,700,000",
              "a = 18.7 / 26.5 = 70.6%"
            ],
            [
              "At what loss rate does the higher-risk tier stop making money?",
              "360 - 60 - L = 0",
              "L = $300, which is 10% of the $3K balance"
            ],
            [
              "How high can low-risk losses go before tiered matches today?",
              "56,000 x (540 - x) + 2,025,000 = 18,700,000",
              "540 - x = 297.8, so x = $242, which is 4.84% of $5,000"
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
              "Adverse selection",
              "Riskier people may rush to take a fast, easy offer",
              "Compare to a control group and track mix by tier"
            ],
            [
              "Fraud",
              "Fewer checks make fraud easier",
              "Keep identity checks and track fraud rate by tier"
            ],
            [
              "Fair lending",
              "Fast rules may treat some groups unfairly",
              "Test approval rates, limits and decline reasons across groups"
            ],
            [
              "Losses show up late",
              "Bad loans may not show for months",
              "Watch first-payment misses and 90-day delinquency early"
            ],
            [
              "Rules and reasons",
              "We must give clear decline reasons",
              "Involve compliance in the design; keep human review for borderline cases"
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
              "Pre-approval",
              "An early offer based on limited data, before the full review"
            ],
            [
              "Soft credit check",
              "A credit look that does not hurt the applicant's score"
            ],
            [
              "Adverse selection",
              "The mix of applicants gets worse when the offer is fast and easy"
            ],
            [
              "Loss rate",
              "Share of balances we do not get back"
            ],
            [
              "Delinquency",
              "Missing payments. 90-day means 90 days late"
            ],
            [
              "Control group",
              "A group handled the old way, for comparison"
            ],
            [
              "Kill switch",
              "A rule to stop the feature fast if risk goes too high"
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
              "Counting only the extra acceptances",
              "Instant for all lifts accounts from 55K to 70K but the profit is flat. Count losses, too."
            ],
            [
              "Treating all applicants the same",
              "Split by risk. Low-risk gets instant, the rest get an extra check and a smaller limit."
            ],
            [
              "Forgetting fairness and rules",
              "Say you will test across groups and involve compliance."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Launching to everyone at once",
              "Pilot on a small share with a control group and a kill switch."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "What does the feature do? What is success? What rules apply?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Acceptance today, loss rate, balance, revenue, servicing cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume instant raises acceptance to 70%'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Profit per account = $600 - $60 - $275 = $265. 70K x $265 = $18.55M"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend a tiered design: it earns $22.5M against $18.7M today'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Adverse selection, fraud, fair lending; run a 10% pilot with a kill switch"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Instant for everyone only if losses stay under 5.46%"
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
      "Counting only the extra acceptances. Instant for all lifts accounts from 55K to 70K but the profit is flat. Count losses, too.",
      "Treating all applicants the same. Split by risk. Low-risk gets instant, the rest get an extra check and a smaller limit.",
      "Forgetting fairness and rules. Say you will test across groups and involve compliance.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Launching to everyone at once. Pilot on a small share with a control group and a kill switch."
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
        "q": "Who is the segment and what is the product?",
        "a": "15M adults in the US with little access to normal banking or credit. The product is a low-fee account with a small credit line, offered through a mobile app and community partners."
      },
      {
        "q": "What is the goal and time horizon?",
        "a": "Profit, with payback inside 24 months, and responsible treatment of customers."
      },
      {
        "q": "How many people would want it, and how many would we win?",
        "a": "About 10% of the segment is interested. Assume we win 1 in 30 of them."
      },
      {
        "q": "What does one customer earn and cost per year?",
        "a": "Earns $250 (card fees $60, deposits $50, small loans $140). Costs $150 (servicing $40, loan losses $80, compliance and support $30)."
      },
      {
        "q": "Do customers move to bigger products?",
        "a": "About 1 in 4 move up within two years. A bigger product earns about $300 a year."
      },
      {
        "q": "What are the fixed and up-front costs?",
        "a": "$2.5M a year fixed. Up-front: $6M to build, plus $80 to win each customer."
      },
      {
        "q": "Any rules or limits?",
        "a": "Fair lending, clear disclosures, identity checks, and legal and compliance review. The product must not depend on penalty fees."
      }
    ],
    "tables": [
      {
        "title": "What the interviewer shares if you ask (assumptions)",
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
            "Interested",
            "10% = 1.5M",
            "Survey"
          ],
          [
            "We win",
            "1 in 30 = 50,000 customers",
            "Assumed"
          ],
          [
            "Revenue per customer a year",
            "$250",
            "Card fees $60 + deposits $50 + small loans $140"
          ],
          [
            "Cost per customer a year",
            "$150",
            "Servicing $40 + loan losses $80 + compliance $30"
          ],
          [
            "Moving up",
            "25% move to a product worth $300 a year",
            "Adds $75 per customer"
          ],
          [
            "Fixed cost / up-front",
            "$2.5M a year / $10M",
            "Build $6M + 50,000 x $80 = $4M"
          ]
        ]
      }
    ],
    "answer": {
      "speak": [
        [
          "C: Clarify",
          "We want to launch a product for underbanked customers, and I need to judge the opportunity and the risks. Before I start: who is the segment and what is the product? And how many people would want it, what does one customer earn and cost, and what are the fixed costs? If you do not have them, I will assume."
        ],
        [
          "L: Lay out",
          "I will ask two questions: is it a good business, and can we do it safely and fairly?"
        ],
        [
          "E: Evaluate",
          "Assume 15M adults and 10% are interested, so 1.5M. If we win 1 in 30, that is 50,000 customers. Each earns us about $100 a year. One in four move to bigger products, which adds about $75 each. That is about $8.75M, minus $2.5M of fixed cost, so $6.25M a year."
        ],
        [
          "A: Assess",
          "It pays back in about 19 months. Break-even is about 14,000 customers. The case depends on customers moving up: without it, payback is 4 years. The risks are credit losses, unfair models, relying on fees, and weak identity checks."
        ],
        [
          "R: Recommend",
          "I would go, with a pilot. Two reasons: it pays back inside two years, and moving up only needs to reach 1 in 6 customers. I would design it so it does not rely on penalty fees, involve compliance from day one, and pilot in two markets before scaling. If you wanted a more cautious answer, I would pilot a smaller group until moving up is proven."
        ]
      ],
      "exampleChart": "flowchart TD\nC[\"C: Clarify<br/>Launch a product for underbanked customers?\"]\nC --> L[\"L: Lay out<br/>1 Is it a good business?<br/>2 Can we do it safely and fairly?\"]\nL --> E[\"E: Evaluate<br/>Count customers, then profit per customer\"]\nE --> E1[\"Customers<br/>15M adults x 10% interested<br/>= 1.5M. We win 1 in 30 = 50K\"]\nE --> E2[\"Profit per customer<br/>Earn $250, spend $150<br/>= $100 a year\"]\nE --> E3[\"Moving up<br/>1 in 4 move to a bigger product<br/>= $75 more per customer\"]\nE1 --> A[\"A: Assess<br/>Total = $6.25M a year<br/>Pays back in about 19 months\"]\nE2 --> A\nE3 --> A\nA --> R[\"R: Recommend<br/>Go, with a pilot and safeguards\"]\n\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass E,E1,E2,E3 c3;\nclass A c4;\nclass R c5;",
      "exampleCharts": [
        {
          "id": "numbers",
          "title": "The numbers in one chart",
          "note": "Read top to bottom. Each box is one step of the math; the bold number is the result.",
          "code": "flowchart TD\nA[\"1 Customers<br/>15M adults x 10% interested = 1.5M<br/>Win 1 in 30 = <b>50,000 customers</b>\"]\nA --> B[\"2 Profit per customer a year\"]\nB --> B1[\"Earn $250<br/>card fees $60<br/>deposits $50<br/>small loans $140\"]\nB --> B2[\"Spend $150<br/>servicing $40<br/>loan losses $80<br/>compliance $30\"]\nB1 --> B3[\"$250 - $150 = <b>$100</b>\"]\nB2 --> B3\nB3 --> D[\"3 Add moving up<br/>25% x $300 = +$75<br/>= <b>$175 per customer</b>\"]\nD --> E[\"4 Total a year<br/>50,000 x $175 = $8.75M<br/>minus fixed $2.5M = <b>$6.25M</b>\"]\nE --> F[\"5 Payback<br/>Up-front $10M / $6.25M<br/>= <b>about 19 months</b>\"]\nF --> G1[\"Break-even<br/>$2.5M / $175<br/>= <b>14,286 customers</b>\"]\nF --> G2[\"Moving up needed<br/>for 24-month payback<br/>= <b>1 in 6</b>\"]\nF --> G3[\"If nobody moves up<br/>$2.5M a year<br/>= <b>4-year payback</b>\"]\n\nclassDef n1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef n2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef n3 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclassDef n4 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef n5 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclass A n1;\nclass B,B1,B3 n2;\nclass B2 n3;\nclass D,E n4;\nclass F n5;\nclass G1,G2,G3 n1;"
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
              "Segment size, interest, win rate, revenue and cost per customer, graduation, fixed and up-front cost, rules"
            ],
            [
              "L Lay out",
              "Say your two questions before calculating",
              "Shows structure and lets the interviewer steer",
              "Is it a good business? Can we do it safely and fairly?"
            ],
            [
              "E Evaluate",
              "Do the math out loud in short steps, with units",
              "The interview has several separate math problems, often with algebra",
              "50,000 customers, $175 each, $6.25M a year after fixed cost"
            ],
            [
              "A Assess",
              "Say what the numbers mean: payback, break-even, key driver",
              "Turns numbers into a business view",
              "Pays back in about 19 months; moving up is the key driver"
            ],
            [
              "R Recommend",
              "Give the decision first, then two reasons, then risks and next steps",
              "Several answers can be defended; what matters is that you commit and explain",
              "Go with a pilot. A defensible alternative: pilot a smaller group until moving up is proven"
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
              "How many customers could we win?",
              "15M adults x 10% interested = 1.5M. We win 1 in 30 of them: 1.5M / 30",
              "50,000 customers"
            ],
            [
              "2",
              "How much does one customer make us in a year?",
              "Earn $250 (card fees $60 + deposits $50 + small loans $140). Spend $150 (servicing $40 + loan losses $80 + compliance $30). $250 - $150",
              "$100 a year"
            ],
            [
              "3",
              "What if some customers move up to bigger products?",
              "1 in 4 customers move up. A bigger product earns us $300 a year. 25% x $300",
              "$75 more per customer"
            ],
            [
              "4",
              "What is the total profit each year?",
              "$100 + $75 = $175 per customer. 50,000 x $175 = $8.75M. Subtract $2.5M of fixed costs",
              "$6.25M a year"
            ],
            [
              "5",
              "When does it pay for itself?",
              "Up-front cost: build $6M + win customers 50,000 x $80 = $4M, so $10M. $10M / $6.25M = 1.6 years",
              "About 19 months"
            ]
          ]
        },
        {
          "title": "Try changing one number",
          "headers": [
            "If this changes...",
            "Profit a year",
            "What it tells you"
          ],
          "rows": [
            [
              "Nobody moves up (no bonus)",
              "$2.5M ($5M - $2.5M fixed)",
              "Payback becomes 4 years. Moving up is the key driver."
            ],
            [
              "Loan losses double (from $80 to $160)",
              "$2.25M",
              "Still positive, because moving up carries it."
            ],
            [
              "Only half the customers (25,000)",
              "$1.9M",
              "Still positive. We break even at about 14,000 customers."
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
              "How many customers do we need to break even?",
              "Profit = N x $175 - $2.5M = 0",
              "N = $2.5M / $175 = 14,286, which is 29% of the 50,000 target"
            ],
            [
              "What share must move up to pay back within 24 months?",
              "Need $10M / 2 = $5M a year. 50,000 x ($100 + $300g) - $2.5M = $5M",
              "$100 + $300g = $150, so g = 1/6 = 16.7%"
            ],
            [
              "How high can loan losses go before profit is zero, if nobody moves up?",
              "$250 - $40 - $30 - loss = $2.5M / 50,000 = $50",
              "Loss = $130, up from $80 (+63%)"
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
              "Credit risk",
              "Customers with little credit history are harder to judge, so more loans may not be repaid",
              "Start with small limits and raise them as customers pay on time"
            ],
            [
              "Fairness",
              "A scoring model can treat some groups worse without meaning to",
              "Check results for each group and be able to explain every decision"
            ],
            [
              "Fees",
              "Making money from penalty fees hurts customers and our reputation",
              "Design the product so it does not depend on penalty fees"
            ],
            [
              "Identity checks",
              "Customers may have few documents, but we must still stop fraud and money laundering",
              "Use several light checks that do not block honest customers"
            ],
            [
              "Rules and privacy",
              "Banking rules apply, and customers must agree to how their data is used",
              "Involve legal and compliance from day one"
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
              "Underbanked",
              "People with little access to normal banking or credit"
            ],
            [
              "Moving up (graduation)",
              "A customer starts with a small product and later takes a bigger one"
            ],
            [
              "Thin file",
              "A person with little credit history"
            ],
            [
              "Fair lending",
              "Treating similar customers fairly, whatever their background"
            ],
            [
              "Fixed cost",
              "A cost we pay whether we have 1 customer or 50,000"
            ],
            [
              "Contribution",
              "What each customer adds towards fixed costs after their own costs"
            ],
            [
              "Pilot",
              "A small real test before a full launch"
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
              "Seeing only risk",
              "Many customers are reliable and under-served; the opportunity is real."
            ],
            [
              "Making profit from penalty fees",
              "It creates harm and reputation risk; design a fee-light product."
            ],
            [
              "Waiting for the interviewer to give you data",
              "Ask for it. You drive the case."
            ],
            [
              "Hiding the math",
              "Say each step out loud, with units, and check the result makes sense."
            ],
            [
              "Forgetting to say assumptions",
              "Say 'I will assume...' and invite correction."
            ],
            [
              "Leaving compliance to the end",
              "Raise it at the start."
            ]
          ]
        }
      ],
      "table": {
        "title": "Capital One style checklist",
        "headers": [
          "Do this",
          "Why",
          "Example here"
        ],
        "rows": [
          [
            "Restate the problem and ask clarifying questions",
            "You lead the case and show a business owner mindset",
            "Who is the segment? What is the product? What is the goal?"
          ],
          [
            "Ask for the data you need",
            "Interviewers give data when you ask",
            "Interest rate, win rate, revenue and cost per customer, fixed and up-front cost"
          ],
          [
            "State assumptions",
            "Missing data is normal; reasonable assumptions are expected",
            "'I will assume 1 in 30 interested people join us'"
          ],
          [
            "Do the math out loud",
            "Math and algebra are tested directly",
            "Break-even customers = $2.5M / $175"
          ],
          [
            "Give the answer first",
            "Clear communication of complex ideas",
            "'I recommend we go, with a pilot, because it pays back in 19 months and moving up is realistic'"
          ],
          [
            "Name risks and next steps",
            "Shows business judgment",
            "Credit losses, fairness, fees; pilot in two markets"
          ],
          [
            "Offer an alternative",
            "Several answers can be defended",
            "Pilot a smaller group until moving up is proven"
          ]
        ]
      }
    },
    "followups": [
      {
        "q": "What data would you ask for next?",
        "a": "Loan loss rates for similar small-dollar customers, how many customers actually move up and how fast, acquisition cost by channel, and complaint data for similar products."
      },
      {
        "q": "How do you make it profitable without penalty fees?",
        "a": "Use card fees, deposits and fair-priced small credit, and rely on moving up to bigger products for most of the long-term profit."
      },
      {
        "q": "How would you underwrite customers with thin files?",
        "a": "Use cash-flow data from their account, small starting limits, step-up limits, and test the model for fair outcomes."
      },
      {
        "q": "What would make you stop or redesign?",
        "a": "Loss rates well above plan, complaints about fees or terms, unfair results across groups, or customers moving up far below the 1 in 6 the case needs."
      },
      {
        "q": "What is a defensible alternative recommendation?",
        "a": "Pilot a smaller group first, and scale only once moving up and loss rates are proven. It trades speed for lower risk."
      }
    ],
    "pitfalls": [
      "Seeing only risk. Many customers are reliable and under-served; the opportunity is real.",
      "Making profit from penalty fees. It creates harm and reputation risk; design a fee-light product.",
      "Waiting for the interviewer to give you data. Ask for it. You drive the case.",
      "Hiding the math. Say each step out loud, with units, and check the result makes sense.",
      "Forgetting to say assumptions. Say 'I will assume...' and invite correction.",
      "Leaving compliance to the end. Raise it at the start."
    ]
  }
];
