/**
 * converts the given string to a first character capitalized string
 * @param {string} value arbitrary string
 * @returns {string} first character capitalized string
 */

export function capitalize(value) {
  if (!value) return "";
  value = value.toLocaleLowerCase();
  return value.at(0).toLocaleUpperCase() + value.slice(1);
}
