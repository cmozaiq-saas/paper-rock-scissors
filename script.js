//computer choice
function getComputerChoice() {
   let comChoice = Math.random();
   if (comChoice === 0 ) {
        return "rock";
   } else if (comChoice <= 0.5) {
        return "paper";
   } else {
        return "scissor";
   }
}

let machineHand = getComputerChoice();

//human choice
function getHumanChoice() {
    let userInput = prompt("Pick: Rock, Paper or Scissor ?");
    let normalizedInput = userInput.toLowerCase();

    const rock = "rock";
    const paper = "paper";
    const scissor = "scissor";

    if (normalizedInput === rock) {
        return console.log("rock");
    } else if (normalizedInput === paper) {
        return console.log('paper');
    } else if (normalizedInput === scissor) {
        return console.log("scissor");
    } else {
        return console.log("please enter a valid value");
    }
}

let humanHand = getHumanChoice();


//variables to keep the score
let humanScore = 0;
let computerScore = 0;

//create the single round function
//user looses if 
//User (hand ==  rock and machine is paper) 
//or (hand == paper and machine scissors) 
//or (hand == scissors and machine is rock).

//round winner 



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "it's a Tie";
    }   

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "scissors") {
            humanScore++;
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "paper") {
            humanScore++;
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "paper") {
            humanScore++;
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }
}

console.log(playRound(humanHand, machineHand));
console.log(playRound("rock", "paper"));