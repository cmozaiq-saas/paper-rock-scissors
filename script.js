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

let machineHand = getComputerChoice();

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

let humanHand = getHumanChoice();
console.log(humanHand);