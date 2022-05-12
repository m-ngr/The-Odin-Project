import ship from "./ship";

describe("ship object", () => {
  test("should throw error if length parameter isn't a number", () => {
    expect(() => {
      ship(null);
    }).toThrow();

    expect(() => {
      ship("2");
    }).toThrow();
  });

  test("should throw error if length parameter <= 0", () => {
    expect(() => {
      ship(0);
    }).toThrow();

    expect(() => {
      ship(-5);
    }).toThrow();
  });
});

describe("length property", () => {
  test("should exist", () => {
    expect(ship(4)).toHaveProperty("length");
  });

  test("should be a function", () => {
    expect(ship(4).length).toBeInstanceOf(Function);
  });

  test("should return the ship length (positive number)", () => {
    expect(ship(1).length()).toBe(1);
    expect(ship(3).length()).toBe(3);
    expect(ship(5).length()).toBe(5);
  });
});

describe("hit property", () => {
  test("should exist", () => {
    expect(ship(4)).toHaveProperty("hit");
  });

  test("should be a function", () => {
    expect(ship(4).hit).toBeInstanceOf(Function);
  });

  test("should return false if position isn't a number", () => {
    expect(ship(4).hit()).toBe(false);
    expect(ship(4).hit("2")).toBe(false);
    expect(ship(4).hit([0, 3])).toBe(false);
  });

  test("should return false if position is negative", () => {
    expect(ship(4).hit(-1)).toBe(false);
  });

  test("should return false if position >= ship.length()", () => {
    expect(ship(4).hit(4)).toBe(false);
    expect(ship(4).hit(5)).toBe(false);
  });

  test("should return false if position was hit before", () => {
    const testShip = ship(5);
    testShip.hit(2);
    expect(testShip.hit(2)).toBe(false);
  });

  test("should return true if position wasn't hit before", () => {
    const testShip = ship(3);
    expect(testShip.hit(0)).toBe(true);
    expect(testShip.hit(1)).toBe(true);
    expect(testShip.hit(2)).toBe(true);
  });
});

describe("isSunk property", () => {
  test("should exist", () => {
    expect(ship(4)).toHaveProperty("isSunk");
  });

  test("should be a function", () => {
    expect(ship(4).isSunk).toBeInstanceOf(Function);
  });

  test("should return false if no position was hit", () => {
    expect(ship(4).isSunk()).toBe(false);
  });

  test("should return false if some positions was hit", () => {
    const shortShip = ship(2);
    shortShip.hit(0);

    expect(shortShip.isSunk()).toBe(false);

    const longShip = ship(3);
    longShip.hit(1);
    longShip.hit(2);

    expect(longShip.isSunk()).toBe(false);
  });

  test("should return true if all positions was hit", () => {
    const shortShip = ship(1);
    shortShip.hit(0);

    expect(shortShip.isSunk()).toBe(true);

    const longShip = ship(3);
    longShip.hit(0);
    longShip.hit(1);
    longShip.hit(2);

    expect(longShip.isSunk()).toBe(true);
  });
});
