const ROCK = '🪨';
const PAPER = '📄';
const SCISSORS = '✂️'
let options = [ROCK, PAPER, SCISSORS];
let gameIsOver = false;

const humanScore = document.querySelector(".player .score");
const computerScore = document.querySelector(".computer .score");
const roundNum = document.querySelector(".round span");
const humanDisplay = document.querySelector(".human-choice");
const computerDisplay = document.querySelector(".computer-choice");
const resultDisplay = document.querySelector(".result");

const container = document.querySelector("#choices");
const btns = Array.from(container.childNodes);

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (gameIsOver) {
            resetGame();
            gameIsOver = false;
        }

        const humanChoice = btn.textContent;
        playRound(humanChoice)
    });
});

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    const isWin = determineWinner(humanChoice, computerChoice);
    updateDisplay(isWin, humanChoice, computerChoice);

    if (humanScore.textContent === '5' || computerScore.textContent === '5') {
        endGame();
    } else {
        incrementRound();
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * options.length);
    return options[choice];
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return null;
    } else if (
        (humanChoice === ROCK && computerChoice === SCISSORS)
        || (humanChoice === PAPER && computerChoice === ROCK)
        || (humanChoice === SCISSORS && computerChoice === PAPER)
    ) {
        return true;
    } else {
        return false;
    }
}

function updateDisplay(isWin, humanChoice, computerChoice) {
    let winner;
    let resultMessage;

    if (isWin !== null) {
        winner = isWin ? humanScore : computerScore;
        resultMessage = `You ${isWin ? 'win' : 'lose'}! 
                        ${isWin ? humanChoice : computerChoice} 
                        beats ${isWin ? computerChoice : humanChoice}`;
    } else {
        resultMessage = "It's a tie!";
    }

    if (winner) winner.textContent = +winner.textContent + 1;
    humanDisplay.textContent = humanChoice;
    computerDisplay.textContent = computerChoice;
    resultDisplay.textContent = resultMessage;
}

function incrementRound() {
    roundNum.textContent = +roundNum.textContent + 1;
}

function resetGame() {
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    roundNum.textContent = "1";
}

function endGame() {
    gameIsOver = true;
    const result = +humanScore.textContent > +computerScore.textContent ? "You win" : "Computer wins";
    resultDisplay.textContent = `${result}! Press ${ROCK}, ${PAPER}, or ${SCISSORS} to play again.`;
}
