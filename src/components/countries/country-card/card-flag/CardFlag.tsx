// Native components
import Image from "next/image";

// Interfaces
import { ICountryFlag } from "@/interfaces/ICountryFlag";
interface Props {
    flag: ICountryFlag;
}

// Card flag main function
export default function CardFlag ({flag}: Props) {

  // This component simply returns the rendered png to CountryCard.tsx
  return (
    <div className="w-auto h-auto flex">
      <Image className="cover rounded-t-xl w-[300px] h-[200px]" src={flag.png} alt={flag.alt} height={200} width={300}/>
    </div>
  );
}
