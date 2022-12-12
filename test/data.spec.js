//para las pruebas unitarias de las funciones implementadas en el archivo data.js.
import { buscarPorInput, buscarPorTipo } from '../src/data.js';

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


