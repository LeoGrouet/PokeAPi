import { useEffect, useState } from "react";
import { IPokemonDetails } from "../@types/types";
import { useParams } from "react-router-dom";
import getTypeColor, { isPokemonType } from "../Utils/getTypeColor";
import Stats from "../atoms/Stats";

export default function PokemonDetailsPage() {

  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<IPokemonDetails | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      const json = await res.json()
      setData(json)
    }

    fetchData()
  }, [id])

  if (!data) {
    return <div>Loading...</div>
  }

  if (!id) {
    return <div>ID not found</div>
  }

  return (
    <div className="flex flex-col text-3xl items-center">
      <a href="/" className="">Home</a>
      <div className="flex items-center">
        <a href={`/pokemon/${(Number(id)) - 1}`} className="  text-lg  p-2.5">Pokémon précédent</a>
        <h2 className="  p-2.5">{data.name || "Loading"}</h2>
        <a href={`/pokemon/${(Number(id)) + 1}`} className="  text-lg  p-2.5">Pokémon suivant</a>
      </div>
      <img src={data.image || "Loading"} alt={data.name || "Loading"} className="w-2xs" />
      {data && <Stats stats={data.stats} />}
      <div className="flex gap-4">
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
