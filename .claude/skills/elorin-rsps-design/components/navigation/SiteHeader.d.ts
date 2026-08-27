/**
 * Site header matching elorin.org: logo lockup, uppercase Cinzel nav, gold diamond under the active item.
 * @startingPoint section="Navigation" subtitle="Split and centred site headers" viewport="700x180"
 */
export interface NavItem {
  label: string;
  href: string;
}
export interface SiteHeaderProps {
  items?: NavItem[];
  /** Label of the current page - gets the gold diamond marker. */
  active?: string;
  /** Path to assets/elorin-logo.png, relative to the page. */
  logoSrc?: string;
  wordmark?: string;
  /** split = logo left / nav centre / actions right (main site). centred = stacked lockup (docs). */
  variant?: 'split' | 'centred';
  /** Right-hand slot in the split variant, e.g. Account / Logout buttons. */
  actions?: React.ReactNode;
  className?: string;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
