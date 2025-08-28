import Card from "../atoms/Card";

export default function PokemonCard({ name, image, apiTypes }: { name: string, image: string, apiTypes: { name: string }[] }) {

  function getTypeColor(type: string) {
    switch (type) {
      case "Feu":
        return "bg-fire text-white";
      case "Plante":
        return "bg-grass text-white";
      case "Eau":
        return "bg-water text-white";
      case "Insecte":
        return "bg-bug text-white";
      case "Normal":
        return "bg-normal text-white";
      case "Electric":
        return "bg-electric text-black";
      case "Fée":
        return "bg-fairy text-white";
      case "Combat":
        return "bg-fighting text-white";
      case "Spectre":
        return "bg-ghost text-white";
      case "Glace":
        return "bg-ice text-white";
      case "Poison":
        return "bg-poison text-white";
      case "Sol":
        return "bg-ground text-white";
      case "Vol":
        return "bg-flying text-white";
      case "Psy":
        return "bg-psychic text-black";
      case "Roche":
        return "bg-rock text-black";
      case "Acier":
        return "bg-steel text-black";
      case "Ténèbres":
        return "bg-dark text-white";
      case "Dragon":
        return "bg-dragon text-black";
      default:
        return "";
    }
  }

  return (
    <Card>
      <h2 className="text-white p-2.5">{name || "Loading"}</h2>
      <img src={image || "Loading"} alt={name || "Loading"} className="w-full" />
      <div className="flex w-full justify-around">
        {apiTypes.map((type, index) => (
          <p key={index} className={`${getTypeColor(type.name)} text-base rounded-xl w-fit h-6 pl-4 pr-4`}>
            {type.name}
          </p>
        ))}
      </div>
    </Card>
  );
}
