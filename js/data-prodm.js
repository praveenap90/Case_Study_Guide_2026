window.DATA = window.DATA || {};
DATA.prodm = {
 "lead": "Product manager interviews reuse the same five CLEAR letters. The questions are about users, metrics and trade-offs, and the answer is a decision with a number.",
 "framework": "flowchart TD\nC[\"C: Clarify\"]\nC --> C1[\"Product and user<br/>Which product?<br/>Who is the user?\"]\nC --> C2[\"Goal<br/>What does success<br/>look like?\"]\nC --> C3[\"Limits<br/>Time, team,<br/>rules\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out\"]\nL --> L1[\"Users<br/>Who are the<br/>main groups?\"]\nL --> L2[\"Problems<br/>What gets in<br/>their way?\"]\nL --> L3[\"Ideas<br/>What could we<br/>build?\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate<br/>Use data and score the ideas\"]\nE --> E1[\"Funnel<br/>Where do users<br/>drop off?\"]\nE --> E2[\"Score<br/>Reach x impact x<br/>confidence / effort\"]\nE --> E3[\"Trade-offs<br/>What do we<br/>give up?\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess\"]\nA --> A1[\"Metrics<br/>North star, inputs,<br/>guardrails\"]\nA --> A2[\"Impact<br/>Value in dollars<br/>or users\"]\nA --> A3[\"Risks<br/>What could go wrong?<br/>Who owns it?\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend\"]\nR --> R1[\"Decision<br/>Answer first\"]\nR --> R2[\"Test plan<br/>Small test,<br/>then scale\"]\nR --> R3[\"Next step<br/>Action, owner,<br/>date\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
 "types": {
  "title": "What product manager questions test",
  "headers": [
   "Question type",
   "What they test",
   "How to answer"
  ],
  "rows": [
   [
    "Design a product (product sense)",
    "Users, problems, creativity",
    "Pick a user, name the top problem, offer 2 or 3 ideas, choose one"
   ],
   [
    "Improve a product",
    "Finding what to fix",
    "Find the biggest drop in the funnel, then fix that first"
   ],
   [
    "Metrics: define success",
    "North star and guardrails",
    "One main metric, 2 to 3 inputs, and what must not get worse"
   ],
   [
    "Metrics: a number dropped",
    "Diagnosis",
    "Check data first, then split by segment, channel and time"
   ],
   [
    "Prioritization",
    "Trade-offs",
    "Score value, effort and confidence; say what you give up"
   ],
   [
    "Estimation",
    "Structure and numbers",
    "Population, share, rate, then a sanity check"
   ],
   [
    "Strategy: should we enter?",
    "Market and focus",
    "Size the market, check fit and risks, recommend a test"
   ],
   [
    "Execution: launch",
    "Planning and risk",
    "Milestones, critical path, a staged rollout and a rollback trigger"
   ],
   [
    "Behavioral",
    "Influence and ownership",
    "STAR with a number at the end"
   ]
  ]
 },
 "script": {
  "title": "Answer script: what to say for each step",
  "headers": [
   "Step",
   "Fill in the blanks",
   "Example (improve savings sign-up)"
  ],
  "rows": [
   [
    "C: Clarify",
    "So the product is [product] for [user]. The goal is [metric] in [time], within [limits]. Is that right?",
    "So the product is savings sign-up in the bank app. The goal is more funded accounts in 6 weeks, with no rise in fraud. Is that right?"
   ],
   [
    "L: Lay out",
    "I'll look at [users], then [problems], then [ideas]. The main user is [user] because [reason].",
    "I'll look at users, then problems, then ideas. The main user is a person starting sign-up, because they are about 100K a month."
   ],
   [
    "E: Evaluate",
    "The funnel is [step 1] to [step 2] to [step 3]. The biggest drop is [step], losing [number]. I score ideas as reach x impact x confidence / effort.",
    "The funnel is 100K, 80K, 50K, then 30K done. The biggest drop is the ID check, losing 30K. I score ideas by value per week of effort."
   ],
   [
    "A: Assess",
    "My north star is [metric]. Inputs are [x] and [y]. Guardrails are [z]. The idea is worth [$ or users], and the main risk is [risk].",
    "My north star is funded accounts. Inputs are start rate and completion rate. Guardrails are fraud and support calls. Showing the rate up front is worth $81K a year."
   ],
   [
    "R: Recommend",
    "I recommend [decision]. First [action], then [action]. We test with [test] and succeed if [metric] moves by [amount]. Next step: [owner] by [date].",
    "I recommend we show the rate up front in week 1, then prefill in weeks 2 to 5. We A/B test and succeed if completion rises by 1.5 points. Next step: design confirms by Friday."
   ]
  ]
 },
 "checklist": {
  "title": "Final checklist before you finish",
  "headers": [
   "Check",
   "Ask yourself",
   "Example"
  ],
  "rows": [
   [
    "User named",
    "Did I pick one main user and say why?",
    "People who start sign-up"
   ],
   [
    "One main metric",
    "Did I name a north star and a guardrail?",
    "Funded accounts; fraud rate"
   ],
   [
    "Numbers shown",
    "Did I use a funnel or a score with numbers?",
    "100K, 80K, 50K, 30K"
   ],
   [
    "Trade-off said",
    "Did I say what we give up?",
    "We delay faster ID for 12 weeks"
   ],
   [
    "Answer first",
    "Did I say the recommendation before the reasons?",
    "Ship C first, then A"
   ],
   [
    "Test and next step",
    "Did I give a test plan, an owner and a date?",
    "A/B test; design confirms Friday"
   ]
  ]
 },
 "example": {
  "title": "Improve the savings sign-up",
  "prompt": "Fewer than a third of people who start opening a savings account in our app finish. How would you improve it?",
  "chart": "flowchart TD\nC[\"C: Clarify\"]\nC --> C1[\"Product<br/>Savings account<br/>sign-up in a bank app\"]\nC --> C2[\"Goal<br/>More funded accounts<br/>Each earns $60 a year\"]\nC --> C3[\"Limits<br/>6 weeks, 1 team,<br/>no fraud increase\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out\"]\nL --> L1[\"Users<br/>New to the bank,<br/>existing customers\"]\nL --> L2[\"Problem<br/>Many start,<br/>few finish\"]\nL --> L3[\"Ideas<br/>Prefill, faster ID check,<br/>show the rate up front\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate<br/>Find the drop, then score the ideas\"]\nE --> E1[\"Funnel<br/>100K start<br/>80K details, 50K ID check<br/>30K done = <b>30%</b>\"]\nE --> E2[\"Biggest drop<br/>ID check loses 30K<br/>Details 20K, final step 20K\"]\nE --> E3[\"Score per week<br/>C: $81K, A: $45K<br/>B: $15K\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess\"]\nA --> A1[\"Idea A: prefill<br/>+3.75K x 80% = 3.0K<br/>x $60 = <b>$180K</b>, 4 weeks\"]\nA --> A2[\"Idea B: faster ID<br/>+6K x 50% = 3.0K<br/>x $60 = <b>$180K</b>, 12 weeks\"]\nA --> A3[\"Idea C: show rate<br/>+1.5K x 90% = 1.35K<br/>x $60 = <b>$81K</b>, 1 week\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Ship C in week 1, then A in weeks 2 to 5<br/>About $261K a year. Start B later<br/>Guardrails: fraud, support calls. A/B test each\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
  "math": {
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
     "Funnel today",
     "100K x 80% x 62.5% x 60%",
     "30K done (30%)"
    ],
    [
     "2",
     "Idea A: prefill (details 80% to 90%)",
     "100K x 90% x 62.5% x 60%",
     "33,750 (+3,750)"
    ],
    [
     "3",
     "Idea B: faster ID (62.5% to 75%)",
     "100K x 80% x 75% x 60%",
     "36,000 (+6,000)"
    ],
    [
     "4",
     "Idea C: show rate (details 80% to 84%)",
     "100K x 84% x 62.5% x 60%",
     "31,500 (+1,500)"
    ],
    [
     "5",
     "Adjust for confidence",
     "3,750 x 80%, 6,000 x 50%, 1,500 x 90%",
     "3,000; 3,000; 1,350"
    ],
    [
     "6",
     "Value a year at $60 an account",
     "3,000 x $60; 3,000 x $60; 1,350 x $60",
     "$180K; $180K; $81K"
    ],
    [
     "7",
     "Value per week of effort",
     "$180K / 4; $180K / 12; $81K / 1",
     "$45K; $15K; $81K"
    ],
    [
     "8",
     "Plan: C then A",
     "$81K + $180K, 1 + 4 weeks",
     "$261K a year in 5 weeks"
    ]
   ]
  },
  "push": {
   "title": "Pushback math",
   "headers": [
    "Pushback",
    "Calculation",
    "Result"
   ],
   "rows": [
    [
     "Confidence in A is only 50%",
     "3,750 x 50% x $60",
     "$112.5K, $28K a week: still second"
    ],
    [
     "An account is worth $30, not $60",
     "Halve every value",
     "C $40.5K a week, A $22.5K, B $7.5K: same order"
    ],
    [
     "Faster ID is needed for compliance",
     "B is a must-do",
     "Start B in week 1 with a second team, keep C and A"
    ],
    [
     "Only 50K start a month",
     "Halve every gain",
     "Plan is worth about $130K a year"
    ]
   ]
  },
  "say": [
   [
    "Clarify",
    "So we want more funded savings accounts from the sign-up flow in 6 weeks, with no rise in fraud. Each account earns about $60 a year. Is that right?"
   ],
   [
    "Lay out",
    "I'd look at the users who start sign-up, the problem that stops them, and ideas to fix it."
   ],
   [
    "Evaluate",
    "The funnel is 100K starts, 80K through details, 50K through the ID check and 30K done. The ID check loses the most, 30K. I scored three ideas by value per week of effort: show the rate up front $81K, prefill $45K and faster ID $15K."
   ],
   [
    "Assess",
    "My north star is funded accounts, with fraud and support calls as guardrails. Prefill is worth about $180K a year and showing the rate about $81K. The main risk is fraud on prefilled data."
   ],
   [
    "Recommend",
    "I recommend we show the rate up front in week 1, then build prefill in weeks 2 to 5, worth about $261K a year. We A/B test each and stop if fraud rises. Next step: design confirms the rate screen by Friday."
   ]
  ]
 },
 "metrics": {
  "title": "Metric tree template",
  "headers": [
   "Level",
   "What it is",
   "Example (savings sign-up)"
  ],
  "rows": [
   [
    "North star",
    "The one number that shows value to users and the business",
    "Funded savings accounts a month"
   ],
   [
    "Inputs",
    "The 2 to 3 numbers that move the north star",
    "Start rate; completion rate; funding rate"
   ],
   [
    "Guardrails",
    "Numbers that must not get worse",
    "Fraud rate; support calls per 1,000; app rating"
   ],
   [
    "Counter-metric",
    "The side effect of pushing the main metric too hard",
    "Accounts opened but never funded"
   ]
  ]
 },
 "brief": {
  "title": "One-page product brief template",
  "headers": [
   "Section",
   "What to write",
   "Example"
  ],
  "rows": [
   [
    "Problem",
    "Who has it and how big",
    "50K people a month drop at the ID check"
   ],
   [
    "Goal and metric",
    "One target and a date",
    "Completion 30% to 35% in 6 weeks"
   ],
   [
    "Users",
    "Main group and what they need",
    "New-to-bank adults who want to save"
   ],
   [
    "Solution",
    "What we build, in 3 lines",
    "Prefill details; show rate up front"
   ],
   [
    "Out of scope",
    "What we will not do now",
    "New ID vendor"
   ],
   [
    "Risks and guardrails",
    "What could break, with an owner",
    "Fraud on prefilled data; fraud lead"
   ],
   [
    "Test and rollout",
    "How we learn and scale",
    "A/B 50/50 for 2 weeks, then 100%"
   ],
   [
    "Decision and date",
    "Who decides and when",
    "Product lead, Friday"
   ]
  ]
 }
};
