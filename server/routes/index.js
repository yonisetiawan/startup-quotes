var express = require('express');
var router = express.Router();
const modelsQuote = require('../models/index')



/* GET home page. */
router.get('/api/quotes', function(req, res, next) {
    modelsQuote.find({}, function(err, result) {
        if (err) res.send(err)
        else res.send(result)
    })
});

router.post('/api/quotes', function(req, res, next) {
    var addQuote = new modelsQuote({
        imgurl: req.body.imgurl
    })
    addQuote.save(function(err, result) {
        if (err) res.send(err)
        else res.send(result)
    })
})

router.post('/seedData', function(req, res, next) {
    var arrImg = [{
            "imgurl": "http://68.media.tumblr.com/f460f7e086f2f851600e475eb805da6f/tumblr_nthfr1Ge7c1qz6pqio1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/5746746b9d1dca1046aa277d4c8dc940/tumblr_ntsm7w18lx1qz6pqio1_r1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/4841ef504bc257288c0df50ea9d1d224/tumblr_nt1y5fuGon1qz6pqio1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/d02d5fae25b74727013114bca1b0c6ee/tumblr_nswkn9Yly91qz6pqio1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/def77b13b3021c535a9d37b85dceced1/tumblr_nswd5rAPzg1qz6pqio1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/9fb5b440ab4335ac2d3c143425ce6880/tumblr_nsnuyxEudq1qz6pqio1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/bc0698c00b443d0e5c6b9b814d74bbd9/tumblr_nfywvtqr2C1qz6pqio1_r1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/055ee03d4267eaebe9f15bfe0cbf1ba3/tumblr_n5iyq5x17t1qz6pqio2_r1_500.png",
        },
        {
            "imgurl": "http://68.media.tumblr.com/5e272412d94e807237d7191c37652ed5/tumblr_n42o47Ju9H1qz6pqio2_r1_500.png",
        }
    ]

    for (var i = 0; i < arrImg.length; i++) {
      var addQuote = new modelsQuote({
          imgurl: arrImg[i].imgurl
      })
      addQuote.save(function(err, result) {
          if (err){
            res.send(err)
          }
      })
    }
    res.send("Seed Data Success")
})

module.exports = router;
