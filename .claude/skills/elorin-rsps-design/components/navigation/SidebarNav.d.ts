/**
 * Wiki sidebar: search box plus collapsible categories.
 * @startingPoint section="Navigation" subtitle="Searchable collapsible wiki sidebar" viewport="700x420"
 */
export interface SidebarCategory {
  label: string;
  items: { label: string; href: string }[];
}
export interface SidebarNavProps {
  categories: SidebarCategory[];
  /** Label of the current page. */
  current?: string;
  searchable?: boolean;
  className?: string;
}
export declare function SidebarNav(props: SidebarNavProps): JSX.Element;
