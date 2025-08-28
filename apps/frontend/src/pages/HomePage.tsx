import { useEffect, useState } from "react";
import PokemonCard from "../molecules/PokemonCard";
import { IPokemon } from "../@types/types";
import { Link } from "react-router-dom";

export default function Homepage() {

  const [data, setData] = useState<Array<IPokemon>>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/20")
      const json = await res.json()
      setData(json)
    }

    fetchData()
  }, [setData])

  return (
    <div className="flex flex-wrap text-3xl justify-around ">
      {data.map((pokemon, index) => (
        <Link to={`/pokemon/${pokemon.pokedexId}`}>
          <PokemonCard key={index} name={pokemon.name} image={pokemon.image} apiTypes={pokemon.apiTypes} />
        </Link>
      ))
      }
    </div >
  )
}
