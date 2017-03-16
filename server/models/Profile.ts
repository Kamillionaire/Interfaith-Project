import * as mongoose from 'mongoose';

export interface IProfile extends mongoose.Document {
  email: string;
  dob: string;
  state: string;
  picture: string;
  religion: string;
  description: string;
  username: string;
  gender: string;

};

let Profile = new mongoose.Schema({
  email: {type: String, required: true, unique: true, lowercase: true },
  dob: {type: String, required: true},
  state: {type: String, required: true},
  emblem: String,
  description: String,
  religion: {type: String, ref: 'Religion', required: true},
  username: {type: String, required: true, unique: true, lowercase: true},
  gender: String,
});

export default mongoose.model <IProfile> ('Profile', Profile);
