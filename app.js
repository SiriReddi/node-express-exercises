var express = require('express');
var es6Renderer = require('express-es6-template-engine');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'),
 appRouter = require('./routes/app_rankrouter');

var app = express();

app.engine('html', es6Renderer);
app.set('views','./views');
app.set("view engine", "html");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/add', appRouter);

module.exports = app;
