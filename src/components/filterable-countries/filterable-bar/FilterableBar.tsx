// Components
import SearchBar from "./search-bar/SearchBar";
import RegionFilter from "./region-filter/RegionFilter";

// Types
import { Dispatch, SetStateAction } from "react";

// Props destructuring
interface Props {
  filterText: string,
  setFilterText: Dispatch<SetStateAction<string>>
  filterRegion: string
  setFilterRegion: (value:string) => void
}

// Filterable bar main function
export default function FilterableBar ({filterText, setFilterText, filterRegion, setFilterRegion}: Props) {

  // Returns both filter components (text search and region search) to FilterableCountries.tsx
  return (
    <div className="block md:flex md:justify-between items-center mb-6 space-y-4">
      <SearchBar filterText={filterText} setFilterText={setFilterText}></SearchBar>
      <RegionFilter filterRegion={filterRegion} setFilterRegion={setFilterRegion}></RegionFilter>
    </div>
  );
}
