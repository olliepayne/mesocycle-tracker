const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  description: String,
  sessionDate: Date
})

module.exports = mongoose.model('Session', sessionSchema)