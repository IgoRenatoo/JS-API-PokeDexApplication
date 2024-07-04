const firstLetterUpper = (string) => string.split('-').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
const listArea = document.querySelector('#listArea');
const amountPokemon = document.querySelector('#amountPokemon')
let typePokemon;
let ID;
let offset = 0;
let limit = 0;
console.log(amountPokemon.value)

amountPokemon.addEventListener('change', () => {
  limit = amountPokemon.value;
  infoApi.getPokemons(offset, limit).then((listPokemons = []) => listArea.innerHTML = 
listPokemons.map((value, i) => infoPokemon(firstLetterUpper(value.name), value.types, value.height, value.weight, i)).join(''))
})



function infoPokemon(nome, types, height, weight, i ){
  if(types.length == 1){
    typePokemon = `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>`
  } else {
    typePokemon = 
    `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>
     <span>Tipo: ${firstLetterUpper(types[1].type.name)} </span>`
  }
  return `
          <li class="pokemon-data ${types[0].type.name}">
          <section>
            <div >Nome: ${nome} </div>
            <div id="pokemonType" class="pokemon-type">
              ${typePokemon}
              <span>Altura: ${height*8} cm </span>
              <span span>Peso: ${weight} KG </span>
              <span>ID: ${i} </span>
            </div>            
            <a href="./pokemon-selected.html">
              <input id="pokemonSelection${i}" class="button-global" type="button" onclick="saveID(this.id)" value="Selecionar">
            </a>            
          </section>
          <section class="pokemon-img" >
            <img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${offset+i+1}.svg"
            alt="">
          </section>
        </li>`;
}
function saveID(id){
  ID = id.slice(16);
  localStorage.setItem('ID', ID)
}