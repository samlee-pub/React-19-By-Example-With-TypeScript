/**
 * @ReactDOM Component: <ChildFC message={"..."} />
 * @param {string} props.message - The message sent from the parent component.
 * @example
 * <ChildFC message="Hello from ChildFC!" />
 */
export function ChildFC({ message }: { message: string }) {
  return <div>Child says: {message}</div>;
}
