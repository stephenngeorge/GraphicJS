import g from './graphic'
const {
    backgrounds,
    globals,
    shapes,
    structure
} = g

const { c, width, height } = structure.canvas({
    width: 600,
    height: 600,
    id: 'canvas'
})

backgrounds.bgsolid(c)

const ball = shapes.circle(c, width / 2, height / 2, 12)
ball.vel = globals.vector(1, 2)

structure.animate(() => {
    backgrounds.bgsolid(c)
    ball.pos.add(ball.vel)
    ball
        .draw('#333')
        .outline({ weight: 2, colour: '#fff' })
        .boundX(0 + ball.r, width - ball.r)
        .boundY(0 + ball.r, height - ball.r)
}, 120)