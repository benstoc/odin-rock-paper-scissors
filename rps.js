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

//Compare user and computer inputs
//the win condition is as follows: rock > scissors > paper > rock


