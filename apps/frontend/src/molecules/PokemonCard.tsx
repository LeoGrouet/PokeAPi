import { Link } from "react-router-dom";
import getTypeColor, { isPokemonType } from "../Utils/getTypeColor";
import Card from "../atoms/Card";

export default function PokemonCard({ name, image, apiTypes, pokedexId }: { name: string, image: string, apiTypes: { name: string }[], pokedexId: number }) {

  return (
    <Link to={`/pokemon/${pokedexId}`}>
      <Card>
        <h2 className="  p-2.5">{name || "Loading"}</h2>
        <img src={image || "Loading"} alt={name || "Loading"} className="w-full" />
        <div className="flex w-full justify-around">
          {apiTypes.map((type, index) => {
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
      </Card>
    </Link>
  );
}
