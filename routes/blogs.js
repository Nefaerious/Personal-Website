var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('blogs/index');
});

module.exports = router;
