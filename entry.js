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
    width: 600,
    height: 600,
    id: 'canvas'
})
// global config variable for circle radius & vector size
const unit = 8

// define walker
const walker = shapes.circle(c, width / 2, height / 2, unit)
walker.history = []

structure.animate(() => {
    // redraw background
    backgrounds.bgsolid(c)
    // add current ball position to history array
    walker.history.push(walker.pos.copy())
    // limit history array to 100 items
    if (walker.history.length > 100) walker.history.shift()
    // draw circle at each position in history
    walker.history.forEach(pos => {
        // set colour values based on pos co-ordinates
        let colourX = helpers._map(pos.x, 0, width, 0, 255)
        let colourY = helpers._map(pos.y, 0, height, 0, 255)
        // draw circle with values determined above
        shapes.circle(c, pos.x, pos.y, unit).draw(`rgba(${colourX}, ${colourY}, 0, .6)`)
    })
    
    // randomly create vector to be added to ball position
    let dir = Math.random()
    if (dir <= .25) walker.vel = globals.vector(0, unit * 2)
    else if (dir <= .5) walker.vel = globals.vector(unit * 2, 0)
    else if (dir <= .75) walker.vel = globals.vector(0, -unit * 2)
    else walker.vel = globals.vector(-unit * 2, 0)

    // draw ball at new position
    walker.pos.add(walker.vel)
    walker
        .draw('#333')
        .outline({ weight: 2, colour: '#fff' })
        .wrapX(0 + walker.r, width - walker.r)
        .wrapY(0 + walker.r, height - walker.r)
}, 10)