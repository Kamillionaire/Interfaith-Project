import {Religion} from './../Religions';
namespace seeds {
  export class ReligionsSeeds {
    public seeds;
    constructor () {
      this.seeds = [
        {name: 'Judaism',
        description: 'string', historicOrigin: 'string', symbolicEmblem: 'string'},
        {name: 'Christianity', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Islam', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Islam', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Buddhism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Buddhism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Buddhism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Buddhism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Buddhism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Buddhism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Hinduism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Hinduism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Hinduism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Hinduism', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Monotheist Belief', symbolicEmblem: 'string',},
        {name: 'Polytheist Belief', symbolicEmblem: 'string',},
        {name: 'other'},
      ];

    }

    public randomHex() {
      return Math.floor(Math.random() * 16777215).toString(16);
    }

    public createSeeds() {
      this.seeds.forEach((v) => {
        Religion.create(v, (e) => {
          if (e) throw new Error(e);

        });
      });
    }
  }
}

export const ReligionsSeeds = seeds.ReligionsSeeds;
