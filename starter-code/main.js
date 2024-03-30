let board = document.getElementById('board');
let marco = document.getElementsByClassName('marco');
console.log(marco)
//Argumentos Player (x, y, board)
let player = new Player(100, 375, board);
let obstaculosArray = []

let timerIdPlayer;
let timerIdCrearObstaculo;
let timerIdMoverObstaculos;


function startGame (){
    player.insertPlayer();
    timerIdPlayer = setInterval(playerMove, 100)
    timerIdCrearObstaculos2 = setInterval(crearObstaculo, 2000)
}

function playerMove(){
    if (player.isDead === false){
        player.move()
    }
    else{
        clearInterval(timerIdPlayer)
        clearInterval(timerIdMoverObstaculos)
        clearInterval(timerIdCrearObstaculo)
        clearInterval(timerIdCrearObstaculos2)
        obstaculosArray.forEach(function(obstaculo){
            clearInterval(obstaculo.timerIdMoverObstaculo)
            clearInterval(obstaculo.timerIdMoverObstaculos)
        })
        alert("Game Over")
        board.style.display = 'none';
        marco[0].style.display = 'none';
        marco[1].style.display = 'none';
        endGame.style.display = 'block';
    }
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


window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "w":
            player.direction = -1
            break
    }
})


window.addEventListener("keyup", function(e) {
    switch(e.key){
        case "w":
            player.direction = 1
            break
    }
})


startGame ()