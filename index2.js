let bodyContainer = document.body;
const snk = document.getElementsByClassName("se")[0];
const board = document.getElementById("board");
const boardSize = 32;
const appl = document.getElementById("apl");
let snkx = 0;
let snky = 0;
let scoreDisplay = document.getElementById("scoreDisplay");
let score = 0;
let directionX = 0;
let directionY = 0;
let appleX = 0;
let appleY = 0;
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

function eatApple() {
  if (snk.classList.contains("apl")) {
    snk.classList.remove("apl");
    snk.classList.add("se");
    snk.push(1, 1)
    applePowerupSpawn();
    score++;
    clearInterval(interval);
  }
}

function gameLoop() {
  if (gameOver) { 
    return;
  }
  snkx += directionX
  snky += directionY
  if (snky < 0 || snky > 32 || snkx < 0 || snkx > 32) {
    alert("You lose!");
    gameOver = true;
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

applePowerupSpawn();

setInterval(gameLoop, 300);

// const btn = document.getElementById("start");
// btn.addEventListener("click", function () {
//   makeSnake();
//   applePowerup();
//   scoreDisplay.innerHtml = score;
// });

// const btn2 = document.getElementById("startover")
// btn2.addEventListener('click', () => {
//     makeSnake();
//     applePowerup();
// });
