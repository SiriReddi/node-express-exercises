var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', { 
    locals:{
      title: 'Application Ranking!' 
    },
    partials:{
      partial:"partial-index"
    }
  });
});

module.exports = router;
