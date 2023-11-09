function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "sciccors"]
    return options[randomNumber]
}

function returnResult(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        let result = [[0,0], `draw ${playerSelection} and ${computerSelection} equals out!`];
        return result
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        let result = [[0,1], 'You Lose! Paper beats Rock'];
        return result
    } else if (playerSelection === "paper" && computerSelection === "sciccors"){
        let result = [[0,1], 'You Lose! Sciccors beats Paper'];
        return result
    } else if (playerSelection === "sciccors" && computerSelection === "rock"){
        let result = [[0,1], 'You Lose! Rock beats Sciccors'];
        return result
    } else if (playerSelection === "rock" && computerSelection === "sciccors"){
        let result = [[1,0], 'You Win! Rock beats Sciccors'];
        return result
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        let result = [[1,0], 'You Win! Paper beats Rock'];
        return result
    } else if (playerSelection === "sciccors" && computerSelection === "paper"){
        let result = [[1,0], 'You Win! Sciccors beats Paper'];
        return result
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase()
    return returnResult(playerSelection, computerSelection)
}

function game(){
    for (let i = 0; i < 5; i++){
        let yourChoice = prompt("Enter Rock, Paper or Sciccor!", "rock");
        let computerChoice = getComputerChoice();
        let result = playRound(yourChoice, computerChoice);
        if (result[0][0] === 1){
            ownScore += 1;
        } else if (result[0][1] === 1){
            computerScore += 1;
        }
        console.log(result[1]);
    }
    if (ownScore > computerScore){
        console.log("you won")
    } else if (ownScore < computerScore){
        console.log("computer won")
    } else {
        console.log("draw")
    }
}

let ownScore = 0;
let computerScore = 0;
game();