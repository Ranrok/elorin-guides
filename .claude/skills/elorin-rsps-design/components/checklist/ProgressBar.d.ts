/** Thin gold-fill progress bar with an uppercase mono count. */
export interface ProgressBarProps {
  value: number;
  total: number;
  /** Trailing word in the meta line: "12 of 40 complete". */
  label?: string;
  /** 4px track instead of 6px. */
  thin?: boolean;
  /** Hide the "12 of 40 complete" / percentage line. */
  showMeta?: boolean;
  className?: string;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
