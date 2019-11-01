const fs = require('fs')


const dataBuffer = fs.readFileSync('1-Json.json');
dataJSON = dataBuffer.toString();
data = JSON.parse(dataJSON);

data.planet = 'Mars';

const dataWrite = JSON.stringify(data)
fs.writeFileSync('1-Json.json', dataWrite);
