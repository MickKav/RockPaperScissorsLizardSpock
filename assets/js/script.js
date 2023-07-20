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

/**
 * Play a round of Galactic Bash
 * 
 * start by getting computers choice
 * compare the player's choice with computers choice
 * return the correct result and update the score
 * 
 */
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
        // if the user loses then decrement the tries left for them
        triesLeft--;
        result = `You lose! ${computer} beats ${playerChoice}.`;
    }

    // update the values of game info for the user
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = score;
    document.getElementById("tries-counter").textContent = triesLeft;

    // if triesLeft = 0 notify user that game is over
    if (triesLeft === 0) {
        // 
        document.getElementById("result").textContent = "Game over!";

        // disable the button so the user can't play anymore
        document.querySelectorAll("button[data-choice]").forEach(btn => btn.disabled = true);
    }
}

