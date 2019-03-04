
import Segment from '../../classes/shapes/Segment';

export default function segment(ctx, xPos = 42, yPos = 42, radius = 21, startingAngle = Math.PI, chordLength = 42) {
  return new Segment(ctx, xPos, yPos, radius, startingAngle, chordLength);
}
