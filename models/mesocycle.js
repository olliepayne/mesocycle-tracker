const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mesocycleSchema = new Schema({
  attribute: String,
  length: Number,
  startDate: Date,
  sessions: [{type: Schema.Types.ObjectId, ref: 'Session'}]
});

module.exports = mongoose.model('Mesocycle', mesocycleSchema);