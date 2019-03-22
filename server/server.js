const path = require('path');
const fs = require('fs');
const request = require('request');

let dpath = path.join(__dirname, "../data.json");

request('https://reddit.com/r/popular.json', (err, resultfromrequest, body) => {
    if(err) console.log(err);

    fs.writeFile(dpath, resultfromrequest.body, err => {
        if(err) console.log(err);
    })
});