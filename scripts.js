// set counter variables
let computerSelection = "";
let playerSelection = "";
let computerPoints = 0;
let playerPoints = 0;

// get computer choice
function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * computerOptions.length);
    let computerChoice = computerOptions[randomNumber];

    return computerChoice;
}

// get player choice
function getPlayerChoice() {
    let playerChoiceStr = prompt('Please select "rock," "paper" or "scissors" to start the game!');
    // fix/make sure input for player has correct format
    let toUpper = playerChoiceStr.charAt(0).toUpperCase();
    let toLower = playerChoiceStr.slice(1).toLowerCase();
    let playerChoice = toUpper + toLower;

    return playerChoice;
}

// play one round of game by comparing choices of computer and player
function playRound(computer, player) {
    if (computer == player) {
        computerPoints++;
        playerPoints++;
        return console.log(`It's a tie! You both chose ${computer}! Points for each of you!\nCurrent Score: Computer ${computerPoints} / Player ${playerPoints}`);
    } else if (computer == "Rock" && player === "Scissors" || computer === "Scissors" && player === "Paper" || computer === "Paper" && player === "Rock") {
        computerPoints++;
        return console.log(`You lose! ${computer} beats ${player}!\nCurrent Score: Computer ${computerPoints} / Player ${playerPoints}`);
    } else {
        playerPoints++;
        return console.log(`You Win! ${player} beats ${computer}!\nCurrent Score: Computer ${computerPoints} / Player ${playerPoints}`);
    }
}

// play game
function game() {
    for (let i = 0; i < 5; i++) {

        // choices for current round
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();

        console.log(`"Rock, paper, scissors, shoot!”
        \nComputer Choice: ${computerSelection}, Player Choice: ${playerSelection}`)
        
        // play one round
        playRound(computerSelection, playerSelection);
    }
}
