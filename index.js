let player1Score = 0;
let player2Score = 0;

const rollDice = () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    player1Score++;
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    player2Score++;
  } else {
    document.querySelector("h1").textContent = "It's a Draw!";
  }

  updateScores();
};

const updateScores = () => {
  document.getElementById("player1-score").textContent = player1Score;
  document.getElementById("player2-score").textContent = player2Score;
};

const resetGame = () => {
  player1Score = 0;
  player2Score = 0;
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  document.querySelector("h1").textContent = "Dice Game: Roll the Dice!";
  updateScores();
};

document.getElementById("roll-dice").addEventListener("click", rollDice);
document.getElementById("reset-game").addEventListener("click", resetGame);
