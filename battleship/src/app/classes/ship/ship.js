const ALIVE = false;
const HIT = true;

export default function ship(length) {
  if (!length || typeof length !== "number" || length < 1) {
    throw Error("ship object must have a positive length");
  }

  const parts = Array(length).fill(ALIVE);

  return {
    length: () => parts.length,
    /**
     * @param {number} position
     */
    isHit(position) {
      if (typeof position !== "number" || position < 0 || position >= length) {
        throw Error(`Position must be a number in range [0,${length})`);
      }
      return parts[position] !== ALIVE;
    },
    /**
     * @param {number} position
     */
    hit(position) {
      if (this.isHit(position)) {
        throw Error("this position has been hit before");
      }
      parts[position] = HIT;
    },
    /**
     * @returns {boolean}
     */
    isSunk: () => parts.reduce((p, c) => p && c === HIT, true),
  };
}
