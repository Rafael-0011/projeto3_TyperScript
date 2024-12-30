export class Pais {
    name: {
      common: string;
      official: string;
    };
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: [number, number];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: {
      png: string;
      svg: string;
    };
  
    constructor(
      name: { common: string; official: string },
      independent: boolean,
      unMember: boolean,
      capital: string,
      region: string,
      subregion: string,
      languages: string[],
      latlng: [number, number],
      borders: string[],
      area: number,
      population: number,
      timezones: string[],
      flags: { png: string; svg: string }
    ) {
      this.name = name;
      this.independent = independent;
      this.unMember = unMember;
      this.capital = capital;
      this.region = region;
      this.subregion = subregion;
      this.languages = languages;
      this.latlng = latlng;
      this.borders = borders;
      this.area = area;
      this.population = population;
      this.timezones = timezones;
      this.flags = flags;
    }
  }
  