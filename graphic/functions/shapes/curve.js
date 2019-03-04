
import Curve from '../../classes/shapes/Curve';
// create new Bezier, draw to the given context
export default function cuve(ctx, xFrom, yFrom, cp_x, cp_y, xTo, yTo) {
  return new Curve(ctx, xFrom, yFrom, cp_x, cp_y, xTo, yTo);
}
