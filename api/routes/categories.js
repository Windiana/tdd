var express = require('express');
var router = express.Router();
var Category = require('../models/category')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Category.find({}, function(err, categories) {
    if (err) {
      res.json({error: err})
    } else {
      res.json(categories)
    }
  });
});

router.post('/', function(req, res, next) {
  Category.create({
    name: req.body.name
  }, function (err, category) {
    if (err) {
      res.json({error: err})
    } else {
      res.json(category)
    }
  });
});

module.exports = router;
