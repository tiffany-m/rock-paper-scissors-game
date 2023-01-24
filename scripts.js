// DOM variables
const computerText = document.getElementById('computer-choice');
const playerText = document.getElementById('player-choice');
const resultText = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.btn-choice');
const pointsText = document.getElementById('points-text')
const computerPointsText = document.getElementById('computer-points-text')
const playerPointsText = document.getElementById('player-points-text')

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
        resultText.textContent = `Result: It's a tie! You both chose ${computer}!`;
        pointsText.textContent = `Points for each of you! Current Score:`;
        computerPointsText.textContent = `Computer: ${computerPoints}`;
        playerPointsText.textContent = `Player: ${playerPoints}`;
    } else if (computer == "Rock" && player === "Scissors" || computer === "Scissors" && player === "Paper" || computer === "Paper" && player === "Rock") {
        computerPoints++;
        resultText.textConent = `Result: You lose! ${computer} beats ${player}!`;
        pointsText.textContent = `Current Score:`;
        computerPointsText.textContent = `Computer: ${computerPoints}`;
        playerPointsText.textContent = `Player: ${playerPoints}`;
    } else {
        playerPoints++;
        resultText.textContent = `Result: You Win! ${player} beats ${computer}!`;
        pointsText.textContent = `Current Score:`;
        computerPointsText.textContent = `Computer: ${computerPoints}`;
        playerPointsText.textContent = `Player: ${playerPoints}`;
    }
}

// play game
function game() {
    computerText.textContent = `Computer Choice: ${computerChoice}`;
    playerText.textContent = `Player Choice: ${playerChoice}`;
    
    // play one round
    playRound(computerChoice, playerChoice);
}
