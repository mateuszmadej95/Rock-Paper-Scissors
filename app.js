const final = document.querySelector(".final");
const player1 = document.querySelector(".player1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const images = [
  '<i class="fa fa-hand-rock-o fa-4x"></i>',
  '<i class="fas fa-toilet-paper fa-4x"></i>',
  '<i class="fa fa-scissors fa-4x"></i>'
];

let player1Res = document.querySelector(".player1-result");
let player2Res = document.querySelector(".player2-result");
let random;
let result1 = 0;
let result2 = 0;
let winningNum = 10;

// Add event listeners to btns
const btns = document.querySelectorAll("button");
btns.forEach(btn => {
  btn.addEventListener("click", tossCoin);
});

// display final message
function displayFinal() {
  if (result1 === winningNum) {
    final.textContent = "You win!";
    final.classList.add("win");
    btns.forEach(btn => (btn.disabled = true));
  } else if (result2 === winningNum) {
    final.textContent = "You lose!";
    final.classList.add("lose");
    btns.forEach(btn => (btn.disabled = true));
  }
}

function tossCoin(e) {
  let name = e.target.classList.value;
  let chosen = images.find(el => {
    return el.includes(name);
  });
  img1.innerHTML = chosen;
  random = Math.floor(Math.random() * images.length);
  img2.innerHTML = images[random];

  // variables names
  const playerRock = chosen.includes("rock");
  const playerPaper = chosen.includes("paper");
  const playerScissors = chosen.includes("scissors");
  const compRock = images[random].includes("rock");
  const compPaper = images[random].includes("paper");
  const compScissors = images[random].includes("scissors");

  //   Add points
  if (
    (playerRock && compScissors) ||
    (playerScissors && compPaper) ||
    (playerPaper && compRock)
  ) {
    result1++;
    player1Res.textContent = result1;
    final.textContent = "Score!";
  } else if (
    (playerRock && compPaper) ||
    (playerPaper && compScissors) ||
    (playerScissors && compRock)
  ) {
    result2++;
    player2Res.textContent = result2;
    final.textContent = "Point lost!";
  } else if (chosen === images[random]) {
    final.textContent = "Draw!";
  }

  //   Display final and disable btns
  displayFinal();
}
