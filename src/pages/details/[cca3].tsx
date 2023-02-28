// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Components
import DetailedCountry from "@/components/detailed-country/DetailedCountry";

// Native hooks
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

// Props destructuring
interface DetailsProps {
  countryList: ICountry[];
}

// Details main function
export default function Details({ countryList }: DetailsProps) {


  // This hook allows the current route and its properties. In this case, it is solely used to get the URL after /details/
  const router = useRouter()
  const {cca3} = router.query

  // Finds the country with cca3 that matches the URL's
  const detailedCountry: ICountry | undefined = countryList.find((country) => country.cca3 === cca3)

  // Returns the matched country (if existent)
  return (
    <div>
      {detailedCountry ? <DetailedCountry country={detailedCountry}></DetailedCountry> : <h1>Country not found</h1>}
    </div>
  );
}

export const getStaticProps: GetStaticProps<DetailsProps> = async(context) => {
  const res = await fetch('/api/countries')
  const countryList: ICountry[] = await res.json()

  return {
    props: {
      countryList: countryList
    }
  }
}