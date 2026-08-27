import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  tip: { icon: 'lightbulb', title: 'Tip' },
  note: { icon: 'info', title: 'Note' },
  warning: { icon: 'triangle-alert', title: 'Warning' },
  danger: { icon: 'octagon-alert', title: 'Danger' },
};

export function Callout({ tone = 'note', title, icon, children, className = '', ...rest }) {
  const preset = TONES[tone] || TONES.note;
  return (
    <div className={['el-callout', `el-callout--${tone}`, className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={icon || preset.icon} className="el-callout__icon" />
      <div>
        <p className="el-callout__title">{title || preset.title}</p>
        <div className="el-callout__body">{children}</div>
      </div>
    </div>
  );
}
