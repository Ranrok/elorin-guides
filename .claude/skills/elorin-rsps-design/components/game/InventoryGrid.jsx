import React from 'react';

/* 4 x 7 inventory layout - 28 cells, always. Extra items are ignored. */
export function InventoryGrid({ items = [], label, className = '', ...rest }) {
  const cells = Array.from({ length: 28 }, (_, i) => items[i] || null);
  return (
    <div className={['el-preset__col', className].filter(Boolean).join(' ')} {...rest}>
      {label ? <span className="el-preset__label">[ {label} ]</span> : null}
      <div className="el-grid el-grid--inv">
        {cells.map((item, i) => (
          <div className={['el-slot', item ? '' : 'el-slot--empty'].filter(Boolean).join(' ')} key={i} data-tip={item ? item.name : undefined}>
            {item && item.icon ? <img src={item.icon} alt={item.name} /> : null}
            {item && item.qty ? <span className="el-slot__qty">{item.qty}</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
