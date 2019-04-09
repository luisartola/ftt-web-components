 const excelToAsistenteModel = (e) => ({
   id: e.gsx$id.$t,
   twitter: e.gsx$twitter.$t,
   vienede: e.gsx$vienede.$t,
   foto: e.gsx$foto.$t,
   nombre: e.gsx$nombre.$t,
 });

 const excelToAsistenteModel2019 = (e) => {
   return ({
     id: e.gsx$u.$t,
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