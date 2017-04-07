'use strict';

import Graphic from './Graphic';

export default class Grid extends Graphic {
  constructor(ctx, cols, rows) {
    super();
    this.ctx = ctx;
    this.cols = cols;
    this.rows = rows;
    this.grid = [];
  }

  calc() {
    let width = this.ctx.canvas.width, height = this.ctx.canvas.height;
    for (let i = 0; i < (width / this.cols); i++) {
      let cell = { x: (width / (width / this.cols)) * i, rows: [], index: i };
      for (let j = 0; j < this.rows; j++) {
        cell.rows.push({ y: (height / (height / this.rows)) * j, index: j });
      }
      this.grid.push(cell);
    }
    return this;
  }

  draw({weight = 1, colour = '#808080'} = {}) {
    this.grid.forEach(col => {
      this.ctx.beginPath();
      this.ctx.moveTo(col.x, 0);
      this.ctx.lineTo(col.x, this.ctx.canvas.height);
      this.ctx.strokeStyle = colour;
      this.ctx.lineWidth = weight;
      this.ctx.stroke();
      col.rows.forEach(row => {
        this.ctx.beginPath();
        this.ctx.moveTo(col.x, row.y);
        this.ctx.lineTo(col.x + this.cols, row.y);
        this.ctx.strokeStyle = colour;
        this.ctx.lineWidth = weight;
        this.ctx.stroke();
      });
    });
    return this;
  }
}
