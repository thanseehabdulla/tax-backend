var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var customersRouter = require("./routes/customers");
var currencyRouter = require("./routes/currency");
var invoicesRouter = require("./routes/invoice");
var taxRouter = require("./routes/tax");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var userHelper = require("./controllers/user");
const bcrypt = require("bcrypt");

var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
// import passport and passport-jwt modules
const passport = require("passport");
const passportJWT = require("passport-jwt");
// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static(path.join(__dirname, "public")));

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = userHelper.getUser({ id: jwt_payload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
// use the strategy
passport.use(strategy);
app.use(passport.initialize());

app.post("/login", async function(req, res, next) {
  const { usr_email, usr_password } = req.body;
  if (usr_email && usr_password) {
    // we get the user with the name and save the resolved promise
    let user = await userHelper.getUser({ usr_email: usr_email });
    if (!user) {
      res.status(401).json({ msg: "No such user found", user });
    }
    bcrypt.compare(usr_password, user.usr_password, function(err, result) {
      if (result) {
        // from now on we’ll identify the user by the id and the id is
        // the only personalized value that goes into our token
        let payload = { id: user.usr_id };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ msg: "ok", token: token });
      } else {
        res.status(401).json({ msg: "Password is incorrect" });
      }
    });
  } else {
    res.status(401).json({ msg: "no body" });
  }
});

const saltRounds = 10;

app.post("/register", function(req, res, next) {
  const {
    usr_name,
    usr_password,
    usr_api_password,
    usr_ssn,
    usr_email,
    usr_type,
    usr_isactive,
    usr_status
  } = req.body;
  bcrypt.hash(usr_password, saltRounds, function(err, usr_password) {
    // Store hash in your password DB.

    userHelper
      .createUser({
        usr_name,
        usr_password,
        usr_api_password,
        usr_ssn,
        usr_email,
        usr_type,
        usr_isactive,
        usr_status
      })
      .then(user => res.json({ user, msg: "account created successfully" }))
      .catch(e => {
        res.status(401).json(e);
      });
  });
});

app.post(
  "/changepassword",
  passport.authenticate("jwt", { session: false }),
  function(req, res, next) {
    const { usr_email, usr_password, usr_api_password } = req.body;
    bcrypt.hash(usr_password, saltRounds, function(err, usr_password) {
      // Store hash in your password DB.
      userHelper
        .updatePasswordUser({ usr_email, usr_password, usr_api_password })
        .then(user => {
          if (user[0]) res.json({ user, msg: "password changed successfully" });
          else res.json({ user, msg: "password change error" });
        })
        .catch(e => {
          res.status(401).json(e);
        });
    });
  }
);

// protected route
app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    res.json({
      msg: "Congrats! You are seeing this because you are authorized"
    });
  }
);

app.use("/", indexRouter);

app.use(
  "/api/v1/users",
  passport.authenticate("jwt", { session: false }),
  usersRouter
);

app.use(
  "/api/v1/customers",
  passport.authenticate("jwt", { session: false }),
  customersRouter
);

app.use(
  "/api/v1/currency",
  passport.authenticate("jwt", { session: false }),
  currencyRouter
);

app.use(
  "/api/v1/tax",
  passport.authenticate("jwt", { session: false }),
  taxRouter
);

app.use(
  "/api/v1/invoices",
  passport.authenticate("jwt", { session: false }),
  invoicesRouter
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
