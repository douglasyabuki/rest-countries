// Const
import { regionList } from "./region-list/region-list";

// Props destructuring
interface Props {
  filterRegion: string;
  setFilterRegion: (value: string) => void;
}

// Region Filter main function
export default function RegionFilter({ filterRegion, setFilterRegion }: Props) {

  // Changes parent state (FilterableCountries.tsx) on user select
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRegion(event.target.value);
  };

  // Returns the select tag with its options to FilterableBar.tsx
  return (
    <select
      className="p-6 bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text transition-all duration-300 rounded-lg"
      onChange={onChangeHandler}
      value={filterRegion}
    >
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
