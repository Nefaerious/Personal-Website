var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('etc/game');
});
router.get('/gamejs', (req, res) => {
  res.render('etc/game.js');
});

module.exports = router;
