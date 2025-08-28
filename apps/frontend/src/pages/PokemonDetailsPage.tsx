import { useEffect, useState } from "react";
import { IPokemonDetails } from "../@types/types";
import { useParams } from "react-router-dom";
import getTypeColor, { PokemonType, typeColors } from "../Utils/getTypeColor";

export default function PokemonDetailsPage() {

  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IPokemonDetails>({ name: "", image: "", stats: { HP: 0, attack: 0, defense: 0, special_attack: 0, special_defense: 0, speed: 0 }, apiTypes: [] })

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      const json = await res.json()
      setData(json)
    }

    fetchData()
  }, [setData])

  function isPokemonType(type: string): type is PokemonType {
    return type in typeColors;
  }

  return (
    <div className="flex flex-col text-3xl items-center">
      <h2 className="text-white p-2.5">{data.name || "Loading"}</h2>
      <img src={data.image || "Loading"} alt={data.name || "Loading"} className="w-2xs" />
      <div className="flex flex-col items-center">
        <h3 className="text-white">Stats</h3>
        <div>
          <p className="text-white">HP: {data.stats.HP}</p>
          <p className="text-white">Attack: {data.stats.attack}</p>
          <p className="text-white">Defense: {data.stats.defense}</p>
          <p className="text-white">Special Attack: {data.stats.special_attack}</p>
          <p className="text-white">Special Defense: {data.stats.special_defense}</p>
          <p className="text-white">Speed: {data.stats.speed}</p>
        </div>
      </div>
      <div className="flex w-full justify-around">
        {data.apiTypes.map((type, index) => {
          if (!isPokemonType(type.name)) {
            return null;
          }
          return (
            <p
              key={index}
              className={`${getTypeColor(type.name)} text-base rounded-xl w-fit h-6 px-4`}
            >
              {type.name}
            </p>
          );
        })}
      </div>
    </div >
  )
}
