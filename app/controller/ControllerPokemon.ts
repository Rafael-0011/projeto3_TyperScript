import { Pokemon } from "../model/Pokemons";

export class ControllerPokemon {
  public addPokemon(): Pokemon {
    const newPokemon = new Pokemon(
      132,
      "Ditto",
      101,
      3,
      40,
      false,
      "1996-06-01",
      ["limber", "imposter"],
      [
        {
          base_stat: 48,
          stat: "hp",
        },
        {
          base_stat: 48,
          stat: "attack",
        },
        {
          base_stat: 48,
          stat: "defense",
        },
      ]
    );

    return newPokemon;
  }
}
