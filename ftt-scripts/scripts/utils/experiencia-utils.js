const getUrls = require('get-urls');

const extractUrls = experiencia => {
  const text = experiencia.gsx$_chk2m.$t;
  const urls = getUrls(text);
  return Array.from(urls);
};


const excelToExperienciaModel2019 = experiencia => {

  return !experiencia ? {} : {
    title: experiencia.gsx$title.$t,
    why: experiencia.gsx$why.$t,
    when: experiencia.gsx$when.$t,
    how: 'no tenemos',
    links: [
      experiencia.gsx$link1.$t,
      experiencia.gsx$link2.$t,
      experiencia.gsx$link3.$t
    ]
  };
};

const excelToExperienciaModel = experiencia => {
  return !experiencia ? {} : {
    title: experiencia.gsx$cuéntanosalgotécnicatecnologíawhateverquehayasutilizadoentudíaadíaesteúltimoaño.$t,
    why: experiencia.gsx$_cpzh4.$t,
    when: experiencia.gsx$_cre1l.$t,
    how: experiencia.gsx$_chk2m.$t,
    links: extractUrls(experiencia)
    //email: experiencia.gsx$tucorreoelectrógeno.$t
  };
};

const byEmail = email => entry =>
  entry.gsx$email.$t.toLowerCase() === email.toLowerCase();

module.exports = {
  byEmail,
  excelToExperienciaModel,
  excelToExperienciaModel2019
};