import { Application } from "pixi.js";
import { LoadAssets } from "../LoadAssets";
import { Background } from "../Background";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Reels } from "../components/Reels";
import { ReelsDisplay } from "../components/ReelsDisplay";

class Game extends Application {
  constructor() {
    super();
    this.autoResize = true;
    this.resolution = window.devicePixelRatio || 2;
    this.antialias = true;
    this.autoDensity = true;
    this.stage.width = window.innerWidth;
    this.stage.height = window.innerHeight;
    this.resizeTo = window;
    this.reels = [];
    this.loaded = false;
    this.spin = false;
    this.spinSprite = null;
    this.animations = [];
    this.resurses = null;
  }

  createUI() {
    const size = { x: game.screen.width, y: game.screen.height };
    const background = new Background(size, this.resurses.background.texture);
    this.stage.addChild(background);

    const footer = new Footer();
    this.stage.addChild(footer);

    const header = new Header();
    this.stage.addChild(header);

    const display = new ReelsDisplay();
    this.stage.addChild(display);
  }

  setup() {
    document.body.appendChild(this.view);
    window.addEventListener(
      "resize",
      this.resize(window.innerWidth, window.innerHeight)
    );

    const loadAssets = new LoadAssets(loader, game);
    loadAssets.setup();
  }

  getReels() {
    return this.reels;
  }

  setReels(newReels) {
    this.reels.push(newReels);
  }

  setAnimations(animation) {
    this.animations.push(animation);
  }
}

const game = new Game();
const { stage, loader } = game;

export { game, stage, loader };
