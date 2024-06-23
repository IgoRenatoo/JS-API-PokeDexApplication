const infoApi = {};

infoApi.requestUrl = (pokemon) => fetch(pokemon.url).then((response) => response.json())

infoApi.getAllName = (offset = 0, limit = 100) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(URL)
      .then((response) => response.json())
      .then((bodyJson) => bodyJson.results)
      .then((pokemons) => pokemons.map(infoApi.requestUrl))
      .then((pokemonDetails) => Promise.all(pokemonDetails))
      .catch((error) => console.log(`Error RC name não encontrado ~> ${error}`))
      .finally(() => console.log('Requisição name concluída com sucesso!'));
}