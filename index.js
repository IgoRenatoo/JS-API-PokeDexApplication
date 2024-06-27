const listArea = document.querySelector('#listArea');
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);
let ID;

function infoPokemon(nome, types, height, weight, i ){
  height *= 8;
  let typePokemon;
  if(types.length == 1){    
    typePokemon = `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>`
  } else {
    typePokemon = `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>
      <span>Tipo: ${firstLetterUpper(types[1].type.name)}</span>`
  }
  return `
          <li class="pokemon-data">
          <section>
            <div >Nome: ${nome} </div>
            <div id="pokemonType" class="pokemon-type">
              ${typePokemon}
              <span>Altura: ${height} cm </span>
              <span span>Peso: ${weight} KG </span>
              <span>ID: ${i} </span>
            </div>            
            <a href="./pokemon-selected.html">
              <input id="pokemonSelection${i}" class="button-global" type="button" onclick="saveID(this.id)" value="Selecionar">
            </a>            
          </section>
          <section class="pokemon-img" >
            <img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg"
            alt="">
          </section>
        </li>`;
}
function saveID(id){
  ID = id.charAt(16)+id.charAt(17);
  localStorage.setItem('ID', ID)
}
infoApi.getAllName().then((listName = []) => listArea.innerHTML = listName.map((value, i) => 
  infoPokemon(firstLetterUpper(value.name), value.types, value.height, value.weight,  i)).join(''))