let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// This function returns a random integer between 0 and 9.
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}

// This function returns true if the difference between the human guess and the target is smaller or equal to the difference of the computer guess and the target.
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    if (Math.abs(target - currentHumanGuess) <= Math.abs(target - computerGuess)){
        return true;
    } else {
        return false;
    }
}

// This function takes the winner as parameter where the function returns the string winner if it's true and computer if it's false. Therefore, if winner is 'human' then we add 1 point to humanScore.
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

// Adds 1 to the current round number.
const advanceRound = () => currentRoundNumber++;