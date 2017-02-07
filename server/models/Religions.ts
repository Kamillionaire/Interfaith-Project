import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export interface IReligions extends mongoose.Document{
  name: string,
  denomination: string,
  description: string,
  monotheistic: boolean,
  historicOrigin: string,
  symbolicEmblem: string,
};

let ReligionsSchema = new mongoose.Schema({
  name: String,
  denomination: String,
  description: String,
  monotheistic: Boolean,
  historicOrigin: String,
  symbolicEmblem: String,
});


export const Religions = mongoose.model<IReligions>("Religions", ReligionsSchema);
