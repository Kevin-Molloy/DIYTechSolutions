const mongoose = require('mongoose');


const partSchema = new mongoose.Schema({
  _partName: {type: String, required: true},
  _partType: {type: String},
  _description: {type: String},
  _price: {type: Number, "default": 1, min: 1, max: 999.99},
  _quantity: {type: Number, "default": 1, min: 0, max: 5}

}, { collection: 'parts' });

module.exports = mongoose.model('Parts', partSchema);
