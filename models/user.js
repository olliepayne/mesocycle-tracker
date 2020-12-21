const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  alias: String,
  email: String,
  avatar: String,
  googleId: String,
  bio: String,
  friends: [{type: Schema.Types.ObjectId, ref: "User"}],
  mesocycles: [{type: Schema.Types.ObjectId, ref: 'Mesocycle'}],
});

module.exports = mongoose.model('User', userSchema);