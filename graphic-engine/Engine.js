export default class Engine {

  constructor(bodies, { gravity_x = 0, gravity_y = 1 } = {}) {
    this.bodies = bodies;
    this.gravity_x = gravity_x;
    this.gravity_y = gravity_y;
  }

  applyForces(body) {
    const GRAVITY = { x: this.gravity_x, y: this.gravity_y };
    body.entity.pos.x += GRAVITY.x;
    body.entity.pos.y += GRAVITY.y;
    return body;
  }

  update() {
    for (let prop in this.bodies) {
      this.applyForces(this.bodies[prop]);
    }
    return this;
  }

}
