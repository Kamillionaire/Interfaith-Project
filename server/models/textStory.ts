import * as mongoose from 'mongoose';
let Schema = mongoose.Schema;

export interface ITextPost extends mongoose.Document{
  title: string;
  content: string;

};

let TextPostSchema = new Schema({
  title: String,
  content: String
});

export const TextPost = mongoose.model<ITextPost>("TextPost", TextPostSchema);
