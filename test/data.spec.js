//para las pruebas unitarias de las funciones implementadas en el archivo data.js.
import { it } from 'eslint/lib/rule-tester/rule-tester.js';
import { buscarPorInput, buscarPorTipo, filterPokemonByNumber, ordenarArrayAlfabeticamente } from '../src/data.js';

const pokemonArrayTest = [
  {
    "num": "025",
    "name": "pikachu",
    "pokemon-rarity": "normal",
    "type": ["electric"]
  },
  {
    "num": "027",
    "name": "sandshrew",
    "pokemon-rarity": "normal",
    "type": ["ground"]
  },
  {
    "num": "038",
    "name": "ninetales",
    "pokemon-rarity": "normal",
    "type": ["fire"]
  },
  {
    "num": "144",
    "name": "articuno",
    "pokemon-rarity": "legendary",
    "type": ["ice", "flying"]
  },
  {
    "num": "147",
    "name": "dratini",
    "pokemon-rarity": "normal",
    "type": ["dragon"]
  },
  {
    "num": "149",
    "name": "dragonite",
    "pokemon-rarity": "normal",
    "type": ["dragon", "flying"]
  },
  {
    "num": "172",
    "name": "pichu",
    "pokemon-rarity": "normal",
    "type": ["electric"]
  }
];

let resultadoPikachu = {
  "num": "025",
  "name": "pikachu",
  "pokemon-rarity": "normal",
  "type": ["electric"]
};

let dragones = 
  [{ "num": "147",
    "name": "dratini",
    "pokemon-rarity": "normal",
    "type": ["dragon"]
  },
  {
    "num": "149",
    "name": "dragonite",
    "pokemon-rarity": "normal",
    "type": ["dragon", "flying"]
  }];

  let ninetales038 =
  {"num": "038",
  "name": "ninetales",
  "pokemon-rarity": "normal",
  "type": ["fire"]
  };

  /*let pokemonesOrdenados = [
    {"num": "038",
    "name": "ninetales",
    "pokemon-rarity": "normal",
    "type": ["fire"]
    },
    {
      "num": "025",
      "name": "pikachu",
      "pokemon-rarity": "normal",
      "type": ["electric"]
    }];*/

//   TEST DEL INPUT BUSCAR POR NOMBRE

describe('buscarPorInput', () => {
  it('is a function', () => {
    expect(typeof buscarPorInput).toBe('function');
  });

  it('should return “pikachu” with “pik”', () => {
    expect(buscarPorInput("pik", pokemonArrayTest)).toContainEqual(resultadoPikachu);
  });
});

//    TEST DEL INPUT BUSCAR POR TIPO

describe('buscarPorTipo', () => {
  it('is a function', () => {
    expect(typeof buscarPorTipo).toBe('function');
  });

  it('should return "pokemon-item.type=“dragon”" with “dragon”', () => {
    expect(buscarPorTipo('dragon', pokemonArrayTest)).toEqual(dragones);
  });
});


// TEST DE LA FUNCIÓN FILTRAR POR NÚMERO

describe('filterPokemonByNumber', () => {
  it('is a function', () => {
    expect(typeof filterPokemonByNumber).toBe('function');
  });

  it('con el argumento 038 debe retornar ninetales038', () => {
    expect (filterPokemonByNumber('038', pokemonArrayTest)).toEqual(ninetales038);
  });
});

// TEST SORT

describe('ordenarArrayAlfabeticamente', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAlfabeticamente).toBe('function');
  });
  it('should return dragonite first and then dratini', () => {  
    expect(ordenarArrayAlfabeticamente("resultadoPikachu","ninetales038")).toEqual("ninetales038", "resultadoPikachu");
  });
});


