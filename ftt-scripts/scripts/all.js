const asistentes = require('./asistentes');
const experiencias = require('./experiencias');
const grupos = require('./grupos');
const download = require('./download');

const year = 2019;

download(year, 2, 'experiencias', () => {

  download(year, 3, 'asistentes', () => {
    asistentes(year);
    experiencias(year);
    grupos(year);
  });

});
