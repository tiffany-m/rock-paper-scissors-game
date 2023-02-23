const screens = document.querySelectorAll(".screen");
const startBtn = document.getElementById("btn-start");
const playerChoiceBtns = document.querySelectorAll(".btn-player-choice");
const playerOptionsContainer = document.getElementById("player-options-container");
const computerChoiceShownOnGameBoard = document.getElementById("computer-choice-gameboard");
const playerChoiceShownOnGameBoard = document.getElementById("player-choice-gameboard");
const resultText = document.getElementById("result-text");
const pointsText = document.getElementById("points-text");
const computerPointsText = document.getElementById("computer-points-text");
const playerPointsText = document.getElementById("player-points-text");
let playerChoice = "";
let computerChoice = "";
let computerPoints = 0;
let playerPoints = 0;

// transitions to next screen, "game board", where game is played
startBtn.addEventListener("click", () => {
    screens[0].classList.add("move-up");
})

// game starts once player choses an option
playerChoiceBtns.forEach(button => button.addEventListener("click", () => {
    playerChoice = button.textContent;

    getComputerChoice();
}))

function getComputerChoice() {
    let computerOptions = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * computerOptions.length);
    computerChoice = computerOptions[randomNumber];
    
    playGame();
}

function playGame() {
    computerChoiceShownOnGameBoard.textContent = `${computerChoice.toUpperCase()}`;
    playerChoiceShownOnGameBoard.textContent = `${playerChoice.toUpperCase()}`;

    switch (computerChoiceShownOnGameBoard.textContent) {
        case "ROCK": computerChoiceShownOnGameBoard.style.color = "#FF52AB";
            break;
        case "PAPER": computerChoiceShownOnGameBoard.style.color = "#FBBC00";
            break;
        case "SCISSORS": computerChoiceShownOnGameBoard.style.color = "#04CAE4";
    }

    switch (playerChoiceShownOnGameBoard.textContent) {
        case "ROCK": playerChoiceShownOnGameBoard.style.color = "#FF52AB";
            break;
        case "PAPER": playerChoiceShownOnGameBoard.style.color = "#FBBC00";
            break;
        case "SCISSORS": playerChoiceShownOnGameBoard.style.color = "#04CAE4";
    }

    playRound(computerChoice, playerChoice);
}

function playRound(computer, player) {
    if (computer === player) {
        computerPoints++;
        playerPoints++;
        resultText.textContent = `It"s a tie! You both chose ${computer}!`;
        pointsText.textContent = `Points for both of you!`;
        computerPointsText.textContent = `${computerPoints}`;
        playerPointsText.textContent = `${playerPoints}`;
    } else if (computer === "Scissors" && player === "Paper" || computer === "Paper" && player === "Rock" || computer === "Rock" && player === "Scissors") {
        computerPoints++;
        resultText.textContent = `You lose! ${computer} beats ${player}!`;
        pointsText.textContent = `1 Point for the Computer`;
        computerPointsText.textContent = `${computerPoints}`;
    } else {
        playerPoints++;
        resultText.textContent = `You Win! ${player} beats ${computer}!`;
        pointsText.textContent = `1 Point for Player`;
        playerPointsText.textContent = `${playerPoints}`;
    }

    if(computerPoints === 5 || playerPoints === 5) {
        playerChoiceBtns.forEach(button => button.remove());

        const reset = document.createElement("button");
        reset.textContent = "Reset Game";
        reset.setAttribute("id", "btn-reset");
        playerOptionsContainer.appendChild(reset);

        if(computerPoints === 5) {
            resultText.textContent = `THE COMPUTER HAS WON!`;
        } else {
            resultText.textContent = `CONGRATULATION, YOU HAVE WON!`;
        }

        function resetGame() {
            playerChoiceShownOnGameBoard.innerHTML = `</br>`;
            computerChoiceShownOnGameBoard.innerHTML = `</br>`;
            computerPoints = 0;
            playerPoints = 0;
            resultText.textContent = "First one to 5 Points wins the game!";
            pointsText.textContent = "Rock, paper, scissors, shoot!";
            computerPointsText.textContent = "0";
            playerPointsText.textContent = "0";

            reset.remove();
            playerChoiceBtns.forEach(button => playerOptionsContainer.appendChild(button));
        }

        reset.addEventListener("click", resetGame);
    }
}
