import React from 'react';

export function StepList({ steps = [], className = '', ...rest }) {
  return (
    <ol className={['el-steps', className].filter(Boolean).join(' ')} {...rest}>
      {steps.map((step, i) => (
        <li className="el-steps__item" key={i}>
          <div>
            <h4 className="el-steps__title">{step.title}</h4>
            {step.body ? <div className="el-steps__body">{step.body}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
