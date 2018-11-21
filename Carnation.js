import c1 from './Plant/Idle/Idle_01.png'
import c2 from './Plant/Idle/Idle_02.png'
import c3 from './Plant/Idle/Idle_03.png'
import c4 from './Plant/Idle/Idle_04.png'
import c5 from './Plant/Idle/Idle_05.png'
import c6 from './Plant/Idle/Idle_06.png'
import c7 from './Plant/Idle/Idle_07.png'
import c8 from './Plant/Idle/Idle_08.png'
import c9 from './Plant/Idle/Idle_09.png'
import c10 from './Plant/Idle/Idle_10.png'
import c11 from './Plant/Idle/Idle_11.png'
import c12 from './Plant/Idle/Idle_12.png'
import c13 from './Plant/Idle/Idle_13.png'
import c14 from './Plant/Idle/Idle_14.png'
import c15 from './Plant/Idle/Idle_15.png'
import c16 from './Plant/Idle/Idle_16.png'


class Carnation {
  constructor(ctx){
    this.x = 900
    this.y = 0
    this.width = 400
    this.height = 600
    this.health = 100
    this.img = new Image
    this.img.src = c1
    this.c1 = new Image
    this.c1.src = c1
    this.c2 = new Image
    this.c2.src = c2
    this.c3 = new Image
    this.c3.src = c3
    this.c4 = new Image
    this.c4.src = c4
    this.c5 = new Image
    this.c5.src = c5
    this.c6 = new Image
    this.c6.src = c6
    this.c7 = new Image
    this.c7.src = c7
    this.c8 = new Image
    this.c8.src = c8
    this.c9 = new Image
    this.c9.src = c9
    this.c10 = new Image
    this.c10.src = c10
    this.c11 = new Image
    this.c11.src = c11
    this.c12 = new Image
    this.c12.src = c12
    this.c13 = new Image
    this.c13.src = c13
    this.c14 = new Image
    this.c14.src = c14
    this.c15 = new Image
    this.c15.src = c15
    this.c16 = new Image
    this.c16.src = c16
    this.animateHelper = 1

    this.draw = frames => {
      if(frames % 6 === 0) this.animateHelper++
      if(this.animateHelper === 17) this.animateHelper = 1
      this.img =  this.animateHelper === 1 ? this.c1 :
                  this.animateHelper === 2 ? this.c2 :
                  this.animateHelper === 3 ? this.c3 :
                  this.animateHelper === 4 ? this.c4 :
                  this.animateHelper === 5 ? this.c5 :
                  this.animateHelper === 6 ? this.c6 :
                  this.animateHelper === 7 ? this.c7 :
                  this.animateHelper === 8 ? this.c8 :
                  this.animateHelper === 9 ? this.c9 :
                  this.animateHelper === 10 ? this.c10 :
                  this.animateHelper === 11 ? this.c11 :
                  this.animateHelper === 12 ? this.c12 :
                  this.animateHelper === 13 ? this.c13 :
                  this.animateHelper === 14 ? this.c14 :
                  this.animateHelper === 15 ? this.c15 : this.c16 
                
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)   
    }
  }
  
}

export default Carnation