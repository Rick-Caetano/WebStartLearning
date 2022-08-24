var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "rickCaetano",
  password: "ikkki0016134"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});