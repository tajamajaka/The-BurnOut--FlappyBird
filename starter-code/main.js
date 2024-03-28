let board = document.getElementById('board');
//Argumentos Player (x, y, board)
let player = new Player(100, 375, board);
let obstaculosArray = []

let timerIdPlayer;
let timerIdCrearObstaculo;
let timerIdMoverObstaculos;


function startGame (){
    player.insertPlayer();
    setInterval(crearObstaculo, 2000)
}

function crearObstaculo (){
    //calcula altura random obstaculo SUP:
    var altObstaculo = (Math.floor(Math.random()* 600)) + 100
    
    // calcula altura obstaculo INF:
    var altObstaculoEspejo =  800 - altObstaculo - 100 
    
    //Obstaculo (x, y, width, height, board)
    let obstaculo = new Obstaculo(650, 0, 50, altObstaculo, board, obstaculosArray)
    obstaculo.insertObstaculos()
    obstaculosArray.push(obstaculo)
    console.log(obstaculosArray)
}

function limpiarTimers(){
    clearInterval(timerIdPlayer)
    clearInterval(timerIdCrearObstaculo)
    clearInterval(timerIdMoverObstaculos)
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