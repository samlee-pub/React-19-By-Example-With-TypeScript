/**
 * A simple timer component that tracks elapsed time in seconds.
 * It uses the useRef hook to store the interval ID, allowing the timer
 * to be started, stopped, and reset without causing unnecessary re-renders.
 * The component provides buttons to control the timer and displays the
 * elapsed time.
 * The timer can be started and stopped multiple times, and the elapsed time
 * will continue from where it left off unless reset.
 * The useRef hook is used to store the interval ID, which is mutable and does not
 * trigger re-renders when updated.
 */
import { useRef, useState } from "react";

export function ComponentInstanceTracking() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<number>(NaN);
  const [isTimerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    if (isTimerRunning) return; // Don't start a new timer if one is already running
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setTimerRunning(true);
  };

  const stopTimer = () => {
    if (!isTimerRunning) return; // Don't stop if the timer is not running
    if (intervalRef.current) {
      // Clear the timer if it exists
      clearInterval(intervalRef.current);
    }
    setTimerRunning(false);
    // Reset the timerRef to NaN
    intervalRef.current = NaN;
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer} disabled={isTimerRunning}>
        Start
      </button>
      <button
        onClick={stopTimer}
        style={{ marginLeft: "1rem" }}
        disabled={!isTimerRunning}
      >
        Stop
      </button>
      <button onClick={resetTimer} style={{ marginLeft: "1rem" }}>
        Reset
      </button>
    </div>
  );
}
