import React from 'react';

function Slot({ slot }) {
  const empty = !slot || !slot.name;
  return (
    <div className={['el-slot', empty ? 'el-slot--empty' : ''].filter(Boolean).join(' ')} data-tip={empty ? undefined : slot.name}>
      {slot && slot.icon ? <img src={slot.icon} alt={slot.name} /> : null}
      {slot && slot.qty ? <span className="el-slot__qty">{slot.qty}</span> : null}
    </div>
  );
}

/* 4-wide equipment layout. Pass up to 12 slots in reading order; gaps allowed as null. */
export function GearGrid({ slots = [], label, className = '', ...rest }) {
  const cells = slots.length ? slots : Array.from({ length: 12 }, () => null);
  return (
    <div className={['el-preset__col', className].filter(Boolean).join(' ')} {...rest}>
      {label ? <span className="el-preset__label">[ {label} ]</span> : null}
      <div className="el-grid el-grid--gear">
        {cells.map((slot, i) => <Slot slot={slot} key={i} />)}
      </div>
    </div>
  );
}
