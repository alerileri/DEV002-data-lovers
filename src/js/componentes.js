import data from "../data/pokemon/pokemon.js"
const pokemones = data.pokemon;
import { filterPokemonByNumber, ordenarArrayAlfabeticamente } from "../data.js";

const modalAdd = document.querySelector("#modalAdd");

//Constante para asignar un icon a los diferentes tipos
const iconType = {
  bug: '<i class="fa-solid fa-bug" style="color: seagreen"></i>',
  dark: '<i class="fa-solid fa-skull style="color: dimgray"></i>',
  dragon: '<i class="fa-solid fa-dragon" style="color: dodgerblue"></i>',
  electric: '<i class="fa-solid fa-bolt" style="color: gold"></i>',
  fairy: '<i class="fa-solid fa-star" style="color: hotpink"></i>',
  fighting: '<i class="fa-solid fa-hand-fist" style="color: firebrick"></i>',
  fire: '<i class="fa-solid fa-fire" style="color: orange"></i>',
  flying: '<i class="fa-solid fa-dove" style="color: thistle"></i>',
  ghost: '<i class="fa-solid fa-ghost" style="color: slateblue"></i>',
  grass: '<i class="fa-brands fa-pagelines" style="color: yellowgreen"></i>',
  ground: '<i class="fa-solid fa-mountain" style="color: sienna"></i>',
  ice: '<i class="fa-regular fa-snowflake" style="color: powderblue"></i>',
  normal: '<i class="fa-solid fa-cube" style="color: mediumpurple"></i>',
  poison: '<i class="fa-solid fa-wine-bottle" style="color: purple"></i>',
  psychic: '<i class="fa-solid fa-brain" style="color: pink"></i>',
  rock: '<i class="fa-solid fa-gem" style="color: lightsteelblue"></i>',
  steel: '<i class="fa-solid fa-shield" style="color: darkgray"></i>',
  water: '<i class="fa-solid fa-droplet" style="color: aqua"></i>',

}

export const visualizarPokemones = (arrayPokemones) => {    //esta función limpia al padre(listado-pokemones) y renderiza los componentes hijos(pokemon-item)
  const listadoPokemones = document.getElementById('listado-pokemones')
  listadoPokemones.innerHTML = ''; //limpia el componente padre


  const numeroResultados = document.getElementById('numeroResultados')
  const porcentajeResultados = document.getElementById('porcentajeResultados')
  numeroResultados.innerHTML = `total pokemones: ${arrayPokemones.length}`;
  porcentajeResultados.innerHTML = `porcentaje pokemones encontrados: ${Math.round(arrayPokemones.length * 100 / 251)} %`;



  const htmlContainerPokemon = arrayPokemones.map(poke => {
    //incrustando la tarjeta pokemon--item con javaScript a html usando InnerHTML

    const pokemoncitoContainer = document.createElement("div")
    //para crear un div

    const iconContainer = document.createElement("figure")
    iconContainer.classList.add("icon-item")
    pokemoncitoContainer.appendChild(iconContainer)

    pokemoncitoContainer.classList.add("pokemon-item")
    //para crear una clase en el div
    const type = poke.type;
    console.log(type);
    const iconTypsito1 = iconType[type[0]];
    const iconTypsito2 = iconType[type[1]];




    pokemoncitoContainer.innerHTML = `
     
    <div id=numberTypeContainer><h3 class="numCard">${poke.num} </h3> <h3 class="typeCard">${iconTypsito1} ${iconTypsito2 ? iconTypsito2 : ""}</h3></div>
    <img src="${poke.img}" >
    <h3>${poke.name}</h3>
   `;

    pokemoncitoContainer.addEventListener("click", () => visualizarModalPokemon(poke.num))
    return pokemoncitoContainer
  });
  /*listadoPokemones.innerHTML = htmlContainerPokemones variable que incrusta el listado de pokemones*/
  listadoPokemones.append(...htmlContainerPokemon) /*Operador spread son los ... y funciona para "esparcir" el array sin tener que escribir cada uno de sus elementos*/
};// el método append le está agregando a listadoPokemones elementos hijos, que 
//son todos los elementos del array de htmlContainerPokemon


const openModal = () => {
  modalAdd.style.display = 'flex';
}
export const closeModal = () => {
  modalAdd.style.display = 'none';
}

export function visualizarModalPokemon(numerito) {
  const [pokemon] = filterPokemonByNumber(numerito, pokemones);

  const type = pokemon.type;
  const iconTypsito1 = iconType[type[0]];
  const iconTypsito2 = iconType[type[1]];

  openModal()


  const itemPokemon = document.getElementById('modalContainerPokemon');
 
 //Función Contenido de la ventana modal
  const modalPokemon = `
  <div class="informacion-pokemon" id="modal-pokemon">
   <h1 id="nombreModal"> ${pokemon.name} </h3>
   <img  src="${pokemon.img}" >
   <h3>${pokemon.num} </h3>  <p>${iconTypsito1} ${iconTypsito2 ? iconTypsito2 : ""}</p> 
   <h3>Type: ${pokemon.type} </h3>
   <h3 id="aboutModal">About: ${pokemon.about}</h3>

    <h2 class="subCategoriesModal">MODO COMBATE</h2>
    <h3 class="subCategoriesModal">Fortalezas:${pokemon.resistant} </h3>
    <h3 class="subCategoriesModal">Debilidades:${pokemon.weaknesses} </h3>
  </div>
 `;

  itemPokemon.innerHTML = modalPokemon;
}

export function ordenarPokemonesPorNombre() {
  let pokemonesOrdenados = pokemones.sort(ordenarArrayAlfabeticamente);
  visualizarPokemones(pokemonesOrdenados);
}
