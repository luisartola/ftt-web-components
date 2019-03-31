/*
// promise pipeline version
export const doQuery = async (query, callback) => {
  fetch(query.url)
  .then(res => res.json)
  .then(callback); // beware of captain obvious
};
*/

export const doQuery = async (query, callback) => {
  const res = await fetch(query.url);
  callback(await res.json());
};

export const doTextQuery = async (query, callback) => {
  const res = await fetch(query.url);
  callback(await res.text());
};

export const groupContentQuery = (year, n) => {
  return ({url: `https://raw.githubusercontent.com/Programania/ftt/master/${year}/grupos/grupo${n}.md`});
};