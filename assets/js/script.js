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
     return computersChoice;
}

function playRound() {}

