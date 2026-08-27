import React from 'react';

export function InfoBox({ kind = 'NPC', title, image, rows = [], footer, className = '', ...rest }) {
  return (
    <aside className={['el-infobox', className].filter(Boolean).join(' ')} {...rest}>
      <div className="el-infobox__head">
        <span className="el-infobox__kind">[ {kind} ]</span>
        <h3 className="el-infobox__title">{title}</h3>
      </div>
      <div className={['el-infobox__media', image ? '' : 'el-infobox__media--empty'].filter(Boolean).join(' ')}>
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <dl className="el-infobox__rows">
        {rows.map((row) => (
          <React.Fragment key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </React.Fragment>
        ))}
      </dl>
      {footer ? <div className="el-infobox__foot">{footer}</div> : null}
    </aside>
  );
}
