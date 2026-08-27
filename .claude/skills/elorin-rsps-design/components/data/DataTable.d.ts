/**
 * Data table with sticky header, 2% zebra rows and rarity-coloured numeric cells.
 * @startingPoint section="Data" subtitle="Drop table with sticky header and rarity rates" viewport="700x380"
 */
export interface Column {
  key: string;
  label: string;
  /** right = mono, tabular-nums, right-aligned. */
  align?: 'left' | 'right';
  /** Row key holding a rarity name; tints this cell. */
  rarityKey?: string;
}
export interface DataTableProps {
  columns: Column[];
  rows: Record<string, any>[];
  /** Mono bracket caption above the header row. */
  caption?: string;
  /** Enables scroll + sticky header, e.g. 420. */
  maxHeight?: number | string;
  className?: string;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
