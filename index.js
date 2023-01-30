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

let snk = document.createElement("div");


const render = () => {

    const board = document.getElementById("board");
    const start = document.getElementById("start");
    const startover = document.getElementById("startover");
    let snk = document.createElement("div");

    const gameState = {
        snake: [],
        apple: Math.floor(Math.random() * board.length)
    }

    board.style.gridColumnStart = 0;
    board.style.gridRowStart = 0;
    board.style.gridColumnEnd = 50;
    board.style.gridRowEnd = 50;

    // let snk = document.createElement("div");
    // snk.classList.add("snk");
    // board.appendChild(snk);
    // setTimeout(gameState.snake, 5000);

    // let appl = document.createElement("div");
    // appl.classList.add("appl");
    // board.appendChild(appl);

    function makeSnake() {
        snk.classList.add("snk");
        board.appendChild(snk);
        for (i = 0; i = gameState.snake.length; i++) {
            snk.push(gameState.snake);
        }
        // keyup, keydown, positioning
        // console.log(snake)
        // return snake
    }

    // function applePowerup() {
    //     let appl = document.createElement("div");
    //     appl.classList.add("appl");
    //     board.appendChild(appl);
    //     // board[gameState.apple].classList.toggle("appl");
    //     appl.addEventListener("snake", function () {
    //         makeSnake()
    //     })
    //     // console.log(apple)
    //     // return apple
    // }

    start.addEventListener("click", function () {
        makeSnake()
        // applePowerup()
    })

    startover.addEventListener("click", function () {
        gameState();
    })

}

document.body.addEventListener("keyup", (event) => {
    snk.style.left = 0
    snk.style
    console.log (event.key)
    switch (event.key) {
        case 'ArrowLeft':
            snk.style.left = parseInt(snk.style.left) - 8 + 'px';
            break;
        case 'ArrowRight':
            snk.style.left = parseInt(snk.style.left) + 8 + 'px';
            break;
        case 'ArrowUp':
            snk.style.top = parseInt(snk.style.top) - 8 + 'px';
            break;
        case 'ArrowDown':
            snk.style.top = parseInt(snk.style.top) + 8 + 'px';
            break;
    }
});



setInterval(() => {
    render()
}, 1000)