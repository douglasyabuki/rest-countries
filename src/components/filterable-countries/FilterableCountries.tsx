// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Components
import CountryCards from "./country-cards/CountryCards";
import FilterableBar from "./filterable-bar/FilterableBar";

// Hooks
import { useState } from "react";

// Props destructuring
interface Props {
  countryList: ICountry[];
}

// Countries main function
export default function FilterableCountries({ countryList }: Props) {

  // Setting states to filter the countryList. These states will be controlled by child components
  const [filterText, setFilterText] = useState<string>("");
  const [filterRegion, setFilterRegion] = useState<string>("");

  // Returns the country cards with the search engine and filter by region to pages/index.tsx
  return (
    <div>
      <FilterableBar
        filterText={filterText}
        setFilterText={setFilterText}
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      ></FilterableBar>
      <CountryCards
        countryList={countryList}
        filterText={filterText}
        filterRegion={filterRegion}
      ></CountryCards>
    </div>
  );
}
