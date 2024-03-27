function Obstaculo (x, y, width, height, board, obstaculosArray) {
    let self = this
    this.x = x //Ṕosición eje x
    this.y = y //Posiciónn eje Y
    this.width = 50 //Ancho de los obstáculos}
    this.height = 100 // Asignar random de 0 a max board menos espacio paso player
    this.espacio = 200
    this.direction = 0
    this.speed = 10
    this.obstaculosArray = obstaculosArray
    this.spriteSup
    this.spriteInf


    this.insertObstaculos = function () {
        
        var altObstaculo = (Math.floor(Math.random()* 600)) + this.height //calcula altura random obstaculo SUP
        var altObstaculoEspejo =  800 - altObstaculo - this.height // calcula altura obstaculo INF
        
        // genera el div para el obstaculo SUP
        let tuboSuperior = document.createElement('div');
        tuboSuperior.setAttribute('class', 'obstaculo');
        tuboSuperior.style.top = this.y + 'px';
        tuboSuperior.style.left = this.x + 'px';
        tuboSuperior.style.height = altObstaculo + 'px';
        this.spriteSup = tuboSuperior;
        board.appendChild(this.spriteSup);
        
        // genera el div para el obstaculo INF
        let tuboInferior = document.createElement('div');
        tuboInferior.setAttribute('class', 'obstaculo');
        tuboInferior.style.top = (altObstaculo + this.height) + 'px';
        tuboInferior.style.left = this.x + 'px';
        tuboInferior.style.height = (altObstaculoEspejo) + 'px';
        this.spriteInf = tuboInferior;
        board.appendChild(this.spriteInf);

        //guaradamos los Obstaculos en un array para poderlos eliminar posteriormente
        this.sprite = [this.spriteSup, this.spriteInf];
        obstaculosArray.push(this.sprite)
        console.log(obstaculosArray)
    }


    this.moverObstaculos = function(){
        console.log(this.spriteInf)

        console.log(self.x + "!!" + self.y)
        let newCoordX = self.x + self.speed * self.direction;
        console.log(newCoordX)
/* 

       if (newCoordX <= 700 && newCoordX >= 0){
            tuboInferior.x = newCoordX
            tuboInferior.style.right = tuboInferior.x + "px"
            tuboSuperior.style.right = tuboSuperior.x + "px"
        }
        console.log(tuboInferior.x + "px")

 */

    }

//    this.timerIdMoverObstaculos = setInterval(this.moverObstaculos, 2000)
    

}