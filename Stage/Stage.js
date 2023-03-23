/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 262.5,
        y: 196
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.number = 10090;
    this.vars.i = 5046;
    this.vars.factors = [];

    this.watchers.factors = new Watcher({
      label: "Factors",
      style: "normal",
      visible: true,
      value: () => this.vars.factors,
      x: 245,
      y: 175,
      width: 119,
      height: 296
    });
  }
}
