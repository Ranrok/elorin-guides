One-line: the shared chrome - use `split` to match elorin.org, `centred` for documentation pages.

```jsx
<SiteHeader
  variant="split"
  items={[{label:'Home',href:'/'},{label:'Guides',href:'/guides'}]}
  active="Guides"
  logoSrc="assets/elorin-logo.png"
  actions={<Button variant="outline" size="sm" flourishes={false}>Account</Button>}
/>
```

- Nav labels are sentence case (Cinzel handles the caps) with 0.18em tracking.
- `logoSrc` defaults to `../../assets/elorin-logo.png`; pass the correct relative path per page.
