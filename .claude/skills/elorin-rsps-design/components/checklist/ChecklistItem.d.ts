/** One tickable step. Checked state dims the row and strikes the title. */
export interface ChecklistItemProps {
  /** Stable id - also the localStorage key on the checklist page. */
  id: string;
  title: string;
  description?: string;
  /** Optional nested sub-steps, rendered with diamond bullets. */
  subSteps?: string[];
  /** Trailing slot for Badge / Tag metadata. */
  meta?: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean, id: string) => void;
  className?: string;
}
export declare function ChecklistItem(props: ChecklistItemProps): JSX.Element;
