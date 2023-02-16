// Components
import SearchBar from "./search-bar/SearchBar";
import RegionFilter from "./region-filter/RegionFilter";

interface Props {
  filterText: any
  filterRegion: any
}

export default function FilterableBar ({filterText, filterRegion}: Props) {
  return (
    <div className="flex justify-between items-center">
      <SearchBar></SearchBar>
      <RegionFilter></RegionFilter>
    </div>
  );
}
