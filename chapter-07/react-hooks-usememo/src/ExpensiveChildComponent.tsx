/**
 * This component simulates an expensive child component that receives props.
 */
export function ExpensiveChildComponent({ data }: { data: { value: number } }) {
  console.log(`Memoizing Child Component with props value: ${data.value}`);
  return <div>Child Component props: data={JSON.stringify(data)}</div>;
}
