const fs = require('fs');

const read = (entity, year) => {
  if (entity === 'grupos') {
    return require(__dirname + '/../../data/' + year + '/grupos.js');
  }
  return JSON.parse(fs.readFileSync(__dirname + '/../../data/' + year + '/' + entity + '.json', 'utf8')).feed.entry;
};

const write = (entity, year, content) =>
  fs.writeFileSync(
    `../../ftt.programania.net/data/${year}/${entity}.json`,
    JSON.stringify(content, null, 2)
  );

module.exports = {
  read,
  write
};