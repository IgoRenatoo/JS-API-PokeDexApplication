const pokemonContainer = document.querySelector('#pokemon-container');
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function pokemonData(pokemon, i){  
  return `
    <ul style="display: flex; flex-direction: column; padding-left: 20px; gap: 10px;">
    <span id="pokemon-name">Nome:${pokemon} </span>
    <img style="height: 100px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg" alt="">
    </ul>`;
}
pokeApi.getAll().then((listApi) => {
  const pokemonList = listApi;
  pokemonList.map((value, i) => {
    pokemonContainer.innerHTML += pokemonData(firstLetterUpper(pokemonList[i].name), i);
  })
  console.log(pokemonList)
})