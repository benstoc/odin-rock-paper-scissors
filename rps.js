/*
Goal: create rock paper scissors
- user selects a choice
- computer selects a choice
- winner is determined

Plan: 
The first iteration of this project will run on the command line.
Ther user will input a choice and output if they won or lost against the 
computer's choice.
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'rock';
    if (choice === 1) return 'paper';
    if (choice === 2) return 'scissors';
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt('rock, paper, or scissors?');
        choice = choice.toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
        } else {
            alert(' Invalid input!!' );
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    let youWin = false;

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
        youWin = true;
    }

    if (youWin) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame(rounds) {
    let counter = 0;

    while (counter < rounds) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        counter++;
    }
}

let humanScore = 0;
let computerScore = 0;

playGame(rounds=5);
console.log(`You: ${humanScore}     Computer: ${computerScore}`);


