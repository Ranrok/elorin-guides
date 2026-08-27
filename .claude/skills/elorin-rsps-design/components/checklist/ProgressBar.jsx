import React from 'react';

export function ProgressBar({ value, total, label = 'complete', thin = false, showMeta = true, className = '', ...rest }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  const done = total > 0 && value >= total;
  const cls = ['el-progress', thin ? 'el-progress--thin' : '', done ? 'el-progress--done' : '', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="el-progress__track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={total} aria-label={`${value} of ${total} ${label}`}>
        <div className="el-progress__fill" style={{ width: `${pct}%` }}></div>
      </div>
      {showMeta ? (
        <div className="el-progress__meta">
          <span className="el-progress__count">{value} of {total} {label}</span>
          <span>{pct}%</span>
        </div>
      ) : null}
    </div>
  );
}
