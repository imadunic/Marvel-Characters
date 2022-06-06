import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setCharacterQuery }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setCharacterQuery(query);
  }, [query]);

  return (
    <div className={styles.container}>
      <BsSearch size={30} />
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        className={styles.queryInput}
      />
    </div>
  );
};
export default SearchBar;
