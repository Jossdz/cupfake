class Bullet {
  constructor(ctx, x, y){
    this.x          = x
    this.y          = y
    this.width      = 12
    this.height     = 12

    this.draw = () => {
      this.x+=10
      ctx.fillRect( this.x + 30, this.y + 5, this.width, this.height)   
    }
  }
}

export default Bullet