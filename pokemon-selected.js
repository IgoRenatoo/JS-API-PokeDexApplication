const statusArea = document.querySelector('#statusPokemon');
const ID = Number(localStorage.getItem('ID'));
const firstLetterUpper = (string) =>
  string.split('-').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');

function statusPokemon(Nome, Habilidade1, Habilidade2, HP, Attack, Defense, SpecialAttack, SpecialDefense, Speed) {
  return `
        <h3 style="color: rgb(0, 187, 255);">Pokemon ~> ${Nome} </h3>
        <ol> <span>Habilidades</span>
        <li>
          ${Habilidade1}
        </li>
        <li>
          ${Habilidade2}
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
    </section>
    <section>
      <img style="width: 200px;"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${ID+1}.gif" alt="">`
};
infoApi.getAllName().then((x = []) => {
  statusArea.innerHTML = statusPokemon(
  firstLetterUpper(x[ID].name),  
  firstLetterUpper(x[ID].abilities[0].ability.name),
  firstLetterUpper(x[ID].abilities[1].ability.name),
  x[ID].stats[0].base_stat,
  x[ID].stats[1].base_stat,
  x[ID].stats[2].base_stat,
  x[ID].stats[3].base_stat,
  x[ID].stats[4].base_stat,
  x[ID].stats[5].base_stat,
  )
});