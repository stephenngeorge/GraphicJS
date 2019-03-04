// import structure
import animate from './functions/Structure/animate'
import rotate from './functions/Structure/rotate'
import aside from './functions/Structure/aside'
import canvas from './functions/Structure/canvas'

// import helpers
import map from './functions/Helpers/map'
import convert from './functions/Helpers/convert'
import date from './functions/Helpers/date'

// import fundamentals
import bgSolid from './functions/backgrounds/bgSolid'
import vector from './functions/vector'
import grid from './functions/grid'

// import shapes
import shapes from './Shapes'

import Graphic from './classes/Graphic'
import Vector from './classes/Vector'
import Grid from './classes/Grid'

const g = {
  shapes,
  animate,
  rotate,
  aside,
  map,
  convert,
  date,
  canvas,
  bgSolid,
  vector,
  grid,
  classes: {
    Graphic,
    Vector,
    Grid
  }
}

export default g
