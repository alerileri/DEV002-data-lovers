/* mis funciones para obtener, procesar y manipular datos*/
/*filterData(data, condition):
esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.
sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos.
 El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder,
 indica si se quiere ordenar de manera ascendente o descendente.
computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la
 data proporcionada.*/

/**
 * TODO: JSDOC
 * @param {*} e 
 * @param {*} data 
 * @returns 
 */
export const buscarPorInput = (e, data) => {
  return data.filter(pokemon => pokemon.name.includes(e));
};

export const buscarPorTipo = (e, data) => {
  return data.filter(pokemon => pokemon.type.includes(e));
};

export const buscarPorRarity = (e, data) => {
  return data.filter(pokemon => pokemon["pokemon-rarity"].includes(e));
};

//  export const buscarLegendarios = (e, data) => {
//   return data.filter(pokemon => pokemon.pokemon-rarity.includes(e));
//  };

 
// export const pokemonLegendarios = data.map(e => {
  //e.pokemon-rarity legendary})
  //return e;


export const filterPokemonByNumber = (numPokemon, data) => {
  return data.filter(pokemon => pokemon.num == numPokemon);
}

export function ordenarArrayAlfabeticamente (x, y) {
  if (x.name<y.name) {return -1;}
  if (x.name>y.name) {return 1;}
  return 0;
}

export function ordenarArrayZA (x, y) {
  if (x.name<y.name) {return 1;}
  if (x.name>y.name) {return -1;}
  return 0;
}

// export const pokemonLegendarios = pokemones.filter(e => e.rarity legendary);


export function ordenarMayorAMenor(x, y) {
  return parseFloat(y['spawn-chance']) - parseFloat(x['spawn-chance']);
}