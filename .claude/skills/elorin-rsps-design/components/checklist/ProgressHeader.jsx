import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';

export function ProgressHeader({ title = 'Starting out', value, total, children, className = '', ...rest }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <header className={['el-phead', className].filter(Boolean).join(' ')} {...rest}>
      <div className="el-phead__inner">
        <span className="el-phead__title">{title}</span>
        <div className="el-phead__bar">
          <ProgressBar value={value} total={total} thin showMeta={false} />
        </div>
        <span className="el-phead__count">{value} / {total} &middot; {pct}%</span>
        {children}
      </div>
    </header>
  );
}
