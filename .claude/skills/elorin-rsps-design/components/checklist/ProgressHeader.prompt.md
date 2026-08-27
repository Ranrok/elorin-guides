One-line: pin this directly under the site header on any checklist page so overall progress never scrolls away.

```jsx
<ProgressHeader title="Starting out" value={12} total={40}>
  <Button variant="ghost" size="sm">Reset</Button>
</ProgressHeader>
```

- Backdrop-blurred navy at 86%; it must sit above page content (`z-index: 30`).
- On narrow screens the bar drops to its own row - don't nest it in a fixed-width container.
