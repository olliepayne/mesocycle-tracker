const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mesocycleSchema = new Schema({
  attribute: String,
  length: {type: Number, min: 1},
  startDate: Date,
  active: {type: Boolean, default: false}
});

module.exports = mongoose.model('Mesocycle', mesocycleSchema);