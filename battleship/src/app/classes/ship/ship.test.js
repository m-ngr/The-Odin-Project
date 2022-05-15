import ship from "./ship";

describe("ship factory", () => {
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
  test("should be a function", () => {
    expect(ship(4).length).toBeInstanceOf(Function);
  });

  test("should return the ship length (positive number)", () => {
    expect(ship(1).length()).toBe(1);
    expect(ship(3).length()).toBe(3);
    expect(ship(5).length()).toBe(5);
  });
});

describe("isHit property", () => {
  test("should be a function", () => {
    expect(ship(4).isHit).toBeInstanceOf(Function);
  });

  test("should throw error if if position isn't a non-negative number", () => {
    expect(() => {
      ship(4).isHit();
    }).toThrow();

    expect(() => {
      ship(4).isHit("2");
    }).toThrow();

    expect(() => {
      ship(4).isHit(-1);
    }).toThrow();
  });

  test("should throw error if position >= ship.length()", () => {
    expect(() => {
      ship(4).isHit(4);
    }).toThrow();
    expect(() => {
      ship(4).isHit(5);
    }).toThrow();
  });

  test("should return false if position wasn't hit before", () => {
    expect(ship(4).isHit(1)).toBe(false);
  });

  test("should return true if position was hit before", () => {
    const testShip = ship(5);
    testShip.hit(2);
    expect(testShip.isHit(2)).toBe(true);
  });
});

describe("hit property", () => {
  test("should be a function", () => {
    expect(ship(4).hit).toBeInstanceOf(Function);
  });

  test("should throw error if if position isn't a non-negative number", () => {
    expect(() => {
      ship(4).hit();
    }).toThrow();

    expect(() => {
      ship(4).hit("2");
    }).toThrow();

    expect(() => {
      ship(4).hit(-1);
    }).toThrow();
  });

  test("should throw error if position >= ship.length()", () => {
    expect(() => {
      ship(4).hit(4);
    }).toThrow();
    expect(() => {
      ship(4).hit(5);
    }).toThrow();
  });

  test("should throw error if position was hit before", () => {
    const testShip = ship(5);
    testShip.hit(2);
    expect(() => {
      testShip.hit(2);
    }).toThrow();
  });
});

describe("isSunk property", () => {
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
