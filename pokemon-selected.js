const firstLetterUpper = (string) => string.split('-').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
const mainContent = document.querySelector('#mainContent');
const ID = Number(localStorage.getItem('ID'));

function statusPokemon(Nome, Habilidade1, Habilidade2, Habilidade3, HP, Attack, Defense, SpecialAttack, SpecialDefense, Speed) {
  return `
    <section id="statusPokemon" class="pokemon-data ">
      <h3>Pokemon ~> ${Nome} </h3>
      <ol> <span>Habilidades</span>
        <li>
          ${Habilidade1}
        </li>
        <li>
          ${Habilidade2}
        </li>
        <li>
          ${Habilidade3}
        </li>
      </ol>
      <ul> <span>Atributos</span>
        <li>HP: ${HP} </li>
        <li>Attack: ${Attack} </li>
        <li>Defense: ${Defense} </li>
        <li>Special Attack: ${SpecialAttack} </li>
        <li>Special Defense: ${SpecialDefense} </li>
        <li>Speed: ${Speed} </li>
      </ul>
      <img style="width: 200px;"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${ID+1}.gif" alt="">
      <a href="./index.html">
        <input class="button-global" type="button" value="Voltar">
      </a>
    </section>`
};
infoApi.getPokemons(offset = 0, limit = 649).then((x = []) => {
  console.log(x[ID].name, ID, x[ID].abilities.length)
  noAbility = 'Não habilitado';
  if(x[ID].abilities.length == 1) {    
    mainContent.innerHTML = statusPokemon(
      firstLetterUpper(x[ID].name),
      firstLetterUpper(x[ID].abilities[0].ability.name),
      noAbility,
      noAbility,
      x[ID].stats[0].base_stat,
      x[ID].stats[1].base_stat,
      x[ID].stats[2].base_stat,
      x[ID].stats[3].base_stat,
      x[ID].stats[4].base_stat,
      x[ID].stats[5].base_stat,
      )
  }
  if(x[ID].abilities.length == 2) {
    mainContent.innerHTML = statusPokemon(
      firstLetterUpper(x[ID].name),
      firstLetterUpper(x[ID].abilities[0].ability.name),
      firstLetterUpper(x[ID].abilities[1].ability.name),
      noAbility,
      x[ID].stats[0].base_stat,
      x[ID].stats[1].base_stat,
      x[ID].stats[2].base_stat,
      x[ID].stats[3].base_stat,
      x[ID].stats[4].base_stat,
      x[ID].stats[5].base_stat,
      )
  }
  if(x[ID].abilities.length == 3) {
    mainContent.innerHTML = statusPokemon(
      firstLetterUpper(x[ID].name),
      firstLetterUpper(x[ID].abilities[0].ability.name),
      firstLetterUpper(x[ID].abilities[1].ability.name),
      firstLetterUpper(x[ID].abilities[2].ability.name),
      x[ID].stats[0].base_stat,
      x[ID].stats[1].base_stat,
      x[ID].stats[2].base_stat,
      x[ID].stats[3].base_stat,
      x[ID].stats[4].base_stat,
      x[ID].stats[5].base_stat,
      )
  }
});