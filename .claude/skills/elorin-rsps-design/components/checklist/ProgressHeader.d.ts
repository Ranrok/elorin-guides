/** Sticky overall-progress header; stays visible while the checklist scrolls. */
export interface ProgressHeaderProps {
  title?: string;
  value: number;
  total: number;
  /** Trailing slot - e.g. a ghost "Reset" Button. */
  children?: React.ReactNode;
  className?: string;
}
export declare function ProgressHeader(props: ProgressHeaderProps): JSX.Element;
