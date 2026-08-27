# Elorin RSPS Design System

Player-facing design system for **Elorin RSPS**, a pre-EOC RuneScape private server with
mixed-revision data, OSRS content woven in, and custom bosses, raids and minigames.

This system exists for the **documentation surface**: static guide pages on Cloudflare
Pages, starting with an interactive "Starting Out" checklist players tick off to track
their own progress, and growing into a wiki of boss guides, skilling methods and drop
tables. It has to read as a direct extension of the main site at **elorin.org**, so the
site's chrome is recreated here too.

Dark only. There is no light mode and no plan for one.

## Which layer is canonical

**The vanilla CSS is the source of truth.** `dist/elorin.css` (or the modular
`styles.css` graph it is built from) plus the `el-` prefixed class names are what the
guide pages consume. That is the layer to edit.

The 22 `.jsx` components and their `.d.ts` files are a **reference implementation**, kept
for a possible later move to Astro or another component framework. They are not wired
into any build here. If you change a component's look, change the CSS; do not expect an
edit to `Button.jsx` to affect anything you ship.

Two ways to consume the styles:

| Use | File | Requests |
| --- | --- | --- |
| Production pages | `dist/elorin.css` | 1 |
| Local editing | `styles.css` | 11 serialised `@import`s |

Rebuild the bundle after editing any source CSS: `bash dist/build.sh`.

Fonts are never bundled. Put this in every page head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap">
```

---

## Sources used

| Source | What it gave |
| --- | --- |
| `uploads/elorin-homepage-reference.png` (copy: `assets/reference/`) | The only visual reference - pre-launch homepage: header, countdown, hero lockup, hero type, CTA pair, three concept-art cards |
| `uploads/elorin-logo.png` (copy: `assets/elorin-logo.png`) | The real logo, 640×280 PNG with transparency |
| `uploads/favicon.ico` (copy: `assets/favicon.ico`) | Favicon |
| Written brief (in chat) | Exact gold values from the live site's gradient definitions, type stack, shape/motion rules, component inventory, accessibility and voice rules |

**No code and no Figma file were supplied**, and `https://elorin.org` was not reachable
when this system was built, so nothing here was read from the live site's source. Gold
values are exact (given in the brief). Navy, grey and semantic values are sampled from
the screenshot and are close approximations - confirm them against the live CSS when you
can. Spacing, sizes and the countdown treatment in `ui_kits/site/` are measured off the
screenshot.

---

## CONTENT FUNDAMENTALS

The voice is a good clan guide, not a product page. One player telling another what to do.

- **Second person, imperative.** "Bank at Edgeville." "Bring an antifire shield." Never
  "players should consider bringing…".
- **No marketing fluff, no hedging.** If a method is slow, say it is slow. "Slower, but
  nothing in the setup is worth losing."
- **In-game terminology, unexplained.** *Pre-EOC, KC, GWD, tick eating, ::prices, brews,
  Slayer task, drop rate.* Readers already play. Explaining the vocabulary insults them.
- **Headings are short noun phrases.** "First hour", "Drop table", "Recommended setup",
  "Endgame on the horizon" - never "How to get started on your Elorin journey".
- **Sentence case everywhere**, including buttons and nav. Cinzel has no lowercase, so
  sentence case renders as the caps/small-caps mix seen in the hero. Writing in caps and
  applying `text-transform: uppercase` destroys that effect - never do it.
- **Metadata is uppercase mono in square brackets**: `[ BOSS GUIDE ]`,
  `[ CONCEPT ART · MIXED REVISIONS ]`, `[ 12 OF 40 COMPLETE ]`,
  `[ NOT AFFILIATED WITH JAGEX LTD ]`. The brackets are part of the style, not decoration.
- **Numbers are concrete.** "1/860", "12 kills an hour", "Slayer 85", "40 any GWD". Never
  "very rare" alone when a rate exists.
- **No emoji, ever.** The mono bracket label and the gold diamond do that job.
- **Progress copy is plain**: "12 of 40 complete", "0/5", "6%". No congratulation, no
  streaks, no gamified praise - the player is already playing a game.
- **Hero copy is the one place with rhetoric**, and it is short:
  "A Pre-EOC RSPS, reforged."

Length: guide paragraphs stay under about four lines at a 70ch measure. If a paragraph
needs a bullet list it probably needs a `StepList` or a `ChecklistItem` instead.

---

## VISUAL FOUNDATIONS

**Mood.** Medieval fantasy UI rendered cleanly - a well-made game launcher, not a SaaS
docs site. Deep navy space, aged gold as the only hero accent, thin luminous borders,
generous negative space. Nothing rounded, nothing bubbly, nothing playful.

**Colour.** One dark ladder and one accent hue.
- Navy: `#0A101E` page → `#111B2E` card → `#16223A` raised → `#1E2C47` subtle border →
  `#2C3E60` strong border. Sunken wells go darker still (`#070C16`).
- Gold: `#fff5d4` highlight → `#e8c885` bright (hover, hero) → `#c8a45a` mid (the
  workhorse: borders, buttons, bullets) → `#8a6a2c` deep (pressed, gradient base).
- Blue is support, never hero: `#4A7FC1` accent, `#7FB2E5` links, `#2B4C86` Discord.
- Semantic: `#5FA86B` success, `#C99A3A` warning, `#B4543F` danger.
- **At most one gold element per view carries the primary action.** Two gold buttons side
  by side and the accent stops meaning anything.
- Rarity and difficulty have their own ramps (`--rarity-*`, `--diff-*`) so drop tables
  can be scanned; the text always states the rate as well.

**Type.** Three faces, no exceptions.
- **Cinzel** (400–900) for display: hero, page headings, section titles, nav, button
  labels. Tracking `0.04em`; hero line-height `0.98`.
- **Inter** (400/500) for body: 17px base, line-height 1.65. Centred intro copy maxes at
  540px; long-form guide text at 70ch.
- **JetBrains Mono** (400/500) for labels, counts, table numerics and captions: 11–12px,
  uppercase, `0.15em`, in square brackets.
- **Metal text gradients** - silver `#ffffff → #d8dde8 → #6e7896`, gold
  `#fff5d4 → #e8c885 → #c8a45a → #8a6a2c` - applied with `background-clip: text`.
  Headings above ~24px only: the dark bottom stop fails contrast at small sizes, and it
  is never used on body copy.
- Fallbacks: Cinzel → Georgia → serif; Inter → system-ui → sans-serif; JetBrains Mono →
  ui-monospace → monospace. Pages must still read if Google Fonts fails.

**Backgrounds.** The page base carries a subtle radial navy gradient, lighter toward the
centre top (`--grad-page`), plus a faint two-ridge low-poly mountain silhouette pinned to
the bottom (`.el-ridge`, pure CSS `clip-path`, ~50% and ~85% opacity navy). No photographic
textures, no noise, no repeating patterns. Imagery, when it exists, is cool-toned concept
art - blue-steel and torchlight, never warm or washed out. **No concept art was supplied**,
so figures and card media render as dark placeholder panels with the brand diamond.

**Surfaces and elevation.** Elevation is border contrast and background lightness, not
shadow. A card is `#111B2E` + a 3.5% top-lit gradient + a 1px `#1E2C47` border + a 1px
inner highlight at 4% white (`--bevel`) faking a bevelled top edge. Shadows exist but are
almost invisible (`0 1px 2px rgba(0,0,0,.4)`); only overlays and tooltips go heavier. Gold
elements may carry a soft outer glow at low opacity (`--glow-gold`) - that glow, not a
shadow, is what marks something active or checked.

**Corner radii.** 2px chips and slots, 4px cards and inputs, 6px buttons, pill for tags
only. Nothing else is ever rounder.

**Borders.** Always 1px, always low contrast. Hover raises the border one step
(`#1E2C47 → #2C3E60`, or to gold on interactive surfaces). Callouts add a 3px left accent
bar in the tone colour. Section separators are a thin gold rule broken by a centred
diamond (`.el-rule`).

**Motion.** 150ms `cubic-bezier(0.22,0.61,0.36,1)` (ease-out) on colour, border and
shadow. Accordion height gets 240ms. Nothing bounces, nothing scales, nothing translates
more than a pixel. `prefers-reduced-motion` drops every duration to 0ms.

**Hover.** Border contrast up, gold one step brighter, sometimes a 2% white veil on rows.
Never opacity fades, never lifts, never scale.

**Press.** Gold gradient shifts one step darker (`--grad-gold-button-press`) and the bevel
inverts to a 3px inset shadow. Navy buttons lose their gradient and flatten.

**Focus.** 2px `#e8c885` outline at 2px offset, on everything focusable. Non-negotiable.

**Transparency and blur.** Used in exactly two places: the sticky site header
(`rgba(10,16,30,.72)` + 10px blur) and the sticky progress header
(`rgba(10,16,30,.86)` + 10px blur). Everywhere else surfaces are opaque. White veils at
2/4/6/10% do the work of translucency in zebra rows, hovers and bevels.

**Layout.** Page max width 1160px with a `clamp(16px,4vw,40px)` gutter. Section rhythm
`clamp(56px,9vw,128px)`. Wiki pages are a 264px sidebar plus content; boss pages float a
320px infobox right of the prose. Fixed elements: site header, sticky progress header,
and the ridge silhouette (`position: fixed`, `z-index: 0`, `pointer-events: none`).
Mobile first, and every tap target is at least 44px.

**Accessibility.** Body text is `#E8EDF5` (12.5:1) or `#A4B3C9` (7.4:1) on the page base;
`#7D8CA6` is for labels and metadata only and never a sentence - dimmed sentences (a completed checklist row) use `--text-dim` `#8B99AF` (5.3:1) instead. Gold never carries state
alone - a completed checklist item also dims and strikes its title; a rarity tint always
sits next to the printed rate.

---

## ICONOGRAPHY

**Elorin ships no icon set.** The supplied assets are the logo and the favicon; the only
glyph-like marks on the reference homepage are the brand diamond and three concept-art
motifs, which are artwork rather than an icon system.

- **Substitution, flagged:** UI glyphs are **Lucide 0.544.0 (ISC)** - 24px grid, 2px
  round-cap stroke, which matches the thin luminous line quality of the brand. If you
  have a real set, replace `ICON_PATHS` in `components/core/Icon.jsx` and the files in
  `assets/icons/lucide/`.
- Glyphs are **inlined as path data** in `Icon.jsx` and painted through a CSS mask
  (`background-color: currentColor`), so they inherit text colour, need no network
  request, and survive image/PDF export. The original files are also in
  `assets/icons/lucide/` for copying into other tools.
- Icons in use: `lightbulb`, `info`, `triangle-alert`, `octagon-alert`, `chevron-down`,
  `chevron-right`, `search`, `arrow-right`, `arrow-up-right`, `message-circle`,
  `download`, `play`, `swords`, `check`, `x`, `menu`, `external-link`, `copy`.
- **The four-point diamond is the brand mark**, not an icon: logo, button flourishes,
  bullet markers, checkbox tick, the break in a section rule, feature-card motifs. Build
  it with CSS (`.el-diamond` - a rotated square), never as an SVG file.
- **No emoji. No unicode dingbats.** Square-bracket mono labels carry metadata; the
  diamond carries emphasis.
- **Item and monster sprites are not included** and must not be drawn. `ItemChip`,
  `GearGrid`, `InventoryGrid`, `InfoBox` and `Figure` all render placeholder panels until
  real sprites are supplied.

---

## Components

`components/<group>/` - vanilla React, no dependencies, styled by the class layer in each
group's `.css` file (all reachable from `styles.css`), so the same markup works in plain
HTML with no framework.

**core**: `Icon`, `Button`, `Tag`, `Badge`
**checklist**: `ProgressBar`, `ProgressHeader`, `SectionCard`, `ChecklistItem`
**feedback**: `Callout`
**content**: `StepList`, `Accordion`
**navigation**: `SiteHeader`, `SiteFooter`, `SidebarNav`
**game**: `ItemChip`, `GearGrid`, `InventoryGrid`
**data**: `DataTable`, `InfoBox`
**media**: `VideoEmbed`, `Figure`

Each has a `.d.ts` props contract and a `.prompt.md` with a usage example; each directory
has a `*.card.html` preview.

**Intentional additions** (not named in the brief):
- `Icon` - the brief specifies icons inside callouts, buttons and sidebars but no icon
  primitive. One wrapper keeps the substituted set swappable in a single place.
- `Figure` was named; `VideoEmbed`'s placeholder state was added so pages can ship before
  a video exists.
- `.el-check__input` - a real-`<input>` variant of the checkbox so the static deliverable
  works with JavaScript disabled. Same visual result as the React `ChecklistItem`.

## UI kits

- `ui_kits/docs/` - **the guides site**: guides hub → Starting Out checklist → Nex boss
  guide, click-through, with checklist state in localStorage.
- `ui_kits/site/` - **elorin.org homepage**, recreated from the screenshot so docs pages
  can be checked against the chrome they extend.

## Templates

Starting folders a consuming project can copy. Each is a Design Component that loads this
system through a sibling `ds-base.js` (edit the one `base` line to re-point it).

- `templates/starting-out-checklist/StartingOutChecklist.dc.html` - the checklist page:
  sticky progress header, three section cards, callouts, accordion, progress in
  localStorage. Tweaks: storage key, ridge silhouette on/off.
- `templates/boss-guide/BossGuide.dc.html` - the wiki boss page: sidebar, infobox, phase
  steps, gear and inventory presets, rarity-coloured drop table, media, accordions.
  Tweaks: sidebar on/off, drop table on/off.

## Deliverable

- `deliverables/starting-out.html` - the drag-into-Cloudflare-Pages file. One
  self-contained page: all tokens in a single `:root` block, every component style
  inlined, Google Fonts with preconnect, no build step, no framework. Progress saves to
  `localStorage` under `elorin.startingOut.v1` and the page still works with JS off
  (`:checked` and `:has()` carry the completed state). Ship it with the two sibling files
  in that folder (`elorin-logo.png`, `favicon.ico`).

The token block in that file is generated from `tokens/*.css`, so it can be lifted into an
Astro Starlight or MkDocs Material theme without rewriting anything: keep the custom
property names, drop the component classes you do not need.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one file consumers link. `@import`s only. |
| `tokens/fonts.css` | Font stacks + the Google Fonts import |
| `tokens/colors.css` | Navy, gold, blue, ink, semantic, rarity, veils + semantic aliases |
| `tokens/typography.css` | Sizes, weights, line heights, tracking, measures |
| `tokens/spacing.css` | 4px scale, section rhythm, control heights, fixtures |
| `tokens/shape.css` | Radii, borders, bevels, shadows, gold glows, focus ring |
| `tokens/motion.css` | Durations, easing, reduced-motion overrides |
| `tokens/gradients.css` | Metal text fills, surfaces, buttons, page atmosphere, rules |
| `base/reset.css` | Element defaults, link colours, focus ring, scrollbars |
| `base/utilities.css` | `.el-metal-*`, `.el-label`, `.el-diamond`, `.el-rule`, `.el-surface`, `.el-ridge`, measures |
| `components/components.css` | Imports every group's class layer |
| `components/<group>/` | 21 components + `.d.ts` + `.prompt.md` + card HTML |
| `guidelines/*.html` | 18 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/docs/` | Guides site kit - `README.md`, `index.html`, 3 screens |
| `ui_kits/site/` | Homepage kit - `README.md`, `index.html`, 1 screen |
| `deliverables/starting-out.html` | Standalone checklist page |
| `templates/` | Two copyable page templates (checklist, boss guide) |
| `assets/` | Logo, favicon, Lucide icon sources, homepage reference screenshot |
| `thumbnail.html` | Design-system tile |
| `SKILL.md` | Agent Skills entry point |

## Known gaps

- Navy/grey/semantic hexes are screenshot samples, not values read from the live CSS.
- No concept art, screenshots, item sprites or monster art - placeholders throughout.
- The footer composition is inferred; the reference screenshot cut off above it.
- Account, vote and download pages were never seen and are not recreated.
- All guide content (drop rates, phase names, custom boss names) is plausible
  placeholder written to exercise the components. Replace before publishing.

---

## Changelog

**Revision 2**

- `--grey-500` moved from `#6C7C96` to `#7D8CA6`. The old value measured 4.07:1 on the
  card surface and 4.49:1 on the page, so the 11px mono metadata labels missed the 4.5:1
  the brief asked for. The new value is 5.06:1 on card, 5.58:1 on page and 4.66:1 on the
  raised surface, clearing AA everywhere it is used.
- Added `--red-300` (`#D97A63`) and `--text-danger`. `--red-500` is 3.51:1 on the card
  surface, fine as the callout's left border but unusable as text; the token name invited
  misuse, so there is now a text-safe tone and a comment saying which is which.
- The contrast figures printed on the "Text on dark" guideline card were understated
  (12.5 / 7.4 / 3.6). Corrected to the measured values against the card surface.
- Added `dist/elorin.css`, a single concatenated stylesheet with no `@import`, plus
  `dist/build.sh` to regenerate it. `styles.css` chains eleven imports, which browsers
  fetch serially and which shows as a flash of unstyled content on a cold mobile load.
- Deleted `scraps/` (build residue) and `uploads/` (byte-identical duplicates of the
  files already in `assets/`). `deliverables/` keeps its own copies of the logo and
  favicon on purpose, so that folder stays portable enough to drag straight onto
  Cloudflare Pages.

**Known and deliberate**

- Item sprites for `GearGrid`, `InventoryGrid` and `ItemChip` are not included. They are
  Jagex assets; hosting a few thousand of them is a decision to take consciously rather
  than by default. The footer's "Not affiliated with Jagex Ltd" line does not cover it.
- Navy, grey and semantic colours are still sampled from a screenshot. The golds are
  exact. Confirm the rest against the live CSS when the site is reachable.
