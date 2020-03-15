var fetch = require('node-fetch');
var urlencode = require('urlencode');

const url = 'https://api.textlocal.in/send?';
var msg = urlencode('<YOUR MESSAGE>');
var number = '<NUMBER>';
var apikey = '<API KEY>';

var sender = 'TXTLCL';
var data = 'apikey=' + apikey + '&sender=' + sender + '&numbers=' + number + '&message=' + msg
fetch(`${url}${data}`).then(response => response.json()).then(value=>{
    console.log(value)
})