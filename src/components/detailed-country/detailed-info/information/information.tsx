// Interface
import { ICountry } from "@/interfaces/ICountry";

// Props destructuring
interface Props {
  country: ICountry
}

// Information for DetailedCountry main function
export default function Information ({country}: Props) {
  return (
    <div>
      Information works
    </div>
  );
}
