// Interface
import { ICountry } from "@/interfaces/ICountry";

// Components
import Information from "./information/information";
import Flag from "./flag/flag";

// Props destructuring
interface Props {
    country: ICountry
}

// Detailed Info main function
export default function DetailedInfo ({country}: Props) {
  return (
    <div className="block md:flex justify-center items-center">
      <Flag flags={country.flags}></Flag>
      <Information country={country}></Information>
    </div>
  );
}
