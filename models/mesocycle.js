const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mesocycleSchema = new Schema({
  attribute: String,
  length: {type: Number, min: 1},
  startDate: Date,
  dateStr: String,
  endDateStr: String,
  active: {type: Boolean, default: false},
  sessions: [{type: Schema.Types.ObjectId, ref: 'Session'}]
});

module.exports = mongoose.model('Mesocycle', mesocycleSchema);