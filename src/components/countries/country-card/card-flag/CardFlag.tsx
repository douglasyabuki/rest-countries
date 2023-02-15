// Native components
import Image from "next/image";

// Interfaces
import { ICountryFlag } from "@/interfaces/ICountryFlag";
interface Props {
    flag: ICountryFlag;
}

export default function CardFlag ({flag}: Props) {
  return (
    <div className="w-auto h-auto flex">
      <Image className="cover w-[300px] h-[200px]" src={flag.png} alt={flag.alt} height={200} width={300}/>
    </div>
  );
}
