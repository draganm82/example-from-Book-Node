var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost/",
function(err, db) {
  listDatabases(function(err, databases){
    console.log("Before Add Database List: ");
    console.log(databases);
  });
});
