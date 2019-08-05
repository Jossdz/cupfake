import Board from './board'
import Platform from './platform'
import Cuphead from './cuphead'
import Bullet from './bullet'
import Carnation from './Carnation'
import Seed from './Seed'
import audio from './07 Botanic Panic.mp3'





window.onload = () => {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    let intervalo
    let frames = 0
    let keys = []
    let shoots = []
    const friction = 0.8
    const gravity = 0.98


    const sound = new Audio()
    const board = new Board(ctx)
    const platform1 = new Platform(ctx, 1)
    const platform2 = new Platform(ctx, 2)
    const platform3 = new Platform(ctx, 3)
    const platforms = [platform1, platform2, platform3]
    const cuphead = new Cuphead(ctx)
    const carnation = new Carnation(ctx)
    const seeds = []

    sound.src = audio


    function checkCollition() {
        console.log('Hola Joss')
        platforms.forEach(platform => {
            if (cuphead.isTouching(platform)) {
                cuphead.y = platform.y - cuphead.height + 25;
                cuphead.grounded = true
            }
        });
    }

    function checkDamage() {
        shoots.forEach((shoot, i) => {
            if (carnation.isTouching(shoot)) {
                carnation.damage()
                shoots.splice(i, 1)
            }
        })
    }

    function drawShoots() {
        shoots.forEach(shoot => {
            shoot.draw()
        })
    }

    function shoot(x, y) {
        const bullet = new Bullet(ctx, x, y)
        shoots.push(bullet)
    }

    function update() {
        frames++
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        checkCollition()
        checkDamage()
        board.draw()
        shootSeeds()
        platforms.forEach(platform => platform.draw(frames))
        cuphead.draw(frames)
        carnation.draw(frames)
        drawShoots()
        checkKeys()
        attack()
        drawSeeds()
        touchSeeds()
        cuphead.x += cuphead.velX;
        cuphead.y += cuphead.velY;
        cuphead.velX *= friction;
        cuphead.velY += gravity;
    }

    function stop() {
        clearInterval(intervalo)
        intervalo = 0
        sound.pause()
    }

    function startGame() {
        //sound.play()
        if (intervalo > 0) return

        intervalo = setInterval(function() {
            update()
        }, 1000 / 60)
    }

    function attack() {
        if (frames % 800 === 0) {
            carnation.changeStatus('A')
            console.log('on attack')
            setTimeout(() => {
                carnation.changeStatus()
            }, 6224)
        }
    }

    function shootSeeds() {
        if (carnation.status === 'A') {
            if (frames % 50 === 0) {
                const Random = Math.floor(Math.random() * (900 - 20))
                const seed = new Seed(ctx, Random)
                seeds.push(seed)
            }
        }
    }

    function drawSeeds() {
        seeds.forEach(seed => {
            seed.draw(frames)
        })
    }

    function touchSeeds() {
        seeds.forEach((seed, i) => {
            if (cuphead.isTouching(seed)) {
                seeds.splice(i, 1)
            }
            if (seed.y > 600) {
                seeds.splice(i, 1)
            }
        })
    }


    function checkKeys() {
        if (keys[38] || keys[32]) {
            if (cuphead.grounded) {
                cuphead.velY = -cuphead.jumpStrength * 2;
                cuphead.jumping = true;
            }
        }

        if (keys[39]) {
            if (cuphead.velX < cuphead.vel) {
                if (cuphead.grounded) {
                    cuphead.changeStatus('RUN_R')
                }
                cuphead.velX++;
            }
        }

        if (keys[37]) {
            if (cuphead.velX > -cuphead.vel) {
                if (cuphead.grounded) {
                    cuphead.changeStatus('RUN_L')
                }
                cuphead.velX--;
            }
        }
        if (keys[69]) {
            if (frames % 5 == 0) {
                return shoot(cuphead.x + cuphead.width - 30, cuphead.y + 50)
            }
        }
    }

    addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
            startGame();
        } else if (event.keyCode == 16) {
            stop()
        }
        keys[event.keyCode] = true;
    });


    addEventListener("keyup", function(event) {
        keys[event.keyCode] = false;
    });

    addEventListener('keyup', e => {
        switch (e.keyCode) {
            default: cuphead.jumping = false
        }
    })
}