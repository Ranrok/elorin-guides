import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Accordion({ title, tag, defaultOpen = false, children, className = '', ...rest }) {
  return (
    <details className={['el-acc', className].filter(Boolean).join(' ')} open={defaultOpen} {...rest}>
      <summary className="el-acc__summary">
        <span>{title}</span>
        {tag ? <span className="el-acc__tag">[ {tag} ]</span> : null}
        <Icon name="chevron-down" className="el-acc__chev" />
      </summary>
      <div className="el-acc__body">{children}</div>
    </details>
  );
}
