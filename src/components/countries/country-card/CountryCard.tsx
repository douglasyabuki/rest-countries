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

export default function CountryCard({ country }: Props) {
  return (
    <Link href={`/details/${country.tld}`} className="flex-col w-auto h-auto rounded-xl">
      <CardFlag flag={country.flags}></CardFlag>
      <CardInfo></CardInfo>
    </Link>)
};
