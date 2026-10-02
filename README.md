# Case Interview Prep

Interactive static site for case interview practice. No build step, no dependencies.

- **Theme:** a Light mode / Dark mode button in the header; it follows your system setting by default and remembers your choice.

- **Intro page:** clicking the Case Prep title opens a landing page with what is inside, the CLEAR method in 30 seconds, a suggested study path and links to every section.

## What's inside
- **Case Studies** (one main tab with three sub-tabs, links like `#/casestudies/frameworks`):
  - **Templates:** the CLEAR method (Clarify, Lay out, Evaluate, Assess, Recommend) with a memory chart, a structure picker chart, a metrics chart (break-even, ROI, payback, LTV:CAC, margin, CAGR), the two case-flow charts (generic flow and a worked profit-decline example), a worksheet that saves in the browser, a fill-in answer script, a filled example, a phrase bank and a final checklist. Source in `js/data-template.js`.
  - **Frameworks (11):** profitability, market sizing, market entry, growth strategy, pricing, M&A, operations/cost, retention, metric diagnosis, unit economics and product deep-dive. Every framework uses the same pattern: a worked CLEAR example with three charts (CLEAR flow, Evaluate, Impact math), a CLEAR mapping table, the math and sensitivity tables, "What you would say out loud" in five CLEAR parts, and a cheat-sheet table.
  - **Cases (9)** tagged by employer type (Banking & Fintech, Consulting, Big Tech): prompt, clarifying Q&A, data room, write-your-structure box, model answer, follow-ups, self-rating. All nine cases show their model answer in the CLEAR pattern: three charts, tables, a spoken answer and a cheat sheet, followed by follow-up questions and pitfalls.
- **Guesstimates:** two tabs, Templates and Examples. *Templates* has five sub-tabs (links like `#/estimation/template/scaling`; the last one opened is remembered): Introduction (SCOPE chart and table, approach picker chart with formula breakdown), Scaling techniques (scaling example, conversion and adjustment tables), Template (saved worksheet, answer script, sample answers, universal template with flowchart, mistakes to avoid, phrases, key tips), Numbers breakdown (handy numbers, segmentation tables, 10-question practice pack) and Cheat sheet (30-second sheet). *Examples* has the 10 drills (top-down, bottom-up and stock-and-flow solutions) the US-population coffee template with a sample answer inside the Chicago coffee solution (chart loads on Reveal), a manholes drill, and car tires, smartphones, pizza, gas stations, card transactions, piano tuners and ride-hail drills (charts, summary table, sample answer and pushback in the solution), a tennis balls drill (three charts, sample answer, pushback math and an alternative balls-per-player version with summary table in its solution). Source in `js/data-guess.js`.
- **Chart controls:** every Mermaid chart has a control bar: Expand (full screen, Esc to close) and Copy source at top right; pan up/down/left/right, reset, zoom in/out (50% to 300%) at bottom right.
- **Progress:** stored in the browser (localStorage) and can be reset.
