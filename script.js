//computer choice
function getComputerChoice() {
   let comChoice = Math.floor(Math.random()*3);
   if (comChoice === 0 ) {
        return "rock";
   } else if (comChoice === 1) {
        return "paper";
   } else {
        return "scissor";
   }
}

let machineHand = getComputerChoice();
console.log("Computer Choose: " + machineHand);



//human choice
function getHumanChoice() {
    let userInput = prompt("Pick: Rock, Paper or Scissor ?");
    let normalizedInput = userInput.toLowerCase();

    const rock = "rock";
    const paper = "paper";
    const scissor = "scissor";

    if (normalizedInput === rock) {
        return "rock";
    } else if (normalizedInput === paper) {
        return 'paper';
    } else if (normalizedInput === scissor) {
        return "scissor";
    } else {
        return "please enter a valid value";
    }
}

let humanHand = getHumanChoice();
console.log("You chose: " + humanHand);

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
        } else if (computerChoice === "scissor") {
            humanScore++;
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissor") {
            computerScore++;
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "paper") {
            humanScore++;
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }

    if (humanChoice === "scissor") {
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