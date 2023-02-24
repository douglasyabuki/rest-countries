// Interfaces
import { ICountryFlag } from "@/interfaces/ICountryFlag";

// Native Components
import Image from "next/image";

// Props destructuring
interface Props {
  flags: ICountryFlag
}

// DetailedInfo Frame main function
export default function Flag ({flags}: Props) {
  return (
    <div className="w-auto h-auto flex">
      <Image className="cover" src={flags.png} alt={flags.alt} height={400} width={600}/>
    </div>
  );
}
