var express = require ('express');
var app = express();
var request = require('request');
require ('dotenv').config();
var port = 3000;

app.use(express.static('public'));

app.listen(port, function (req, res){
    console.log ('working on port 3000', port);
})


app.get('/giphy', function (req, res){
    var options ={
        url: 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key='+process.env.GIPHY_API_KEY+'&limit=5',
        method: 'GET'
    }

    request(options, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body); 
        res.status(200).send(JSON.parse(body));
    })
})