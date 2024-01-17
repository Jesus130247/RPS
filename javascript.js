function Player(x) {
    let i = 0
    while (i === 0) {
        let playerSelection = x.toUpperCase()
        if (playerSelection === "ROCK") {
            i++
            return playerSelection 
        } else if (playerSelection === 'PAPER') {
            i++
            return playerSelection
        } else if (playerSelection === 'SCISSORS') {
            i++
            return playerSelection
        } else {
            alert("Please input; 'Rock', 'Paper', or 'Scissors")
            x = prompt("Rock, Paper, or Scissors?");
        }
    }
} 

function getRandomInt(max) {
    return Math.floor(Math.random()*max);
}
function getComputerChoice(x) {
    computer = getRandomInt(3);
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

function game() {
    alert("Best of 5; Rock, Paper, Scissors game against a Computer.")
    player_score = 0
    computer_score = 0
    j = 0
    while (j === 0) {
        answer = prompt("Rock, Paper, or Scissors?")
        console.log(getComparison(Player(answer), getComputerChoice(getRandomInt(3))))
        console.log("Score: player " + player_score + " & computer " + computer_score)
        if (player_score === 3) {
            let j = 1
            return "Player wins!"
        } else if (computer_score === 3) {
            let j = 1
            return "Computer wins!"
        }
    }
}

console.log(game())

// rock > scissors
// scissorts > paper
// paper > rock