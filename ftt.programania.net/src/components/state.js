import Store from "repatch";

export const initialState = () => {
  if (window.localStorage.getItem('state') !== null)
    return JSON.parse(window.localStorage.getItem('state'));
  return {counter: 0, capturados: []};
};

const logger = store => next => reducer => {
  const state = store.getState();
  const nextState = reducer(state);
  console.log(state, nextState);
  return next(_ => nextState);
};

const localStorageMiddleware = store => next => reducer => {
  const nextState = reducer(store.getState());
  window.localStorage.setItem('state', JSON.stringify(nextState));
  return next(_ => nextState);
};

const repatch = new Store(initialState())
  .addMiddleware(logger)
  .addMiddleware(localStorageMiddleware);


export const estaCapturado = asistente => {
  const state = repatch.getState();
  return state.capturados
      .map(asistente => asistente.id)
      .includes(asistente.id);
};


export const liberar = asistente => state => ({
  ...state,
  capturados: [... state.capturados.filter(entry => entry.id !== asistente.id)]
});


export const capturar = asistente => state => ({
  ...state,
  capturados: [... state.capturados, asistente]
});

export const dispatch = (action) => {
  repatch.dispatch(action)
};

export const subscribe = callback => {
  callback(repatch.getState());
  return repatch.subscribe(() => {
    callback(repatch.getState());
  });
};