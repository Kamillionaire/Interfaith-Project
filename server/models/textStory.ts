import * as mongoose from 'mongoose';
import {IUser} from './Users';
import * as User from './Users';
let Schema = mongoose.Schema;

export interface ITextPost extends mongoose.Document{
  title: string;
  content: string;
  user: Array<IUser>;
};

let TextPostSchema = new Schema({
  title: String,
  content: String,
  user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

export const TextPost = mongoose.model<ITextPost>("TextPost", TextPostSchema);
