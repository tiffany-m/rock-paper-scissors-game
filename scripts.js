const startBtn = document.getElementById('btn-start')
const screens = document.querySelectorAll('.screen');
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

// start button transitions to next screen and starts game
startBtn.addEventListener('click', () => {
    screens[0].classList.add('up');
})

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
    if (computer === player) {
        computerPoints++;
        playerPoints++;
        resultText.textContent = `It's a tie! You both chose ${computer}!`;
        pointsText.textContent = `Points for both of you!`;
        computerPointsText.textContent = `${computerPoints}`;
        playerPointsText.textContent = `${playerPoints}`;
    } else if (computer === "Scissors" && player === "Paper" || computer === "Paper" && player === "Rock" || computer === "Rock" && player === "Scissors") {
        computerPoints++;
        resultText.textConent = `You lose! ${computer} beats ${player}!`;
        pointsText.textContent = `1 Point for the Computer`;
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
        playerOptionsContainer.appendChild(reset);

        if(computerPoints === 5) {
            resultText.textContent = `THE COMPUTER HAS WON!`
        } else {
            resultText.textContent = `CONGRATULATION, YOU HAVE WON!`
        }

        function resetGame() {
            playerOption.innerHTML = `</br>`;
            computerOption.innerHTML = `</br>`;
            computerPoints = 0;
            playerPoints = 0;
            resultText.textContent = "First one to 5 Points wins the game!";
            pointsText.textContent = "Rock, paper, scissors, shoot!";
            computerPointsText.textContent = "0";
            playerPointsText.textContent = "0";

            reset.remove();
            choiceBtns.forEach(button => playerOptionsContainer.appendChild(button));
        }

        reset.addEventListener('click', resetGame);
    }
}

function game() {
    computerOption.textContent = `${computerChoice.toUpperCase()}`;
    playerOption.textContent = `${playerChoice.toUpperCase()}`;

    switch (computerOption.textContent) {
        case "ROCK": computerOption.style.color = "#FF52AB";
            break;
        case "PAPER": computerOption.style.color = "#FBBC00";
            break;
        case "SCISSORS": computerOption.style.color = "#04CAE4";
    }

    switch (playerOption.textContent) {
        case "ROCK": playerOption.style.color = "#FF52AB";
            break;
        case "PAPER": playerOption.style.color = "#FBBC00";
            break;
        case "SCISSORS": playerOption.style.color = "#04CAE4";
    }
    

    playRound(computerChoice, playerChoice);
}