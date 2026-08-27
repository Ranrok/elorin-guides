One-line: the checklist's atom - a gold-diamond checkbox, a title, and optional description, sub-steps and metadata.

```jsx
<ChecklistItem
  id="quest-cape"
  title="Bank your first Abyssal whip"
  description="Slayer 85, or buy one off the Grand Exchange clone."
  subSteps={['Unlock the Slayer tower', 'Bring an antifire']}
  meta={<Badge tone="medium" bar>Medium</Badge>}
  checked={done.has('quest-cape')}
  onChange={toggle}
/>
```

- Controlled only - hold state in the page and persist it to localStorage.
- Completion is signalled twice (gold diamond + struck, dimmed title), never by colour alone.
