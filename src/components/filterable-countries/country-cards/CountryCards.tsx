// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Components
import CountryCard from "./country-card/CountryCard";

// Props destructuring
export interface ICountryCardsProps {
  countryList: ICountry[];
  filterText: any;
  filterRegion: any;
}

// Country Cards main function
export default function CountryCards({countryList, filterText, filterRegion}: ICountryCardsProps) {

  // Creating an empty array which will receive only filtered countries
  const filteredCountryList: ICountry[] = [];

  // Function to populate the empty array based on filterText and filterRegion values
  countryList.forEach((country) => {
    if (
      (country.name.common.toLowerCase().indexOf(filterText.toLowerCase()) &&
        country.name.official.toLowerCase().indexOf(filterText.toLowerCase)) ===
      -1
    ) {
      return;
    }
    if (
      country.region.toLowerCase().indexOf(filterRegion.toLowerCase()) === -1
    ) {
      return;
    }
    filteredCountryList.push(country);
  });

  // Returns the filtered / to be filtered countries to FilterableCountries.tsx
  return (
    <div className={`flex flex-wrap justify-evenly gap-20`}>
      {filteredCountryList.map((item, id) => (
        <CountryCard key={id} country={item}></CountryCard>
      ))}
    </div>
  );
}
