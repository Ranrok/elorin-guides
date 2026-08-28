# elorin-guides

A two page static site for **Elorin RSPS**, a pre-EOC RuneScape private server.
`index.html` is a day one roadmap the reader ticks off; `tips.html` is a tips & tricks
reference. It is written for one player, in the second person - not for a group - even
though the link gets sent to several people.

## Hard rules

**No build step.** No bundler, no npm, no server, no framework. Plain HTML, CSS and
vanilla JS. Every file must work by double-clicking it.

**Every path is relative.** This deploys to GitHub Pages as a *project* site, served from
`https://<user>.github.io/elorin-guides/`. A leading slash 404s. Write `assets/site.css`
and `js/app.js`, never `/assets/site.css`.

**`.nojekyll` at the repo root stays.** Do not delete or edit it.

**Bump `?v=` when you change a CSS or JS file.** GitHub Pages serves everything with
`Cache-Control: max-age=600`, so a reader who already has the page cached keeps seeing
the old content for up to ten minutes after a push. Both pages therefore load their
local CSS and JS with a version query string - `js/roadmap-data.js?v=2`. Raise that
number, in *both* `index.html` and `tips.html` at once so the two pages never disagree
about which `app.js` they want, in the same commit as any change to `assets/elorin.css`,
`assets/site.css`, `js/app.js`, `js/roadmap-data.js` or `js/tips-data.js`. A query
string is still a relative path and still works from a double-clicked file.

**Never reference anything inside `.claude/` from a page.** Assets are copied out into
`assets/`.

## The design system

`.claude/skills/elorin-rsps-design/` is the authoritative design system. **Do not modify
it.** Read `SKILL.md` and then `readme.md` in that folder before making any visual change.

Two things from that readme govern this repo:

- **The vanilla CSS is the source of truth.** The `.jsx` and `.d.ts` files in the skill
  are a reference implementation for a possible future framework move. They are not wired
  into anything. Ignore them.
- **Use `dist/elorin.css`**, the single concatenated stylesheet, not `styles.css` (which
  chains eleven serialised `@import`s and flashes unstyled on a cold load).

Colours, fonts, spacing values and component classes all come from that system. Do not
invent a hex value, do not add a CSS framework, and do not improvise a component the
system does not define — ask first.

### Files copied out of the skill

These are copies. If the skill is updated, re-copy them; do not hand-edit them here.

| In this repo | Copied from |
| --- | --- |
| `assets/elorin.css` | `dist/elorin.css` |
| `assets/elorin-logo.png` | `assets/elorin-logo.png` |
| `assets/favicon.ico` | `assets/favicon.ico` |

`assets/site.css` is the only stylesheet written for this repo. It holds page-level
layout glue only — hero block, section grid, list padding, stacking context, and the
per-glyph mask sources the design system does not ship for static HTML. It defines no
colours and overrides no component. Keep it that way.

Fonts are never bundled. Both pages carry the preconnect and stylesheet `<link>`s for
Cinzel, Inter and JetBrains Mono in the head, exactly as the readme specifies.

### Diary tiers

Diary tiers in the data are `easy`, `medium`, `hard`, `elite`, `master` — five tiers,
each with its own tone. The mapping lives in `DIARY_TONES` at the top of `js/app.js`:

| Tier | Tone | Class |
| --- | --- | --- |
| `easy` | green | `el-badge--easy` |
| `medium` | amber | `el-badge--medium` |
| `hard` | red | `el-badge--hard` |
| `elite` | purple | `el-badge--elite` |
| `master` | gold | `el-badge--gold` |

`master` takes gold because gold at the top of a ramp is the system's own idiom — it is
what `--rarity-mega-rare` does above `--rarity-very-rare` on the drop-table ramp. Every
one of these is a tone the system already ships; no new CSS and no new hex value was
added for this.

Each tier renders as a chip **inline after the step text**, inside the `.el-check__label`,
so a step and the diary task it completes read as one line. The tier name is printed
inside the chip, so no tier is signalled by colour alone, and each chip carries an
`aria-label` of the form "Easy diary" so it is not a bare word out of context.

Adding a sixth tier means adding an entry to `DIARY_TONES` and nothing else. An unknown
tier string in the data is skipped rather than rendered.

**Only tag a tier when the diary explicitly lists that task.** The chip is a promise that
ticking the row ticks that diary entry, so never infer one because a step looks like it
ought to count. Claiming votes, for instance, is *not* a diary task — buying from the vote
shop is.

## Architecture

**Content lives in data files. Nothing else.** The whole point of this repo is that
roadmap steps get added, removed and reworded constantly without anyone touching HTML or
JS logic.

```
index.html   roadmap page   -> reads ROADMAP from js/roadmap-data.js
tips.html    tips page      -> reads TIPS   from js/tips-data.js
js/app.js    all rendering and progress logic, shared by both pages
```

`app.js` looks for `[data-roadmap]` and `[data-tips]` mount points and renders whichever
it finds, so both pages load the same script.

### Progress storage

Roadmap ticks are saved to `localStorage` under the key `elorin.roadmap.v1`, as a flat
object of `{ "<step id>": true }`.

- **Progress is keyed on `step.id` only** — never on array index, never on the step text.
  Adding, deleting, reordering or rewording a step must never disturb another step's tick.
- **Saved ids no longer present in `ROADMAP` are ignored silently and left in storage.**
  A step deleted today and pasted back next week keeps its ticks. Do not add pruning.
- Reset clears only the ids currently in `ROADMAP`, for the same reason.
- All storage access is wrapped in try/catch. Private browsing and disabled storage must
  degrade to a working-but-unsaved page, never to an error.
- `app.js` warns to the console on duplicate step ids. Keep that warning.

If you ever change the storage shape, bump the key to `.v2` rather than migrating.

### Rendering

Every node is built with `createElement` and `textContent`. **Nothing from the data files
is ever parsed as HTML.** Do not switch to `innerHTML`.

Tips points render uniformly - same colour, same weight. There is no emphasis treatment,
by request: one line in a different colour reads as a mistake rather than as a signal.

## Voice

The design system's content rules apply to every string in the data files: second person
imperative, in-game terminology left unexplained, concrete numbers, sentence case, no
marketing fluff, no emoji. Metadata is uppercase mono in square brackets — `[ 12 OF 28
COMPLETE ]`, `[ PART 01 ]` — and the brackets are part of the style, not decoration.

Cinzel has no lowercase. Write headings in sentence case and let the face do the caps
mix. Never apply `text-transform: uppercase` to a Cinzel heading.
