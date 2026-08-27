/** Callout box in four tones: tip, note, warning, danger. */
export interface CalloutProps {
  tone?: 'tip' | 'note' | 'warning' | 'danger';
  /** Overrides the default uppercase mono title for the tone. */
  title?: string;
  /** Overrides the tone's default Lucide icon. */
  icon?: string;
  children?: React.ReactNode;
  className?: string;
}
export declare function Callout(props: CalloutProps): JSX.Element;
