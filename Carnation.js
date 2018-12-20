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
import c17 from './Plant/Idle/Idle_17.png'
import c18 from './Plant/Idle/Idle_18.png'
import c19 from './Plant/Idle/Idle_19.png'
import c20 from './Plant/Idle/Idle_20.png'
import c21 from './Plant/Idle/Idle_21.png'
import c22 from './Plant/Idle/Idle_22.png'
import c23 from './Plant/Idle/Idle_23.png'
import c24 from './Plant/Idle/Idle_24.png'
import a1 from './Plant/Firing Seeds/FS_01.png'
import a2 from './Plant/Firing Seeds/FS_02.png'
import a3 from './Plant/Firing Seeds/FS_03.png'
import a4 from './Plant/Firing Seeds/FS_04.png'
import a5 from './Plant/Firing Seeds/FS_05.png'
import a6 from './Plant/Firing Seeds/FS_06.png'
import a7 from './Plant/Firing Seeds/FS_07.png'
import a8 from './Plant/Firing Seeds/FS_08.png'
import a9 from './Plant/Firing Seeds/FS_09.png'
import a10 from './Plant/Firing Seeds/FS_10.png'
import a11 from './Plant/Firing Seeds/FS_11.png'
import a12 from './Plant/Firing Seeds/FS_12.png'
import a13 from './Plant/Firing Seeds/FS_13.png'
import a14 from './Plant/Firing Seeds/FS_14.png'
import a15 from './Plant/Firing Seeds/FS_15.png'
import a16 from './Plant/Firing Seeds/FS_16.png'
import a17 from './Plant/Firing Seeds/FS_17.png'
import a18 from './Plant/Firing Seeds/FS_18.png'
import a19 from './Plant/Firing Seeds/FS_19.png'
import a20 from './Plant/Firing Seeds/FS_20.png'
import a21 from './Plant/Firing Seeds/FS_21.png'
import a22 from './Plant/Firing Seeds/FS_22.png'

class Carnation {
  constructor(ctx){
    this.x = 900
    this.y = 0
    this.width = 400
    this.height = 600
    this.health = 400
    this.status = 'N'
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
    this.c17 = new Image
    this.c17.src = c17
    this.c18 = new Image
    this.c18.src = c18
    this.c19 = new Image
    this.c19.src = c19
    this.c20 = new Image
    this.c20.src = c20
    this.c21 = new Image
    this.c21.src = c21
    this.c22 = new Image
    this.c22.src = c22
    this.c23 = new Image
    this.c23.src = c23
    this.c24 = new Image
    this.c24.src = c24
    //attack
    this.a1 = new Image
    this.a1.src = a1
    this.a2 = new Image
    this.a2.src = a2
    this.a3 = new Image
    this.a3.src = a3
    this.a4 = new Image
    this.a4.src = a4
    this.a5 = new Image
    this.a5.src = a5
    this.a6 = new Image
    this.a6.src = a6
    this.a7 = new Image
    this.a7.src = a7
    this.a8 = new Image
    this.a8.src = a8
    this.a9 = new Image
    this.a9.src = a9
    this.a10 = new Image
    this.a10.src = a10
    this.a11 = new Image
    this.a11.src = a11
    this.a12 = new Image
    this.a12.src = a12
    this.a13 = new Image
    this.a13.src = a13
    this.a14 = new Image
    this.a14.src = a14
    this.a15 = new Image
    this.a15.src = a15
    this.a16 = new Image
    this.a16.src = a16
    this.a17 = new Image
    this.a17.src = a17
    this.a18 = new Image
    this.a18.src = a18
    this.a19 = new Image
    this.a19.src = a19
    this.a20 = new Image
    this.a20.src = a20
    this.a21 = new Image
    this.a21.src = a21
    this.a22 = new Image
    this.a22.src = a22
    
    this.animateHelper = 1

    this.draw = frames => {
      
      if(frames % 8 === 0) this.animateHelper++
      if(this.status === 'A'){
        if(this.animateHelper === 23) this.animateHelper = 1
          this.img =  this.animateHelper === 1 ? this.a1 :
                      this.animateHelper === 2 ? this.a2 :
                      this.animateHelper === 3 ? this.a3 :
                      this.animateHelper === 4 ? this.a4 :
                      this.animateHelper === 5 ? this.a5 :
                      this.animateHelper === 6 ? this.a6 :
                      this.animateHelper === 7 ? this.a7 :
                      this.animateHelper === 8 ? this.a8 :
                      this.animateHelper === 9 ? this.a9 :
                      this.animateHelper === 10 ? this.a10 :
                      this.animateHelper === 11 ? this.a11 :
                      this.animateHelper === 12 ? this.a12 :
                      this.animateHelper === 13 ? this.a13 :
                      this.animateHelper === 14 ? this.a14 :
                      this.animateHelper === 15 ? this.a15 :
                      this.animateHelper === 16 ? this.a16 :
                      this.animateHelper === 17 ? this.a17 :
                      this.animateHelper === 18 ? this.a18 :
                      this.animateHelper === 19 ? this.a19 :
                      this.animateHelper === 20 ? this.a20 :
                      this.animateHelper === 21 ? this.a21 : this.a22
                      
      }
      else if(this.status === 'N'){
        if(this.animateHelper === 21) this.animateHelper = 1
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
                      this.animateHelper === 15 ? this.c15 :
                      this.animateHelper === 16 ? this.c16 :
                      this.animateHelper === 17 ? this.c17 :
                      this.animateHelper === 18 ? this.c18 :
                      this.animateHelper === 19 ? this.c19 : this.c20                      

      }
      ctx.fillStyle = "#DC143C";
      ctx.fillRect(0,0,this.health*3, 5)
      ctx.font = "20px Georgia";
      ctx.fillText("Cagney Carnation", 0, 30);
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)   
    }
    this.damage = () => {
      this.health--
    }
    this.changeStatus = (status = 'N') => {
      this.status = status
    }
    this.isTouching = bullet => {
      return (this.x < bullet.x + bullet.width)&&
             (this.x + this.width - 25 > bullet.x + 30)&&
             (this.y < bullet.y + bullet.height )&&
             (this.y + this.height + 20 > bullet.y + 20 )
      }
  }
  
}

export default Carnation