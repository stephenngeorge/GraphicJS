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
    width: 400,
    height: 400,
    id: 'canvas'
})

const ball = shapes.circle(c, width / 2, height / 2, 8)

let target = null
document.getElementById('canvas').addEventListener('mousemove', e => {
    let mousePos = globals.mouse(c)._pos(e)
    target = globals.vector(mousePos.x, mousePos.y)
    ball.acc = target.sub(ball.pos).mult(0.1)
})

structure.animate(() => {
    backgrounds.bgsolid(c)
    ball
        .move()
        .draw()
        .outline()
        .wrapX(0, width)
        .wrapY(0, height)
}, 10)