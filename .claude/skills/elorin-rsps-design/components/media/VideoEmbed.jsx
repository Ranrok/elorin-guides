import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function VideoEmbed({ youtubeId, title = 'Guide video', caption, className = '', ...rest }) {
  return (
    <div className={['el-embed', className].filter(Boolean).join(' ')} {...rest}>
      <div className="el-embed__frame">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="el-embed__placeholder">
            <Icon name="play" />
            <span className="el-label">[ video pending ]</span>
          </div>
        )}
      </div>
      {caption ? <div className="el-embed__caption">[ {caption} ]</div> : null}
    </div>
  );
}
