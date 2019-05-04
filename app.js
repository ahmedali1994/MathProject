const express = require('express'),
      body_parser = require('body-parser'),
      app     = express();


app.use(body_parser.urlencoded({ extended: true }));     
app.set("view engine", "ejs");
app.use(express.static("Public"));


app.get('/',function(req,res){
    res.render('home');
});











app.listen(3000, function(){
console.log('Server is ruining');
});