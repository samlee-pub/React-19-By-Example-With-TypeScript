/**
 * Fibonacci function that calculates the nth Fibonacci number.
 * The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
 * If the input is less than 1, it returns 0. If the input is 1, it returns 1.
 * The function iterates from 2 up to the given input, calculating each Fibonacci number iteratively.
 * @param num - The position in the Fibonacci sequence to calculate.
 * @returns The nth Fibonacci number.
 */
export const FibFn = (num: number) => {
  if (num < 1) return 0;
  if (num === 1) return 1;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= num; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};
