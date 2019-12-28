var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var createRouter = require('./routes/create');
var usersRouter = require('./routes/users');
var updateRouter = require('./routes/update');
var deleteRouter = require('./routes/delete');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var userHelper = require("./controllers/user");

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
// import passport and passport-jwt modules
const passport = require('passport');
const passportJWT = require('passport-jwt');
// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'wowwow';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static(path.join(__dirname, 'public')));


// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  let user = getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);
app.use(passport.initialize());

app.post('/login', async function(req, res, next) { 
   res.setHeader('Content-Type', 'text/json')
  const { name, password } = req.body;
  if (name && password) {
    // we get the user with the name and save the resolved promise
    let user = await userHelper.getUser({ username: name});
    if (!user) {
      res.status(401).json({ msg: 'No such user found', user });
    }
   if (user.password === password) {
      // from now on we’ll identify the user by the id and the id is
// the only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: 'ok', token: token });
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  }else{
     res.status(401).json({ msg: 'no body' });
  }
});

app.use('/', indexRouter);
app.use('/api/v1/create', createRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/update', updateRouter);
app.use('/api/v1/delete', deleteRouter);

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
