var express = require('express');
var app = express();
var http = require('http').Server(app);
var sassMiddleware = require('node-sass-middleware');

var port = process.env.PORT || 3000;

app.use(sassMiddleware({
   /* Options */
   src: path.join(__dirname, 'sass'),
   dest: path.join(__dirname, 'stylesheets'),
   debug: true,
   outputStyle: 'compressed',
   prefix:  '/stylesheets'
}));

app.set('port', port);
app.use(express.static('public'));

http.listen(port, function() {
  console.log('listening on *:' + port);
});
