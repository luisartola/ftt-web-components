const {read, write} = require('./utils/file-utils.js');
const {byId} = require('./utils/grupo-utils.js');
const {excelToAsistenteModel2019, excelToAsistenteModel} = require('./utils/asistente-utils.js');
const {byEmail, excelToExperienciaModel2019, excelToExperienciaModel} = require('./utils/experiencia-utils.js');

module.exports = year => {
    const asistentes = read('asistentes', year);
    const experiencias = read('experiencias', year);
    const grupos = read('grupos', year);

    const content = asistentes
        .map(e => Object.assign(
            excelToAsistenteModel2019(e),
            {experiencia: excelToExperienciaModel2019(experiencias.find(byEmail(e.gsx$email.$t)))},
            {grupo: grupos.find(byId(e.gsx$grupo.$t))}
        ));

    write('asistentes', year, content);
};