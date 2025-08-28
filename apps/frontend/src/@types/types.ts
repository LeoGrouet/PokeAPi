export interface IPokemon {
  pokedexId: number
  name: string
  image: string
  apiTypes: { name: string }[]
}

export interface IPokemonDetails {
  name: string
  image: string
  stats: IStats
  apiTypes: { name: string }[]
}

export interface IStats {
  HP: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}
