/**
 * Copyright(c) dtysky<dtysky@outlook.com>
 * Created: 27 Jan 2018
 * Description:
 */
import * as Phaser from 'phaser-ce';
import Game from '../Game';
import Flame from './Flame';
import config from '../config';

export default class Torch extends Phaser.Sprite {
  public game: Game;
  public state: 'die' | 'alive';
  private flame: Phaser.Sprite;

  constructor(game: Game, x: number, y: number, width: number, key: string = 'torch') {
    super(game, x, y, key);
    this.state = 'die';

    this.flame = new Phaser.Sprite(this.game, 0, 0, 'torch-flame');
    this.flame.scale.x = 1.5;
    this.flame.scale.y = 2;
    this.flame.position.setTo(0, -220);
    this.flame.visible = false;
    this.addChild(this.flame);
    this.flame.animations.add('fire', ['1', '2', '3', '4', '5', '6'], 6, true);

    this.game.physics.arcade.enable([this]);
    const body = this.body as Phaser.Physics.Arcade.Body;

    body.collideWorldBounds = true;
    body.bounce.set(1);
    body.setSize(this.width * 2 / 3, this.height / 2, this.width / 6);
    body.allowGravity = false;

    this.scale.x = this.scale.y = width / this.width;

    body.onOverlap = new Phaser.Signal();
    body.onOverlap.add(this.onFire);
  }

  public onFire = (self: Torch, target: Flame) => {
    if (this.state === 'die') {
      config.devMode && console.log('torch');
      this.state = 'alive';
      target.enhance();
      this.game.records.fire += 1;
      this.flame.animations.play('fire');
      this.flame.visible = true;
      this.body.onOverlap.remove(this.onFire);
    }
  }
}
