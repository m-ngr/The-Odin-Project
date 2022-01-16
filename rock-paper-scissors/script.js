const WIN = true; // player win, computer lost
const LOST = false; // player lost, computer win
const TIE = null;
const INVALID = undefined;
//argh, I hate global variable
let round = 0;
let computerScore = 0;
let playerScore = 0;
let maxRounds = 5;
//====================================================================================================
document.querySelector("#play-btn").addEventListener("click", startGame);

function startGame(e) {
  e.currentTarget.removeEventListener("click", startGame);
  e.currentTarget.disabled = true;

  const selections = document.querySelectorAll("#selections > button");
  selections[0].addEventListener("click", () => play("Rock"));
  selections[1].addEventListener("click", () => play("Paper"));
  selections[2].addEventListener("click", () => play("Scissors"));

  selections.forEach((btn) => (btn.disabled = false));

  const numInput = document.getElementById("rounds");
  numInput.disabled = true;

  if (numInput.value <= 0 || numInput.value > 100) {
    numInput.value = 5;
  }

  setGameInfo(numInput.value);
  showGameInfo();
}

function setGameInfo(maxRoundsvalue) {
  maxRounds = maxRoundsvalue;
  round = 0;
  playerScore = 0;
  computerScore = 0;

  const gameResultPara = document.querySelector("#game-result");
  gameResultPara.textContent = "";
  gameResultPara.className = "";

  const roundResultPara = document.querySelector("#result");
  roundResultPara.textContent = "";
  roundResultPara.className = "";
}

function play(playerSelection) {
  ++round;
  let computerSelection = computerPlay();
  let roundResult = playRound(playerSelection, computerSelection);
  showRoundResult(round, roundResult, playerSelection, computerSelection);
  showGameInfo();
  //is game over
  if (round >= maxRounds) {
    endGame();
  }
}

function endGame() {
  showGameResult();

  const playBtn = document.getElementById("play-btn");
  playBtn.addEventListener("click", startGame);
  playBtn.disabled = false;

  document.getElementById("rounds").disabled = false;

  const selections = document.querySelectorAll("#selections > button");
  selections.forEach((btn) => (btn.disabled = true));
  //replacing old nodes with new clones to remove the event listener
  selections.forEach((btn) => {
    let new_btn = btn.cloneNode(true);
    btn.parentNode.replaceChild(new_btn, btn);
  });
}

function showGameInfo() {
  document.getElementById(
    "player-score"
  ).textContent = `Your Score: ${playerScore}`;

  document.getElementById(
    "computer-score"
  ).textContent = `Computer Score: ${computerScore}`;

  document.getElementById("round-info").textContent = `Round: ${Math.min(
    round + 1,
    maxRounds
  )}/${maxRounds}`;
}

function showGameResult() {
  const resultPara = document.querySelector("#game-result");
  if (playerScore > computerScore) {
    resultPara.textContent = "Game Over: You Win";
    resultPara.className = "win";
  } else if (playerScore < computerScore) {
    resultPara.textContent = "Game Over: You Lost";
    resultPara.className = "lost";
  } else {
    resultPara.textContent = "Game Over: Tie";
    resultPara.className = "tie";
  }
}

function showRoundResult(
  roundNumber,
  roundResult,
  playerSelection,
  computerSelection
) {
  const resultPara = document.querySelector("#result");
  resultPara.textContent = `Round #${roundNumber}: ${getRoundResult(
    roundResult,
    playerSelection,
    computerSelection
  )}`;

  if (roundResult === WIN) {
    resultPara.className = "win";
  } else if (roundResult === LOST) {
    resultPara.className = "lost";
  } else if (roundResult === TIE) {
    resultPara.className = "tie";
  } else {
    resultPara.className = "";
  }
}
//=======================================================================================================================

function getRoundResult(roundResult, playerSelection, computerSelection) {
  if (roundResult === INVALID) {
    return "Please, provide a proper input";
  }
  if (roundResult === TIE) {
    return `Tie! both chose ${playerSelection}`;
  }

  if (roundResult === WIN) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  switch (true) {
    case playerSelection == "rock" && computerSelection == "paper":
    case playerSelection == "paper" && computerSelection == "scissors":
    case playerSelection == "scissors" && computerSelection == "rock":
      computerScore += 1;
      return LOST;

    case playerSelection == "rock" && computerSelection == "scissors":
    case playerSelection == "paper" && computerSelection == "rock":
    case playerSelection == "scissors" && computerSelection == "paper":
      playerScore += 1;
      return WIN;

    case playerSelection == "rock" && computerSelection == "rock":
    case playerSelection == "paper" && computerSelection == "paper":
    case playerSelection == "scissors" && computerSelection == "scissors":
      return TIE;

    default:
      return INVALID;
  }
}

function computerPlay() {
  let ran = Math.round(Math.random() * 2);
  switch (ran) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return computerPlay();
  }
}
