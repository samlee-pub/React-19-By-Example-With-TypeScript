/**
 * The ChildComponent is a functional component that takes three props: data, onParentCountChange, and onLogHandler.
 * The data prop is a number that is passed from the parent component.
 * The onParentCountChange prop is a function that is passed from the parent component.
 * The onLogHandler prop is a function that is passed from the parent component.
 */
export function ChildComponent({
  data,
  onParentCountChange,
  onLogHandler,
}: {
  data: number;
  onParentCountChange: () => void;
  onLogHandler: (message: string) => void;
}) {
  onLogHandler(`In Child Component - { data:${data} }`);
  return (
    <div className="my-box-border-1">
      <div>{`Child Component props: { data: ${data} }`}</div>
      <button onClick={onParentCountChange}>Parent Count ++</button>
    </div>
  );
}
