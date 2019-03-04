import g from './graphic'
const { shapes } = g

const { c, width, height } = g.canvas({
    width: 600,
    height: 600,
    id: 'canvas'
})

g.bgSolid(c)

const ball = shapes.circle(c, width / 2, height / 2, 12)
ball.vel = g.vector(1, 2)

g.animate(() => {
    g.bgSolid(c)
    ball.pos.add(ball.vel)
    ball
        .draw('#333')
        .outline({ weight: 2, colour: '#fff' })
        .boundX(0 + ball.r, width - ball.r)
        .boundY(0 + ball.r, height - ball.r)
}, 120)