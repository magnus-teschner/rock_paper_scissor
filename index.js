function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let options = ["✊", "🖐️", "✌️"]
    return options[randomNumber]
}

function evaluateDecisions(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return [0,0];
    } else if (playerSelection === "✊" && computerSelection === "🖐️"){
        return [0,1];
    } else if (playerSelection === "🖐️" && computerSelection === "✌️"){
        return [0,1];
    } else if (playerSelection === "✌️" && computerSelection === "✊"){
        return [0,1];
    } else if (playerSelection === "✊" && computerSelection === "✌️"){
        return [1,0];
    } else if (playerSelection === "🖐️" && computerSelection === "✊"){
        return [1,0];
    } else if (playerSelection === "✌️" && computerSelection === "🖐️"){
        return[1,0];
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
        return "you won"
    } else if (scoreArray[0] < scoreArray[1]){
        return "computer won - you lost"
    } else {
        return "it is a draw between you and the computer"
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
    console.log(chooseWinner(scoreArray));
}

let scoreArray = [0,0];
//game();
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', ()=> {
    let playerChoice = button.querySelector('.sign').textContent;
    let computerChoice = getComputerChoice();

    const playerChoiceDisplay = document.querySelector('#player-choice-display');
    const computerChoiceDisplay = document.querySelector('#computer-choice-display');

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    let result = playRound(playerChoice, computerChoice)
    console.log(result);

    }
));
