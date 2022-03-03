const eventSystem = (() => {
  const public = {};
  const events = {};

  public.addEvent = (eventName, callback) => {
    events[eventName] = events[eventName] || [];
    for (const handler of events[eventName]) {
      if (handler === callback) {
        return false;
      }
    }
    events[eventName].push(callback);
    return true;
  };

  public.raiseEvent = (eventName, value) => {
    const eventHandlers = events[eventName] || [];
    for (const handler of eventHandlers) {
      handler(value);
    }
  };

  public.events = () => {
    return {
      change: "change",
      win: "win",
      tie: "tie",
      play: "play",
      reset: "reset",
    };
  };
  return public;
})();
// ===============================================================
function Player(name = "", marker = "") {
  const public = {};

  public.name = () => name;
  public.marker = () => marker;
  public.isEqual = (player) => marker === player.marker();

  return public;
}
// ===============================================================
const game = ((eventSystem) => {
  const public = {};

  const player1 = Player("Player1 Name", "X");
  const player2 = Player("Player2 Name", "O");

  let currentPlayer = player1;

  function togglePlayer() {
    if (currentPlayer.isEqual(player1)) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  eventSystem.addEvent(eventSystem.events().change, togglePlayer);
  // --------------------------------------------
  public.getCurrentPlayer = () => currentPlayer;

  public.setMark = (position) => {
    const marker = currentPlayer.marker();
    eventSystem.raiseEvent(eventSystem.events().play, { position, marker });
  };

  public.reset = () => {
    currentPlayer = player1;
    eventSystem.raiseEvent(eventSystem.events().reset, null);
  };

  return public;
})(eventSystem);
// ================================================================
const gameBoard = ((eventSystem) => {
  const public = {};
  let board = Array(9);
  const segments = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  eventSystem.addEvent(eventSystem.events().reset, reset);
  eventSystem.addEvent(eventSystem.events().change, check);
  eventSystem.addEvent(eventSystem.events().play, (arg) =>
    public.setMark(arg.position, arg.marker)
  );

  function reset() {
    board = Array(9);
  }

  function check() {
    for (const segment of segments) {
      let winnerMarker = checkSegment(segment);
      if (winnerMarker !== null) {
        eventSystem.raiseEvent(eventSystem.events().win, winnerMarker);
        return true;
      }
    }

    if (public.board().filter((itm) => itm === undefined).length === 0) {
      eventSystem.raiseEvent(eventSystem.events().tie, null);
      return true;
    } else {
      return false;
    }
  }

  function checkSegment(segment = []) {
    const segmentMark = board[segment[0]] || null;
    for (const idx of segment) {
      if (board[idx] !== segmentMark) {
        return null;
      }
    }
    return segmentMark;
  }
  // ------------------------------------------------------
  public.board = () => [...board];

  public.setMark = (pos, mark) => {
    if (pos < 0 || pos >= board.length || board[pos] !== undefined) {
      return false;
    }
    board[pos] = mark;
    eventSystem.raiseEvent(eventSystem.events().change, public.board());
    return true;
  };

  return public;
})(eventSystem);

// ================================================================

eventSystem.addEvent(eventSystem.events().change, (arr) => {
  console.log(arr[0] ?? "_", arr[1] ?? "_", arr[2] ?? "_");
  console.log(arr[3] ?? "_", arr[4] ?? "_", arr[5] ?? "_");
  console.log(arr[6] ?? "_", arr[7] ?? "_", arr[8] ?? "_");
});

eventSystem.addEvent(eventSystem.events().win, (marker) => {
  console.log(`the winner is ${marker}`);
});

eventSystem.addEvent(eventSystem.events().tie, () => {
  console.log(`gameover, Tie!`);
});
