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



//get human choice
function getHumanChoice(userInput) {

    const rock = "rock";
    const paper = "paper";
    const scissor = "scissor";

    if (userInput.toLowerCase() === rock) {
        return "rock";
    } else if (userInput.toLowerCase() === paper) {
        return 'paper';
    } else if (userInput.toLowerCase() === scissor) {
        return "scissor";
    } else {
        return "please enter a valid value";
    }
}


//variables to keep the score
let humanScore = 0;
let computerScore = 0;

//round winner 



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "it's a Tie";
    }   

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "scissor") {
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissor") {
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "paper") {
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }

    if (humanChoice === "scissor") {
        if (computerChoice === "rock") {
            return `You lose, ${computerChoice} beats ${humanChoice}`;
        } else if (computerChoice === "paper") {
            return `You Win ${humanChoice} beats ${computerChoice}`;
        }
    }
}


//function play game 
//game has 5 round 

function playGame() {
    //variables to keep the score
    let humanScore = 0;
    let computerScore = 0;
    for (let i =0; i <5; i++) {
        let userInput = prompt("Pick: Rock, Paper or Scissor ?");
        let humanHand = getHumanChoice(userInput);
        console.log("You chose: " + humanHand);
        let round = playRound(humanHand, machineHand);
        console.log(round);
        if (round.includes('Win')) {
            humanScore++;
        } else if (round.includes('lose')) {
            computerScore++;
        }
    }
    console.log(`Final Score: \n You: ${humanScore} \n Computer: ${computerScore} `);
}

console.log(playGame());

