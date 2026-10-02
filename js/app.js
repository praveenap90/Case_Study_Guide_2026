(function () {
  "use strict";
  var D = window.DATA;
  var app = document.getElementById("app");

  /* ---------- storage (safe) ---------- */
  var mem = {};
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem("cip:" + k); return v === null ? d : JSON.parse(v); }
      catch (e) { return k in mem ? mem[k] : d; }
    },
    set: function (k, v) {
      mem[k] = v;
      try { localStorage.setItem("cip:" + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    },
    clearAll: function () {
      mem = {};
      try {
        Object.keys(localStorage).filter(function (k) { return k.indexOf("cip:") === 0; })
          .forEach(function (k) { localStorage.removeItem(k); });
      } catch (e) { /* ignore */ }
    }
  };

  /* ---------- helpers ---------- */
  function h(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function find(arr, id) { return arr.filter(function (x) { return x.id === id; })[0]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function trackName(id) { var t = find(D.tracks, id); return t ? t.name : id; }
  function fmt(n) { return (Math.round(n * 100) / 100).toString(); }

  function tree(node) {
    var kids = node.c && node.c.length ? "<ul>" + node.c.map(function (k) { return tree(k); }).join("") + "</ul>" : "";
    return "<li><span>" + h(node.t) + "</span>" + kids + "</li>";
  }
  function table(t) {
    return '<div class="tablewrap"><table><caption class="small muted" style="text-align:left;padding:4px 0">' + h(t.title) + "</caption><thead><tr>" +
      t.headers.map(function (x) { return "<th>" + h(x) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      t.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + h(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
      "</tbody></table></div>";
  }

  /* ---------- router ---------- */
  function parse() {
    var raw = (location.hash || "#/").replace(/^#\/?/, "");
    var parts = raw.split("?");
    var path = parts[0].split("/").filter(Boolean);
    var q = {};
    (parts[1] || "").split("&").forEach(function (p) { if (p) { var kv = p.split("="); q[kv[0]] = decodeURIComponent(kv[1] || ""); } });
    return { path: path, q: q };
  }
  var cleanup = null;
  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    var r = parse();
    var p = r.path;
    var top = p[0] || "home";
    $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-r") === top); });
    var views = { home: home, template: template, flow: flow, frameworks: frameworks, cases: cases, estimation: estimation, math: math, glossary: glossary, progress: progress };
    (views[top] || home)(p, r.q);
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  /* ---------- HOME ---------- */
  function home() {
    var done = store.get("casesDone", {});
    var n = Object.keys(done).length;
    app.innerHTML =
      "<h1>Case interview prep</h1>" +
      '<p class="lead">Learn the frameworks, then practice cases by employer type, estimation, and math. Everything runs in your browser and your progress stays on this device.</p>' +
      '<div class="grid">' + D.tracks.map(function (t) {
        var c = D.cases.filter(function (x) { return x.track.indexOf(t.id) >= 0; }).length;
        return '<a class="card" href="#/cases?track=' + t.id + '"><h3>' + h(t.name) + '</h3><p class="small muted">' + h(t.examples) + "</p><p>" + h(t.tests) + '</p><p class="small muted">' + c + " cases</p></a>";
      }).join("") + "</div>" +
      "<h2>How to use this</h2>" +
      '<ol class="steps"><li><b>Template:</b> start here. Remember CLEAR (Clarify, Lay out, Evaluate, Assess, Recommend), then use the worksheet and answer script.</li><li><b>Frameworks:</b> learn the tree (for example Profit = Revenue - Costs; Revenue = Volume x Price x Mix; Costs = Fixed + Variable), then try drawing it from memory.</li>' +
      "<li><b>Cases:</b> read the prompt, ask clarifying questions, write your own structure, then compare with the model structure and analysis.</li>" +
      "<li><b>Estimation:</b> size a market in under 3 minutes and compare approaches.</li>" +
      "<li><b>Math and glossary:</b> short daily drills and flashcards keep the speed up.</li></ol>" +
      '<div class="callout"><b>Your progress:</b> ' + n + " of " + D.cases.length + ' cases completed. <a href="#/progress">See details</a></div>';
  }

  /* ---------- CHARTS (Mermaid) ---------- */
  var chartSrc = {};
  function chartBlock(id, title, note) {
    return "<h2>" + h(title) + '</h2><p class="muted small">' + h(note) + "</p>" +
      '<div class="zoombar" role="group" aria-label="Zoom chart">' +
        '<button type="button" class="ghost" data-z="out" aria-label="Zoom out">&minus;</button>' +
        '<span class="zlabel" aria-live="polite">100%</span>' +
        '<button type="button" class="ghost" data-z="in" aria-label="Zoom in">+</button>' +
        '<button type="button" class="ghost" data-z="reset">Reset</button></div>' +
      '<div class="diagram" data-id="' + id + '"></div>' +
      '<details><summary>Show Mermaid source</summary><div class="body"><pre class="src" data-id="' + id + '"></pre></div></details>';
  }
  function zoomInit() {
    $$(".zoombar").forEach(function (bar) {
      var box = bar.nextElementSibling;
      var label = $(".zlabel", bar);
      var scale = 1, base = 0;
      function apply() {
        var svg = $("svg", box);
        if (!svg) return;
        if (scale === 1) { svg.style.width = ""; svg.style.maxWidth = ""; base = 0; box.scrollLeft = 0; }
        else { svg.style.maxWidth = "none"; svg.style.width = Math.round(base * scale) + "px"; }
        label.textContent = Math.round(scale * 100) + "%";
      }
      $$("button", bar).forEach(function (b) {
        b.addEventListener("click", function () {
          var svg = $("svg", box);
          if (!svg) return;
          var z = b.getAttribute("data-z");
          if (scale === 1 && z !== "reset") base = svg.getBoundingClientRect().width || 600;
          if (z === "in") scale = Math.min(3, scale + 0.25);
          else if (z === "out") scale = Math.max(0.5, scale - 0.25);
          else scale = 1;
          apply();
        });
      });
    });
  }

  function renderCharts() {
    zoomInit();
    var boxes = $$(".diagram");
    boxes.forEach(function (b) {
      var pre = document.createElement("pre");
      pre.className = "mermaid";
      pre.textContent = chartSrc[b.getAttribute("data-id")];
      b.appendChild(pre);
    });
    $$("pre.src").forEach(function (p) { p.textContent = chartSrc[p.getAttribute("data-id")]; });
    function fallback() {
      boxes.forEach(function (b) { b.innerHTML = '<p class="small muted">The chart library could not load (offline?). Open the Mermaid source below.</p>'; });
      $$(".zoombar").forEach(function (z) { z.style.display = "none"; });
      $$("details").forEach(function (d) { d.open = true; });
    }
    if (window.mermaid) {
      try {
        window.mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: "default", flowchart: { useMaxWidth: true } });
        var r = window.mermaid.run({ nodes: $$(".mermaid") });
        if (r && r.catch) r.catch(fallback);
      } catch (e) { fallback(); }
    } else { fallback(); }
  }

  /* ---------- FLOW ---------- */
  function flow() {
    app.innerHTML = "<h1>Case flow</h1>" +
      '<p class="lead">Two views of the same process: the generic path, and a worked profit-decline example.</p>' +
      D.flows.map(function (f) { chartSrc["flow-" + f.id] = f.code; return chartBlock("flow-" + f.id, f.title, f.note); }).join("");
    renderCharts();
  }

  /* ---------- TEMPLATE ---------- */
  function template() {
    var T = D.template;
    chartSrc.clear = T.clearChart; chartSrc.pick = T.pickChart; chartSrc.metrics = T.metricsChart;
    var ws = store.get("ws", {});
    var chk = store.get("chk", {});
    app.innerHTML =
      "<h1>Case template</h1>" +
      '<p class="lead">' + h(T.lead) + "</p>" +
      '<div class="row"><button id="print" class="ghost">Print this page</button></div>' +
      chartBlock("clear", "1. Remember CLEAR", "Five steps in a fixed order. Say them out loud before every case.") +
      table(T.clearTable) +
      chartBlock("pick", "2. Pick the structure", "Match the type of question to the structure, then open the Frameworks page for the full tree.") +
      chartBlock("metrics", "3. Pick the number", "Match the decision to the metric. The examples match the Math drills.") +
      table(T.metricsTable) +
      "<h2>4. Worksheet</h2><p class=\"muted small\">Fill this in for any practice case. Your notes save in this browser. The sample column shows the Digital Feature case.</p>" +
      '<div class="row"><button id="toggleSample" class="ghost">Hide sample</button><button id="clearWs" class="ghost">Clear my notes</button></div>' +
      '<div class="tablewrap"><table id="ws"><thead><tr><th>CLEAR step</th><th>Your notes</th><th class="sample">Sample</th></tr></thead><tbody>' +
      T.worksheet.map(function (r) {
        return "<tr><td><b>" + h(r[0]) + '</b></td><td><textarea class="ws" data-k="' + r[1] + '" aria-label="' + h(r[0]) + '"></textarea></td><td class="sample muted">' + h(r[2]) + "</td></tr>";
      }).join("") + "</tbody></table></div>" +
      "<h2>5. Answer script</h2><p class=\"muted small\">A reusable way to say each step. Replace the brackets with your own words.</p>" +
      table(T.scriptTable) +
      "<h2>6. Filled example</h2><p class=\"muted small\">" + h(T.exampleTitle) + "</p>" +
      T.example.map(function (e) { return '<div class="callout"><b>' + h(e[0]) + ":</b> " + h(e[1]) + "</div>"; }).join("") +
      "<h2>7. Phrases and rules</h2>" + table(T.phrases) + table(T.rules) +
      "<h2>8. Final check</h2><p class=\"muted small\">Run through this in the last 30 seconds before you answer.</p>" +
      T.checks.map(function (c, i) {
        return '<p><label><input type="checkbox" class="chk" data-i="' + i + '"> ' + h(c) + "</label></p>";
      }).join("") +
      '<p><button id="clearChk" class="ghost">Uncheck all</button></p>';
    renderCharts();

    $("#print").addEventListener("click", function () { window.print(); });
    $$("textarea.ws").forEach(function (t) {
      var k = t.getAttribute("data-k");
      t.value = ws[k] || "";
      t.addEventListener("input", function () { ws[k] = t.value; store.set("ws", ws); });
    });
    $("#clearWs").addEventListener("click", function () {
      if (!confirm("Clear all worksheet notes?")) return;
      ws = {}; store.set("ws", ws);
      $$("textarea.ws").forEach(function (t) { t.value = ""; });
    });
    var shown = true;
    $("#toggleSample").addEventListener("click", function () {
      shown = !shown;
      $$(".sample").forEach(function (c) { c.style.display = shown ? "" : "none"; });
      this.textContent = shown ? "Hide sample" : "Show sample";
    });
    $$("input.chk").forEach(function (c) {
      var i = c.getAttribute("data-i");
      c.checked = !!chk[i];
      c.addEventListener("change", function () { chk[i] = c.checked; store.set("chk", chk); });
    });
    $("#clearChk").addEventListener("click", function () { chk = {}; store.set("chk", chk); $$("input.chk").forEach(function (c) { c.checked = false; }); });
  }

  /* ---------- FRAMEWORKS ---------- */
  function frameworks(p) {
    if (p[1]) return frameworkDetail(p[1]);
    app.innerHTML = "<h1>Frameworks</h1>" +
      '<p class="lead">A structure turns an open question into a few buckets you can analyze. Pick the one that matches the question.</p>' +
      '<div class="grid">' + D.frameworks.map(function (f) {
        return '<a class="card" href="#/frameworks/' + f.id + '"><h3>' + h(f.name) + "</h3><p class=\"small muted\">" + h(f.when) + "</p><div>" +
          f.tags.map(function (t) { return '<span class="chip">' + h(trackName(t)) + "</span>"; }).join("") + "</div></a>";
      }).join("") + "</div>";
  }
  function frameworkDetail(id) {
    var f = find(D.frameworks, id);
    if (!f) { app.innerHTML = "<p>Not found. <a href='#/frameworks'>Back</a></p>"; return; }
    var related = D.cases.filter(function (c) { return c.framework === f.id; });
    if (f.exampleChart) chartSrc["fw-" + f.id] = f.exampleChart;
    app.innerHTML =
      '<p><a href="#/frameworks">&larr; All frameworks</a></p><h1>' + h(f.name) + "</h1>" +
      '<div class="callout"><b>When to use:</b> ' + h(f.when) + "</div>" +
      (f.tree ?
        "<h2>The structure</h2>" +
        '<div class="row"><button class="ghost" id="hideTree">Quiz me: hide the tree</button></div>' +
        '<div id="treeBox"><ul class="tree">' + tree(f.tree) + "</ul></div>" +
        '<div id="treeQuiz" style="display:none"><p class="muted">Write or sketch the tree on paper. Then reveal it to compare.</p></div>' : "") +
      (f.steps ? "<h2>How to run it</h2><ol class=\"steps\">" + f.steps.map(function (s) { return "<li>" + h(s) + "</li>"; }).join("") + "</ol>" : "") +
      (f.pitfalls ? "<h2>Common pitfalls</h2><ul>" + f.pitfalls.map(function (s) { return "<li>" + h(s) + "</li>"; }).join("") + "</ul>" : "") +
      (f.exampleChart
        ? chartBlock("fw-" + f.id, "Worked example: CLEAR applied", f.example) + f.exampleTables.map(table).join("") +
          (f.speak ? "<h2>What you would say out loud</h2>" + f.speak.map(function (e) { return '<div class="callout"><b>' + h(e[0]) + ":</b> " + h(e[1]) + "</div>"; }).join("") : "")
        : '<div class="callout"><b>Example:</b> ' + h(f.example) + "</div>") +
      (f.table ? "<h2>Cheat sheet</h2>" + table(f.table) : "") +
      (related.length ? "<h2>Practice with this framework</h2><div class=\"grid\">" + related.map(caseCard).join("") + "</div>" : "");
    if (f.exampleChart) renderCharts();
    var shown = true;
    var hideBtn = $("#hideTree");
    if (hideBtn) hideBtn.addEventListener("click", function () {
      shown = !shown;
      $("#treeBox").style.display = shown ? "" : "none";
      $("#treeQuiz").style.display = shown ? "none" : "";
      this.textContent = shown ? "Quiz me: hide the tree" : "Reveal the tree";
    });
  }

  /* ---------- CASES ---------- */
  function caseCard(c) {
    var done = store.get("casesDone", {})[c.id];
    return '<a class="card" href="#/cases/' + c.id + '"><h3>' + h(c.title) + (done ? ' <span class="done" title="Completed">&#10003;</span>' : "") + "</h3><div>" +
      c.track.map(function (t) { return '<span class="chip">' + h(trackName(t)) + "</span>"; }).join("") +
      '<span class="chip warn">' + h(c.difficulty) + "</span></div>" +
      '<p class="small muted">~' + c.minutes + " min &middot; " + h((find(D.frameworks, c.framework) || {}).name || "") + "</p></a>";
  }
  function cases(p, q) {
    if (p[1]) return caseDetail(p[1]);
    var cur = q.track || "all";
    var list = D.cases.filter(function (c) { return cur === "all" || c.track.indexOf(cur) >= 0; });
    var tracks = [{ id: "all", name: "All" }].concat(D.tracks);
    var tinfo = find(D.tracks, cur);
    app.innerHTML = "<h1>Cases</h1>" +
      '<div class="filters" role="group" aria-label="Filter by employer type">' + tracks.map(function (t) {
        return '<button data-t="' + t.id + '" class="' + (t.id === cur ? "on" : "") + '" aria-pressed="' + (t.id === cur) + '">' + h(t.name) + "</button>";
      }).join("") + "</div>" +
      (tinfo ? '<div class="callout"><b>' + h(tinfo.name) + ":</b> " + h(tinfo.style) + "<ul>" + tinfo.tips.map(function (t) { return "<li>" + h(t) + "</li>"; }).join("") + "</ul></div>" : "") +
      '<div class="grid">' + list.map(caseCard).join("") + "</div>";
    $$(".filters button").forEach(function (b) {
      b.addEventListener("click", function () { var t = b.getAttribute("data-t"); location.hash = t === "all" ? "#/cases" : "#/cases?track=" + t; });
    });
  }

  function caseDetail(id) {
    var c = find(D.cases, id);
    if (!c) { app.innerHTML = "<p>Not found. <a href='#/cases'>Back</a></p>"; return; }
    var fw = find(D.frameworks, c.framework);
    var done = store.get("casesDone", {});
    var rating = store.get("rating:" + id, 0);
    app.innerHTML =
      '<p><a href="#/cases">&larr; All cases</a></p><h1>' + h(c.title) + "</h1><div>" +
      c.track.map(function (t) { return '<span class="chip">' + h(trackName(t)) + "</span>"; }).join("") +
      '<span class="chip warn">' + h(c.difficulty) + "</span></div>" +
      "<h2>1. The prompt</h2><div class=\"callout\">" + h(c.prompt) + "</div>" +
      '<div class="row"><span class="timer" id="timer">0:00</span><button id="tStart" class="ghost">Start timer</button><button id="tReset" class="ghost">Reset</button><span class="muted small">Target: ~' + c.minutes + " minutes</span></div>" +
      "<h2>2. Ask clarifying questions</h2><p class=\"muted small\">Click a question to hear the interviewer's answer. In a real interview, ask only what you need.</p>" +
      c.clarify.map(function (x) { return '<div class="qa"><button>' + h(x.q) + '</button><div class="ans">' + h(x.a) + "</div></div>"; }).join("") +
      "<h2>3. Data room</h2><details><summary>Show the data the interviewer shares</summary><div class=\"body\">" + c.tables.map(table).join("") + "</div></details>" +
      "<h2>4. Your structure</h2><p class=\"muted small\">Write your framework before looking at the model. Framework hint: <a href=\"#/frameworks/" + c.framework + '">' + h(fw ? fw.name : "") + "</a></p>" +
      '<textarea id="note" aria-label="Your structure and notes" placeholder="Bucket 1... Bucket 2... Hypothesis..."></textarea>' +
      '<div class="row" style="margin-top:8px"><button id="reveal">Reveal model answer</button></div>' +
      '<div id="model" style="display:none">' +
      "<h2>Model structure</h2><ul>" + c.structure.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul>" +
      "<h2>Analysis</h2>" + c.analysis.map(function (a, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + h(a.h) + '</summary><div class="body">' + a.p + "</div></details>"; }).join("") +
      '<h2>Recommendation</h2><div class="callout">' + h(c.recommendation) + "</div>" +
      "<h2>Follow-up questions</h2><p class=\"muted small\">Answer out loud first, then click.</p>" +
      c.followups.map(function (x) { return '<div class="qa"><button>' + h(x.q) + '</button><div class="ans">' + h(x.a) + "</div></div>"; }).join("") +
      '<h2>Common pitfalls</h2><div class="callout warn"><ul>' + c.pitfalls.map(function (s) { return "<li>" + h(s) + "</li>"; }).join("") + "</ul></div>" +
      '<h2>Finish</h2><div class="row"><label><input type="checkbox" id="doneBox"> Mark complete</label>' +
      '<label>Self-rating <select id="rate" style="width:auto"><option value="0">-</option>' + [1, 2, 3, 4, 5].map(function (n) { return '<option value="' + n + '">' + n + " / 5</option>"; }).join("") + "</select></label></div>" +
      "</div>";

    $$(".qa button").forEach(function (b) { b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); }); });
    var note = $("#note");
    note.value = store.get("note:" + id, "");
    note.addEventListener("input", function () { store.set("note:" + id, note.value); });

    // timer
    var secs = 0, iv = null;
    function draw() { $("#timer").textContent = Math.floor(secs / 60) + ":" + ("0" + (secs % 60)).slice(-2); }
    $("#tStart").addEventListener("click", function () {
      if (iv) { clearInterval(iv); iv = null; this.textContent = "Resume"; }
      else { iv = setInterval(function () { secs++; draw(); }, 1000); this.textContent = "Pause"; }
    });
    $("#tReset").addEventListener("click", function () { secs = 0; draw(); });
    cleanup = function () { if (iv) clearInterval(iv); };

    $("#reveal").addEventListener("click", function () {
      var m = $("#model"); var vis = m.style.display !== "none";
      m.style.display = vis ? "none" : "";
      this.textContent = vis ? "Reveal model answer" : "Hide model answer";
    });
    var box = $("#doneBox"), sel = $("#rate");
    box.checked = !!done[id]; sel.value = String(rating);
    box.addEventListener("change", function () { var d = store.get("casesDone", {}); if (box.checked) d[id] = Date.now(); else delete d[id]; store.set("casesDone", d); });
    sel.addEventListener("change", function () { store.set("rating:" + id, Number(sel.value)); });
  }

  /* ---------- ESTIMATION ---------- */
  function estimation() {
    var tried = store.get("estTried", {});
    app.innerHTML = "<h1>Estimation</h1>" +
      '<p class="lead">Give yourself 3 minutes. Write your approach and a number, then compare. The approach matters more than the answer.</p>' +
      '<div class="callout"><b>Routine:</b> clarify scope &rarr; choose top-down or bottom-up &rarr; 3 to 5 inputs with round numbers &rarr; calculate with units &rarr; sanity check.</div>' +
      D.estimation.map(function (e) {
        return "<details data-id=\"" + e.id + "\"><summary>" + h(e.q) + (tried[e.id] ? ' <span class="done">&#10003;</span>' : "") + '</summary><div class="body">' +
          '<p class="muted small">Approach hint is hidden. Try it first.</p>' +
          '<label class="small muted" for="est-' + e.id + '">Your estimate and approach</label><textarea id="est-' + e.id + '" style="min-height:90px"></textarea>' +
          '<div class="row" style="margin-top:8px"><button class="reveal">Reveal solution</button></div>' +
          '<div class="sol" style="display:none"><p><b>Approach:</b> ' + h(e.approach) + "</p>" +
          '<div class="tablewrap"><table><thead><tr><th>Step</th><th>Calculation</th><th>Value</th></tr></thead><tbody>' +
          e.steps.map(function (s) { return "<tr><td>" + h(s[0]) + "</td><td>" + h(s[1]) + "</td><td>" + h(s[2]) + "</td></tr>"; }).join("") +
          '</tbody></table></div><div class="callout"><b>Answer:</b> ' + h(e.answer) + "</div><p><b>Sanity check:</b> " + h(e.sanity) + "</p></div></div></details>";
      }).join("");
    $$("details[data-id]").forEach(function (d) {
      var id = d.getAttribute("data-id");
      var ta = $("textarea", d);
      ta.value = store.get("est:" + id, "");
      ta.addEventListener("input", function () { store.set("est:" + id, ta.value); });
      $(".reveal", d).addEventListener("click", function () {
        var s = $(".sol", d); var vis = s.style.display !== "none";
        s.style.display = vis ? "none" : "";
        this.textContent = vis ? "Reveal solution" : "Hide solution";
        if (!vis) { var t = store.get("estTried", {}); t[id] = 1; store.set("estTried", t); }
      });
    });
  }

  /* ---------- MATH ---------- */
  var gens = {
    pct: { name: "Percent change", make: function () {
      var a = pick([80, 120, 160, 200, 240, 400]), pc = pick([10, 20, 25, 30, 50, -10, -20, -25]);
      var b = a * (1 + pc / 100);
      return { text: "Revenue went from $" + a + "M to $" + fmt(b) + "M. What is the percent change?", ans: pc, unit: "%", sol: "(" + fmt(b) + " - " + a + ") / " + a + " = " + pc + "%" };
    } },
    margin: { name: "Margin to profit", make: function () {
      var r = pick([50, 80, 120, 150, 200, 250]), m = pick([10, 15, 20, 25, 30, 40]);
      return { text: "Revenue is $" + r + "M and net margin is " + m + "%. What is profit, in $M?", ans: r * m / 100, unit: "$M", sol: r + " x " + m + "% = " + fmt(r * m / 100) };
    } },
    be: { name: "Breakeven volume", make: function () {
      var c = pick([[300000, 50, 20], [200000, 40, 20], [600000, 30, 18], [1200000, 80, 40], [500000, 25, 15], [900000, 60, 30]]);
      return { text: "Fixed costs are $" + c[0].toLocaleString("en-US") + ". Price is $" + c[1] + " and variable cost is $" + c[2] + " per unit. How many units to break even?", ans: c[0] / (c[1] - c[2]), unit: "units", sol: c[0] + " / (" + c[1] + " - " + c[2] + ") = " + c[0] / (c[1] - c[2]) };
    } },
    pay: { name: "Payback (months)", make: function () {
      var c = pick([[12, 6], [9, 12], [5, 10], [15, 10], [30, 24], [8, 4]]);
      var m = c[0] / c[1] * 12;
      return { text: "An investment of $" + c[0] + "M earns $" + c[1] + "M profit per year. What is the payback period in months?", ans: m, unit: "months", sol: c[0] + " / " + c[1] + " x 12 = " + fmt(m) + " months" };
    } },
    comp: { name: "Two-year growth", make: function () {
      var b = pick([100, 200, 500]), r = pick([10, 20]);
      var v = b * Math.pow(1 + r / 100, 2);
      return { text: "Revenue of $" + b + "M grows " + r + "% per year for 2 years. What is the final revenue, in $M?", ans: v, unit: "$M", sol: b + " x " + (1 + r / 100) + " x " + (1 + r / 100) + " = " + fmt(v) };
    } },
    mult: { name: "Quick multiplication", make: function () {
      var a = pick([2.4, 3.5, 4.8, 6.2, 7.5]), b = pick([25, 40, 60, 90]);
      return { text: a + "M customers each spending $" + b + " per year. Total spend in $M?", ans: a * b, unit: "$M", sol: a + " x " + b + " = " + fmt(a * b) };
    } },
    share: { name: "Market share", make: function () {
      var m = pick([2, 4, 5, 8]), s = pick([5, 12, 15, 25]);
      return { text: "The market is $" + m + "B and you have a " + s + "% share. Your revenue in $M?", ans: m * s * 10, unit: "$M", sol: m + "B x " + s + "% = " + m * s * 10 + "M" };
    } },
    roi: { name: "ROI", make: function () {
      var c = pick([[2, 5], [4, 6], [5, 12], [10, 13]]);
      var r = (c[1] - c[0]) / c[0] * 100;
      return { text: "You invest $" + c[0] + "M and get back $" + c[1] + "M in total. What is the ROI in percent?", ans: r, unit: "%", sol: "(" + c[1] + " - " + c[0] + ") / " + c[0] + " = " + fmt(r) + "%" };
    } }
  };
  function math() {
    var stats = store.get("math", { right: 0, total: 0, best: 0 });
    var streak = 0, cur = null, t0 = 0, mode = "all";
    app.innerHTML = "<h1>Math drills</h1>" +
      '<p class="lead">No calculator. Say your steps out loud. Answers within 2% count as correct.</p>' +
      '<div class="row"><label for="mode">Type</label><select id="mode" style="width:auto"><option value="all">All types</option>' +
      Object.keys(gens).map(function (k) { return '<option value="' + k + '">' + h(gens[k].name) + "</option>"; }).join("") + "</select></div>" +
      '<div class="card" style="margin-top:12px"><p id="qtext" style="font-size:19px;margin-top:0"></p>' +
      '<form id="f" class="row"><input type="number" step="any" id="ans" class="short" aria-label="Your answer" autocomplete="off"><span id="unit" class="muted"></span><button type="submit" id="check">Check</button><button type="button" id="next" class="ghost">Next</button></form>' +
      '<p id="fb" class="feedback" aria-live="polite"></p><p id="sol" class="small muted"></p></div>' +
      '<div class="row" style="margin-top:12px"><div><div class="stat" id="sStreak">0</div><div class="small muted">streak</div></div>' +
      '<div style="margin-left:24px"><div class="stat" id="sAcc">-</div><div class="small muted">accuracy (all time)</div></div></div>';
    function showStats() {
      $("#sStreak").textContent = streak;
      $("#sAcc").textContent = stats.total ? Math.round(stats.right / stats.total * 100) + "% (" + stats.right + "/" + stats.total + ")" : "-";
    }
    function newQ() {
      var keys = Object.keys(gens);
      var g = gens[mode === "all" ? pick(keys) : mode];
      cur = g.make(); cur.answered = false;
      $("#qtext").textContent = cur.text;
      $("#unit").textContent = cur.unit;
      $("#ans").value = ""; $("#fb").textContent = ""; $("#fb").className = "feedback"; $("#sol").textContent = "";
      $("#check").disabled = false;
      t0 = Date.now(); $("#ans").focus();
    }
    $("#mode").addEventListener("change", function () { mode = this.value; newQ(); });
    $("#next").addEventListener("click", newQ);
    $("#f").addEventListener("submit", function (e) {
      e.preventDefault();
      if (!cur || cur.answered) { newQ(); return; }
      var v = parseFloat($("#ans").value);
      if (isNaN(v)) { $("#fb").textContent = "Enter a number."; return; }
      cur.answered = true;
      var ok = Math.abs(v - cur.ans) <= Math.max(Math.abs(cur.ans) * 0.02, 0.01);
      var secs = Math.round((Date.now() - t0) / 1000);
      stats.total++; if (ok) { stats.right++; streak++; if (streak > stats.best) stats.best = streak; } else { streak = 0; }
      store.set("math", stats);
      var fb = $("#fb");
      fb.className = "feedback " + (ok ? "good" : "bad");
      fb.textContent = (ok ? "Correct" : "Not quite. Answer: " + fmt(cur.ans) + " " + cur.unit) + " (" + secs + "s)";
      $("#sol").textContent = "Working: " + cur.sol;
      $("#check").disabled = true;
      showStats();
    });
    newQ(); showStats();
  }

  /* ---------- GLOSSARY ---------- */
  function glossary() {
    var cats = ["All"].concat(D.glossary.map(function (g) { return g.cat; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var cat = "All", term = "", flash = false;
    function render() {
      var known = store.get("known", {});
      app.innerHTML = "<h1>Glossary</h1>" +
        '<div class="row"><input type="search" id="s" aria-label="Search terms" placeholder="Search terms" value="' + h(term) + '" style="max-width:320px">' +
        '<button id="mode" class="ghost">' + (flash ? "Back to list" : "Flashcard mode") + "</button></div>" +
        '<div class="filters">' + cats.map(function (c) { return '<button data-c="' + h(c) + '" class="' + (c === cat ? "on" : "") + '" aria-pressed="' + (c === cat) + '">' + h(c) + "</button>"; }).join("") + "</div>" +
        '<div id="body"></div>';
      $("#s").addEventListener("input", function () { term = this.value; body(); });
      $("#mode").addEventListener("click", function () { flash = !flash; render(); });
      $$(".filters button").forEach(function (b) { b.addEventListener("click", function () { cat = b.getAttribute("data-c"); render(); }); });
      body();
    }
    function list() {
      return D.glossary.filter(function (g) {
        return (cat === "All" || g.cat === cat) && (!term || (g.term + " " + g.def).toLowerCase().indexOf(term.toLowerCase()) >= 0);
      });
    }
    function body() {
      var items = list();
      var el = $("#body");
      if (!flash) {
        el.innerHTML = items.length ? '<div class="grid">' + items.map(function (g) {
          return '<div class="card"><h3>' + h(g.term) + '</h3><span class="chip">' + h(g.cat) + "</span><p>" + h(g.def) + "</p>" + (g.formula ? '<p class="small muted"><b>Formula:</b> ' + h(g.formula) + "</p>" : "") + "</div>";
        }).join("") + "</div>" : "<p>No matches.</p>";
        return;
      }
      if (!items.length) { el.innerHTML = "<p>No cards.</p>"; return; }
      var deck = shuffle(items), i = 0, shown = false;
      function card() {
        var g = deck[i];
        var k = store.get("known", {});
        el.innerHTML = '<p class="muted small">Card ' + (i + 1) + " of " + deck.length + " &middot; known: " + Object.keys(k).length + "/" + D.glossary.length + "</p>" +
          '<div class="card flash" id="fc" role="button" tabindex="0" aria-label="Flip card">' +
          (shown ? "<div>" + h(g.def) + (g.formula ? '<span class="formula">' + h(g.formula) + "</span>" : "") + "</div>" : "<div><b>" + h(g.term) + "</b><br><span class=\"small muted\">Tap to reveal</span></div>") + "</div>" +
          '<div class="row" style="margin-top:10px"><button id="again" class="ghost">Again</button><button id="got">Got it</button></div>';
        function flip() { shown = !shown; card(); }
        $("#fc").addEventListener("click", flip);
        $("#fc").addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
        function adv(isKnown) {
          var kn = store.get("known", {});
          if (isKnown) kn[g.term] = 1; else delete kn[g.term];
          store.set("known", kn);
          i = (i + 1) % deck.length; shown = false; card();
        }
        $("#got").addEventListener("click", function () { adv(true); });
        $("#again").addEventListener("click", function () { adv(false); });
      }
      card();
    }
    render();
  }

  /* ---------- PROGRESS ---------- */
  function progress() {
    var done = store.get("casesDone", {}), tried = store.get("estTried", {}), m = store.get("math", { right: 0, total: 0, best: 0 }), known = store.get("known", {});
    function bar(a, b) { return '<div class="bar" role="progressbar" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="' + b + '"><i style="width:' + Math.round(a / b * 100) + '%"></i></div>'; }
    var nc = Object.keys(done).length, ne = Object.keys(tried).length, nk = Object.keys(known).length;
    app.innerHTML = "<h1>Progress</h1>" +
      '<div class="grid">' +
      '<div class="card"><div class="stat">' + nc + "/" + D.cases.length + '</div><div class="muted small">cases completed</div>' + bar(nc, D.cases.length) + "</div>" +
      '<div class="card"><div class="stat">' + ne + "/" + D.estimation.length + '</div><div class="muted small">estimation drills attempted</div>' + bar(ne, D.estimation.length) + "</div>" +
      '<div class="card"><div class="stat">' + nk + "/" + D.glossary.length + '</div><div class="muted small">glossary terms known</div>' + bar(nk, D.glossary.length) + "</div>" +
      '<div class="card"><div class="stat">' + (m.total ? Math.round(m.right / m.total * 100) + "%" : "-") + '</div><div class="muted small">math accuracy (' + m.right + "/" + m.total + ", best streak " + m.best + ")</div></div></div>" +
      "<h2>Cases</h2>" + D.cases.map(function (c) {
        var r = store.get("rating:" + c.id, 0);
        return '<p><a href="#/cases/' + c.id + '">' + h(c.title) + "</a> " + (done[c.id] ? '<span class="done">&#10003; done</span>' : '<span class="muted">not yet</span>') + (r ? ' <span class="muted small">self-rating ' + r + "/5</span>" : "") + "</p>";
      }).join("") +
      '<h2>Reset</h2><p class="muted small">Clears notes and progress stored in this browser.</p><button id="reset" class="ghost">Reset all progress</button>';
    $("#reset").addEventListener("click", function () { if (confirm("Reset all progress and notes?")) { store.clearAll(); progress(); } });
  }

  route();
})();
