import React from 'react';

export function SiteFooter({
  items = [],
  logoSrc = '../../assets/elorin-logo.png',
  legal = 'Not affiliated with Jagex Ltd',
  className = '',
  ...rest
}) {
  return (
    <footer className={['el-footer', className].filter(Boolean).join(' ')} {...rest}>
      <div className="el-footer__inner">
        <a className="el-lockup" href={items.length ? items[0].href : '#'}>
          <img src={logoSrc} alt="Elorin" style={{ height: 44 }} />
        </a>
        <nav className="el-nav el-footer__nav" aria-label="Footer">
          {items.map((item) => (
            <a key={item.label} className="el-nav__link" href={item.href}>{item.label}</a>
          ))}
        </nav>
        <p className="el-footer__legal">[ {legal} ]</p>
      </div>
    </footer>
  );
}
