import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export interface IReligion extends mongoose.Document{
  name: string,
  denomination: string,
  // description: string,
  // monotheistic: boolean,
  // historicOrigin: string,
  // symbolicEmblem: string,
};

let ReligionSchema = new mongoose.Schema({
  name: String,
  denomination: String,
  // description: String,
  // monotheistic: Boolean,
  // historicOrigin: String,
  // symbolicEmblem: String,
});


export const Religion = mongoose.model<IReligion>("Religion", ReligionSchema);