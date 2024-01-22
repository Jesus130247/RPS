// Player clicks button
// button is registered as either R P S
// this is inputed into getComparison(x,y), where x is either R P or S

// what constants are needed?
// a constant for the div using querySelector 
const result = document.querySelector('#result')
const score = document.querySelector('#score')
computer_score = 0
player_score = 0
// need a constant for each button result
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
// addEventListener that is atttached to each button
rock.addEventListener('click', () => {
    result.textContent = playRound('SCISSORS')
    score.textContent = scoreCounter()
});
paper.addEventListener('click', () => {
    result.textContent = playRound('SCISSORS')
    score.textContent = scoreCounter()
});
scissors.addEventListener('click', () => {
    result.textContent = playRound('SCISSORS')
    score.textContent = scoreCounter()
});
// a function called "playRound" that is activated with a button press
function playRound(buttonSelection) {
    return getComparison(buttonSelection, getComputerChoice(getRandomInt(3)))
}


function scoreCounter() {
    if (player_score === 3) {
        computer_score = 0
        finalScore = computer_score
        player_score  = 0
        return "Player Wins; 3 vs " + finalScore
    } else if (computer_score === 3) {
        computer_score = 0
        finalScore = player_score
        player_score  = 0
        return "Computer Wins; 3 vs " + finalScore
    } else {
        return "Player score is " + player_score +  " vs " + " Computer score " + computer_score }
}

// returns a result from 0 -> 2
function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}
// turns a 0, 1 or 2 into an answer
function getComputerChoice(x) {
    max = 3
    computer = getRandomInt(max);
    if (computer === 0) {
        compAns = "ROCK"
    } else if (computer === 1) {
        compAns = "PAPER"
    } else {
        compAns = "SCISSORS"
    }
    return compAns
}
 

function getComparison(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"   
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        player_score++
        return "Player wins with Rock vs Scissors"
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        computer_score++
        return "Computer wins with Rock vs Scissors"
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        computer_score++
        return "Computer wins with Paper vs Rock"
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        player_score++
        return "Player wins with Paper vs Rock"
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        computer_score++
        return "Computer wins with Scissors vs Paper"
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        player_score++
        return "Player wins with Scissors vs Paper"
    }
}

