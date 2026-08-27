/** Collapsible block for optional or advanced detail. Native <details>. */
export interface AccordionProps {
  title: string;
  /** Mono bracket tag on the right of the summary, e.g. "ADVANCED". */
  tag?: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
