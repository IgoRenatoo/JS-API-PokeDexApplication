const pokemonContainer = document.querySelector('#pokemon-container');
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function pokemonData(pokemon, url){
  return `<ul style="display: flex; flex-direction: column; padding-left: 20px; gap: 10px;">
        <div>
          <label for="nome">Name: </label>
          <span id="pokemon-name">${pokemon} </span>
        </div>
        <div>
          <label for="type">Type: </label>
          <span id="pokemon-type"> ${url} </span>
        </div>
      </ul>`;
}
  pokeApi.getAll().then((pokemonList) => {
    for (let i=0; i < pokemonList.length; i++){
      const pokemonName = firstLetterUpper(pokemonList[i].name);
      const pokemonUrl = pokemonList[i].url;
      pokemonContainer.innerHTML += pokemonData(pokemonName, pokemonUrl);
    }
  })
