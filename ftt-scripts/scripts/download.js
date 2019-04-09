const https = require('https');
const fs = require('fs');
const conf = require('../data/conf.js');

module.exports = (year, tab, filename, callback) => {

  https.get('https://spreadsheets.google.com/feeds/list/' + conf[year] + '/' + tab + '/public/values?alt=json', (resp) => {

    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      let message = JSON.parse(data);
      fs.writeFileSync(__dirname + '/../data/' + year + '/' + filename + '.json', JSON.stringify(message, null, 2));
      callback();
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
};