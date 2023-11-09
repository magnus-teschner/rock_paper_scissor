function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "sciccors"]
    return options[randomNumber]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection){
        return `draw ${playerSelection} and ${computerSelection} equals out!`
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "sciccors"){
        return "You Lose! Sciccors beats Paper"
    } else if (playerSelection === "sciccors" && computerSelection === "rock"){
        return "You Lose! Rock beats Sciccors"
    } else if (playerSelection === "rock" && computerSelection === "sciccors"){
        return "You Win! Rock beats Sciccors"
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You Win!! Paper beats Rock"
    } else if (playerSelection === "sciccors" && computerSelection === "paper"){
        return "You Win!! Sciccors beats Paper"
    }
}

let yourChoice = prompt("Enter Rock, Paper or Sciccor!", "rock");
let computerChoice = getComputerChoice();
console.log(playRound(yourChoice, computerChoice));