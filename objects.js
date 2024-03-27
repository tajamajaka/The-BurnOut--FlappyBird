function Obstaculo (x, y, width, height, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 100
    this.direction = 0
    this.speed = 10


    let tuboSuperior = document.createElement('div');
    let tuboInferior = document.createElement('div');

    this.insertObstaculos = function () {
        tuboSuperior.setAttribute('class', 'obstaculo');
        tuboSuperior.style.top = this.y + 'px';
        tuboSuperior.style.left = this.x + 'px';
        tuboSuperior.style.height = this.height + 'px';
        this.spriteSup = tuboSuperior;
        board.appendChild(this.spriteSup);

        tuboInferior.setAttribute('class', 'obstaculo');
        tuboInferior.style.top = (this.height + 100) + 'px';
        tuboInferior.style.left = this.x + 'px';
        tuboInferior.style.height = height + 'px';
        this.spriteInf = tuboInferior;
        board.appendChild(this.spriteInf);

        this.sprite = [this.spriteSup, this.spriteInf];
    }

}