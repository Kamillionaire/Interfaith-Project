import {Religion} from './../Religions';
namespace main.seeds {
  export class ReligionsSeeds {
    public seeds;
    constructor () {
      this.seeds= [
        {name: 'Judaism', monotheistic: true,},
        // denomination: 'string', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',
        {name: 'Christianity', monotheistic: true,},
        // denomination: 'string', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Islam', monotheistic: true,},
        // denomination: 'string', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Monotheist', monotheistic: true,},
        // denomination: 'string', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Polytheist', monotheistic: false,},
        // denomination: 'string', description: 'string', historicOrigin: 'string', symbolicEmblem: 'string',}
      ]

    }

    randomHex() {
      return Math.floor(Math.random()*16777215).toString(16);
    }

    createSeeds() {
      this.seeds.forEach((v) => {
        Religion.create(v, (e) => {
          if(e) throw new Error(e);

        });
      });
    }
  }
}

export const ReligionsSeeds = main.seeds.ReligionsSeeds;