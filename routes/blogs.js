var express = require('express');
var router = express.Router();

router.get('/Blogs/', (req, res) => {
  res.render('index');
});

module.exports = router;
