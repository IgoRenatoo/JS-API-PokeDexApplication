const listArea = document.querySelector('#listArea');
const firstLetterUpper = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function infoPokemon(nome, types, height, weight, i ){
  var typePokemon = 0;
  height *= 8;
  if(types.length == 1){    
    typePokemon = `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>`
  } else {
    typePokemon = `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>
      <span>Tipo: ${firstLetterUpper(types[1].type.name)}</span>`
  }
  return `
          <ul class="pokemon-data">
          <section>
          <div >Nome: ${nome} </div>
          <div id="pokemonType" class="pokemon-type">
          ${typePokemon}
          <span>Altura: ${height} cm </span>
          <span>Peso: ${weight} KG </span>
          <span>ID: ${i} </span>
            </div>
            <input style="margin: 5px 30px; padding: 2px 3px; border-radius: 7px;" type="button" value="Selecionar">
          </section>
          <section class="pokemon-img" >
            <img src=" https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg"
            alt="">
          </section>
        </ul>`;
}
infoApi.getAllName().then((listName = []) => listArea.innerHTML = listName.map((value, i) => 
  infoPokemon(firstLetterUpper(value.name), value.types, value.height, value.weight,  i)).join(''))