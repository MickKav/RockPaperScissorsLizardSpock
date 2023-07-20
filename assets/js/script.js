// List of button choices to select
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// User score status
let score = 0;

// Amount of tries left in game
let triesLeft = 3;


/**
  * Computer choice
  * Returns a random choice from the choices array.
  */
function computerChoice() {
     // how many choices are there
     const lengthOfChoices = choices.length;

     // get a random number between 0 and the number of choices
     const computersChoice = choices[Math.floor(Math.random() * lengthOfChoices)]; 
     
     // return the random choice
     return computersChoice;
}

function playRound(playerChoice) {
    const computer = computerChoice();
    let result = "";

    if (playerChoice === computer) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (playerChoice === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (playerChoice === "paper" && (computer === "rock" || computer === "spock")) ||
        (playerChoice === "lizard" && (computer === "paper" || computer === "spock")) ||
        (playerChoice === "spock" && (computer === "rock" || computer === "scissors"))
    ) {
        score++;
        result = `You win! ${playerChoice} beats ${computer}.`;
    } else {
        triesLeft--;
        result = `You lose! ${computer} beats ${playerChoice}.`;
    }
}

