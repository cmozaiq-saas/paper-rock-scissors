console.log("Hello World");

//computer choice
function getComputerChoice() {
   let number = Math.random();
   if (number == 0 ) {
    return console.log("rock");
   } else if (number <= 0.5) {
    return console.log("paper");
   } else {
    return console.log("scissor");
   }
}

const machineHand = getComputerChoice();

//human choice
function getHumanChoice() {
    let userInput = prompt("Pick: Rock, Paper or Scissor ?");
    let normalizedInput = userInput.toLowerCase();
    if (normalizedInput == "rock") {
        return console.log("rock");
    } else if (normalizedInput == "paper") {
        return console.log('paper');
    } else if (normalizedInput == "scissor") {
        return console.log("scissor");
    } else {
        return console.log("please enter a valid value");
    }
}

const humanHand = getHumanChoice();
console.log(humanHand);

//variables to keep the score
let humanScore = 0;
let computerScore = 0;
