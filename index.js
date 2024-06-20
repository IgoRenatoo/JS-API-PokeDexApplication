const pokemonContainer = document.querySelector('#pokemon-container');
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function pokemonData(pokemon, i){  
  return `
    <ul style="display: flex; flex-direction: column; padding-left: 20px; gap: 10px;">
    <span id="pokemon-name">Nome:${pokemon} </span>
    <img style="height: 100px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg" alt="">
    </ul>`;
}
pokeApi.getAll().then((listApi) => {
  var pokemonList = [];
    for (let i=0; i < listApi.length; i++){
      const pokemonName = firstLetterUpper(listApi[i].name);
      pokemonList.push(pokemonName);
      pokemonContainer.innerHTML += pokemonData(pokemonName, i+1);
    }
})