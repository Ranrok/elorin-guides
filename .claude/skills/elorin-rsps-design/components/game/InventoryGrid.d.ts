/** 4 x 7 inventory grid - always 28 slots. */
export interface InventoryGridProps {
  /** Items in reading order; short arrays leave empty slots. */
  items?: ({ name?: string; icon?: string; qty?: number | string } | null)[];
  label?: string;
  className?: string;
}
export declare function InventoryGrid(props: InventoryGridProps): JSX.Element;
