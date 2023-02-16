// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Components
import CountryCard from "./country-card/CountryCard";

// Props destructuring
export interface ICountryCardsProps {
    countryList: ICountry[],
    filterText: any,
    filterRegion: any,
}

// Country Cards main function
export default function CountryCards ({countryList}: ICountryCardsProps) {
  return (
    <div className={`flex flex-wrap justify-evenly gap-20`}>
    {
      countryList.map((item, id) => (
        <CountryCard key={id} country={item}></CountryCard>
      ))
    }
  </div>
  );
}
