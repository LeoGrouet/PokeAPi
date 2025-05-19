'use client';

import { useEffect, useState } from "react";

export default function Homepage() {

  interface pokemon {
    name: string
    url: string
  }

  const [data, setData] = useState<Array<pokemon>>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon")
      const json = await res.json()
      setData(json.results)
    }

    fetchData()
  }, [])

  return (
    <div className="text-3xl font-bold underline">
      {data.map((result: { name: string }) => (
        <div key={result.name} className="text-2xl">
          {result.name}
        </div>
      ))}
    </div>
  )
}
