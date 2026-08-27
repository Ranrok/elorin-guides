One-line: the stat block at the top-right of an NPC or item page.

```jsx
<InfoBox kind="Boss" title="Nex" rows={[{label:'Combat', value:'1001'},{label:'Weakness', value:'Magic'}]}
  footer={<Badge tone="elite" bar>Elite</Badge>} />
```

- Max width 320px, meant to float right of prose. Labels are mono, values right-aligned.
