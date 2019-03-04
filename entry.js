import g from './graphic'

const { c, width, height } = g.canvas({
    width: 600,
    height: 600,
    id: 'canvas'
})

g.bgSolid(c)

const circle = g.circle(c, width / 2, height / 2, 12)
circle.vel = g.vector(1, 2)

g.animate(() => {
    g.bgSolid(c)
    circle.pos.add(circle.vel)
    circle
        .draw('#333')
        .outline({ weight: 2, colour: '#fff' })
        .boundX(0 + circle.r, width - circle.r)
        .boundY(0 + circle.r, height - circle.r)
}, 120)