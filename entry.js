import g from './graphic'
const {
    backgrounds,
    globals,
    helpers,
    shapes,
    structure
} = g

// define canvas & get context, width & height variables
const { c, width, height } = structure.canvas({
    width: window.innerWidth,
    height: window.innerHeight,
    id: 'canvas'
})

let balls = []
for (let i = 0; i < 20; i++) {
    let randomX = Math.ceil(Math.random() * width)
    let randomY = Math.ceil(Math.random() * height)
    let randomR = Math.ceil(Math.random() * 30)
    balls.push(shapes.circle(c, randomX, randomY, randomR))
}

document.getElementById('canvas').addEventListener('mousemove', e => {
    let mousePos = globals.mouse(c)._pos(e)
    let target = globals.vector(mousePos.x, mousePos.y)
    balls.forEach(ball => {
        ball.acc = target.copy().sub(ball.pos).mult(1 / ball.r)
    })
})

structure.animate(() => {
    backgrounds.bgsolid(c, '#fff')
    balls.forEach(b => {
        b.move()
        .draw(`rgba(200, 0, ${helpers._map(b.r, 1, 16, 0, 255)}, .5)`)
        .outline()
        .wrapX(0, width)
        .wrapY(0, height)
    })
}, 10)