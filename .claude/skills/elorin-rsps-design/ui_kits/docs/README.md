# Elorin Guides - docs UI kit

The player-facing documentation site: static guide pages hosted on Cloudflare Pages.
`index.html` is an interactive click-through - the guides hub opens the Starting Out
checklist or the Nex boss guide, and checklist state persists to localStorage under
`elorin.startingOut.uikit`.

| File | Surface |
| --- | --- |
| `index.html` | App shell: `SiteHeader`, screen switch, `SiteFooter`, page ridge silhouette |
| `GuidesHubScreen.jsx` | Guides index - sidebar, callout, guide cards |
| `ChecklistScreen.jsx` | Starting Out - sticky progress header, four section cards, callouts, accordion |
| `BossGuideScreen.jsx` | Nex - infobox, step list, gear/inventory presets, drop table, media, accordions |

Screens compose the design-system components off the compiled bundle
(`window.ElorinRSPSDesignSystem_<hash>`); they define no styling of their own beyond
layout. They are loaded as `text/babel`, so they use no `import`/`export` - each file
ends with `Object.assign(window, { Screen })`.

Copy for the screens is written in the brand voice: second person, imperative, in-game
terminology unexplained. The content itself (drop rates, phase names, custom boss names)
is plausible placeholder written for the demo - replace it with real server data before
publishing.

Not recreated: the account/login area and the vote page, neither of which appeared in the
supplied reference.
