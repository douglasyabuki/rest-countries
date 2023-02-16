// Components
import SearchBar from "./search-bar/SearchBar";
import RegionFilter from "./region-filter/RegionFilter";

interface Props {
  filterText: any
  setFilterText: any
  filterRegion: any
  setFilterRegion: any
}

export default function FilterableBar ({filterText, setFilterText, filterRegion, setFilterRegion}: Props) {
  return (
    <div className="flex justify-between items-center">
      <SearchBar filterText={filterText} setFilterText={setFilterText}></SearchBar>
      <RegionFilter filterRegion={filterRegion} setFilterRegion={setFilterRegion}></RegionFilter>
    </div>
  );
}
