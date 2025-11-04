/**
 * The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
 * This function generates the Fibonacci sequence up to the specified index.
 * @param index - The index up to which the Fibonacci sequence should be generated.
 * @returns The Fibonacci sequence up to the specified index.
 */
export const FibArrayFn = (index: number) => {
  if (index <= 2) return [0, 1, 1];
  const newArray = Array.from([0, 1, 1]);
  for (let i = 3; i <= index; i++) {
    newArray.push(newArray[i - 1] + newArray[i - 2]);
  }
  return newArray;
};
