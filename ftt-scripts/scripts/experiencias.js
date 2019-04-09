const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const {excelToAsistenteModel2019, excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {excelToExperienciaModel2019, byEmail, excelToExperienciaModel} = require('./utils/experiencia-utils.js');

module.exports = year => {

  const asistentes = read('asistentes', year);
  const experiencias = read('experiencias', year);
  const grupos = read('grupos', year);

  const content = experiencias.map(e => {
    const asistenteExcel = asistentes
        .find(entry => e.gsx$email.$t.toLowerCase() === entry.gsx$email.$t.toLowerCase());

    const target = excelToExperienciaModel2019(e);
      console.log(e.gsx$email.$t.toLowerCase());
    const asistente = excelToAsistenteModel2019(asistenteExcel);
    const grupo = grupos.find(byId(asistenteExcel.gsx$grupo.$t));

    return Object.assign(
        target,
        {asistente: asistente},
        {grupo: grupo},
    );
  });

  write('experiencias', year, content);

};