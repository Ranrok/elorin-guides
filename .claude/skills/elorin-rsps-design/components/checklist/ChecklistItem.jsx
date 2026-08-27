import React from 'react';

export function ChecklistItem({
  id,
  title,
  description,
  subSteps,
  meta,
  checked = false,
  onChange,
  className = '',
  ...rest
}) {
  const labelId = `${id}-label`;
  const toggle = () => onChange && onChange(!checked, id);
  return (
    <div className={['el-check', checked ? 'el-check--done' : '', className].filter(Boolean).join(' ')} {...rest}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        aria-labelledby={labelId}
        className="el-check__box"
        onClick={toggle}
      >
        <span className="el-check__mark"></span>
      </button>
      <span id={labelId} className="el-check__label" onClick={toggle}>
        <span className="el-check__title">{title}</span>
      </span>
      {description ? <p className="el-check__desc">{description}</p> : null}
      {subSteps && subSteps.length ? (
        <ul className="el-check__subs">
          {subSteps.map((s, i) => <li key={i}><span>{s}</span></li>)}
        </ul>
      ) : null}
      {meta ? <div className="el-check__meta">{meta}</div> : null}
    </div>
  );
}
