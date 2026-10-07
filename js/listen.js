/* Listen: read answers aloud with the browser's built-in voice. No audio files. */
(function () {
  "use strict";
  var S = window.speechSynthesis;
  if (!S || typeof SpeechSynthesisUtterance === "undefined") return;
  var app = document.getElementById("app");
  if (!app) return;

  var prefs = { rate: 1, voice: "" };
  try { var p = JSON.parse(localStorage.getItem("cip:listen")); if (p) { prefs.rate = +p.rate || 1; prefs.voice = p.voice || ""; } } catch (e) {}
  function save() { try { localStorage.setItem("cip:listen", JSON.stringify(prefs)); } catch (e) {} }

  /* ---------- text cleanup so numbers sound natural ---------- */
  function speakable(t) {
    return t
      .replace(/\s+/g, " ")
      .replace(/~/g, "about ")
      .replace(/(\d)\s*[xX]\s+(?=[\d$])/g, "$1 times ")
      .replace(/\s[xX]\s/g, " times ")
      .replace(/(\d)\s*\/\s*(?=[\d$])/g, "$1 divided by ")
      .replace(/\s\/\s/g, " divided by ")
      .replace(/\s=\s/g, " equals ")
      .replace(/\$(\d[\d,.]*)\s*B\b/g, "$1 billion dollars")
      .replace(/\$(\d[\d,.]*)\s*M\b/g, "$1 million dollars")
      .replace(/\$(\d[\d,.]*)\s*K\b/g, "$1 thousand dollars")
      .replace(/(\d)\s*B\b/g, "$1 billion")
      .replace(/(\d)\s*M\b/g, "$1 million")
      .replace(/(\d)\s*K\b/g, "$1 thousand")
      .replace(/%/g, " percent")
      .replace(/->|→/g, " to ")
      .replace(/\+(?=\d)/g, "plus ")
      .replace(/\^/g, " to the power of ");
  }
  function chunks(t) {
    var out = [], s = speakable(t).match(/[^.!?]+[.!?]*\s*/g) || [t];
    var cur = "";
    s.forEach(function (x) {
      if ((cur + x).length > 180 && cur) { out.push(cur); cur = x; } else cur += x;
    });
    if (cur.trim()) out.push(cur);
    return out;
  }

  /* ---------- playback ---------- */
  var queue = [], idx = 0, playing = null, token = 0;
  function voiceObj() {
    var vs = S.getVoices();
    for (var i = 0; i < vs.length; i++) if (vs[i].name === prefs.voice) return vs[i];
    return null;
  }
  function mark(el, on) { if (el) el.classList.toggle("listening", on); }
  function stop() {
    token++; S.cancel(); queue = []; idx = 0;
    if (playing) mark(playing, false);
    playing = null; bar.hidden = true; pp.textContent = "Pause";
    document.querySelectorAll(".listen-btn.on").forEach(function (b) { b.classList.remove("on"); b.textContent = b.getAttribute("data-label"); });
  }
  /* items: [{text, el}] */
  function play(items, btn) {
    stop();
    var my = token;
    queue = [];
    items.forEach(function (it) { chunks(it.text).forEach(function (c) { queue.push({ t: c, el: it.el }); }); });
    if (!queue.length) return;
    if (btn) { btn.classList.add("on"); btn.textContent = "Stop"; }
    bar.hidden = false;
    (function next() {
      if (my !== token) return;
      if (idx >= queue.length) { stop(); return; }
      var q = queue[idx++];
      if (playing !== q.el) { mark(playing, false); playing = q.el; mark(playing, true); if (q.el && q.el.scrollIntoView && idx > 1) q.el.scrollIntoView({ block: "center", behavior: "smooth" }); }
      var u = new SpeechSynthesisUtterance(q.t);
      u.rate = prefs.rate; var v = voiceObj(); if (v) { u.voice = v; u.lang = v.lang; }
      u.onend = next; u.onerror = function (e) { if (e.error !== "canceled" && e.error !== "interrupted") next(); };
      S.speak(u);
    })();
  }

  /* ---------- floating control bar ---------- */
  var bar = document.createElement("div");
  bar.className = "listenbar"; bar.hidden = true; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Listen controls");
  bar.innerHTML = '<span class="lb-title">Listening</span><button type="button" class="ghost" id="lb-pp">Pause</button><button type="button" class="ghost" id="lb-st">Stop</button>' +
    '<label>Speed <select id="lb-sp"><option>0.75</option><option>1</option><option>1.25</option><option>1.5</option></select></label>' +
    '<label>Voice <select id="lb-vc"></select></label>';
  document.body.appendChild(bar);
  var pp = bar.querySelector("#lb-pp"), sp = bar.querySelector("#lb-sp"), vc = bar.querySelector("#lb-vc");
  sp.value = String(prefs.rate);
  function fillVoices() {
    var v = S.getVoices().filter(function (x) { return /^en/i.test(x.lang); });
    vc.innerHTML = '<option value="">Default voice</option>' + v.map(function (x) { return '<option value="' + x.name.replace(/"/g, "&quot;") + '">' + x.name + " (" + x.lang + ")</option>"; }).join("");
    vc.value = prefs.voice;
    if (vc.value !== prefs.voice) vc.value = "";
  }
  fillVoices(); S.onvoiceschanged = fillVoices;
  pp.onclick = function () { if (S.paused) { S.resume(); pp.textContent = "Pause"; } else { S.pause(); pp.textContent = "Resume"; } };
  bar.querySelector("#lb-st").onclick = stop;
  sp.onchange = function () { prefs.rate = +sp.value; save(); restartHere(); };
  vc.onchange = function () { prefs.voice = vc.value; save(); restartHere(); };
  function restartHere() { /* apply new speed or voice from the current line */
    if (!queue.length) return;
    var rest = queue.slice(Math.max(0, idx - 1)), my = ++token; S.cancel(); queue = rest; idx = 0;
    (function next() {
      if (my !== token) return;
      if (idx >= queue.length) { stop(); return; }
      var q = queue[idx++]; var u = new SpeechSynthesisUtterance(q.t);
      u.rate = prefs.rate; var v = voiceObj(); if (v) { u.voice = v; u.lang = v.lang; }
      u.onend = next; u.onerror = function (e) { if (e.error !== "canceled" && e.error !== "interrupted") next(); };
      S.speak(u);
    })();
  }
  window.addEventListener("hashchange", stop);
  window.addEventListener("pagehide", stop);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !bar.hidden) stop(); });

  /* ---------- add Listen buttons ---------- */
  function mk(label, aria, onclick) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "ghost listen-btn"; b.textContent = label;
    b.setAttribute("data-label", label); b.setAttribute("aria-label", aria || label);
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      if (b.classList.contains("on")) { stop(); return; }
      play(onclick(), b);
    });
    return b;
  }
  function txt(el) { return (el.textContent || "").replace(/\s+/g, " ").trim(); }

  function decorate() {
    /* spoken-answer callouts: <div class="callout"><b>Label:</b> text */
    var groups = [];
    app.querySelectorAll(".callout:not([data-ls])").forEach(function (c) {
      var b = c.firstElementChild;
      if (!b || b.tagName !== "B") return;
      var label = txt(b);
      if (!/:$/.test(label) && !/^Q:/.test(label)) return;
      if (/^(Answer|How to use|Tip|Note|Remember)/i.test(label)) return;
      c.setAttribute("data-ls", "1");
      var btn = mk("Listen", "Listen to this part", function () { return [{ text: stripBtn(c).replace(/^([A-Z]): /, "$1, "), el: c }]; });
      btn.classList.add("small"); c.appendChild(btn);
    });
    /* "Listen to all" next to spoken-answer headings */
    app.querySelectorAll("h2:not([data-lg]),h3:not([data-lg])").forEach(function (hd) {
      if (!/(say out loud|spoken|Sample answer|clarifying)/i.test(txt(hd))) return;
      var els = [], n = hd.nextElementSibling;
      while (n && (n.classList.contains("callout") || n.classList.contains("qa") || (n.tagName === "P" && n.classList.contains("small") && !els.length))) {
        if (!n.classList.contains("small")) els.push(n);
        n = n.nextElementSibling;
      }
      if (els.length < 2) return;
      hd.setAttribute("data-lg", "1");
      var btn = mk("Listen to all", "Listen to all of this section", function () {
        return els.map(function (e) {
          var isQa = e.classList.contains("qa");
          var t = isQa ? txt(e.querySelector("button")) + ". " + txt(e.querySelector(".ans")) : stripBtn(e);
          return { text: t, el: e };
        });
      });
      hd.insertAdjacentElement("afterend", wrap(btn));
    });
    /* clarifying questions and drill hints/answers: .qa */
    app.querySelectorAll(".qa:not([data-ls])").forEach(function (q) {
      var qb = q.querySelector("button"), a = q.querySelector(".ans");
      if (!qb || !a) return;
      q.setAttribute("data-ls", "1");
      var inDrill = q.closest(".drill");
      var btn = mk("Listen", "Listen to this answer", function () {
        return [{ text: (inDrill ? "" : txt(qb) + ". ") + txt(a), el: q }];
      });
      btn.classList.add("small"); btn.classList.add("qa-listen");
      q.appendChild(btn);
    });
    /* whole drill */
    app.querySelectorAll(".card.drill:not([data-ld])").forEach(function (d) {
      d.setAttribute("data-ld", "1");
      var h3 = d.querySelector("h3"), prob = d.querySelector("p"), qas = d.querySelectorAll(".qa");
      var btn = mk("Listen to problem and answer", "Listen to this drill", function () {
        var steps = qas[1] ? qas[1].querySelector(".ans") : null;
        var items = [{ text: txt(h3).replace(/^\d+\.\s*/, "") + ". " + txt(prob), el: d }];
        if (steps) items.push({ text: "Worked answer. " + stepsText(steps), el: d });
        return items;
      });
      var row = d.querySelector(".row"); if (row) row.appendChild(btn); else d.appendChild(wrap(btn));
    });
    /* guesstimate solutions */
    app.querySelectorAll("details[data-id] .sol:not([data-ls])").forEach(function (s) {
      s.setAttribute("data-ls", "1");
      var btn = mk("Listen to the solution", "Listen to this solution", function () {
        var parts = [], p0 = s.querySelector("p");
        if (p0) parts.push({ text: txt(p0), el: p0 });
        s.querySelectorAll("tbody tr").forEach(function (tr, i) {
          if (tr.closest("table") !== s.querySelector("table")) return;
          var td = tr.querySelectorAll("td"); if (td.length < 3) return;
          parts.push({ text: txt(td[1]) ? txt(td[0]) + ": " + txt(td[1]) + ", which gives " + txt(td[2]) + "." : txt(td[0]) + " is " + txt(td[2]) + ".", el: tr });
        });
        var ans = s.querySelector(".callout"); if (ans) parts.push({ text: txt(stripBtn(ans)), el: ans });
        return parts;
      });
      s.insertBefore(wrap(btn), s.firstChild);
    });
  }
  function stripBtn(el) { var c = el.cloneNode(true); c.querySelectorAll(".listen-btn").forEach(function (b) { b.remove(); }); return c.textContent.replace(/\s+/g, " ").trim(); }
  function stepsText(ans) { return stripBtn(ans); }
  function wrap(b) { var d = document.createElement("div"); d.className = "listen-row"; d.appendChild(b); return d; }

  var pending = false;
  new MutationObserver(function () {
    if (pending) return; pending = true;
    requestAnimationFrame(function () { pending = false; try { decorate(); } catch (e) {} });
  }).observe(app, { childList: true, subtree: true });
  try { decorate(); } catch (e) {}
})();
