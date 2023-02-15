// Components
import CardInfoField from "./card-info-field/CardInfoField";

// Interfaces
import { ICountryName } from "@/interfaces/ICountryName";

// Props destructuring
interface Props {
  countryName: ICountryName,
  countryPopulation: number,
  countryRegion: string,
  countryCapital: string[]
}

// Card Info main function
export default function CardInfo ({countryName, countryPopulation, countryRegion, countryCapital}: Props) {

  // Creating a list to render the info fields of a single card
  const infoFieldList = [
    {id: 0, title: "Population: ", content: countryPopulation},
    {id: 1, title: "Region: ", content: countryRegion},
    {id: 2, title: "Capital: ", content: countryCapital},
  ]

  // Returns basic info about the country to CountryCard.tsx
  return (
    <div className="p-6 flex-col max-w-[300px] items-center justify-center">
      <h2 className="text-xl mb-2">{countryName.official}</h2>
      {infoFieldList.map((item) => (
        <CardInfoField key={item.id} fieldTitle={item.title} fieldContent={item.content}></CardInfoField>
      ))}
    </div>
  );
}