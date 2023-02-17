// Const
import { regionList } from "./region-list/region-list";

// Props destructuring
interface Props {
  filterRegion: any;
  setFilterRegion: any;
}

export default function RegionFilter({ filterRegion, setFilterRegion }: Props) {
  return (
    <select className="p-6 bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text transition-all duration-300 rounded-lg">
      <option value="" disabled selected hidden>
        Filter by Region
      </option>
      {regionList.map((item) => (
        <option key={item.id} value={item.value}>
          {item.content}
        </option>
      ))}
    </select>
  );
}
