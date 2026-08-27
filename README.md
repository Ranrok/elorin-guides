# Elorin guides

Two pages for my run on **Elorin RSPS**.

- **`index.html`** — the day one roadmap. Tick things off as you go. Progress saves in
  your own browser.
- **`tips.html`** — tips & tricks, one card per skill.

No build step, no install, nothing to run. Open `index.html` in a browser and it works.

## Editing the content

This is the whole point of how the site is put together: **you never have to touch the
HTML or the JavaScript to change what the pages say.**

### Roadmap steps

Edit **`js/roadmap-data.js`**. It is one plain array with a long comment at the top
explaining the shape. A step looks like this:

```js
{
  id:    "tan-leather",       // stable - see below
  text:  "Tan some leather",  // the tickable line
  note:  "Cheap Crafting xp.",// optional, one short line, shown smaller underneath
  diary: ["easy"]             // "easy", "medium", "hard", "elite", "master"
}
```

Save the file, reload the page, done.

### Tips

Edit **`js/tips-data.js`**. One entry per skill:

```js
{
  skill: "Herblore",
  points: [
    { text: "66 for super restores." },
    { text: "Clean herbs while you do something else." }
  ]
}
```

Do not put HTML tags in a `text` string — they are escaped, not rendered, so they would
show up literally on the page. Every point renders in the same colour and weight; there
is deliberately no way to make one line stand out.

### The one rule about ids

A step's `id` is what its tick is saved under. So:

| Change | Effect on saved progress |
| --- | --- |
| Add a step | Nothing else is touched |
| Delete a step | Nothing else is touched |
| Reorder steps or sections | Nothing at all |
| Move a step to another section | Nothing, as long as the id goes with it |
| Reword `text` or `note` | Nothing |
| **Change an `id`** | **That one step reads as unticked for everyone** |

So: reword freely, but do not rename ids to tidy them up. Ids must be unique across the
whole file — if you duplicate one, the browser console tells you and the two rows tick
together.

Ids in storage that no longer exist in the file are ignored and left alone, so a step you
delete and paste back later keeps its ticks.

## Progress

Ticks live in `localStorage` under `elorin.roadmap.v1`, per browser and per device.

- Nobody can see or wipe anyone else's list.
- Clearing your browser data clears the list.
- Opening the page on your phone starts a fresh one.
- **Reset** in the sticky header clears every tick on that device, after a confirm.

## Layout

```
index.html            roadmap page
tips.html             tips page
assets/
  elorin.css          the Elorin design system, copied from the skill's dist/
  site.css            page layout glue written for this repo
  elorin-logo.png
  favicon.ico
js/
  roadmap-data.js     <- roadmap content
  tips-data.js        <- tips content
  app.js              rendering and progress logic, shared by both pages
CLAUDE.md             notes for Claude Code
.nojekyll             tells GitHub Pages to serve the files as-is
```

## Deploying

Push to GitHub, then Settings → Pages → deploy from the `main` branch, root folder. It
serves at `https://<user>.github.io/elorin-guides/`.

Every path in the site is relative, so it works both from that subpath and from a local
file. Keep it that way — a leading slash anywhere will 404 on Pages.

## Design

The look comes from the Elorin RSPS design system in
`.claude/skills/elorin-rsps-design/`. `assets/elorin.css` is a copy of that system's
built stylesheet. Don't edit it here, and don't add another CSS framework — see
`CLAUDE.md`.

Not affiliated with Jagex Ltd.
