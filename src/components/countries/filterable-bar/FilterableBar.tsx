// Components
import SearchBar from "./search-bar/SearchBar";
import RegionFilter from "./region-filter/RegionFilter";

interface Props {
}

export default function FilterableBar (props: Props) {
  return (
    <div className="flex justify-between items-center">
      <SearchBar></SearchBar>
      <RegionFilter></RegionFilter>
    </div>
  );
}
