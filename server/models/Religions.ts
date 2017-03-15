import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export interface IReligion extends mongoose.Document {
  name: string;
  historicOrigin: string;
  emblem: string;
  description: string;


};

let ReligionSchema = new mongoose.Schema({
  name: String,
  historicOrigin: String,
  emblem: String,
  description: String,

});


export const Religion = mongoose.model<IReligion>('Religion', ReligionSchema);
