document.addEventListener("DOMContentLoaded", function() {
    //Gets all the divs inside the game board
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    const defaultStatus = status.textContent;

    let gameState = ["","","","","","","","","",];
    let currentPlayer = "X";

    //Ways to win rows, columns, diagonals
    const winningCombos = [
        [0,1,2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]    
    ];

    //Adds the "square" class to each one
    squares.forEach(function (square, index){
        square.classList.add("square");

        //Exercise 2: place X or O click
        square.addEventListener("click", function() {
            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if(checkWinner()) {
                status.textContent = "Congratulations! " + currentPlayer + " is the Winner!";
                status.classList.add("you-won");
                return;
            }

            //switch turns
            currentPlayer = currentPlayer == "X" ? "O" : "X";

        });

        //Exercise 3: the hover effect
        square.addEventListener("mouseover", function (){
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function (){
            square.classList.remove("hover");
        });
    });

    //Exercise 5 new game resets the game
    newGameBtn.addEventListener("click", function () {
        gameState = ["", "", "", "", "", "", "", "", "",];
        currentPlayer = "X";

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O");
        });

        status.textContent = defaultStatus;
        status.classList.remove("you-won");
    })

    function checkWinner() {
        return winningCombos.some(function (combo) {
            const a = combo[0], b = combo[1], c = combo[2];
            return gameState[a] !== "" &&
                   gameState[a] === gameState[b] &&
                   gameState[a] === gameState[c];
        });
    }
});