// Interfaces
import { ICountry } from "@/interfaces/ICountry";

// Native Components
import { GetStaticPaths, GetStaticProps } from "next";

// Props destructuring
interface DetailsProps {
  countries: ICountry[];
}

// export const getStaticProps: GetStaticProps = async (context) => {
  
// };

// export const getStaticPaths: GetStaticPaths = async () => {
  
// };

export default function Details({ countries }: DetailsProps) {
  return <>hello</>;
}
