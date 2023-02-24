// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Components
import DetailedInfo from "./detailed-info/DetailedInfo";
import ReturnButton from "./return-button/ReturnButton";

// Props destructuring
interface Props {
    country: ICountry
}

// Detailed Country main function
export default function DetailedCountry ({country}: Props) {
  return (
    <div>
      <ReturnButton></ReturnButton>
      <DetailedInfo country={country}></DetailedInfo>
    </div>
  );
}
