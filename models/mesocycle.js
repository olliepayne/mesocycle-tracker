const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mesocycleSchema = new Schema({
  attribute: String,
  length: {type: Number, min: 1},
  startDate: Date,
  active: {type: Boolean, default: false},
  sessions: {type: mongoose.Schema.Types.ObjectId, ref: 'Session'}
});

module.exports = mongoose.model('Mesocycle', mesocycleSchema);