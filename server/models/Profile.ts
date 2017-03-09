import * as mongoose from 'mongoose';

export interface IProfile extends mongoose.Document {
  email: string;
  dob: string;
  state: string;
  picture: string;
  religion: string;
  denomination: string;
  monotheistic: Boolean;
  username: string;
  // sex:string;

};

let Profile = new mongoose.Schema({
  email: {type: String, required: true, unique: true, lowercase: true },
  dob: {type: String, required: true},
  state: {type: String, required: true},
  picture: String,
  denomination: String,
  monotheistic: Boolean,
  religion: {type: String, ref: 'Religion', required: true},
  username: {type: String, required: true, unique: true, lowercase: true}
  // sex:String,

});

export default mongoose.model <IProfile> ('Profile', Profile);
