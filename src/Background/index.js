import { Point, Container, Sprite, Graphics } from "pixi.js";

const setBackground = (bgSize, inputSprite, type, forceSize) => {
  const sprite = inputSprite;
  const bgContainer = new Container();
  const mask = new Graphics()
    .beginFill(0x8bc5ff)
    .drawRect(0, 0, bgSize.x, bgSize.y)
    .endFill();
  bgContainer.mask = mask;
  bgContainer.addChild(mask);
  bgContainer.addChild(sprite);

  const resize = () => {
    const sp = { x: sprite.width, y: sprite.height };
    if (forceSize) sp = forceSize;
    const winratio = bgSize.x / bgSize.y;
    const spratio = sp.x / sp.y;
    const pos = new Point(0, 0);
    let scale = 1;

    if (type == "cover" ? winratio > spratio : winratio < spratio) {
      //image is wider than background
      scale = bgSize.x / sp.x;
      pos.y = -(sp.y * scale - bgSize.y) / 2;
    } else {
      //image is taller than background
      scale = bgSize.y / sp.y;
      pos.x = -(sp.x * scale - bgSize.x) / 2;
    }

    sprite.scale = new Point(scale, scale);
    sprite.position = pos;
  };

  resize();

  return {
    container: bgContainer,
    doResize: resize,
  };
};

export class Background extends Container {
  constructor(size, texture) {
    super();
    this.size = size;
    this.texture = texture;
    this.slide = setBackground(size, new Sprite(texture), "cover");
    this.addChild(this.slide.container);
  }
}
