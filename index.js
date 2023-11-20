function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    let options = ["✊", "🖐️", "✌️"]
    return options[randomNumber]
}

function evaluateDecisions(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return [0,0];
    } 
    
    else if 
    (playerSelection === "✊" && computerSelection === "🖐️" ||
    playerSelection === "🖐️" && computerSelection === "✌️" ||
    playerSelection === "✌️" && computerSelection === "✊"){
        return [0,1];
    } 
    
    else if 
    (playerSelection === "✊" && computerSelection === "✌️" ||
    playerSelection === "🖐️" && computerSelection === "✊" ||
    playerSelection === "✌️" && computerSelection === "🖐️"){
        return [1,0];
    }
}


function playRound(playerSelection, computerSelection){
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
        return "You won - reload to play again!"
    } else if (scoreArray[0] < scoreArray[1]){
        return "Computer won - reload to play again!"}
    
}

function generateText(result, playerChoice, computerChoice){
    if (result[0] === result [1]){
        return ['It is a draw!', `${playerChoice} ties with ${computerChoice}!`]
    } else if (result[0] > result[1]){
        return ['You win!', `${playerChoice} beats ${computerChoice}!`]
    } else {
        return ['You lose!', `${computerChoice} beats ${playerChoice}!`]
    }
}



let scoreArray = [0,0];
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => button.addEventListener('click', ()=> {

    let playerChoice = button.querySelector('.sign').textContent;
    let computerChoice = getComputerChoice();

    const playerChoiceDisplay = document.querySelector('#player-choice-display');
    const computerChoiceDisplay = document.querySelector('#computer-choice-display');

    playerChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;

    let result = playRound(playerChoice, computerChoice);
    const text = generateText(result, playerChoice, computerChoice);

    const winLoseMessage = document.querySelector('.instructions');
    const explanation = document.querySelector('.end-game-description');

    winLoseMessage.textContent = text[0];
    explanation.textContent = text[1];

    scoreArray = adaptScores(result, scoreArray);
    const playerScoreDisplay = document.querySelector('#player-score');
    playerScoreDisplay.textContent = `Player: ${scoreArray[0]}`;

    const computerScoreDisplay = document.querySelector('#computer-score');
    computerScoreDisplay.textContent = `Computer: ${scoreArray[1]}`;


    if (scoreArray[0] === 5 || scoreArray[1] === 5){
        winLoseMessage.textContent = chooseWinner(scoreArray);
        buttons.forEach((button) => button.disabled = true);
    }
    }
));
