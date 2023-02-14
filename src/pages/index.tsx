// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Hooks
import { useState, useEffect } from "react";

// Utils
import { fetchCountries } from "@/utils/fetchCountries";

// Home main function
export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countryList, setCountryList] = useState<ICountry[] | null>(null);

  // Function to fetch data from api/countries
  const loadCountryList = async() => {
    let list = await fetchCountries();
    setCountryList(list);
    console.log(countryList)
  }

  useEffect(() => {
    loadCountryList();
  },[])

  return (
    <>
      <main className="min-h-screen min-w-screen darkMode">
        <h1>hello</h1>
      </main>
    </>
  )
}
