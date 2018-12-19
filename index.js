import Board from './board'
import Platform from './platform'
import Cuphead from './cuphead'
import Bullet from './bullet'
import Carnation from './Carnation'



  


window.onload = () => {
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')

  let intervalo
  let frames = 0
  let keys = []
  let shoots = []
  var friction = 0.8;
  var gravity = 0.98;
  


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
        cuphead.y= platform.y-cuphead.height +20;
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
    checkKeys()

    cuphead.x += cuphead.velX;
    cuphead.y += cuphead.velY;
    cuphead.velX *= friction;
    cuphead.velY += gravity;
  }
  
  function stop(){
    clearInterval(intervalo)
    intervalo = 0
  }
  
  function startGame() {
    if(intervalo > 0) return
  
    intervalo = setInterval(function() {
      update()
    },1000/60)
  }

function checkKeys(){
  if(keys[38] || keys[32]){
    if(cuphead.grounded){
      cuphead.velY = -cuphead.jumpStrength*2;
      cuphead.jumping = true;
    }
	}

	if(keys[39]){
		if(cuphead.velX < cuphead.vel){
      if(cuphead.grounded){
        cuphead.changeStatus('RUN_R')
      }
			cuphead.velX++;
		}
	}

	if(keys[37]){
		if(cuphead.velX > -cuphead.vel){
      if(cuphead.grounded){
        cuphead.changeStatus('RUN_L')
      }
			cuphead.velX--;
		}
  }
  if(keys[69]){
    if(frames%5==0){
      return shoot(cuphead.x + cuphead.width - 30, cuphead.y + 50)
    }
  }
  }

  // addEventListener('keypress', e => {
  //   switch (e.keyCode) {
  //     case 97:
  //       cuphead.changeStatus('RUN_L')
  //       return cuphead.left()
  //     case 100:
  //       cuphead.changeStatus('RUN_R')
  //       return cuphead.right()
  //     case 119:
  //       cuphead.jumping = true
  //       cuphead.changeStatus('JUMP')
  //       return cuphead.jump()
  //     case 101 && 100:
  //       cuphead.changeStatus('RUN_R')
  //       shoot(cuphead.x + cuphead.width - 30, cuphead.y + 10)
  //       return cuphead.right()
  //     case 101:
  //       return shoot(cuphead.x + cuphead.width - 30, cuphead.y + 50)
  //     default:
  //       cuphead.changeStatus()
  //   }
  // })

  
 addEventListener("keydown", function(event){
    if(event.keyCode == 13){
      startGame();
    }else if(event.keyCode == 16){
      stop()
    }
    keys[event.keyCode] = true;
  });

  
 addEventListener("keyup", function(event){
    keys[event.keyCode] = false;
  });

  addEventListener('keyup', e => {
    switch (e.keyCode) {
      default:
        cuphead.jumping = false
    }
  })
}


