const EMPTY = null;
const SHOT = "SHOT";

function isShip(obj) {
  return (
    typeof obj.length === "function" &&
    typeof obj.isHit === "function" &&
    typeof obj.hit === "function" &&
    typeof obj.isSunk === "function"
  );
}

function makeBoard(rows, columns) {
  const board = Array(rows).fill(Array(columns).fill(EMPTY));
  const ships = [];

  function checkCoordinates(row, column) {
    if (typeof row !== "number" || row < 0 || row >= rows) {
      throw Error(`row should be a number in range [0,${rows})`);
    }

    if (typeof column !== "number" || column < 0 || column >= columns) {
      throw Error(`column should be a number in range [0,${columns})`);
    }
  }

  function horizontalPlacing(ship, row, column) {
    if (ship.length() > columns - column) return false;

    for (let i = 0; i < ship.length(); i += 1) {
      if (board[row][column + i] !== EMPTY) return false;
    }

    ships.push(ship);
    for (let position = 0; position < ship.length(); position += 1) {
      board[row][column + position] = { ship, position };
    }

    return true;
  }

  function verticalPlacing(ship, row, column) {
    if (ship.length() > rows - row) return false;

    for (let i = 0; i < ship.length(); i += 1) {
      if (board[row + i][column] !== EMPTY) return false;
    }

    ships.push(ship);
    for (let position = 0; position < ship.length(); position += 1) {
      board[row + position][column] = { ship, position };
    }

    return true;
  }

  return {
    rows: () => rows,
    columns: () => columns,
    place: (ship, row, column, horizontal) => {
      if (isShip(ship) === false) {
        throw Error("ship parameter must have the specified signature");
      }

      checkCoordinates(row, column);

      return horizontal
        ? horizontalPlacing(ship, row, column)
        : verticalPlacing(ship, row, column);
    },

    attack(row, column) {
      if (this.isAttacked(row, column)) {
        throw Error("this position has been attacked before");
      }

      if (board[row][column] === EMPTY) {
        board[row][column] = SHOT;
        return false;
      }

      const { ship, position } = board[row][column];
      ship.hit(position);

      return true;
    },

    isAttacked(row, column) {
      checkCoordinates(row, column);
      if (board[row][column] === EMPTY) return false;
      if (board[row][column] === SHOT) return true;
      const { ship, position } = board[row][column];
      return ship.isHit(position);
    },

    isAllSunk() {
      return ships.reduce((p, c) => p && c.isSunk(), true);
    },
  };
}
/**
 * @typedef {{length:()=>number,hit:(position:number)=>void, isHit:(position:number)=>boolean, isSunk:()=>boolean}} Ship
 */
/**
 * @param {number} rows
 * @param {number} columns
 * @returns {{
 *    rows:()=> number,
 *    columns:()=> number,
 *    place:(ship:Ship,row: number, column: number, horizontal: boolean)=> boolean,
 *    attack:(row: number, column: number) => boolean,
 *    isAttacked:(row: number, column: number) => boolean,
 *    isAllSunk:() => boolean
 * }}
 */
export default function gameboard(rows, columns) {
  if (rows === undefined && columns === undefined) return gameboard(10, 10);

  if (typeof rows === "number" && columns === undefined) {
    return gameboard(rows, rows);
  }

  if (
    typeof rows !== "number" ||
    typeof columns !== "number" ||
    rows < 1 ||
    columns < 1
  ) {
    throw Error("rows and columns must be positive numbers");
  }

  return makeBoard(rows, columns);
}
