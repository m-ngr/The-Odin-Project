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

  public.removeEvent = (eventName, callback) => {
    events[eventName] = events[eventName] || [];
    events[eventName] = events[eventName].filter(
      (handler) => handler !== callback
    );
  };

  public.events = () => {
    //pre-defined events that are special to this specific project
    return {
      change: "change",
      win: "win",
      tie: "tie",
      play: "play",
      reset: "reset",
      start: "start",
      exit: "exit",
      togglePlayer: "toggle-player",
    };
  };

  return public;
})();
// =============================== Player ================================
function Player(name = "", marker = "") {
  const public = Object.create(Player.shared);

  public.name = () => name;
  public.marker = () => marker;

  return public;
}

Player.shared = {
  isEqual: function (player) {
    return this.marker() === player.marker();
  },
};
// =============================== game ==================================
const game = ((eventSystem) => {
  const public = {};

  let started = false;
  let computerPlayer = false;
  let roundOver = true;

  let player1 = {};
  let player2 = {};
  let currentPlayer = player1;

  eventSystem.addEvent(eventSystem.events().change, togglePlayer);
  eventSystem.addEvent(eventSystem.events().win, endRound);
  eventSystem.addEvent(eventSystem.events().tie, endRound);

  function endRound() {
    roundOver = true;
  }

  function togglePlayer() {
    if (currentPlayer.isEqual(player1)) {
      setCurrentPlayer(player2);
    } else {
      setCurrentPlayer(player1);
    }
  }

  function setCurrentPlayer(player) {
    currentPlayer = player;
    eventSystem.raiseEvent(eventSystem.events().togglePlayer, { ...player });
  }

  function playComputer(board = []) {
    if (
      computerPlayer &&
      !roundOver &&
      currentPlayer.isEqual(player2) &&
      board.filter((itm) => itm === undefined).length !== 0
    ) {
      let pos;
      do {
        pos = Math.floor(Math.random() * board.length);
      } while (board[pos] !== undefined);

      setTimeout(public.play.bind(public, pos, true), 1000);
    }
  }

  // ------------------------- Public ------------------------

  public.start = (
    player1Name,
    player1Marker,
    player2Name,
    player2Marker,
    computerPlay = false
  ) => {
    if (started) {
      console.error("The game is already started");
      return;
    }

    player1Name = player1Name || "Player X";
    player1Marker = player1Marker || "X";
    player2Name = player2Name || "Player O";
    player2Marker = player2Marker || "O";

    player1Marker = player1Marker.slice(0, 1);
    player2Marker = player2Marker.slice(0, 1);

    if (player1Marker === player2Marker) {
      console.error("Please choose two different single char markers");
      return;
    }

    computerPlayer = computerPlay;

    if (computerPlayer) {
      eventSystem.addEvent(eventSystem.events().change, playComputer);
      player2Name = "Computer";
    }

    player1 = Player(player1Name, player1Marker);
    player2 = Player(player2Name, player2Marker);

    setCurrentPlayer(player1);

    started = true;
    roundOver = false;
    eventSystem.raiseEvent(eventSystem.events().start, null);
  };

  public.play = (position, computer = false) => {
    if (!started) {
      console.error("Please, start the game first");
      return;
    }

    if (computerPlayer && currentPlayer.isEqual(player2) && !computer) {
      return;
    }

    const marker = currentPlayer.marker();
    eventSystem.raiseEvent(eventSystem.events().play, { position, marker });
  };

  public.reset = () => {
    if (!started) return;

    setCurrentPlayer(player1);
    eventSystem.raiseEvent(eventSystem.events().reset, null);
    roundOver = false;
  };

  public.getPlayer = (marker) => {
    if (started) {
      if (player1.marker() === marker) return { ...player1 };
      if (player2.marker() === marker) return { ...player2 };
    }
    return null;
  };

  public.exit = () => {
    started = false;
    computerPlayer = false;
    roundOver = true;

    player1 = {};
    player2 = {};

    eventSystem.raiseEvent(eventSystem.events().exit, null);
    eventSystem.removeEvent(eventSystem.events().change, playComputer);
  };

  return public;
})(eventSystem);
// =============================== game board ============================
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

  eventSystem.addEvent(eventSystem.events().start, reset);
  eventSystem.addEvent(eventSystem.events().exit, reset);
  eventSystem.addEvent(eventSystem.events().reset, reset);
  eventSystem.addEvent(eventSystem.events().change, check);
  eventSystem.addEvent(eventSystem.events().play, setMark);

  function reset() {
    board = Array(9);
  }

  function check(board) {
    for (const segment of segments) {
      let winnerMarker = checkSegment(segment, board);
      if (winnerMarker !== null) {
        eventSystem.raiseEvent(eventSystem.events().win, winnerMarker);
        return true;
      }
    }

    if (board.filter((itm) => itm === undefined).length === 0) {
      eventSystem.raiseEvent(eventSystem.events().tie, null);
      return true;
    } else {
      return false;
    }
  }

  function checkSegment(segment = [], board) {
    const segmentMark = board[segment[0]] || null;
    for (const idx of segment) {
      if (board[idx] !== segmentMark) {
        return null;
      }
    }
    return segmentMark;
  }

  function setMark({ position, marker }) {
    if (
      position < 0 ||
      position >= board.length ||
      board[position] !== undefined
    ) {
      return false;
    }

    board[position] = marker;
    eventSystem.raiseEvent(eventSystem.events().change, public.board());
    return true;
  }

  // -------------------------- Public ----------------------------

  public.board = () => [...board];

  return public;
})(eventSystem);
// ============================== display ================================
((eventSystem, game) => {
  const gameLayer = document.getElementById("game");
  const playerLabel = gameLayer.querySelector("#player-label");
  const squares = gameLayer.querySelectorAll(".square");
  const resetButton = gameLayer.querySelector("#reset");
  const exitButton = gameLayer.querySelector("#exit");

  const result = document.getElementById("result");

  const startPanel = document.getElementById("start-panel");
  const player1Input = startPanel.querySelector("#player1-name");
  const player2Input = startPanel.querySelector("#player2-name");
  const computerInput = startPanel.querySelector("#computer");
  const startButton = startPanel.querySelector("#start");

  for (let i = 0; i < squares.length; ++i) {
    squares[i].addEventListener("click", game.play.bind(squares[i], i, false));
  }

  computerInput.addEventListener("change", setPlayer2);
  startButton.addEventListener("click", startGame);
  resetButton.addEventListener("click", game.reset);
  exitButton.addEventListener("click", game.exit);
  result.addEventListener("click", hideResult);

  eventSystem.addEvent(eventSystem.events().change, render);
  eventSystem.addEvent(eventSystem.events().start, reset);
  eventSystem.addEvent(eventSystem.events().exit, reset);
  eventSystem.addEvent(eventSystem.events().reset, reset);
  eventSystem.addEvent(eventSystem.events().win, showWinner);
  eventSystem.addEvent(eventSystem.events().tie, showTie);
  eventSystem.addEvent(eventSystem.events().exit, showStartPanel);
  eventSystem.addEvent(eventSystem.events().start, hideStartPanel);
  eventSystem.addEvent(eventSystem.events().togglePlayer, showPlayer);

  function startGame(e) {
    e.preventDefault();
    game.start(
      player1Input.value,
      "X",
      player2Input.value,
      "O",
      computerInput.checked
    );
  }

  function setPlayer2() {
    if (computerInput.checked) {
      player2Input.value = "Computer";
      player2Input.readOnly = true;
    } else {
      player2Input.value = "";
      player2Input.readOnly = false;
    }
  }

  function showPlayer(player) {
    playerLabel.innerText = `[${player.marker()}] ${player.name()} it's your turn`;
  }

  function render(board) {
    for (let i = 0; i < board.length; ++i) {
      squares[i].innerText = board[i] ?? "";
    }
  }

  function reset() {
    squares.forEach((square) => {
      square.innerText = "";
    });
  }

  function showWinner(winnerMark) {
    showResult(`The winner is ${game.getPlayer(winnerMark).name()}`);
  }

  function showTie() {
    showResult("Tie!");
  }

  function showResult(resultText = "") {
    result.innerText = resultText;
    result.classList.add("show");
  }

  function hideResult() {
    result.innerText = "";
    result.classList.remove("show");
    game.reset();
  }

  function showStartPanel() {
    startPanel.classList.add("show");
    gameLayer.classList.remove("show");
  }

  function hideStartPanel() {
    startPanel.classList.remove("show");
    gameLayer.classList.add("show");
  }
})(eventSystem, game);
// ====================================================================
