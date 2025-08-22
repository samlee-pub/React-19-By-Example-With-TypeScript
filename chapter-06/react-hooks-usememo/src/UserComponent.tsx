/**
 * This component simulates a user component that receives props.
 * RegularUserComponent: Re-renders even when props don't change.
 * MemoizedUserComponent: Only re-renders when props change.
 */
import { memo } from "react";

// Regular component (re-renders even when props don't change)
export function RegularUserComponent({
  user,
  handleLogMessageEvent,
}: {
  user: { name: string; age: number };
  handleLogMessageEvent: (message: string) => void;
}) {
  console.log("RegularUser component rendered");
  handleLogMessageEvent("RegularUser component rendered");
  return (
    <div>{`Regular Component: {name: ${user.name}, age: ${user.age}}`}</div>
  );
}
// Memoized component (only re-renders when props change)
export const MemoizedUserComponent = memo(function MemoizedUser({
  user,
  handleLogMessageEvent,
}: {
  user: { name: string; age: number };
  handleLogMessageEvent: (message: string) => void;
}) {
  console.log("MemoizedUser component rendered");
  handleLogMessageEvent("MemoizedUser component rendered");
  return (
    <div>{`Memoized Component: {name: ${user.name}, age: ${user.age}}`}</div>
  );
});
