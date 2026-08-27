/** Centred footer lockup, link row and mono legal line. */
export interface SiteFooterProps {
  items?: { label: string; href: string }[];
  logoSrc?: string;
  /** Mono legal line; brackets are added for you. */
  legal?: string;
  className?: string;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
