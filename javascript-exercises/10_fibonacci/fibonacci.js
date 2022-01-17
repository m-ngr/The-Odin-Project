const fibonacci = (number) => {
  if (number < 1) return "OOPS";
  if (number < 3) return 1;
  // using result object to memorize results, so we don't compute them again.
  if (fibonacci.result === undefined) fibonacci.result = {};
  if (!(number in fibonacci.result)) {
    fibonacci.result[number] = fibonacci(+number - 1) + fibonacci(+number - 2);
  }
  return fibonacci.result[number];
};

// Do not edit below this line
module.exports = fibonacci;
