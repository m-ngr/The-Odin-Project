const WIN = true;  // player win, computer lost
const LOST = false; // player lost, computer win
const TIE = null; 
const INVALID = undefined;

function game(rounds = 5){
    console.clear()
    let computerScore = 0;
    let playerScore = 0;

    for(let r = 1; r <= rounds; ++r){
        let playerSelection = prompt("Enter only one of the following:\nrock, paper, or scissors","");
        playerSelection = capitalize(playerSelection);
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection ,computerSelection);

        console.log (`Round #${r}: ${showRoundResult(roundResult, playerSelection, computerSelection)}`);

        if (roundResult === INVALID) {--r; continue;} //repeat this round
        if (roundResult === TIE) {continue;} //goto next round
        //update scores
        if (roundResult === WIN) {
            ++playerScore;
        }else{
            ++computerScore;
        }
    }
    //print game result
    if (playerScore > computerScore){
        console.log("Game Over: You Win");
    }else if (playerScore < computerScore){
        console.log("Game Over: You Lost");
    }else{
        console.log("Game Over: Tie");
    }

}

function capitalize(str){ return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();}

function showRoundResult(roundResult, playerSelection, computerSelection){

    if(roundResult === INVALID) {return "Please, provide a proper input"; }
    if(roundResult === TIE) {return `Tie! both chose ${playerSelection}`;}

    if(roundResult === WIN) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch(true){
        case playerSelection == "rock"     && computerSelection == "paper":
        case playerSelection == "paper"    && computerSelection == "scissors":
        case playerSelection == "scissors" && computerSelection == "rock":
            return LOST;

        case playerSelection == "rock"     && computerSelection == "scissors":
        case playerSelection == "paper"    && computerSelection == "rock":
        case playerSelection == "scissors" && computerSelection == "paper":
            return WIN

        case playerSelection == "rock"     && computerSelection == "rock":
        case playerSelection == "paper"    && computerSelection == "paper":
        case playerSelection == "scissors" && computerSelection == "scissors":
            return TIE

        default:
            return INVALID;
    }
}

function computerPlay(){
    let ran = Math.round(Math.random()*2);
    switch(ran){
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