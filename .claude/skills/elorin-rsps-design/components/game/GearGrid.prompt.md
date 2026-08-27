One-line: shows a recommended equipment preset as slotted cells; pair it with InventoryGrid inside `.el-preset`.

```jsx
<div className="el-preset">
  <GearGrid label="Gear" slots={[{name:'Torva helm'}, null, {name:'Amulet of fury'}]} />
  <InventoryGrid label="Inventory" items={[{name:'Saradomin brew', qty:4}]} />
</div>
```

- Tooltips come from `data-tip` (pure CSS). Slots are 48px - `--slot`.
