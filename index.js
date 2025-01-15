// Randomly get computer's choice (between 0 and 2. 0 being 'Rock', 1 being 'Paper' and 2 being 'Scissors')
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Prompt user for their choice (between 'Rock', 'Paper' and 'Scissors')
function getHumanChoice() {
    let humanChoice = prompt("Please choose your weapon ('Rock', 'Paper' or 'Scissors')");
    
    return humanChoice;
}

playGame();

function playGame() {
    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    // Get the choices for the first round
    let humanChoice = getHumanChoice();
    console.log('You chose: ' + humanChoice);
    let computerChoice = getComputerChoice();
    console.log('Computer chose: ' + computerChoice);

    // Create a function that gets computer and user's choice as parameters and compares them to check who the winner is
    // Add value to score variables
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
        }
        else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                console.log('You lose! Paper beats Rock');
                computerScore++;
            }
            else if (computerChoice === 'scissors') {
                console.log('You win! Rock beats Scissors');
                humanScore++;
            }
        }
        else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                console.log('You win! Paper beats Rock');
                humanScore++;
            }
            else if (computerChoice === 'scissors') {
                console.log('You lose! Scissors beats Paper');
                computerScore++;
            }
        }
        else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                console.log('You lose! Rock beats Scissors');
                computerScore++;
            }
            else if (computerChoice === 'paper') {
                console.log('You win! Scissors beats Paper');
                humanScore++;
            }
        }
    }

    for (let rounds = 1; rounds <= 5; rounds++) {
        // Call playRound function
        playRound(humanChoice, computerChoice);

        // Get new values for human and computer choices
        humanChoice = getHumanChoice();
        console.log('You chose: ' + humanChoice);
        computerChoice = getComputerChoice();
        console.log('Computer chose: ' + computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('You won the game!');
    }
    else if (computerScore > humanScore) {
        console.log('You lost the game!');
    }
    else {
        console.log('It\'s a tie!');
    }
}