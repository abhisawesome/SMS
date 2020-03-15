var fetch = require('node-fetch');
const url = 'https://api.msg91.com/api/v2/sendsms';
const data = {
    sender: 'SOCKET',
    route: '4',
    country: '91',
    sms:
        [{ message: '<YOUR MESSAGE>', to: ['1234567890'] }]
}
fetch(url, {
    method: 'POST', body: JSON.stringify(data), "headers": {
        "authkey": '<AUTH KEY>',
        "content-type": "application/json"
    }
}).then(response => response.json()).then(value=>{
    console.log(value)
})