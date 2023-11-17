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

function playRockPaperScissors(button) {
    let computersSelection = getComputerChoice();
    let playerSelection = button.textContent.toLowerCase();

    switch (playerSelection) {
        case "rock":
            if (computersSelection === "rock") {
                return "Draw - You both selected Rock";
            }
            if (computersSelection === "paper") {
                return "You Lose! Paper beats Rock";
            }
            if (computersSelection === "scissors") {
                return "You Win! Rock beats Scissors";
            }

        case "paper":
            if (computersSelection === "rock") {
                return "You Win! Paper beats Rock";
            }
            if (computersSelection === "paper") {
                return "Draw! You both selected Paper";
            }
            if (computersSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            }

        case "scissors":
            if (computersSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            }
            if (computersSelection === "paper") {
                return "You Win! Scissors beats Paper";
            }
            if (computersSelection === "scissors") {
                return "Draw! you both selected Scissors";
            }
    }
}

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let result;

//     // play up to 5 rounds of game, first to 3 wins
//     // play game
    
//     // result = startNewGame()
//     let playerSelection = '';
//     while (playerSelection === null || !['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) { // while choice not null or in our selection of options
//         playerSelection = prompt("Please make a selection. Your options are Rock, Paper, or Scissors");
//     }
//     // play game
//     let computersChoice = getComputerChoice();
//     result = playRockPaperScissors(playerSelection.toLowerCase(), computersChoice, playerScore, computerScore);

//     // increment score for the winner
//     console.log(result)
//     if (result.includes('Win')) {
//         ++playerScore
//     }
//     else if (result.includes("Lose")) {
//         ++computerScore
//     }

//     console.log(`player score: ${playerScore}`)
//     console.log(`computer score: ${computerScore}`)
//     // go to next round


//     // reveal the winner
//     if (playerScore > computerScore) {
//         alert(`You Win! You beat the Computer ${playerScore} to ${computerScore}`)
//     } 
//     else if(playerScore < computerScore) {
//         alert(`You Lose! The Computer beat you ${computerScore} to ${playerScore}`)
//     }   
//     else {
//         alert(`Draw! You tied the Computer ${playerScore} to ${computerScore}`)
//     } 
// }


let playerScore = 0;
let computerScore = 0;
let result = document.createElement("p");


// add event listeners to the buttons
let rockButton = document.querySelector("#rock-button");
let paperButton = document.querySelector("#paper-button");
let scissorsButton = document.querySelector("#scissors-button");
// player selection function

let resultsDiv = document.querySelector("#results");



// event listeners  need to modify the dom with the results
rockButton.addEventListener('click', function () {
    result.textContent = playRockPaperScissors(rockButton);
    resultsDiv.appendChild(result);
});
paperButton.addEventListener('click', function () {
    result.textContent = playRockPaperScissors(paperButton);
    resultsDiv.appendChild(result);
});
scissorsButton.addEventListener('click', function () {
    result.textContent = playRockPaperScissors(scissorsButton);
    resultsDiv.appendChild(result);
});