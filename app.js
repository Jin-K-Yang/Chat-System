//view for any template that needed
//controllers for any database connection
//routes/index.js for form a html

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//get any variable needed
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var memberRouter = require("./routes/member");
var personalSetRouter = require("./routes/personalSet");
var verifyRouter = require("./routes/verification");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/member", memberRouter);
app.use("/verify", verifyRouter);
app.use("/users/personalSet",personalSetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
