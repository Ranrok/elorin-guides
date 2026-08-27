/** 4-wide equipment preset grid of 48px slots with hover tooltips. */
export interface Slot {
  name?: string;
  icon?: string;
  qty?: number | string;
}
export interface GearGridProps {
  /** Up to 12 slots in reading order; null for a gap. Defaults to 12 empty slots. */
  slots?: (Slot | null)[];
  /** Mono bracket label above the grid. */
  label?: string;
  className?: string;
}
export declare function GearGrid(props: GearGridProps): JSX.Element;
