export default class Body {

  constructor(entity, type = 'dynamic', collision = 'elastic') {
    this.entity = entity,
    this.type = type,
    this.collision = collision
  }

}
