One-line: the container for a run of ChecklistItems - heading, per-section ratio, thin bar, hairline-separated rows.

```jsx
<SectionCard label="Step 01" title="First hour" value={2} total={5}>
  <ChecklistItem id="tut" title="Finish the tutorial" checked onChange={set} />
</SectionCard>
```

- Pass real `value`/`total`; the border turns gold and the ratio turns green when complete.
