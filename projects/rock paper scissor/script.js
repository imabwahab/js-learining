
const buttons = document.querySelectorAll('.buttons button');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const winnerEl = document.getElementById('winner');
const scoreEl = document.getElementById('score');

const choices = ['rock', 'paper', 'scissors'];
const score = JSON.parse(localStorage.getItem('score')) || {
  yours: 0,
  computer: 0,
  ties: 0
};


function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, computer) {
  if (player === computer) {
    score.ties++;
    return "It's a draw!";
  }
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    score.yours++;
    return "You win!";
  }
  score.computer++;
  return "Computer wins!";
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    scoreEl.innerText = `You won : ${score.yours || 0} - Computer won : ${score.computer || 0} - Ties : ${score.ties || 0}`
    playerChoiceEl.innerText = `Your Choice: ${playerChoice}`;
    computerChoiceEl.innerText = `Computer Choice: ${computerChoice}`;
    winnerEl.innerText = `Winner: ${winner}`;

    localStorage.setItem('score', JSON.stringify(score));

  });
});
