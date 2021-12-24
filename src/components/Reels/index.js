import { Card } from "../Card";
import { Container } from "pixi.js";
import { game } from "../../Game";
import { reelsParams } from "../../params";
import { setupSpinAnimations } from "../../setupAnimations";

export class Reels extends Container {
  constructor(index) {
    super();
    this.index = index;
    const {
      size: { width, height },
      offset,
      count,
    } = reelsParams;

    this.isReels = true;
    this.id = index;
    this.width = width;
    this.height = height;
    this.x = index * offset;
    this.y = 800;

    setupSpinAnimations(this, index);

    game.win = false;

    if (!game.win) {
      Array.from(Array(count), (_, i) => {
        this.addChild(Card(i));
      });
    } else {
      // Array.from(Array(count), (_, i) => {
      //   this.addChild(Card(i));
      // });
    }

    game.setReels(this);
  }
}
