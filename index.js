const pokemonList = document.querySelector('#pokemonList');
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function pokemonData(pokemon, i){  
  return `
    <ul style="display: flex; flex-direction: column; padding-left: 20px; gap: 10px;">
    <span id="pokemon-name">Nome: ${pokemon} </span>
    <img style="height: 100px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg" alt="">
    </ul>`;
}
infoApi.getAllName().then((listApi = []) => {
  pokemonList.innerHTML = listApi.map((value, i) => pokemonData(firstLetterUpper(value.name), i)).join('');
})