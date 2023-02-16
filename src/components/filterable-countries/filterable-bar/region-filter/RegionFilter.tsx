// Props destructuring
interface Props {
  filterRegion: any;
  setFilterRegion: any;
}

export default function RegionFilter ({filterRegion, setFilterRegion}: Props) {
  return (
    <div>
      <select className="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
