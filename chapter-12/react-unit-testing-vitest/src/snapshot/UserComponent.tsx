/**
 * This component demonstrates a simple user card that can be used for
 * Vitest snapshot testing. Snapshot testing ensures that the component's
 * output does not change unexpectedly over time.
 */
export function UserComponent(user: { name: string; email: string }) {
  return (
    <div className="user-card">
      <h2>${user.name}</h2>
      <p>${user.email}</p>
    </div>
  );
}
