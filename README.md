# Case Interview Prep

Interactive static site for case interview practice. No build step, no dependencies.

- **Theme:** a Light mode / Dark mode button in the header; it follows your system setting by default and remembers your choice.

- **Intro page:** clicking the Case Prep title opens a landing page with what is inside, the CLEAR method in 30 seconds, a suggested study path and links to every section.

## What's inside
- **Case Studies** (one main tab with three sub-tabs, links like `#/casestudies/frameworks`):
  - **Templates:** the CLEAR method (Clarify, Lay out, Evaluate, Assess, Recommend) with a memory chart, a structure picker chart, a metrics chart (break-even, ROI, payback, LTV:CAC, margin, CAGR) with a table explaining the assumptions in its example boxes, the two case-flow charts (generic flow and a worked profit-decline example), a worksheet that saves in the browser, a fill-in answer script, a filled example, a phrase bank and a final checklist. Source in `js/data-template.js`.
  - **Frameworks (11):** profitability, market sizing, market entry, growth strategy, pricing, M&A, operations/cost, retention, metric diagnosis, unit economics and product deep-dive. Every framework uses the same pattern: a worked CLEAR example with three charts (CLEAR flow, Evaluate, Impact math), a CLEAR mapping table, the math and sensitivity tables, "What you would say out loud" in five CLEAR parts, and a cheat-sheet table.
  - **Cases (21)** tagged by employer type (Banking & Fintech, Consulting, Big Tech): prompt, clarifying Q&A, data room, write-your-structure box, model answer, follow-ups, self-rating. All nine cases show their model answer in the CLEAR pattern: three charts, tables, a spoken answer and a cheat sheet, followed by follow-up questions and pitfalls.
- **Guesstimates:** two tabs, Templates and Examples. *Templates* has five sub-tabs (links like `#/estimation/template/scaling`; the last one opened is remembered): Introduction (SCOPE chart and table, approach picker chart with formula breakdown), Scaling techniques (scaling example, conversion and adjustment tables), Template (saved worksheet, answer script, sample answers, universal template with flowchart, mistakes to avoid, phrases, key tips), Numbers breakdown (handy numbers, segmentation tables, 10-question practice pack) and Cheat sheet (30-second sheet). *Examples* has the 10 drills (top-down, bottom-up and stock-and-flow solutions) the US-population coffee template with a sample answer inside the Chicago coffee solution (chart loads on Reveal), a manholes drill, and car tires, smartphones, pizza, gas stations, card transactions, piano tuners and ride-hail drills (charts, summary table, sample answer and pushback in the solution), a tennis balls drill (three charts, sample answer, pushback math and an alternative balls-per-player version with summary table in its solution). Source in `js/data-guess.js`.
- **Chart controls:** every Mermaid chart has a control bar: Expand (full screen, Esc to close) and Copy source at top right; pan up/down/left/right, reset, zoom in/out (50% to 300%) at bottom right.
- **Progress:** stored in the browser (localStorage) and can be reset.

## Deploy to GitHub Pages
1. Create a new repo on GitHub and push these files to the `main` branch.
2. Repo **Settings > Pages > Build and deployment**: Source = "Deploy from a branch", Branch = `main`, folder `/ (root)`.
3. Your site will be at `https://<username>.github.io/<repo>/` after a minute or two.

Preview locally: `python3 -m http.server 8000` then open http://localhost:8000.

## Add a case
Edit `js/data-cases.js` and copy an existing object. Required fields: `id`, `title`, `track` (array of `banking`, `consulting`, `tech`), `framework` (an id from `data-frameworks.js`), `difficulty`, `minutes`, `prompt`, `clarify`, `tables`, `structure`, `analysis`, `recommendation`, `followups`, `pitfalls`.

## Latest additions
- Estimation Examples: 15 new guesstimates (bicycles, taxis, gyms, ATM withdrawals, streaming, cards issued, coffee shops, elevators, laptops, flights, data centers, data storage, fraud alerts, support calls, window washers), each in the car-tires format with a worked chart, summary table, spoken answer and pushback chart.
- Case Studies Template tab: the Metric quick reference table now has 17 metrics (added DAU, retention, conversion, ARPU, churn, activation, CAC, default rate, approval rate), plus a new "Metric design" section with three layers and three worked questions.
- Three new cases (including "Savings Account Launch: Adoption Below Plan" , "Small Business Line of Credit: Go / No-Go" "Gen Z Travel Card: Is There a Real Market?" "Budgeting Feature: Is It Working?", "Fraud Alert Feature: Keep, Fix or Kill?", "Auto-Refinance: Signups on Target, Revenue Below Plan", "Trade-Off: Small Business Card or High-Yield Savings?", "Cannibalization: Is It a Problem?", "Instant Pre-Approval: Speed vs Credit Risk" and "Underbanked Segment: Opportunity and Risk"): "Card Applications Up, Activation Down" (Metric Diagnosis) and "Market Entry: A New Transaction Category" (Market Entry). Both use the beginner-friendly CLEAR answer with three charts. All figures are illustrative assumptions.
- Product Deep-Dive framework page rewritten in plain words (CLEAR chart, step table, glossary, math steps, spoken answer, common mistakes).
- Templates page: new "Net profit vs operating profit" table.
- Digital Feature case rewritten in the same beginner-friendly style (plain-words CLEAR chart, step table, glossary, math steps, spoken answer, common mistakes).
- New "Practice drills" tab under Case Studies: 22 break-even, algebra, payback, funnel, growth and unit-economics problems with hints, worked answers and interview tips. Progress is tracked in the browser and shown on the Progress page.
- Underbanked case rewritten to a Capital One style: interviewee-led clarifying questions, a data room you unlock by asking, break-even and algebra questions, a decision-first recommendation with a defensible alternative, and a short checklist.
- Underbanked case now has a second chart, "The numbers in one chart", showing the math step by step (customers, profit per customer, moving up, yearly total, payback, checks).
- Amusement Park case rewritten in the same Capital One style as Underbanked: interviewee-led clarifying questions, a data room, one CLEAR chart plus "The numbers in one chart", algebra and break-even questions (for example the share of ideas needed to reach +20%, and the turned-away visitors needed for a 5-year lease payback), and a decision-first answer with a defensible alternative.
- All 21 cases now use the same format as Underbanked: seven clarifying questions, a short data room, one CLEAR chart, "The numbers in one chart", step-by-step and algebra tables, a decision-first spoken answer, a Capital One style checklist and follow-ups.
- In every CLEAR chart, E (Evaluate) now splits into side-by-side branches the same way L does. Applies to all 21 cases and all 11 frameworks.
- Practice drills grew from 22 to 51: 8 Hard drills added to the existing groups, and a new group "Case algebra (from the cases)" with one drill per case.
- All 11 frameworks now use the same format as the cases: one CLEAR chart (E split into branches), "The numbers in one chart", and step-by-step, numbers, algebra, risk, terms and mistakes tables. Profitability, Market Entry, M&A, Operations, Retention, Metric Diagnosis, Unit Economics and Product Deep-Dive use the same numbers as their matching cases; Sizing, Growth and Pricing have their own examples.
