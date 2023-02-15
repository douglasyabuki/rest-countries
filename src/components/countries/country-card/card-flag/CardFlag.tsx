// Interfaces
import { ICountryFlag } from "@/interfaces/ICountryFlag";
interface Props {
    flag: ICountryFlag;
}

export default function CardFlag ({flag}: Props) {
  return (
    <div className="w-auto h-auto">
      <img src="flag.png" alt="flag.alt" />
    </div>
  );
}
