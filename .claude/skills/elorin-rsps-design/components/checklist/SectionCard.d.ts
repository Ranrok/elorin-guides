/** A group of checklist items under a Cinzel heading with its own progress. */
export interface SectionCardProps {
  /** Mono bracket label above the title, e.g. "STEP 01". Brackets are added for you. */
  label?: string;
  title: string;
  description?: string;
  value?: number;
  total?: number;
  /** ChecklistItem children. */
  children?: React.ReactNode;
  className?: string;
}
export declare function SectionCard(props: SectionCardProps): JSX.Element;
