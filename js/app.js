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

  /* ---------- theme toggle ---------- */
  (function () {
    var root = document.documentElement;
    var btn = document.getElementById("theme");
    if (!btn) return;
    function current() {
      var t = root.getAttribute("data-theme");
      if (t === "light" || t === "dark") return t;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function label() { btn.textContent = current() === "dark" ? "Light mode" : "Dark mode"; }
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store.set("theme", next);
      label();
    });
    label();
  })();

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
    closeExpanded();
    var r = parse();
    var p = r.path;
    var top = p[0] || "home";
    $$("#nav a").forEach(function (a) { a.classList.toggle("on", a.getAttribute("data-r") === top); });
    var legacy = { template: "template", frameworks: "frameworks", cases: "cases", flow: "template" };
    if (legacy[top]) {
      var qs = (location.hash || "").indexOf("?") >= 0 ? "?" + location.hash.split("?")[1] : "";
      location.replace("#/casestudies/" + [legacy[top]].concat(p.slice(1)).join("/") + qs);
      return;
    }
    if (top === "math" || top === "glossary") { location.replace("#/"); return; }
    var views = { home: home, casestudies: casestudies, estimation: estimation, progress: progress };
    (views[top] || home)(p, r.q);
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", route);

  /* ---------- HOME ---------- */
  function home() {
    var done = store.get("casesDone", {});
    var n = Object.keys(done).length;
    var nf = D.frameworks.length, nc = D.cases.length, ne = D.estimation.length;
    var clear = [
      ["C", "Clarify", "Restate the question, ask 2 or 3 questions, confirm the goal and timeline."],
      ["L", "Lay out", "Name a structure with 3 or 4 buckets before diving in."],
      ["E", "Evaluate", "Size and test each bucket with numbers."],
      ["A", "Assess", "Say what the numbers mean, the risks and what would change your mind."],
      ["R", "Recommend", "Give a clear answer first, then the reasons and next steps."]
    ];
    app.innerHTML =
      '<section class="hero"><p class="eyebrow">Interview prep</p><h1>Case Prep</h1>' +
      '<p class="lead">Practice for case-study interviews for data analyst and data engineer roles at banks, fintechs and tech companies. Learn one method, see it applied to real-style cases, then practice out loud.</p>' +
      '<div class="cta"><a class="btn" href="#/casestudies/template">Start with the method</a><a class="btn alt" href="#/casestudies/cases">Jump to practice cases</a></div></section>' +
      "<h2>What you will find here</h2>" +
      '<div class="grid">' +
        '<a class="card" href="#/casestudies/template"><h3>Templates</h3><p class="small muted">The method</p><p>The CLEAR answer structure, a worksheet that saves in your browser, an answer script, a phrase bank and a final checklist.</p></a>' +
        '<a class="card" href="#/casestudies/frameworks"><h3>Frameworks (' + nf + ')</h3><p class="small muted">The toolkit</p><p>Profitability, market sizing, market entry, growth, pricing, M&amp;A, cost reduction, retention, metric diagnosis, unit economics and product deep-dive. Each has a worked example with charts.</p></a>' +
        '<a class="card" href="#/casestudies/cases"><h3>Cases (' + nc + ')</h3><p class="small muted">The practice</p><p>Full prompts with a timer, clarifying questions, a data room and a model answer to compare with yours.</p></a>' +
        '<a class="card" href="#/casestudies/drills"><h3>Practice drills (' + (D.drills || []).length + ')</h3><p class="small muted">The maths</p><p>Break-even, algebra, payback, funnel and unit-economics problems with hints and worked answers, like the maths inside a real case.</p></a>' +
        '<a class="card" href="#/estimation"><h3>Guesstimates (' + ne + ')</h3><p class="small muted">The numbers</p><p>The SCOPE template, handy numbers and worked estimation drills such as car tires, smartphones and manholes.</p></a>' +
      "</div>" +
      "<h2>The method in 30 seconds: CLEAR</h2>" +
      '<ol class="clear">' + clear.map(function (c) { return '<li><b>' + c[0] + '</b><span><strong>' + c[1] + ".</strong> " + c[2] + "</span></li>"; }).join("") + "</ol>" +
      "<h2>A suggested study path</h2>" +
      '<ol class="steps"><li><b>Learn the method.</b> Read Case Studies &rarr; Templates and memorize CLEAR.</li>' +
      '<li><b>Learn the toolkit.</b> Open two or three frameworks. For each, read the worked example, then try the numbers yourself before looking at the table.</li>' +
      '<li><b>Practice a case.</b> Pick one under Cases, start the timer, ask clarifying questions, write your own structure, then reveal the model answer and compare.</li>' +
      '<li><b>Say it out loud.</b> Use the "What you would say out loud" sections and answer the follow-up questions before you click them.</li>' +
      '<li><b>Build number sense.</b> Do one Guesstimate a day with the SCOPE template.</li></ol>' +
      "<h2>How each case is laid out</h2>" +
      '<ul class="tips"><li>Every framework and case uses the same pattern: a CLEAR flow chart, an Evaluate chart, an Impact chart, tables with the math, a spoken answer and a cheat sheet.</li>' +
      "<li>Charts have controls to expand, copy the Mermaid source, pan and zoom. Use the Light mode / Dark mode button at the top right if you prefer a different theme.</li>" +
      "<li>Numbers in cases are illustrative. The goal is the way you think, not the exact figures.</li></ul>" +
      "<h2>Practice by employer type</h2>" +
      '<div class="grid">' + D.tracks.map(function (t) {
        var c = D.cases.filter(function (x) { return x.track.indexOf(t.id) >= 0; }).length;
        return '<a class="card" href="#/casestudies/cases?track=' + t.id + '"><h3>' + h(t.name) + '</h3><p class="small muted">' + h(t.examples) + "</p><p>" + h(t.tests) + '</p><p class="small muted">' + c + " cases</p></a>";
      }).join("") + "</div>" +
      '<div class="callout"><b>Your progress:</b> ' + n + " of " + nc + ' cases completed. <a href="#/progress">See details</a></div>';
  }

  /* ---------- CHARTS (Mermaid) ---------- */
  var chartSrc = {};
  var IC = {
    expand: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    shrink: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',
    up: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    left: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    reset: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>'
  };
  function cbtn(act, label, icon, cls) {
    return '<button type="button" class="cb ' + (cls || "") + '" data-a="' + act + '" aria-label="' + label + '" title="' + label + '">' + icon + "</button>";
  }
  function chartBlock(id, title, note) {
    return "<h2>" + h(title) + '</h2><p class="muted small">' + h(note) + "</p>" +
      '<div class="chartbox" data-id="' + id + '">' +
        '<div class="diagram" data-id="' + id + '"></div>' +
        '<div class="ctl ctl-top" role="group" aria-label="Chart actions">' +
          cbtn("expand", "Expand chart", IC.expand) + cbtn("copy", "Copy Mermaid source", IC.copy) + "</div>" +
        '<div class="ctl ctl-pad" role="group" aria-label="Pan and zoom chart">' +
          '<span></span>' + cbtn("up", "Pan up", IC.up) + cbtn("in", "Zoom in", "+", "txt") +
          cbtn("left", "Pan left", IC.left) + cbtn("reset", "Reset view", IC.reset) + cbtn("right", "Pan right", IC.right) +
          '<span></span>' + cbtn("down", "Pan down", IC.down) + cbtn("out", "Zoom out", "&minus;", "txt") + "</div>" +
      "</div>" +
      '<details><summary>Show Mermaid source</summary><div class="body"><pre class="src" data-id="' + id + '"></pre></div></details>';
  }
  function closeExpanded() {
    $$(".chartbox.expanded").forEach(function (b) {
      b.classList.remove("expanded");
      var e = $('[data-a="expand"]', b);
      if (e) { e.innerHTML = IC.expand; e.setAttribute("aria-label", "Expand chart"); e.title = "Expand chart"; }
    });
    document.body.classList.remove("noscroll");
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeExpanded(); });
  function copyText(t, done) {
    function legacy() {
      var ta = document.createElement("textarea");
      ta.value = t; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta); done(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { done(true); }, legacy);
    else legacy();
  }
  function zoomInit(root) {
    $$(".chartbox", root).forEach(function (cb) {
      if (cb.getAttribute("data-zinit")) return;
      cb.setAttribute("data-zinit", "1");
      var box = $(".diagram", cb);
      var scale = 1, base = 0;
      function apply() {
        var svg = $("svg", box);
        if (!svg) return;
        if (scale === 1) { svg.style.width = ""; svg.style.maxWidth = ""; base = 0; box.scrollLeft = 0; box.scrollTop = 0; }
        else { svg.style.maxWidth = "none"; svg.style.width = Math.round(base * scale) + "px"; }
        cb.classList.toggle("zoomed", scale !== 1);
      }
      $$("button.cb", cb).forEach(function (b) {
        b.addEventListener("click", function () {
          var a = b.getAttribute("data-a");
          if (a === "expand") {
            var on = !cb.classList.contains("expanded");
            closeExpanded();
            if (on) {
              cb.classList.add("expanded"); document.body.classList.add("noscroll");
              b.innerHTML = IC.shrink; b.setAttribute("aria-label", "Close expanded chart"); b.title = "Close (Esc)";
            }
            return;
          }
          if (a === "copy") {
            copyText(chartSrc[cb.getAttribute("data-id")] || "", function (ok) {
              b.classList.add("flashed"); b.title = ok ? "Copied" : "Copy failed";
              setTimeout(function () { b.classList.remove("flashed"); b.title = "Copy Mermaid source"; }, 1200);
            });
            return;
          }
          var step = 80;
          if (a === "up") { box.scrollTop -= step; return; }
          if (a === "down") { box.scrollTop += step; return; }
          if (a === "left") { box.scrollLeft -= step; return; }
          if (a === "right") { box.scrollLeft += step; return; }
          var svg = $("svg", box);
          if (!svg) return;
          if (scale === 1 && a !== "reset") base = svg.getBoundingClientRect().width || 600;
          if (a === "in") scale = Math.min(3, scale + 0.25);
          else if (a === "out") scale = Math.max(0.5, scale - 0.25);
          else scale = 1;
          apply();
        });
      });
    });
  }

  function renderCharts(root) {
    root = root || document;
    var boxes = $$(".diagram", root).filter(function (b) {
      if (b.getAttribute("data-done")) return false;
      var sol = b.closest(".sol");
      return !(sol && sol.style.display === "none");
    });
    boxes.forEach(function (b) {
      b.setAttribute("data-done", "1");
      var cb = b.closest(".chartbox");
      if (cb) zoomInit(cb.parentNode);
      var pre = document.createElement("pre");
      pre.className = "mermaid";
      pre.textContent = chartSrc[b.getAttribute("data-id")];
      b.appendChild(pre);
    });
    $$("pre.src", root).forEach(function (p) { p.textContent = chartSrc[p.getAttribute("data-id")]; });
    if (!boxes.length) return;
    function fallback() {
      boxes.forEach(function (b) { b.innerHTML = '<p class="small muted">The chart library could not load (offline?). Open the Mermaid source below.</p>'; });
      $$(".ctl", root).forEach(function (z) { z.style.display = "none"; });
      $$("details", root).forEach(function (d) { d.open = true; });
    }
    if (window.mermaid) {
      try {
        window.mermaid.initialize({ startOnLoad: false, securityLevel: "loose", theme: "default", flowchart: { useMaxWidth: true } });
        var r = window.mermaid.run({ nodes: boxes.map(function (b) { return $(".mermaid", b); }) });
        if (r && r.catch) r.catch(fallback);
      } catch (e) { fallback(); }
    } else { fallback(); }
  }

  /* ---------- CASE STUDIES (Templates, Frameworks, Cases) ---------- */
  function casestudies(p, q) {
    var subs = [["template", "Templates"], ["frameworks", "Frameworks"], ["cases", "Cases"], ["drills", "Practice drills"]];
    var sub = subs.some(function (x) { return x[0] === p[1]; }) ? p[1] : "template";
    var sp = [sub].concat(p.slice(2));
    ({ template: template, frameworks: frameworks, cases: cases, drills: drills })[sub](sp, q);
    app.insertAdjacentHTML("afterbegin", '<div class="filters" role="tablist" aria-label="Case study sections">' + subs.map(function (t) {
      return '<button type="button" role="tab" class="' + (sub === t[0] ? "on" : "") + '" aria-selected="' + (sub === t[0]) + '" onclick="location.hash=\'#/casestudies/' + t[0] + '\'">' + t[1] + "</button>";
    }).join("") + "</div>");
  }

  /* ---------- PRACTICE DRILLS ---------- */
  function drills(p, q) {
    var types = D.drillTypes || [];
    var cur = q.type || "all";
    var done = store.get("drillsDone", {});
    var list = D.drills.filter(function (d) { return cur === "all" || d.type === cur; });
    var nDone = Object.keys(done).length;
    var chips = '<div class="filters" role="group" aria-label="Drill type"><button type="button" data-t="all" class="' + (cur === "all" ? "on" : "") + '">All (' + D.drills.length + ")</button>" +
      types.map(function (t) {
        var n = D.drills.filter(function (d) { return d.type === t.id; }).length;
        return '<button type="button" data-t="' + t.id + '" class="' + (cur === t.id ? "on" : "") + '">' + h(t.name) + " (" + n + ")</button>";
      }).join("") + "</div>";
    app.innerHTML = "<h1>Practice drills</h1>" +
      '<p class="lead">Short maths problems like the ones that appear inside a case: break-even, solving for an unknown, payback, funnels and unit economics. You have done ' + nDone + " of " + D.drills.length + ".</p>" +
      '<div class="callout"><b>How to use a drill:</b> 1. Read the problem and write the formula. 2. Solve it on paper with a simple calculator and say the steps out loud. 3. Open the hint only if you are stuck. 4. Open the worked answer and compare. 5. Mark it done.</div>' +
      chips +
      list.map(function (d, i) {
        var t = find(types, d.type);
        return '<div class="card drill" id="' + d.id + '"><h3>' + (i + 1) + ". " + h(d.title) + (done[d.id] ? ' <span class="done" title="Done">&#10003;</span>' : "") + "</h3>" +
          '<div><span class="chip">' + h(t ? t.name : d.type) + '</span><span class="chip warn">' + h(d.level) + "</span></div>" +
          "<p>" + h(d.problem) + "</p>" +
          '<div class="qa"><button type="button">Show a hint</button><div class="ans">' + h(d.hint) + "</div></div>" +
          '<div class="qa"><button type="button">Show the worked answer</button><div class="ans"><ol>' + d.steps.map(function (s) { return "<li>" + h(s) + "</li>"; }).join("") + "</ol><p><b>Answer:</b> " + h(d.answer) + "</p><p class=\"muted small\"><b>Interview tip:</b> " + h(d.tip) + "</p></div></div>" +
          '<div class="row"><button type="button" class="ghost mark" data-id="' + d.id + '">' + (done[d.id] ? "Mark as not done" : "Mark as done") + "</button></div></div>";
      }).join("");
    $$(".filters button[data-t]").forEach(function (b) {
      b.addEventListener("click", function () { var t = b.getAttribute("data-t"); location.hash = t === "all" ? "#/casestudies/drills" : "#/casestudies/drills?type=" + t; });
    });
    $$(".drill .qa button").forEach(function (b) { b.addEventListener("click", function () { b.parentNode.classList.toggle("open"); }); });
    $$(".mark").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = store.get("drillsDone", {}), id = b.getAttribute("data-id");
        if (d[id]) delete d[id]; else d[id] = 1;
        store.set("drillsDone", d);
        b.textContent = d[id] ? "Mark as not done" : "Mark as done";
        var head = $("h3", b.closest(".drill")), mark = $(".done", head);
        if (d[id] && !mark) head.insertAdjacentHTML("beforeend", ' <span class="done" title="Done">&#10003;</span>');
        if (!d[id] && mark) mark.remove();
        var lead = $(".lead");
        if (lead) lead.textContent = lead.textContent.replace(/You have done \d+ of/, "You have done " + Object.keys(d).length + " of");
      });
    });
  }

  /* ---------- TEMPLATE ---------- */
  function template() {
    var T = D.template;
    chartSrc.clear = T.clearChart; chartSrc.pick = T.pickChart; chartSrc.metrics = T.metricsChart;
    D.flows.forEach(function (f) { chartSrc["tpl-flow-" + f.id] = f.code; });
    var ws = store.get("ws", {});
    var chk = store.get("chk", {});
    app.innerHTML =
      "<h1>Case template</h1>" +
      '<p class="lead">' + h(T.lead) + "</p>" +
      '<div class="row"><button id="print" class="ghost">Print this page</button></div>' +
      chartBlock("clear", "1. Remember CLEAR", "Five steps in a fixed order. Say them out loud before every case.") +
      table(T.clearTable) +
      chartBlock("pick", "2. Pick the structure", "Match the type of question to the structure, then open the Frameworks page for the full tree.") +
      chartBlock("metrics", "3. Pick the number", "Match the decision to the metric.") +
      table(T.metricsAssumptions) +
      table(T.metricsTable) +
      '<h3>Metric design</h3><p>' + h(T.metricDesign.intro) + "</p>" + table(T.metricDesign.layers) +
      T.metricDesign.examples.map(function (x) { return '<div class="callout"><b>Q: ' + h(x.q) + "</b><br>" + h(x.a) + "</div>"; }).join("") +
      table(T.profitTypes) +
      D.flows.map(function (f, i) { return chartBlock("tpl-flow-" + f.id, (4 + i) + ". " + f.title, f.note); }).join("") +
      "<h2>6. Worksheet</h2><p class=\"muted small\">Fill this in for any practice case. Your notes save in this browser. The sample column shows the Digital Feature case.</p>" +
      '<div class="row"><button id="toggleSample" class="ghost">Hide sample</button><button id="clearWs" class="ghost">Clear my notes</button></div>' +
      '<div class="tablewrap"><table id="ws"><thead><tr><th>CLEAR step</th><th>Your notes</th><th class="sample">Sample</th></tr></thead><tbody>' +
      T.worksheet.map(function (r) {
        return "<tr><td><b>" + h(r[0]) + '</b></td><td><textarea class="ws" data-k="' + r[1] + '" aria-label="' + h(r[0]) + '"></textarea></td><td class="sample muted">' + h(r[2]) + "</td></tr>";
      }).join("") + "</tbody></table></div>" +
      "<h2>7. Answer script</h2><p class=\"muted small\">A reusable way to say each step. Replace the brackets with your own words.</p>" +
      table(T.scriptTable) +
      "<h2>8. Filled example</h2><p class=\"muted small\">" + h(T.exampleTitle) + "</p>" +
      T.example.map(function (e) { return '<div class="callout"><b>' + h(e[0]) + ":</b> " + h(e[1]) + "</div>"; }).join("") +
      "<h2>9. Phrases and rules</h2>" + table(T.phrases) + table(T.rules) +
      "<h2>10. Final check</h2><p class=\"muted small\">Run through this in the last 30 seconds before you answer.</p>" +
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
        return '<a class="card" href="#/casestudies/frameworks/' + f.id + '"><h3>' + h(f.name) + "</h3><p class=\"small muted\">" + h(f.when) + "</p><div>" +
          f.tags.map(function (t) { return '<span class="chip">' + h(trackName(t)) + "</span>"; }).join("") + "</div></a>";
      }).join("") + "</div>";
  }
  function frameworkDetail(id) {
    var f = find(D.frameworks, id);
    if (!f) { app.innerHTML = "<p>Not found. <a href='#/casestudies/frameworks'>Back</a></p>"; return; }
    var related = D.cases.filter(function (c) { return c.framework === f.id; });
    if (f.exampleChart) chartSrc["fw-" + f.id] = f.exampleChart;
    (f.exampleCharts || []).forEach(function (c) { chartSrc["fw-" + f.id + "-" + c.id] = c.code; });
    app.innerHTML =
      '<p><a href="#/casestudies/frameworks">&larr; All frameworks</a></p><h1>' + h(f.name) + "</h1>" +
      '<div class="callout"><b>When to use:</b> ' + h(f.when) + "</div>" +
      (f.tree ?
        "<h2>The structure</h2>" +
        '<div class="row"><button class="ghost" id="hideTree">Quiz me: hide the tree</button></div>' +
        '<div id="treeBox"><ul class="tree">' + tree(f.tree) + "</ul></div>" +
        '<div id="treeQuiz" style="display:none"><p class="muted">Write or sketch the tree on paper. Then reveal it to compare.</p></div>' : "") +
      (f.steps ? "<h2>How to run it</h2><ol class=\"steps\">" + f.steps.map(function (s) { return "<li>" + h(s) + "</li>"; }).join("") + "</ol>" : "") +
      (f.pitfalls ? "<h2>Common pitfalls</h2><ul>" + f.pitfalls.map(function (s) { return "<li>" + h(s) + "</li>"; }).join("") + "</ul>" : "") +
      (f.exampleChart
        ? chartBlock("fw-" + f.id, "Worked example: CLEAR applied", f.example) + table(f.exampleTables[0]) +
          (f.exampleCharts || []).map(function (c) { return chartBlock("fw-" + f.id + "-" + c.id, c.title, c.note); }).join("") +
          f.exampleTables.slice(1).map(table).join("") +
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
    return '<a class="card" href="#/casestudies/cases/' + c.id + '"><h3>' + h(c.title) + (done ? ' <span class="done" title="Completed">&#10003;</span>' : "") + "</h3><div>" +
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
      b.addEventListener("click", function () { var t = b.getAttribute("data-t"); location.hash = t === "all" ? "#/casestudies/cases" : "#/casestudies/cases?track=" + t; });
    });
  }

  function answerBlock(c) {
    var A = c.answer;
    chartSrc["case-" + c.id] = A.exampleChart;
    (A.exampleCharts || []).forEach(function (x) { chartSrc["case-" + c.id + "-" + x.id] = x.code; });
    return chartBlock("case-" + c.id, "Worked answer: CLEAR applied", "The prompt run through Clarify, Lay out, Evaluate, Assess, Recommend.") + table(A.exampleTables[0]) +
      (A.exampleCharts || []).map(function (x) { return chartBlock("case-" + c.id + "-" + x.id, x.title, x.note); }).join("") +
      A.exampleTables.slice(1).map(table).join("") +
      "<h2>What you would say out loud</h2>" + A.speak.map(function (e) { return '<div class="callout"><b>' + h(e[0]) + ":</b> " + h(e[1]) + "</div>"; }).join("") +
      (A.table ? "<h2>Cheat sheet</h2>" + table(A.table) : "");
  }
  function caseDetail(id) {
    var c = find(D.cases, id);
    if (!c) { app.innerHTML = "<p>Not found. <a href='#/casestudies/cases'>Back</a></p>"; return; }
    var fw = find(D.frameworks, c.framework);
    var done = store.get("casesDone", {});
    var rating = store.get("rating:" + id, 0);
    app.innerHTML =
      '<p><a href="#/casestudies/cases">&larr; All cases</a></p><h1>' + h(c.title) + "</h1><div>" +
      c.track.map(function (t) { return '<span class="chip">' + h(trackName(t)) + "</span>"; }).join("") +
      '<span class="chip warn">' + h(c.difficulty) + "</span></div>" +
      "<h2>1. The prompt</h2><div class=\"callout\">" + h(c.prompt) + "</div>" +
      '<div class="row"><span class="timer" id="timer">0:00</span><button id="tStart" class="ghost">Start timer</button><button id="tReset" class="ghost">Reset</button><span class="muted small">Target: ~' + c.minutes + " minutes</span></div>" +
      "<h2>2. Ask clarifying questions</h2><p class=\"muted small\">Click a question to hear the interviewer's answer. In a real interview, ask only what you need.</p>" +
      c.clarify.map(function (x) { return '<div class="qa"><button>' + h(x.q) + '</button><div class="ans">' + h(x.a) + "</div></div>"; }).join("") +
      "<h2>3. Data room</h2><details><summary>Show the data the interviewer shares</summary><div class=\"body\">" + c.tables.map(table).join("") + "</div></details>" +
      "<h2>4. Your structure</h2><p class=\"muted small\">Write your framework before looking at the model. Framework hint: <a href=\"#/casestudies/frameworks/" + c.framework + '">' + h(fw ? fw.name : "") + "</a></p>" +
      '<textarea id="note" aria-label="Your structure and notes" placeholder="Bucket 1... Bucket 2... Hypothesis..."></textarea>' +
      '<div class="row" style="margin-top:8px"><button id="reveal">Reveal model answer</button></div>' +
      '<div id="model" class="sol" style="display:none">' +
      (c.answer ? answerBlock(c) :
      "<h2>Model structure</h2><ul>" + c.structure.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul>" +
      "<h2>Analysis</h2>" + c.analysis.map(function (a, i) { return "<details" + (i === 0 ? " open" : "") + "><summary>" + h(a.h) + '</summary><div class="body">' + a.p + "</div></details>"; }).join("") +
      '<h2>Recommendation</h2><div class="callout">' + h(c.recommendation) + "</div>") +
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
      if (!vis) renderCharts(m);
      this.textContent = vis ? "Reveal model answer" : "Hide model answer";
    });
    var box = $("#doneBox"), sel = $("#rate");
    box.checked = !!done[id]; sel.value = String(rating);
    box.addEventListener("change", function () { var d = store.get("casesDone", {}); if (box.checked) d[id] = Date.now(); else delete d[id]; store.set("casesDone", d); });
    sel.addEventListener("change", function () { store.set("rating:" + id, Number(sel.value)); });
  }

  /* ---------- ESTIMATION ---------- */
  function li(a) { return a.map(function (i) { return "<li>" + h(i) + "</li>"; }).join(""); }
  function guessUS() {
    var G = D.guess;
    chartSrc["g-us"] = G.us.chart;
    var X = G.us;
    var usHtml = chartBlock("g-us", "Full template walkthrough: " + X.title, X.lead) + table(X.segTable) +
      '<div class="callout warn"><b>Note:</b> ' + h(X.segNote) + "</div>" +
      X.secs.map(function (c) {
        return "<h3>" + h(c.h) + "</h3>" + (c.table ? table(c.table) : "") + (c.ul ? "<ul>" + li(c.ul) + "</ul>" : "") +
          (c.say ? '<div class="callout"><b>Say:</b> &ldquo;' + h(c.say) + "&rdquo;</div>" : "") + (c.tip ? '<p class="small muted">Tip: ' + h(c.tip) + "</p>" : "");
      }).join("") +
      "<h3>" + h(X.sampleTitle) + "</h3>" +
      X.sample.map(function (x) { return '<div class="callout"><b>' + h(x[0]) + ":</b> " + h(x[1]) + "</div>"; }).join("");
    return usHtml;
  }
  function guessSimple(key) {
    var T = D.guess[key];
    chartSrc["g-" + key] = T.chart; chartSrc["g-" + key + "-p"] = T.pushChart;
    return chartBlock("g-" + key, "Worked example: " + T.title, T.lead || "Stock and flow: tires in use divided by lifespan, plus tires on new vehicles.") +
      table(T.table) + (T.extraTables || []).map(table).join("") +
      "<h3>Sample answer (spoken)</h3>" + T.sample.map(function (x) { return '<div class="callout"><b>' + h(x[0]) + ":</b> " + h(x[1]) + "</div>"; }).join("") +
      chartBlock("g-" + key + "-p", "Handling pushback", "Adjust one assumption at a time.") + table(T.pushMath);
  }
  function say6(a) { return a.map(function (x) { return '<div class="callout"><b>' + h(x[0]) + ":</b> " + h(x[1]) + "</div>"; }).join(""); }
  function guess330() {
    var X = D.guess.us330;
    chartSrc["g-330"] = X.chart; chartSrc["g-brk"] = X.chartB; chartSrc["g-det"] = X.chartD;
    return "<h2>Numbers breakdown: US population 330M</h2>" +
      chartBlock("g-330", "Where the numbers come from", "Start every US question from 330M and split it. The splits and rates are assumptions you can change.") +
      table(X.split) + table(X.derived) + table(X.how) +
      "<h2>Generic template: break down any number</h2>" +
      chartBlock("g-brk", "Six steps for any number", "Base, groups, rate per group, add, convert the units, sanity check.") + table(X.gen) +
      "<h2>Detailed example: break down any number</h2>" +
      '<p class="muted small">Question: How many pizzas do Americans eat in a year, and what are they worth? All shares, rates and the $15 price are assumptions.</p>' +
      chartBlock("g-det", "Pizzas eaten in the US a year", "Follow the six steps from the template above.") +
      table(X.dg) + table(X.ds) + table(X.dt) + "<h3>What you would say out loud</h3>" + say6(X.dsay) + table(X.dtips);
  }
  function guessScale() {
    var X = D.guess.us330;
    chartSrc["g-scale"] = X.chartS;
    return "<h2>Generic template: scale up or down</h2>" +
      chartBlock("g-scale", "When the interviewer changes a number", "Find the type of input, then scale with one ratio instead of rebuilding.") +
      table(X.ratio) + table(X.base) + table(X.time) + table(X.say);
  }
  function guessTemplate(tabs, sub) {
    var G = D.guess, U = G.universal, S = G.seg, C = G.scaling;
    var subs = [["intro", "Introduction"], ["scaling", "Scaling techniques"], ["template", "Template"], ["numbers", "Numbers breakdown"], ["cheat", "Cheat sheet"]];
    if (!subs.some(function (x) { return x[0] === sub; })) sub = store.get("gtab", "intro");
    if (!subs.some(function (x) { return x[0] === sub; })) sub = "intro";
    store.set("gtab", sub);
    var subBar = '<div class="filters" role="tablist" aria-label="Template sections">' + subs.map(function (t) {
      return '<button type="button" role="tab" class="' + (sub === t[0] ? "on" : "") + '" aria-selected="' + (sub === t[0]) + '" onclick="location.hash=\'#/estimation/template/' + t[0] + '\'">' + t[1] + "</button>";
    }).join("") + "</div>";
    function uStep(x) {
      return "<h3>" + h(x[0]) + "</h3><ul>" + li(x[1]) + "</ul>" + (x[2] ? '<div class="callout"><b>Say:</b> &ldquo;' + h(x[2]) + "&rdquo;</div>" : "");
    }
    var body = "";
    if (sub === "intro") {
      chartSrc["g-scope"] = G.scopeChart; chartSrc["g-pick"] = G.pickChart;
      body = '<p class="lead">' + h(G.lead) + "</p>" +
        chartBlock("g-scope", "The SCOPE method", "Five steps you can say out loud. Use the buttons on the chart to expand, pan, zoom or copy it.") +
        table(G.scopeTable) +
        chartBlock("g-pick", "Pick the approach", "Answer Q1 to Q3 to find the approach, then follow its column to see the formula broken into steps.") +
        '<h2>Where next</h2><div class="row">' + subs.slice(1).map(function (t) {
          return '<a class="btn ghost" href="#/estimation/template/' + t[0] + '">' + t[1] + "</a>";
        }).join("") + "</div>";
    } else if (sub === "scaling") {
      body = "<h2>" + h(C.title) + '</h2><p class="muted small">' + h(C.lead) + "</p>" +
        "<h3>Base case (already built)</h3><ol class=\"steps\">" + li(C.base) + "</ol>" +
        "<h3>Q: &ldquo;" + h(C.q1) + "&rdquo;</h3>" + '<div class="callout"><b>Answer:</b> ' + h(C.a1) + "</div><ul>" + li(C.s1) + "</ul>" +
        "<h3>Second twist: &ldquo;" + h(C.q2) + "&rdquo;</h3>" + '<div class="callout"><b>Answer:</b> ' + h(C.a2) + "</div><p>" + h(C.s2) + "</p>" +
        table(C.ten) + "<h3>Why this works</h3><ol class=\"steps\">" + li(C.why) + "</ol>" +
        '<div class="callout"><b>Say:</b> &ldquo;' + h(C.say) + "&rdquo;</div>" +
        table(C.template) + table(C.convert) + table(C.pop) + table(C.seg) +
        "<h2>Quick adjustment examples</h2>" + table(S.adjust) + guessScale();
    } else if (sub === "template") {
      chartSrc["g-uni"] = U.chart;
      var ws = store.get("gws", {});
      body = "<h2>Worksheet</h2><p class=\"muted small\">Saved in this browser. The grey sample is the tires example.</p>" +
        '<div class="tablewrap"><table><thead><tr><th>Step</th><th>Your answer</th><th>Sample</th></tr></thead><tbody>' +
        G.worksheet.map(function (w) {
          return "<tr><td>" + h(w[0]) + '</td><td><textarea class="ws" data-k="' + w[1] + '" aria-label="' + h(w[0]) + '"></textarea></td><td class="sample small muted">' + h(w[2]) + "</td></tr>";
        }).join("") + "</tbody></table></div>" +
        "<h2>Answer script</h2>" + table(G.scriptTable) +
        "<h2>Sample answer: " + h(G.exampleTitle.replace(/^Filled example: /, "")) + "</h2>" +
        G.example.map(function (x) { return '<div class="callout"><b>' + h(x[0] + " - " + x[1]) + ":</b> " + h(x[2]) + "</div>"; }).join("") +
        chartBlock("g-uni", U.title, U.lead) +
        U.steps.map(uStep).join("") + "<h3>" + h(U.segment.title) + "</h3>" + table(U.segment) + '<p class="small muted">Tip: ' + h(U.segmentTip) + "</p>" +
        U.steps2.map(uStep).join("") +
        "<h3>" + h(U.pushback.title) + "</h3>" + table(U.pushback) + '<div class="callout"><b>Say:</b> &ldquo;' + h(U.pushPhrase) + "&rdquo;</div>" +
        "<h3>Sample answer: " + h(U.miniTitle.replace(/^Mini walkthrough: /, "")) + "</h3><ul>" + li(U.mini) + "</ul>" +
        '<div class="callout"><b>One line to remember:</b> ' + h(U.oneLine) + "</div>" +
        '<p class="small muted">Works for: ' + U.usedFor.map(h).join(", ") + ".</p>" +
        guess330() +
        "<h2>Mistakes to avoid</h2>" + table(G.mistakes) +
        "<h2>Phrases for the interviewer</h2><ul>" + li(S.phrases.map(function (x) { return "“" + x + "”"; })) + "</ul>" +
        "<h2>Key tips for beginners</h2><ol class=\"steps\">" + li(S.tips) + "</ol>" +
        "<h3>More pro tips</h3><ol class=\"steps\">" + li(U.tips) + "</ol>";
    } else if (sub === "numbers") {
      body = "<h2>Handy numbers</h2>" + table(G.numbersTable) +
        "<h2>" + h(S.title) + '</h2><p class="muted small">' + h(S.lead) + "</p>" +
        table(S.examples) + table(S.rates) + '<p class="small muted">' + h(S.ratesNote) + "</p>" +
        "<h3>" + h(S.calcTitle) + "</h3>" + table(S.calc) + '<p class="small muted">Tip: ' + h(S.calcTip) + "</p>" +
        "<h2>" + h(S.packTitle) + '</h2><p class="muted small">' + h(S.packLead) + "</p>" + S.pack.map(table).join("") +
        "<h3>Tips for using the pack</h3><ol class=\"steps\">" + li(S.packTips) + "</ol>";
    } else {
      body = "<h2>" + h(G.cheat.title) + "</h2>" +
        '<div class="callout"><b>Core rule:</b> ' + h(G.cheat.rule) + "</div>" +
        table(G.cheat.pct) + table(G.cheat.scale) +
        "<h3>Fast examples</h3><ul>" + li(G.cheat.examples) + "</ul>" +
        "<h3>Segmentation template</h3><p>" + h(G.cheat.segment) + "</p>" +
        "<h3>Quick structure</h3><ol class=\"steps\">" + li(G.cheat.structure) + "</ol>" +
        "<h3>Rounding rule</h3><ul>" + li(G.cheat.rounding) + "</ul>" +
        "<h3>Power phrases</h3><ul>" + li(G.cheat.phrases.map(function (x) { return "“" + x + "”"; })) + "</ul>" +
        '<div class="callout warn"><b>If stuck, say:</b> &ldquo;' + h(G.cheat.stuck) + "&rdquo;</div>" +
        '<div class="callout"><b>Final memory line:</b> ' + h(G.cheat.final) + "</div>";
    }
    app.innerHTML = "<h1>Estimation (Guesstimates)</h1>" + tabs + subBar + body +
      '<p style="margin-top:20px"><a class="btn" href="#/estimation/examples">Practice with the examples</a></p>';
    $$("textarea[data-k]").forEach(function (ta) {
      var k = ta.getAttribute("data-k");
      ta.value = ws[k] || "";
      ta.addEventListener("input", function () { ws[k] = ta.value; store.set("gws", ws); });
    });
    renderCharts();
  }

  function estimation(p) {
    var sub = p[1] === "examples" ? "examples" : "template";
    var tabs = '<div class="filters" role="tablist" aria-label="Guesstimate sections">' +
      [["template", "Templates"], ["examples", "Examples (" + D.estimation.length + ")"]].map(function (t) {
        return '<button type="button" role="tab" class="' + (sub === t[0] ? "on" : "") + '" aria-selected="' + (sub === t[0]) + '" onclick="location.hash=\'#/estimation/' + t[0] + '\'">' + t[1] + "</button>";
      }).join("") + "</div>";
    if (sub === "template") return guessTemplate(tabs, p[2]);
    var tried = store.get("estTried", {});
    app.innerHTML = "<h1>Estimation (Guesstimates)</h1>" + tabs +
      '<p class="lead">Give yourself 3 minutes. Write your approach and a number, then compare. The approach matters more than the answer.</p>' +
      '<div class="callout"><b>Routine (SCOPE):</b> scope &rarr; choose approach &rarr; organize 3 to 5 inputs &rarr; process the math with units &rarr; examine with a sanity check. <a href="#/estimation/template">Open the template</a></div>' +
      D.estimation.map(function (e) {
        return "<details data-id=\"" + e.id + "\"><summary>" + h(e.q) + (tried[e.id] ? ' <span class="done">&#10003;</span>' : "") + '</summary><div class="body">' +
          '<p class="muted small">Approach hint is hidden. Try it first.</p>' +
          '<label class="small muted" for="est-' + e.id + '">Your estimate and approach</label><textarea id="est-' + e.id + '" style="min-height:90px"></textarea>' +
          '<div class="row" style="margin-top:8px"><button class="reveal">Reveal solution</button></div>' +
          '<div class="sol" style="display:none"><p><b>Approach:</b> ' + h(e.approach) + "</p>" +
          '<div class="tablewrap"><table><thead><tr><th>Step</th><th>Calculation</th><th>Value</th></tr></thead><tbody>' +
          e.steps.map(function (s) { return "<tr><td>" + h(s[0]) + "</td><td>" + h(s[1]) + "</td><td>" + h(s[2]) + "</td></tr>"; }).join("") +
          '</tbody></table></div><div class="callout"><b>Answer:</b> ' + h(e.answer) + "</div><p><b>Sanity check:</b> " + h(e.sanity) + "</p>" + (((D.guess[e.id] && D.guess[e.id].pushChart) ? guessSimple(e.id) : "") + (e.id === "coffee" ? guessUS() : "")) + "</div></div></details>";
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
        if (!vis) renderCharts(s);
        if (!vis) { var t = store.get("estTried", {}); t[id] = 1; store.set("estTried", t); }
      });
    });
    renderCharts();
  }

  /* ---------- PROGRESS ---------- */
  function progress() {
    var done = store.get("casesDone", {}), tried = store.get("estTried", {}), dd = store.get("drillsDone", {});
    function bar(a, b) { return '<div class="bar" role="progressbar" aria-valuenow="' + a + '" aria-valuemin="0" aria-valuemax="' + b + '"><i style="width:' + Math.round(a / b * 100) + '%"></i></div>'; }
    var nc = Object.keys(done).length, ne = Object.keys(tried).length;
    app.innerHTML = "<h1>Progress</h1>" +
      '<div class="grid">' +
      '<div class="card"><div class="stat">' + nc + "/" + D.cases.length + '</div><div class="muted small">cases completed</div>' + bar(nc, D.cases.length) + "</div>" +
      '<div class="card"><div class="stat">' + ne + "/" + D.estimation.length + '</div><div class="muted small">guesstimate examples attempted</div>' + bar(ne, D.estimation.length) + "</div>" +
      '<div class="card"><div class="stat">' + Object.keys(dd).length + "/" + (D.drills || []).length + '</div><div class="muted small">practice drills done</div>' + bar(Object.keys(dd).length, (D.drills || []).length || 1) + "</div>" +
      '</div>' +
      "<h2>Cases</h2>" + D.cases.map(function (c) {
        var r = store.get("rating:" + c.id, 0);
        return '<p><a href="#/casestudies/cases/' + c.id + '">' + h(c.title) + "</a> " + (done[c.id] ? '<span class="done">&#10003; done</span>' : '<span class="muted">not yet</span>') + (r ? ' <span class="muted small">self-rating ' + r + "/5</span>" : "") + "</p>";
      }).join("") +
      '<h2>Reset</h2><p class="muted small">Clears notes and progress stored in this browser.</p><button id="reset" class="ghost">Reset all progress</button>';
    $("#reset").addEventListener("click", function () { if (confirm("Reset all progress and notes?")) { store.clearAll(); progress(); } });
  }

  route();
})();
