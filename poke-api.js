const pokeApi = {};

pokeApi.getAll = (offset = 0, limit = 20) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(URL)
      .then((response) => response.json())
      .then((bodyJson) => bodyJson.results)
      .catch((error) => console.log(`Error encontrado ~> ${error}`))
      .finally(() => console.log('Requisição concluída com sucesso!'));
}