import React from 'react';
import { ProgressBar } from './ProgressBar.jsx';

export function SectionCard({ label, title, description, value = 0, total = 0, children, className = '', ...rest }) {
  const complete = total > 0 && value >= total;
  const cls = ['el-section', complete ? 'el-section--complete' : '', className].filter(Boolean).join(' ');
  return (
    <section className={cls} {...rest}>
      <div className="el-section__head">
        {label ? <span className="el-section__label">[ {label} ]</span> : null}
        <h3 className="el-section__title">{title}</h3>
        <span className="el-section__ratio">{value}/{total}</span>
        {description ? <p className="el-section__desc">{description}</p> : null}
        {total > 0 ? (
          <div className="el-section__bar">
            <ProgressBar value={value} total={total} thin showMeta={false} />
          </div>
        ) : null}
      </div>
      <div className="el-section__body">{children}</div>
    </section>
  );
}
