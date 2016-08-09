var express = require("express"),
    snmp = require("./routes/snmp.js");

var app = express();

app.use("/snmp", snmp);

//!---error handlers---!//
// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.message);
});

var listener = app.listen(9001, function() {
  console.log("Listening on +:" + listener.address().port);
});

module.exports = app;
