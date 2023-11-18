// need function to select the computers choice
// this need to be a randomized 1 in 3 chance to select either Rock (1) Paper (2) or Scissors (3)
// we can use a random number generator and a swich case statement to assign each of the values

// need a function to get the users input. 
// user will be prompted to enter their selection. Either Rock (1), Paper (2), or Scissors (3).
// this will need to account for both lowercase and uppercase characters

// with the computers choice selected and the players choise selected, we need to compare the two to determine which one is the winner
// the rules are, Rock beats Scissors, Scissors beats Paper, and Paper beats Rock.
// in the event that both players select the same choice it will be a draw and there will be no winner.

// add a button allowing the player to play again and choose a new selection. This will also trigger the computer to roll for a new selection.

// Extra: Could include a tally system, that could be used to keep track of the number of wins. ex best 2 of 3, best 3 of 5 etc.
// Would also need a reset button to reset the current score (or reset on page refresh)

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

// variable definitions
let playerScore = 0;
let computerScore = 0;
let gameResult;

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


// new event listener - event delegation
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

}, false);

// function definitions
function diplayResult (gameResultText){
    // set result text content
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
    // take players selection
    let playerSelection = selectedButton.textContent.toLowerCase();
    // make computers selection
    let computersSelection = getComputerChoice();
    // pass these into game function that will compare them and return the result (Win, Lose, Draw)
    let gameResult = playRockPaperScissors(playerSelection, computersSelection)
        // this function will compare the selections, 
        //increment the score according and update page
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
    // increment round
    int_currentRound.textContent = parseInt(int_currentRound.textContent) + 1;
    // after incrementing the score check score to see if either player has reached 5
    if (parseInt(int_playerScore.innerHTML) === 5) {
        announceWinner("player");
        // ask if player wants to play again (generate new button)
        // if player clicks, play again, reset the score
    }

    if (parseInt(int_computersScore.innerHTML) === 5) {
        announceWinner("computer");
        // ask if player wants to play again (generate new button)
        // if player clicks, play again, reset the score
    }
}








