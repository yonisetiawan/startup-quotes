var express = require('express');
var router = express.Router();
const modelsQuote = require('../models/index')



/* GET home page. */
router.get('/', function(req, res, next) {
    modelsQuote.find({},function(err, result) {
        if(err)res.send(err)
        else res.send(result)
    })
});

router.post('/', function(req, res, next){
  var addQuote = new modelsQuote ({
    imgurl: req.body.imgurl
  })
  addQuote.save(function(err, result) {
    if(err)res.send(err)
    else res.send(result)
  })
})

module.exports = router;
