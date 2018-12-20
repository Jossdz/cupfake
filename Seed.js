import seed1 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_01.png'
import seed2 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_02.png'
import seed3 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_03.png'
import seed4 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_04.png'
import seed5 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_05.png'
import seed6 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_06.png'
import seed7 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_07.png'
import seed8 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_08.png'
import seed9 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_09.png'
import seed10 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_10.png'
import seed11 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_11.png'
import seed12 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_12.png'
import seed13 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_13.png'
import seed14 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_14.png'
import seed15 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_15.png'
import seed16 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_16.png'
import seed17 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_17.png'
import seed18 from './Plant/FiringSeeds/VenusFlytrap/Seed/Seed_Fall_A_18.png'

class Seed{
  constructor(ctx, x){
    this.x = x
    this.y = 10
    this.width = 30
    this.height = 30
    this.animateHelper = 1
    this.img = new Image
    this.img.src = seed1
    this.seed1 = new Image
    this.seed1.src = seed1
    this.seed2 = new Image
    this.seed2.src = seed2
    this.seed3 = new Image
    this.seed3.src = seed3
    this.seed4 = new Image
    this.seed4.src = seed4
    this.seed5 = new Image
    this.seed5.src = seed5
    this.seed6 = new Image
    this.seed6.src = seed6
    this.seed7 = new Image
    this.seed7.src = seed7
    this.seed8 = new Image
    this.seed8.src = seed8
    this.seed9 = new Image
    this.seed9.src = seed9
    this.seed10 = new Image
    this.seed10.src = seed10
    this.seed11 = new Image
    this.seed11.src = seed11
    this.seed12 = new Image
    this.seed12.src = seed12
    this.seed13 = new Image
    this.seed13.src = seed13
    this.seed14 = new Image
    this.seed14.src = seed14
    this.seed15 = new Image
    this.seed15.src = seed15
    this.seed16 = new Image
    this.seed16.src = seed16
    this.seed17 = new Image
    this.seed17.src = seed17
    this.seed18 = new Image
    this.seed18.src = seed18
    this.draw = frames => {
      if(frames % 8 === 0) this.animateHelper++
      if(this.animateHelper === 19) this.animateHelper = 1
      this.img =  this.animateHelper === 1 ? this.seed1 :
                  this.animateHelper === 2 ? this.seed2 :
                  this.animateHelper === 3 ? this.seed3 :
                  this.animateHelper === 4 ? this.seed4 :
                  this.animateHelper === 5 ? this.seed5 :
                  this.animateHelper === 6 ? this.seed6 :
                  this.animateHelper === 7 ? this.seed7 :
                  this.animateHelper === 8 ? this.seed8 :
                  this.animateHelper === 9 ? this.seed9 :
                  this.animateHelper === 10 ? this.seed10 :
                  this.animateHelper === 11 ? this.seed11 :
                  this.animateHelper === 12 ? this.seed12 :
                  this.animateHelper === 13 ? this.seed13 :
                  this.animateHelper === 14 ? this.seed14 :
                  this.animateHelper === 15 ? this.seed15 :
                  this.animateHelper === 16 ? this.seed16 :
                  this.animateHelper === 17 ? this.seed17 : this.seed18
                  this.y += 1.4
                  ctx.drawImage(this.img, this.x, this.y, this.width, this.height)        
      }
      
      
    }
  
}

export default Seed