// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Native hooks
import { useRouter } from "next/router";

// Props destructuring
interface DetailsProps {
  countryList: ICountry[];
}

export default function Details({ countryList }: DetailsProps) {
  const router = useRouter()
  const {cca3} = router.query

  const detailedCountry: ICountry | undefined = countryList.find((country) => country.cca3 === cca3)

  return (
    <div>
      {detailedCountry ? <h1>{detailedCountry.name.common}</h1> : <h1>Country not found</h1>}
    </div>
  );
}
