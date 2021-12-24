import { Container, Graphics } from "pixi.js";
import { Button } from "../Button";
import { Block } from "../Block";
import { game } from "../../Game";
import { footerParams } from "../../params";

export class Footer extends Container {
  constructor() {
    super();
    const { y, height } = footerParams;
    this.y = y;
    this.height = height;

    const background = new Graphics();
    background.beginFill(0x000000);
    background.drawRect(0, 0, window.innerWidth, height);
    background.alpha = 0.6;

    this.addChild(background);

    const info = new Button(game.resurses["info"].texture, { x: 17, y: 25 });
    this.addChild(info);

    const home = new Button(game.resurses["home"].texture, { x: 97, y: 25 });
    this.addChild(home);

    const volume = new Button(game.resurses["volume"].texture, {
      x: 177,
      y: 25,
    });
    this.addChild(volume);

    const switcher = new Button(game.resurses["switcher"].texture, {
      x: 280,
      y: 45,
    });
    this.addChild(switcher);

    const light = new Button(game.resurses["light"].texture, {
      x: -15,
      y: -10,
    });
    switcher.addChild(light);

    const wildBetBG = new Button(game.resurses["wildBet"].texture, {
      x: 300,
      y: -95,
    });
    this.addChild(wildBetBG);

    const wildBet = new Button(null, { x: 115, y: 115 });
    wildBet.width = 215;
    wildBet.height = 70;
    wildBetBG.addChild(wildBet);

    const bet = new Button(game.resurses["bet"].texture, { x: 680, y: 25 });
    bet.width = 213;
    bet.height = 58;
    this.addChild(bet);

    const circle1 = new Button(game.resurses["ellipse"].texture, {
      x: 5,
      y: 5,
    });
    const minus = new Button(game.resurses["minus"].texture, { x: 9.5, y: 10 });

    circle1.addChild(minus);
    bet.addChild(circle1);

    const circle2 = new Button(game.resurses["ellipse"].texture, {
      x: 165,
      y: 5,
    });
    const plus = new Button(game.resurses["plus"].texture, { x: 9.5, y: 10 });

    circle2.addChild(plus);
    bet.addChild(circle2);

    const betAmounts = new Block(game.resurses["betAmounts"].texture, {
      x: 200,
      y: 2.5,
    });
    bet.addChild(betAmounts);

    const bet1001 = new Button(game.resurses["bet100"].texture, {
      x: 35,
      y: 4,
    });
    betAmounts.addChild(bet1001);

    const bet1002 = new Button(game.resurses["bet100"].texture, {
      x: 147,
      y: 4,
    });
    betAmounts.addChild(bet1002);

    const bet1003 = new Button(game.resurses["bet100"].texture, {
      x: 259,
      y: 4,
    });
    betAmounts.addChild(bet1003);

    const bet1004 = new Button(game.resurses["bet100"].texture, {
      x: 371,
      y: 4,
    });
    betAmounts.addChild(bet1004);

    const bet1005 = new Button(game.resurses["bet100"].texture, {
      x: 483,
      y: 4,
    });
    betAmounts.addChild(bet1005);

    const container = new Container();
    container.buttonMode = true;
    container.interactive = true;
    container.height = 200;
    container.width = 200;
    container.y = -130;
    container.x = window.innerWidth - 300;
    this.addChild(container);
    game.spinSprite = container;

    const spinBgPosition = { x: 17, y: 25 };
    const spinBg = new Block(game.resurses["spinBg"].texture, spinBgPosition);
    container.addChild(spinBg);

    const spin = new Block(game.resurses["spin"].texture, { x: 14, y: 14 });
    spinBg.addChild(spin);

    const spinAmount = new Block(game.resurses["spinAmount"].texture, {
      x: 60,
      y: 60,
    });

    spinAmount.click = () => {
      startAnim.play();
      console.log(15151);
    };
    spinBg.addChild(spinAmount);
  }
}
