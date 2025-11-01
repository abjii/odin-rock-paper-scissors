const playArray = ["rock", "paper", "scissors"];

const buttonList = document.querySelectorAll("button");
const computerselection = document.querySelector("#computer-selection");
const playerselection = document.querySelector("#player-selection");
const result = document.querySelector("#result");

let computerScore = 0;
let playerScore = 0;

function computerPlay(playArray) {
  return playArray[Math.floor(Math.random() * playArray.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (computerSelection == playerSelection) {
    playerScore++;
    computerScore++;
    return "Tie Play!";
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    playerScore++;
    return "You Win! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection);
  } else {
    computerScore++;
    return "You Lose! " + capitalize(playerSelection) + " loses against " + capitalize(computerSelection);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

buttonList.forEach(function (button) {
  button.addEventListener("click", clickHandler);
});

function clickHandler(event) {
  playerSelection = event.currentTarget.innerHTML;
  computerSelection = computerPlay(playArray);

  computerselection.innerHTML = "Computer's Selection ----------------- : " + computerSelection;
  playerselection.innerHTML = "Player's   Selection ----------------- : " + playerSelection;
  result.innerHTML = "Result ----------------- : " + playRound(playerSelection, computerSelection);
  result.innerHTML += "<br><br> Player -- " + playerScore + " || " + computerScore + " -- Computer";
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) eog_msg = "Player wins the game";
    else eog_msg = "Computer wins the game";
    setTimeout(() => {
      alert("end of game : " + eog_msg);
    }, 500);
  }
}
