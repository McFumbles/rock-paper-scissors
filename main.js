let computerScore = 0
let playerScore = 0

computerPlay = () => {
  let choice = ['rock', 'paper', 'scissors']
  return choice[Math.floor(Math.random() * choice.length)];
}

playRound = (playerSelection, computerSelection) => {

  if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
          (playerSelection === "paper" && computerSelection === "rock")) {
            playerScore += 1
            if (playerScore == 5) {
              return "You won the game!";
            }
            return "You Win! " + playerSelection + " beats " + computerSelection;
          }

  else if (playerSelection == computerSelection) {
    return "It's a draw!";
  }

  else {
    computerScore += 1

    if (computerScore == 5) {
      return "Computer has won the game!";
    }
    return "You Lose!" + computerSelection + " beats " + playerSelection;

  }
}