const firstLetterUpper = (string) => 
  string.split('-').map((value) => 
    value.charAt(0).toUpperCase() + value.slice(1)
  ).join(' ');

const mainContent = document.querySelector('#mainContent');
const ID = Number(localStorage.getItem('ID'));

infoApi.getPokemons(offset = 0, limit = 200).then((pokemons = []) => {  
  const pokemon = pokemons[ID];
  
  const noAbility = 'Não habilitado';
  const abilities = pokemon.abilities.map((ability) => 
    firstLetterUpper(ability.ability.name)
  );

  while (abilities.length < 3) {
    abilities.push(noAbility);
  }

  const tipo = pokemon.types[0].type.name;

  mainContent.innerHTML = statusPokemon(
    firstLetterUpper(pokemon.name),
    abilities[0],
    abilities[1],
    abilities[2],
    pokemon.stats[0].base_stat,
    pokemon.stats[1].base_stat,
    pokemon.stats[2].base_stat,
    pokemon.stats[3].base_stat,
    pokemon.stats[4].base_stat,
    pokemon.stats[5].base_stat,
    tipo
  );
});

function statusPokemon(Nome, Habilidade1, Habilidade2, Habilidade3, HP, Attack, Defense, SpecialAttack, SpecialDefense, Speed, tipo) {
  return `
    <section id="statusPokemon" class="pokemon-data ${tipo}">
      <h2>${Nome}</h2>
      <div>
        <span>Habilidades:</span>
        <ul>
          <li>${Habilidade1}</li>
          <li>${Habilidade2}</li>
          <li>${Habilidade3}</li>
        </ul>
      </div>
      <div>
        <span>Atributos:</span>
        <ul>
          <li>HP: ${HP}</li>
          <li>Attack: ${Attack}</li>
          <li>Defense: ${Defense}</li>
          <li>Special Attack: ${SpecialAttack}</li>
          <li>Special Defense: ${SpecialDefense}</li>
          <li>Speed: ${Speed}</li>
        </ul>
      </div>
      <img style="width: 200px;" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${ID+1}.gif" alt="">
      <a href="../.././index.html">
        <input class="button-global" type="button" value="Voltar">
      </a>
    </section>`;
}
