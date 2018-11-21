import c1 from './Cuphead/Aim/Straight/cuphead_aim_straight_0001.png'
import c2 from './Cuphead/Aim/Straight/cuphead_aim_straight_0002.png'
import c3 from './Cuphead/Aim/Straight/cuphead_aim_straight_0003.png'
import c4 from './Cuphead/Aim/Straight/cuphead_aim_straight_0004.png'
import c5 from './Cuphead/Aim/Straight/cuphead_aim_straight_0005.png'

import r1 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0001.png'
import r2 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0002.png'
import r3 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0003.png'
import r4 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0004.png'
import r5 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0005.png'
import r6 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0006.png'

import rl1 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_l0001.png'
import rl2 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_l0002.png'
import rl3 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_l0003.png'
import rl4 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_l0004.png'
import rl5 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_l0005.png'
import rl6 from './Cuphead/Run/Shooting/Straight/cuphead_run_shoot_l0006.png'

import j1 from './Cuphead/Jump/Cuphead/cuphead_jump_0001.png'
import j2 from './Cuphead/Jump/Cuphead/cuphead_jump_0002.png'
import j3 from './Cuphead/Jump/Cuphead/cuphead_jump_0003.png'
import j4 from './Cuphead/Jump/Cuphead/cuphead_jump_0004.png'
import j5 from './Cuphead/Jump/Cuphead/cuphead_jump_0005.png'
import j6 from './Cuphead/Jump/Cuphead/cuphead_jump_0006.png'


class Cuphead {
  constructor(ctx){
    this.x = 10
    this.y = 400
    this.speed = 5
    this.speedY = 1
    this.speedX= 1
    this.friction  = 0.98
    this.width = 120
    this.height = 150
    this.status = 'STRAIGHT'
    this.animateHelper = 1
    this.jumping = false
    this.jumpStrength=7
    this.grounded =  true
    // Imagenes
    this.img = new Image
    this.img.src = c1
    this.img1 = new Image()
    this.img1.src = c1
    this.img2 = new Image()
    this.img2.src = c2
    this.img3 = new Image()
    this.img3.src = c3
    this.img4 = new Image()
    this.img4.src = c4
    this.img5 = new Image()
    this.img5.src = c5
    this.run1 = new Image()
    this.run1.src = r1
    this.run2 = new Image()
    this.run2.src = r2
    this.run3 = new Image()
    this.run3.src = r3
    this.run4 = new Image()
    this.run4.src = r4
    this.run5 = new Image()
    this.run5.src = r5
    this.run6 = new Image()
    this.run6.src = r6
    this.runl1 = new Image()
    this.runl1.src = rl1
    this.runl2 = new Image()
    this.runl2.src = rl2
    this.runl3 = new Image()
    this.runl3.src = rl3
    this.runl4 = new Image()
    this.runl4.src = rl4
    this.runl5 = new Image()
    this.runl5.src = rl5
    this.runl6 = new Image()
    this.runl6.src = rl6
    this.j1 = new Image()
    this.j1.src = j1
    this.j2 = new Image()
    this.j2.src = j2
    this.j3 = new Image()
    this.j3.src = j3
    this.j4 = new Image()
    this.j4.src = j4
    this.j5 = new Image()
    this.j5.src = j5
    this.j6 = new Image()
    this.j6.src = j6
    
    
    this.draw = frames => {
      if(frames % 6 === 0){
        if(this.animateHelper >= 5){
          this.animateHelper = 0
        }else{
          this.animateHelper++
        }
      }
      if (this.status === 'STRAIGHT'){
        this.img =  this.animateHelper === 1 ?  this.img1 :
                    this.animateHelper === 2 ?  this.img2 :
                    this.animateHelper === 3 ?  this.img3 :
                    this.animateHelper === 4 ?  this.img4 : 
                                                this.img5
      }
      else if (this.status === 'RUN_L'){
        this.img =  this.animateHelper === 1 ?  this.runl1 :
                    this.animateHelper === 2 ?  this.runl2 :
                    this.animateHelper === 3 ?  this.runl3 :
                    this.animateHelper === 4 ?  this.runl4 : 
                                                this.runl5
      }
      else if (this.status === 'RUN_R'){
        this.img =  this.animateHelper === 1 ?  this.run1 :
                    this.animateHelper === 2 ?  this.run2 :
                    this.animateHelper === 3 ?  this.run3 :
                    this.animateHelper === 4 ?  this.run4 : 
                                                this.run5
      }
      else if (this.status === 'JUMP'){
        this.img =  this.animateHelper === 1 ?  this.j1 :
                    this.animateHelper === 2 ?  this.j2 :
                    this.animateHelper === 3 ?  this.j3 :
                    this.animateHelper === 4 ?  this.j4 : 
                                                this.j5
      }
      if(this.jumping){
        this.y -=40
      }
      else if( this.y < 400 ) {
        this.y += 8
        this.grounded = true
      } else {
        this.setOriginalSize()
      }
      this.speedY *= this.friction
      this.y += this.speedY
      this.speedX *= this.friction
      this.x +=  this.speedX
      if(this.y < 0) this.y = 0
      if (!this.grounded) this.changeStatus('JUMP')
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }    
    this.left = () => {
      if (this.speedX > - this.speed){
        this.speedX--
      }
    }
    this.right = () => {
      if (this.speedX < this.speed){
        this.speedX++
      }
    }
    this.jump = () => {
      if (this.speedY > this.speed) {
        this.speedY--
      }
        this.width = 90
        this.height = 120      
    }
    this.setOriginalSize = () => {
      this.width = 120
      this.height = 150
    }
    this.changeStatus = (status = 'STRAIGHT') => {
      this.status = status
    }
    this.isTouching = function(platform){
      return (this.x < platform.x + platform.width)&&
             (this.x + this.width - 25 > platform.x + 30)&&
             (this.y < platform.y + platform.height )&&
             (this.y + this.height + 20 > platform.y + 20 )
      }
  }

}
export default Cuphead