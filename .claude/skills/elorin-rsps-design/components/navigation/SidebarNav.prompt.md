One-line: left-hand navigation for the wiki - filters as you type, categories collapse, current page marked with a gold left rule.

```jsx
<SidebarNav current="Nex" categories={[{ label: 'Bosses', items: [{ label: 'Nex', href: '#' }] }]} />
```

- Category labels are uppercase mono; page links are Inter 15px.
- Filtering forces all categories open and shows `[ no matches ]` when empty.
