// Add event listener to 'START GAME' button. If clicked hide it and show the rest of the game overlay.
const startButton = document.querySelector('.start-game');

const humanSection = document.querySelector('.human');
const computerSection = document.querySelector('.computer');

const results = document.querySelector('.results');

let feedbackMessage = document.querySelector('.feedback-message');
startButton.addEventListener('click', () => {
    startButton.classList.toggle('hide');
    humanSection.classList.toggle('hide');
    computerSection.classList.toggle('hide');
    results.classList.toggle('hide');
    feedbackMessage.textContent = 'Best of 5! Press any weapon to start playing!';
});

// Gets choice from user using an event listener
const humanButton = document.querySelectorAll('.human-button');
humanButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    resetButtonColor();
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    button.classList.add('weapon-choice')
    playRound(humanChoice, computerChoice);
  });
});

// Randomly get computer's choice (between 0 and 2. 0 being 'Rock', 1 being 'Paper' and 2 being 'Scissors')
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            highlightComputerChoice('rock');
            return 'rock';
        case 1:
            highlightComputerChoice('paper');
            return 'paper';
        case 2:
            highlightComputerChoice('scissors');
            return 'scissors';
    }
}

// Uses random choice from getComputerChoice function, compares the value to innerText in the HTML buttons
// and highlights the choice, by changing it's background color
function highlightComputerChoice(choice) {
    const computerButton = document.querySelectorAll('.computer-button');
    computerButton.forEach((button) => {
        if (button.textContent == choice.toUpperCase()) {
            button.classList.add('weapon-choice');
        }
    })
    return;
}

// Function that resets buttons to default colorway. Called whenever the user clicks a button
function resetButtonColor() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.classList.remove('weapon-choice'));
}

// Initialize scores and round counter
let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

// Get paragraph to write scores in
let humanScoreText = document.querySelector('.human-score');
let computerScoreText = document.querySelector('.computer-score');

// Create a function that gets computer and user's choice as parameters and compares them to check who the winner is
// Add value to score variables
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        feedbackMessage.textContent = 'It\'s a tie!' ;
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            feedbackMessage.textContent = 'You lose! Paper beats Rock';
            computerScore++;
        }
        else if (computerChoice === 'scissors') {
            feedbackMessage.textContent = 'You win! Rock beats Scissors';
            humanScore++;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            feedbackMessage.textContent = 'You win! Paper beats Rock';
            humanScore++;
        }
        else if (computerChoice === 'scissors') {
            feedbackMessage.textContent = 'You lose! Scissors beats Paper';
            computerScore++;
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            feedbackMessage.textContent = 'You lose! Rock beats Scissors';
            computerScore++;
        }
        else if (computerChoice === 'paper') {
            feedbackMessage.textContent = 'You win! Scissors beats Paper';
            humanScore++;
        }
    }

    humanScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;
    numberOfRounds++;
    if (numberOfRounds === 5) endGame();
}

// Get play again button element
const playAgainButton = document.querySelector('.play-again');

// Declares winner/tie when the number of rounds reaches 5. Disables player buttons.
function endGame () {
    if (humanScore > computerScore) {
        feedbackMessage.textContent = 'You won the game!';
    }
    else if (computerScore > humanScore) {
        feedbackMessage.textContent = 'You lost the game!';
    }
    else {
        feedbackMessage.textContent = 'It\'s a tie!';
    }

    humanButton.forEach((button) => {
        button.disabled = true;
    });

    playAgainButton.classList.toggle('hide');    

}

// When the play again button is clicked reset the whole game
playAgainButton.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreText.innerText = humanScore;
    computerScoreText.innerText = computerScore;
    numberOfRounds = 0;
    playAgainButton.classList.toggle('hide');

    resetButtonColor();

    feedbackMessage.textContent = 'Best of 5! Press any weapon to start playing!';
4
    humanButton.forEach((button) => {
        button.disabled = false;
    });
});




