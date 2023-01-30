let bodyContainer = document.body;
const snk = document.getElementById("se");
const board = document.getElementById("board");

window.addEventListener('load', (e) => {
    snk.style.left = 0;
    snk.style.top = 0;
})

let startNumber = 100;



function makeBoard(){
    for(let i = 0; i <= 15; i++){
        let createBoard = document.createElement("div")
        createBoard.classList.add("cell")
        board.appendChild(createBoard)
         //console.log("createBoard")

    }
  }   
 
  makeBoard()

bodyContainer.addEventListener('keydown', (e) => {

  switch (e.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
        console.log(parseInt(snk.style.top))
        if(parseInt(snk.style.top) < 400){
            snk.style.top = parseInt(snk.style.top) + startNumber + 'px';
        } else {
            console.log('you hit the edge')
        }
        
      break;
      case "ArrowUp":
        snk.style.top = parseInt(snk.style.top) - startNumber + 'px';
      break;
    }
});
