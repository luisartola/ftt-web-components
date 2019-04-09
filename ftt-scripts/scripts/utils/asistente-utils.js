 const excelToAsistenteModel = (e) => ({
   id: 2018000 + parseInt(e.gsx$id.$t, 10),
   twitter: e.gsx$twitter.$t,
   vienede: e.gsx$vienede.$t,
   foto: e.gsx$foto.$t,
   nombre: e.gsx$nombre.$t,
 });

 const excelToAsistenteModel2019 = (e) => {
   return ({
     id: Date.parse(e.gsx$u.$t),
     nombre: e.gsx$tunombrecompleto.$t,
     foto: null,
     twitter: null,
     vienede: null
   });
 };

module.exports = {
  excelToAsistenteModel,
  excelToAsistenteModel2019
};