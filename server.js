var express = require('express');

// Create our app
var app = express();
var PORT = process.env.PORT || 3000;
app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    } else{
        next();
    }
});
app.use(express.static('public'));

app.listen(PORT || 3000, function () {
  console.log('Express server is up on port '+PORT);
});
