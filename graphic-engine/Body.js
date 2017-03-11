export default class Body {

  constructor(entity, type = 'dynamic', collision = 'elastic') {
    this.entity = entity,
    this.type = type,
    this.collision = collision
    this.size = this.setSize();
  }

  setSize() {
    if (!!this.entity.r) return this.entity.r;
    if (!!this.entity.height) return this.entity.height;
  }
}
