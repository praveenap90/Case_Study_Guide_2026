window.DATA = window.DATA || {};

DATA.template = {
  lead: "One word to remember: CLEAR. Use the chart to remember the order, the table to know what to say, and the worksheet to practice. Then use the answer script to frame almost any case.",

  clearChart: `flowchart LR
C["C: Clarify<br/>goal, metric, scope"] --> L["L: Lay out structure<br/>3 to 4 MECE buckets"]
L --> E["E: Evaluate with data<br/>segment, find the driver"]
E --> A["A: Assess impact<br/>size it in dollars"]
A --> R["R: Recommend<br/>answer, reasons, risks, next steps"]
classDef c1 fill:#E3F2FD,stroke:#1E88E5,color:#000;
classDef c2 fill:#E8F5E9,stroke:#43A047,color:#000;
classDef c3 fill:#FFF3E0,stroke:#FB8C00,color:#000;
classDef c4 fill:#EDE7F6,stroke:#5E35B1,color:#000;
classDef c5 fill:#F1F8E9,stroke:#7CB342,color:#000;
class C c1;
class L c2;
class E c3;
class A c4;
class R c5;`,

  clearTable: {
    title: "CLEAR at a glance",
    headers: ["Step", "What you do", "What you say out loud", "Time"],
    rows: [
      ["Clarify", "Restate the problem. Ask for the goal, metric, time frame and scope.", "So the goal is X by Y. Can I ask two quick questions?", "2 min"],
      ["Lay out", "Build 3 to 4 buckets that do not overlap and cover everything.", "I would like to look at three areas. First...", "2 min"],
      ["Evaluate", "Ask for data, split by segment, find the biggest driver.", "Let me break this down by...", "10 min"],
      ["Assess", "Turn the driver into dollars: units x change per unit.", "That is roughly $X per year.", "5 min"],
      ["Recommend", "Answer first, then 2 or 3 reasons, risks and next steps.", "I recommend X, because A, B and C. The main risk is...", "2 min"]
    ]
  },

  pickChart: `flowchart TD
Q{"What kind of question is it?"}
Q --> P["Profit or cost is off"] --> P2["Revenue - Costs<br/>Revenue = Volume x Price x Mix"]
Q --> S["How many or how big"] --> S2["Population x share x frequency"]
Q --> G["Grow, enter, launch"] --> G2["Market, ability to win,<br/>entry mode, economics"]
Q --> M["A metric dropped"] --> M2["Real? Where? Why? Fix"]
Q --> PR["A product is shown to you"] --> PR2["Customer, per-account economics,<br/>lifecycle, test, risk"]
Q --> D["Buy or invest"] --> D2["Standalone value + synergies<br/>vs. price"]
classDef q fill:#FCE4EC,stroke:#D81B60,color:#000;
classDef t fill:#E8F5E9,stroke:#43A047,color:#000;
classDef s fill:#EDE7F6,stroke:#5E35B1,color:#000;
class Q q;
class P,S,G,M,PR,D t;
class P2,S2,G2,M2,PR2,D2 s;`,

  metricsChart: `flowchart TD
Q{"What decision are we making?"}

Q --> A["Can we cover our costs?"]
Q --> B["Is the investment worth it?"]
Q --> C["Is a customer worth acquiring?"]
Q --> D["Is the business healthy?"]
Q --> E["Is it growing?"]

A --> A1["Breakeven units = Fixed / (Price - Variable)"]
A1 --> A2["$300K / ($50 - $20) = 10,000 units"]

B --> B1["ROI = (Gain - Cost) / Cost"]
B --> B2["Payback = Investment / Annual profit"]
B1 --> B3["Invest $5M, get back $12M: ROI = 140%"]
B2 --> B4["$9M / $6M per year = 1.5 years = 18 months"]

C --> C1["LTV = Margin per year x Years kept"]
C1 --> C2["$40 x 5 = $200"]
C2 --> C3["LTV:CAC = $200 / $50 = 4x (aim for 3x or more)"]
C2 --> C4["CAC payback = $50 / $40 x 12 = 15 months"]

D --> D1["Margin = Profit / Revenue"]
D1 --> D2["$30M / $200M = 15%"]

E --> E1["% change = (New - Old) / Old"]
E --> E2["CAGR = (End / Start)^(1/years) - 1"]
E2 --> E3["$100M to $121M in 2 years = 10% a year"]

classDef decision fill:#FCE4EC,stroke:#D81B60,stroke-width:2px,color:#000;
classDef question fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;
classDef formula fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;
classDef example fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;

class Q decision;
class A,B,C,D,E question;
class A1,B1,B2,C1,D1,E1,E2 formula;
class A2,B3,B4,C2,C3,C4,D2,E3 example;`,

  profitTypes: {
    title: "Net profit vs operating profit",
    headers: ["", "Operating profit", "Net profit"],
    rows: [
      ["What it is", "Profit from running the core business", "What is left for the owners after everything"],
      ["Formula", "Revenue - cost of sales - operating expenses (salaries, rent, marketing)", "Operating profit - interest - taxes (+/- one-off items)"],
      ["Example on $200M revenue", "$30M, so operating margin = 15%", "$30M - $5M interest - $6M tax = $19M, so net margin = 9.5%"],
      ["Excludes", "Interest, taxes and usually one-off items", "Nothing: it is the bottom line"],
      ["Use it when", "Judging how well the business itself runs, or comparing firms with different debt and tax", "Judging what shareholders actually earn, or the final result after financing and tax"],
      ["Interview tip", "Best for cost-reduction and profitability cases because management controls it", "Say which one you mean. If unsure, ask: 'Do you mean operating or net profit?'"]
    ]
  },
  metricsAssumptions: {
    title: "What the green example boxes assume",
    headers: ["Example", "Assumptions"],
    rows: [
      ["Break-even: $300K / ($50 - $20) = 10,000 units", "Fixed costs are $300K for the period. Each unit sells for $50 and costs $20 to make, so it adds $30 toward fixed costs. After 10,000 units the business covers its costs, and every unit after that is profit."],
      ["ROI: invest $5M, get back $12M = 140%", "$12M is the total returned, so the gain is $12M - $5M = $7M, and $7M / $5M = 140%. ROI says nothing about how long it took."],
      ["Payback: $9M / $6M per year = 18 months", "A separate project from the ROI example: $9M invested, earning a steady $6M profit a year. 1.5 years x 12 = 18 months. It uses profit, not revenue."],
      ["LTV: $40 x 5 = $200", "$40 is profit per customer per year, not revenue. A customer stays 5 years, roughly 20% churn a year. The figure is not discounted."],
      ["LTV:CAC: $200 / $50 = 4x", "Acquiring a customer costs $50, so each $1 spent returns $4 over the customer's life. 3x or more is the usual healthy rule of thumb."],
      ["CAC payback: $50 / $40 x 12 = 15 months", "A customer earns $40 a year, so $50 takes 1.25 years to recover, which is 15 months."],
      ["Margin: $30M / $200M = 15%", "Profit and revenue are for the same period. In an interview, say which profit you mean, such as net or operating."],
      ["Growth: $100M to $121M in 2 years = 10% a year", "CAGR = (121 / 100)^(1/2) - 1 = 1.10 - 1 = 10%. It assumes smooth compounding at the same rate each year, though real growth is rarely that even."]
    ]
  },

  metricsTable: {
  "title": "Metric quick reference",
  "headers": [
    "Metric",
    "Formula",
    "Answers the question",
    "Rule of thumb or watch-out"
  ],
  "rows": [
    [
      "Break-even",
      "Fixed costs / (Price - Variable cost)",
      "How much must we sell to avoid a loss?",
      "Compare to realistic volume"
    ],
    [
      "ROI",
      "(Gain - Cost) / Cost",
      "What did each dollar invested return?",
      "Compare to the cost of capital"
    ],
    [
      "Payback",
      "Investment / Annual profit",
      "How fast do we get the money back?",
      "Under 2 years is usually good"
    ],
    [
      "LTV",
      "Margin per year x Years kept",
      "What is a customer worth?",
      "Use margin, not revenue"
    ],
    [
      "LTV:CAC",
      "LTV / CAC",
      "Is acquiring customers profitable?",
      "3x or more, and watch the trend"
    ],
    [
      "CAC payback",
      "CAC / Monthly margin",
      "How long until a customer pays for itself?",
      "12 months or less is strong"
    ],
    [
      "Margin",
      "Profit / Revenue",
      "How much of each sales dollar do we keep?",
      "Compare to competitors"
    ],
    [
      "CAGR",
      "(End / Start)^(1/years) - 1",
      "What is the steady yearly growth rate?",
      "Use for multi-year trends"
    ],
    [
      "DAU",
      "Distinct users active in a day",
      "How many people use the product on a typical day?",
      "Define 'active' first. A login is not value."
    ],
    [
      "Retention",
      "Users active in period N / users in the starting cohort",
      "Do customers keep coming back?",
      "Compare cohorts of the same age only."
    ],
    [
      "Conversion",
      "Users who finish a step / users who reached it",
      "How many people finish a step?",
      "Check the denominator. Who counts as eligible?"
    ],
    [
      "ARPU",
      "Total revenue / active users",
      "How much revenue does each active user bring?",
      "Averages hide a few big customers."
    ],
    [
      "Churn",
      "Customers lost in period / customers at start",
      "How many customers do we lose?",
      "Define 'lost'. Closed account or just inactive?"
    ],
    [
      "Activation",
      "New users who do the key first action / new users",
      "Do new users reach their first real action?",
      "Pick an action that predicts long term use."
    ],
    [
      "CAC",
      "Sales and marketing cost / new customers won",
      "What does it cost to win one customer?",
      "Include all costs, and count only paying customers."
    ],
    [
      "Default rate",
      "Loans not repaid after N days / loans issued",
      "How many borrowers do not repay?",
      "Needs time to mature. Compare by loan age."
    ],
    [
      "Approval rate",
      "Applications approved / applications decided",
      "How many applicants do we say yes to?",
      "High is not always good. Pair with default rate."
    ]
  ]
},

  metricDesign: {
  "intro": "A metric turns a vague goal into a number you can track. A good one is clear, hard to game, and tied to a decision.",
  "layers": {
    "title": "The three layers of a metric set",
    "headers": [
      "Layer",
      "Plain meaning",
      "Bank example"
    ],
    "rows": [
      [
        "North star",
        "The one number that shows the product creates value",
        "Monthly active savers who add money"
      ],
      [
        "Input metrics",
        "Smaller numbers you can move that drive the north star",
        "Sign-ups, activation rate, deposit frequency"
      ],
      [
        "Guardrails",
        "Numbers that must not get worse while you chase the goal",
        "Complaint rate, default rate, support tickets"
      ]
    ]
  },
  "examples": [
    {
      "q": "How would you measure if a new savings feature is working?",
      "a": "Goal: more customers build a savings habit. North star: share of active customers who add money each month. Inputs: feature adoption, first deposit within 7 days, deposit frequency. Guardrails: overdraft rate, complaints, balance moved out of other products. Compare users who got the feature with similar users who did not."
    },
    {
      "q": "Approval rate went up 5 points. Is that good?",
      "a": "Not by itself. Check guardrails: default rate and loss per loan for the new approvals. Check the mix of applicants too. If risk held steady, it is good. If defaults rise later, it is not."
    },
    {
      "q": "What is wrong with using 'number of logins' as the north star?",
      "a": "It is easy to inflate and does not show value. A confusing app can raise logins. Better: a login that ends in a useful action, such as a payment or a deposit."
    }
  ]
},

  // [label, key, sample]
  worksheet: [
    ["C: Goal and metric", "c_goal", "Decide whether to spend $2M to lift adoption from 25% to 40%. Payback under 18 months."],
    ["C: Scope and facts", "c_scope", "4M app customers. A random 5% holdout exists."],
    ["L: Structure (3 to 4 buckets)", "l_struct", "1) Is the evidence causal? 2) Value per customer 3) Scale-up math 4) Risks"],
    ["E: Key insight from the data", "e_insight", "Adopters differ from non-adopters, so use the holdout, not the raw gap."],
    ["A: Impact in dollars", "a_impact", "About $6.6M a year benefit. Scaling is worth about $2M a year after a 50% haircut."],
    ["R: Recommendation", "r_rec", "Yes, in stages: test on half of non-adopters first."],
    ["R: Risks and next steps", "r_risk", "Complaints and delinquency. Keep the holdout running."]
  ],

  scriptTable: {
    title: "Fill-in-the-blank answer script (replace each [bracket])",
    headers: ["Part", "Say this"],
    rows: [
      ["C: Clarify", "Let me make sure I understand. [Company] is [situation], and the goal is to [goal] by [time frame]. Is that right? Can I ask two quick questions? First, [metric or definition]. Second, [scope: product, region, segment]."],
      ["L: Lay out", "I would like to look at [three or four] areas. First, [bucket 1]. Second, [bucket 2]. Third, [bucket 3]. I will start with [bucket] because [reason]. Does that work?"],
      ["E: Evaluate", "Let me break [metric] down by [segment]. [Observation from the data]. That tells me [insight], so my hypothesis is [hypothesis]. To test it, I would look at [data]."],
      ["A: Assess", "To size this: [units] x [change per unit] = about [$ amount] per year. I would haircut that to [%] because [reason], so roughly [$ amount]."],
      ["R: Recommend", "I recommend [action]. Three reasons: [reason 1], [reason 2], [reason 3]. The main risk is [risk], which I would manage by [mitigation]. Next steps: [step 1], then [step 2]."]
    ]
  },

  exampleTitle: "Filled example: Industrial Pump Maker (revenue flat at $400M, profit down from $40M to $28M)",
  example: [
    ["C: Clarify", "Let me make sure I understand. A pump manufacturer has flat revenue of $400M, but profit fell from $40M to $28M over two years, and we want to find out why and how to fix it. Two quick questions: what product lines do they sell, and have prices or costs changed?"],
    ["L: Lay out", "I would like to look at three areas. First, revenue by product line, including volume, price and mix. Second, costs, split into variable costs like steel and fixed costs. Third, outside factors like competitors. I will start with revenue, because it is flat, so mix matters."],
    ["E: Evaluate", "There are two lines, Premium and Standard. Premium revenue fell $40M and Standard grew $40M, so total revenue stayed flat, but Premium earns a 30% margin and Standard earns less. That tells me this is a mix and margin story, not a volume story. My hypothesis is that customers are trading down and steel costs are squeezing Standard."],
    ["A: Assess", "To size it: swapping $40M of 30%-margin sales for $40M of 20%-margin sales costs about $4M. Standard's margin falling from 20% to about 17% on $240M costs another $8M. Together that explains the $12M drop."],
    ["R: Recommend", "I recommend protecting Premium and fixing Standard margin. Three reasons: Premium earns more per dollar, the Standard margin gap is the biggest dollar item, and both can be tackled within a year. The main risk is customers pushing back on price increases, so I would link surcharges to steel prices. Next steps: confirm margin by product line with finance, then pilot the pricing change with one customer group."]
  ],

  phrases: {
    title: "Phrases that keep you sounding structured",
    headers: ["Moment", "Phrase"],
    rows: [
      ["You need time to think", "Can I take a minute to organize my thoughts?"],
      ["Moving between parts", "That covers [bucket 1]. Moving to [bucket 2]."],
      ["The data surprises you", "That is different from my hypothesis, so let me update it."],
      ["You made a mistake", "Let me correct that. The right number is..."],
      ["You do not know a number", "I do not have that number. I would estimate [x] because [reason], and I would confirm with [source]."],
      ["You are about to finish", "To summarize: [answer], because [reasons]. The risk is [risk]."]
    ]
  },

  rules: {
    title: "Four rules for every case",
    headers: ["Rule", "Why it matters"],
    rows: [
      ["Say the answer first in your recommendation", "Interviewers want the conclusion before the details"],
      ["Put a number on every claim", "It shows you can quantify"],
      ["Name one risk and one next step", "It shows judgment and follow-through"],
      ["Pause before answering", "Silence reads as thinking, not weakness"]
    ]
  },

  checks: [
    "Did I state the goal as a number and a date?",
    "Are my buckets non-overlapping?",
    "Did I use the interviewer's data, not memory?",
    "Is every claim tied to a number?",
    "Did I give the answer first?",
    "Did I name one risk and one next step?"
  ]
};
