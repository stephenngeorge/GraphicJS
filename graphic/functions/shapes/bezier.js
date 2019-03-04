
import Bezier from '../../classes/shapes/Bezier';
// create new Bezier, draw to the given context
export default function bezier(ctx, xFrom, yFrom, cp1_x, cp1_y, cp2_x, cp2_y, xTo, yTo) {
  return new Bezier(ctx, xFrom, yFrom, cp1_x, cp1_y, cp2_x, cp2_y, xTo, yTo);
}
