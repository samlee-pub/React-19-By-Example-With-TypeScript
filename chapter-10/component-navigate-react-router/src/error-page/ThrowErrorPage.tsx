import { useEffect } from "react";

export function ThrowErrorPage() {
  useEffect(() => {
    throw new Error("Component Throw Error");
  });
  return (
    <div>
      <h2>Data Page</h2>
    </div>
  );
}
