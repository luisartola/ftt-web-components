import {capturar} from "./state";

test("No puedes capturar dos veces el mismo", () => {

  const asistente = {nombre: 'asistente1'};
  const state = { capturados : [asistente]};
  const nextState = capturar(asistente)(state);
  expect(nextState.capturados.length).toBe(1);

});

test("No puedes tener más de diez", () => {

  const state = { capturados : [
    {nombre: 'asistente01'},
    {nombre: 'asistente02'},
    {nombre: 'asistente03'},
    {nombre: 'asistente04'},
    {nombre: 'asistente05'},
    {nombre: 'asistente06'},
    {nombre: 'asistente07'},
    {nombre: 'asistente08'},
    {nombre: 'asistente09'},
    {nombre: 'asistente10'},
    ]};

  const nextState = capturar({nombre: 'asistente11'})(state);

  expect(nextState.capturados.length).toBe(10);

});