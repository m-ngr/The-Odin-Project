export function randomize(array) {
  return randomUniqueArray(array.length).map((i) => array[i]);
}

function randomUniqueArray(length) {
  const array = [];
  const randomNumber = () => Math.floor(Math.random() * length);

  while (array.length < length) {
    const num = randomNumber();
    if (array.includes(num) === false) {
      array.push(num);
    }
  }
  return array;
}
