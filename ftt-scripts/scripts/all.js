const asistentes = require('./asistentes');
const experiencias = require('./experiencias');
const grupos = require('./grupos');
const download = require('./download');

const year = 2018;

download(year, 1, 'experiencias', () => {

  download(year, 2, 'asistentes', () => {
    asistentes(year);
    experiencias(year);
    grupos(year);
  });

});
