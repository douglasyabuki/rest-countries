// Props destructuring
interface Props {
  filterText: any;
  setFilterText: any;
}

export default function SearchBar ({filterText, setFilterText}: Props) {
  return (
    <div>
      SearchBar works!
    </div>
  );
}
