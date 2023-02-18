// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Types
import { Dispatch, SetStateAction } from "react";

// Props destructuring
interface Props {
  filterText: string;
  setFilterText: Dispatch<SetStateAction<string>>;
}

// Search bar main function
export default function SearchBar({ filterText, setFilterText }: Props) {
  
  // Function to change the state of filterText based on user input
  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  // Returns a functional searchbar to FilterableBar.tsx
  return (
    <div className="relative flex items-center dark:bg-dark-mode-element dark:text-dark-mode-text transition-all duration-300 rounded-lg">
      <FontAwesomeIcon
        icon={faSearch}
        className={"absolute text-xl translate-x-6"}
      ></FontAwesomeIcon>
      <input
        type={"text"}
        value={filterText}
        onInput={onInputHandler}
        className="py-6 px-14 bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text transition-all duration-300 rounded-lg"
        placeholder="Search for a country .."
      ></input>
    </div>
  );
}
