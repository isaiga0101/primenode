var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  var contents = fs.readFileSync('primes.json')
  var primes = JSON.parse(contents)
  res.render('index', { title: 'Express', number: primes.now, lastnumber: primes.last })
});

module.exports = router;
