const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const {excelToAsistenteModel2019, excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {byEmail, excelToExperienciaModel2019, excelToExperienciaModel} = require('./utils/experiencia-utils.js');

module.exports = year => {

    const asistentes = read('asistentes', year);
    const experiencias = read('experiencias', year);
    const grupos = read('grupos', year);
    const content = asistentes
        .map(e => {
          const email = year === 2018 ? e.gsx$email.$t : e.gsx$email.$t;
          const experiencia = experiencias.find(byEmail(email));

          return Object.assign(
              year === 2018 ? excelToAsistenteModel(e) : excelToAsistenteModel2019(e),
              {experiencia: year === 2018 ? excelToExperienciaModel(experiencia) : excelToExperienciaModel2019(experiencia)},
              {grupo: grupos.find(byId(e.gsx$grupo.$t))}
          );
        });

    write('asistentes', year, content);
};