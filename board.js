class Board{
  constructor(ctx){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.score = 0
    this.img = new Image()
    this.img.src = 'https://i.postimg.cc/zf9kwfZn/Selected.png'
    this.img.onload = () => {
      this.draw();
    }
    this.draw = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.img, this.x + this.width, this.y, this.width, this.height);
    }
  }
}

export default Board