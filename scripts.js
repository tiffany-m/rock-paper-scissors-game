// DOM variables
const computerText = document.getElementById('computer-choice');
const playerText = document.getElementById('player-choice');
const resultText = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.btn-choice');

// set variables
let playerChoice = "";
let computerChoice = "";
let computerPoints = 0;
let playerPoints = 0;

// buttons for player choice
choiceBtns.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent;

    getComputerChoice();
}))

// get computer choice
function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * computerOptions.length);
    computerChoice = computerOptions[randomNumber];
    
    game();
}

// play one round of game by comparing choices of computer and player
function playRound(computer, player) {
    if (computer == player) {
        computerPoints++;
        playerPoints++;
        resultText.textContent = `It's a tie! You both chose ${computer}! Points for each of you!\nCurrent Score: Computer ${computerPoints} / Player ${playerPoints}`;
    } else if (computer == "Rock" && player === "Scissors" || computer === "Scissors" && player === "Paper" || computer === "Paper" && player === "Rock") {
        computerPoints++;
        resultText.textConent = `You lose! ${computer} beats ${player}!\nCurrent Score: Computer ${computerPoints} / Player ${playerPoints}`;
    } else {
        playerPoints++;
        resultText.textContent = `Result: You Win! ${player} beats ${computer}!\nCurrent Score: Computer ${computerPoints} / Player ${playerPoints}`;
    }
}

// play game
function game() {
    computerText.textContent = `Computer Choice: ${computerChoice}`;
    playerText.textContent = `Player Choice: ${playerChoice}`;
    
    // play one round
    playRound(computerChoice, playerChoice);
}
