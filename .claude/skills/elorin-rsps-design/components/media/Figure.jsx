import React from 'react';

export function Figure({ src, alt = '', caption, className = '', ...rest }) {
  return (
    <figure className={['el-figure', className].filter(Boolean).join(' ')} {...rest}>
      <div className={['el-figure__media', src ? '' : 'el-figure__media--empty'].filter(Boolean).join(' ')}>
        {src ? <img src={src} alt={alt} /> : null}
      </div>
      {caption ? <figcaption className="el-figure__caption">[ {caption} ]</figcaption> : null}
    </figure>
  );
}
