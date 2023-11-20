// Variables

// let playerScore = 0;
// let computerScore = 0;
let gameResult;
let gameOver = false;
let rockButton = document.querySelector("#rockButton");
let paperButton = document.querySelector("#paperButton");
let scissorsButton = document.querySelector("#scissorsButton");

let scoreDiv = document.querySelector("#score");
let int_playerScore = document.querySelector("#playerScore");
let int_computersScore = document.querySelector("#computersScore");
let int_currentRound = document.querySelector("#currentRound");

let resultsDiv = document.querySelector("#results");
let playAgainDiv = document.querySelector("#playAgain");

let winner = document.createElement('p');
let result = document.createElement("p");
// let playAgainButton = document.createElement("button");
// playAgainButton.textContent = "Play Again?";
// playAgainButton.id = "playAgainBtn";

document.addEventListener('click', function (event) {

	if (event.target.matches("#rockButton")) {
		playGame(rockButton)
	}

    if (event.target.matches("#paperButton")) {
		playGame(paperButton)
	}

    if (event.target.matches("#scissorsButton")) {
		playGame(scissorsButton)
	}

    if (event.target.matches("#playAgainBtn")) {
        gameOver = false;
        int_playerScore.textContent = "0";     
        int_computersScore.textContent = "0";   
        int_currentRound.textContent = "0"; 

        resultsDiv.removeChild(result);
        resultsDiv.removeChild(winner);
        playAgainDiv.classList.add(".hidden");
    }


}, false);

// functions

function getRandomPositiveInt(max){
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    let randomNumber = getRandomPositiveInt(3);
    switch (randomNumber){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function playRockPaperScissors(playerSelection, computersSelection) {
    switch (playerSelection) {
        case "rock":
            if (computersSelection === "rock") {
                return ["DRAW", "Draw - You both selected Rock."];
            }
            if (computersSelection === "paper") {
                return ["LOSE", "You Lose! Paper beats Rock."];
            }
            if (computersSelection === "scissors") {
                return ["WIN", "You Win! Rock beats Scissors."];
            }

        case "paper":
            if (computersSelection === "rock") {
                return ["WIN", "You Win! Paper beats Rock."];
            }
            if (computersSelection === "paper") {
                return ["DRAW", "Draw - You both selected Paper."];
            }
            if (computersSelection === "scissors") {
                return ["LOSE", "You Lose! Scissors beats Paper."];
            }

        case "scissors":
            if (computersSelection === "rock") {
                return ["LOSE", "You Lose! Rock beats Scissors."];
            }
            if (computersSelection === "paper") {
                return ["WIN", "You Win! Scissors beats Paper."];
            }
            if (computersSelection === "scissors") {
                return ["DRAW", "Draw - You both selected Scissors."];
            }
    }
}

function diplayResult (gameResultText){
    result.textContent = gameResultText;
    resultsDiv.appendChild(result);
}

function incrementScore(roundWinner){
    if (roundWinner === "player") {
        int_playerScore.textContent = parseInt(int_playerScore.textContent) + 1;
    }
    else {
        int_computersScore.textContent = parseInt(int_computersScore.textContent) + 1;
    }
}

function announceWinner() {
    if (parseInt(int_playerScore.textContent) > parseInt(int_computersScore.textContent)) {
        winner.textContent = `You Win! You beat the Computer ${int_playerScore.textContent} to ${int_computersScore.textContent}`
        resultsDiv.appendChild(winner);
        
    } 
    else if(parseInt(int_playerScore.textContent) < parseInt(int_computersScore.textContent)) {
        winner.textContent = `You Lose! The Computer beat you ${int_computersScore.textContent} to ${int_playerScore.textContent}`
        resultsDiv.appendChild(winner);
    }   
}

function playGame(selectedButton){
    let playerSelection = selectedButton.textContent.toLowerCase();
    let computersSelection = getComputerChoice();
    let gameResult = playRockPaperScissors(playerSelection, computersSelection)
    switch (gameResult[0]){
        case "WIN":
            diplayResult(gameResult[1]);
            incrementScore("player");
            break;
        case "LOSE":
            diplayResult(gameResult[1]);
            incrementScore("computer");
            break;
        case "DRAW":
            diplayResult(gameResult[1]);
            break;
    }     

    int_currentRound.textContent = parseInt(int_currentRound.textContent) + 1;

    if (parseInt(int_playerScore.innerHTML) === 5) {
        announceWinner("player");
        gameOver = true;
        // playAgainDiv.classList.remove("hidden");
    }

    if (parseInt(int_computersScore.innerHTML) === 5) {
        announceWinner("computer");
        gameOver = true;
        // playAgainDiv.classList.remove("hidden");
    }

    if (gameOver){
        playAgainDiv.classList.remove("hidden");
    }
}








