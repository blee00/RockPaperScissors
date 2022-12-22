const roshambo = ["rock", "paper", "scissors"];

function getComputerChoice() {
    roshambo[Math.floor(Math.random()*3)];
};

let computerSelection = getComputerChoice;

let playSelection = prompt('Type rock, paper, or scissors in order to start', '');

function playRound(playSelection, computerSelection) {
    if (playSelection.toLowerCase() === roshambo[0]) {
        if (computerSelection === roshambo[1]) {
            console.log(`You lose! ${roshambo[1]} beats ${roshambo[0]}.`);
        } else if (computerSelection === roshambo[2]) {
            console.log(`You win! ${roshambo[0]} beats ${roshambo[2]}.`);
        } else {
            console.log("It's a tie!");
        }
    } else if (playSelection.toLowerCase() === roshambo[1]) {
        if (computerSelection === roshambo[2]) {
            console.log(`You lose! ${roshambo[2]} beats ${roshambo[1]}.`);
        } else if (computerSelection === roshambo[0]) {
            console.log(`You win! ${roshambo[1]} beats ${roshambo[0]}.`);
        } else {
            console.log("It's a tie!");
        }
    } else if (playSelection.toLowerCase() === roshambo[2]){
        if (computerSelection === roshambo[0]) {
            console.log(`You lose! ${roshambo[0]} beats ${roshambo[2]}.`);
        } else if (computerSelection === roshambo[1]) {
            console.log(`You win! ${roshambo[2]} beats ${roshambo[1]}.`);
        } else {
            console.log("It's a tie!");
        }
    };
};

