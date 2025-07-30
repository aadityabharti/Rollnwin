let score1 = 0;
let score2 = 0;

function launchConfetti() {
  var duration = 3 * 1000; // 3 seconds
  var end = Date.now() + duration;

  (function frame() {
    // Launch confetti from left and right sides
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}


function checkWinner() {
  const status = document.getElementById("status");

  if (score1 >= 100 || score2 >= 100) {
    if (score1 >= 100 && score1 > score2) {
      status.textContent = "Player 1 WINS! 🏆🏅💙";
      status.style.color = "#1E3A8A"; // deep blue
       launchConfetti();
    } else if (score2 >= 100 && score2 > score1) {
      status.textContent = "Player 2 WINS! 🏆🏅❤️";
      status.style.color = "#DC2626"; // red
       launchConfetti();
    } else {
      status.textContent = "It's a Tie! 🤝";
      status.style.color = "#FFD700"; // gold
    }

    // Disable buttons after game ends
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = true;
    return;
  }

  // Ongoing game status
  if (score1 > score2) {
    status.textContent = "Player 1 is Winning! 🔥";
    status.style.color = "white";
  } else if (score2 > score1) {
    status.textContent = "Player 2 is Winning! 🔥";
    status.style.color = "white";
  } else {
    status.textContent = "It's a Tie! 🤝";
    status.style.color = "#FFD700"; // gold
  }
}

function rollPlayer1() {
  const num = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + num + ".png");
  score1 += num;
  document.getElementById("score1").textContent = score1;
  checkWinner();
}

function rollPlayer2() {
  const num = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + num + ".png");
  score2 += num;
  document.getElementById("score2").textContent = score2;
  checkWinner();
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  document.getElementById("status").textContent = "Click the dice to start!";
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  document.getElementById("roll1").disabled = false;
  document.getElementById("roll2").disabled = false;
}

document.getElementById("roll1").addEventListener("click", rollPlayer1);
document.getElementById("roll2").addEventListener("click", rollPlayer2);
document.getElementById("reset").addEventListener("click", resetGame);




