const firstLetterUpper = (string) => 
  string.split('-')
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(' ');


const infoApi = {};

infoApi.requestUrl = (pokemon) => fetch(pokemon.url).then((response) => response.json())

infoApi.getPokemons = (offset, limit) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  return fetch(URL)
      .then((response) => response.json())
      .then((bodyJson) => bodyJson.results)
      .then((pokemons) => pokemons.map(infoApi.requestUrl))
      .then((pokemonDetails) => Promise.all(pokemonDetails))
      .catch((error) => console.log(`Error RC name não encontrado ~> ${error}`))
      .finally(() => console.log('Requisição name concluída com sucesso!'));
}
    
const amountPokemon = document.querySelector('#amountPokemon');
const btnLoadMore = document.querySelector('#btnLoadMore');
const listArea = document.querySelector('#listArea');
const searchField = document.querySelector('#searchField');

let offset = 0; // Pokémon inicial da paginação
let limit = 0; // Limite por paginação
let allPokemons = []; // Armazenar todos os Pokémons carregados

amountPokemon.addEventListener('change', () => {
  if (limit === 0) {
    limit = Number(amountPokemon.value);
    btnLoadMore.style.display = limit === 1025 ? 'none' : 'block';

    infoApi.getPokemons(offset, limit).then((listPokemons = []) => {
      allPokemons = listPokemons;
      listArea.innerHTML = listPokemons.map(value => 
        infoPokemon(firstLetterUpper(value.name), value.types, value.height, value.weight, value.id)).join('');
    });
  } else {
    const resposta = confirm("Para alterar a exibição é necessário atualizar a página, deseja atualizar?");
    if (resposta) {
      location.reload();
    } else {
      amountPokemon.value = limit;        
    }
  }
});

function infoPokemon(nome, types, height, weight, id) {
  if(types.length == 1){
    var typePokemon = 
        `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>
         <span>Tipo: Null </span>`
  } else {
    var typePokemon = 
    `<span>Tipo: ${firstLetterUpper(types[0].type.name)} </span>
     <span>Tipo: ${firstLetterUpper(types[1].type.name)} </span>`
  }

  return `
    <li class="pokemon-data ${types[0].type.name}">
      <section>
        <div>Nome: ${nome}</div>
        <div id="pokemonType" class="pokemon-type">
          ${typePokemon}
          <span>Altura: ${(height * 8).toFixed(2)} cm</span>
          <span>Peso: ${weight} KG</span>
          <span>ID: ${id}</span>
        </div>
        <a href="https://igorenatoo.github.io/JS-API-PokeDexApplication/src/Selected/pokemon-selected.html">
          <input id="pokemonSelection${id}" class="button-global" type="button" onclick="saveID(this.id)" value="Selecionar">
        </a>            
      </section>
      <section class="pokemon-img">
        <img src="https://repositorio.sbrauble.com/arquivos/up/pokedex/${id}.svg" alt="${nome}">
      </section>
    </li>`;
}

btnLoadMore.addEventListener('click', () => {
  offset += limit;
  if (offset < 1025 && limit > 0) {
    if (offset >= 1000) {
      limit = 1025 - offset;
      btnLoadMore.style.display = 'none';
    }
    
    infoApi.getPokemons(offset, limit).then((listPokemons = []) => {
      listArea.innerHTML += listPokemons.map(value => 
        infoPokemon(firstLetterUpper(value.name), value.types, value.height, value.weight, value.id)).join('');
    });
  }
});

searchField.addEventListener('input', function() {
  const searchData = searchField.value.toLowerCase();
  const filteredData = allPokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchData));
    
  listArea.innerHTML = filteredData.map(value => 
    infoPokemon(firstLetterUpper(value.name), value.types, value.height, value.weight, value.id)).join('');
});

function saveID(thisID) {
  const id = thisID.slice(16) - 1;
  localStorage.setItem('ID', id);
}
