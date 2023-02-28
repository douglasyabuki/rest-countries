// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Components
import CardFlag from "./card-flag/CardFlag";
import CardInfo from "./card-info/CardInfo";

// Native components
import Link from "next/link";

// Props destructuring
interface Props {
  country: ICountry;
}

// Country card main function
export default function CountryCard({ country }: Props) {
  // Returns a single country card to be rendered by pages/index.tsx
  return (
    <Link
      href={`/details/${country.cca3.toLowerCase()}`}
      className="flex-col w-auto rounded-xl bg-light-mode-element dark:bg-dark-mode-element h-[400px] scale-100 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-transparent-black hover:shadow-xl hover:shadow-transparent-black"
    >
      <CardFlag flag={country.flags}></CardFlag>
      <CardInfo
        countryName={country.name}
        countryPopulation={country.population}
        countryRegion={country.region}
        countryCapital={country.capital}
      ></CardInfo>
    </Link>
  );
}
