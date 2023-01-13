function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 2);
    let computerChoice = computerOptions[randomNumber];

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt('Please select "rock," "paper" or "scissors" to start the game!', 'rock, paper or scissors');

    return playerChoice;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();

console.log(computerSelection, playerSelection);
