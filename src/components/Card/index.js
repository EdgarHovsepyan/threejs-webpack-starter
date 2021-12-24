import { Block } from "../Block";
import { game } from "../../Game";
import { reelsParams } from "../../params";
import { Texture } from "pixi.js";

export const Card = (index) => {
  const { symbol_size } = reelsParams;

  const symbols = [
    game.resurses["spade_6"].texture,
    game.resurses["hearts_A"].texture,
    game.resurses["hearts_Q"].texture,
    game.resurses["club_J"].texture,
    game.resurses["diamond_10"].texture,
  ];

  const randomItem = symbols[Math.floor(Math.random() * symbols.length)];

  let card = new Block(randomItem, {
    x: 0,
    y: index * symbol_size,
  });
  card.isSymbol = true;
  card.id = index;
  card.anchor.x = 0.5;
  card.anchor.y = 0.5;
  card.width = symbol_size;
  card.height = symbol_size;
  card.interactive = true;

  card.clone = () => Object.create(card);

  card.changeTexture = (texture) => {
    card.texture = texture;
    card.texture.update();
  };

  return card;
};
