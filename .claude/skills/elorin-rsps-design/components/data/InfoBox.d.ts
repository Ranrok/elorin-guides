/** Right-rail infobox for NPC and item pages. */
export interface InfoBoxProps {
  /** Mono bracket kind, e.g. "BOSS", "ITEM". */
  kind?: string;
  title: string;
  /** Screenshot URL; renders a placeholder panel when absent. */
  image?: string;
  rows?: { label: string; value: React.ReactNode }[];
  /** Footer slot for Tag / Badge metadata. */
  footer?: React.ReactNode;
  className?: string;
}
export declare function InfoBox(props: InfoBoxProps): JSX.Element;
