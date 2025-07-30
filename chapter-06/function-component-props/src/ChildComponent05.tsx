/**
 * This component demonstrates how to access and use callback props in a functional component.
 * It receives an optional `onclick` prop, which is a function that can be called when the button is clicked.
 * If `onclick` is provided, clicking the button will trigger that function.
 * Usage:
 *   <ChildComponent05 onclick={() => console.log('Button clicked!')} />
 *   <ChildComponent05 /> // No button click action
 */

export function ChildComponent05({ onclick }: { onclick?: () => void }) {
  return (
    <div className="my-box-border-1">
      <div>Callback Props from Parent</div>
      <div className="my-box-border-1">
        <button className="fg-blue" onClick={onclick}>
          Click Me!
        </button>
      </div>
    </div>
  );
}
