var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');



var app = express();

var users = require('./routes/users');

app.use(favicon(__dirname + '/../client/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../client')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/api/users', users);

app.use('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client')
  })
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
