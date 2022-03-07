const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

/*
 Conexión a la base de datos mongoose
 */
const mongodb = "mongodb://localhost:/TallerNodejs";
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/*
 Definimos los nombres de las rutas de nuestra página.
 */
app.use("/", require("./routes/index"));
app.use("/game", require("./routes/users"));
app.use('/createGame', require("./routes/createGame"));
app.use('/deleteGame', require('./routes/deleteGame'));
app.use('/game', require("./routes/gameWinner"));
app.use('/startGame', require("./routes/startGame"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
