var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// Initialize DB connection after app is created
require('./app_api/models/db');

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Load routes after middleware
const apiRoutes = require('./app_api/routes/index');
const serverRoutes = require('./app_server/routes/index');

// Front-end routes
app.use('/', serverRoutes);

app.use('/api', apiRoutes);

// Angular fallback route - serve index.html for Angular routes
app.get('/angular*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'build', 'browser', 'index.html'));
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
