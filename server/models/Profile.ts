import * as mongoose from 'mongoose'

let Schema = new mongoose.Schema

export interface IProfile extends mongoose.Document {
  email: {type: String, required: true, unique: true, lowercase: true },
  dob: {type: String, required: true},
  state: {type: String, required: true},
  picture: String,
  religion: {type: String, ref: 'Religion', required: true},
  denomination: String,
  // monotheistic: Boolean,
  username: {type: String, required: true, unique: true, lowercase: true},
  // sex:String,

}

let Profile = new mongoose.Schema({
  email: {type: String, required: true, unique: true, lowercase: true },
  dob: {type: String, required: true},
  state: {type: String, required: true},
  picture: String,
  denomination: String,
  // monotheistic: Boolean,
  religion: {type: String, ref: 'Religion', required: true},
  username: {type: String, required: true, unique: true, lowercase: true},
  // sex:String,

});

export default mongoose.model <IProfile> ('Profile',Profile);
