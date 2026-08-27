/** Pill tag for rarity, skill and metadata. */
export interface TagProps {
  tone?: 'default' | 'gold' | 'blue' | 'common' | 'uncommon' | 'rare' | 'very-rare' | 'mega-rare';
  /** Lucide icon name. */
  icon?: string;
  /** Leading rotated-square marker in the current colour. */
  diamond?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
