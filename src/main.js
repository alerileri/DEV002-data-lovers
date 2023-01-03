/*PARA MOSTRAR LOS DATOS EN LA PANTALLA interacción con el DOM. Operaciones como creación de nodos,
 registro de manejadores de eventos (event listeners o event handlers), ....*/

 //IMPORTACIÓN DE MÓDULOS
 import { buscarPorInput, buscarPorTipo } from './data.js';
 import { visualizarPokemones,closeModal, ordenarPokemonesPorNombre, ordenarPokemonesZA } from './js/componentes.js';
 import data from "../data/pokemon/pokemon.js"
 
 const pokemones = data.pokemon;
 //Llamado a la función visualizarPokemones para mostrar todas las cards por defecto en la página principal
 visualizarPokemones(pokemones);
 
 //Función cerrar modal al hacer clic en el botón cerrar del modal
 const closeModalPokemon = document.getElementById('botonCloseModal')
 closeModalPokemon.addEventListener('click', closeModal)
 
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
 
 //función para ordenar alfabéticamente por nombre las tarjetas de los pokemones
 const sortTarjetas = document.getElementById('botonSort')
 sortTarjetas.addEventListener('click', ordenarPokemonesPorNombre);

 //función para ordenar de Z a A
 const tarjetasZA = document.getElementById('botonZA')
 tarjetasZA.addEventListener('click', ordenarPokemonesZA);

//  //Función filtro legendarios
// const tarjetasLegendary = document.getElementById("botonLegendary")
// tarjetasLegendary.addEventListener('click', filtrarLegendarios);

//  const pokemonLegendarios = pokemones.filter(e => e.pokemon-rarity "legendary");
//  return pokemonLegendarios;

