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

    const gameState = {
        snake: snake,
        apple: [11, 8]
    }
    
    const board = document.getElementById("board");
    
    board.style.gridColumnStart = 0;
    board.style.gridRowStart = 0;
    board.style.gridColumnEnd = 50;
    board.style.gridRowEnd = 50;

function makeSnake(){
    let snk = document.createElement("div");
    snk.classList.add("snk");
    let snake = [];
    for (i=0; i=snake.length; i++){
        snake.push (snake);
    }
    setTimeout(snake, 5000);
    console.log(snake)
    return snake
}

function applePowerup(){
    let appl = document.createElement("div");
    appl.classList.add("appl");
    board.appendChild(appl);
    const apple = Math.floor(Math.random() * board.length);
    board[apple].classList.toggle("appl");
    applePowerup.addEventListener("snake", function(){
        makeSnake()
    })
    console.log(apple)
    return apple
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