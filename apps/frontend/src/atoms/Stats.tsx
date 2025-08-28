import { IStats } from "../@types/types";

interface StatsProps {
  stats: IStats
}

export default function Stats({ stats }: StatsProps) {
  console.log(stats);
  return (
    <div className="flex flex-col items-center lg:w-1/4 sm:w-1/2">
      <h3 className=" ">Stats</h3>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="flex justify-between w-full">
          <span className=" ">{key.replace('_', ' ')}</span>
          <span className=" ">{value}</span>
        </div>
      ))}
    </div>
  )
}
