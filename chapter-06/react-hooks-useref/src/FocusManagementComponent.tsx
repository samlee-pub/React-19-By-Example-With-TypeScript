/**
 * This component demonstrates how to use the useRef hook to manage focus on an input element
 * and to echo the input value in real-time. The input field is automatically focused when
 * the component mounts, and as the user types, the input value is displayed in a separate
 * span element.
 * The useRef hook is used to create references to the input and span elements, allowing direct
 * manipulation of their properties without causing re-renders.
 */
import { useEffect, useRef } from "react";

export function FocusManagementComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const echoRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleInputChange = () => {
    if (echoRef.current && inputRef.current) {
      echoRef.current.innerText = inputRef.current.value;
    }
  };

  return (
    <div className="my-box-border-1">
      <div style={{ marginTop: "0.5rem" }}>
        <input
          size={36}
          ref={inputRef}
          placeholder="Auto-focused"
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginTop: "0.5rem", textAlign: "left" }}>
        Echo:
        <span style={{ color: "red" }} ref={echoRef} />
      </div>
    </div>
  );
}
