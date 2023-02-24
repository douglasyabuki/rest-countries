// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Native Components
import Link from "next/link";

// Return button main function
export default function ReturnButton() {
  const currentIcon = faArrowLeft
    
  // Returns the Link button to details page. It redirects the user to Home
  return (
  <Link href={"/"} className="py-6 px-10 flex items-center justify-center w-fit rounded-lg bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text mb-6 shadow-md shadow-transparent-black scale-95 hover:scale-100 transition-all duration-300 text-lg">
    <FontAwesomeIcon icon={currentIcon} className={"mr-4"}></FontAwesomeIcon>
    Back
  </Link>
  );
}
