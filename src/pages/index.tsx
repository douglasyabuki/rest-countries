// Components
import LoadingAnimation from "@/components/common/loading-animation/LoadingAnimation";
import Countries from "@/components/filterable-countries/FilterableCountries";

// Hooks
import { useState, useEffect } from 'react'

// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Utils
import { fetchCountries } from '@/utils/fetchCountries';

// Home main function
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countryList, setCountryList] = useState<ICountry[] | null>(null);

  // Function to fetch data from api/countries
  const loadCountryList = async () => {
    let list = await fetchCountries();
    list.sort((a,b) => a.name.common.localeCompare(b.name.common));
    setCountryList(list);
    setIsLoading(false);
    console.log(countryList);
  };

  // Triggers load on app start
  useEffect(() => {
    loadCountryList();
  },[]);

  // This is the Home page. It passes the fetched data through props to Countries.tsx
  return (
    <div className="">
        {countryList !== null && isLoading === false ? (
          <Countries countryList={countryList}></Countries>
        ) : (
          <LoadingAnimation></LoadingAnimation>
        )}
    </div>
  );
}
