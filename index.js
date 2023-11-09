function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "sciccors"]
    return options[randomNumber]
}

function evaluateDecisions(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return [[0,0], `draw ${playerSelection} and ${computerSelection} equals out!`];
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return [[0,1], 'You Lose! Paper beats Rock'];
    } else if (playerSelection === "paper" && computerSelection === "sciccors"){
        return [[0,1], 'You Lose! Sciccors beats Paper'];
    } else if (playerSelection === "sciccors" && computerSelection === "rock"){
        return [[0,1], 'You Lose! Rock beats Sciccors'];
    } else if (playerSelection === "rock" && computerSelection === "sciccors"){
        return [[1,0], 'You Win! Rock beats Sciccors'];
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return [[1,0], 'You Win! Paper beats Rock'];
    } else if (playerSelection === "sciccors" && computerSelection === "paper"){
        return[[1,0], 'You Win! Sciccors beats Paper'];
    }
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    return evaluateDecisions(playerSelection, computerSelection)
}

function adaptScores(oneRoundScore, scoreArray){
    scoreArray = scoreArray.map((num, idx) => {
        return num + oneRoundScore[idx]
    })
    return scoreArray
}

function chooseWinner(scoreArray){
    if (scoreArray[0] > scoreArray[1]){
        console.log("you won")
    } else if (scoreArray[0] < scoreArray[1]){
        console.log("computer won - you lost")
    } else {
        console.log("it is a draw between you and the computer")
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let yourChoice = prompt("Enter Rock, Paper or Sciccor!", "rock");
        let computerChoice = getComputerChoice();
        let result = playRound(yourChoice, computerChoice);

        scoreArray = adaptScores(result[0], scoreArray);

        console.log(result[1]);
    }
    chooseWinner(scoreArray);
}

let scoreArray = [0,0];
game();