let computerPoints = 0;
let playerPoints = 0;
let round = 1;

// get computer choice
function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 2);
    let computerChoice = computerOptions[randomNumber];

    return computerChoice;
}

// get player choice
function getPlayerChoice() {
    let playerChoiceStr = prompt('Please select "rock," "paper" or "scissors" to start the game!', 'rock, paper or scissors');
    let toUpper = playerChoiceStr.charAt(0).toUpperCase();
    let toLower = playerChoiceStr.slice(1).toLowerCase();
    let playerChoice = toUpper + toLower;

    return playerChoice;
}

// play one round of game
function playRound(computer, player) {
    if (computer == player) {
        computerPoints++;
        playerPoints++;
        return console.log(`It's a tie! You both chose ${computer}! Points for each of you!`);
    } else if (computer == "rock" && player == "scissors" || computer == "scissors" && player == "paper" || computer == "paper" && player == "rock") {
        computerPoints++;
        return console.log(`You lose! ${computer} beats ${player}!`);
    } else {
        playerPoints++;
        return console.log(`You Win! ${player} beats ${computer}!`);
    }
}

function game() {
    // set variables
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    
    console.log(`round: ${round}, computer choice: ${computerSelection}, player choice: ${playerSelection}`);

    for (let i = 0; i < 5; i++) {
        // play one round
        playRound(computerSelection, playerSelection);

        // new choices
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();

        round++;

        console.log(`round: ${round}, computer choice: ${computerSelection}, player choice: ${playerSelection}, current score: computer ${computerPoints} / player ${playerPoints}`)
    }

    if (computerPoints == playerPoints) {
        return console.log("The 5 round game was a tie!");
    } else if (computerPoints > playerPoints) {
        return console.log("The computer has won this 5 round game!");
    } else {
        return console.log("You have won this 5 round game!");
    }
}
