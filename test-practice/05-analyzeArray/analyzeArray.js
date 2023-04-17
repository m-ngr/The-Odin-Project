/**
 * returns an object of average, min, max, and length for the given array of numbers
 * @param {[number]} numbers array of numbers
 * @returns {{average:number,min:number,max:number,length:number}}
 */
export function analyzeArray(numbers) {
  if (isArrayOfNumbers(numbers)) {
    return {
      average: numbers.reduce((p, c) => p + c, 0) / numbers.length,
      min: Math.min(...numbers),
      max: Math.max(...numbers),
      length: numbers.length,
    };
  }
}

function isArrayOfNumbers(array) {
  return (
    Array.isArray(array) &&
    array.length > 0 &&
    array.reduce((p, c) => p && typeof c === "number", true)
  );
}
