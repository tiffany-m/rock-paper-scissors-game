// randomly select 'rock', 'paper' or 'scissors'
function getComputerChoice() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 2);
    return computerOptions[randomNumber];
}

console.log(getComputerChoice());