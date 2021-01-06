const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  description: String,
  date: Date,
  dateStr: String
})

module.exports = mongoose.model('Session', sessionSchema)