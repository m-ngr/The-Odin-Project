/**
 * reverses the given string
 * @param {string} value arbitrary string
 * @returns {string} reversed string
 */
export function reverseString(value) {
  if (typeof value === "string") return value.split("").reverse().join("");
}
