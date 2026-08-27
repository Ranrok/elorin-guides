One-line: drop tables, skilling rates and requirement lists - numbers right-aligned in mono, rates tinted by rarity.

```jsx
<DataTable
  caption="Nex drop table"
  maxHeight={420}
  columns={[{key:'item',label:'Item'},{key:'qty',label:'Qty',align:'right'},{key:'rate',label:'Rate',align:'right',rarityKey:'rarity'}]}
  rows={[{item:'Torva platebody', qty:1, rate:'1/860', rarity:'mega-rare'}]}
/>
```

- Set `maxHeight` for long tables so the header sticks.
- Rarity tint is decoration: keep the rate text itself readable.
