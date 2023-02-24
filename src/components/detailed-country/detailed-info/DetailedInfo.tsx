// Interface
import { ICountry } from "@/interfaces/ICountry";

// Props destructuring
interface Props {
    country: ICountry
}

// Detailed Info main function
export default function DetailedInfo ({country}: Props) {
  return (
    <div className="flex">
      Detailed info works!
    </div>
  );
}
