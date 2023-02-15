// Components
import CountryCard from "@/components/countries/country-card/CountryCard";
import FilterableBar from "@/components/countries/filterable-bar/FilterableBar";
import LoadingAnimation from "@/components/countries/loading-animation/LoadingAnimation";

// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Hooks
import { useEffect, useState } from "react";

// Utils
import { fetchCountries } from "@/utils/fetchCountries";

// Home main function
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countryList, setCountryList] = useState<ICountry[] | null>(null);

  // Function to fetch data from api/countries
  const loadCountryList = async () => {
    let list = await fetchCountries();
    setCountryList(list);
    setIsLoading(false);
    console.log(countryList);
  };

  // Triggers load on app start
  useEffect(() => {
    loadCountryList();
  }, []);

  // This is the Home page. It renders country cards based on data fetched from api/countries.ts
  return (
    <div className="">
      <FilterableBar></FilterableBar>
      <div className={`flex flex-wrap justify-evenly gap-20`}>
        {countryList !== null && isLoading === false ? (
          countryList.map((item, id) => (
            <CountryCard key={id} country={item}></CountryCard>
          ))
        ) : (
          <LoadingAnimation></LoadingAnimation>
        )}
      </div>
    </div>
  );
}
