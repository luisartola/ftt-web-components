 const excelToAsistenteModel = (e) => ({
   id: e.gsx$id.$t,
   twitter: e.gsx$twitter.$t,
   vienede: e.gsx$vienede.$t,
   foto: e.gsx$foto.$t,
   nombre: e.gsx$nombre.$t,
 });

module.exports = {
  excelToAsistenteModel
};