var express = require('express');
var app = express();
var http = require('http').Server(app);
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

var port = process.env.PORT || 3000;

app.use(sassMiddleware({
   /* Options */
   src: path.join(__dirname, 'sass'),
   dest: path.join(__dirname, 'stylesheets'),
   debug: true,
   outputStyle: 'compressed',
   prefix:  '/stylesheets'
}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.set('port', port);

app.use('/', require('./routes/index.js'));
app.use('/stylesheets', express.static(path.join(__dirname, 'stylesheets')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));


http.listen(port, () => {
  console.log('listening on *:' + port);
});
