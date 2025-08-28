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
  Feu: "bg-fire text-white",
  Plante: "bg-grass text-white",
  Eau: "bg-water text-white",
  Insecte: "bg-bug text-white",
  Normal: "bg-normal text-white",
  Electric: "bg-electric text-black",
  Fée: "bg-fairy text-white",
  Combat: "bg-fighting text-white",
  Spectre: "bg-ghost text-white",
  Glace: "bg-ice text-white",
  Poison: "bg-poison text-white",
  Sol: "bg-ground text-white",
  Vol: "bg-flying text-white",
  Psy: "bg-psychic text-black",
  Roche: "bg-rock text-black",
  Acier: "bg-steel text-black",
  Ténèbres: "bg-dark text-white",
  Dragon: "bg-dragon text-black",
};

export default function getTypeColor(type: PokemonType): string {
  return typeColors[type];
}
