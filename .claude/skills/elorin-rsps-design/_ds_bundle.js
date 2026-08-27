/* @ds-bundle: {"format":4,"namespace":"ElorinRSPSDesignSystem_44a46d","components":[{"name":"ChecklistItem","sourcePath":"components/checklist/ChecklistItem.jsx"},{"name":"ProgressBar","sourcePath":"components/checklist/ProgressBar.jsx"},{"name":"ProgressHeader","sourcePath":"components/checklist/ProgressHeader.jsx"},{"name":"SectionCard","sourcePath":"components/checklist/SectionCard.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"StepList","sourcePath":"components/content/StepList.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ICON_PATHS","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"InfoBox","sourcePath":"components/data/InfoBox.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"GearGrid","sourcePath":"components/game/GearGrid.jsx"},{"name":"InventoryGrid","sourcePath":"components/game/InventoryGrid.jsx"},{"name":"ItemChip","sourcePath":"components/game/ItemChip.jsx"},{"name":"Figure","sourcePath":"components/media/Figure.jsx"},{"name":"VideoEmbed","sourcePath":"components/media/VideoEmbed.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/checklist/ChecklistItem.jsx":"af08791ad334","components/checklist/ProgressBar.jsx":"8cea6d6604a4","components/checklist/ProgressHeader.jsx":"549ac07295f5","components/checklist/SectionCard.jsx":"c1c2604134bb","components/content/Accordion.jsx":"d02ac7326735","components/content/StepList.jsx":"e709529828eb","components/core/Badge.jsx":"b68c6bdee7b0","components/core/Button.jsx":"9f75b46aae52","components/core/Icon.jsx":"4a8e009fb907","components/core/Tag.jsx":"6990f9b89bf4","components/data/DataTable.jsx":"fa13524055a6","components/data/InfoBox.jsx":"dfc05a4a7f8d","components/feedback/Callout.jsx":"4ca56105f9be","components/game/GearGrid.jsx":"db2185023bc0","components/game/InventoryGrid.jsx":"32fb59901ebc","components/game/ItemChip.jsx":"f9475e04e7c4","components/media/Figure.jsx":"569ca6a1e1c6","components/media/VideoEmbed.jsx":"caa81adcb2a0","components/navigation/SidebarNav.jsx":"53665327601c","components/navigation/SiteFooter.jsx":"aa2d55b5a4bc","components/navigation/SiteHeader.jsx":"5be80750318e","ui_kits/docs/BossGuideScreen.jsx":"7fb38caf3871","ui_kits/docs/ChecklistScreen.jsx":"0bb35cef9eb1","ui_kits/docs/GuidesHubScreen.jsx":"7b25938ef9ae","ui_kits/site/HomeScreen.jsx":"eb8402d6731f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElorinRSPSDesignSystem_44a46d = window.ElorinRSPSDesignSystem_44a46d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/checklist/ChecklistItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChecklistItem({
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['el-check', checked ? 'el-check--done' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": checked,
    "aria-labelledby": labelId,
    className: "el-check__box",
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-check__mark"
  })), /*#__PURE__*/React.createElement("span", {
    id: labelId,
    className: "el-check__label",
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-check__title"
  }, title)), description ? /*#__PURE__*/React.createElement("p", {
    className: "el-check__desc"
  }, description) : null, subSteps && subSteps.length ? /*#__PURE__*/React.createElement("ul", {
    className: "el-check__subs"
  }, subSteps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, s)))) : null, meta ? /*#__PURE__*/React.createElement("div", {
    className: "el-check__meta"
  }, meta) : null);
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/checklist/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/checklist/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value,
  total,
  label = 'complete',
  thin = false,
  showMeta = true,
  className = '',
  ...rest
}) {
  const pct = total > 0 ? Math.round(value / total * 100) : 0;
  const done = total > 0 && value >= total;
  const cls = ['el-progress', thin ? 'el-progress--thin' : '', done ? 'el-progress--done' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-progress__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": total,
    "aria-label": `${value} of ${total} ${label}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "el-progress__fill",
    style: {
      width: `${pct}%`
    }
  })), showMeta ? /*#__PURE__*/React.createElement("div", {
    className: "el-progress__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-progress__count"
  }, value, " of ", total, " ", label), /*#__PURE__*/React.createElement("span", null, pct, "%")) : null);
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/checklist/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/checklist/ProgressHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressHeader({
  title = 'Starting out',
  value,
  total,
  children,
  className = '',
  ...rest
}) {
  const pct = total > 0 ? Math.round(value / total * 100) : 0;
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ['el-phead', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-phead__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-phead__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "el-phead__bar"
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: value,
    total: total,
    thin: true,
    showMeta: false
  })), /*#__PURE__*/React.createElement("span", {
    className: "el-phead__count"
  }, value, " / ", total, " \xB7 ", pct, "%"), children));
}
Object.assign(__ds_scope, { ProgressHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/checklist/ProgressHeader.jsx", error: String((e && e.message) || e) }); }

// components/checklist/SectionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionCard({
  label,
  title,
  description,
  value = 0,
  total = 0,
  children,
  className = '',
  ...rest
}) {
  const complete = total > 0 && value >= total;
  const cls = ['el-section', complete ? 'el-section--complete' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-section__head"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "el-section__label"
  }, "[ ", label, " ]") : null, /*#__PURE__*/React.createElement("h3", {
    className: "el-section__title"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "el-section__ratio"
  }, value, "/", total), description ? /*#__PURE__*/React.createElement("p", {
    className: "el-section__desc"
  }, description) : null, total > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "el-section__bar"
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: value,
    total: total,
    thin: true,
    showMeta: false
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "el-section__body"
  }, children));
}
Object.assign(__ds_scope, { SectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/checklist/SectionCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StepList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepList({
  steps = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    className: ['el-steps', className].filter(Boolean).join(' ')
  }, rest), steps.map((step, i) => /*#__PURE__*/React.createElement("li", {
    className: "el-steps__item",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "el-steps__title"
  }, step.title), step.body ? /*#__PURE__*/React.createElement("div", {
    className: "el-steps__body"
  }, step.body) : null))));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepList.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'default',
  bar = false,
  level,
  className = '',
  children,
  ...rest
}) {
  const cls = ['el-badge', tone !== 'default' ? `el-badge--${tone}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), bar ? /*#__PURE__*/React.createElement("span", {
    className: "el-badge__bar"
  }) : null, children, level !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "el-badge__lvl"
  }, level) : null);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide 0.544.0 (ISC) path data, inlined. The glyph is painted with a CSS mask
   so it inherits currentColor; no network request, no inline SVG in the markup.
   Source files also live in assets/icons/lucide/ for copying elsewhere. */
const ICON_PATHS = {
  'lightbulb': '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'triangle-alert': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  'octagon-alert': '<path d="M12 16h.01"/><path d="M12 8v4"/><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'search': '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'message-circle': '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',
  'download': '<path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/>',
  'play': '<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>',
  'swords': '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'menu': '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>',
  'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  'copy': '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'
};
function maskUrl(name) {
  const inner = ICON_PATHS[name];
  if (!inner) return null;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>';
  return 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22') + '")';
}
function Icon({
  name,
  size,
  className = '',
  style,
  ...rest
}) {
  const url = maskUrl(name);
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    className: `el-icon ${className}`.trim(),
    style: {
      WebkitMaskImage: url,
      maskImage: url,
      ...(size ? {
        fontSize: typeof size === 'number' ? `${size}px` : size
      } : null),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_PATHS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  title,
  tag,
  defaultOpen = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("details", _extends({
    className: ['el-acc', className].filter(Boolean).join(' '),
    open: defaultOpen
  }, rest), /*#__PURE__*/React.createElement("summary", {
    className: "el-acc__summary"
  }, /*#__PURE__*/React.createElement("span", null, title), tag ? /*#__PURE__*/React.createElement("span", {
    className: "el-acc__tag"
  }, "[ ", tag, " ]") : null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    className: "el-acc__chev"
  })), /*#__PURE__*/React.createElement("div", {
    className: "el-acc__body"
  }, children));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  flourishes,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const showFlourish = flourishes === undefined ? variant === 'primary' : flourishes;
  const cls = ['el-btn', `el-btn--${variant}`, size !== 'md' ? `el-btn--${size}` : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, showFlourish ? /*#__PURE__*/React.createElement("span", {
    className: "el-btn__flourish"
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, /*#__PURE__*/React.createElement("span", null, children), showFlourish ? /*#__PURE__*/React.createElement("span", {
    className: "el-btn__flourish"
  }) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  tone = 'default',
  icon,
  diamond = false,
  href,
  className = '',
  children,
  ...rest
}) {
  const cls = ['el-tag', tone !== 'default' ? `el-tag--${tone}` : '', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, diamond ? /*#__PURE__*/React.createElement("span", {
    className: "el-tag__dot"
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon
  }) : null, children);
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner) : /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  caption,
  maxHeight,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "el-table-wrap",
    style: maxHeight ? {
      '--el-table-max': typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
    } : undefined
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: ['el-table', className].filter(Boolean).join(' ')
  }, rest), caption ? /*#__PURE__*/React.createElement("caption", null, "[ ", caption, " ]") : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    className: col.align === 'right' ? 'num' : undefined,
    scope: "col"
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id || i
  }, columns.map(col => {
    const cell = row[col.key];
    const rarity = col.rarityKey ? row[col.rarityKey] : undefined;
    const cls = [col.align === 'right' ? rarity ? 'rate' : 'num' : '', rarity ? `rate--${rarity}` : ''].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("td", {
      key: col.key,
      className: cls || undefined
    }, cell);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/InfoBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InfoBox({
  kind = 'NPC',
  title,
  image,
  rows = [],
  footer,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("aside", _extends({
    className: ['el-infobox', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-infobox__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-infobox__kind"
  }, "[ ", kind, " ]"), /*#__PURE__*/React.createElement("h3", {
    className: "el-infobox__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: ['el-infobox__media', image ? '' : 'el-infobox__media--empty'].filter(Boolean).join(' ')
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title
  }) : null), /*#__PURE__*/React.createElement("dl", {
    className: "el-infobox__rows"
  }, rows.map(row => /*#__PURE__*/React.createElement(React.Fragment, {
    key: row.label
  }, /*#__PURE__*/React.createElement("dt", null, row.label), /*#__PURE__*/React.createElement("dd", null, row.value)))), footer ? /*#__PURE__*/React.createElement("div", {
    className: "el-infobox__foot"
  }, footer) : null);
}
Object.assign(__ds_scope, { InfoBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/InfoBox.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  tip: {
    icon: 'lightbulb',
    title: 'Tip'
  },
  note: {
    icon: 'info',
    title: 'Note'
  },
  warning: {
    icon: 'triangle-alert',
    title: 'Warning'
  },
  danger: {
    icon: 'octagon-alert',
    title: 'Danger'
  }
};
function Callout({
  tone = 'note',
  title,
  icon,
  children,
  className = '',
  ...rest
}) {
  const preset = TONES[tone] || TONES.note;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['el-callout', `el-callout--${tone}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || preset.icon,
    className: "el-callout__icon"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "el-callout__title"
  }, title || preset.title), /*#__PURE__*/React.createElement("div", {
    className: "el-callout__body"
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/game/GearGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slot({
  slot
}) {
  const empty = !slot || !slot.name;
  return /*#__PURE__*/React.createElement("div", {
    className: ['el-slot', empty ? 'el-slot--empty' : ''].filter(Boolean).join(' '),
    "data-tip": empty ? undefined : slot.name
  }, slot && slot.icon ? /*#__PURE__*/React.createElement("img", {
    src: slot.icon,
    alt: slot.name
  }) : null, slot && slot.qty ? /*#__PURE__*/React.createElement("span", {
    className: "el-slot__qty"
  }, slot.qty) : null);
}

/* 4-wide equipment layout. Pass up to 12 slots in reading order; gaps allowed as null. */
function GearGrid({
  slots = [],
  label,
  className = '',
  ...rest
}) {
  const cells = slots.length ? slots : Array.from({
    length: 12
  }, () => null);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['el-preset__col', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "el-preset__label"
  }, "[ ", label, " ]") : null, /*#__PURE__*/React.createElement("div", {
    className: "el-grid el-grid--gear"
  }, cells.map((slot, i) => /*#__PURE__*/React.createElement(Slot, {
    slot: slot,
    key: i
  }))));
}
Object.assign(__ds_scope, { GearGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/GearGrid.jsx", error: String((e && e.message) || e) }); }

// components/game/InventoryGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 4 x 7 inventory layout - 28 cells, always. Extra items are ignored. */
function InventoryGrid({
  items = [],
  label,
  className = '',
  ...rest
}) {
  const cells = Array.from({
    length: 28
  }, (_, i) => items[i] || null);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['el-preset__col', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    className: "el-preset__label"
  }, "[ ", label, " ]") : null, /*#__PURE__*/React.createElement("div", {
    className: "el-grid el-grid--inv"
  }, cells.map((item, i) => /*#__PURE__*/React.createElement("div", {
    className: ['el-slot', item ? '' : 'el-slot--empty'].filter(Boolean).join(' '),
    key: i,
    "data-tip": item ? item.name : undefined
  }, item && item.icon ? /*#__PURE__*/React.createElement("img", {
    src: item.icon,
    alt: item.name
  }) : null, item && item.qty ? /*#__PURE__*/React.createElement("span", {
    className: "el-slot__qty"
  }, item.qty) : null))));
}
Object.assign(__ds_scope, { InventoryGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/InventoryGrid.jsx", error: String((e && e.message) || e) }); }

// components/game/ItemChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ItemChip({
  name,
  icon,
  qty,
  href,
  rarity,
  className = '',
  ...rest
}) {
  const cls = ['el-item', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "el-item__icon"
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: ""
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: rarity ? {
      color: `var(--rarity-${rarity})`
    } : undefined
  }, name), qty ? /*#__PURE__*/React.createElement("span", {
    className: "el-item__qty"
  }, "\xD7", qty) : null);
  return href ? /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), inner) : /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { ItemChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/game/ItemChip.jsx", error: String((e && e.message) || e) }); }

// components/media/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Figure({
  src,
  alt = '',
  caption,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: ['el-figure', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: ['el-figure__media', src ? '' : 'el-figure__media--empty'].filter(Boolean).join(' ')
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : null), caption ? /*#__PURE__*/React.createElement("figcaption", {
    className: "el-figure__caption"
  }, "[ ", caption, " ]") : null);
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Figure.jsx", error: String((e && e.message) || e) }); }

// components/media/VideoEmbed.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function VideoEmbed({
  youtubeId,
  title = 'Guide video',
  caption,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['el-embed', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-embed__frame"
  }, youtubeId ? /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
    title: title,
    loading: "lazy",
    allow: "accelerometer; clipboard-write; encrypted-media; picture-in-picture",
    allowFullScreen: true
  }) : /*#__PURE__*/React.createElement("div", {
    className: "el-embed__placeholder"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play"
  }), /*#__PURE__*/React.createElement("span", {
    className: "el-label"
  }, "[ video pending ]"))), caption ? /*#__PURE__*/React.createElement("div", {
    className: "el-embed__caption"
  }, "[ ", caption, " ]") : null);
}
Object.assign(__ds_scope, { VideoEmbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/VideoEmbed.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  categories = [],
  current,
  searchable = true,
  className = '',
  ...rest
}) {
  const [query, setQuery] = React.useState('');
  const [closed, setClosed] = React.useState({});
  const q = query.trim().toLowerCase();
  const filtered = categories.map(cat => ({
    ...cat,
    items: q ? cat.items.filter(i => i.label.toLowerCase().includes(q)) : cat.items
  })).filter(cat => !q || cat.items.length);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['el-side', className].filter(Boolean).join(' '),
    "aria-label": "Guides"
  }, rest), searchable ? /*#__PURE__*/React.createElement("div", {
    className: "el-side__search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    className: "el-side__input",
    type: "search",
    placeholder: "Search guides",
    "aria-label": "Search guides",
    value: query,
    onChange: e => setQuery(e.target.value)
  })) : null, /*#__PURE__*/React.createElement("div", null, filtered.map(cat => {
    const open = q ? true : !closed[cat.label];
    return /*#__PURE__*/React.createElement("div", {
      className: "el-side__cat",
      key: cat.label
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "el-side__catbtn",
      "aria-expanded": open,
      onClick: () => setClosed(c => ({
        ...c,
        [cat.label]: open
      }))
    }, /*#__PURE__*/React.createElement("span", null, cat.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down"
    })), open ? /*#__PURE__*/React.createElement("ul", {
      className: "el-side__list"
    }, cat.items.map(item => /*#__PURE__*/React.createElement("li", {
      key: item.label
    }, /*#__PURE__*/React.createElement("a", {
      className: "el-side__link",
      href: item.href,
      "aria-current": item.label === current ? 'page' : undefined
    }, item.label)))) : null);
  }), !filtered.length ? /*#__PURE__*/React.createElement("p", {
    className: "el-side__empty"
  }, "[ no matches ]") : null));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  items = [],
  logoSrc = '../../assets/elorin-logo.png',
  legal = 'Not affiliated with Jagex Ltd',
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: ['el-footer', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-footer__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "el-lockup",
    href: items.length ? items[0].href : '#'
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Elorin",
    style: {
      height: 44
    }
  })), /*#__PURE__*/React.createElement("nav", {
    className: "el-nav el-footer__nav",
    "aria-label": "Footer"
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    className: "el-nav__link",
    href: item.href
  }, item.label))), /*#__PURE__*/React.createElement("p", {
    className: "el-footer__legal"
  }, "[ ", legal, " ]")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  logoSrc = '../../assets/elorin-logo.png',
  wordmark = 'Elorin RSPS',
  variant = 'split',
  actions,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ['el-header', variant === 'centred' ? 'el-header--centred' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "el-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "el-lockup",
    href: items.length ? items[0].href : '#'
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Elorin"
  }), /*#__PURE__*/React.createElement("span", {
    className: "el-lockup__word"
  }, wordmark)), /*#__PURE__*/React.createElement("nav", {
    className: "el-nav el-header__nav",
    "aria-label": "Primary"
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.label,
    className: "el-nav__link",
    href: item.href,
    "aria-current": item.label === active ? 'page' : undefined
  }, item.label))), variant === 'centred' ? null : /*#__PURE__*/React.createElement("div", {
    className: "el-header__actions"
  }, actions)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/BossGuideScreen.jsx
try { (() => {
/* Elorin docs - boss guide page (Nex). Browser-loaded: no imports, no export. */
function BossGuideScreen({
  onNavigate
}) {
  const {
    SidebarNav,
    InfoBox,
    Callout,
    StepList,
    GearGrid,
    InventoryGrid,
    DataTable,
    VideoEmbed,
    Figure,
    Accordion,
    Badge,
    Tag,
    ItemChip
  } = window.ElorinRSPSDesignSystem_44a46d;
  const gear = [{
    name: 'Torva full helm'
  }, {
    name: 'Amulet of fury'
  }, {
    name: 'Zaryte bow'
  }, {
    name: 'Torva platebody'
  }, {
    name: 'Elysian spirit shield'
  }, null, {
    name: 'Torva platelegs'
  }, {
    name: "Barrows gloves"
  }, {
    name: 'Primordial boots'
  }, {
    name: 'Ring of life'
  }, null, {
    name: 'Ava device'
  }];
  const inv = [{
    name: 'Saradomin brew',
    qty: 6
  }, {
    name: 'Super restore',
    qty: 4
  }, {
    name: 'Ranging potion',
    qty: 2
  }, {
    name: 'Shark',
    qty: 3
  }, {
    name: 'Rune pouch'
  }, {
    name: 'Zaryte bow'
  }, {
    name: 'Blood rune',
    qty: 500
  }];
  const cols = [{
    key: 'item',
    label: 'Item'
  }, {
    key: 'qty',
    label: 'Qty',
    align: 'right'
  }, {
    key: 'rate',
    label: 'Rate',
    align: 'right',
    rarityKey: 'rarity'
  }];
  const rows = [{
    item: 'Blood rune',
    qty: '120 – 240',
    rate: '1/3',
    rarity: 'common'
  }, {
    item: 'Death rune',
    qty: '80 – 150',
    rate: '1/3',
    rarity: 'common'
  }, {
    item: 'Zarosian insignia',
    qty: '1',
    rate: '1/24',
    rarity: 'uncommon'
  }, {
    item: 'Ancient emblem',
    qty: '1',
    rate: '1/86',
    rarity: 'uncommon'
  }, {
    item: 'Virtus mask',
    qty: '1',
    rate: '1/645',
    rarity: 'rare'
  }, {
    item: 'Nexling',
    qty: '1',
    rate: '1/500',
    rarity: 'very-rare'
  }, {
    item: 'Torva platebody',
    qty: '1',
    rate: '1/860',
    rarity: 'mega-rare'
  }, {
    item: 'Zaryte bow',
    qty: '1',
    rate: '1/1200',
    rarity: 'mega-rare'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "el-page",
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--sidebar-w) minmax(0,1fr)',
      gap: 40,
      paddingBlock: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SidebarNav, {
    current: "Nex",
    categories: [{
      label: 'Getting started',
      items: [{
        label: 'Starting out',
        href: '#',
        onClick: onNavigate
      }, {
        label: 'Money making',
        href: '#'
      }, {
        label: 'Daily loop',
        href: '#'
      }]
    }, {
      label: 'Bosses',
      items: [{
        label: 'Nex',
        href: '#'
      }, {
        label: 'Corporeal Beast',
        href: '#'
      }, {
        label: 'Elorin Wyrm',
        href: '#'
      }, {
        label: 'Chaos Elemental',
        href: '#'
      }]
    }, {
      label: 'Raids',
      items: [{
        label: 'Vault of Elorin',
        href: '#'
      }, {
        label: 'Hard mode',
        href: '#'
      }]
    }, {
      label: 'Skilling',
      items: [{
        label: 'Fastest 99 Slayer',
        href: '#'
      }, {
        label: 'Runecrafting',
        href: '#'
      }]
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "el-label"
  }, "[ boss guide \xB7 god wars dungeon ]"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 32,
      alignItems: 'start',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("span", {
    className: "el-metal-silver"
  }, "Nex")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "elite",
    bar: true
  }, "Elite"), /*#__PURE__*/React.createElement(Tag, {
    tone: "blue",
    diamond: true
  }, "Team of 2 to 4"), /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    diamond: true
  }, "2011 drop table")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      maxWidth: '70ch'
    }
  }, "Four phases, one prayer switch per phase, and a blood sacrifice that will kill anyone standing still. Duo is the sweet spot: fast enough for 12 kills an hour, slow enough that one death does not end the trip."), /*#__PURE__*/React.createElement(Callout, {
    tone: "danger",
    title: "Hardcore"
  }, "Death inside the prison is permanent for hardcore accounts and the gravestone does not spawn. Bank your gear before you enter.")), /*#__PURE__*/React.createElement(InfoBox, {
    kind: "Boss",
    title: "Nex",
    rows: [{
      label: 'Combat',
      value: '1001'
    }, {
      label: 'Hitpoints',
      value: '5000'
    }, {
      label: 'Weakness',
      value: 'Magic'
    }, {
      label: 'Attack styles',
      value: 'All four'
    }, {
      label: 'Killcount',
      value: '40 any GWD'
    }, {
      label: 'Revision',
      value: '2011'
    }],
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tag, {
      tone: "mega-rare",
      diamond: true
    }, "Torva 1/860"), /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Duo"))
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 48
    }
  }, "The fight"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(StepList, {
    steps: [{
      title: 'Smash the ice barrier',
      body: /*#__PURE__*/React.createElement("p", null, "Four minions guard the entrance. Kill the mage first, she heals the rest.")
    }, {
      title: 'Phase one: Smoke',
      body: /*#__PURE__*/React.createElement("p", null, "Protect from Missiles. Stay out of the smoke cloud; it drains Prayer twice as fast as the hit itself.")
    }, {
      title: 'Phase two: Shadow',
      body: /*#__PURE__*/React.createElement("p", null, "Protect from Melee and keep moving. She marks a target with a blood sacrifice every 20 seconds.")
    }, {
      title: 'Phase three: Blood',
      body: /*#__PURE__*/React.createElement("p", null, "Kill the blood reaver before the heal lands. Ranged only, since melee pulls the reaver onto your partner.")
    }, {
      title: 'Phase four: Ice',
      body: /*#__PURE__*/React.createElement("p", null, "Protect from Magic. Break the ice prison on your partner immediately or they take the full special.")
    }]
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 48
    }
  }, "Recommended setup"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      maxWidth: '70ch'
    }
  }, "Bring ", /*#__PURE__*/React.createElement(ItemChip, {
    name: "Saradomin brew",
    qty: 6
  }), " over food, since the damage comes in bursts. A ", /*#__PURE__*/React.createElement(ItemChip, {
    name: "Ring of life",
    rarity: "rare"
  }), " is worth the slot on your first ten kills."), /*#__PURE__*/React.createElement("div", {
    className: "el-preset",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(GearGrid, {
    label: "Gear",
    slots: gear
  }), /*#__PURE__*/React.createElement(InventoryGrid, {
    label: "Inventory",
    items: inv
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: 48
    }
  }, "Drop table"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    caption: "Nex, 2011 drop table per kill",
    maxHeight: 340,
    columns: cols,
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(VideoEmbed, {
    caption: "Nex duo, full run"
  }), /*#__PURE__*/React.createElement(Figure, {
    caption: "Ancient prison, north entry"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    title: "Solo method",
    tag: "Advanced"
  }, /*#__PURE__*/React.createElement("p", null, "Possible from Ranged 95 with a Zaryte bow and a full inventory of brews. Expect eight minutes a kill and no room for a mistake on the blood phase.")), /*#__PURE__*/React.createElement(Accordion, {
    title: "Min-cash setup",
    tag: "Optional"
  }, /*#__PURE__*/React.createElement("p", null, "Karil top and skirt, rune crossbow, broad bolts. Slower, but nothing in the setup is worth losing.")))));
}
Object.assign(window, {
  BossGuideScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/BossGuideScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/ChecklistScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Elorin docs - Starting Out checklist screen.
   Loaded in the browser as text/babel, so: no imports, no export keyword.
   Design-system components come off the compiled bundle's global namespace. */
function ChecklistScreen({
  done,
  onToggle,
  onReset
}) {
  const {
    ProgressHeader,
    SectionCard,
    ChecklistItem,
    Callout,
    Badge,
    Tag,
    Button,
    Accordion,
    Icon
  } = window.ElorinRSPSDesignSystem_44a46d;
  const sections = [{
    label: 'Step 01',
    title: 'First hour',
    description: 'Get off Tutorial Island and into the game proper.',
    items: [{
      id: 'tutorial',
      title: 'Finish the tutorial',
      description: 'Skip it if you have played before. You keep the starter kit either way.'
    }, {
      id: 'pin',
      title: 'Set a bank PIN',
      description: 'Do it before your first trip out of Edgeville.'
    }, {
      id: 'vote',
      title: 'Vote for the first time',
      subSteps: ['Claim points at the Vote shop', 'Buy a Vote mystery box'],
      meta: /*#__PURE__*/React.createElement(Badge, {
        tone: "easy",
        bar: true
      }, "Easy")
    }, {
      id: 'starter',
      title: 'Claim the starter package from the Grand Exchange clerk',
      meta: /*#__PURE__*/React.createElement(Tag, {
        tone: "gold",
        diamond: true
      }, "One-off")
    }, {
      id: 'teleports',
      title: 'Learn the teleport hub',
      description: 'Home teleport first, then the ::train and ::shops commands.'
    }]
  }, {
    label: 'Step 02',
    title: 'Gear and combat',
    description: 'Combat is pre-EOC. Rune gear carries you further here than it does on OSRS.',
    items: [{
      id: 'rune',
      title: 'Buy a full rune set',
      meta: /*#__PURE__*/React.createElement(Badge, {
        tone: "skill",
        level: 40
      }, "Defence")
    }, {
      id: 'scimmy',
      title: 'Get a dragon scimitar and a dragon defender',
      description: 'Defender drops from the Warriors guild cyclops at 1/12.'
    }, {
      id: 'prayer',
      title: 'Train Prayer to 43 for Protect from Melee',
      subSteps: ['Bury big bones at the Chaos Temple', 'Or use a gilded altar in the donator zone']
    }, {
      id: 'slayer',
      title: 'Unlock your first Slayer task',
      meta: /*#__PURE__*/React.createElement(Badge, {
        tone: "medium",
        bar: true
      }, "Medium")
    }, {
      id: 'whip',
      title: 'Bank an Abyssal whip',
      description: 'Abyssal demons at Slayer 85, or buy one off another player.',
      meta: /*#__PURE__*/React.createElement(Badge, {
        tone: "hard",
        bar: true
      }, "Hard")
    }]
  }, {
    label: 'Step 03',
    title: 'First gold',
    description: 'Two methods that work from scratch with no requirements.',
    items: [{
      id: 'thieve',
      title: 'Thieve the Ardougne stalls until 5m',
      description: 'Silk, then master farmer runs. Bring food, not armour.'
    }, {
      id: 'gwd',
      title: 'Open a God Wars dungeon killcount on a bandos task'
    }, {
      id: 'flip',
      title: 'Flip one item on the Grand Exchange clone',
      subSteps: ['Check the ::prices board', 'Buy 100 blood runes, resell in the shop']
    }, {
      id: 'daily',
      title: 'Set a daily loop: vote, dailies, then a Slayer task'
    }]
  }, {
    label: 'Step 04',
    title: 'Endgame on the horizon',
    description: 'None of this is required. It is what the next month looks like.',
    items: [{
      id: 'nex',
      title: 'Duo Nex for the first time',
      meta: /*#__PURE__*/React.createElement(Badge, {
        tone: "elite",
        bar: true
      }, "Elite")
    }, {
      id: 'raid',
      title: 'Clear the Elorin raid on normal mode',
      meta: /*#__PURE__*/React.createElement(Tag, {
        tone: "gold",
        diamond: true
      }, "Custom")
    }, {
      id: 'wyrm',
      title: 'Kill the Elorin Wyrm solo',
      description: 'Custom boss. Magic-weak, drops the wyrm shield shards.'
    }, {
      id: 'cape',
      title: 'Earn a max cape'
    }]
  }];
  const all = sections.flatMap(s => s.items);
  const count = all.filter(i => done[i.id]).length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ProgressHeader, {
    title: "Starting out",
    value: count,
    total: all.length
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onReset
  }, "Reset")), /*#__PURE__*/React.createElement("div", {
    className: "el-page",
    style: {
      paddingBlock: '48px 64px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-label"
  }, "[ getting started \xB7 updated for launch ]"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 12,
      maxWidth: '18ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-metal-silver"
  }, "Starting out")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      maxWidth: '62ch'
    }
  }, "Work down the list. Tick things off as you go. Progress is saved on this device, so nobody sees your list but you. Nothing here is timed and nothing is missable."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#step-01"
  }, "Start the list"), /*#__PURE__*/React.createElement(Button, {
    variant: "discord",
    icon: "message-circle",
    href: "#"
  }, "Ask in Discord")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "tip"
  }, "Bank at Edgeville. The Grand Exchange clone, the fairy ring and the Slayer master are all one click from the bank chest."), sections.map((section, si) => /*#__PURE__*/React.createElement(SectionCard, {
    key: section.title,
    id: si === 0 ? 'step-01' : undefined,
    label: section.label,
    title: section.title,
    description: section.description,
    value: section.items.filter(i => done[i.id]).length,
    total: section.items.length
  }, section.items.map(item => /*#__PURE__*/React.createElement(ChecklistItem, _extends({
    key: item.id
  }, item, {
    checked: !!done[item.id],
    onChange: onToggle
  }))))), /*#__PURE__*/React.createElement(Callout, {
    tone: "warning"
  }, "The Wilderness is live everywhere north of the ditch, Revenant caves included. Take nothing you would mind losing."), /*#__PURE__*/React.createElement(Accordion, {
    title: "Coming from OSRS?",
    tag: "Optional"
  }, /*#__PURE__*/React.createElement("p", null, "No EOC, no OSRS accuracy formulas. Prayer switching matters more, tick eating matters less. Drop tables follow the revision each boss came from, so read the table on the boss page rather than the OSRS wiki.")), /*#__PURE__*/React.createElement("div", {
    className: "el-rule",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-diamond"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    style: {
      color: 'var(--gold-400)'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#nex",
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.04em',
      border: 0
    }
  }, "Next: your first boss")))));
}
Object.assign(window, {
  ChecklistScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/ChecklistScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs/GuidesHubScreen.jsx
try { (() => {
/* Elorin docs - guides hub / index. Browser-loaded: no imports, no export. */
function GuidesHubScreen({
  onOpenChecklist,
  onOpenBoss
}) {
  const {
    SidebarNav,
    Badge,
    Tag,
    Button,
    Icon,
    Callout
  } = window.ElorinRSPSDesignSystem_44a46d;
  const cards = [{
    label: 'Getting started',
    title: 'Starting out',
    desc: 'A tickable list from tutorial to your first boss trip.',
    meta: /*#__PURE__*/React.createElement(Badge, {
      tone: "easy",
      bar: true
    }, "Easy"),
    open: onOpenChecklist
  }, {
    label: 'Boss guide',
    title: 'Nex',
    desc: 'Four phases, one prayer switch each, 2011 drop table.',
    meta: /*#__PURE__*/React.createElement(Badge, {
      tone: "elite",
      bar: true
    }, "Elite"),
    open: onOpenBoss
  }, {
    label: 'Boss guide',
    title: 'Elorin Wyrm',
    desc: 'Custom boss. Magic-weak, drops the wyrm shield shards.',
    meta: /*#__PURE__*/React.createElement(Tag, {
      tone: "gold",
      diamond: true
    }, "Custom")
  }, {
    label: 'Raid',
    title: 'Vault of Elorin',
    desc: 'Three rooms, a team of five, and a hard mode nobody has cleared yet.',
    meta: /*#__PURE__*/React.createElement(Badge, {
      tone: "hard",
      bar: true
    }, "Hard")
  }, {
    label: 'Money making',
    title: 'First 10m',
    desc: 'Two methods with no requirements and no risk.',
    meta: /*#__PURE__*/React.createElement(Badge, {
      tone: "easy",
      bar: true
    }, "Easy")
  }, {
    label: 'Skilling',
    title: 'Fastest 99 Slayer',
    desc: 'Task blocks, cannon spots and the point breakpoints that matter.',
    meta: /*#__PURE__*/React.createElement(Badge, {
      tone: "medium",
      bar: true
    }, "Medium")
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "el-page",
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--sidebar-w) minmax(0,1fr)',
      gap: 40,
      paddingBlock: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SidebarNav, {
    current: "Starting out",
    categories: [{
      label: 'Getting started',
      items: [{
        label: 'Starting out',
        href: '#'
      }, {
        label: 'Money making',
        href: '#'
      }, {
        label: 'Daily loop',
        href: '#'
      }]
    }, {
      label: 'Bosses',
      items: [{
        label: 'Nex',
        href: '#'
      }, {
        label: 'Corporeal Beast',
        href: '#'
      }, {
        label: 'Elorin Wyrm',
        href: '#'
      }]
    }, {
      label: 'Raids',
      items: [{
        label: 'Vault of Elorin',
        href: '#'
      }, {
        label: 'Hard mode',
        href: '#'
      }]
    }, {
      label: 'Skilling',
      items: [{
        label: 'Fastest 99 Slayer',
        href: '#'
      }, {
        label: 'Runecrafting',
        href: '#'
      }]
    }]
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "el-label"
  }, "[ guides ]"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-metal-silver"
  }, "Player guides")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      maxWidth: '62ch'
    }
  }, "Written by the people who tested the content. If a guide is wrong, say so in Discord and it gets fixed the same day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Callout, {
    tone: "note"
  }, "Every drop table lists the revision it came from. Mixed-revision data means the OSRS wiki is right about the mechanics and wrong about the rates.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 20,
      marginTop: 28
    }
  }, cards.map(card => /*#__PURE__*/React.createElement("a", {
    key: card.title,
    href: "#",
    className: "el-surface",
    onClick: e => {
      e.preventDefault();
      if (card.open) card.open();
    },
    style: {
      display: 'block',
      padding: 20,
      border: '1px solid var(--border-subtle)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-label"
  }, "[ ", card.label, " ]"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 8
    }
  }, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 15
    }
  }, card.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 16
    }
  }, card.meta, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    style: {
      marginLeft: 'auto',
      color: 'var(--gold-400)',
      fontSize: 16
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "el-rule",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-diamond"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "message-circle",
    href: "#"
  }, "Request a guide"))));
}
Object.assign(window, {
  GuidesHubScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs/GuidesHubScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
/* Elorin main site - homepage, approximated from the supplied screenshot only
   (no source code or Figma was available). Browser-loaded: no imports, no export. */
function HomeScreen() {
  const {
    Button,
    Icon
  } = window.ElorinRSPSDesignSystem_44a46d;
  const parts = [['01', 'Days'], ['00', 'Hours'], ['16', 'Minutes'], ['29', 'Seconds']];
  const cards = [{
    label: 'Concept art · Pre-EOC combat',
    title: 'Pre-EOC combat',
    desc: 'Special attacks, prayer switching and the movement you remember. No EOC, no compromises.'
  }, {
    label: 'Concept art · Mixed revisions',
    title: 'Mixed revisions',
    desc: 'Content pulled from the golden age of RS, with OSRS additions where they earn their place.'
  }, {
    label: 'Concept art · Custom content',
    title: 'Custom content',
    desc: 'Bosses, raids and minigames built for this server, balanced around the pre-EOC combat triangle.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "el-page",
    style: {
      paddingBlock: '72px 96px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 1 120px',
      height: 1,
      background: 'var(--grad-rule)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "el-label",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 16px',
      border: '1px solid var(--border-gold-soft)',
      borderRadius: 'var(--radius-chip)',
      background: 'rgba(200,164,90,.06)',
      color: 'var(--gold-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-diamond",
    style: {
      width: 5,
      height: 5,
      background: 'var(--gold-200)'
    }
  }), "Elorin RSPS is coming soon"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 1 120px',
      height: 1,
      background: 'var(--grad-rule)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
      marginTop: 32
    }
  }, parts.map(([n, unit], i) => /*#__PURE__*/React.createElement("div", {
    key: unit,
    className: "el-surface",
    style: {
      width: 96,
      padding: '14px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: i === 0 ? 'var(--gold-200)' : 'var(--text-primary)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "el-label",
    style: {
      marginTop: 4,
      fontSize: 9
    }
  }, unit)))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elorin-logo.png",
    alt: "Elorin",
    style: {
      width: 'min(490px, 82%)',
      margin: '48px auto 0',
      filter: 'drop-shadow(0 0 60px rgba(74,127,193,.4))'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 40,
      fontSize: 'clamp(34px, 5.4vw, 56px)',
      lineHeight: 1.02
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-metal-silver"
  }, "A Pre-EOC RSPS,"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "el-metal-gold"
  }, "reforged.")), /*#__PURE__*/React.createElement("p", {
    className: "el-intro",
    style: {
      marginTop: 28
    }
  }, "Mixed-revision data spanning the golden age of RS with ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "OSRS content"), " woven in, plus an arsenal of ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "carefully crafted custom content"), ". Fast-paced, exciting, and built for players who want the best experience."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 14,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#"
  }, "Start your adventure"), /*#__PURE__*/React.createElement(Button, {
    variant: "discord",
    size: "lg",
    icon: "message-circle",
    href: "#"
  }, "Join the Discord"))), /*#__PURE__*/React.createElement("div", {
    className: "el-page",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 24,
      paddingBottom: 96
    }
  }, cards.map(card => /*#__PURE__*/React.createElement("article", {
    key: card.title,
    className: "el-surface",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 10',
      display: 'grid',
      placeItems: 'center',
      background: 'radial-gradient(300px 200px at 50% 40%, #1d2b49 0%, #0d1526 75%)',
      borderBottom: '1px solid var(--border-gold-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-diamond",
    style: {
      width: 34,
      height: 34,
      background: 'rgba(127,178,229,.32)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "el-label",
    style: {
      position: 'absolute',
      left: 16,
      bottom: 12,
      fontSize: 9
    }
  }, "[ ", card.label, " ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h3", null, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 15
    }
  }, card.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "el-label",
    style: {
      color: 'var(--text-gold)'
    }
  }, "Read more"), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    style: {
      color: 'var(--gold-400)',
      fontSize: 15
    }
  })))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressHeader = __ds_scope.ProgressHeader;

__ds_ns.SectionCard = __ds_scope.SectionCard;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ICON_PATHS = __ds_scope.ICON_PATHS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.InfoBox = __ds_scope.InfoBox;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.GearGrid = __ds_scope.GearGrid;

__ds_ns.InventoryGrid = __ds_scope.InventoryGrid;

__ds_ns.ItemChip = __ds_scope.ItemChip;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.VideoEmbed = __ds_scope.VideoEmbed;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
