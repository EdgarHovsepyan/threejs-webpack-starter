import { game } from "../Game";
export class LoadAssets {
  constructor(loader) {
    this.loader = loader;
    this.loader.baseUrl = "./assets/";

    this.loader
      .add("club10_A", "club10_A/spritesheet.json")
      .add("background", "bg.png")
      .add("logo", "logo.png")
      .add("info", "footer/info.png")
      .add("home", "footer/home.png")
      .add("volume", "footer/volume.png")
      .add("switcher", "footer/dark light mode switcher.png")
      .add("light", "footer/light mode icon.png")
      .add("wildBet", "footer/wild bet.png")
      .add("bet", "footer/bet bg.png")
      .add("minus", "footer/minus.png")
      .add("plus", "footer/plus.png")
      .add("ellipse", "footer/ellipse.png")
      .add("betAmounts", "footer/beting amounts bg.png")
      .add("bet100", "footer/bet 100 bg.png")
      .add("spin", "spiner/spin.png")
      .add("spinBg", "spiner/spin bg.png")
      .add("spinAmount", "spiner/spin amount ellipse.png")
      .add("jackpots", "jackpots/JACKPOTS.png")
      .add("jackpotsBg", "jackpots/jackpot bg.png")
      .add("jeckpotDiamonds", "jackpots/jeckpot diamonds.png")
      .add("jeckpotClubs", "jackpots/jeckpot clubs.png")
      .add("jeckpotSpades", "jackpots/jeckpot spades.png")
      .add("spade_6", "icons/Spade_6.png")
      .add("diamond_10", "icons/Diamond_10.png")
      .add("club_J", "icons/Club_J.png")
      .add("hearts_Q", "icons/Hearts_Q.png")
      .add("hearts_A", "icons/Hearts_A.png");
  }
  setup() {
    this.loader.load((_, res) => {
      game.loaded = true;
      game.resurses = res;
      game.createUI();
    });
  }
}
