function Obstaculo (x, y, width, height, board, obstaculosArray) {
    let self = this
    this.x = x //Ṕosición eje x
    this.y = y //Posiciónn eje Y
    this.width = width
    this.height = height 
    this.espacio = 200
    this.direction = -1
    this.speed = 10
    this.sprite
    this.tuboSuperior = document.createElement('div')
    this.tuboInferior = document.createElement('div')
    


    this.insertObstaculos = function () {

        // genera el div para el obstaculo SUP
        this.tuboSuperior.setAttribute('class', 'obstaculo')
        this.tuboSuperior.style.top = this.y + 'px'
        this.tuboSuperior.style.left = this.x + 'px'
        this.tuboSuperior.style.height = this.height + 'px'
        board.appendChild(this.tuboSuperior)

        // genera el div para el obstaculo INF
        //var altObstaculoEspejo =  800 - altObstaculo - this.height
        var altObstaculoEspejo =  800 - this.height
        self.tuboInferior.setAttribute('class', 'obstaculo');
        self.tuboInferior.style.top = (this.height + 200) + 'px';
        self.tuboInferior.style.left = this.x + 'px';
        self.tuboInferior.style.height = (altObstaculoEspejo - 200) + 'px';
        self.tuboInferior.style.backgroundColor = 'red';
        board.appendChild(self.tuboInferior);

        //guaradamos los Obstaculos en un array para poderlos eliminar posteriormente
        this.sprite = [self.tuboSuperior, self.tuboInferior];
    }

    this.moverObstaculos = function(){
        let newCoordX = self.x + self.speed * self.direction;
        self.checkCollision()
        if (newCoordX <= 700 && newCoordX >= -50){
            self.x = newCoordX
            self.tuboSuperior.style.left = self.x + 'px';
            self.tuboInferior.style.left = self.x + 'px';
        } 
        if (self.x <= 0){
            self.removeObstaculo()
        }
    }

    this.removeObstaculo = function(){
        obstaculosArray.shift()
        if (self.x <= -200){
        }
        clearInterval(this.timerIdMoverObstaculos)
        board.removeChild(this.tuboSuperior)
        board.removeChild(this.tuboInferior)
    }

    this.checkCollision = function(){
        //console.log(this.tuboInferior.style)
        if (self.x + self.width >= player.x && 
            self.x <= player.x + player.width && 
            self.y + self.height >= player.y && 
            self.y <= player.y + player.height){
            console.log("Auuccchhhhh")
            player.isDead = true
            clearInterval(timerIdMoverObstaculos)
            debugger
        }
    }


// Llama funcion moverObstaculos con frecuencia dada
  this.timerIdMoverObstaculos = setInterval(this.moverObstaculos, 100)
  //clearInterval(this.timerIdMoverObstaculos)


}