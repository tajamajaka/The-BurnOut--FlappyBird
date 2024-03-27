let board = document.getElementById('board');
let player = new Player(200, 400, board);
let obstaculo = new Obstaculo(100, 600, 50, 100, board)

var timerId;

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
            timerId = setInterval(player.move, 100)
            break
    }
})


startGame ()