/* ==========================================================================
   APP LOGIC
   --------------------------------------------------------------------------
   You should not need to edit this file to change any content. Roadmap steps
   live in roadmap-data.js, tips live in tips-data.js.

   What this does:
     - renders the roadmap from ROADMAP into [data-roadmap], if that element
       and that array both exist
     - renders the tips from TIPS into [data-tips], same deal
     - saves and restores roadmap ticks in localStorage, keyed on step id

   Progress is stored as a flat object of { "<step id>": true }. Ids that are
   in storage but no longer in ROADMAP are left alone and ignored on render,
   so deleting a step never destroys anyone's other ticks and never throws.

   Every node here is built with createElement and textContent, so nothing in
   the data files is ever parsed as HTML.
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "elorin.roadmap.v1";

  /* Diary tier -> the design system badge tone that carries it. Five tiers,
     five distinct tones, all of them tones the system already ships:

       easy    green    el-badge--easy
       medium  amber    el-badge--medium
       hard    red      el-badge--hard
       elite   purple   el-badge--elite
       master  gold     el-badge--gold

     Master takes gold because gold at the top of a ramp is the system's own
     idiom - it is what --rarity-mega-rare does above --rarity-very-rare on the
     drop-table ramp.

     The tier name is always printed inside the chip, so no tier is signalled
     by colour alone. Adding a sixth tier means adding a line here and nothing
     else; an unknown tier string in the data is skipped rather than rendered. */
  var DIARY_TONES = {
    easy: { label: "Easy", cls: "el-badge--easy" },
    medium: { label: "Medium", cls: "el-badge--medium" },
    hard: { label: "Hard", cls: "el-badge--hard" },
    elite: { label: "Elite", cls: "el-badge--elite" },
    master: { label: "Master", cls: "el-badge--gold" }
  };

  /* ---------------------------------------------------------------- utils */

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null && text !== "") node.textContent = text;
    return node;
  }

  function pct(done, total) {
    return total > 0 ? Math.round((done / total) * 100) : 0;
  }

  /* --------------------------------------------------------------- storage */

  function loadProgress() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
      return parsed;
    } catch (err) {
      /* Private browsing, disabled storage, corrupt JSON. Start clean rather
         than breaking the page - the list still works, it just will not save. */
      return {};
    }
  }

  function saveProgress(progress) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (err) {
      /* Nothing useful to do. The page keeps working for this session. */
    }
  }

  /* ------------------------------------------------------------ components */

  function progressBar(thin) {
    var wrap = make("div", "el-progress" + (thin ? " el-progress--thin" : ""));
    var track = make("div", "el-progress__track");
    var fill = make("div", "el-progress__fill");
    fill.style.width = "0%";
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-valuemin", "0");
    track.appendChild(fill);
    wrap.appendChild(track);
    wrap.track = track;
    wrap.fill = fill;
    return wrap;
  }

  /* Returns the diary chips for a step, to sit inline after the step text.
     Null when the step is not a diary task. Unknown tier strings are skipped. */
  function diaryBadges(tiers) {
    var known = [];
    var i;
    for (i = 0; i < tiers.length; i++) {
      if (DIARY_TONES[tiers[i]]) known.push(DIARY_TONES[tiers[i]]);
    }
    if (!known.length) return null;

    var frag = document.createDocumentFragment();
    for (i = 0; i < known.length; i++) {
      var badge = make("span", "el-badge " + known[i].cls + " diary-chip", known[i].label);
      /* Spoken as "Easy diary", so the chip is not a bare word out of context
         for anyone on a screen reader. */
      badge.setAttribute("aria-label", known[i].label + " diary");
      frag.appendChild(badge);
    }
    return frag;
  }

  /* ------------------------------------------------------------- roadmap */

  function renderRoadmap(mount) {
    var progress = loadProgress();
    var seenIds = {};
    var sections = [];
    var inputs = [];

    ROADMAP.forEach(function (section, sectionIndex) {
      var steps = section.steps || [];

      var card = make("section", "el-section");
      card.id = "section-" + section.id;

      var head = make("div", "el-section__head");
      head.appendChild(make(
        "span",
        "el-section__label",
        "[ Part " + ("0" + (sectionIndex + 1)).slice(-2) + " ]"
      ));
      head.appendChild(make("h2", "el-section__title", section.title));

      var ratio = make("span", "el-section__ratio", "0/" + steps.length);
      head.appendChild(ratio);

      if (section.desc) head.appendChild(make("p", "el-section__desc", section.desc));

      var bar = progressBar(true);
      bar.track.setAttribute("aria-valuemax", String(steps.length));
      bar.track.setAttribute("aria-valuenow", "0");
      bar.track.setAttribute("aria-label", section.title + " progress");
      var barSlot = make("div", "el-section__bar");
      barSlot.appendChild(bar);
      head.appendChild(barSlot);
      card.appendChild(head);

      var body = make("div", "el-section__body");
      var sectionInputs = [];

      steps.forEach(function (step) {
        if (seenIds[step.id]) {
          /* Loud on purpose. Two rows sharing an id tick together, which is
             almost never what you meant when you copy-pasted a step. */
          window.console.warn(
            "Elorin roadmap: duplicate step id \"" + step.id +
            "\". Ids must be unique across the whole file - these rows will tick together."
          );
        }
        seenIds[step.id] = true;

        var row = make("div", "el-check");
        var domId = "step-" + step.id;

        var input = make("input", "el-check__input");
        input.type = "checkbox";
        input.id = domId;
        input.checked = !!progress[step.id];

        var label = make("label", "el-check__label");
        label.htmlFor = domId;
        label.appendChild(make("span", "el-check__title", step.text));

        /* Diary chips sit inline right after the step text, not on a line of
           their own - a step and the diary task it completes read as one thing. */
        var badges = diaryBadges(step.diary || []);
        if (badges) label.appendChild(badges);

        row.appendChild(input);
        row.appendChild(label);

        if (step.note) row.appendChild(make("p", "el-check__desc", step.note));

        input.addEventListener("change", function () {
          if (input.checked) {
            progress[step.id] = true;
          } else {
            delete progress[step.id];
          }
          saveProgress(progress);
          paint();
        });

        body.appendChild(row);
        sectionInputs.push(input);
        inputs.push(input);
      });

      card.appendChild(body);
      mount.appendChild(card);

      sections.push({ card: card, ratio: ratio, bar: bar, inputs: sectionInputs });
    });

    /* Sticky overall header */
    var overallFill = document.querySelector("[data-overall-fill]");
    var overallTrack = document.querySelector("[data-overall-track]");
    var overallCount = document.querySelector("[data-overall-count]");
    var resetBtn = document.querySelector("[data-reset]");

    if (overallTrack) overallTrack.setAttribute("aria-valuemax", String(inputs.length));

    function paint() {
      var done = 0;

      sections.forEach(function (section) {
        var n = 0;
        section.inputs.forEach(function (input) {
          if (input.checked) n++;
        });
        done += n;

        section.ratio.textContent = n + "/" + section.inputs.length;
        section.bar.fill.style.width = pct(n, section.inputs.length) + "%";
        section.bar.track.setAttribute("aria-valuenow", String(n));
        section.card.classList.toggle(
          "el-section--complete",
          section.inputs.length > 0 && n === section.inputs.length
        );
      });

      if (overallFill) overallFill.style.width = pct(done, inputs.length) + "%";
      if (overallTrack) overallTrack.setAttribute("aria-valuenow", String(done));
      if (overallCount) {
        overallCount.textContent = "[ " + done + " of " + inputs.length + " complete ]";
      }
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        var ok = window.confirm("Clear every tick on this device? This cannot be undone.");
        if (!ok) return;
        inputs.forEach(function (input) {
          input.checked = false;
        });
        /* Only clears ids this page knows about. Anything else in storage is
           left alone, same as on render. */
        ROADMAP.forEach(function (section) {
          (section.steps || []).forEach(function (step) {
            delete progress[step.id];
          });
        });
        saveProgress(progress);
        paint();
      });
    }

    paint();
  }

  /* ---------------------------------------------------------------- tips */

  function renderTips(mount) {
    TIPS.forEach(function (entry) {
      var points = entry.points || [];

      var card = make("section", "el-section");

      var head = make("div", "el-section__head");
      head.appendChild(make("h2", "el-section__title", entry.skill));
      card.appendChild(head);

      var body = make("div", "el-section__body");
      /* One padded wrapper holds the bullets, the table and the image, so they
         all share a gutter no matter which of them a card actually has. */
      var inner = make("div", "tips-body");

      /* points sit above the table, after sits below it. */
      if (points.length) inner.appendChild(tipsList(points));
      if (entry.table) inner.appendChild(tipsTable(entry.table));
      if (entry.after && entry.after.length) inner.appendChild(tipsList(entry.after));
      if (entry.figure) inner.appendChild(tipsFigure(entry.figure));

      body.appendChild(inner);
      card.appendChild(body);
      mount.appendChild(card);
    });
  }

  /* A bulleted list of points. Every point renders the same - there is no
     emphasis treatment, since one line in a different colour reads as a
     mistake rather than as a signal. */
  function tipsList(points) {
    var list = make("ul", "el-check__subs tips-list");
    points.forEach(function (point) {
      var item = make("li");
      item.appendChild(make("span", null, point.text));
      list.appendChild(item);
    });
    return list;
  }

  /* Optional table on a tips card. Uses the design system's data table, which
     brings the sticky head, zebra rows and hover with it. */
  function tipsTable(spec) {
    var wrap = make("div", "el-table-wrap");
    var table = make("table", "el-table");

    if (spec.caption) table.appendChild(make("caption", null, spec.caption));

    var head = spec.head || [];
    if (head.length) {
      var thead = make("thead");
      var hrow = make("tr");
      head.forEach(function (label) {
        var th = make("th", null, label);
        th.setAttribute("scope", "col");
        hrow.appendChild(th);
      });
      thead.appendChild(hrow);
      table.appendChild(thead);
    }

    var tbody = make("tbody");
    (spec.rows || []).forEach(function (cells) {
      var tr = make("tr");
      cells.forEach(function (cell) {
        tr.appendChild(make("td", null, cell));
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    wrap.appendChild(table);
    return wrap;
  }

  /* Optional image on a tips card. src is always a relative path. */
  function tipsFigure(spec) {
    var fig = make("figure", "el-figure tips-figure");

    var media = make("div", "el-figure__media");
    var img = make("img");
    img.src = spec.src;
    img.alt = spec.alt || "";
    img.loading = "lazy";
    media.appendChild(img);
    fig.appendChild(media);

    if (spec.caption) {
      fig.appendChild(make("figcaption", "el-figure__caption", spec.caption));
    }
    return fig;
  }

  /* ----------------------------------------------------------------- boot */

  function boot() {
    var roadmapMount = document.querySelector("[data-roadmap]");
    if (roadmapMount && typeof ROADMAP !== "undefined") renderRoadmap(roadmapMount);

    var tipsMount = document.querySelector("[data-tips]");
    if (tipsMount && typeof TIPS !== "undefined") renderTips(tipsMount);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
