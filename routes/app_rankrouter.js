var express = require('express');
var router = express.Router(),
appModel = require("../models/app_model");

/* GET home page. */
router.get('/', async function(req, res, next) {

    const appData = await appModel.getAllapptopics();
    const rankData = await appModel.getAllranks();
    
    console.log("appData", appData);
    console.log("rank data", rankData);
   
  res.render('template', { 
    locals:{
      title: 'App Ranks!',
      appdata: appData,
      rankData: rankData
    },
    partials:{
      partial:"partial-app_rank"
    }
  });
});

router.post("/", async (req,res) => {
    console.log("Request Body", req.body);
    for(let key in req.body){
        
        appModel.update(key,req.body[key]);
    }
    res.status(200).redirect('/add');
    
});

module.exports = router;
