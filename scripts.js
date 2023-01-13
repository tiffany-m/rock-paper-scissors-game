function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 2);
    let computerChoice = computerOptions[randomNumber];

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoiceStr = prompt('Please select "rock," "paper" or "scissors" to start the game!', 'rock, paper or scissors');
    let toUpper = playerChoiceStr.charAt(0).toUpperCase();
    let toLower = playerChoiceStr.slice(1).toLowerCase();
    let playerChoice = toUpper + toLower;

    return playerChoice;
}

let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();


function playRound(computer, player) {
    if (computer == player) {
        return `It's a tie! You both chose ${computer}!`;
    } else if (computer == "rock" && player == "scissors" || computer == "scissors" && player == "paper" || computer == "paper" && player == "rock") {
        return `You lose! ${computer} beats ${player}!`;
    } else {
        return `You Win! ${player} beats ${computer}!`;
    }
}

console.log(playRound(computerSelection, playerSelection));