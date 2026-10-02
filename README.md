# Case Interview Prep

Interactive static site for case interview practice. No build step, no dependencies.

## What's inside
- **Case Studies** (one main tab with three sub-tabs, links like `#/casestudies/frameworks`):
  - **Templates:** the CLEAR method (Clarify, Lay out, Evaluate, Assess, Recommend) with a memory chart, a structure picker chart, a metrics chart (break-even, ROI, payback, LTV:CAC, margin, CAGR), the two case-flow charts (generic flow and a worked profit-decline example), a worksheet that saves in the browser, a fill-in answer script, a filled example, a phrase bank and a final checklist. Source in `js/data-template.js`.
  - **Frameworks (11):** profitability, market sizing, market entry, growth, pricing, M&A, operations/cost, retention, metric diagnosis, unit economics, product deep-dive (with a product-type cheat sheet and a worked CLEAR example with three charts: CLEAR flow, Evaluate naive vs. holdout, and Impact math). Each has the tree, steps, pitfalls and a "hide the tree" self-quiz.
  - **Cases (9)** tagged by employer type (Banking & Fintech, Consulting, Big Tech): prompt, clarifying Q&A, data room, write-your-structure box, model answer, follow-ups, self-rating.
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
