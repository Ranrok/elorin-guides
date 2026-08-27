import React from 'react';

export function SiteHeader({
  items = [],
  active,
  logoSrc = '../../assets/elorin-logo.png',
  wordmark = 'Elorin RSPS',
  variant = 'split',
  actions,
  className = '',
  ...rest
}) {
  return (
    <header className={['el-header', variant === 'centred' ? 'el-header--centred' : '', className].filter(Boolean).join(' ')} {...rest}>
      <div className="el-header__inner">
        <a className="el-lockup" href={items.length ? items[0].href : '#'}>
          <img src={logoSrc} alt="Elorin" />
          <span className="el-lockup__word">{wordmark}</span>
        </a>
        <nav className="el-nav el-header__nav" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.label}
              className="el-nav__link"
              href={item.href}
              aria-current={item.label === active ? 'page' : undefined}
            >{item.label}</a>
          ))}
        </nav>
        {variant === 'centred' ? null : <div className="el-header__actions">{actions}</div>}
      </div>
    </header>
  );
}
