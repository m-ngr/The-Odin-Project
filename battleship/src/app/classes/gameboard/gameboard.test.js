import gameboard from "./gameboard";
import { ship } from "../index";

describe("gameboard factory", () => {
  test("should throw error if rows called with non-numeric value", () => {
    expect(() => {
      gameboard("1", 5);
    }).toThrow();

    expect(() => {
      gameboard([5], 5);
    }).toThrow();
  });

  test("should throw error if columns called with non-numeric value", () => {
    expect(() => {
      gameboard(5, "6");
    }).toThrow();

    expect(() => {
      gameboard(5, [9]);
    }).toThrow();
  });

  test("should throw error if rows called with non-positive number", () => {
    expect(() => {
      gameboard(0, 5);
    }).toThrow();
    expect(() => {
      gameboard(-3, 5);
    }).toThrow();
  });

  test("should throw error if columns called with non-positive number", () => {
    expect(() => {
      gameboard(5, 0);
    }).toThrow();
    expect(() => {
      gameboard(5, -5);
    }).toThrow();
  });

  test("should create 10 by 10 board if no parameter passed", () => {
    expect(gameboard().rows()).toBe(10);
    expect(gameboard().columns()).toBe(10);
  });

  test("should create square board if one parameter passed", () => {
    const testBoard = gameboard(5);
    expect(testBoard.rows()).toBe(5);
    expect(testBoard.columns()).toBe(5);
  });

  test("should create board with the given rows and columns", () => {
    const testBoard = gameboard(5, 7);
    expect(testBoard.rows()).toBe(5);
    expect(testBoard.columns()).toBe(7);
  });
});

describe("rows property", () => {
  test("should be a function", () => {
    expect(gameboard().rows).toBeInstanceOf(Function);
  });

  test("should return number of rows (positive number)", () => {
    expect(gameboard(5, 8).rows()).toBe(5);
    expect(gameboard(9, 8).rows()).toBe(9);
  });
});

describe("columns property", () => {
  test("should be a function", () => {
    expect(gameboard().columns).toBeInstanceOf(Function);
  });

  test("should return number of columns (positive number)", () => {
    expect(gameboard(5, 8).columns()).toBe(8);
    expect(gameboard(9, 4).columns()).toBe(4);
  });
});

describe("place property", () => {
  test("should be a function", () => {
    expect(gameboard().place).toBeInstanceOf(Function);
  });

  test("should throw error if ship parameter isn't a ship object", () => {
    expect(() => {
      gameboard().place(null, 0, 0, true);
    }).toThrow();

    expect(() => {
      gameboard().place(["ship", 15, "NOT"], 0, 0, true);
    }).toThrow();
  });

  test("should throw error if row parameter isn't a non-negative number", () => {
    expect(() => {
      gameboard().place(ship(4), undefined, 0, true);
    }).toThrow();

    expect(() => {
      gameboard().place(ship(4), -1, 0, true);
    }).toThrow();
  });

  test("should throw error if column parameter isn't a non-negative number", () => {
    expect(() => {
      gameboard().place(ship(4), 0, null, true);
    }).toThrow();

    expect(() => {
      gameboard().place(ship(4), 0, -5, true);
    }).toThrow();
  });

  test("should throw error if row parameter >= gameboard.rows()", () => {
    expect(() => {
      gameboard(5, 5).place(ship(4), 5, 0, true);
    }).toThrow();

    expect(() => {
      gameboard(5, 5).place(ship(4), 6, 0, true);
    }).toThrow();
  });

  test("should throw error if column parameter >= gameboard.columns()", () => {
    expect(() => {
      gameboard(5, 5).place(ship(4), 0, 5, true);
    }).toThrow();

    expect(() => {
      gameboard(5, 5).place(ship(4), 0, 7, true);
    }).toThrow();
  });

  describe("horizontal placing", () => {
    test("should return false if the ship length > board columns", () => {
      expect(gameboard(5, 2).place(ship(3), 0, 0, true)).toBe(false);
    });

    test("should return false if the ship length > board columns to the right", () => {
      expect(gameboard(5, 5).place(ship(3), 0, 3, true)).toBe(false);
    });

    test("should return false if new ship overlaps with existing ship", () => {
      const board = gameboard(5, 5);
      board.place(ship(3), 0, 1, true);
      expect(board.place(ship(3), 0, 0, true)).toBe(false);
      expect(board.place(ship(3), 0, 2, true)).toBe(false);
    });

    test("should return true if the ship fits in the board", () => {
      expect(gameboard(5, 5).place(ship(3), 0, 0, true)).toBe(true);
      expect(gameboard(5, 5).place(ship(5), 0, 0, true)).toBe(true);
    });
  });

  describe("vertical placing", () => {
    test("should return false if the ship length > board rows", () => {
      expect(gameboard(2, 6).place(ship(3), 0, 0, false)).toBe(false);
    });

    test("should return false if the ship length > board rows to the bottom", () => {
      expect(gameboard(5, 5).place(ship(3), 3, 0, false)).toBe(false);
    });

    test("should return false if new ship overlaps with existing ship", () => {
      const board = gameboard(5, 5);
      board.place(ship(3), 1, 1, false);
      expect(board.place(ship(3), 0, 1, false)).toBe(false);
      expect(board.place(ship(3), 3, 1, false)).toBe(false);
    });

    test("should return true if the ship fits in the board", () => {
      expect(gameboard(5, 5).place(ship(3), 0, 0, false)).toBe(true);
      expect(gameboard(5, 5).place(ship(5), 0, 0, false)).toBe(true);
    });
  });
});

describe("attack property", () => {
  test("should be a function", () => {
    expect(gameboard().attack).toBeInstanceOf(Function);
  });

  test("should throw error if row parameter isn't a non-negative number", () => {
    expect(() => {
      gameboard().attack("0", 0);
    }).toThrow();

    expect(() => {
      gameboard().attack(-1, 0);
    }).toThrow();
  });

  test("should throw error if column parameter isn't a non-negative number", () => {
    expect(() => {
      gameboard().attack(0, null);
    }).toThrow();

    expect(() => {
      gameboard().attack(0, -3);
    }).toThrow();
  });

  test("should throw error if row parameter >= gameboard.rows()", () => {
    expect(() => {
      gameboard(5, 5).attack(5, 0);
    }).toThrow();

    expect(() => {
      gameboard(5, 5).attack(6, 0);
    }).toThrow();
  });

  test("should throw error if column parameter >= gameboard.columns()", () => {
    expect(() => {
      gameboard(5, 5).attack(0, 5);
    }).toThrow();

    expect(() => {
      gameboard(5, 5).attack(0, 7);
    }).toThrow();
  });

  test("should throw error if the target position was attacked before", () => {
    const board = gameboard(5, 5);
    board.place(ship(1), 0, 0, true);
    board.attack(0, 0);
    expect(() => {
      board.attack(0, 0);
    }).toThrow();
  });

  test("should return false if the target position was empty", () => {
    expect(gameboard().attack(1, 1)).toBe(false);
  });

  test("should return true if the target position was a ship", () => {
    const board = gameboard(5, 5);
    board.place(ship(1), 0, 0, true);
    expect(board.attack(0, 0)).toBe(true);
  });
});
describe("isAttacked property", () => {
  test("should be a function", () => {
    expect(gameboard().isAttacked).toBeInstanceOf(Function);
  });

  test("should throw error if row parameter isn't a non-negative number", () => {
    expect(() => {
      gameboard().isAttacked("0", 0);
    }).toThrow();

    expect(() => {
      gameboard().isAttacked(-1, 0);
    }).toThrow();
  });

  test("should throw error if column parameter isn't a non-negative number", () => {
    expect(() => {
      gameboard().isAttacked(0, null);
    }).toThrow();

    expect(() => {
      gameboard().isAttacked(0, -3);
    }).toThrow();
  });

  test("should throw error if row parameter >= gameboard.rows()", () => {
    expect(() => {
      gameboard(5, 5).isAttacked(5, 0);
    }).toThrow();

    expect(() => {
      gameboard(5, 5).isAttacked(6, 0);
    }).toThrow();
  });

  test("should throw error if column parameter >= gameboard.columns()", () => {
    expect(() => {
      gameboard(5, 5).isAttacked(0, 5);
    }).toThrow();

    expect(() => {
      gameboard(5, 5).isAttacked(0, 7);
    }).toThrow();
  });

  test("should return true if the target position was attacked before", () => {
    const board = gameboard(5, 5);
    board.place(ship(1), 0, 0, true);
    board.attack(0, 0);
    expect(board.isAttacked(0, 0)).toBe(true);
    board.attack(1, 1);
    expect(board.isAttacked(1, 1)).toBe(true);
  });

  test("should return false if the target position wasn't attacked before", () => {
    expect(gameboard().isAttacked(1, 1)).toBe(false);
  });
});

describe("isAllSunk property", () => {
  test("should be a function", () => {
    expect(gameboard().isAllSunk).toBeInstanceOf(Function);
  });

  test("should return true if the board was empty", () => {
    expect(gameboard().isAllSunk()).toBe(true);
  });

  test("should return false if any ship isn't sunk yet", () => {
    const board = gameboard(5, 5);
    board.place(ship(1), 0, 0, true);
    board.place(ship(1), 1, 1, true);
    expect(board.isAllSunk()).toBe(false);
    board.attack(0, 0);
    expect(board.isAllSunk()).toBe(false);
  });

  test("should return true if all ships are sunk", () => {
    const board = gameboard(5, 5);
    board.place(ship(1), 0, 0, true);
    board.attack(0, 0);
    expect(board.isAllSunk()).toBe(true);
  });
});
