//snake states:
//where is the apple?
//what cells is the snake taking up?
//which direction is the snake facing?
//where is the snake in relation to the apple? is the snake eating the apple?
//the snake grows longer after eating the apple
//if the snake touches itself, it's game over

//As a user playing the game I want to:	
// start the game by pressing a Start button
// use my arrow keys to change the direction of the snake
// have the snake grow correctly when it eats the apple
// have the game end if the snake tries to eat itself
// have the game end if the snake runs into a wall
// see how long my snake was when the game ended
// start the game over without having to reset the browser

//grid row start

const render = () => {

    const board = document.getElementById("board");

    const gameState = {
        snake: [],
        apple: Math.floor(Math.random() * board.length)
    }
    
    board.style.gridColumnStart = 0;
    board.style.gridRowStart = 0;
    board.style.gridColumnEnd = 50;
    board.style.gridRowEnd = 50;

    let snk = document.createElement("div");
    snk.classList.add("snk");
    board.appendChild(snk);

function makeSnake(){
    let snk = document.createElement("div");
    snk.classList.add("snk");
    board.appendChild(snk);
    makeSnake.addEventListener("keydown", function(snake){
    if (e.keyCode === 38){
        //up arrow

    } else if (e.keyCode === '40') {
        // down arrow
    }
    else if (e.keyCode === '37') {
       // left arrow
    }
    else if (e.keyCode === '39') {
       // right arrow
    }
    })
    for (i=0; i=gameState.snake.length; i++){
        snake.push (gameState.snake);
    }
    //keyup, keydown, positioning
    setTimeout(gameState.snake, 5000);
    // console.log(snake)
    // return snake
}

function applePowerup(){
    let appl = document.createElement("div");
    appl.classList.add("appl");
    board.appendChild(appl);
    board[gameState.apple].classList.toggle("appl");
    applePowerup.addEventListener("snake", function(){
        makeSnake()
    })
    // console.log(apple)
    // return apple
}

start.addEventListener("click", function(){
    makeSnake()
    applePowerup()
})

startover.addEventListener("click", function(){
    makeSnake()
    applePowerup()
})

}

render()

console.log("hi!")