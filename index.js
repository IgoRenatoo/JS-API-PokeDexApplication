var offset = 0;
var limit = 20;
const urlApi = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
const apiCall = fetch(urlApi);
const pokemonId = document.querySelector('#name');

function pokemonData(pokemon, url){
  return `<ul style="display: flex; flex-direction: column; padding-left: 20px; gap: 10px;">
        <div>
          <label for="name">Name: </label>
          <span id="name">${pokemon} </span>
        </div>
        <div>
          <label for="type">Type: </label>
          <span id="type"> ${url} </span>
        </div>
      </ul>`;
}

apiCall
  .then((response) => response.json())
  .then((bodyJson) => bodyJson.results)
  .then((pokemonList) => {
    for (let i=0; i < pokemonList.length; i++){
      const pokemonName = pokemonList[i].name;
      const pokemonUrl = pokemonList[i].url;
      pokemonId.innerHTML += pokemonData(pokemonName, pokemonUrl);
      console.log(`${pokemonList[i].name} ${i}` )
    }
  })
  .catch((error) => console.log(`Error encontrado ~> ${error}`))
  .finally(() => console.log('Requisição concluída com sucesso!'));