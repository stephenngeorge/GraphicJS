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
    id: 'canvas'
})
backgrounds.bgsolid(c)

let balls = []
let gravity = globals.vector(0, .2)
document.getElementById('canvas').addEventListener('click', e => {
    let mousePos = globals.mouse(c)._pos(e)
    let ball = shapes.circle(c, mousePos.x, mousePos.y, 8)
    ball.acc = globals.vector(0, 1)
    balls.push(ball)
})

structure.animate(() => {
    backgrounds.bgsolid(c)

    balls.forEach(ball => {
        ball.draw()
        if (ball.static === false) {
            ball.applyForce(gravity)
            ball.move()
            ball.bounceY(0 + ball.r, height - ball.r, .8)
        }
    })
})