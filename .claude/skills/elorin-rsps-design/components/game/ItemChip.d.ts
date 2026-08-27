/** Small icon + name chip, usable inline in prose. */
export interface ItemChipProps {
  name: string;
  /** Item sprite URL. Renders a placeholder diamond when absent. */
  icon?: string;
  qty?: number | string;
  href?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'very-rare' | 'mega-rare';
  className?: string;
}
export declare function ItemChip(props: ItemChipProps): JSX.Element;
