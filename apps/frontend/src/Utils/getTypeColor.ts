// Utils/getTypeColor.ts
export type PokemonType =
  | "Feu"
  | "Plante"
  | "Eau"
  | "Insecte"
  | "Normal"
  | "Electric"
  | "Fée"
  | "Combat"
  | "Spectre"
  | "Glace"
  | "Poison"
  | "Sol"
  | "Vol"
  | "Psy"
  | "Roche"
  | "Acier"
  | "Ténèbres"
  | "Dragon";

export const typeColors: Record<PokemonType, string> = {
  Feu: "bg-fire  ",
  Plante: "bg-grass  ",
  Eau: "bg-water  ",
  Insecte: "bg-bug  ",
  Normal: "bg-normal  ",
  Electric: "bg-electric text-black",
  Fée: "bg-fairy  ",
  Combat: "bg-fighting  ",
  Spectre: "bg-ghost  ",
  Glace: "bg-ice  ",
  Poison: "bg-poison  ",
  Sol: "bg-ground  ",
  Vol: "bg-flying  ",
  Psy: "bg-psychic text-black",
  Roche: "bg-rock text-black",
  Acier: "bg-steel text-black",
  Ténèbres: "bg-dark  ",
  Dragon: "bg-dragon text-black",
};

export function isPokemonType(type: string): type is PokemonType {
  return type in typeColors;
}

export default function getTypeColor(type: PokemonType): string {
  return typeColors[type];
}
