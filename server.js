const PORT = process.env.PORT || 5001;
var express = require('express');
var app = express();
const path = require('path')

app.use('/views', express.static('./views'));
app.use('/routes', express.static('./routes'));
app.set('view engine', 'ejs');

app.use('/', function(req,res) {
  res.render('index.ejs');
})

app.listen(PORT, 'localhost', function(){
    console.log('Server started successfully. PORT @ ' + PORT)
})