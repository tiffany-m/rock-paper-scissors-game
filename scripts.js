const computerOption = document.getElementById('computer-choice');
const playerOption = document.getElementById('player-choice');
const resultText = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.btn-choice');
const pointsText = document.getElementById('points-text')
const computerPointsText = document.getElementById('computer-points-text')
const playerPointsText = document.getElementById('player-points-text')
const resetContainer = document.getElementById('reset-container')
const playerOptionsContainer = document.getElementById('player-options-container')
let playerChoice = "";
let computerChoice = "";
let computerPoints = 0;
let playerPoints = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent;

    getComputerChoice();
}))

function getComputerChoice() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * computerOptions.length);
    computerChoice = computerOptions[randomNumber];
    
    game();
}

function playRound(computer, player) {
    if (computer == player) {
        computerPoints++;
        playerPoints++;
        resultText.textContent = `It's a tie! You both chose ${computer}!`;
        pointsText.textContent = `Points for each of you!`;
        computerPointsText.textContent = `${computerPoints}`;
        playerPointsText.textContent = `${playerPoints}`;
    } else if (computer == "Rock" && player === "Scissors" || computer === "Scissors" && player === "Paper" || computer === "Paper" && player === "Rock") {
        computerPoints++;
        resultText.textConent = `You lose! ${computer} beats ${player}!`;
        pointsText.textContent = `1 Point for Computer`;
        computerPointsText.textContent = `${computerPoints}`;
        playerPointsText.textContent = `${playerPoints}`;
    } else {
        playerPoints++;
        resultText.textContent = `You Win! ${player} beats ${computer}!`;
        pointsText.textContent = `1 Point for Player`;
        computerPointsText.textContent = `${computerPoints}`;
        playerPointsText.textContent = `${playerPoints}`;
    }

    if(computerPoints === 5 || playerPoints === 5) {
        choiceBtns.forEach(button => button.remove());

        const reset = document.createElement('button');
        reset.innerHTML = "Reset Game";
        reset.setAttribute('id', 'btn-reset');
        resetContainer.appendChild(reset);

        if(computerPoints === 5) {
            resultText.textContent = `THE COMPUTER HAS WON!`
        } else {
            resultText.textContent = `YOU HAVE WON!`
        }

        reset.addEventListener('click', resetGame);
    }
}

function game() {
    computerOption.textContent = `${computerChoice.toUpperCase()}`;
    playerOption.textContent = `${playerChoice.toUpperCase()}`;
    
    if(computerOption.textContent === "ROCK") {
        computerOption.style.color = "#FF52AB";
    } else if (computerOption.textContent === "PAPER"){
        computerOption.style.color = "#FBBC00";
    } else {
        computerOption.style.color = "#04CAE4";
    }

    if (playerOption.textContent === "ROCK") {
        playerOption.style.color = "#FF52AB";
    } else if (playerOption.textContent === "PAPER") {
        playerOption.style.color = "#FBBC00";
    } else {
        playerOption.style.color = "#04CAE4";
    }

    playRound(computerChoice, playerChoice);
}

function resetGame() {
    playerChoice = "";
    computerChoice = "";
    computerPoints = 0;
    playerPoints = 0;
    computerText.textContent = `Computer Choice:`;
    playerText.textContent = `Player Choice:`;
    resultText.textContent = `Result:`;
    pointsText.textContent = `Current Score:`;
    computerPointsText.textContent = `Computer: 0`;
    playerPointsText.textContent = `Player: 0`;

    reset.remove();
    choiceBtns.forEach(button => playerOptionsContainer.appendChild(button));
}