import {Religions} from './../Religions';
namespace main.seeds {
  export class ReligionsSeeds {
    public seeds;
    constructor () {
      this.seeds= [
        {name: 'Judaism', denomination: 'string', description: 'string', monotheistic: true,
          historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Christianity', denomination: 'string', description: 'string', monotheistic: true,
          historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Islam', denomination: 'string', description: 'string', monotheistic: true,
          historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Monotheist', denomination: 'string', description: 'string', monotheistic: true,
          historicOrigin: 'string', symbolicEmblem: 'string',},
        {name: 'Polytheist', denomination: 'string', description: 'string', monotheistic: false,
          historicOrigin: 'string', symbolicEmblem: 'string',}
      ]

    }

    randomHex() {
      return Math.floor(Math.random()*16777215).toString(16);
    }

    createSeeds() {
      this.seeds.forEach((v) => {
        Religions.create(v, (e) => {
          if(e) throw new Error(e);

        });
      });
    }
  }
}

export const ReligionsSeeds = main.seeds.ReligionsSeeds;
