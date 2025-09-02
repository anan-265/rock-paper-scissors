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
    console.log(`Score: User - ${userScore}, Computer - ${computerScore}`);
    return { reason, userScore, computerScore };
}

rockButton = document.querySelector("#rock");
paperButton = document.querySelector("#paper");
scissorsButton = document.querySelector("#scissors");
resetButton = document.querySelector("#reset");

rockButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let result = playRound("rock", computerChoice);
    updateScores(result);
}
);

paperButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let result = playRound("paper", computerChoice);
    updateScores(result);
}
);

scissorsButton.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let result = playRound("scissors", computerChoice);
    updateScores(result);
}
);

resetButton.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;
    updateScores({ reason: "Game reset. Let's start a new game!", userScore, computerScore });
});

scoreTable = document.querySelector("table");
userScoreCell = document.querySelector("#player-score");
computerScoreCell = document.querySelector("#computer-score");
announcementDiv = document.querySelector(".announcement");

function updateScores(result) {
    userScoreCell.textContent = result.userScore;
    computerScoreCell.textContent = result.computerScore;
    announcementDiv.textContent = result.reason;

    if (scoreTable.classList.contains("hidden")) {
        scoreTable.classList.remove("hidden");
    }



    if (result.userScore === 5) {
        userScoreCell.style.color = "green";
        announcementDiv.textContent = "Congratulations! You reached 5 points first and won the game!";
        announcementDiv.style.color = "green";
        userScore = 0;
        computerScore = 0;
    } else if (result.computerScore === 5) {
        computerScoreCell.style.color = "green";
        userScore = 0;
        computerScore = 0;
        announcementDiv.textContent = "Sorry, you lost the game. The computer reached 5 points first.";
        announcementDiv.style.color = "red";
    } else if (result.userScore < 5 && result.computerScore < 5) {
        userScoreCell.style.color = "black";
        computerScoreCell.style.color = "black";
        announcementDiv.style.color = "black";
    }
};

