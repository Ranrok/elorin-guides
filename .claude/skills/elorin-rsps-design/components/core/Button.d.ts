/** Elorin button. Primary is the gold gradient with diamond flourishes. */
export interface ButtonProps {
  /** primary = gold gradient; secondary = navy fill / blue border; discord = Discord blue; ghost = text + underline on hover; outline = navy card fill / grey border. */
  variant?: 'primary' | 'secondary' | 'discord' | 'ghost' | 'outline';
  /** sm is desktop-dense only - never the sole tap target on mobile. */
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Lucide icon name, placed before the label. */
  icon?: string;
  /** Diamond flourishes flanking the label. Defaults to true for primary only. */
  flourishes?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function Button(props: ButtonProps): JSX.Element;
