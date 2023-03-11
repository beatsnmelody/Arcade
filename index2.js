let bodyContainer = document.body;
const snk = document.getElementsByClassName("se")[0];
const board = document.getElementById("board");
const boardSize = 32;
const appl = document.getElementById("apl");
let snkx = 16;
let snky = 16;
let scoreDisplay = document.getElementById("scoreDisplay");
let score = 0;
let directionX = 1;
let directionY = 0;
let appleX = 0;
let appleY = 0;
let difficulty = 300;
let gameOver = false;

bodyContainer.addEventListener('keydown', (e) => {

  switch (e.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      directionY = 1;
      directionX = 0;
  }

  switch (e.key) {
    case "Up":
    case "ArrowUp":
      directionY = -1;
      directionX = 0;
  }
  switch (e.key) {
    case "Left":
    case "ArrowLeft":
      directionX = -1;
      directionY = 0;
  }
  switch (e.key) {
    case "Right":
    case "ArrowRight":
      directionX = 1;
      directionY = 0;
  }
});

function applePowerupSpawn() {
  appleX = Math.floor(Math.random() * boardSize);
  appleY = Math.floor(Math.random() * boardSize);
  appl.style.gridRow = appleY;
  appl.style.gridColumn = appleX;
}

function reset () {
  snkx = 16;
  snky = 16;
  directionX = 0;
  directionY = 0;
  snk.style.gridRow = 16;
  snk.style.gridColumn = 16;
  applePowerupSpawn();
  btn.disabled = false;
  selector.disabled = false;
  gameOver = false;
  score = 0;
  scoreDisplay.innerText = `Your score is: ${score}`
}

function gameLoop() {
  if (gameOver) { 
    return;
  }
  snkx += directionX
  snky += directionY
  console.log(directionX, directionY)
  if (snky < 0 || snky > 32 || snkx < 0 || snkx > 32) {
    gameOver = true;
    alert(`You lose! You got to ${score}, great job!`);
    reset();
    return;
  }
  snk.style.gridRow = snky
  snk.style.gridColumn = snkx
  if (snkx === appleX && snky === appleY){
    score++;
    applePowerupSpawn();
  }
  scoreDisplay.innerText = `Your score is: ${score}`
}

const selector = document.getElementById("select");
selector.addEventListener("change", function (e) {
  difficulty = Number(e.target.value);
});

const btn = document.getElementById("start");
btn.addEventListener("click", function () {
  setInterval(gameLoop, difficulty);
  applePowerupSpawn();
  btn.disabled = true;
  selector.disabled = true;
});
