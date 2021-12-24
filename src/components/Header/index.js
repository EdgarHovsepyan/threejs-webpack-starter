import { Container } from "pixi.js";
import { Button } from "../Button";
import { Block } from "../Block";
import { game } from "../../Game";

const jackpotsPanelParams = {
  containerPosition: { x: 50, y: 0 },
  containerHeight: 40,
  jackpots: {
    jackpotsPosition: { x: 300, y: 51 },
    clubJackpotsBgPosition: { x: 570, y: 44 },
    diamondJackpotsBgPosition: { x: 860, y: 44 },
    spadeJackpotsBgPosition: { x: 1150, y: 44 },
    offset: { x: -10, y: -10 },
  },
};

const logoParams = {
  position: { x: 0, y: 0 },
  size: { width: 301, height: 170 },
};

export class Header extends Container {
  constructor() {
    super();

    const {
      containerPosition: { x, y },
      containerHeight,
      jackpots: {
        jackpotsPosition,
        clubJackpotsBgPosition,
        diamondJackpotsBgPosition,
        spadeJackpotsBgPosition,
        offset,
      },
    } = jackpotsPanelParams;

    const {
      position,
      size: { width, height },
    } = logoParams;

    this.x = x;
    this.y = y;
    this.height = containerHeight;

    const createLogo = () => {
      const logo = new Button(game.resurses["logo"].texture, position);
      logo.width = width;
      logo.height = height;

      this.addChild(logo);
    };

    const createJackpotsPanel = () => {
      const jackpots = new Block(
        game.resurses["jackpots"].texture,
        jackpotsPosition
      );
      this.addChild(jackpots);

      // Club

      const clubJackpotsBg = new Block(
        game.resurses["jackpotsBg"].texture,
        clubJackpotsBgPosition
      );
      this.addChild(clubJackpotsBg);

      const clubJackpots = new Block(
        game.resurses["jeckpotClubs"].texture,
        offset
      );
      clubJackpotsBg.addChild(clubJackpots);

      // Diamond

      const diamondJackpotsBg = new Block(
        game.resurses["jackpotsBg"].texture,
        diamondJackpotsBgPosition
      );
      this.addChild(diamondJackpotsBg);

      const diamondJackpots = new Block(
        game.resurses["jeckpotDiamonds"].texture,
        offset
      );
      diamondJackpotsBg.addChild(diamondJackpots);

      // Spade

      const spadeJackpotsBg = new Block(
        game.resurses["jackpotsBg"].texture,
        spadeJackpotsBgPosition
      );
      this.addChild(spadeJackpotsBg);

      const spadeJackpots = new Block(
        game.resurses["jeckpotSpades"].texture,
        offset
      );
      spadeJackpotsBg.addChild(spadeJackpots);
    };

    createLogo();
    createJackpotsPanel();
  }
}
