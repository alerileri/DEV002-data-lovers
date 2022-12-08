import data from "../data/pokemon/pokemon.js"
const pokemones = data.pokemon;
import { filterPokemonByNumber } from "../data.js";

const modalAdd = document.querySelector("#modalAdd");

export const visualizarPokemones = (arrayPokemones) => {    //esta función limpia al padre(listado-pokemones) y renderiza los componentes hijos(pokemon-item)
  const listadoPokemones = document.getElementById('listado-pokemones')
  listadoPokemones.innerHTML = ''; //limpia el componente padre
  const htmlContainerPokemon = arrayPokemones.map(poke => {
    //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML
    const pokemoncitoContainer = document.createElement("div")
    pokemoncitoContainer.classList.add("pokemon-item")
    pokemoncitoContainer.innerHTML = `
      <h3>el pokemon se llama ${poke.name} ${poke.num} </h3>
      <img  src="${poke.img}" >
   `;
    //pokemoncitoContainer.addEventListener("click", visualizarModalPokemones(poke.num))
    pokemoncitoContainer.addEventListener("click", () => visualizarModalPokemon(poke.num))
    return pokemoncitoContainer
  });
  // console.log(htmlContainerPokemones);
 /*listadoPokemones.innerHTML = htmlContainerPokemones variable que incrusta el listado de pokemones*/
 listadoPokemones.append(...htmlContainerPokemon) /*Operador spread son los ... y funciona para "esparcir" el array sin tener que escribir cada uno de sus elementos*/
};// el método append le está agregando a listadoPokemones elementos hijos, que 
//son todos los elementos del array de htmlContainerPokemon



//1. Crear los divs en html
//2. En el main crear variable de abrir y cerrar modal
//3. 





const openModal = () => {
  modalAdd.style.display = 'flex';
}
export const closeModal = () => {
  modalAdd.style.display = 'none';
}

export function visualizarModalPokemon(numerito) {
  const [pokemon] = filterPokemonByNumber(numerito, pokemones);
  //console.log(pokemon)
  openModal()


  const itemPokemon = document.getElementById('modalContainerPokemon');
  const modalPokemon = `
  <div class="informacion-pokemon" id="modal-pokemon">
    <h3>el pokemon se llama ${pokemon.name} ${pokemon.num} </h3>
    <img  src="${pokemon.img}" >
    <h2>CARACTERÍSTICAS ESPECÍFICAS</h2>
    <h3>About: ${pokemon.about}</h3>
    <img class="imgAcerca" src="img/imgFiguritas/acerca.jpeg" alt="foquito">
  </div>
 `;
  itemPokemon.innerHTML = modalPokemon;
}