/**
 * This component showcases how function-based child components receive and display data from parent components
 * using TypeScript for type-safe prop passing.
 *
 * @param {string} message - The message text to be displayed from the parent component
 *
 * @example
 * // Basic usage with string message
 * <ChildFC message="Hello from parent!" />
 */
export function ChildFC({ message }: { message: string }) {
  return <div>Child says: {message}</div>;
}
