/*PARA MOSTRAR LOS DATOS EN LA PANTALLA interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers), ....*/

 //IMPORTACIÓN DE MÓDULOS
 import { buscarPorInput, buscarPorRarity, buscarPorTipo } from './data.js';
 import { visualizarPokemones,closeModal, closeModalGrafica, ordenarPokemonesPorNombre, ordenarPokemonesZA, visualizarModalGrafica } from './js/componentes.js';
 import data from "../data/pokemon/pokemon.js"
 
 const pokemones = data.pokemon;
 //Llamado a la función visualizarPokemones para mostrar todas las cards por defecto en la página principal
 visualizarPokemones(pokemones);
 
 //Función cerrar modal pokemon al hacer clic en el botón cerrar 
 const closeModalPokemon = document.getElementById('botonCloseModal')
closeModalPokemon.addEventListener('click', closeModal)

 //funcion cerrar modal de gráfica al hacer clic en el boton
 const closeModalPokemonGrafica = document.getElementById('botonCloseModalGrafica')
 closeModalPokemonGrafica.addEventListener('click', closeModalGrafica)
 
 //funcion buscar por input de texto de nombre del pokemon
 const inputSearch = document.getElementById('searchName')
 inputSearch.addEventListener('input', (e)=>{
     const pokemonFilterName=buscarPorInput(e.target.value, pokemones)
     visualizarPokemones(pokemonFilterName);
 })

 //funcion buscar por input select de tipo del pokemon
 const typeSearch= document.getElementById('select-tipos')
 typeSearch.addEventListener("change",(e)=>{
     const pokemonFilterType=buscarPorTipo(e.target.value, pokemones)
     visualizarPokemones(pokemonFilterType);
 })
 
 //funcion buscar por rarity select 
 const raritySearch= document.getElementById('select-rarity')
 raritySearch.addEventListener("change",(e)=>{
     const pokemonFilterRarity=buscarPorRarity(e.target.value, pokemones)
     visualizarPokemones(pokemonFilterRarity);
 })

 //función para ordenar alfabéticamente por nombre las tarjetas de los pokemones
 const sortTarjetas = document.getElementById('botonSort')
 sortTarjetas.addEventListener('click', ordenarPokemonesPorNombre);

 //función para ordenar de Z a A
 const tarjetasZA = document.getElementById('botonZA')
 tarjetasZA.addEventListener('click', ordenarPokemonesZA);

 //funcion para abrir la modal con la gráfica del Top 10 de spawn-chances de pokemones
const openGrafica=document.getElementById('botonGrafica')
openGrafica.addEventListener('click',visualizarModalGrafica)

//  //Función filtro legendarios
// const tarjetasLegendary = document.getElementById("botonLegendary")
// tarjetasLegendary.addEventListener('click', filtrarLegendarios);

//  const pokemonLegendarios = pokemones.filter(e => e.[pokemon-rarity] "legendary");
//  return pokemonLegendarios;

