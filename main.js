let board = document.getElementById('board');
let player = new Player(200, 400, board)

function startGame (){
    player.insertPlayer();
}


startGame ()