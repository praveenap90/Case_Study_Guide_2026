# Case Interview Prep

Interactive static site for case interview practice. No build step, no dependencies.

## What's inside
- **Template:** the CLEAR method (Clarify, Lay out, Evaluate, Assess, Recommend) with a memory chart, a structure picker chart, a metrics chart (break-even, ROI, payback, LTV:CAC, margin, CAGR), a worksheet that saves in the browser, a fill-in answer script, a filled example, a phrase bank and a final checklist. Source in `js/data-template.js`.
- **Chart zoom:** every Mermaid chart has zoom out / zoom in / reset buttons (50% to 300%); zoomed charts scroll inside their box.
- **Flow:** two color-coded Mermaid flowcharts (generic case flow and a worked profit-decline example), rendered from `js/data-flow.js`. Needs internet for the Mermaid CDN script; the source shows if it cannot load.
- **Frameworks (11):** profitability, market sizing, market entry, growth, pricing, M&A, operations/cost, retention, metric diagnosis, unit economics, product deep-dive (with a product-type cheat sheet and a worked CLEAR example chart). Each has the tree, steps, pitfalls and a "hide the tree" self-quiz.
- **Cases (9)** tagged by employer type (Banking & Fintech, Consulting, Big Tech): prompt, clarifying Q&A, data room, write-your-structure box, model answer, follow-ups, self-rating.
- **Estimation (8):** worked top-down / bottom-up / stock-and-flow solutions (for example, US car tires per year).
- **Math drills:** generated percent change, margin, breakeven, payback, ROI, compounding.
- **Glossary:** 55 terms with search and flashcards.
- **Progress:** stored in the browser (localStorage) and can be reset.

## Deploy to GitHub Pages
1. Create a new repo on GitHub and push these files to the `main` branch.
2. Repo **Settings > Pages > Build and deployment**: Source = "Deploy from a branch", Branch = `main`, folder `/ (root)`.
3. Your site will be at `https://<username>.github.io/<repo>/` after a minute or two.

Preview locally: `python3 -m http.server 8000` then open http://localhost:8000.

## Add a case
Edit `js/data-cases.js` and copy an existing object. Required fields: `id`, `title`, `track` (array of `banking`, `consulting`, `tech`), `framework` (an id from `data-frameworks.js`), `difficulty`, `minutes`, `prompt`, `clarify`, `tables`, `structure`, `analysis`, `recommendation`, `followups`, `pitfalls`.
