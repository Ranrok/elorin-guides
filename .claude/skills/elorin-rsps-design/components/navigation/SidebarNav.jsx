import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SidebarNav({ categories = [], current, searchable = true, className = '', ...rest }) {
  const [query, setQuery] = React.useState('');
  const [closed, setClosed] = React.useState({});
  const q = query.trim().toLowerCase();
  const filtered = categories
    .map((cat) => ({ ...cat, items: q ? cat.items.filter((i) => i.label.toLowerCase().includes(q)) : cat.items }))
    .filter((cat) => !q || cat.items.length);

  return (
    <nav className={['el-side', className].filter(Boolean).join(' ')} aria-label="Guides" {...rest}>
      {searchable ? (
        <div className="el-side__search">
          <Icon name="search" />
          <input
            className="el-side__input"
            type="search"
            placeholder="Search guides"
            aria-label="Search guides"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      ) : null}
      <div>
        {filtered.map((cat) => {
          const open = q ? true : !closed[cat.label];
          return (
            <div className="el-side__cat" key={cat.label}>
              <button type="button" className="el-side__catbtn" aria-expanded={open} onClick={() => setClosed((c) => ({ ...c, [cat.label]: open }))}>
                <span>{cat.label}</span>
                <Icon name="chevron-down" />
              </button>
              {open ? (
                <ul className="el-side__list">
                  {cat.items.map((item) => (
                    <li key={item.label}>
                      <a className="el-side__link" href={item.href} aria-current={item.label === current ? 'page' : undefined}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
        {!filtered.length ? <p className="el-side__empty">[ no matches ]</p> : null}
      </div>
    </nav>
  );
}
