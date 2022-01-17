const palindromes = function (str) {
  let chars = str
    .toLowerCase()
    .split("")
    .filter((ch) => ch >= "a" && ch <= "z");
  while (chars.length > 1) {
    if (chars.shift() !== chars.pop()) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
