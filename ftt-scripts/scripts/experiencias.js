const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const {excelToAsistenteModel2019, excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {excelToExperienciaModel2019, byEmail, excelToExperienciaModel} = require('./utils/experiencia-utils.js');

module.exports = year => {

  const asistentes = read('asistentes', year);
  const experiencias = read('experiencias', year);
  const grupos = read('grupos', year);

  const content = experiencias
      .filter(e => {
          return !!e.gsx$email && typeof e.gsx$email.$t === "string" && e.gsx$email.$t.length > 0;
      })
      .map(e => {
    console.log("Buscando a :", e.gsx$email.$t);
    const asistenteExcel = asistentes
        .find(entry => e.gsx$email.$t.toLowerCase().trim() === entry.gsx$email.$t.toLowerCase().trim());

    const target = year === 2018 ?  excelToExperienciaModel(e): excelToExperienciaModel2019(e);
    const asistente = year === 2018 ? excelToAsistenteModel(asistenteExcel): excelToAsistenteModel2019(asistenteExcel);
    const grupo = grupos.find(byId(asistenteExcel.gsx$grupo.$t));

    return Object.assign(
        target,
        {asistente: asistente},
        {grupo: grupo},
    );
  });

  write('experiencias', year, content);

};