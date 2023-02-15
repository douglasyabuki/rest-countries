// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Props destructuring
interface Props {
  country: ICountry;
}

export default function CountryCard({ country }: Props) {
  return (
    <div className="block w-min">
      <div></div>
      <div></div>
    </div>)
};
