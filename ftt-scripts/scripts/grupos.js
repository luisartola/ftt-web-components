const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const { excelToAsistenteModel2019, excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {byEmail, excelToExperienciaModel2019, excelToExperienciaModel} = require('./utils/experiencia-utils.js');


module.exports = year => {
  const asistentes = read('asistentes', year);
  const experiencias = read('experiencias', year);
  const grupos = read('grupos', year);

  const content = grupos.map(grupo => {
    const asistentesGrupo = asistentes.filter(e => {
      return e.gsx$grupo.$t === grupo.id
    }).map(e => {
      let experiencia = experiencias.find(byEmail(e.gsx$email.$t));
      return Object.assign(
          year === 2018 ? excelToAsistenteModel(e): excelToAsistenteModel2019(e),
          {experiencia: year === 2018 ?  excelToExperienciaModel(experiencia) : excelToExperienciaModel2019(experiencia)}
      );
    });

    return Object.assign(
        grupo,
        {asistentes: asistentesGrupo}
    );

  });

  write('grupos', year, content);
};