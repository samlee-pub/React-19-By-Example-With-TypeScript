/**
 * ExpensiveChildComponent.tsx
 * This component simulates an expensive child component that receives props.
 * It logs the props value and returns a div with the props value.
 * This component is used in the MemoComponent example to demonstrate the use of useMemo.
 * The component is expensive to render, so it is memoized using useMemo.
 * The useMemo hook is used to memoize the component's output based on the props value.
 * If the props value does not change, the memoized output is returned, avoiding unnecessary re-renders.
 * This component is used in the MemoComponent example to demonstrate the use of useMemo with a child component.
 * The component is memoized using useMemo, and the memoized output is returned if the props value does not change.
 * If the props value changes, the component is re-rendered, and the memoized output is updated.
 * The component is used in the MemoComponent example to demonstrate the use of useMemo with a child component.
 * The component is memoized using useMemo, and the memoized output is returned if the props value does not change.
 * If the props value changes, the component is re-rendered, and the memoized output is updated.
 */
export function ExpensiveChildComponent({ data }: { data: { value: number } }) {
  console.log(`Memoizing Child Component with props value: ${data.value}`);
  return <div>Child Component props: data={JSON.stringify(data)}</div>;
}
