let board = document.getElementById('board');
let marco = document.getElementsByClassName('marco');
console.log(marco)
//Argumentos Player (x, y, board)
let player = new Player(100, 375, board);
let obstaculosArray = []
let start = document.getElementById('start');
let buttonStart = document.getElementById('btn-start');
let restart = document.getElementById('restart');
let buttonEnd = document.getElementById('btn-restart');

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
        board.style.display = 'none'
        restart.style.display = 'block'
        
    
        
    }
}


function crearObstaculo (){
    //calcula altura random obstaculo SUP:
    /* altObstaculo contiene la altura del obstaculo superior
    para su cálculo se considera que el tamaño del canvas
    es de 800 píxeles, que la apertura es de 200 píxeles
    y que se desea reservar una altura mínima de 50 píxeles
    para el obstáculo inferior.
    Por ello, se elige un valor aleatorio entre 0 y 550
    píxeles.
    800 - 550 - 200 = 50 */
    var altObstaculo = (Math.floor(Math.random()* 550)) 

    
    // calcula altura obstaculo INF:
    //var altObstaculoEspejo =  800 - altObstaculo - 100 
    
    //Obstaculo (x, y, width, height, board)
    let obstaculo = new Obstaculo(650, 0, 50, altObstaculo, board, obstaculosArray)
    obstaculo.insertObstaculos()
    obstaculosArray.push(obstaculo)
    console.log(obstaculosArray)
}

buttonStart.addEventListener('click', function(e){
    start.style.display = 'none' // Así una vez hagas click en el botón start, este desaparece
    board.style.display = 'block' //Una vez hago click en el botón start aparece el juego. 
    restart.style.display = 'none'
})

buttonEnd.addEventListener('click', function(e){
    start.style.display = 'block' // Así una vez hagas click en el botón start, este desaparece
    board.style.display = 'none' //Una vez hago click en el botón start aparece el juego. 
    restart.style.display = 'none'
})

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