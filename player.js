function Player (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 70
    this.height = 70
    this.direction = 0
    this.speed = 20
    this.sprite = document.createElement('div')
    this.isDead = false

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    this.move = function () {
        let newCoordY = self.y + self.speed * self.direction;

        if(newCoordY <= 750 && newCoordY >= 0){
            self.y = newCoordY;
            self.sprite.style.top = self.y + 'px';
        } 
        
        if (newCoordY >= 750){
            player.isDead = true
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
        song.play()

    }
}
}