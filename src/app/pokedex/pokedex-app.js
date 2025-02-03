import { firstLetterUpper }  from '../services/service-app.js'
const pokedexContainer = document.querySelector('#pokedexContainer')
const limit = 30
let offset = 0

const getUrlPokemons = async (offset, limit) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data.results.map(pokemon => pokemon.url)
  } catch (error) {
    console.error(`Erro ao consumir API ~> ${error}`)
  }
}

const displayPokemons = async (offset, limit) => {
  const pokemonUrl = await getUrlPokemons(offset, limit)
  
  // Limpa o conteúdo atual
  pokedexContainer.innerHTML = ''

  // Faz a requisição de cada Pokémon para obter os dados
  const pokemonData = await Promise.all(pokemonUrl.map(url => fetch(url).then(response => response.json())))

  // Adiciona todos os Pokémon na tela
  pokemonData.forEach(pokemonData => {
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('pokemon')

    // Adiciona as classes de tipo ao elemento
    pokemonElement.classList.add(pokemonData.types[0].type.name)

    pokemonElement.innerHTML = `
      <img src="https://repositorio.sbrauble.com/arquivos/up/pokedex/${pokemonData.id}.svg" alt="${pokemonData.name}">
      <h3>${firstLetterUpper(pokemonData.name)}</h3>
      <p>ID: ${pokemonData.id}</p>
      <p>Tipo: ${pokemonData.types.map(typePokemon => firstLetterUpper(typePokemon.type.name)).join(', ')}</p>
    `

    pokedexContainer.appendChild(pokemonElement)
  })
}

// Estrutura de Paginação
const loadNextPage = () => {
  offset += limit
  displayPokemons(offset, limit)
}
const loadPreviousPage = () => {
  if (offset >= limit) {
    offset -= limit
    displayPokemons(offset, limit)
  }
}
document.querySelector('#prevBtn').addEventListener('click', loadPreviousPage)
document.querySelector('#nextBtn').addEventListener('click', loadNextPage)

displayPokemons(offset, limit)
