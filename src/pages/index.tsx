// Components
import LoadingAnimation from "@/components/common/loading-animation/LoadingAnimation";
import Countries from "@/components/filterable-countries/FilterableCountries";

// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Props destructuring
interface HomeProps {
  countryList: ICountry[],
  isLoading: boolean
}

// Home main function
export default function Home({countryList, isLoading}: HomeProps) {


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
