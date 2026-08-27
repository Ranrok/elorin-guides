/** Lucide glyph painted with currentColor via CSS mask. Sizes from font-size. */
export interface IconProps {
  /** Lucide icon name, kebab-case, e.g. "triangle-alert". */
  name: string;
  /** Glyph size; number = px. Defaults to the parent's font-size. */
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
