const PORT = process.env.PORT || 5001;
var express = require('express');
var app = express();
const path = require('path')

app.use('/views', express.static('./views'));
app.use('/routes', express.static('./routes'));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.render('index.ejs');
})

app.get('/download',function (req,res) { 
   res.location('back')
 })

app.listen(PORT, 'localhost', function(){
    console.log('Server started successfully. PORT @ ' + P5001ORT)
})