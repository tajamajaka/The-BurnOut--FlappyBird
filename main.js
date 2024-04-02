let board = document.getElementById('board');
let marco = document.getElementsByClassName('marco');
let song = document.getElementById("endgame")
let score = 0
let flap = document.getElementById("flap")
let deadChicken = document.getElementById("deadChicken");
//Argumentos Player (x, y, board)
let player = new Player(100, 375, board);
let obstaculosArray = []

let start = document.getElementById('start');
let buttonStart = document.getElementById('btn-start');
let restart = document.getElementById('restart');
restart.style.display = 'none'
let restartBackground = document.getElementById("restart-background")
let buttonEnd = document.getElementById('btn-restart');

let timerIdPlayer;
let timerIdCrearObstaculo;
let timerIdMoverObstaculos;
let timerIdCrearObstaculos2;


/*document.addEventListener('DOMContentLoaded', function() {
    let music = document.getElementById("music");
    music.play();
    
  });*/

function startGame (){
    player.insertPlayer();
    timerIdPlayer = setInterval(playerMove, 100)
    timerIdCrearObstaculos2 = setInterval(crearObstaculo, 4000)
    music.play();
    
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
      
        //alert("Game Over")
        board.style.display = 'block'
        restart.style.display = 'block'
        restartBackground.style.display = 'block'
        
        song.play()
    }
}


function crearObstaculo (){
    //calcula altura random obstaculo SUP:
    var altObstaculo = (Math.floor(Math.random()* 450)+50) 
    
    // calcula altura obstaculo INF:
    //var altObstaculoEspejo =  800 - altObstaculo - 100 
    
    //Obstaculo (x, y, width, height, board)
    let obstaculo = new Obstaculo(540, 45, 150, altObstaculo, board, obstaculosArray)
    obstaculo.insertObstaculos()
    obstaculosArray.push(obstaculo)
}

buttonStart.addEventListener('click', function(e){
    start.style.display = 'none' // Así una vez hagas click en el botón start, este desaparece
    board.style.display = 'block' //Una vez hago click en el botón start aparece el juego. 
    startGame ()
})

buttonEnd.addEventListener('click', function(e){
    start.style.display = 'block' // Así una vez hagas click en el botón start, este desaparece
    board.style.display = 'none' //Una vez hago click en el botón start aparece el juego. 
    restart.style.display = 'none'
    /* 
    obstaculosArray.splice(0, obstaculosArray.length) // borra todo el array de obstaculos
    while (board.hasChildNodes()) // borra todos los hijos de board (todos los DIVs debajo de)
    board.removeChild(board.firstChild) 

    está solucionado con un reload, aunque no es lo que debería ser
    creo que debe haber otra solución que ataque las variables....

*/
    window.location.reload();
})

window.addEventListener("keydown", function(e) {
    switch(e.key){
        case "w":
            flap.play()
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



