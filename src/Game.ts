/**
 * Copyright(c) dtysky<dtysky@outlook.com>
 * Created: 26 Jan 2018
 * Description:
 */
import * as Phaser from 'phaser-ce';

import {TResource, TGameRecords, TGameSetting} from './types';
import config from './config';

export default class Game extends Phaser.Game {
  public records: TGameRecords;
  public setting: TGameSetting;
  private layers;

  public init() {
    this.records = {
      duration: 0,
      fire: 0,
      water: 0,
      result: 'alive'
    };

    this.setting = {
      flame: {
        lifeDuration: 12,
        maxVelocity: {
          x: 150,
          y: 150
        },
        minVelocity: {
          x: 0,
          y: 30
        },
        initAcceleration: {
          x: 0,
          y: -50
        },
        initPosition: {
          x: 2000,
          y: 2000
        },
        moveAcceleration: 150
      },
      world: {
        worldWidth: 4096,
        worldHeight: 4096
      },
      mapElements: [
        {type: 'wall' , x: 0, y: 0, width: 580, height: 4096, key: null},
        {type: 'wall' , x: 3560, y: 0, width: 540, height: 4096, key: null},
        {type: 'wall' , x: 0, y: 0, width: 4096, height: 200, key: null},
        {type: 'wall' , x: 0, y: 3960, width: 4096, height: 120, key: null},

        {type: 'torch', x: 700, y: 300, width: 120, key: 'cross'},
        {type: 'torch', x: 3400, y: 300, width: 120, key: 'cross'},
        {type: 'torch', x: 3400, y: 3800, width: 120, key: 'cross'},

        {type: 'torch', x: 100, y: 600, width: 120},
        {type: 'torch', x: 2000, y: 460, width: 120},
        {type: 'torch', x: 1940, y: 1400, width: 120},
        {type: 'torch', x: 840, y: 1940, width: 120},
        {type: 'torch', x: 1470, y: 2700, width: 120},
        {type: 'torch', x: 1000, y: 3560, width: 120},
        {type: 'torch', x: 1940, y: 2660, width: 120},
        {type: 'torch', x: 2100, y: 3320, width: 120},
        {type: 'torch', x: 2560, y: 320, width: 120},
        {type: 'torch', x: 3380, y: 1600, width: 120},
        {type: 'torch', x: 3060, y: 2680, width: 120},
        {type: 'torch', x: 3060, y: 3560, width: 120},

        { type: 'wall', x: 612, y: 398, width: 60 },
        { type: 'wall', x: 612, y: 464, width: 60 },
        { type: 'wall', x: 612, y: 596, width: 60 },
        { type: 'wall', x: 612, y: 662, width: 60 },
        { type: 'wall', x: 612, y: 1058, width: 60 },
        { type: 'wall', x: 612, y: 1124, width: 60 },
        { type: 'wall', x: 612, y: 1190, width: 60 },
        { type: 'wall', x: 612, y: 1256, width: 60 },
        { type: 'wall', x: 612, y: 1322, width: 60 },
        { type: 'wall', x: 612, y: 1388, width: 60 },
        { type: 'wall', x: 612, y: 1454, width: 60 },
        { type: 'wall', x: 540, y: 1982.0000000000002, width: 60 },
        { type: 'wall', x: 612, y: 1982.0000000000002, width: 60 },
        { type: 'wall', x: 612, y: 2048, width: 60 },
        { type: 'wall', x: 612, y: 2114, width: 60 },
        { type: 'wall', x: 612, y: 2180, width: 60 },
        { type: 'wall', x: 612, y: 2774, width: 60 },
        { type: 'wall', x: 612, y: 2840, width: 60 },
        { type: 'wall', x: 612, y: 2906, width: 60 },
        { type: 'wall', x: 612, y: 2972, width: 60 },
        { type: 'wall', x: 612, y: 3038.0000000000005, width: 60 },
        { type: 'wall', x: 1044, y: 266, width: 60 },
        { type: 'wall', x: 1044, y: 332, width: 60 },
        { type: 'wall', x: 1044, y: 398, width: 60 },
        { type: 'wall', x: 1044, y: 794, width: 60 },
        { type: 'wall', x: 1044, y: 926.0000000000001, width: 60 },
        { type: 'wall', x: 1044, y: 992.0000000000001, width: 60 },
        { type: 'wall', x: 1044, y: 1058, width: 60 },
        { type: 'wall', x: 1044, y: 1124, width: 60 },
        { type: 'wall', x: 1044, y: 1190, width: 60 },
        { type: 'wall', x: 1044, y: 1322, width: 60 },
        { type: 'wall', x: 1044, y: 1388, width: 60 },
        { type: 'wall', x: 1044, y: 1454, width: 60 },
        { type: 'wall', x: 1044, y: 1586, width: 60 },
        { type: 'wall', x: 1044, y: 1916.0000000000002, width: 60 },
        { type: 'wall', x: 1044, y: 1982.0000000000002, width: 60 },
        { type: 'wall', x: 1044, y: 2048, width: 60 },
        { type: 'wall', x: 1044, y: 2114, width: 60 },
        { type: 'wall', x: 1044, y: 2180, width: 60 },
        { type: 'wall', x: 1044, y: 2246, width: 60 },
        { type: 'wall', x: 1044, y: 2312, width: 60 },
        { type: 'wall', x: 1044, y: 2378, width: 60 },
        { type: 'wall', x: 1044, y: 2444, width: 60 },
        { type: 'wall', x: 1044, y: 2510, width: 60 },
        { type: 'wall', x: 1044, y: 2576, width: 60 },
        { type: 'wall', x: 1548, y: 794, width: 60 },
        { type: 'wall', x: 1548, y: 860, width: 60 },
        { type: 'wall', x: 1548, y: 926.0000000000001, width: 60 },
        { type: 'wall', x: 1548, y: 992.0000000000001, width: 60 },
        { type: 'wall', x: 1548, y: 1058, width: 60 },
        { type: 'wall', x: 1548, y: 1190, width: 60 },
        { type: 'wall', x: 1548, y: 1322, width: 60 },
        { type: 'wall', x: 1548, y: 1454, width: 60 },
        { type: 'wall', x: 1548, y: 2774, width: 60 },
        { type: 'wall', x: 1548, y: 3170.0000000000005, width: 60 },
        { type: 'wall', x: 1548, y: 3566.0000000000005, width: 60 },
        { type: 'wall', x: 1548, y: 3632.0000000000005, width: 60 },
        { type: 'wall', x: 1548, y: 3698.0000000000005, width: 60 },
        { type: 'wall', x: 2124, y: 530, width: 60 },
        { type: 'wall', x: 2124, y: 596, width: 60 },
        { type: 'wall', x: 2124, y: 662, width: 60 },
        { type: 'wall', x: 2124, y: 728, width: 60 },
        { type: 'wall', x: 2124, y: 794, width: 60 },
        { type: 'wall', x: 2124, y: 860, width: 60 },
        { type: 'wall', x: 2124, y: 926.0000000000001, width: 60 },
        { type: 'wall', x: 2124, y: 992.0000000000001, width: 60 },
        { type: 'wall', x: 2124, y: 1124, width: 60 },
        { type: 'wall', x: 2124, y: 1190, width: 60 },
        { type: 'wall', x: 2124, y: 1256, width: 60 },
        { type: 'wall', x: 2124, y: 1322, width: 60 },
        { type: 'wall', x: 2124, y: 1454, width: 60 },
        { type: 'wall', x: 2124, y: 1520, width: 60 },
        { type: 'wall', x: 2124, y: 1586, width: 60 },
        { type: 'wall', x: 2124, y: 1652.0000000000002, width: 60 },
        { type: 'wall', x: 2124, y: 1718.0000000000002, width: 60 },
        { type: 'wall', x: 2124, y: 1784.0000000000002, width: 60 },
        { type: 'wall', x: 2124, y: 2048, width: 60 },
        { type: 'wall', x: 2124, y: 2114, width: 60 },
        { type: 'wall', x: 2124, y: 2180, width: 60 },
        { type: 'wall', x: 2124, y: 2246, width: 60 },
        { type: 'wall', x: 2124, y: 2312, width: 60 },
        { type: 'wall', x: 2124, y: 2378, width: 60 },
        { type: 'wall', x: 2124, y: 2444, width: 60 },
        { type: 'wall', x: 2124, y: 2510, width: 60 },
        { type: 'wall', x: 2124, y: 2576, width: 60 },
        { type: 'wall', x: 2124, y: 2642, width: 60 },
        { type: 'wall', x: 2484, y: 530, width: 60 },
        { type: 'wall', x: 2484, y: 662, width: 60 },
        { type: 'wall', x: 2484, y: 728, width: 60 },
        { type: 'wall', x: 2484, y: 794, width: 60 },
        { type: 'wall', x: 2484, y: 1058, width: 60 },
        { type: 'wall', x: 2484, y: 1124, width: 60 },
        { type: 'wall', x: 2484, y: 1190, width: 60 },
        { type: 'wall', x: 2484, y: 1256, width: 60 },
        { type: 'wall', x: 2484, y: 1322, width: 60 },
        { type: 'wall', x: 2484, y: 1388, width: 60 },
        { type: 'wall', x: 2484, y: 1454, width: 60 },
        { type: 'wall', x: 2484, y: 1520, width: 60 },
        { type: 'wall', x: 2484, y: 1586, width: 60 },
        { type: 'wall', x: 2484, y: 1652.0000000000002, width: 60 },
        { type: 'wall', x: 2484, y: 1718.0000000000002, width: 60 },
        { type: 'wall', x: 2484, y: 2048, width: 60 },
        { type: 'wall', x: 2484, y: 2114, width: 60 },
        { type: 'wall', x: 2484, y: 2180, width: 60 },
        { type: 'wall', x: 2484, y: 2246, width: 60 },
        { type: 'wall', x: 2484, y: 2312, width: 60 },
        { type: 'wall', x: 2484, y: 2378, width: 60 },
        { type: 'wall', x: 2484, y: 2444, width: 60 },
        { type: 'wall', x: 2484, y: 2510, width: 60 },
        { type: 'wall', x: 2484, y: 2576, width: 60 },
        { type: 'wall', x: 2484, y: 2642, width: 60 },
        { type: 'wall', x: 2484, y: 2708, width: 60 },
        { type: 'wall', x: 2484, y: 2774, width: 60 },
        { type: 'wall', x: 2988, y: 332, width: 60 },
        { type: 'wall', x: 2988, y: 398, width: 60 },
        { type: 'wall', x: 2988, y: 464, width: 60 },
        { type: 'wall', x: 2988, y: 596, width: 60 },
        { type: 'wall', x: 2988, y: 662, width: 60 },
        { type: 'wall', x: 2988, y: 728, width: 60 },
        { type: 'wall', x: 2988, y: 926.0000000000001, width: 60 },
        { type: 'wall', x: 2988, y: 992.0000000000001, width: 60 },
        { type: 'wall', x: 2988, y: 1058, width: 60 },
        { type: 'wall', x: 2988, y: 1124, width: 60 },
        { type: 'wall', x: 2988, y: 1190, width: 60 },
        { type: 'wall', x: 2988, y: 1256, width: 60 },
        { type: 'wall', x: 2988, y: 1586, width: 60 },
        { type: 'wall', x: 2988, y: 2048, width: 60 },
        { type: 'wall', x: 2988, y: 2114, width: 60 },
        { type: 'wall', x: 2988, y: 2180, width: 60 },
        { type: 'wall', x: 2988, y: 2246, width: 60 },
        { type: 'wall', x: 2988, y: 2312, width: 60 },
        { type: 'wall', x: 2988, y: 2576, width: 60 },
        { type: 'wall', x: 2988, y: 2642, width: 60 },
        { type: 'wall', x: 2988, y: 2708, width: 60 },
        { type: 'wall', x: 2988, y: 2774, width: 60 },
        { type: 'wall', x: 2988, y: 2840, width: 60 },
        { type: 'water', x: 1260, y: 200, width: 60 },
        { type: 'water', x: 1260, y: 266, width: 60 },
        { type: 'water', x: 1260, y: 332, width: 60 },
        { type: 'water', x: 1260, y: 398, width: 60 },
        { type: 'water', x: 1260, y: 596, width: 60 },
        { type: 'water', x: 1260, y: 728, width: 60 },
        { type: 'water', x: 1260, y: 2114, width: 60 },
        { type: 'water', x: 1260, y: 2180, width: 60 },
        { type: 'water', x: 1260, y: 2246, width: 60 },
        { type: 'water', x: 1260, y: 2312, width: 60 },
        { type: 'water', x: 1260, y: 2708, width: 60 },
        { type: 'water', x: 1260, y: 2774, width: 60 },
        { type: 'water', x: 1260, y: 2840, width: 60 },
        { type: 'water', x: 1260, y: 2906, width: 60 },
        { type: 'water', x: 1260, y: 2972, width: 60 },
        { type: 'water', x: 1260, y: 3038.0000000000005, width: 60 },
        { type: 'water', x: 1260, y: 3104.0000000000005, width: 60 },
        { type: 'water', x: 1260, y: 3170.0000000000005, width: 60 },
        { type: 'water', x: 1260, y: 3236.0000000000005, width: 60 },
        { type: 'water', x: 1692, y: 398, width: 60 },
        { type: 'water', x: 1692, y: 464, width: 60 },
        { type: 'water', x: 1692, y: 530, width: 60 },
        { type: 'water', x: 1692, y: 596, width: 60 },
        { type: 'water', x: 1692, y: 662, width: 60 },
        { type: 'water', x: 1692, y: 728, width: 60 },
        { type: 'water', x: 1692, y: 794, width: 60 },
        { type: 'water', x: 1692, y: 1058, width: 60 },
        { type: 'water', x: 1692, y: 1124, width: 60 },
        { type: 'water', x: 1692, y: 1190, width: 60 },
        { type: 'water', x: 1692, y: 1256, width: 60 },
        { type: 'water', x: 1692, y: 1322, width: 60 },
        { type: 'water', x: 1692, y: 1388, width: 60 },
        { type: 'water', x: 1692, y: 1454, width: 60 },
        { type: 'water', x: 1692, y: 1520, width: 60 },
        { type: 'water', x: 1692, y: 1586, width: 60 },
        { type: 'water', x: 1692, y: 1982.0000000000002, width: 60 },
        { type: 'water', x: 1692, y: 2048, width: 60 },
        { type: 'water', x: 1692, y: 2114, width: 60 },
        { type: 'water', x: 1692, y: 2180, width: 60 },
        { type: 'water', x: 1692, y: 2246, width: 60 },
        { type: 'water', x: 1692, y: 2312, width: 60 },
        { type: 'water', x: 1692, y: 2378, width: 60 },
        { type: 'water', x: 1692, y: 2642, width: 60 },
        { type: 'water', x: 1692, y: 2906, width: 60 },
        { type: 'water', x: 1692, y: 3038.0000000000005, width: 60 },
        { type: 'water', x: 2244, y: 464, width: 60 },
        { type: 'water', x: 2244, y: 530, width: 60 },
        { type: 'water', x: 2244, y: 662, width: 60 },
        { type: 'water', x: 2244, y: 728, width: 60 },
        { type: 'water', x: 2244, y: 794, width: 60 },
        { type: 'water', x: 2244, y: 860, width: 60 },
        { type: 'water', x: 2244, y: 926.0000000000001, width: 60 },
        { type: 'water', x: 2244, y: 992.0000000000001, width: 60 },
        { type: 'water', x: 2244, y: 1454, width: 60 },
        { type: 'water', x: 2244, y: 1520, width: 60 },
        { type: 'water', x: 2244, y: 1586, width: 60 },
        { type: 'water', x: 2244, y: 1652.0000000000002, width: 60 },
        { type: 'water', x: 2244, y: 1718.0000000000002, width: 60 },
        { type: 'water', x: 2244, y: 1784.0000000000002, width: 60 },
        { type: 'water', x: 2244, y: 1850.0000000000002, width: 60 },
        { type: 'water', x: 2244, y: 1916.0000000000002, width: 60 },
        { type: 'water', x: 2244, y: 1982.0000000000002, width: 60 },
        { type: 'water', x: 2244, y: 2048, width: 60 },
        { type: 'water', x: 2244, y: 2048, width: 60 },
        { type: 'water', x: 2244, y: 2114, width: 60 },
        { type: 'water', x: 2244, y: 2180, width: 60 },
        { type: 'water', x: 2244, y: 2246, width: 60 },
        { type: 'water', x: 2244, y: 2312, width: 60 },
        { type: 'water', x: 2244, y: 2378, width: 60 },
        { type: 'water', x: 2244, y: 2444, width: 60 },
        { type: 'water', x: 2748, y: 332, width: 60 },
        { type: 'water', x: 2748, y: 860, width: 60 },
        { type: 'water', x: 2748, y: 926.0000000000001, width: 60 },
        { type: 'water', x: 2748, y: 1124, width: 60 },
        { type: 'water', x: 2748, y: 1190, width: 60 },
        { type: 'water', x: 2748, y: 1256, width: 60 },
        { type: 'water', x: 2748, y: 1322, width: 60 },
        { type: 'water', x: 2748, y: 1388, width: 60 },
        { type: 'water', x: 2748, y: 1454, width: 60 },
        { type: 'water', x: 2748, y: 1520, width: 60 },
        { type: 'water', x: 2748, y: 1850.0000000000002, width: 60 },
        { type: 'water', x: 2748, y: 1916.0000000000002, width: 60 },
        { type: 'water', x: 2748, y: 1982.0000000000002, width: 60 },
        { type: 'water', x: 2748, y: 2048, width: 60 },
        { type: 'water', x: 2748, y: 2114, width: 60 },
        { type: 'water', x: 2748, y: 2180, width: 60 },
        { type: 'water', x: 2748, y: 2246, width: 60 },
        { type: 'water', x: 2748, y: 2312, width: 60 },
        { type: 'water', x: 2748, y: 2378, width: 60 },
        { type: 'water', x: 2748, y: 2774, width: 60 },
        { type: 'water', x: 2748, y: 2840, width: 60 },
        { type: 'water', x: 2748, y: 2906, width: 60 },
        { type: 'water', x: 2748, y: 2972, width: 60 },
        { type: 'water', x: 2748, y: 3038.0000000000005, width: 60 }
      ]
    };
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.forceOrientation(false, true);
  }
}
