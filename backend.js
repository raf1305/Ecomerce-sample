const express = require('express');
const app = express();
//var router = express.Router();
const port = process.env.PORT || 5000;

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1305",
  database: "world"
});
con.connect();


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
    res.send('YOUR EXPRESS BACKEND IS CONNECTED TO REACT');
  });

app.get('/', function(req, res, next) {
    res.send('backend is responding with a resource');
  });
  
app.get('/category', function(req, res, next) {
    con.query('select * from world.city', function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
     
      res.send(results);
  });
  });
app.get('/All', function(req, res, next) {
    con.query('select * from world.city', function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
     
      res.send(results);
  });
  });
  app.get('/Order', function(req, res, next) { 
      res.send('Order Completed');
  });
  
  
  
  app.get('/:id', function(req, res, next) {
    //console.log(req.params.id);
    var countrycode=req.params.id.toString();
    var query='select * from world.city where CountryCode="'+countrycode+'"';
    con.query(query, function (error, results, fields) {
      if (error) throw error;
      //console.log(results);
     
      res.send(results);
  });
  });
  