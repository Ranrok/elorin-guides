One-line: names an item mid-sentence with its sprite, so gear lists read as prose instead of tables.

```jsx
<p>Bring <ItemChip name="Saradomin brew" qty={4} /> and a <ItemChip name="Ring of life" rarity="rare" /></p>
```

- No item sprites ship with this system - pass `icon` or accept the placeholder. Never draw item art.
