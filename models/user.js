const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  bio: String,
  mesocycles: [{type: Schema.Types.ObjectId, ref: 'Mesocycle'}],
});

module.exports = mongoose.model('User', userSchema);