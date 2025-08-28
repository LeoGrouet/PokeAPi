export interface IPokemon {
  pokedexId: number
  name: string
  image: string
  apiTypes: { name: string }[]
}

export interface IPokemonDetails {
  name: string
  image: string
  stats: {
    HP: number
    attack: number
    defense: number
    special_attack: number
    special_defense: number
    speed: number
  }
  apiTypes: { name: string }[]
}
