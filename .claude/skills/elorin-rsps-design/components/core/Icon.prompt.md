One-line: the only icon primitive - a Lucide glyph that inherits colour from its parent, used inside buttons, callouts, tags and nav.

```jsx
<Icon name="triangle-alert" size={18} />
```

- Names are Lucide kebab-case; the SVG is fetched from the pinned lucide-static CDN and masked with `currentColor`, so set colour on the parent.
- Elorin has no icon set of its own - Lucide is a documented substitution (see readme ICONOGRAPHY). Never hand-roll an SVG or use emoji.
