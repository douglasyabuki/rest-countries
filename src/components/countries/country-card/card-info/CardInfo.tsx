// Interfaces
import { ICountryName } from "@/interfaces/ICountryName";

// Props destructuring
interface Props {
  countryName: ICountryName,
  countryPopulation: number,
  countryRegion: string,
  countryCapital: string[]
}

export default function CardInfo ({countryName, countryPopulation, countryRegion, countryCapital}: Props) {
  return (
    <div className="p-6 flex-col max-w-[300px]">
      <h2 className="text-xl">{countryName.official}</h2>
      <h3 className="flex bold">Population: <p>{countryPopulation}</p></h3>
      <h3 className="flex bold">Region: <p>{countryRegion}</p></h3>
      <h3 className="flex bold">Capital: <p>{countryCapital}</p></h3>
    </div>
  );
}