var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('resume/index');
});

module.exports = router;
