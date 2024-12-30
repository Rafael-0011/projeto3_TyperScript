import { Stats } from "./Starts";

export class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  legendary: boolean;
  firstAppearance: string;
  abilities: string[];
  stats: Stats[];

  constructor(
    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number,
    legendary: boolean,
    firstAppearance: string,
    abilities: string[],
    stats: Stats[]
  ) {
    this.id = id;
    this.name = name;
    this.base_experience = base_experience;
    this.height = height;
    this.weight = weight;
    this.legendary = legendary;
    this.firstAppearance = firstAppearance;
    this.abilities = abilities;
    this.stats = stats;
  }
}
