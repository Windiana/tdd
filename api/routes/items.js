var express = require('express');
var router = express.Router();
var Item = require('../models/item')
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  Item.find()
  .populate('category')
  .exec(function(err, items) {
    res.status(200).json(items)
  })
});

router.get('/category/:cat_id', function(req, res, next) {
  Item.find({
    category: req.params.cat_id
  })
  .populate('category')
  .exec(function(err, items) {
    res.json(items)
  })
});

router.post('/', function(req, res, next) {
  Item.create({
    name:  req.body.name,
    description:  req.body.description,
    price: req.body.price,
    category: req.body.category
  }, function (err, item) {
    if (err) {
      res.json({error: err})
    } else {
      res.status(200).json(item)
    }
  });
});

module.exports = router;
