let bodyContainer = document.body;
const snk = document.getElementById("se");
const board = document.getElementById("board");
const appl = document.getElementById("apl")
const start = document.getElementById("start");
const startover = document.getElementById("startover");

const gameState = {
  snake: [],
  apple: Math.floor(Math.random() * board.length)
}

window.addEventListener('load', (e) => {
  snk.style.left = 0;
  snk.style.top = 0;
})

let startNumber = 8;



function makeBoard() {
  for (let i = 0; i <= 8; i++) {
    let createBoard = document.createElement("div")
    createBoard.classList.add("cell")
    board.appendChild(createBoard)
    //console.log("createBoard")

  }
}

makeBoard();

function makeSnake() {

bodyContainer.addEventListener('keydown', (e) => {

  switch (e.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      console.log(parseInt(snk.style.top))
      if (parseInt(snk.style.top) < 256) {
        snk.style.top = parseInt(snk.style.top) + 8 + 'px';
      } else {
        console.log('you hit the edge')
      }

      break;
    }
    
  switch (e.key) {
    case "Up":
    case "ArrowUp":
      console.log(parseInt(snk.style.top))
      if (parseInt(snk.style.top) < 256) {
        snk.style.top = parseInt(snk.style.top) + -8 + 'px';
      } else {
        console.log('you hit the edge')
      }
      break;
    }
    switch (e.key) {
      case "Left":
      case "ArrowLeft":
      console.log(parseInt(snk.style.left))
      if (parseInt(snk.style.left) < 256) {
        snk.style.left = parseInt(snk.style.left) + -8 + 'px';
      } else {
        console.log('you hit the edge')
      }
      break;
    }
    switch (e.key) {
      case "Right":
      case "ArrowRight":
      console.log(parseInt(snk.style.left))
      if (parseInt(snk.style.left) < 256) {
        snk.style.left = parseInt(snk.style.left) + 8 + 'px';
      } else {
        console.log('you hit the edge')
      }
      break;
  }
});
}

function applePowerup() {
  board.appendChild(appl);
  Math.floor(Math.random() * board.length)
}

function startGame(){
  start.addEventListener('click', () => {
    console.log("here")
    makeSnake();
    applePowerup();
  })
}

function startOver(){
  startover.addEventListener('click', () => {
    makeSnake();
    applePowerup();
  })
}
