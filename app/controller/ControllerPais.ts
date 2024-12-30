import { Pais } from "../model/Pais";

export class ControllerPais {
  public static addPais(): Pais {
    const newPais = new Pais(
      {
        common: "Brazil",
        official: "Federative Republic of Brazil",
      },
      true,
      true,
      "Brasília",
      "Americas",
      "South America",
      ["Portuguese"],
      [-10, -55],
      ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
      8515767,
      212559409,
      ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
      {
        png: "https://flagcdn.com/w320/br.png",
        svg: "https://flagcdn.com/br.svg",
      }
    );

    return newPais;
  }
}
