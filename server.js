var express = require ('express');
var app = express();
var request = require('request');
var port = 3000;
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

require ('dotenv').config();

app.listen(port, function (req, res){
    console.log ('working on port 3000', port);
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/giphy/:id', function (req, res){
    var options ={
        url: 'http://api.giphy.com/v1/gifs/search?q=' + req.params + '&api_key='+ process.env.GIPHY_API_KEY + '&limit=5'
    }

    request(options, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body); 
        res.status(200).send(JSON.parse(body));
    })
})