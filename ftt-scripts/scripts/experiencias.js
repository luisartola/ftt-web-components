const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const {excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {byEmail, excelToExperienciaModel} = require('./utils/experiencia-utils.js');

module.exports = year => {

  const asistentes = read('asistentes', year);
  const experiencias = read('experiencias', year);
  const grupos = read('grupos', year);

  const content = experiencias.map(e => {
    const asistenteExcel = asistentes
        .find(entry => e.gsx$tucorreoelectrógeno.$t.toLowerCase() === entry.gsx$email.$t.toLowerCase());

    const target = excelToExperienciaModel(e);
    const asistente = excelToAsistenteModel(asistenteExcel);
    const grupo = grupos.find(byId(asistenteExcel.gsx$grupo.$t));

    return Object.assign(
        target,
        {asistente: asistente},
        {grupo: grupo},
    );
  });

  write('experiencias', year, content);

};