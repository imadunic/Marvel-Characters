import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ setCharacterQuery }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setCharacterQuery(query);
  }, [query]);

  return (
    <div className="flex border-2 rounded-2xl md:h-12 h-10 border-black self-end md:w-auto w-2/3 sm:text-base text-sm">
      <BsSearch />
      <input
        type="text"
        placeholder="Search for products"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        className="px-4 py-2 md:w-80 w-full rounded-2xl rounded-l-none border-0"
      />
    </div>
  );
};
export default SearchBar;
