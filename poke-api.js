const infoApi = {};
infoApi.getAllName = (offset = 0, limit = 10) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(URL)
      .then((response) => response.json())
      .then((bodyJson) => bodyJson.results)
      .catch((error) => console.log(`Error RC name encontrado ~> ${error}`))
      .finally(() => console.log('Requisição name concluída com sucesso!'));
}
infoApi.getAllStatus = () => {
  const URL = `https://pokeapi.co/api/v2/pokemon/1`;
  return fetch(URL)
    .then((response) => response.json())
    .then((typePokemon) => typePokemon.types)
    .catch((error) => console.log(`Error RC status encontrado ~> ${error}`))
    .finally(() => console.log('Requisição status concluída com sucesso!')); 
}
infoApi.getAllStatus().then((x) => console.log(x));