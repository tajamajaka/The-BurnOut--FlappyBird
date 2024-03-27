let board = document.getElementById('board');

var timerIdPlayer;
//Argumentos Player (x, y, board)
let player = new Player(100, 375, board);

var timerIdMoverObstaculos;
let obstaculosArray = []
//Argumentos Obstaculo (x, y, width, height, board)
let obstaculo = new Obstaculo(650, 0, 50, 100, board, obstaculosArray)



function startGame (){
    player.insertPlayer();
    obstaculo.insertObstaculos();
}


window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "w":
            player.direction = -1
            player.move()
            break
    }
})


window.addEventListener("keyup", function(e) {
    switch(e.key){
        case "w":
            player.direction = 1
            timerIdPlayer = setInterval(player.move, 100)
            break
    }
})


startGame ()