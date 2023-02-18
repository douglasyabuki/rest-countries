// Native Components
import Link from "next/link";

// Props destructuring
interface Props {}

// Return button main function
export default function ReturnButton(props: Props) {
    
  // Returns the Link button to details page. It redirects the user to Home
  return <Link href={"/"}></Link>;
}
