const roshambo = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return roshambo[Math.floor(Math.random()*3)];
};

let displayResult = document.querySelector('.result');

function playRound(playSelection, computerSelection) {
    let myButton = document.getElementById("myBtn");
    let userInput = document.getElementById("userChoice");
    myButton.addEventListener("click", () => {
         computerSelection = getComputerChoice();
         playSelection = userInput.value;
         if (playSelection.toLowerCase() === roshambo[0]) {
             if (computerSelection === roshambo[1]) {
                displayResult.innerText = `You lose! ${roshambo[1]} beats ${roshambo[0]}.`;
             } else if (computerSelection === roshambo[2]) {
                displayResult.innerText = `You win! ${roshambo[0]} beats ${roshambo[2]}.`;
             } else {
                displayResult.innerText = "It's a tie!";
             }
         } else if (playSelection.toLowerCase() === roshambo[1]) {
             if (computerSelection === roshambo[2]) {
                displayResult.innerText = `You lose! ${roshambo[2]} beats ${roshambo[1]}.`;
             } else if (computerSelection === roshambo[0]) {
                displayResult.innerText = `You win! ${roshambo[1]} beats ${roshambo[0]}.`;
             } else {
                displayResult.innerText = "It's a tie!";
             }
         } else if (playSelection.toLowerCase() === roshambo[2]){
             if (computerSelection === roshambo[0]) {
                displayResult.innerText = `You lose! ${roshambo[0]} beats ${roshambo[2]}.`
             } else if (computerSelection === roshambo[1]) {
                displayResult.innerText = `You win! ${roshambo[2]} beats ${roshambo[1]}.`
             } else {
                displayResult.innerText = "It's a tie!"
             }
        }; 
      });
    };




//   getComputerChoice();
//   choice();
//   console.log(getComputerChoice());

getComputerChoice();
playRound();

  







