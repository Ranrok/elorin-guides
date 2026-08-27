import React from 'react';

export function DataTable({ columns = [], rows = [], caption, maxHeight, className = '', ...rest }) {
  return (
    <div className="el-table-wrap" style={maxHeight ? { '--el-table-max': typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight } : undefined}>
      <table className={['el-table', className].filter(Boolean).join(' ')} {...rest}>
        {caption ? <caption>[ {caption} ]</caption> : null}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.align === 'right' ? 'num' : undefined} scope="col">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id || i}>
              {columns.map((col) => {
                const cell = row[col.key];
                const rarity = col.rarityKey ? row[col.rarityKey] : undefined;
                const cls = [
                  col.align === 'right' ? (rarity ? 'rate' : 'num') : '',
                  rarity ? `rate--${rarity}` : '',
                ].filter(Boolean).join(' ');
                return <td key={col.key} className={cls || undefined}>{cell}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
