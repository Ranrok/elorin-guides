/** 2px-radius mono chip for difficulty, level requirements and counts. */
export interface BadgeProps {
  tone?: 'default' | 'easy' | 'medium' | 'hard' | 'elite' | 'gold' | 'skill';
  /** 3px leading bar in the current colour - used on difficulty badges. */
  bar?: boolean;
  /** Trailing number, tinted gold (skill level requirements). */
  level?: number | string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
