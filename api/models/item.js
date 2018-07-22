var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name:  String,
  description:  String,
  price: Number,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item
