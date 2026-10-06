// Practice drills: break-even, algebra and quick-math problems with worked answers.
window.DATA = window.DATA || {};

DATA.drillTypes = [
  {
    "id": "breakeven",
    "name": "Break-even"
  },
  {
    "id": "algebra",
    "name": "Solve for the unknown"
  },
  {
    "id": "payback",
    "name": "Payback, ROI and LTV"
  },
  {
    "id": "funnel",
    "name": "Funnels and conversion"
  },
  {
    "id": "growth",
    "name": "Percent and growth"
  },
  {
    "id": "unit",
    "name": "Unit economics"
  },
  {
    "id": "case",
    "name": "Case algebra (from the cases)"
  }
];

DATA.drills = [
  {
    "id": "be-cards",
    "type": "breakeven",
    "level": "Easy",
    "title": "Cards to cover fixed costs",
    "problem": "A new credit card costs $4M a year in fixed costs (team and technology). Each card earns $120 a year after its own variable costs. How many cards do we need to break even?",
    "hint": "Break-even is where profit is zero. Fixed cost divided by profit per card.",
    "steps": [
      "Profit = (cards x $120) - $4M.",
      "Set profit to zero: cards x $120 = $4M.",
      "Cards = $4,000,000 / $120 = 33,333."
    ],
    "answer": "About 33,300 cards.",
    "tip": "Say the formula first: break-even units = fixed cost / profit per unit. Then do the division out loud."
  },
  {
    "id": "be-price",
    "type": "breakeven",
    "level": "Easy",
    "title": "Minimum revenue per customer",
    "problem": "A loan product expects 20,000 customers. Variable cost is $200 per customer and fixed cost is $3M. What is the minimum revenue per customer needed to break even?",
    "hint": "Spread the fixed cost across the customers, then add the variable cost.",
    "steps": [
      "Fixed cost per customer = $3,000,000 / 20,000 = $150.",
      "Add variable cost: $150 + $200 = $350."
    ],
    "answer": "$350 of revenue per customer.",
    "tip": "Compare the answer with what customers actually pay. If expected revenue is below $350, the plan does not work."
  },
  {
    "id": "be-margin",
    "type": "breakeven",
    "level": "Medium",
    "title": "Contribution margin and break-even",
    "problem": "A fee-based account charges $60 a year. Its variable cost is $42 per customer and fixed cost is $1.8M a year. What is the contribution margin per customer, as a percent, and how many customers do we need to break even?",
    "hint": "Contribution = price minus variable cost. Margin % = contribution / price.",
    "steps": [
      "Contribution = $60 - $42 = $18 per customer.",
      "Margin % = $18 / $60 = 30%.",
      "Break-even customers = $1,800,000 / $18 = 100,000."
    ],
    "answer": "$18 per customer, 30%; 100,000 customers to break even.",
    "tip": "Contribution margin is the money each extra customer adds towards fixed costs. Use that phrase."
  },
  {
    "id": "be-payback",
    "type": "breakeven",
    "level": "Medium",
    "title": "Does it meet the payback bar?",
    "problem": "A savings product needs $6M to launch and earns $2.4M profit a year once running. Leadership wants payback inside 2 years. Does it qualify? If not, how much more yearly profit is needed?",
    "hint": "Payback = up-front cost / yearly profit. Work out the yearly profit needed for 2 years.",
    "steps": [
      "Payback = $6M / $2.4M = 2.5 years = 30 months. That misses the 2-year bar.",
      "Needed yearly profit = $6M / 2 = $3M.",
      "Gap = $3M - $2.4M = $0.6M, which is 25% more profit ($3M / $2.4M = 1.25)."
    ],
    "answer": "No: payback is 30 months. It needs $3M a year, 25% more.",
    "tip": "Finish by saying what you would change: raise profit by 25%, cut the launch cost to $4.8M, or relax the bar."
  },
  {
    "id": "al-target",
    "type": "algebra",
    "level": "Easy",
    "title": "Customers needed for a profit target",
    "problem": "Yearly profit = N x $175 - $2.5M, where N is the number of customers. How many customers give a $5M yearly profit?",
    "hint": "Write the equation with profit = $5M, then isolate N.",
    "steps": [
      "$5M = N x $175 - $2.5M.",
      "Add $2.5M to both sides: $7.5M = N x $175.",
      "N = $7,500,000 / $175 = 42,857."
    ],
    "answer": "About 42,900 customers.",
    "tip": "Isolate the unknown one step at a time and say each step aloud."
  },
  {
    "id": "al-graduation",
    "type": "algebra",
    "level": "Medium",
    "title": "Graduation rate needed for payback",
    "problem": "50,000 customers each earn $100 a year directly. A share g of them move up to a bigger product that earns an extra $300 a year each. Fixed cost is $2.5M a year and the up-front cost is $10M. What share g is needed to pay back within 24 months?",
    "hint": "Find the yearly profit needed first: $10M over 2 years.",
    "steps": [
      "Needed yearly profit = $10M / 2 = $5M.",
      "Profit = 50,000 x ($100 + $300g) - $2.5M.",
      "Set it to $5M: 50,000 x ($100 + $300g) = $7.5M.",
      "Divide by 50,000: $100 + $300g = $150.",
      "So $300g = $50 and g = 1/6 = 16.7%."
    ],
    "answer": "At least 16.7% (1 in 6 customers) must move up.",
    "tip": "Then say if that is realistic: the example assumes 1 in 4, so there is room to spare."
  },
  {
    "id": "al-loss",
    "type": "algebra",
    "level": "Medium",
    "title": "Highest loss rate we can afford",
    "problem": "A loan account has a $5,000 balance, 12% revenue and $60 servicing cost. We want at least $250 profit per account. What is the maximum loss rate?",
    "hint": "Write profit per account, then solve for the loss.",
    "steps": [
      "Revenue = $5,000 x 12% = $600.",
      "Profit = $600 - $60 - loss = $250.",
      "Loss = $600 - $60 - $250 = $290.",
      "Loss rate = $290 / $5,000 = 5.8%."
    ],
    "answer": "A maximum loss rate of 5.8%.",
    "tip": "Compare with the expected loss rate. If it is 4%, there is a cushion of 1.8 points."
  },
  {
    "id": "al-two",
    "type": "algebra",
    "level": "Medium",
    "title": "Which option is better, and when?",
    "problem": "Option A has $2M fixed cost and earns $80 profit per customer. Option B has $0.5M fixed cost and earns $50 per customer. At how many customers do the two options earn the same profit, and which is better above that?",
    "hint": "Write the profit for each option and set them equal.",
    "steps": [
      "Profit A = $80N - $2M. Profit B = $50N - $0.5M.",
      "Set equal: $80N - $2M = $50N - $0.5M.",
      "$30N = $1.5M, so N = 50,000.",
      "Above 50,000 customers, A earns more per extra customer, so A is better. Below, B is better."
    ],
    "answer": "They are equal at 50,000 customers. A is better above that, B below.",
    "tip": "Tie it to the case: if you expect 80,000 customers, choose A. If you are unsure, B is the safer start."
  },
  {
    "id": "al-price",
    "type": "algebra",
    "level": "Medium",
    "title": "Volume needed after a price cut",
    "problem": "A product sells for $100 and has a $60 variable cost. If we cut the price by 10%, how much more volume do we need to earn the same total profit?",
    "hint": "Compare contribution per unit before and after.",
    "steps": [
      "Before: $100 - $60 = $40 per unit.",
      "After: $90 - $60 = $30 per unit.",
      "To keep profit equal, units must rise by $40 / $30 = 1.333, so 33.3% more volume."
    ],
    "answer": "33% more volume.",
    "tip": "A 10% price cut needs 33% more volume because the margin is only 40%. Say that insight."
  },
  {
    "id": "al-fixed",
    "type": "algebra",
    "level": "Easy",
    "title": "Accounts needed at a thin margin",
    "problem": "A savings account earns $8,000 balance x 1.0% = $80 profit per account. Running cost is $2M a year. How many accounts do we need to break even?",
    "hint": "Fixed cost divided by profit per account.",
    "steps": [
      "Profit per account = $8,000 x 1.0% = $80.",
      "Accounts = $2,000,000 / $80 = 25,000."
    ],
    "answer": "25,000 accounts.",
    "tip": "Then ask: is 25,000 accounts realistic in year 1? Compare with the plan."
  },
  {
    "id": "pb-roi",
    "type": "payback",
    "level": "Easy",
    "title": "Payback and ROI",
    "problem": "We invest $12M and earn $5M profit a year for 3 years. What is the payback period and the 3-year ROI?",
    "hint": "Payback = investment / yearly profit. ROI = (total return - investment) / investment.",
    "steps": [
      "Payback = $12M / $5M = 2.4 years, about 29 months.",
      "Total return = 3 x $5M = $15M.",
      "ROI = ($15M - $12M) / $12M = 25%."
    ],
    "answer": "Payback 2.4 years (29 months); 3-year ROI 25%.",
    "tip": "Say both numbers and what they mean: money back in under 3 years, and a 25% gain over 3 years."
  },
  {
    "id": "pb-compare",
    "type": "payback",
    "level": "Medium",
    "title": "Two projects, same ratio",
    "problem": "Project X costs $10M and earns $4M a year for 4 years. Project Y costs $6M and earns $2.4M a year for 4 years. Compare payback and ROI. Which would you pick?",
    "hint": "Work out both numbers for each project before choosing.",
    "steps": [
      "X: payback = $10M / $4M = 2.5 years. Total return = $16M. ROI = $6M / $10M = 60%.",
      "Y: payback = $6M / $2.4M = 2.5 years. Total return = $9.6M. ROI = $3.6M / $6M = 60%.",
      "They are identical in ratio. X gains $6M, Y gains $3.6M."
    ],
    "answer": "Same payback (2.5 years) and ROI (60%). Choose by budget and risk: X gives more total gain, Y needs less money.",
    "tip": "Interviewers like a tie: the answer is the next question, such as budget limits or risk."
  },
  {
    "id": "pb-ltv",
    "type": "payback",
    "level": "Medium",
    "title": "Lifetime value and acquisition cost",
    "problem": "Winning a customer costs $150. A customer earns $80 profit a year and 20% of customers leave each year. Find the customer lifetime value, LTV to cost ratio, and the payback in months.",
    "hint": "Lifetime in years is 1 / churn rate.",
    "steps": [
      "Lifetime = 1 / 20% = 5 years.",
      "LTV = $80 x 5 = $400.",
      "LTV : cost = $400 / $150 = 2.7x.",
      "Payback = $150 / $80 = 1.9 years, about 22.5 months."
    ],
    "answer": "LTV $400, ratio 2.7x, payback about 22 months.",
    "tip": "A common bar is 3x or better. Say 2.7x is slightly below, then name ways to raise it (cut cost, cut churn)."
  },
  {
    "id": "fn-activate",
    "type": "funnel",
    "level": "Easy",
    "title": "Activated customers",
    "problem": "100,000 people apply for a card. 60% are approved and 70% of those activate. How many activate? What if activation rises to 80%?",
    "hint": "Multiply along the funnel.",
    "steps": [
      "Approved = 100,000 x 60% = 60,000.",
      "Activated = 60,000 x 70% = 42,000.",
      "At 80%: 60,000 x 80% = 48,000, which is 6,000 more (+14%)."
    ],
    "answer": "42,000 activate; 48,000 at 80%, an extra 6,000.",
    "tip": "State the percent change as well: a 10-point lift on 70% is +14%."
  },
  {
    "id": "fn-stage",
    "type": "funnel",
    "level": "Medium",
    "title": "Which stage should we fix?",
    "problem": "2M people are aware of a product. 20% start an application and 40% of those finish, giving 160,000 customers. The plan is 200,000. We can lift only one stage by 5 percentage points. Which one hits the plan?",
    "hint": "Try each stage with the 5-point lift and compare with 200,000.",
    "steps": [
      "Start rate 20% to 25%: 2M x 25% x 40% = 200,000. Hits the plan.",
      "Finish rate 40% to 45%: 2M x 20% x 45% = 180,000. Falls short.",
      "Same 5 points, but 5 on 20% is +25% while 5 on 40% is +12.5%."
    ],
    "answer": "Lift the start rate to 25%: it gives exactly 200,000.",
    "tip": "Stages with a lower rate give a bigger relative gain per point. Also say which is cheaper to change."
  },
  {
    "id": "fn-cannibal",
    "type": "funnel",
    "level": "Medium",
    "title": "Net gain after cannibalization",
    "problem": "A new product earns $150 per customer and has 200,000 customers. 40% of them switched from an existing product that earned $300, and all of them would have stayed. What is the net profit gain, and what switcher share makes it break even?",
    "hint": "Count the truly new customers separately from the switchers.",
    "steps": [
      "Truly new = 200,000 x 60% = 120,000 x $150 = +$18M.",
      "Switchers = 80,000. Each now earns $150 instead of $300, so loses $150: 80,000 x -$150 = -$12M.",
      "Net = $18M - $12M = +$6M.",
      "Break-even: (1 - c) x $150 = c x $150, so c = 50%."
    ],
    "answer": "Net gain $6M. It breaks even if half the customers are switchers.",
    "tip": "Say that it is still a gain, then say how you would watch the switcher share."
  },
  {
    "id": "gr-compound",
    "type": "growth",
    "level": "Easy",
    "title": "Compound growth",
    "problem": "Revenue is $200M and grows 8% a year. What is it in 3 years?",
    "hint": "Multiply by 1.08 three times. A quick check: 3 years at 8% is about +26%.",
    "steps": [
      "Year 1: $200M x 1.08 = $216M.",
      "Year 2: $216M x 1.08 = $233.3M.",
      "Year 3: $233.3M x 1.08 = $252M."
    ],
    "answer": "About $252M (+26%).",
    "tip": "Round as you go and say you are rounding. A calculator is allowed, but show the idea."
  },
  {
    "id": "gr-decline",
    "type": "growth",
    "level": "Easy",
    "title": "Percent decline and margin",
    "problem": "Profit fell from $40M to $28M on $400M of revenue. What is the percent decline in profit, and what is the profit margin now?",
    "hint": "Percent change = (new - old) / old.",
    "steps": [
      "Change = $28M - $40M = -$12M.",
      "Percent = -$12M / $40M = -30%.",
      "Margin = $28M / $400M = 7%."
    ],
    "answer": "Profit down 30%; margin is 7%.",
    "tip": "If revenue was flat, margin fell from 10% to 7%. Say it is a margin problem, not a revenue problem."
  },
  {
    "id": "gr-retention",
    "type": "growth",
    "level": "Medium",
    "title": "Value of a small retention gain",
    "problem": "A feature lowers yearly attrition from 12.0% to 11.7% on 4M customers. A retained customer is worth $400. What is the yearly value?",
    "hint": "Convert the drop in attrition into customers kept.",
    "steps": [
      "Drop = 0.3 percentage points.",
      "Customers kept = 4,000,000 x 0.3% = 12,000.",
      "Value = 12,000 x $400 = $4.8M."
    ],
    "answer": "About $4.8M a year.",
    "tip": "Tiny percentages on large bases are big numbers. Always convert to customers or dollars."
  },
  {
    "id": "ue-card",
    "type": "unit",
    "level": "Medium",
    "title": "Profit per credit card",
    "problem": "A card has $18,000 yearly spend, 2% interchange, a $150 annual fee and $120 net interest. Costs: rewards 1.2% of spend, $60 benefits, $90 losses, $40 servicing. What is the profit per card?",
    "hint": "Add the revenue, add the costs, subtract.",
    "steps": [
      "Interchange = $18,000 x 2% = $360. Revenue = $360 + $150 + $120 = $630.",
      "Rewards = $18,000 x 1.2% = $216. Costs = $216 + $60 + $90 + $40 = $406.",
      "Profit = $630 - $406 = $224."
    ],
    "answer": "$224 per card per year.",
    "tip": "Say which line is biggest (rewards, then interchange) and which you would test first."
  },
  {
    "id": "ue-loan",
    "type": "unit",
    "level": "Medium",
    "title": "Loan profit and break-even loss rate",
    "problem": "A loan customer has a $10,000 balance, 15% interest rate and 4% funding cost. Losses are 5% and servicing is $120. What is the profit per customer, and what loss rate gives zero profit?",
    "hint": "Spread income first: interest minus funding cost.",
    "steps": [
      "Interest = $10,000 x 15% = $1,500. Funding = $400. Spread income = $1,100.",
      "Profit = $1,100 - $500 losses - $120 servicing = $480.",
      "Zero profit: $1,100 - $120 = $980 of room for losses, so loss rate = $980 / $10,000 = 9.8%."
    ],
    "answer": "$480 profit per customer; losses can rise to 9.8% before profit hits zero.",
    "tip": "With fixed costs the real break-even loss rate is lower. Mention that."
  },
  {
    "id": "ue-mix",
    "type": "unit",
    "level": "Hard",
    "title": "Instant approval: more volume, more losses",
    "problem": "Today 55,000 accounts earn $340 each. An instant feature lifts accounts to 70,000 but raises the loss from $200 to $275 per account (profit $265 each). Is it better? What loss would make it equal to today?",
    "hint": "Compare the two totals, then solve for the loss that gives the same total.",
    "steps": [
      "Today = 55,000 x $340 = $18.7M.",
      "Instant = 70,000 x $265 = $18.55M. Slightly lower.",
      "Equal total: $18.7M / 70,000 = $267 per account.",
      "Profit = $540 - loss, so loss = $540 - $267 = $273, about a 5.5% loss rate on $5,000."
    ],
    "answer": "No: $18.55M vs $18.7M. It matches today only if losses stay below about $273 per account (5.5%).",
    "tip": "Conclude: speed alone does not help. Use tiers so low-risk applicants get instant approval."
  },
  {
    "id": "h-price-vol",
    "type": "breakeven",
    "level": "Hard",
    "title": "Price cut: volume needed to keep profit",
    "problem": "A product sells 100,000 units at $50 with a variable cost of $30. We cut the price 10%. How much must volume rise to keep total profit the same?",
    "hint": "Find profit today, then the new profit per unit, then divide.",
    "steps": [
      "Profit today = 100,000 x ($50 - $30) = $2,000,000.",
      "New price = $45, so profit per unit = $45 - $30 = $15.",
      "Units needed = $2,000,000 / $15 = 133,333.",
      "Rise = 33,333 / 100,000 = 33%."
    ],
    "answer": "Volume must rise by about 33% (to about 133,000 units).",
    "tip": "A 10% price cut needs a 33% volume rise, because the cut comes straight out of a thin margin. Say this out loud."
  },
  {
    "id": "h-ramp-payback",
    "type": "payback",
    "level": "Hard",
    "title": "Payback with a ramp",
    "problem": "A project costs $12M up front. Profit is $2M in year 1, $5M in year 2, and $8M a year from year 3. When does it pay back?",
    "hint": "Add up the profit year by year until you pass $12M.",
    "steps": [
      "After year 1: $2M. After year 2: $2M + $5M = $7M.",
      "Still need $12M - $7M = $5M.",
      "Year 3 earns $8M, so we need 5 / 8 = 0.625 of the year.",
      "Payback = 2 years + 0.625 year = 2.6 years, about 31 months."
    ],
    "answer": "About 2.6 years (31 months).",
    "tip": "Do not divide $12M by the average profit. When profit ramps, add it up year by year."
  },
  {
    "id": "h-mix",
    "type": "algebra",
    "level": "Hard",
    "title": "Blended margin and mix",
    "problem": "Product A earns a 40% margin and has $60M of sales. Product B earns 15%. B grows. What B sales make the blended margin fall to 25%?",
    "hint": "Blended margin = total profit / total sales. Let B be B's sales in $M.",
    "steps": [
      "Equation: (0.40 x 60 + 0.15 x B) / (60 + B) = 0.25.",
      "24 + 0.15B = 0.25 x (60 + B) = 15 + 0.25B.",
      "24 - 15 = 0.25B - 0.15B, so 9 = 0.10B.",
      "B = $90M."
    ],
    "answer": "B must reach $90M. (At B = $40M the blended margin is 30%.)",
    "tip": "Mix shift hurts margin even when each product is steady. Check: (24 + 13.5) / 150 = 25%."
  },
  {
    "id": "h-funnel-points",
    "type": "funnel",
    "level": "Hard",
    "title": "Which stage gets +5 points?",
    "problem": "1M visitors. 8% sign up, 50% of those are approved, 60% of those activate. Which single stage, improved by 5 percentage points, adds the most activated customers?",
    "hint": "Compute the base count, then redo it with each stage +5 points.",
    "steps": [
      "Base = 1,000,000 x 8% x 50% x 60% = 24,000.",
      "Sign-up 13%: 1M x 13% x 50% x 60% = 39,000 (+15,000).",
      "Approval 55%: 80,000 x 55% x 60% = 26,400 (+2,400).",
      "Activation 65%: 40,000 x 65% = 26,000 (+2,000)."
    ],
    "answer": "Sign-up adds the most (+15,000), but 5 points on 8% is a 62% relative lift, which is far harder.",
    "tip": "Compare relative lifts too: +10% at any stage gives the same +2,400. Say which is realistic."
  },
  {
    "id": "h-cagr",
    "type": "growth",
    "level": "Hard",
    "title": "Growth rate needed",
    "problem": "Revenue is $80M. We want $120M in 3 years. What yearly growth rate is needed? What do we reach at 10% a year?",
    "hint": "Growth multiple is 1.5. Take the cube root.",
    "steps": [
      "Needed multiple = 120 / 80 = 1.5.",
      "Yearly growth g: (1 + g)^3 = 1.5, so 1 + g = 1.5^(1/3) = 1.145.",
      "g = 14.5% a year.",
      "At 10%: 80 x 1.1 x 1.1 x 1.1 = $106.5M."
    ],
    "answer": "About 14.5% a year. At 10% we reach only about $106.5M.",
    "tip": "Quick check: 1.145 x 1.145 x 1.145 is about 1.5. Never divide 50% by 3."
  },
  {
    "id": "h-ltv-churn",
    "type": "unit",
    "level": "Hard",
    "title": "Lifetime value and churn",
    "problem": "A customer earns $10 profit a month. Monthly churn is 4%. Acquiring a customer costs $180. What are lifetime, LTV, and payback? What churn gives LTV = 3x the cost?",
    "hint": "Lifetime in months = 1 / churn.",
    "steps": [
      "Lifetime = 1 / 0.04 = 25 months.",
      "LTV = $10 x 25 = $250. LTV / cost = 250 / 180 = 1.4.",
      "Payback = $180 / $10 = 18 months.",
      "For 3x: LTV = $540, so lifetime = 54 months, churn = 1 / 54 = 1.85%."
    ],
    "answer": "LTV $250, ratio 1.4, payback 18 months. Churn must fall to about 1.85%.",
    "tip": "Payback of 18 months with 25-month lifetime is tight. Retention matters more than price here."
  },
  {
    "id": "h-cannibal",
    "type": "funnel",
    "level": "Hard",
    "title": "Cannibalization break-even",
    "problem": "A new card wins 100,000 accounts at $150 profit each. 30% of them are customers who left our old card, which earned $200 each. What is the net gain? What switcher share makes the net gain zero?",
    "hint": "Net gain = new profit - profit lost on switchers. Let s be the switcher share.",
    "steps": [
      "New profit = 100,000 x $150 = $15M.",
      "Lost = 30,000 x $200 = $6M. Net = $9M.",
      "Break-even: 100,000 x $150 = 100,000 x s x $200.",
      "s = 150 / 200 = 75%."
    ],
    "answer": "Net gain is $9M. It reaches zero when 75% of new accounts are switchers.",
    "tip": "Break-even s is the old profit ratio. If the new card earns less than the old one, it can lose money."
  },
  {
    "id": "h-pilot-ev",
    "type": "payback",
    "level": "Hard",
    "title": "Pilot decision with probability",
    "problem": "A pilot costs $1M. It succeeds 40% of the time and then pays $5M. If it fails, it pays nothing. Is it worth it? What chance of success makes it break even?",
    "hint": "Expected value = chance x payoff - cost.",
    "steps": [
      "Expected payoff = 40% x $5M = $2M.",
      "Expected value = $2M - $1M = +$1M.",
      "Break-even chance p: p x $5M = $1M.",
      "p = 20%."
    ],
    "answer": "Yes: expected value is +$1M. It breaks even at a 20% chance of success.",
    "tip": "Also say what you would do if it fails: cap the loss at the $1M pilot. That is a business owner answer."
  },
  {
    "id": "case-park-profit",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Amusement Park Profitability",
    "problem": "From the case \"Amusement Park Profitability\": What share of the ideas must work to reach +20%? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 15.8M x r = 20% x 48.6M = 9.72M",
    "steps": [
      "Equation: 15.8M x r = 20% x 48.6M = 9.72M",
      "Solve: r = 9.72 / 15.8 = 61.5%. At +30% (14.58M) it is 92%"
    ],
    "answer": "r = 9.72 / 15.8 = 61.5%. At +30% (14.58M) it is 92%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Amusement Park Profitability."
  },
  {
    "id": "case-ecom-retention",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: E-commerce Retention Decline",
    "problem": "From the case \"E-commerce Retention Decline\": What retention must new customers reach for 60% overall? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 0.5 x 66 + 0.5 x r = 60",
    "steps": [
      "Equation: 0.5 x 66 + 0.5 x r = 60",
      "Solve: 33 + 0.5 r = 60, so r = 54%"
    ],
    "answer": "33 + 0.5 r = 60, so r = 54%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > E-commerce Retention Decline."
  },
  {
    "id": "case-card-profit",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Credit Card Profit Decline",
    "problem": "From the case \"Credit Card Profit Decline\": How much must APRs rise to win back $8 per account on a $2,500 balance? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 2,500 x x = 8",
    "steps": [
      "Equation: 2,500 x x = 8",
      "Solve: x = 0.0032, so about 0.32 points"
    ],
    "answer": "x = 0.0032, so about 0.32 points",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Credit Card Profit Decline."
  },
  {
    "id": "case-grocery-entry",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Grocery Chain: Launch Delivery?",
    "problem": "From the case \"Grocery Chain: Launch Delivery?\": How many households do we need to pay back $25M in 4 years at $9.50 an order and 24 orders a household a year? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 9.50 x 24 x h x 4 = 25,000,000",
    "steps": [
      "Equation: 9.50 x 24 x h x 4 = 25,000,000",
      "Solve: 912 h = 25M, so h = 27,412. That is 6.9% of the 400K online households"
    ],
    "answer": "912 h = 25M, so h = 27,412. That is 6.9% of the 400K online households",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Grocery Chain: Launch Delivery?."
  },
  {
    "id": "case-dau-drop",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Social App: DAU Down 8%",
    "problem": "From the case \"Social App: DAU Down 8%\": What drop d in Android would explain a total 8% drop, if Android is 55% of DAU and nothing else moved? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 0.55 x d = 8",
    "steps": [
      "Equation: 0.55 x d = 8",
      "Solve: d = 14.5%. We saw 14%, so it fits"
    ],
    "answer": "d = 14.5%. We saw 14%, so it fits",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Social App: DAU Down 8%."
  },
  {
    "id": "case-pump-maker",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Industrial Pump Maker: Profit Down",
    "problem": "From the case \"Industrial Pump Maker: Profit Down\": What Standard margin m gives Standard contribution of $45.6M? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: $240M x m = $45.6M",
    "steps": [
      "Equation: $240M x m = $45.6M",
      "Solve: m = 45.6 / 240 = 19%"
    ],
    "answer": "m = 45.6 / 240 = 19%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Industrial Pump Maker: Profit Down."
  },
  {
    "id": "case-bank-fintech",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Bank Acquires a Payments Fintech",
    "problem": "From the case \"Bank Acquires a Payments Fintech\": What share r of the benefits must arrive to justify $300M? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 280 + 50.4 x r - 8 = 300",
    "steps": [
      "Equation: 280 + 50.4 x r - 8 = 300",
      "Solve: 50.4r = 28, so r = 55.6%"
    ],
    "answer": "50.4r = 28, so r = 55.6%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Bank Acquires a Payments Fintech."
  },
  {
    "id": "case-call-center",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Contact Center Cost Reduction",
    "problem": "From the case \"Contact Center Cost Reduction\": What share d of simple calls must move to the app to hit $19.56M? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 2.8M x d x $8 + $4.8M + $3.0M + $0.65M = $19.56M",
    "steps": [
      "Equation: 2.8M x d x $8 + $4.8M + $3.0M + $0.65M = $19.56M",
      "Solve: 22.4d = 11.11, so d = 49.6%, about 50%"
    ],
    "answer": "22.4d = 11.11, so d = 49.6%, about 50%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Contact Center Cost Reduction."
  },
  {
    "id": "case-digital-feature",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Digital Feature: Scale It or Not?",
    "problem": "From the case \"Digital Feature: Scale It or Not?\": What share s of today's gain per user must new users give to pay back in 18 months? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 600K x $6.64 x s = $2M / 1.5 = $1.33M",
    "steps": [
      "Equation: 600K x $6.64 x s = $2M / 1.5 = $1.33M",
      "Solve: 3.98M x s = 1.33M, so s = 33.5%, about $2.22 per user"
    ],
    "answer": "3.98M x s = 1.33M, so s = 33.5%, about $2.22 per user",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Digital Feature: Scale It or Not?."
  },
  {
    "id": "case-card-activation",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Card Applications Up, Activation Down",
    "problem": "From the case \"Card Applications Up, Activation Down\": What activation rate does the new channel need to break even? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 9,000 x a x $200 = 15,000 x $30 = $450K",
    "steps": [
      "Equation: 9,000 x a x $200 = 15,000 x $30 = $450K",
      "Solve: a = 450,000 / 1,800,000 = 25%"
    ],
    "answer": "a = 450,000 / 1,800,000 = 25%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Card Applications Up, Activation Down."
  },
  {
    "id": "case-market-entry-category",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Market Entry: A New Transaction Category",
    "problem": "From the case \"Market Entry: A New Transaction Category\": How many users do we need to break even on running cost? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: Net per user = $16,800 x (0.8% - 0.1%) = $117.60. 117.60 x u = $8M",
    "steps": [
      "Equation: Net per user = $16,800 x (0.8% - 0.1%) = $117.60. 117.60 x u = $8M",
      "Solve: u = 8,000,000 / 117.60 = about 68K users"
    ],
    "answer": "u = 8,000,000 / 117.60 = about 68K users",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Market Entry: A New Transaction Category."
  },
  {
    "id": "case-savings-adoption",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Savings Account Launch: Adoption Below Plan",
    "problem": "From the case \"Savings Account Launch: Adoption Below Plan\": What awareness do we need to reach the plan of 200K (other rates as now)? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 5M x a x 20% x 40% = 200K",
    "steps": [
      "Equation: 5M x a x 20% x 40% = 200K",
      "Solve: 400,000 a = 200,000, so a = 50%"
    ],
    "answer": "400,000 a = 200,000, so a = 50%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Savings Account Launch: Adoption Below Plan."
  },
  {
    "id": "case-smb-credit-line",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Small Business Line of Credit: Go / No-Go",
    "problem": "From the case \"Small Business Line of Credit: Go / No-Go\": How many customers do we need to cover the $5M fixed cost? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: $480 x n = $5M",
    "steps": [
      "Equation: $480 x n = $5M",
      "Solve: n = 5,000,000 / 480 = about 10.4K customers"
    ],
    "answer": "n = 5,000,000 / 480 = about 10.4K customers",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Small Business Line of Credit: Go / No-Go."
  },
  {
    "id": "case-genz-travel-card",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Gen Z Travel Card: Is There a Real Market?",
    "problem": "From the case \"Gen Z Travel Card: Is There a Real Market?\": How many cards to break even? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: $200 x n - $6M = 0",
    "steps": [
      "Equation: $200 x n - $6M = 0",
      "Solve: n = $6M / $200 = 30K cards (1.7% of the 1.8M people)"
    ],
    "answer": "n = $6M / $200 = 30K cards (1.7% of the 1.8M people)",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Gen Z Travel Card: Is There a Real Market?."
  },
  {
    "id": "case-budget-feature",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Budgeting Feature: Is It Working?",
    "problem": "From the case \"Budgeting Feature: Is It Working?\": How much of the effect must be real to cover the $2M running cost? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: $8.2M x s = $2M",
    "steps": [
      "Equation: $8.2M x s = $2M",
      "Solve: s = 2 / 8.2 = 24%"
    ],
    "answer": "s = 2 / 8.2 = 24%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Budgeting Feature: Is It Working?."
  },
  {
    "id": "case-fraud-alert",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Fraud Alert Feature: Keep, Fix or Kill?",
    "problem": "From the case \"Fraud Alert Feature: Keep, Fix or Kill?\": How much must the fraud saving fall before net is zero? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: S - $1.03M - $2M = 0",
    "steps": [
      "Equation: S - $1.03M - $2M = 0",
      "Solve: S = $3.03M, about half of today's $6M"
    ],
    "answer": "S = $3.03M, about half of today's $6M",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Fraud Alert Feature: Keep, Fix or Kill?."
  },
  {
    "id": "case-auto-refi-gap",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Auto-Refinance: Signups on Target, Revenue Below Plan",
    "problem": "From the case \"Auto-Refinance: Signups on Target, Revenue Below Plan\": What share must fund to hit plan revenue if everything else stays at actual? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 10,000 x c x $700 = $5.7M",
    "steps": [
      "Equation: 10,000 x c x $700 = $5.7M",
      "Solve: c = 5.7M / 7M = 81%"
    ],
    "answer": "c = 5.7M / 7M = 81%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Auto-Refinance: Signups on Target, Revenue Below Plan."
  },
  {
    "id": "case-two-product-priority",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Trade-Off: Small Business Card or High-Yield Savings?",
    "problem": "From the case \"Trade-Off: Small Business Card or High-Yield Savings?\": What chance of plan must the card have to beat savings? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: p x 42 + (1 - p) x 10.5 - 15 = 18.52",
    "steps": [
      "Equation: p x 42 + (1 - p) x 10.5 - 15 = 18.52",
      "Solve: 10.5 + 31.5p = 33.52, so p = 23.02 / 31.5 = 73%"
    ],
    "answer": "10.5 + 31.5p = 33.52, so p = 23.02 / 31.5 = 73%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Trade-Off: Small Business Card or High-Yield Savings?."
  },
  {
    "id": "case-cannibalization",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Cannibalization: Is It a Problem?",
    "problem": "From the case \"Cannibalization: Is It a Problem?\": What share of accounts can be switchers before the net gain is zero? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: Per account: 150 x (1 - s) + 150 x s x (0.25 - 0.75) = 0",
    "steps": [
      "Equation: Per account: 150 x (1 - s) + 150 x s x (0.25 - 0.75) = 0",
      "Solve: 150 - 225s = 0, so s = 150 / 225 = 67%"
    ],
    "answer": "150 - 225s = 0, so s = 150 / 225 = 67%",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Cannibalization: Is It a Problem?."
  },
  {
    "id": "case-instant-preapproval",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Instant Pre-Approval: Speed vs Credit Risk",
    "problem": "From the case \"Instant Pre-Approval: Speed vs Credit Risk\": At what loss rate does instant-for-all only match today? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: 70,000 x (600 - 60 - L) = 18,700,000",
    "steps": [
      "Equation: 70,000 x (600 - 60 - L) = 18,700,000",
      "Solve: 540 - L = 267, so L = $273, which is 5.46% of $5,000"
    ],
    "answer": "540 - L = 267, so L = $273, which is 5.46% of $5,000",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Instant Pre-Approval: Speed vs Credit Risk."
  },
  {
    "id": "case-underbanked-product",
    "type": "case",
    "level": "Medium",
    "title": "Case algebra: Underbanked Segment: Opportunity and Risk",
    "problem": "From the case \"Underbanked Segment: Opportunity and Risk\": How many customers do we need to break even? Open the case and use the numbers in its data room. Then check your answer against the algebra table in the case.",
    "hint": "Set up the equation first: Profit = N x $175 - $2.5M = 0",
    "steps": [
      "Equation: Profit = N x $175 - $2.5M = 0",
      "Solve: N = $2.5M / $175 = 14,286, which is 29% of the 50,000 target"
    ],
    "answer": "N = $2.5M / $175 = 14,286, which is 29% of the 50,000 target",
    "tip": "Say the equation out loud, then solve it in short steps. Case: Case Studies > Cases > Underbanked Segment: Opportunity and Risk."
  }
];
