const asistentes = require('./asistentes');
const experiencias = require('./experiencias');
const grupos = require('./grupos');
const download = require('./download');

 download(2019, 2, 'experiencias', () => {
   download(2019, 3, 'asistentes', () => {
     asistentes(2019);
     experiencias(2019);
     grupos(2019);
   });
 });

 /*
download(2018, 1, 'experiencias', () => {
  download(2018, 2, 'asistentes', () => {
    asistentes(2018);
    experiencias(2018);
    grupos(2018);
  });
});
*/
