
import Sector from '../../classes/shapes/Sector';

export default function(ctx, x = 42, y = 42, r = 21, angle = Math.PI, size = Math.PI / 2) {
  return new Sector(ctx, x, y, r, angle, size);
}
