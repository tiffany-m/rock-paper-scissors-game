const computerText = document.getElementById('computer-choice');
const playerText = document.getElementById('player-choice');
const resultText = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.btn-choice');
const pointsText = document.getElementById('points-text')
const computerPointsText = document.getElementById('computer-points-text')
const playerPointsText = document.getElementById('player-points-text')
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

    if(computerPoints === 5 || playerPoints === 5) {
        choiceBtns.forEach(button => button.remove());

        const reset = document.createElement('button');
        reset.innerHTML = "Reset Game";
        reset.setAttribute('id', 'btn-reset');
        document.body.appendChild(reset);

        if(computerPoints === 5) {
            resultText.textContent = `THE COMPUTER HAS WON!`
        } else {
            resultText.textContent = `YOU HAVE WON!`
        }

        reset.addEventListener('click', () => {
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
            choiceBtns.forEach(button => document.body.appendChild(button));
        })
    }
}

function game() {
    computerText.textContent = `Computer Choice: ${computerChoice}`;
    playerText.textContent = `Player Choice: ${playerChoice}`;
    
    playRound(computerChoice, playerChoice);
}
