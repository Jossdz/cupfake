
import platformImg from './Plant/Platform/Platform_A_01.png'
import propellor1 from './Plant/Platform/Platform_Propellor_01.png'
import propellor2 from './Plant/Platform/Platform_Propellor_03.png'
import propellor3 from './Plant/Platform/Platform_Propellor_04.png'
import propellor4 from './Plant/Platform/Platform_Propellor_05.png'
import propellor5 from './Plant/Platform/Platform_Propellor_06.png'
import propellor6 from './Plant/Platform/Platform_Propellor_07.png'
import propellor7 from './Plant/Platform/Platform_Propellor_08.png'
import propellor8 from './Plant/Platform/Platform_Propellor_09.png'
import shadow from './Plant/Platform/Platform_Shd_01.png'


class Platforms{
  constructor(ctx, num){
    this.x =  num === 1 ? 120 :
              num === 2 ? 430 :
              num === 3 ? 730 : null
    this.y = 320
    this.width = 150
    this.height = 80
    this.img = new Image()
    this.img.src = platformImg
    this.propellorCount = 1
    this.propellor = new Image()
    this.p1 = new Image()
    this.p1.src = propellor1
    this.p2 = new Image()
    this.p2.src = propellor2
    this.p3 = new Image()
    this.p3.src = propellor3
    this.p4 = new Image()
    this.p4.src = propellor4
    this.p5 = new Image()
    this.p5.src = propellor5
    this.p6 = new Image()
    this.p6.src = propellor6
    this.p7 = new Image()
    this.p7.src = propellor7
    this.p8 = new Image()
    this.p8.src = propellor8
    this.p9 = new Image()
    this.p9.src = propellor1
    this.shadow = new Image()
    this.shadow.src = shadow

    this.draw = frames => {
      if(frames % 6 === 0){
        if(this.propellorCount >= 9){
          this.propellorCount = 0
        }else{
          this.propellorCount++
        }
      }
      this.propellor =  this.propellorCount === 1 ? this.p1 :
                        this.propellorCount === 2 ? this.p2 :
                        this.propellorCount === 3 ? this.p3 :
                        this.propellorCount === 4 ? this.p4 :
                        this.propellorCount === 5 ? this.p5 :
                        this.propellorCount === 6 ? this.p6 :
                        this.propellorCount === 7 ? this.p7 :
                        this.propellorCount === 8 ? this.p8 : this.p9

      ctx.drawImage(this.propellor, this.x + 30, this.y + (this.width/2) - 10, 100, 20) 
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.drawImage(this.shadow, this.x + (this.width/5), this.y + 180, 100, 20) 
    }
  }
}
export default Platforms