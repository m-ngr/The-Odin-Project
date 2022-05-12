const ALIVE = false;
const HIT = true;

export default function ship(length) {
  if (!length || typeof length !== "number" || length < 1) {
    throw Error("ship object must have a positive length");
  }

  const parts = Array(length).fill(ALIVE);

  return {
    length: () => parts.length,

    hit(position) {
      if (typeof position === "number" && parts[position] === ALIVE) {
        parts[position] = HIT;
        return true;
      }

      return false;
    },

    isSunk: () => parts.reduce((p, c) => p && c === HIT, true),
  };
}
