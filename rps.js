function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'rock';
    if (choice === 1) return 'paper';
    if (choice === 2) return 'scissors';
}

function playRound(humanChoice, computerChoice) {
    const scoreBoard = `Score: ${humanScore} - ${computerScore}`
    if (humanChoice === computerChoice) {
        results.innerText = scoreBoard + `\nIt's a tie!`
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
        humanScore++;

        results.innerText = scoreBoard + `
        You win! ${humanChoice} beats ${computerChoice}`
    } else {
        computerScore++;

        results.innerText = scoreBoard + `
        You lose! ${computerChoice} beats ${humanChoice}`
    }
}

function completeGame() {
    const message = `${humanScore} - ${computerScore}
    Click a button to restart`

    if (humanScore > computerScore) {
        results.innerText = `You win! ${message}`
    } else {
        results.innerText = `Computer wins! ${message}`
    }

    humanScore = 0
    computerScore = 0
}

let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.option');
let results = document.querySelector('.results');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let humanChoice = e.target.id;
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)

        if (humanScore === 5 || computerScore === 5) {
            completeGame()
        }
    })
})
