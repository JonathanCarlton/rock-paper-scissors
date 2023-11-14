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

function playRockPaperScissors(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                return "Draw - You both selected Rock";
            }
            if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            }
            if (computerSelection === "scissors") {
                return "You Win! Rock beats Scissors";
            }

        case "paper":
            if (computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            }
            if (computerSelection === "paper") {
                return "Draw! You both selected Paper";
            }
            if (computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            }

        case "scissors":
            if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            }
            if (computerSelection === "paper") {
                return "You Win! Scissors beats Paper";
            }
            if (computerSelection === "scissors") {
                return "Draw! you both selected Scissors";
            }
    }
}
