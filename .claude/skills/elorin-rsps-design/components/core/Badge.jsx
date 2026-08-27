import React from 'react';

export function Badge({ tone = 'default', bar = false, level, className = '', children, ...rest }) {
  const cls = ['el-badge', tone !== 'default' ? `el-badge--${tone}` : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {bar ? <span className="el-badge__bar"></span> : null}
      {children}
      {level !== undefined ? <span className="el-badge__lvl">{level}</span> : null}
    </span>
  );
}
