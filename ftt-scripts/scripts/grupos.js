const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const {excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {byEmail, excelToExperienciaModel} = require('./utils/experiencia-utils.js');

const year = 2018;

const asistentes = read('asistentes', year);
const experiencias = read('experiencias', year);
const grupos = read('grupos', year);

const content = grupos.map(grupo => {
  const asistentesGrupo =asistentes.filter(e => {
    return e.gsx$grupo.$t === grupo.id
  }).map(e => {
    return Object.assign(
      excelToAsistenteModel(e),
      {experiencia: excelToExperienciaModel(experiencias.find(byEmail(e.gsx$email.$t)))}
    );
  });

  return Object.assign(
    grupo,
    {asistentes: asistentesGrupo}
  );

});

write('grupos', year, content);