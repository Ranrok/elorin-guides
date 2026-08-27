import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ tone = 'default', icon, diamond = false, href, className = '', children, ...rest }) {
  const cls = ['el-tag', tone !== 'default' ? `el-tag--${tone}` : '', className].filter(Boolean).join(' ');
  const inner = (
    <>
      {diamond ? <span className="el-tag__dot"></span> : null}
      {icon ? <Icon name={icon} /> : null}
      {children}
    </>
  );
  return href
    ? <a className={cls} href={href} {...rest}>{inner}</a>
    : <span className={cls} {...rest}>{inner}</span>;
}
