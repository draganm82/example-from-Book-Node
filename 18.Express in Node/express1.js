var express = require ('express');

var app = express();
app.enable('trust proxy');
app.disabled('strict routing');
app.set('view engine', 'pug');

console.log(app);
