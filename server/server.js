var path = require('path');
var fs = require('fs');

let dpath = path.join(__dirname, "../data.json");

console.log(dpath);

fs.readFile(dpath,{
    encoding: "UTF-8"
}, (err, data) => {
    var myinfo = JSON.parse(data);

    console.log(myinfo);
    console.log(myinfo.location);
})