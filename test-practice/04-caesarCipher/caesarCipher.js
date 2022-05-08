/**
 * shifts all (a-z / A-Z) chars in the given text by the given key
 * @param {string} text Plain text
 * @param {number} key shift key
 * @returns {string} Cipher text
 */
export function caesarCipher(text, key) {
  if (typeof text === "string" && typeof key === "number") {
    return text
      .split("")
      .map((char) => shift(char, key))
      .join("");
  }
}

function shift(char, key) {
  if (/^[a-z]+$/i.test(char) === false) return char;
  const base =
    char === char.toLocaleUpperCase() ? "A".charCodeAt(0) : "a".charCodeAt(0);
  let steps = (char.charCodeAt(0) - base + key) % 26;
  if (steps < 0) steps += 26;
  return String.fromCharCode(base + steps);
}
