import * as PIXI from "pixi.js";
import { game } from "../Game";
import gsap from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

export const setupSpinAnimations = (container, index) => {
  const loopAnim = gsap.timeline({ paused: true });
  loopAnim.to(container, {
    y: 800,
    ease: "none",
    repeat: 5,
    duration: 0.35,
    onComplete: () => {
      container.y = 80;
      stopAnim.restart();
    },
  });

  const startAnim = gsap.timeline({ paused: true });
  startAnim.to(container, {
    y: "-=150%",
    ease: "elastic.in(1, 1.5)",
    delay: 0.025 * index,
    duration: 0.35,
    pixi: { blurY: 10, blurX: 1 },
    onComplete: () => {
      container.y = 80;
      loopAnim.restart();
      game.spin = true;
    },
  });

  const stopAnim = gsap.timeline({ paused: true });
  stopAnim.to(container, {
    y: 800,
    ease: "elastic.out(1, 1.5)",
    delay: 0.025 * index,
    duration: 0.35,
    pixi: { blurY: 0, blurX: 0 },
    onStart: () => {
      const textures = [];
      container.children.forEach((child, index) => {
        if (index < 4) {
          textures.push(child.texture);
        } else {
          child.changeTexture(textures[index - 4]);
        }
      });
      loopAnim.paused(true);
    },
    onComplete: () => {
      game.spin = false;
    },
  });

  const spinAnimation = () =>
    !game.spin ? startAnim.restart() : stopAnim.restart();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") spinAnimation();
  });
  game.spinSprite.on("mousedown", spinAnimation);
};
