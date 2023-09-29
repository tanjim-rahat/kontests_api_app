import SearchIcon from "./icons/Search";

function Searchbar() {
  return (
    <form className="flex w-64 rounded-full text-sm bg-dark3">
      <input
        type="search"
        className="w-full px-4 py-3 bg-transparent placeholder-gray-[#777777] rounded-full"
        placeholder="Search"
      />
      <button className="px-4">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Searchbar;
