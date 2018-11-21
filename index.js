import Board from './board'
import Platform from './platform'
import Cuphead from './cuphead'
import Bullet from './bullet'
import Carnation from './Carnation'

window.onload = () => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  let intervalo
  let frames = 0
  let shoots = []


  const board = new Board(ctx)
  const platform1 = new Platform(ctx, 1)
  const platform2 = new Platform(ctx, 2)
  const platform3 = new Platform(ctx, 3)
  const platforms = [platform1, platform2, platform3]
  const cuphead = new Cuphead(ctx)
  const carnation = new Carnation(ctx)

  function checkCollition (){
    platforms.forEach(platform => {
      if(cuphead.isTouching(platform)){
        cuphead.y=platform.y-cuphead.height;
        cuphead.setOriginalSize()
        cuphead.grounded = true
      }
    });
  }

  function drawShoots (){
    shoots.forEach(shoot => {
      shoot.draw()
    })
  }

  function shoot(x,y){
    const bullet = new Bullet(ctx, x, y)
    shoots.push(bullet)
  }

  function update() {
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    checkCollition()
    board.draw()
    platforms.forEach(platform => platform.draw(frames))
    cuphead.draw(frames)
    carnation.draw(frames)
    drawShoots()
  }
  
  function stop(){
    clearInterval(intervalo)
    intervalo = 0
  }
  
  function startGame() {
    console.log('start')
    if(intervalo > 0) return
  
    intervalo = setInterval(function() {
      update()
    },1000/60)
  }

  addEventListener('keypress', e => {
    switch (e.keyCode) {
      case 97:
        cuphead.changeStatus('RUN_L')
        return cuphead.left()
      case 100:
        cuphead.changeStatus('RUN_R')
        return cuphead.right()
      case 119:
        cuphead.jumping = true
        cuphead.changeStatus('JUMP')
        return cuphead.jump()
      case 101 && 100:
        cuphead.changeStatus('RUN_R')
        shoot(cuphead.x + cuphead.width - 30, cuphead.y + 10)
        return cuphead.right()
      case 101:
        return shoot(cuphead.x + cuphead.width - 30, cuphead.y + 50)
      default:
        cuphead.changeStatus()
    }
  })

  addEventListener('keydown', function (e) {
    switch(e.keyCode){
      case 13:
        return startGame()
      case 16:
        return stop()
      
      default:
      console.log('keydown', e.keyCode)
    }
  })

  addEventListener('keyup', e => {
    switch (e.keyCode) {
      default:
        cuphead.changeStatus()
        cuphead.jumping = false
    }
  })
}


