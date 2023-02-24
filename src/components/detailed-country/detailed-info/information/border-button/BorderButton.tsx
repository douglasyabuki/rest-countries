// Native Components
import Link from "next/link";

// Props destructuring
export interface Props {
  cca3: string;
  countryName: string;
}

// Border Button main function
export default function BorderButton({ cca3, countryName }: Props) {

  // Defining the path to the dynamic route
  const path = `/details/${cca3}`;

  // Renders a single Link button to a single border of a specific country
  return <Link href={path} className="bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text p-3">{countryName}</Link>;
}
