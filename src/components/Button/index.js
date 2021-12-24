import { Sprite } from "pixi.js";

export class Button extends Sprite {
  constructor(texture, position = { x: 0, y: 0 }) {
    super(texture);
    this.interactive = true;
    this.buttonMode = true;
    this.scale.x = this.scale.y = 1;
    // this.anchor.set(0.5);

    const { x, y } = position;
    this.position.set(x, y);
  }
}
