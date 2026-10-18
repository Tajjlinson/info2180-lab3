document.addEventListener("DOMContentLoaded", function() {
    //Gets all the divs inside the game board
    const squares = document.querySelectorAll("#board div");

    //Adds the "square" class to each one
    squares.forEach(function (square){
        square.classList.add("square");
    });
});