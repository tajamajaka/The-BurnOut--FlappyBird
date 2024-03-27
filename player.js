function Player (x, y, board) {
    let self = this
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction = 0
    this.speed = 10
    this.sprite = document.createElement('div')

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

}