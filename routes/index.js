var express = require('express');
var router = express.Router();
var functions = require('./functions');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/beers', async function(req, res, next) {
  try {
    const beerName = await functions.getRandomBeer(req)
    res.render('beers', { beer: beerName });
    // res.json(beerName);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
