import { Container, Graphics } from "pixi.js";
import { Reels } from "../Reels";
import { reelsContainerParams, displayPosition } from "../../params";

const createMask = (position, width, height) => {
  const { x, y } = position;
  const mask = new Graphics();
  mask.drawRect(x, y, width, height - 30);

  return mask;
};

export class ReelsDisplay extends Container {
  constructor() {
    super();
    const {
      size: { width, height },
      count,
      position: { x, y },
    } = reelsContainerParams;

    this.isReelsContainer = true;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    const diplay = createMask(displayPosition, width, height);
    this.addChild(diplay); // make sure mask it added to display list somewhere!
    this.mask = diplay;

    Array.from(Array(count), (_, index) => {
      this.addChild(new Reels(index));
    });
  }
}
