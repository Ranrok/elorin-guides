/** Numbered walkthrough steps with a connecting rule. */
export interface Step {
  title: string;
  body?: React.ReactNode;
}
export interface StepListProps {
  steps: Step[];
  className?: string;
}
export declare function StepList(props: StepListProps): JSX.Element;
