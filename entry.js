import g from './graphic'
const {
    backgrounds,
    globals,
    helpers,
    shapes,
    structure
} = g

const { c, width, height } = structure.canvas({
    width: 600,
    height: 600,
    id: 'canvas'
})

const unit = 8

backgrounds.bgsolid(c)

const ball = shapes.circle(c, width / 2, height / 2, unit)
ball.history = []

structure.animate(() => {
    // redraw background
    backgrounds.bgsolid(c)
    // add current ball position to history array
    ball.history.push(ball.pos.copy())
    // limit history array to 100 items
    if (ball.history.length > 100) ball.history.shift()
    // draw circle at each position in history
    ball.history.forEach(pos => {
        let colourX = helpers._map(pos.x, 0, width, 0, 255)
        let colourY = helpers._map(pos.y, 0, height, 0, 255)
        shapes.circle(c, pos.x, pos.y, unit).draw(`rgba(${colourX}, ${colourY}, 0, .6)`)
    })
    
    // randomly create vector to be added to ball position
    let dir = Math.random()
    if (dir <= .25) ball.vel = globals.vector(0, unit * 2)
    else if (dir <= .5) ball.vel = globals.vector(unit * 2, 0)
    else if (dir <= .75) ball.vel = globals.vector(0, -unit * 2)
    else ball.vel = globals.vector(-unit * 2, 0)

    // draw ball at new position
    ball.pos.add(ball.vel)
    ball
        .draw('#333')
        .outline({ weight: 2, colour: '#fff' })
        .wrapX(0 + ball.r, width - ball.r)
        .wrapY(0 + ball.r, height - ball.r)
}, 10)