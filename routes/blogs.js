var express = require('express');
var router = express.Router();

router.get('/blogs', (req, res) => {
  res.render('/blogs/');
});

module.exports = router;
