import React from 'react';

export function ItemChip({ name, icon, qty, href, rarity, className = '', ...rest }) {
  const cls = ['el-item', className].filter(Boolean).join(' ');
  const inner = (
    <>
      <span className="el-item__icon">{icon ? <img src={icon} alt="" /> : null}</span>
      <span style={rarity ? { color: `var(--rarity-${rarity})` } : undefined}>{name}</span>
      {qty ? <span className="el-item__qty">&times;{qty}</span> : null}
    </>
  );
  return href
    ? <a className={cls} href={href} {...rest}>{inner}</a>
    : <span className={cls} {...rest}>{inner}</span>;
}
