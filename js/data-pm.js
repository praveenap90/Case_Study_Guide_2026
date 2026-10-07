window.DATA = window.DATA || {};
DATA.pm = {
 "template": {
  "script": {
   "title": "Answer script: what to say for each step",
   "headers": [
    "Step",
    "Fill in the blanks",
    "Example (launch a card feature in 12 weeks)"
   ],
   "rows": [
    [
     "C: Clarify",
     "So the goal is [goal] by [date], with [budget or team]. Who decides, and what must be true at launch?",
     "So the goal is a safe launch of the card feature by week 12, with 4 engineers. Who decides, and what must be true at launch?"
    ],
    [
     "L: Lay out",
     "I'll plan this in [number] parts: [part 1], [part 2] and [part 3]. The ones that depend on each other are [A] then [B].",
     "I'll plan this in four parts: requirements, build, compliance review and pilot. Each one waits on the one before it."
    ],
    [
     "E: Evaluate",
     "The critical path is [steps] = [total time]. My biggest risk is [risk], owned by [owner]. If it slips by [time], the launch moves to [new date].",
     "The critical path is 2 + 6 + 2 + 2 = 12 weeks. My biggest risk is compliance review, owned by the compliance lead. If it slips 2 weeks, we launch in week 14."
    ],
    [
     "A: Assess",
     "One week of delay costs about [$ per week]. Option 1 is [option] for [cost] to save [time]. Option 2 is [option] for [cost] to save [time].",
     "One week of delay costs about $50K. Contractors cost $60K to save a week. Starting the review early costs $0 and saves a week."
    ],
    [
     "R: Recommend",
     "I recommend [decision]. The reasons are [reason 1] and [reason 2]. The main risk is [risk], owned by [owner]. Next step: [action] by [date].",
     "I recommend starting the compliance review early and launching in week 13. The review is the main risk and the date is fixed. The compliance lead confirms the early start by Friday."
    ]
   ]
  },
  "checklist": {
   "title": "Final checklist before you finish your answer",
   "headers": [
    "Check",
    "Ask yourself",
    "Example"
   ],
   "rows": [
    [
     "Critical path named",
     "Did I say which chain of steps sets the date?",
     "2 + 6 + 2 + 2 = 12 weeks"
    ],
    [
     "Dollars per week of delay",
     "Did I give the cost of one week?",
     "$2.6M / 52 = $50K a week"
    ],
    [
     "One risk with an owner",
     "Did I name the biggest risk and who owns it?",
     "Compliance review, owned by the compliance lead"
    ],
    [
     "Answer first",
     "Did I say the recommendation before the reasons?",
     "I recommend we start the review early"
    ],
    [
     "Next step with a date",
     "Did I end with an action, a person and a day?",
     "Compliance lead confirms by Friday"
    ]
   ]
  },
  "tips": {
   "title": "Quick tips",
   "headers": [
    "Tip",
    "Why"
   ],
   "rows": [
    [
     "Say the blanks out loud once before the interview",
     "Blanks turn into habits"
    ],
    [
     "Use round numbers",
     "They are easier to say and check"
    ],
    [
     "Keep each step under 30 seconds",
     "The interviewer can steer you"
    ],
    [
     "If you are stuck, go back to the critical path",
     "It is the spine of every delivery answer"
    ]
   ]
  }
 },
 "thinking": [
  {
   "title": "Customer-first thinking: habits to show in your answers",
   "headers": [
    "Theme",
    "What it sounds like",
    "Where to use it in a case"
   ],
   "rows": [
    [
     "Customer obsession",
     "Start from what the customer feels, then work backwards",
     "Clarify: who is hurt by a delay, and how much"
    ],
    [
     "Ownership",
     "I own the date and the result, not just my task",
     "Recommend: name the owner and the date"
    ],
    [
     "Dive deep",
     "Check the data before choosing a fix",
     "Evaluate: split by region, carrier or step"
    ],
    [
     "Bias for action",
     "Pick a reversible step now, learn, adjust",
     "Recommend: pilot or conditional go"
    ],
    [
     "Deliver results",
     "Say the number you will hit and when",
     "Assess: dollars and weeks"
    ]
   ]
  },
  {
   "title": "Test-and-learn thinking: habits to show in your answers",
   "headers": [
    "Habit",
    "What it sounds like",
    "Where to use it in a case"
   ],
   "rows": [
    [
     "Data first",
     "What does the data say before we decide?",
     "Evaluate: pick the metrics and the control group"
    ],
    [
     "Test and learn",
     "Pilot on 5%, measure, then scale",
     "Recommend: staged rollout with rollback triggers"
    ],
    [
     "Risk and return together",
     "Expected profit vs expected loss",
     "Assess: price both sides in dollars"
    ],
    [
     "Customer and bank",
     "Good for the customer and for the business",
     "Clarify: name both sides of the goal"
    ],
    [
     "Build for scale",
     "Will this still work at 10x volume?",
     "Evaluate: capacity and cost per unit"
    ]
   ]
  }
 ],
 "lead": "Program manager interviews test how you deliver work: plan, find risks, make trade-offs and keep people aligned. Use CLEAR again, with delivery meaning. All numbers are illustrative.",
 "framework": "flowchart TD\nC[\"C: Clarify\"]\nC --> C1[\"Goal<br/>What must be true<br/>when we launch?\"]\nC --> C2[\"Limits<br/>Deadline, budget,<br/>team size\"]\nC --> C3[\"People<br/>Who decides?<br/>Who is affected?\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the plan\"]\nL --> L1[\"Workstreams<br/>Product, build,<br/>risk, marketing\"]\nL --> L2[\"Milestones<br/>Dates that<br/>show progress\"]\nL --> L3[\"Dependencies<br/>What waits on<br/>what\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate<br/>Find what can break the date\"]\nE --> E1[\"Critical path<br/>The chain of steps<br/>with zero slack\"]\nE --> E2[\"Risks<br/>Chance x impact<br/>Name an owner\"]\nE --> E3[\"Resources<br/>People and money<br/>vs the plan\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the trade-offs\"]\nA --> A1[\"Scope<br/>What can we cut?\"]\nA --> A2[\"Time<br/>What does a week<br/>of delay cost?\"]\nA --> A3[\"Cost<br/>What does speeding<br/>up cost?\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend and track\"]\nR --> R1[\"Decision<br/>Answer first,<br/>then reasons\"]\nR --> R2[\"Tracking<br/>Weekly status:<br/>green, yellow, red\"]\nR --> R3[\"Escalation<br/>What triggers a call<br/>to the sponsor\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R,R1,R2,R3 c5;",
 "types": {
  "title": "What program manager questions test",
  "headers": [
   "Question type",
   "What they test",
   "How to answer"
  ],
  "rows": [
   [
    "Plan a launch or migration",
    "Structure, dependencies, critical path",
    "Use CLEAR: goal and limits, then workstreams, then the critical path"
   ],
   [
    "The project is late",
    "Recovery, trade-offs",
    "Find the cause, price a week of delay, compare options in dollars"
   ],
   [
    "Two teams are blocked on each other",
    "Influence without authority",
    "Name the dependency, get both leads in a room, agree an owner and a date"
   ],
   [
    "Which project first?",
    "Prioritization",
    "Value per effort, risk and deadline. Pick and say why"
   ],
   [
    "Go or no-go?",
    "Judgment under risk",
    "Criteria, cost of delay vs cost of a bad launch, and a conditional go"
   ],
   [
    "How do you know it is on track?",
    "Metrics and reporting",
    "Milestones, green-yellow-red status, and one clear escalation trigger"
   ],
   [
    "Tell me about a time...",
    "Behavior",
    "STAR: Situation, Task, Action, Result with a number"
   ]
  ]
 },
 "cases": [
  {
   "id": "launch-plan",
   "title": "Launch a card feature in 12 weeks",
   "prompt": "Your team will launch a new card feature in 12 weeks. The feature is expected to bring $2.6M a year. Walk me through how you would plan and run it.",
   "clarify": [
    "Who decides on scope and date? [The product sponsor, and the date is fixed]",
    "What must be true at launch? [Safe, compliant, and a 2-week pilot done]",
    "What is the budget and team? [Existing team of about 4 engineers, no extra budget]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Launch a new card feature in 12 weeks<br/>Expected benefit $2.6M a year\"]\nC --> L[\"L: Lay out the plan<br/>4 phases in a row, plus marketing in parallel\"]\nL --> P1[\"Requirements<br/>2 weeks\"]\nL --> P2[\"Build<br/>6 weeks\"]\nL --> P3[\"Compliance review<br/>2 weeks\"]\nL --> P4[\"Pilot<br/>2 weeks\"]\nP1 --> E\nP2 --> E\nP3 --> E\nP4 --> E\nE[\"E: Evaluate<br/>2 + 6 + 2 + 2 = <b>12 weeks</b><br/>Zero slack: this is the critical path\"]\nE --> E1[\"Risk<br/>Compliance may take<br/>4 weeks, not 2\"]\nE --> E2[\"Effect<br/>Launch slips<br/>12 to <b>14 weeks</b>\"]\nE --> E3[\"Cost of delay<br/>$2.6M / 52 = $50K a week<br/>2 weeks = <b>$100K</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Add 2 contractors<br/>2 x 6 weeks x $5K = $60K<br/>Saves 1 week = $50K<br/>Not worth it\"]\nA --> A2[\"Cut one feature<br/>Saves 1 week = $50K<br/>Loses some value\"]\nA --> A3[\"Start review early<br/>Overlap 1 week with build<br/>Saves 1 week = $50K, cost $0\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Start the compliance review early on the finished parts<br/>Launch in week 13, not 14. Track weekly and escalate if review passes week 4\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass P1,P2,P3,P4 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Plan length",
      "2 + 6 + 2 + 2 weeks",
      "12 weeks"
     ],
     [
      "2",
      "Value of a week",
      "$2.6M / 52",
      "$50K"
     ],
     [
      "3",
      "Launch if compliance takes 4 weeks",
      "12 + 2",
      "14 weeks"
     ],
     [
      "4",
      "Cost of that delay",
      "2 weeks x $50K",
      "$100K"
     ],
     [
      "5",
      "Contractors",
      "2 x 6 weeks x $5K",
      "$60K cost for $50K gain"
     ],
     [
      "6",
      "Start review early",
      "Overlap 1 week with build",
      "Launch week 13, saves $50K"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Compliance takes 6 weeks, not 4",
      "12 + 4 weeks late, 4 x $50K",
      "Week 16, $200K delay"
     ],
     [
      "Benefit is $1.3M, not $2.6M",
      "$1.3M / 52",
      "$25K a week, so delay costs half"
     ],
     [
      "No overlap allowed by compliance",
      "Cut one feature instead",
      "Saves 1 week = $50K"
     ],
     [
      "Pilot cut to 1 week",
      "12 - 1",
      "Week 11 plan, but more risk"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I'll plan the launch of a new card feature in 12 weeks. The goal is a safe launch with about $2.6M a year of benefit. Who decides, and is the date fixed?"
    ],
    [
     "Lay out",
     "I see four steps in a row: requirements 2 weeks, build 6, compliance review 2 and pilot 2, with marketing in parallel."
    ],
    [
     "Evaluate",
     "That is exactly 12 weeks with no slack, so compliance is my main risk. If it takes 4 weeks instead of 2, we launch in week 14."
    ],
    [
     "Assess",
     "Each week of delay costs about $50K, so that is $100K. Contractors cost $60K to save a week, so they are not worth it. Starting the review early costs nothing and saves a week."
    ],
    [
     "Recommend",
     "I recommend we start the compliance review early on finished parts and launch in week 13. The risk is that compliance finds a big issue, so I'd track it weekly and escalate to the sponsor if the review runs past week 4."
    ]
   ],
   "pitfalls": [
    "Giving a plan without naming the critical path",
    "Listing risks without a dollar cost or an owner",
    "Saying yes to every option instead of recommending one"
   ],
   "group": "Core cases"
  },
  {
   "id": "late-project",
   "title": "A data migration is 3 weeks behind",
   "prompt": "A program is moving 40 reporting tables to a new data platform. It was planned for 12 weeks, it is now week 8, and the team says it is 3 weeks behind. What would you do?",
   "clarify": [
    "Is the 3 weeks what we are behind today, or the forecast finish? [Both: if the pace goes back to plan, we finish 3 weeks late]",
    "What is the plan, and what has been done so far? [2 weeks setup, 8 weeks moving 5 tables a week, 2 weeks test. 15 tables done]",
    "What does a week of delay cost, and what is the date tied to? [Team $20K a week, old platform $30K a week while both run. No hard business deadline]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Move 40 reporting tables to a new platform in 12 weeks<br/>Now week 8, 3 weeks behind<br/>Old platform costs $30K a week while both run\"]\nC --> L[\"L: Lay out the plan<br/>3 phases in a row, 5 tables a week while moving\"]\nL --> P1[\"Setup<br/>2 weeks\"]\nL --> P2[\"Move 40 tables<br/>8 weeks\"]\nL --> P3[\"Test and cut over<br/>2 weeks\"]\nP1 --> E\nP2 --> E\nP3 --> E\nE[\"E: Evaluate<br/>2 + 8 + 2 = <b>12 weeks</b> planned<br/>Week 8 plan: 30 tables. Done: 15<br/>15 / 5 = <b>3 weeks</b> behind\"]\nE --> E1[\"Cause<br/>Data quality fixes took longer<br/>Pace 2.5 tables a week, not 5\"]\nE --> E2[\"Effect<br/>25 left / 5 = 5 weeks, plus 2 test<br/>Finish week <b>15</b>, not 12\"]\nE --> E3[\"Cost of delay<br/>$20K team + $30K old platform = $50K a week<br/>3 weeks = <b>$150K</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options<br/>Extend the date is the base case: $150K\"]\nA --> A1[\"Add 5 contractors<br/>5 x 4 weeks x $4K = $80K<br/>Saves 1 week = $50K<br/>Not worth it\"]\nA --> A2[\"Cut scope<br/>Move 10 low-use tables to phase 2<br/>Finish week 13, saves 2 weeks = $100K<br/>Follow-up costs $60K\"]\nA --> A3[\"Run old and new in parallel<br/>Safer, but saves 0 weeks<br/>Old platform keeps costing $30K a week\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Cut scope: move 10 low-use tables to phase 2<br/>Total cost $110K, not $150K. Finish week 13<br/>Risk: some of the 10 are not low-use. Next: check usage logs this week\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass P1,P2,P3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Where should we be at week 8?",
      "2 weeks setup, then 6 weeks x 5 tables",
      "30 tables"
     ],
     [
      "2",
      "How far behind are we?",
      "30 planned - 15 done = 15 tables. 15 / 5 a week",
      "3 weeks"
     ],
     [
      "3",
      "Why? Check the pace",
      "15 tables in 6 weeks = 2.5 a week. Plan is 5",
      "Half the pace: data fixes"
     ],
     [
      "4",
      "When do we finish?",
      "40 - 15 = 25 left. 25 / 5 = 5 weeks, plus 2 test = 7. Week 8 + 7",
      "Week 15"
     ],
     [
      "5",
      "Cost of delay",
      "$20K team + $30K old platform = $50K a week. 3 weeks x $50K",
      "$150K"
     ],
     [
      "6",
      "Add people",
      "5 contractors x 4 weeks x $4K = $80K. Saves 1 week = $50K. $50K - $80K",
      "-$30K"
     ],
     [
      "7",
      "Cut scope: move 10 tables",
      "15 left / 5 = 3 weeks, plus 2 test. Week 8 + 5 = week 13. 1 week late = $50K. Follow-up 2 weeks x $30K = $60K. $50K + $60K",
      "$110K"
     ],
     [
      "8",
      "Run in parallel",
      "Does not speed up the move. Saves 0 weeks",
      "$0 saved"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "What if the slow pace stays the same?",
      "25 left / 2.5 a week = 10 weeks, plus 2 test = 12. Week 8 + 12 = week 20. 8 weeks late x $50K",
      "$400K"
     ],
     [
      "What if 5 of the 10 cut tables are needed now?",
      "Move 5 back: 20 left / 5 = 4 weeks + 2 = week 14. 2 weeks late = $100K. Follow-up 5 tables = 1 week x $30K = $30K",
      "$130K, still under $150K"
     ],
     [
      "What if we add 10 contractors, not 5?",
      "10 x 4 weeks x $4K = $160K. Still saves only 1 week = $50K. $50K - $160K",
      "-$110K"
     ],
     [
      "What if leaders say the date cannot move?",
      "Cut 15 tables: 10 left / 5 = 2 weeks + 2 test. Week 8 + 4 = week 12. Delay $0. Follow-up 3 weeks x $30K = $90K",
      "$90K"
     ],
     [
      "How do you know it is 3 weeks, not 2?",
      "Gap is 15 tables. Plan pace is 5 a week. 15 / 5",
      "3 weeks"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "First I would check what the 3 weeks means, what is done, and what a week of delay costs. I will assume 15 of 40 tables are done, 5 a week is the plan, and a week of delay costs $50K."
    ],
    [
     "Lay out",
     "The plan is 2 weeks setup, 8 weeks moving 5 tables a week, and 2 weeks test. By week 8 we should have 30 tables, and we have 15, so we are 3 weeks behind."
    ],
    [
     "Evaluate",
     "The cause is data quality fixes. We move 2.5 tables a week, half the plan. Even at plan pace we finish in week 15, and 3 weeks of delay costs $150K."
    ],
    [
     "Assess",
     "Adding 5 contractors costs $80K and saves only 1 week, worth $50K. Running both platforms is safer but saves no time. Cutting 10 low-use tables saves 2 weeks, worth $100K, and the follow-up costs $60K."
    ],
    [
     "Recommend",
     "I would cut scope and move the 10 lowest-use tables to phase 2. We finish in week 13 and the total cost is $110K, not $150K. The risk is that some of those tables are not really low-use, so my next step is to check the usage logs this week."
    ]
   ],
   "pitfalls": [
    "Saying add people without checking that data fixes can be shared. New people need a week to ramp up",
    "Looking only at the date and not the dollars. Every week of delay costs $50K",
    "Not asking why we are late. If the pace stays at half, the finish is week 20, not 15"
   ],
   "group": "Core cases"
  },
  {
   "id": "blocked-teams",
   "title": "Two teams are blocked on each other",
   "prompt": "The fraud-rules team needs an API from the platform team. The platform team needs the rules team's final data format before building it, and both say they are waiting. Six engineers are partly idle and a release is in 5 weeks. What do you do?",
   "clarify": [
    "How much work is left after the format is agreed? [Build 3 weeks, test 2 weeks, so 5 weeks and no slack]",
    "How idle are the 6 engineers, and what does an engineer cost? [About half idle, $5K a week each, so $1K a day]",
    "What is the release worth, and who can decide if the teams cannot? [About $1M a year, so $20K a week. A shared director can decide]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Two teams wait on each other<br/>6 engineers part idle, release in 5 weeks\"]\nC --> C1[\"Rules team<br/>Needs the API<br/>to test\"]\nC --> C2[\"Platform team<br/>Needs the data format<br/>to build\"]\nC --> C3[\"Plan<br/>Build 3 weeks + test 2 weeks<br/>= 5 weeks, zero slack\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the dependency map<br/>Each team waits for the other: a loop\"]\nL --> L1[\"Rules team<br/>Final format needs<br/>API feedback\"]\nL --> L2[\"Platform team<br/>API build needs<br/>final format\"]\nL --> L3[\"Loop<br/>No one moves first<br/>so nothing moves\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate the cost of waiting<br/>Idle $3K + delay $4K = <b>$7K a day</b><br/>Zero slack: every day blocked is a day late\"]\nE --> E1[\"Idle cost<br/>6 x $1K x 50% = <b>$3K a day</b>\"]\nE --> E2[\"Delay cost<br/>$1M / 50 = $20K a week<br/>$20K / 5 = <b>$4K a day</b>\"]\nE --> E3[\"Wait 1 more week<br/>5 x $7K = <b>$35K</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Keep waiting<br/>for the final format<br/>5 days x $7K = $35K<br/>No end date\"]\nA --> A2[\"Draft contract + joint session<br/>2 days x $7K = $14K<br/>Worst rework $6K, total $20K\"]\nA --> A3[\"Escalate to a director now<br/>3 days x $7K = $21K<br/>Slow, and hurts trust\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Agree a draft contract in a joint session, with a named owner and date<br/>Cost $14K, not $35K. Escalate if no signed draft by day 3 ($21K)\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Idle cost a day",
      "6 engineers x $1K a day x 50% idle",
      "$3K a day"
     ],
     [
      "2",
      "Delay cost a day",
      "$1M / 50 weeks = $20K a week. $20K / 5 days",
      "$4K a day"
     ],
     [
      "3",
      "Cost of one blocked day",
      "$3K + $4K",
      "$7K a day"
     ],
     [
      "4",
      "Slack in the plan",
      "Build 3 + test 2 = 5 weeks. 5 weeks left",
      "0 slack"
     ],
     [
      "5",
      "Option 1: wait 5 more days",
      "5 days x $7K",
      "$35K"
     ],
     [
      "6",
      "Option 2: draft contract in 2 days",
      "2 days x $7K",
      "$14K"
     ],
     [
      "7",
      "Worst-case rework if draft changes",
      "3 platform engineers x 2 days x $1K",
      "$6K"
     ],
     [
      "8",
      "Option 2 worst case, and saving",
      "$14K + $6K = $20K. $35K - $20K",
      "$20K, saves $15K"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "The draft is risky. The format is not final",
      "Worst rework $6K vs waiting $35K",
      "Rework is 6 / 35, under 20% of waiting"
     ],
     [
      "What if we stay blocked 10 days?",
      "10 days x $7K",
      "$70K"
     ],
     [
      "Nobody is really idle, so only delay counts",
      "Wait: 5 x $4K = $20K. Draft: 2 x $4K + $6K = $14K",
      "Draft still cheaper"
     ],
     [
      "When do we escalate?",
      "3 days x $7K",
      "$21K, so day 3"
     ],
     [
      "Can we still hit the release?",
      "Need 25 working days. Start on day 3, so finish on day 27",
      "2 days late"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask how much work is left, how idle the engineers are, and what the release is worth. I will assume 5 weeks of work, half idle at $1K a day each, and $20K a week of value."
    ],
    [
     "Lay out",
     "Each team waits for the other, so it is a loop. Nobody moves first, so nothing moves."
    ],
    [
     "Evaluate",
     "Every blocked day costs about $7K. That is $3K of idle time plus $4K of delay. There is no slack, so every day blocked is a day late."
    ],
    [
     "Assess",
     "Waiting costs $35K for 5 more days and has no end date. A draft contract costs $14K, and $20K if the draft needs rework. Escalating first costs $21K and does not fix the root cause."
    ],
    [
     "Recommend",
     "I would agree a draft contract in a joint working session, with one named owner and a date. That costs $14K, not $35K. The risk is that the draft changes, which is $6K of rework at worst. Next step: I book the session for tomorrow, and if there is no signed draft by day 3, I escalate to the shared director."
    ]
   ],
   "pitfalls": [
    "Taking sides or asking who is to blame, instead of fixing the loop",
    "Waiting for a perfect final format, when a draft is enough to start",
    "Agreeing a plan with no named owner, no date and no escalation trigger"
   ],
   "group": "Core cases"
  },
  {
   "id": "prioritize-three",
   "title": "Three projects, one team: which first?",
   "prompt": "Your team has 10 engineers for one quarter, 13 weeks. Three teams each want a project: a mobile card-lock feature, a faster onboarding flow, and a reporting dashboard for risk, but you can only fund two. Which two do you pick, and what do you tell the third?",
   "clarify": [
    "Is the capacity fixed, and can we hire or borrow people? [Fixed: 10 engineers x 13 weeks = 130 engineer-weeks, no hiring]",
    "Does any project have a hard deadline or a dependency? [Yes: risk reporting is due to the regulator in week 12, or a $4.0M fine. Onboarding needs an identity vendor API]",
    "Where do the dollar values come from? [Finance estimates, in dollars a year after launch, and they are rough]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>10 engineers x 13 weeks = <b>130 engineer-weeks</b><br/>Fund only 2 of 3 projects. No hiring\"]\nC --> L[\"L: Lay out the plan<br/>3 projects: value a year, effort, risk, deadline\"]\nL --> P1[\"A: Card lock<br/>$4.5M a year, 90 weeks<br/>Risk low, no deadline\"]\nL --> P2[\"B: Faster onboarding<br/>$2.4M a year, 40 weeks<br/>Risk medium, vendor API\"]\nL --> P3[\"C: Risk dashboard<br/>$1.5M a year, 50 weeks<br/>Risk high, regulator date\"]\nP1 --> E\nP2 --> E\nP3 --> E\nE[\"E: Evaluate<br/>Value per engineer-week:<br/>B <b>$60K</b>, A <b>$50K</b>, C <b>$30K</b>\"]\nE --> E1[\"Capacity<br/>B + A = 40 + 90 = <b>130 weeks</b><br/>Fits, but zero slack\"]\nE --> E2[\"Deadline<br/>C is due in week 12<br/>Miss it: $4.0M fine\"]\nE --> E3[\"New rank<br/>C = 5.5M / 50 = <b>$110K</b><br/>C, then B, then A\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"A + B<br/>130 weeks, no slack<br/>6.9M - 4.0M fine = <b>$2.9M</b> in year one\"]\nA --> A2[\"C + B<br/>50 + 40 = <b>90 weeks</b><br/>1.5M + 2.4M = <b>$3.9M</b> in year one\"]\nA --> A3[\"A + C<br/>90 + 50 = <b>140 weeks</b><br/>Over 130, does not fit\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Fund C and B. A goes first next quarter<br/>Risk: B vendor may slip. Keep <b>40 spare weeks</b> as buffer<br/>Tell the A team: waiting costs about $1.1M, fine is $4.0M\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass P1,P2,P3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;\n",
   "steps": {
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
      "Team capacity",
      "10 engineers x 13 weeks",
      "130 engineer-weeks"
     ],
     [
      "2",
      "A: card lock, value per week",
      "$4.5M / 90 weeks",
      "$50K"
     ],
     [
      "3",
      "B: onboarding, value per week",
      "$2.4M / 40 weeks",
      "$60K"
     ],
     [
      "4",
      "C: dashboard, value per week",
      "$1.5M / 50 weeks",
      "$30K"
     ],
     [
      "5",
      "Rank without the deadline, then check fit",
      "B, A, C. B + A = 40 + 90",
      "130 weeks, zero slack"
     ],
     [
      "6",
      "Add the deadline: C avoids a $4.0M fine",
      "($1.5M + $4.0M) / 50 weeks",
      "$110K, C moves to first"
     ],
     [
      "7",
      "Check fit with new rank",
      "C + B = 50 + 40. Adding A = 180",
      "90 weeks, A does not fit. 40 spare"
     ],
     [
      "8",
      "Compare year one value",
      "C + B = 1.5 + 2.4. A + B = 4.5 + 2.4 - 4.0",
      "$3.9M vs $2.9M"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Why not the two biggest, A and B?",
      "A + B = 4.5 + 2.4 = 6.9M, minus the 4.0M fine",
      "$2.9M, less than C + B at $3.9M. Also zero slack"
     ],
     [
      "What if C takes 20% longer?",
      "50 x 1.2 = 60 weeks. 60 + 40 = 100",
      "100 weeks, still fits. 30 spare"
     ],
     [
      "What if the B vendor slips 4 weeks?",
      "4 engineers x 4 weeks = 16 weeks lost. 90 + 16 = 106",
      "106 weeks, still fits. 24 spare"
     ],
     [
      "What does waiting cost the A team?",
      "$4.5M x 13 / 52 weeks",
      "About $1.1M, far less than the $4.0M fine"
     ],
     [
      "Can we squeeze in A with the spare weeks?",
      "90 needed - 40 spare",
      "Short by 50 weeks. No"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "We have 10 engineers for 13 weeks, so 130 engineer-weeks, and no hiring. I will rank the projects by value per engineer-week, then check for hard deadlines."
    ],
    [
     "Lay out",
     "Card lock is $4.5M a year for 90 weeks. Onboarding is $2.4M for 40 weeks. The dashboard is $1.5M for 50 weeks."
    ],
    [
     "Evaluate",
     "By value per week, onboarding is $60K, card lock is $50K, and the dashboard is $30K. But the dashboard is due to the regulator in week 12, with a $4.0M fine, so it is really worth $110K a week."
    ],
    [
     "Assess",
     "Card lock plus onboarding uses all 130 weeks and nets $2.9M in year one after the fine. Dashboard plus onboarding uses 90 weeks and nets $3.9M. Card lock plus dashboard needs 140 weeks, so it does not fit."
    ],
    [
     "Recommend",
     "I recommend we fund the dashboard and onboarding, and move card lock to next quarter. The main risk is the identity vendor slipping, so we keep 40 spare weeks as buffer. Next step: I tell the card lock team they go first next quarter, since waiting costs about $1.1M and the fine is $4.0M."
    ]
   ],
   "pitfalls": [
    "Ranking only by value per week and ignoring the regulator date.",
    "Filling all 130 weeks with no slack, so one delay breaks the plan.",
    "Telling the third team just no, with no reason and no date for when they go."
   ],
   "group": "Core cases"
  },
  {
   "id": "platform-cutover",
   "title": "Plan a cutover to a new payments platform",
   "prompt": "Your bank is moving 2M customers from the old payments system to a new one. Plan the rollout, say how you would decide to go or roll back, and show why you would phase it.",
   "clarify": [
    "Can we run the old and new system side by side, and roll back fast? [Yes, both run together, rollback takes minutes, dual run costs $10K a week]",
    "How many payments do we process, and what does a failed one cost? [1M payments a day, about 40K an hour, $5 per failed payment for refunds and support]",
    "How likely is a serious bug in a cutover like this? [1 in 5, so 20%]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Move 2M customers to a new payments system<br/>Old system stays as backup\"]\nC --> L[\"L: Lay out the plan<br/>5 steps in a row<br/>Tell staff first, customers before 50%\"]\nL --> P1[\"Prep and test<br/>2 weeks\"]\nL --> P2[\"1% of customers<br/>1 week\"]\nL --> P3[\"10% of customers<br/>1 week\"]\nL --> P4[\"50% of customers<br/>2 weeks\"]\nL --> P5[\"100% of customers<br/>2 weeks\"]\nP1 --> E\nP2 --> E\nP3 --> E\nP4 --> E\nP5 --> E\nE[\"E: Evaluate<br/>2 + 1 + 1 + 2 + 2 = <b>8 weeks</b><br/>Full outage costs <b>$200K an hour</b>\"]\nE --> E1[\"Go gate<br/>Errors under 0.1%<br/>Failed payments under 0.2%\"]\nE --> E2[\"Rollback<br/>Errors over 0.5% or<br/>failed payments over 1%\"]\nE --> E3[\"5 hour incident cost<br/>1% = <b>$10K</b>, 10% = <b>$100K</b><br/>50% = <b>$500K</b>, 100% = <b>$1M</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options<br/>Chance of a serious bug = 20%\"]\nA --> A1[\"Big bang, all at once<br/>20% x $1M = $200K<br/>+ $10K dual run = <b>$210K</b>\"]\nA --> A2[\"Fast, 25% then 100%<br/>20% x $250K = $50K<br/>+ $20K dual run = <b>$70K</b>\"]\nA --> A3[\"Phased, 1-10-50-100<br/>20% x $10K = $2K<br/>+ $60K dual run = <b>$62K</b>\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Phased rollout over 8 weeks, cheapest and worst case only $10K at the start<br/>Risk: a bug that only shows at full load. Next step: sign the gates and rollback rules this week\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C c1;\nclass L c2;\nclass P1,P2,P3,P4,P5 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Customers in each phase",
      "2M x 1%, 10%, 50%, 100%",
      "20K, 200K, 1M, 2M"
     ],
     [
      "2",
      "Payments per hour at 100%",
      "1M a day / 24, about 40K",
      "40K an hour"
     ],
     [
      "3",
      "Full outage cost per hour",
      "40K payments x $5 each",
      "$200K an hour"
     ],
     [
      "4",
      "Outage cost per hour by phase",
      "$200K x 1%, 10%, 50%, 100%",
      "$2K, $20K, $100K, $200K"
     ],
     [
      "5",
      "Cost of a 5 hour incident",
      "Hourly cost x 5",
      "$10K, $100K, $500K, $1M"
     ],
     [
      "6",
      "Rollout length",
      "2 + 1 + 1 + 2 + 2 weeks",
      "8 weeks"
     ],
     [
      "7",
      "Dual run cost for phased",
      "6 weeks of rollout (1 + 1 + 2 + 2) x $10K",
      "$60K"
     ],
     [
      "8",
      "Expected cost, big bang vs phased",
      "Big bang: 20% x $1M + $10K. Phased: 20% x $10K + $60K",
      "$210K vs $62K"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Why not go fast and save weeks?",
      "Big bang $210K - phased $62K",
      "Phased is $148K cheaper, and big bang only saves 5 weeks (8 - 3)"
     ],
     [
      "What if a bug takes 10 hours to fix at 100%?",
      "10 hours x $200K an hour",
      "$2M, twice the 5 hour case"
     ],
     [
      "What if the bug chance is only 10%?",
      "Big bang: 10% x $1M + $10K. Phased: 10% x $10K + $60K",
      "$110K vs $61K, phasing still wins"
     ],
     [
      "At the 10% phase, how bad is rollback level of 1% failed?",
      "100K payments a day x 1% = 1,000 failed x $5",
      "$5K a day"
     ],
     [
      "Can we skip the 1% phase?",
      "1 + 2 + 2 = 5 weeks dual run x $10K = $50K, plus 20% x $100K = $20K",
      "$70K vs $62K, and 7 weeks total instead of 8"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would check three things. Can we run both systems and roll back fast, how many payments a day and what a failure costs, and how likely a serious bug is. I will assume yes, 1M payments a day at $5 per failure, and 20% bug chance."
    ],
    [
     "Lay out",
     "I would go in 5 steps: 2 weeks prep, then 1%, 10%, 50% and 100% of customers. I would tell staff and support first, and customers a week before the 50% step."
    ],
    [
     "Evaluate",
     "It takes 8 weeks. A full outage costs $200K an hour, so a 5 hour incident costs $10K at 1% and $1M at 100%. I move on only if errors stay under 0.1% and failed payments under 0.2%, and I roll back if errors pass 0.5% or failed payments pass 1%."
    ],
    [
     "Assess",
     "Big bang costs about $210K expected, a fast 25% then 100% costs $70K, and phased costs $62K. Phased is cheapest and has the smallest worst case."
    ],
    [
     "Recommend",
     "I recommend the phased rollout over 8 weeks. The main risk is a bug that only shows at full load, so I would hold the 50% step for 2 weeks and test peak days. My next step is to sign the go and rollback rules with risk and ops this week."
    ]
   ],
   "pitfalls": [
    "Giving a plan with no numbers for go and rollback, so nobody knows when to stop",
    "Forgetting the cost of running two systems, so phasing looks free",
    "Skipping communication, so support and customers are surprised when something breaks"
   ],
   "group": "Core cases"
  },
  {
   "id": "go-no-go",
   "title": "Launch readiness: go or no-go?",
   "prompt": "We launch a new savings feature on Friday. There are 3 open defects (1 severe, 2 minor), the load test passed at 80% of expected peak, the security review is done, and support is 70% trained. Do you go, no-go, or something else, and why?",
   "clarify": [
    "What is the severe defect, and who does it hit? [Transfers fail for 5% of users, on older app versions]",
    "What is the expected peak traffic, and what did the test cover? [500 requests a second; test ran to 400]",
    "What does a week of delay cost, and can we release to a small group first? [Benefit is $5.2M a year, campaign rework is $50K, and yes, a feature flag exists]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Savings feature launches Friday<br/>3 open defects, 1 severe\"]\nC --> C1[\"Traffic<br/>Expected peak<br/><b>500</b> requests a second\"]\nC --> C2[\"Severe defect<br/>Transfer fails for 5% of users<br/>Older app version\"]\nC --> C3[\"Value<br/>Benefit $5.2M a year<br/>100K eligible, 20% try in week 1\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the plan<br/>3 ways to decide\"]\nL --> L1[\"Go now<br/>100% on Friday\"]\nL --> L2[\"No-go<br/>Delay 1 week\"]\nL --> L3[\"Conditional go<br/>Feature flag<br/>10% on Friday\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate<br/>Put a dollar number on each risk\"]\nE --> E1[\"Load test<br/>80% x 500 = 400<br/>Gap = <b>100</b> requests a second\"]\nE --> E2[\"Severe defect<br/>20,000 x 5% = 1,000 customers<br/>1,000 x $50 = <b>$50K</b>\"]\nE --> E3[\"Delay: $100K + $50K = <b>$150K</b><br/>Bad launch: $50K + $200K = <b>$250K</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Go now<br/>Expected loss <b>$250K</b><br/>Too risky\"]\nA --> A2[\"No-go<br/>Delay costs <b>$150K</b><br/>Safe but slow\"]\nA --> A3[\"Conditional go<br/>$5K defect + $90K slower ramp<br/>Total <b>$95K</b>\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Conditional go: flag on, 10% rollout Friday<br/>Decide Thu 2 pm. Owners: Eng fixes defect by noon,<br/>SRE tests kill switch, Support trains to 100%\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;\n",
   "steps": {
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
      "Users in week one",
      "100,000 eligible x 20% try it",
      "20,000 users"
     ],
     [
      "2",
      "Expected peak traffic",
      "25% of 20,000 = 5,000 users in the busiest hour. 5,000 x 360 requests = 1.8M. 1.8M / 3,600 seconds",
      "500 requests a second"
     ],
     [
      "3",
      "Load test gap",
      "Tested 80% x 500 = 400. 500 - 400",
      "100 requests a second untested"
     ],
     [
      "4",
      "Severe defect cost",
      "20,000 x 5% = 1,000 customers. 1,000 x $50 (support + goodwill)",
      "$50K"
     ],
     [
      "5",
      "Cost of a one-week delay",
      "$5.2M / 52 = $100K benefit a week. $100K + $50K campaign rework",
      "$150K"
     ],
     [
      "6",
      "Cost of a bad launch",
      "Defect $50K + 20% chance of outage x $1M = $200K. $50K + $200K",
      "$250K"
     ],
     [
      "7",
      "Cost of conditional go",
      "10% x 20,000 = 2,000 users. 2,000 x 5% = 100 hit x $50 = $5K. Slower ramp loses 90% x $100K = $90K. $5K + $90K",
      "$95K"
     ],
     [
      "8",
      "Compare the three",
      "Delay $150K - $95K. Bad launch $250K - $95K",
      "Saves $55K and $155K"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "You only tested to 400. Why trust 10%?",
      "10% x 500 = 50 requests a second. 400 / 50",
      "8x headroom"
     ],
     [
      "Fix the defect and launch to everyone",
      "Defect gone, but outage risk stays: 20% x $1M. Compare with conditional go lost value of $90K",
      "$200K vs $90K"
     ],
     [
      "Support is only 70% trained",
      "10% rollout: 2,000 users x 5% call = 100 calls. 14 trained agents (70% of 20) x 20 calls a day = 280",
      "Capacity 280 vs 100 calls"
     ],
     [
      "The flag costs engineering time",
      "2 engineers x 2 days x $1K = $4K. Conditional go $95K + $4K",
      "$99K, still under $150K"
     ],
     [
      "Why not just wait a week?",
      "Delay $150K vs conditional go $95K",
      "Wait costs $55K more"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask what the severe defect is, what peak traffic we expect, and what a delay costs. I will assume transfers fail for 5% of users, peak is 500 requests a second, and a week of delay is $150K."
    ],
    [
     "Lay out",
     "There are three options. Go now at 100%, delay one week, or a conditional go with a feature flag at 10%."
    ],
    [
     "Evaluate",
     "The load test covered 400 of 500, so 100 requests a second are untested. The severe defect hits 1,000 customers and costs $50K. A bad full launch costs about $250K, and a delay costs $150K."
    ],
    [
     "Assess",
     "Conditional go costs about $95K. That is $5K for the defect and $90K for the slower ramp. It beats the delay by $55K and the full launch by $155K."
    ],
    [
     "Recommend",
     "I recommend a conditional go: feature flag on, 10% rollout on Friday. The main risk is the untested 100 requests a second, so we ramp to 25%, 50%, 100% only if errors stay low, and we can switch the flag off in minutes. Next step is a decision meeting Thursday at 2 pm: Eng lead confirms the defect fix by noon, SRE tests the kill switch, and Support lead finishes training."
    ]
   ],
   "pitfalls": [
    "Saying go or no-go without numbers. Always price the delay and the bad launch.",
    "Treating all 3 defects the same. One severe defect matters more than two minor ones.",
    "Forgetting the middle option. A feature flag and small rollout cuts risk and keeps most of the value."
   ],
   "group": "Core cases"
  },
  {
   "id": "peak-readiness",
   "title": "Prepare for a peak sales event",
   "prompt": "We run a 2-day sale and expect 3x our normal orders. Warehouses, carriers, customer support and the website must be ready in 10 weeks. What do you do?",
   "clarify": [
    "What is normal volume, and how long is the sale? [1M orders a day normally, 3x for 2 days]",
    "What can each area handle today? [Warehouses 2M orders a day, carriers 2.5M, support 120K contacts, website 360K orders an hour]",
    "What does a late order cost us? [$5 each: refund, support and reship]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>2-day sale at 3x normal orders<br/>Ready in 10 weeks\"]\nC --> C1[\"Demand<br/>Normal 1M orders a day<br/>Peak 3 x 1M = <b>3M</b> a day\"]\nC --> C2[\"Areas to check<br/>Warehouses, carriers<br/>Support, website\"]\nC --> C3[\"Late order cost<br/>$5 each<br/>Refund, support, reship\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the plan<br/>Compare capacity with 3M a day in each area\"]\nL --> L1[\"Warehouses<br/>2M of 3M a day<br/><b>67%</b>\"]\nL --> L2[\"Carriers<br/>2.5M of 3M a day<br/><b>83%</b>\"]\nL --> L3[\"Support<br/>120K of 150K contacts<br/><b>80%</b>\"]\nL --> L4[\"Website<br/>360K of 300K an hour<br/><b>120%</b>\"]\nL1 --> E\nL2 --> E\nL3 --> E\nL4 --> E\nE[\"E: Evaluate<br/>The lowest ratio is the bottleneck\"]\nE --> E1[\"Bottleneck<br/>Warehouses at <b>67%</b><br/>Gap 3M - 2M = <b>1M</b> a day\"]\nE --> E2[\"Cost of missing<br/>1M x $5 = <b>$5M</b> a day<br/>Both days = <b>$10M</b>\"]\nE --> E3[\"Next in line<br/>Carriers short 0.5M a day<br/>Support short 30K contacts\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the warehouse options\"]\nA --> A1[\"Extra shifts only<br/>+0.6M a day for $2.4M<br/>Late: 0.4M x 2 x $5 = $4M<br/>Total <b>$6.4M</b>\"]\nA --> A2[\"Partner site only<br/>+0.4M a day for $2.4M<br/>Late: 0.6M x 2 x $5 = $6M<br/>Total <b>$8.4M</b>\"]\nA --> A3[\"Both together<br/>0.6M + 0.4M = 1M a day<br/>Gap closed<br/>Cost <b>$4.8M</b>\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Add shifts and a partner site now, plus carriers and 600 agents<br/>Total <b>$5.9M</b> vs <b>$10M</b> if we do nothing<br/>Sign contracts in week 2. Track weekly. Load test the site in week 8\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3,L4 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;\n",
   "steps": {
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
      "Peak demand",
      "1M x 3 = 3M a day. 2 days: 2 x 3M",
      "3M a day, 6M orders"
     ],
     [
      "2",
      "Support and website need",
      "Support: 3M x 5% contact rate = 150K contacts. Website: peak hour is 10% of the day, 3M x 10%",
      "150K contacts, 300K orders an hour"
     ],
     [
      "3",
      "Capacity vs demand",
      "Warehouses 2M / 3M. Carriers 2.5M / 3M. Support 120K / 150K. Website 360K / 300K",
      "67%, 83%, 80%, 120%. Warehouses are lowest"
     ],
     [
      "4",
      "The gap",
      "3M - 2M",
      "1M orders a day short"
     ],
     [
      "5",
      "Cost of missing",
      "1M late x $5 = $5M a day. 2 x $5M",
      "$5M a day, $10M for both days"
     ],
     [
      "6",
      "Fix with shifts only",
      "0.6M / 100 orders per worker = 6,000 workers. 6,000 x $200 x 2 days = $2.4M. Still 0.4M short: 0.4M x 2 x $5 = $4M. $2.4M + $4M",
      "$6.4M"
     ],
     [
      "7",
      "Fix with a partner only",
      "0.4M x $3 x 2 days = $2.4M. Still 0.6M short: 0.6M x 2 x $5 = $6M. $2.4M + $6M",
      "$8.4M"
     ],
     [
      "8",
      "Both, plus carriers and support",
      "Shifts $2.4M + partner $2.4M = $4.8M. Carriers: 0.5M x 2 x $0.5 = $0.5M. Support: (150K - 120K) / 50 = 600 agents x $1K = $0.6M. $4.8M + $0.5M + $0.6M",
      "$5.9M vs $10M"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Is the website fine?",
      "360K / 300K",
      "120%, no gap"
     ],
     [
      "What if carriers do not book?",
      "After the fix we ship only 2.5M. 0.5M late x $5 = $2.5M a day. 2 days",
      "$5M of late orders"
     ],
     [
      "What if demand is 4x, not 3x?",
      "4M demand - 3M capacity after the fix = 1M late. 1M x $5",
      "$5M a day, so keep a plan B"
     ],
     [
      "Why not accept the late orders?",
      "$10M - $5.9M",
      "Plan saves $4.1M"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask for normal volume, the sale length and the cost of a late order. I will assume 1M orders a day, 3x for 2 days, and $5 per late order. Working backwards from the customer, a late box on sale day breaks a promise, so this is Customer Obsession."
    ],
    [
     "Lay out",
     "I will compare capacity with the 3M daily demand in four areas: warehouses, carriers, support and website. The lowest ratio is the bottleneck."
    ],
    [
     "Evaluate",
     "Warehouses can do 2M of 3M, which is 67%, so we are 1M short a day. Carriers are 83%, support 80% and the website 120%. Missing a day costs 1M x $5 = $5M, so $10M for both days."
    ],
    [
     "Assess",
     "Extra shifts alone cost $6.4M including late orders. A partner site alone costs $8.4M. Both together close the gap for $4.8M."
    ],
    [
     "Recommend",
     "I recommend adding shifts and a partner site now, and also booking carriers and hiring 600 agents, for $5.9M in total versus $10M. The main risk is carriers, because they cap us at 2.5M if the booking slips. Next step: sign the carrier and partner contracts in week 2 and review progress every week."
    ]
   ],
   "pitfalls": [
    "Looking at the whole sale and not each area. One weak area sets the limit for everything.",
    "Saying the website is the problem without checking the numbers. Here it has 120% of what it needs.",
    "Fixing only the first bottleneck. After warehouses, carriers become the next limit."
   ],
   "group": "Customer, delivery and scale"
  },
  {
   "id": "same-day-launch",
   "title": "Launch same-day delivery in a new city",
   "prompt": "We want to launch same-day delivery in a new city in 8 weeks. We need a local hub, drivers and partner carriers, and we target 90% on time. How do you plan the ramp and decide go or no-go?",
   "clarify": [
    "How many orders a day at full ramp? [10,000 same-day orders a day]",
    "How much can drivers and partners do? [A driver does 20 deliveries a day; we hire 30 drivers a week; partners take 4,000 a day]",
    "What does a late order cost, and what is the profit on an order? [Late costs $8; profit is $2; orders above capacity arrive late]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Same-day delivery in a new city<br/>Launch in 8 weeks\"]\nC --> C1[\"Demand<br/>10,000 orders a day<br/>at full ramp\"]\nC --> C2[\"Target<br/>90% on time<br/>Need 9,000 on time\"]\nC --> C3[\"Money<br/>Late order costs $8<br/>Profit per order $2\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the plan<br/>4 workstreams at the same time\"]\nL --> L1[\"Hub<br/>Weeks 1-4\"]\nL --> L2[\"Drivers<br/>30 a week x 7 weeks<br/><b>210</b> by launch\"]\nL --> L3[\"Partner carriers<br/>Sign weeks 2-5<br/>4,000 orders a day\"]\nL --> L4[\"Pilot<br/>1,000 test orders<br/>Week 7\"]\nL1 --> E\nL2 --> E\nL3 --> E\nL4 --> E\nE[\"E: Evaluate<br/>Drivers are the critical path<br/>7 weeks of the 8\"]\nE --> E1[\"Need<br/>Drivers: (9,000 - 4,000) / 20<br/><b>250</b> drivers\"]\nE --> E2[\"Have<br/>210 x 20 + 4,000<br/><b>8,200</b> a day\"]\nE --> E3[\"Gap<br/>8,200 / 10,000 = <b>82%</b> on time<br/>Short by <b>40</b> drivers\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the launch options\"]\nA --> A1[\"Open all zones at launch<br/>Late 1,800 then 1,200 a day<br/>Weeks 8-9: <b>$168K</b><br/>Misses 90%\"]\nA --> A2[\"Delay 2 weeks<br/>14 days x 10,000 x $2<br/>Lost profit <b>$280K</b>\"]\nA --> A3[\"Ramp by zones<br/>Open 8,000, then 8,800, then 10,000<br/>Lost profit <b>$44.8K</b>\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Go with the ramp plan if the week 7 gate is met<br/>Gate: 210 drivers, partners at 4,000, pilot 900 of 1,000 on time<br/>Line up 40 backup drivers. Review hiring weekly\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3,L4 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;\n",
   "steps": {
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
      "On-time target",
      "90% x 10,000",
      "9,000 on-time orders a day"
     ],
     [
      "2",
      "Drivers needed",
      "Partners 4,000. Own drivers: 9,000 - 4,000 = 5,000. 5,000 / 20",
      "250 drivers"
     ],
     [
      "3",
      "Drivers at launch",
      "30 a week x 7 weeks",
      "210 drivers"
     ],
     [
      "4",
      "Capacity at launch",
      "210 x 20 = 4,200. 4,200 + 4,000",
      "8,200 a day"
     ],
     [
      "5",
      "On time if all zones open",
      "8,200 / 10,000. Short: 9,000 - 8,200 = 800. 800 / 20",
      "82%, 40 drivers short"
     ],
     [
      "6",
      "Capacity by week",
      "Week 8: 210 x 20 + 4,000. Week 9: 240 x 20 + 4,000. Week 10: 270 x 20 + 4,000",
      "8,200, 8,800, 9,400 (94% at week 10)"
     ],
     [
      "7",
      "Cost of opening all zones",
      "Week 8: (10,000 - 8,200) = 1,800 x 7 days x $8 = $100.8K. Week 9: 1,200 x 7 x $8 = $67.2K. Sum",
      "$168K"
     ],
     [
      "8",
      "Cost of the ramp and the delay",
      "Open 8,000 in week 8: 2,000 x 7 x $2 = $28K. Open 8,800 in week 9: 1,200 x 7 x $2 = $16.8K. Delay: 10,000 x 14 x $2",
      "$44.8K ramp vs $280K delay"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Can agency drivers close the gap?",
      "40 x $500 = $20K. (210 + 40) x 20 + 4,000 = 9,000. 9,000 / 10,000",
      "$20K, exactly 90% with no cushion"
     ],
     [
      "A partner delivers only 3,000, not 4,000",
      "210 x 20 + 3,000 = 7,200. 7,200 / 10,000",
      "72%, so open only 7,200 a day"
     ],
     [
      "The pilot gets 850 of 1,000 on time",
      "850 / 1,000",
      "85% is under 90%, so no-go until fixed"
     ],
     [
      "Why not delay 2 weeks to be safe?",
      "$280K - $44.8K",
      "Delay costs $235.2K more"
     ],
     [
      "When do we reach 10,000 a day?",
      "(10,000 - 4,000) / 20 = 300 drivers. (300 - 210) / 30",
      "3 weeks after launch, week 11"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask for full volume, driver and partner capacity, and what a late order costs. I will assume 10,000 orders a day, 20 deliveries per driver, 30 hires a week, and $8 per late order. I start from the customer: same-day is a promise, and late means we broke it, which is Customer Obsession."
    ],
    [
     "Lay out",
     "Four workstreams run in parallel: the hub in weeks 1 to 4, driver hiring in weeks 1 to 7, partner carriers in weeks 2 to 5, and a pilot in week 7. Hiring is the longest, so it is the critical path."
    ],
    [
     "Evaluate",
     "For 90% on time we need 9,000 orders handled a day. We have 210 drivers x 20 + 4,000 = 8,200, so only 82% on time if we open every zone."
    ],
    [
     "Assess",
     "Opening everything costs $168K in late orders and misses the target. A 2-week delay costs $280K. A zone ramp of 8,000, 8,800, then 10,000 costs $44.8K."
    ],
    [
     "Recommend",
     "I recommend a go with the ramp plan, if the week 7 gate is met: 210 drivers, partners at 4,000 a day, and a pilot with 900 of 1,000 on time. The main risk is hiring slower than 30 a week. Next step is to line up 40 backup drivers and review hiring every week."
    ]
   ],
   "pitfalls": [
    "Giving one launch date with no go/no-go test. Say what must be true to go.",
    "Looking at drivers only. Partner carriers are 4,000 of the 10,000 orders.",
    "Opening every zone on day 1 because the date is fixed. Late orders hurt trust more than a slower start."
   ],
   "group": "Customer, delivery and scale"
  },
  {
   "id": "delivery-delays",
   "title": "Delivery delays are up 20%",
   "prompt": "Our on-time delivery rate fell from 95% to 75%, so late orders are up 20 points. Find the cause, say what it costs us and our customers, and tell me how you would fix it.",
   "clarify": [
    "How many orders a day, and how are they split? [1M a day: North, South, East 200K each, West 400K]",
    "Which carriers serve the regions? [In West, Carrier X carries 300K and Carrier Y carries 100K]",
    "What does a late order cost, and how many customers leave? [$5 each; 10% of late customers stop buying, worth $50 each]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>On-time fell from 95% to 75%<br/>Late orders up 20 points\"]\nC --> C1[\"Volume<br/>1M orders a day<br/>4 regions\"]\nC --> C2[\"Late orders<br/>Before 1M x 5% = 50K<br/>Now 1M x 25% = <b>250K</b>\"]\nC --> C3[\"Cost<br/>$5 per late order<br/>10% of late customers leave\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the plan<br/>Trace the cause in 3 cuts\"]\nL --> L1[\"By region<br/>North, South, East: 5% late<br/>West: <b>55%</b> late\"]\nL --> L2[\"By carrier in West<br/>Carrier X: 70% late<br/>Carrier Y: 10% late\"]\nL --> L3[\"By cost<br/>$5 + 10% x $50<br/><b>$10</b> per late order\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate\"]\nE --> E1[\"Size<br/>250K - 50K = <b>200K</b> extra late<br/>All of it is in West\"]\nE --> E2[\"Cause<br/>X late: 300K x 70% = <b>210K</b><br/>84% of all late orders\"]\nE --> E3[\"Cost<br/>200K x $10 = <b>$2M</b> a day<br/><b>20K</b> customers at risk a day\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the fixes\"]\nA --> A1[\"Move 100K from X to Y<br/>Saves 60K x $10 = $600K<br/>Cost $50K<br/>Net <b>$550K</b> a day, this week\"]\nA --> A2[\"Fix X: hire drivers<br/>Late 210K down to 30K<br/>Saves <b>$1.8M</b> a day<br/>Takes 4 weeks\"]\nA --> A3[\"Own fleet takes 50K<br/>Saves 30K x $10 = $300K<br/>Cost $50K<br/>Net <b>$250K</b> a day\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Move 100K orders to Carrier Y now and fix Carrier X in parallel<br/>On time 75% to <b>81%</b> in week 1, then <b>93%</b> by week 4<br/>Daily check by region and carrier. One owner for the X fix\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;\n",
   "steps": {
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
      "Late orders before and now",
      "1M x 5% = 50K. 1M x 25% = 250K. 250K - 50K",
      "Up 200K a day"
     ],
     [
      "2",
      "Late by region",
      "North, South, East: 200K x 5% = 10K each, 30K in total. West: 250K - 30K = 220K. 220K / 400K",
      "West is 55% late, the others 5%"
     ],
     [
      "3",
      "West change",
      "Before: 400K x 5% = 20K. Now 220K. 220K - 20K",
      "Up 200K, the whole rise"
     ],
     [
      "4",
      "Late by carrier in West",
      "X: 300K x 70% = 210K. Y: 100K x 10% = 10K. 210K + 10K. 210K / 250K",
      "220K; X is 84% of all late orders"
     ],
     [
      "5",
      "Cost per late order",
      "$5 direct + 10% leave x $50",
      "$10"
     ],
     [
      "6",
      "Daily cost of the rise",
      "200K x $10. Customers: 200K x 10%",
      "$2M a day, 20K customers"
     ],
     [
      "7",
      "Fix A1: move 100K to Y",
      "X: 200K x 70% = 140K. Y: 200K x 10% = 20K. West late 160K, saves 220K - 160K = 60K. 60K x $10 = $600K. Cost 100K x $0.5 = $50K",
      "Net $550K a day"
     ],
     [
      "8",
      "Recovery path",
      "After A1: 250K - 60K = 190K late. After X is fixed to 10% late: X 20K + Y 20K + 30K elsewhere = 70K",
      "81% on time, then 93%"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Is this just a busy season?",
      "North, South, East: 10K late of 200K each",
      "5%, same as before. No"
     ],
     [
      "Why not fix X only?",
      "X at 10% late: 300K x 10% = 30K. Saves 210K - 30K = 180K. 180K x $10",
      "$1.8M a day, but 4 weeks away"
     ],
     [
      "What if Y slips to 30% late?",
      "Y: 200K x 30% = 60K. West late 140K + 60K = 200K. Saves 20K x $10 = $200K. Less $50K",
      "Net $150K, still positive"
     ],
     [
      "Why not use our own fleet?",
      "50K moved: X late 35K down to 5K. Saves 30K x $10 = $300K. Cost 50K x $1",
      "Net $250K, smaller than A1"
     ],
     [
      "What is one point of on-time worth?",
      "1M x 1% = 10K late. 10K x $10",
      "$100K a day"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask how orders split across regions and carriers, and what a late order costs. I will assume 1M orders a day, West at 400K, and $5 per late order with 10% of those customers leaving. I start from what the customer feels, a late box, and I dive deep into the data before picking a fix."
    ],
    [
     "Lay out",
     "I will cut the problem three ways: by region, by carrier inside the bad region, and by cost per late order."
    ],
    [
     "Evaluate",
     "Late orders went from 50K to 250K a day, up 200K, and all of it is in West. Carrier X is 210K of the 250K late orders, or 84%. Each late order costs about $10, so the rise costs $2M a day."
    ],
    [
     "Assess",
     "Moving 100K orders from X to Y nets $550K a day and starts this week. Fixing X saves $1.8M a day but takes 4 weeks. The own fleet nets only $250K a day."
    ],
    [
     "Recommend",
     "I recommend moving 100K orders to Carrier Y now and fixing Carrier X in parallel. That brings on-time from 75% to 81% in week 1 and 93% by week 4. The main risk is Y slipping under more volume, so next step is a daily check by region and carrier, with one owner for the X fix."
    ]
   ],
   "pitfalls": [
    "Averaging across the whole network. The cause was hidden in one region and one carrier.",
    "Counting only the $5 refund and ignoring customers who leave.",
    "Waiting for the root-cause fix. Take a quick fix first, then fix the root cause."
   ],
   "group": "Customer, delivery and scale"
  },
  {
   "id": "new-warehouse-ramp",
   "title": "Ramp up a new fulfillment center",
   "prompt": "A new fulfillment center must reach full capacity in 16 weeks. How do you plan staffing, training, quality and throughput, and what could slow you down?",
   "clarify": [
    "What is full capacity, and how fast is a trained worker? [100K orders a day over 2 shifts of 10 hours; 25 orders an hour per trained worker]",
    "What quality and cost targets do we have? [Error rate 1% at the end; each error costs $10; a delayed order loses $2]",
    "What is the hiring and training setup? [Hiring up to 50 a week; 2 weeks of training; one trainer per 10 new hires; about 20% of new hires quit]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>New fulfillment center<br/>Full capacity in 16 weeks\"]\nC --> C1[\"Full capacity<br/>100K orders a day<br/>100K / 20 hours = <b>5,000</b> an hour\"]\nC --> C2[\"People<br/>25 orders an hour each<br/>5,000 / 25 = 200 a shift<br/><b>400</b> workers in 2 shifts\"]\nC --> C3[\"Quality<br/>Error target 1%<br/>Each error costs $10\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the plan<br/>4 milestones, 4 weeks apart\"]\nL --> L1[\"Week 4<br/>100 a shift x 10 an hour<br/>1,000 an hour = <b>20K</b> a day\"]\nL --> L2[\"Week 8<br/>150 a shift x 15 an hour<br/>2,250 an hour = <b>45K</b> a day\"]\nL --> L3[\"Week 12<br/>200 a shift x 20 an hour<br/>4,000 an hour = <b>80K</b> a day\"]\nL --> L4[\"Week 16<br/>200 a shift x 25 an hour<br/>5,000 an hour = <b>100K</b> a day\"]\nL1 --> E\nL2 --> E\nL3 --> E\nL4 --> E\nE[\"E: Evaluate<br/>Staffing, errors and the main risk\"]\nE --> E1[\"Hiring<br/>200, then 300, then 400 workers<br/>50 a week, then 25 a week\"]\nE --> E2[\"Errors<br/>Cost peaks in week 12<br/>80K x 2% x $10 = <b>$16K</b> a day\"]\nE --> E3[\"Risk<br/>20% of new hires quit<br/>400 to 320 workers<br/>Short <b>20K</b> orders = <b>$800K</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Hire 500 to keep 400<br/>100 extra x $2K<br/>Cost <b>$200K</b><br/>Plan holds\"]\nA --> A2[\"Hire 400 and wait<br/>Slip about 4 weeks<br/>Cost <b>$800K</b>\"]\nA --> A3[\"Add 80 temps<br/>80 x $3K<br/>Cost <b>$240K</b><br/>Less trained\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Hire 500 in waves so that 400 stay<br/>Cost $200K vs $800K<br/>Check quit rate and error rate weekly. Escalate if quits pass 20%\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3,L4 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;\n",
   "steps": {
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
      "Full capacity per hour",
      "100K orders / 20 hours",
      "5,000 an hour"
     ],
     [
      "2",
      "Workers at full speed",
      "5,000 / 25 = 200 a shift. 200 x 2 shifts",
      "400 workers"
     ],
     [
      "3",
      "Throughput per hour at each milestone",
      "Week 4: 100 x 10. Week 8: 150 x 15. Week 12: 200 x 20. Week 16: 200 x 25",
      "1,000, 2,250, 4,000, 5,000 an hour"
     ],
     [
      "4",
      "Orders a day (x 20 hours)",
      "1,000 x 20. 2,250 x 20. 4,000 x 20. 5,000 x 20",
      "20K, 45K, 80K, 100K (20%, 45%, 80%, 100%)"
     ],
     [
      "5",
      "Hiring plan",
      "Week 4: 200 workers / 4 weeks = 50 a week. Weeks 5-8: +100 / 4 = 25 a week. Weeks 9-12: +100 / 4 = 25 a week",
      "200, 300, 400 workers"
     ],
     [
      "6",
      "Error cost a day (error rates 5%, 3%, 2%, 1%)",
      "20K x 5% = 1,000 x $10. 45K x 3% = 1,350 x $10. 80K x 2% = 1,600 x $10. 100K x 1% = 1,000 x $10",
      "$10K, $13.5K, $16K, $10K"
     ],
     [
      "7",
      "Risk: 20% quit",
      "400 x 80% = 320 workers. 160 a shift x 25 x 20 hours = 80K. 100K - 80K = 20K short. 20K x $2 = $40K a day x 20 working days",
      "$800K"
     ],
     [
      "8",
      "Compare the options",
      "Hire 500: 500 x 80% = 400; 100 extra x $2K = $200K. Hire 400 and wait: $800K. Temps: 80 x $3K",
      "$200K vs $800K vs $240K"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "What if only 10% quit?",
      "400 x 90% = 360. 180 a shift x 25 x 20 = 90K. Short 10K x $2 = $20K a day x 20 days",
      "$400K"
     ],
     [
      "Is hiring 500 worth it?",
      "$800K - $200K",
      "Saves $600K"
     ],
     [
      "Why not use temps?",
      "80 temps fill the gap. 80 x $3K = $240K. $240K - $200K",
      "$40K more, and less trained"
     ],
     [
      "How many trainers do we need?",
      "Weeks 1-4: 50 hires a week x 2 weeks in class = 100 at a time. 100 / 10 per trainer",
      "10 trainers"
     ],
     [
      "Can we go faster, 40K a day at week 4?",
      "40K x 5% = 2,000 errors x $10, against $10K at 20K a day",
      "$20K a day, errors double"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask what full capacity is, what a trained worker does, and what errors and delays cost. I will assume 100K orders a day, 25 orders an hour, and $10 per error. Customer Obsession means a wrong item hurts the customer, so I protect quality while we speed up, and I take ownership of each milestone."
    ],
    [
     "Lay out",
     "There are four milestones, 4 weeks apart: 20K orders a day in week 4, 45K in week 8, 80K in week 12, and 100K in week 16. Staff grows from 200 to 400 workers and speed grows from 10 to 25 orders an hour."
    ],
    [
     "Evaluate",
     "Error cost peaks in week 12 at about $16K a day, then falls as errors drop to 1%. The big risk is people leaving: if 20% quit, we have 320 workers and are 20K orders short a day, which costs $800K."
    ],
    [
     "Assess",
     "Hiring 500 to keep 400 costs $200K. Hiring 400 and waiting costs $800K. Adding 80 temps costs $240K and they are less trained."
    ],
    [
     "Recommend",
     "I recommend hiring 500 in waves so that 400 stay, for $200K instead of $800K. The main risk is a quit rate above 20%. Next step is to start wave 1 now and review quit rate and error rate every week."
    ]
   ],
   "pitfalls": [
    "Hiring the exact number needed and ignoring people who quit.",
    "Looking only at speed. Errors are most costly in the middle of the ramp.",
    "Treating every worker as 25 orders an hour from day 1. Speed grows with training and practice."
   ],
   "group": "Customer, delivery and scale"
  },
  {
   "id": "fraud-rules-rollout",
   "title": "Roll out new fraud rules to all cards",
   "prompt": "We built new fraud rules for our 20M cards. They cut fraud losses, but they may also decline good customers, so how would you roll them out?",
   "clarify": [
    "What are fraud losses today, and how much do the rules cut? [$100M a year on $50B of spend, so 0.20%. The rules cut it 30%, to 0.14%]",
    "How many good customers get wrongly declined, and what does each one cost? [1% of cards a year, about $25 each for the call and lost spend]",
    "Can we split cards at random and keep a control group? [Yes, by card ID, with a daily dashboard. Each stage runs 2 weeks]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Roll out new fraud rules to 20M cards<br/>Cut fraud, but do not decline good customers\"]\nC --> C1[\"Fraud loss rate<br/>Now 0.20% ($100M on $50B)<br/>Goal 0.14%\"]\nC --> C2[\"False declines<br/>Plan 1% of cards<br/>Cost $25 each\"]\nC --> C3[\"Call volume<br/>Calls from declined customers<br/>Compare with the 95% control\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the rollout<br/>3 stages, same 3 checks at every stage\"]\nL --> L1[\"Stage 1: 5%<br/>1M cards<br/>2 weeks\"]\nL --> L2[\"Stage 2: 25%<br/>5M cards<br/>2 weeks\"]\nL --> L3[\"Stage 3: 100%<br/>20M cards<br/>Keep watching\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate<br/>Fraud saved $30M - false declines $5M = <b>$25M a year</b><br/>= $500K a week\"]\nE --> E1[\"Fraud saved<br/>$100M x 30%<br/>= <b>$30M</b>\"]\nE --> E2[\"False declines<br/>20M x 1% = 200K cards<br/>200K x $25 = <b>$5M</b>\"]\nE --> E3[\"Cost of staging<br/>2 x 95% x $500K + 2 x 75% x $500K<br/>= <b>$1.7M</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Go to 100% now<br/>Bug hits 5% of cards for a week<br/>1M cards x $25 = $25M\"]\nA --> A2[\"Stage 5%, 25%, 100%<br/>Same bug at 5%: 50K x $25 = $1.25M<br/>Staging costs $1.7M\"]\nA --> A3[\"Shadow mode first<br/>Score only, 2 weeks<br/>Costs 2 x $500K = $1M<br/>No real customer data\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Stage 5%, 25%, 100% with a 95% control group<br/>Roll back if fraud loss is over 0.17%, false declines over 1.5%, or calls up 20%\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Fraud saved a year",
      "$100M x 30%",
      "$30M"
     ],
     [
      "2",
      "Fraud loss rate now and goal",
      "$100M / $50B = 0.20%. 30% less = 0.14%",
      "0.20% to 0.14%"
     ],
     [
      "3",
      "Cost of false declines",
      "20M cards x 1% = 200K cards. 200K x $25",
      "$5M"
     ],
     [
      "4",
      "Net gain",
      "$30M - $5M = $25M a year. $25M / 50 weeks",
      "$25M, or $500K a week"
     ],
     [
      "5",
      "Stage sizes",
      "20M x 5% = 1M. 20M x 25% = 5M",
      "1M, 5M, 20M cards"
     ],
     [
      "6",
      "Cost of staging (4 weeks)",
      "2 x 95% x $500K = $950K. 2 x 75% x $500K = $750K. Add",
      "$1.7M"
     ],
     [
      "7",
      "A bad week at 100%",
      "Bug hits 5% of 20M = 1M cards. 1M x $25",
      "$25M"
     ],
     [
      "8",
      "The same bad week at stage 1",
      "5% of 1M = 50K cards. 50K x $25",
      "$1.25M"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Why not go straight to 100%?",
      "Staging costs $1.7M. A bad week costs $25M. $1.7M / $25M",
      "Worth it if the bug chance is over about 7%"
     ],
     [
      "Is 5% big enough to see a difference?",
      "1M x 1% = 10K wrong declines. At 1.5%: 1M x 1.5% = 15K",
      "5K gap, easy to see"
     ],
     [
      "What if false declines hit 1.5%?",
      "20M x 1.5% = 300K cards x $25 = $7.5M. $7.5M - $5M",
      "$2.5M extra. Net still $22.5M, but we stop for customers"
     ],
     [
      "What if fraud falls only half as much?",
      "15% x $100M = $15M. $15M - $5M. Rate: 0.20% x 85%",
      "$10M, still positive. Pause above 0.17%"
     ],
     [
      "What does the call trigger mean?",
      "Control makes 5K calls per 1M cards a week. 5K x 1.2",
      "Roll back above 6K calls"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask about fraud losses today, how many good customers get wrongly declined, and whether we can keep a control group. I will assume $100M of fraud a year on $50B of spend, a 30% cut, 1% false declines at $25 each, and a control group."
    ],
    [
     "Lay out",
     "I would roll out in 3 stages: 5% of cards (1M), then 25% (5M), then 100% (20M). Each early stage runs 2 weeks, with the same 3 checks: fraud loss rate, false declines and call volume."
    ],
    [
     "Evaluate",
     "The rules save $30M of fraud and cost $5M of false declines, so $25M net, or $500K a week. Staging for 4 weeks delays about $1.7M of savings."
    ],
    [
     "Assess",
     "Going to 100% now puts 20M cards at risk: a bug hitting 5% of cards is $25M in a week. The same bug at stage 1 costs $1.25M. Shadow mode costs $1M but shows no real customer reaction."
    ],
    [
     "Recommend",
     "I recommend 5%, 25%, then 100%, with a control group and clear rollback triggers: fraud loss above 0.17%, false declines above 1.5%, or calls up 20%. The main risk is declining good customers, so we pilot first, measure against the control, and only then scale. Next step: build the daily dashboard with these triggers and start stage 1."
    ]
   ],
   "pitfalls": [
    "Setting no rollback numbers, so nobody knows when to stop",
    "Watching fraud only, and ignoring false declines and calls",
    "Moving to the next stage on a calendar date, not on the metrics"
   ],
   "group": "Banking, cards, fraud and data"
  },
  {
   "id": "cloud-migration",
   "title": "Move a data platform to the cloud",
   "prompt": "We want to move 200 data pipelines to the cloud in 9 months. Old and new will run side by side for a while, so how would you plan the waves and decide if it is worth it?",
   "clarify": [
    "What do the pipelines cost today and in the cloud? [$5K per pipeline a month today, $3K in the cloud]",
    "How long do old and new run together, and what is the build effort? [1 month per wave, about $10K of work per pipeline]",
    "How do we know the data match? [Row counts and money totals must match for 5 days in a row before cutover]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Move 200 data pipelines to the cloud in 9 months<br/>Old and new run side by side before each cutover\"]\nC --> C1[\"Cost today<br/>$5K per pipeline a month<br/>200 x $5K = $1M\"]\nC --> C2[\"Cost in cloud<br/>$3K per pipeline a month<br/>200 x $3K = $600K\"]\nC --> C3[\"Risk<br/>Old and new data may not match<br/>Check before every cutover\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the wave plan<br/>Each wave: build, run both 1 month, match check, cut over\"]\nL --> L1[\"Wave 1<br/>20 simple pipelines<br/>Months 1-2\"]\nL --> L2[\"Wave 2<br/>40 medium pipelines<br/>Months 3-4\"]\nL --> L3[\"Wave 3<br/>60 shared pipelines<br/>Months 5-6\"]\nL --> L4[\"Wave 4<br/>80 critical pipelines<br/>Months 7-9\"]\nL1 --> E\nL2 --> E\nL3 --> E\nL4 --> E\nE[\"E: Evaluate<br/>One-time cost $0.6M + $2M = <b>$2.6M</b><br/>Saving after migration $400K a month\"]\nE --> E1[\"Dual-running<br/>200 x $3K x 1 month<br/>= <b>$600K</b>\"]\nE --> E2[\"Build effort<br/>200 x $10K<br/>= <b>$2M</b>\"]\nE --> E3[\"Savings<br/>$1M - $600K = <b>$400K a month</b><br/>Payback $2.6M / $400K = <b>6.5 months</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Big bang at month 9<br/>Dual-run all 200 for 3 months<br/>200 x $3K x 3 = $1.8M<br/>All risk at once\"]\nA --> A2[\"Waves, safe to critical<br/>Dual-run 1 month each<br/>$600K in total<br/>Learn on the small waves\"]\nA --> A3[\"Critical 80 first<br/>No practice on easy ones<br/>A mismatch hits fraud<br/>and finance reports\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Move in 4 waves of 20, 40, 60, 80: safe first, critical last<br/>Cut over only after a 5-day match check. Next: pick the wave 1 pipelines this week\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3,L4 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Run cost today",
      "200 pipelines x $5K",
      "$1M a month"
     ],
     [
      "2",
      "Run cost in the cloud",
      "200 pipelines x $3K",
      "$600K a month"
     ],
     [
      "3",
      "Saving after migration",
      "$1M - $600K = $400K a month. $400K x 12",
      "$400K a month, $4.8M a year"
     ],
     [
      "4",
      "Dual-running cost",
      "Cloud runs 1 extra month per pipeline: 200 x $3K x 1",
      "$600K"
     ],
     [
      "5",
      "Build effort",
      "200 pipelines x $10K",
      "$2M"
     ],
     [
      "6",
      "One-time cost",
      "$600K + $2M",
      "$2.6M"
     ],
     [
      "7",
      "Payback",
      "$2.6M / $400K a month",
      "6.5 months after the last wave"
     ],
     [
      "8",
      "Wave plan",
      "20 + 40 + 60 + 80 pipelines. 2 + 2 + 2 + 3 months",
      "200 pipelines, 9 months"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "What if 10% of pipelines fail the match check?",
      "200 x 10% = 20 pipelines x $3K x 1 extra month",
      "$60K, small"
     ],
     [
      "What if the program slips 1 month?",
      "Savings start 1 month later: 1 x $400K",
      "$400K lost"
     ],
     [
      "Why not a big bang?",
      "Dual-run all 200 for 3 months: 200 x $3K x 3 = $1.8M. $1.8M - $600K",
      "$1.2M more, and all risk at once"
     ],
     [
      "What if cloud costs $4K, not $3K?",
      "Saving: 200 x ($5K - $4K) = $200K a month. One-time: 200 x $4K + $2M = $2.8M. $2.8M / $200K",
      "Payback 14 months"
     ],
     [
      "What do we net in the first year after migration?",
      "$4.8M saving - $2.6M one-time",
      "$2.2M"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask what the pipelines cost today and in the cloud, and how we will know old and new data match. I will assume $5K per pipeline a month today, $3K in the cloud, and a match check of 5 days in a row."
    ],
    [
     "Lay out",
     "I would move in 4 waves of 20, 40, 60 and then 80 pipelines over 9 months. Each wave builds, runs old and new for 1 month, passes the match check, then cuts over."
    ],
    [
     "Evaluate",
     "Dual-running costs about $600K and build effort $2M, so $2.6M one-time. After migration we save $400K a month, or $4.8M a year, so it pays back in 6.5 months."
    ],
    [
     "Assess",
     "A big bang means dual-running all 200 for 3 months, which is $1.8M, with all the risk at once. Starting with the critical 80 gives no practice, and a mismatch would hit fraud and finance reports. Waves from safe to critical keep dual-running at $600K."
    ],
    [
     "Recommend",
     "I recommend 4 waves, safe pipelines first and the critical 80 last, with each cutover only after the match check passes. The main risk is data mismatch, so we run wave 1 first, measure real cost and match rates, and only then scale to the bigger waves. Next step: choose the 20 pipelines for wave 1 and write the match test this week."
    ]
   ],
   "pitfalls": [
    "Moving the most critical pipelines first, before the team has any practice",
    "Forgetting dual-running cost, so the savings look bigger than they are",
    "Cutting over on a date, not when the data match check passes"
   ],
   "group": "Banking, cards, fraud and data"
  },
  {
   "id": "credit-line-program",
   "title": "Run a credit line increase program",
   "prompt": "We want to offer higher credit lines to 2M eligible customers in the next 10 weeks. How would you design the offers and run the program?",
   "clarify": [
    "How do the 2M customers split by risk, and what is the offer for each tier? [Low risk 800K get +$2K. Medium 800K get +$1K. Higher 400K get +$500]",
    "What is the risk team approval cap? [No more than $1B of new lines granted]",
    "How do we reach customers? [App message for 50%, letter for the other 50%, and the call center for questions]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>Credit line increase for 2M eligible customers<br/>Ready to launch in 10 weeks\"]\nC --> C1[\"Offer tiers<br/>Low risk 800K: +$2K<br/>Medium 800K: +$1K<br/>Higher 400K: +$500\"]\nC --> C2[\"Risk team cap<br/>New lines granted<br/>no more than $1B\"]\nC --> C3[\"Channels<br/>App message, letter, call center<br/>Letters for non-app customers\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the 10 weeks<br/>Delays to watch: risk sign-off, letter legal review, app freeze\"]\nL --> L1[\"Weeks 1-2<br/>Risk approval<br/>and offer tiers\"]\nL --> L2[\"Weeks 3-5<br/>Build letters, app message<br/>and call script\"]\nL --> L3[\"Weeks 6-7<br/>Pilot to 5%<br/>80K customers\"]\nL --> L4[\"Weeks 8-10<br/>Send the rest in batches<br/>and review\"]\nL1 --> E\nL2 --> E\nL3 --> E\nL4 --> E\nE[\"E: Evaluate<br/>Profit $32M - losses $10M = $22M. Operations $0.8M<br/>Net <b>$21.2M a year</b> (low + medium tiers)\"]\nE --> E1[\"Low risk<br/>400K takers<br/>$20M - $4M = <b>$16M</b>\"]\nE --> E2[\"Medium risk<br/>200K takers<br/>$12M - $6M = <b>$6M</b>\"]\nE --> E3[\"Higher risk<br/>80K takers<br/>$4.8M - $6M = <b>-$1.2M</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Offer all 3 tiers<br/>Net $22M - $1.2M = $20.8M<br/>Lines $1.04B, over the cap\"]\nA --> A2[\"Offer low + medium only<br/>Net $22M before operations<br/>Lines $1B, fits the cap\"]\nA --> A3[\"Low risk only<br/>Net $16M<br/>Lines $800M<br/>Leaves $6M on the table\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Offer low and medium tiers only: 1.6M customers, $1B cap<br/>Pilot 5% first, send the rest in batches. Next: get tiers and cap signed in weeks 1-2\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3,L4 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Takers (customers who say yes)",
      "800K x 50% = 400K. 800K x 25% = 200K. 400K x 20% = 80K",
      "400K, 200K, 80K"
     ],
     [
      "2",
      "Profit a year",
      "400K x $50 = $20M. 200K x $60 = $12M. 80K x $60 = $4.8M",
      "$20M, $12M, $4.8M"
     ],
     [
      "3",
      "Expected losses a year",
      "400K x $10 = $4M. 200K x $30 = $6M. 80K x $75 = $6M",
      "$4M, $6M, $6M"
     ],
     [
      "4",
      "Net by tier",
      "$20M - $4M. $12M - $6M. $4.8M - $6M",
      "$16M, $6M, -$1.2M"
     ],
     [
      "5",
      "Cap check (low + medium)",
      "400K x $2K = $800M. 200K x $1K = $200M. Add",
      "$1B, fits the cap"
     ],
     [
      "6",
      "Cap check with higher tier",
      "80K x $500 = $40M. $1B + $40M",
      "$1.04B, breaks the cap"
     ],
     [
      "7",
      "Operations cost",
      "Letters: 1.6M x 50% = 800K x $0.50 = $400K. Calls: 1.6M x 5% = 80K x $5 = $400K",
      "$800K"
     ],
     [
      "8",
      "Net plan (low + medium)",
      "$16M + $6M - $0.8M",
      "$21.2M a year"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "What if take-up is 60% in the low tier?",
      "800K x 60% = 480K x $2K = $960M. Add $200M",
      "$1.16B, $160M over the cap. Send in batches and stop at the cap"
     ],
     [
      "Why not offer the higher tier too?",
      "Net is -$1.2M and it uses $40M of the cap",
      "Loses money, so skip it"
     ],
     [
      "What if losses are 50% higher?",
      "$10M x 1.5 = $15M. $32M - $15M",
      "$17M, still positive"
     ],
     [
      "What if risk approval slips 2 weeks?",
      "$22M / 50 = $440K a week. 2 x $440K",
      "$880K of profit delayed"
     ],
     [
      "What if 10% call, not 5%?",
      "1.6M x 10% = 160K calls x $5",
      "$800K, which is $400K more"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask how customers split by risk, what the risk team will cap, and which channels we can use. I will assume 3 tiers of 800K, 800K and 400K, a $1B cap on new lines, and app, letter and call center."
    ],
    [
     "Lay out",
     "The 10 weeks run in 4 steps: risk approval in weeks 1-2, build in weeks 3-5, a 5% pilot in weeks 6-7, and the full send in weeks 8-10. What could delay us is risk sign-off, letter legal review, an app release freeze, or call center training."
    ],
    [
     "Evaluate",
     "Low risk makes $16M net and medium makes $6M. The higher tier loses $1.2M, so I would drop it. Operations cost about $0.8M, so the plan nets about $21.2M a year."
    ],
    [
     "Assess",
     "All 3 tiers go over the $1B cap and lose money in the top tier. Low risk only is safe but leaves $6M on the table. Low plus medium fits the cap exactly."
    ],
    [
     "Recommend",
     "I recommend offering the low and medium tiers only, 1.6M customers, inside the $1B cap. The main risk is that take-up or losses beat our guess, so we pilot on 5% (80K customers), measure take-up and early late payments, and only then send the rest. Next step: get the tiers and cap signed by the risk team in weeks 1-2."
    ]
   ],
   "pitfalls": [
    "Looking at profit only, and forgetting expected losses",
    "Ignoring the risk team cap until after the offers are sent",
    "Sending every offer in one day, so a surprise in take-up cannot be stopped"
   ],
   "group": "Banking, cards, fraud and data"
  },
  {
   "id": "call-center-ai",
   "title": "Launch an AI assistant for customer calls",
   "prompt": "We get 10M customer calls a year and want an AI assistant to handle 25% of them without an agent. How would you run the pilot and decide whether to launch?",
   "clarify": [
    "Which calls can the AI take, and how many does it solve? [Simple calls like balance and card activation: 50% of calls (5M). The AI solves half of them]",
    "What does a call cost, and what do build and run cost? [Agent call $5, AI call $1. Build $3M, run $1.5M a year]",
    "How do we measure quality today? [Resolution means no repeat call in 7 days. Customer score is 80 out of 100 for agent calls]"
   ],
   "chart": "flowchart TD\nC[\"C: Clarify<br/>AI assistant for 10M calls a year<br/>Target: 25% handled with no agent\"]\nC --> C1[\"Target<br/>25% x 10M = 2.5M calls<br/>with no agent\"]\nC --> C2[\"Scope<br/>Simple calls: 50% = 5M<br/>AI solves half = 2.5M\"]\nC --> C3[\"Cost per call<br/>Agent $5, AI $1<br/>Saves $4 per solved call\"]\nC1 --> L\nC2 --> L\nC3 --> L\nL[\"L: Lay out the launch<br/>Pilot first, then decide, then scale\"]\nL --> L1[\"Pilot 5%<br/>10K calls a week<br/>4 weeks = 40K calls\"]\nL --> L2[\"Check 3 guardrails<br/>Resolution, escalation,<br/>customer score\"]\nL --> L3[\"Go / no-go<br/>Go if resolution 40%+, escalation<br/>60% or less, score 77+\"]\nL1 --> E\nL2 --> E\nL3 --> E\nE[\"E: Evaluate<br/>Saving $10M - $2.5M - run $1.5M = <b>$6M a year</b><br/>Build $3M pays back in <b>6 months</b>\"]\nE --> E1[\"Solved by the AI<br/>2.5M x $4<br/>= <b>$10M</b>\"]\nE --> E2[\"Handed to an agent<br/>2.5M x $1 wasted<br/>= <b>$2.5M</b>\"]\nE --> E3[\"Payback<br/>$3M / $6M a year<br/>= <b>0.5 year</b>\"]\nE1 --> A\nE2 --> A\nE3 --> A\nA[\"A: Assess the options\"]\nA --> A1[\"Launch to all calls now<br/>If only 20% are solved:<br/>$0 net - $1.5M run = -$1.5M a year\"]\nA --> A2[\"Pilot 5%, then go / no-go<br/>Delay 4 weeks x $120K = $480K<br/>Small cost to learn\"]\nA --> A3[\"One call type only<br/>1M x $4 - 1M x $1 = $3M<br/>Safe, under half the prize\"]\nA1 --> R\nA2 --> R\nA3 --> R\nR[\"R: Recommend<br/>Run the 5% pilot, then full launch only if all 3 guardrails pass<br/>Stop if resolution is under 40%. Next: set up the pilot and a daily guardrail dashboard\"]\nclassDef c1 fill:#E3F2FD,stroke:#1E88E5,stroke-width:2px,color:#000;\nclassDef c2 fill:#E8F5E9,stroke:#43A047,stroke-width:2px,color:#000;\nclassDef c3 fill:#FFF3E0,stroke:#FB8C00,stroke-width:2px,color:#000;\nclassDef c4 fill:#EDE7F6,stroke:#5E35B1,stroke-width:2px,color:#000;\nclassDef c5 fill:#F1F8E9,stroke:#7CB342,stroke-width:2px,color:#000;\nclassDef c6 fill:#FFFDE7,stroke:#F9A825,stroke-width:2px,color:#000;\nclassDef c7 fill:#FFEBEE,stroke:#E53935,stroke-width:2px,color:#000;\nclass C,C1,C2,C3 c1;\nclass L,L1,L2,L3 c2;\nclass E c3;\nclass E1,E2,E3 c6;\nclass A,A1,A2,A3 c4;\nclass R c5;",
   "steps": {
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
      "Target calls",
      "10M calls x 25%",
      "2.5M calls"
     ],
     [
      "2",
      "Pilot size",
      "10M / 50 weeks = 200K a week. 5% = 10K a week. 4 weeks",
      "40K calls"
     ],
     [
      "3",
      "Calls the AI can solve",
      "50% of 10M = 5M simple calls. Half solved: 5M x 50%",
      "2.5M calls (25%)"
     ],
     [
      "4",
      "Saving on solved calls",
      "$5 - $1 = $4 per call. 2.5M x $4",
      "$10M"
     ],
     [
      "5",
      "Cost of handed-off calls",
      "2.5M calls x $1 for the AI call that did not help",
      "$2.5M"
     ],
     [
      "6",
      "Net saving a year",
      "$10M - $2.5M - $1.5M run cost",
      "$6M"
     ],
     [
      "7",
      "Payback on the build",
      "$3M build / $6M a year",
      "0.5 year, or 6 months"
     ],
     [
      "8",
      "Pilot results to expect",
      "40K x 50% = 20K AI calls. 50% solved = 10K",
      "10K solved, 10K handed off"
     ]
    ]
   },
   "pushback": {
    "title": "Pushback math",
    "headers": [
     "Pushback",
     "Calculation",
     "Result"
    ],
    "rows": [
     [
      "Is a 5% pilot big enough?",
      "20K AI calls. Margin is about 1 / square root of 20K = 1 / 141",
      "About 0.7 points, fine to read 50% vs the 40% line"
     ],
     [
      "What if only 40% are solved?",
      "5M x 40% = 2M x $4 = $8M. 3M x $1 = $3M. $8M - $3M - $1.5M",
      "$3.5M a year, still repays the $3M build in year one"
     ],
     [
      "What if only 20% are solved?",
      "1M x $4 = $4M. 4M x $1 = $4M. $4M - $4M - $1.5M",
      "-$1.5M a year, so no-go"
     ],
     [
      "What if the AI costs $2 a call?",
      "Solved: 2.5M x $3 = $7.5M. Handed off: 2.5M x $2 = $5M. $7.5M - $5M - $1.5M",
      "$1M a year, payback 3 years"
     ],
     [
      "Is a 4-week pilot worth the wait?",
      "$6M / 50 = $120K a week. 4 x $120K. Compare $3M + $1.5M at risk",
      "$480K to protect $4.5M"
     ]
    ]
   },
   "say": [
    [
     "Clarify",
     "I would ask which calls the AI can take, what each call costs, and how we measure quality. I will assume simple calls are 5M a year, the AI solves half, an agent call costs $5, an AI call $1, and customer score is 80 today."
    ],
    [
     "Lay out",
     "I would pilot with 5% of calls, about 10K a week, for 4 weeks. Then I check three guardrails, resolution rate, escalation rate and customer score, and decide go or no-go."
    ],
    [
     "Evaluate",
     "If the AI solves 2.5M calls at $4 saved each, that is $10M. Handed-off calls waste $1 each, so $2.5M, and running costs $1.5M, so net is $6M a year. The $3M build pays back in 6 months."
    ],
    [
     "Assess",
     "Launching to all calls now risks a $1.5M a year loss if only 20% are solved. One call type is safe but gives $3M, under half the prize. The pilot costs about $480K of delay and gives us the real numbers."
    ],
    [
     "Recommend",
     "I recommend a 5% pilot first, and a full launch only if resolution is at least 40%, escalation is at most 60% and customer score is at least 77 out of 100. The main risk is poor quality hurting customers, so we pilot, measure against agent calls, and only then scale. Next step: set up the pilot and the daily guardrail dashboard."
    ]
   ],
   "pitfalls": [
    "Counting only calls the AI solved, and ignoring calls it handed off after wasting time",
    "Watching cost savings and ignoring the customer score",
    "Scaling because the pilot looks cheap, without clear go / no-go numbers"
   ],
   "group": "Banking, cards, fraud and data"
  }
 ],
 "star": {
  "title": "STAR: how to answer",
  "headers": [
   "Part",
   "What to say",
   "Example"
  ],
  "rows": [
   [
    "Situation",
    "One sentence of context",
    "Our card feature was two weeks from launch and the compliance review was behind"
   ],
   [
    "Task",
    "Your job and the goal",
    "I owned the launch date and had to keep it within one week"
   ],
   [
    "Action",
    "What you did, in order",
    "I priced the delay at $50K a week, met the compliance lead, and started the review on finished parts"
   ],
   [
    "Result",
    "The outcome with a number",
    "We launched one week late instead of two, saving about $50K, with no findings"
   ]
  ]
 },
 "bank": {
  "title": "STAR story bank: 8 themes to prepare",
  "headers": [
   "Theme",
   "The question",
   "What your story must show",
   "One-line example result"
  ],
  "rows": [
   [
    "Late project",
    "Tell me about a project that was behind",
    "You found the cause and priced the options",
    "Cut scope by 10 tables, finished 3 weeks sooner than extending"
   ],
   [
    "Conflict between teams",
    "Two teams disagreed. What did you do?",
    "You listened to both, found the shared goal and got a decision",
    "Agreed a draft contract in 2 days, unblocked 6 engineers"
   ],
   [
    "Influence without authority",
    "How did you get people to act who do not report to you?",
    "You made the benefit clear for them and used data",
    "Got a security review moved up by showing a $50K a week delay"
   ],
   [
    "Ambiguity",
    "Tell me about a project with unclear goals",
    "You asked questions, wrote assumptions and got sign-off",
    "Wrote a one-page goal doc approved by the sponsor"
   ],
   [
    "Failure",
    "Tell me about a time you missed a date",
    "You owned it, fixed the root cause and changed the process",
    "Added a weekly risk review, no misses in the next 3 launches"
   ],
   [
    "Prioritization",
    "How do you choose between competing requests?",
    "You used value, effort and deadline, and explained the trade-off",
    "Funded two of three projects, with $4M of fine risk avoided"
   ],
   [
    "Risk",
    "Tell me about a risk you caught early",
    "You spotted it, sized it and acted before it hit",
    "Found a vendor delay in week 3 and added a backup"
   ],
   [
    "Stakeholders",
    "How do you keep leaders informed?",
    "Short, regular, honest status with clear asks",
    "Weekly one-page status with green, yellow, red"
   ]
  ]
 },
 "rag": {
  "title": "Weekly status: green, yellow, red",
  "headers": [
   "Color",
   "Meaning",
   "What you do"
  ],
  "rows": [
   [
    "Green",
    "On track for date, budget and scope",
    "Report in one line"
   ],
   [
    "Yellow",
    "A risk could miss the date by up to 1 week",
    "Say what you are doing and when you will know"
   ],
   [
    "Red",
    "The date or budget will be missed",
    "Escalate now with 2 options and a recommendation"
   ]
  ]
 },
 "raid": {
  "title": "Risk log template (RAID)",
  "headers": [
   "Item",
   "Description",
   "Chance",
   "Impact ($ or weeks)",
   "Owner",
   "Next step and date"
  ],
  "rows": [
   [
    "Risk",
    "Compliance review takes 4 weeks, not 2",
    "Medium",
    "2 weeks, $100K",
    "Compliance lead",
    "Start review early, week 8"
   ],
   [
    "Assumption",
    "The pilot group is ready in week 11",
    "High",
    "1 week",
    "Marketing lead",
    "Confirm in week 6"
   ],
   [
    "Issue",
    "API contract not agreed",
    "Now",
    "3 days blocked, $21K",
    "Platform lead",
    "Joint session Tuesday"
   ],
   [
    "Dependency",
    "Identity vendor delivers in week 5",
    "Medium",
    "2 weeks",
    "Program manager",
    "Weekly vendor call"
   ]
  ]
 },
 "checklists": {
  "title": "Checklists",
  "headers": [
   "Moment",
   "Checklist"
  ],
  "rows": [
   [
    "Kickoff",
    "Goal and success measure written; sponsor named; scope in and out; milestones and owners; risks listed; weekly meeting set"
   ],
   [
    "Weekly status",
    "Status color; progress vs plan; top 3 risks with owners; decisions needed; next week's plan"
   ],
   [
    "Before launch",
    "Go/no-go criteria met; rollback plan tested; support trained; communication ready; decision time and owner"
   ],
   [
    "After launch",
    "Measure results at 1 and 4 weeks; list lessons; close open risks; thank the team"
   ]
  ]
 },
 "phrases": [
  "\"Let me confirm the goal and the date before I plan.\"",
  "\"Here is the critical path. Anything on it moves the launch.\"",
  "\"A week of delay costs about $X, so I would pay up to $X to save it.\"",
  "\"I recommend X. The main risk is Y, and I would check it by date Z.\"",
  "\"I would escalate if A happens by date B.\""
 ]
};
