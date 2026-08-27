import React from 'react';
import { Icon } from './Icon.jsx';

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  flourishes,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const showFlourish = flourishes === undefined ? variant === 'primary' : flourishes;
  const cls = [
    'el-btn',
    `el-btn--${variant}`,
    size !== 'md' ? `el-btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');
  const inner = (
    <>
      {showFlourish ? <span className="el-btn__flourish"></span> : null}
      {icon ? <Icon name={icon} /> : null}
      <span>{children}</span>
      {showFlourish ? <span className="el-btn__flourish"></span> : null}
    </>
  );
  if (href && !disabled) {
    return <a className={cls} href={href} {...rest}>{inner}</a>;
  }
  return <button type="button" className={cls} disabled={disabled} {...rest}>{inner}</button>;
}
