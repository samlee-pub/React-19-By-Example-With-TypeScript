/**
 * A simple presentation component that displays a welcome message with a customizable name.
 * This component serves as a basic greeting interface with minimal interactive elements.
 */
export function Welcome({ name = "Guest" }: { name?: string }) {
  return (
    <div>
      {/* Main welcome heading */}
      <h1>Welcome, {name}!</h1>
      {/* Placeholder button - currently non-functional */}
      <button>Click me</button>
    </div>
  );
}
