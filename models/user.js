const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  mesocycles: [{type: Schema.Types.ObjectId, ref: 'Mesocycle'}],
  googleID: String
});

module.exports = mongoose.model('User', userSchema);