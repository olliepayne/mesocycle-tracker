const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  description: String,
  date: Date
});

const mesocycleSchema = new Schema({
  attribute: String,
  length: Number,
  startDate: Date,
  endDate: Date,
  sessions: [sessionSchema]
});

const userSchema = new Schema({
  name: String,
  email: String,
  mesocycles: [mesocycleSchema],
  googleID: String
});

module.exports = mongoose.model('User', userSchema);