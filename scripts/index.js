// Declaration of function to get computer choice
function getComputerChoice () {
    let randInt = Math.random() * 3;
    if (randInt < 1) {
        return "rock";
    } else if (randInt < 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice());

//Declaration of function to get human choice

function getHumanChoice(){
    let num = prompt("Enter a number (1 for rock, 2 for paper, 3 for scissors):");
    num = parseInt(num);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else if (num === 3) {
        return "scissors";
    }
}
// console.log(getHumanChoice());

//Declaration of global variables for user and computer scores

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    let reason = "";
    if (userChoice === computerChoice) {
        reason = "It's a tie!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        userScore++;
        reason = "You win! Rock beats Scissors";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        reason = "You lose! Rock beats Scissors";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        userScore++;
        reason = "You win! Paper beats Rock";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        reason = "You lose! Paper beats Rock";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        userScore++;
        reason = "You win! Scissors beats Paper";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        reason = "You lose! Scissors beats Paper";
    }
    console.log(reason);
    alert(reason);
    return { userScore, computerScore };
}

playRound(getHumanChoice(), getComputerChoice());