One-line: the brand's action control - gold primary for the single most important action on a page, navy secondary for everything else.

```jsx
<Button variant="primary" href="#start">Start your adventure</Button>
<Button variant="secondary" icon="download">Download the client</Button>
<Button variant="discord" icon="message-circle">Join the Discord</Button>
<Button variant="ghost">Reset progress</Button>
```

- Labels are sentence case: Cinzel has no lowercase, so it renders as caps + small caps by itself. Never `text-transform: uppercase`.
- One gold button per view. Two golds side by side kills the accent.
- Minimum height is 44px at every size except `sm`, which is for dense desktop rows only.
