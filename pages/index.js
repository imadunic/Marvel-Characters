import styles from "../styles/Home.module.css";
import { getAllCharacters } from "./api/MarvelAPI";
import { queryCharacters } from "../lib/queryCharacters";
import { selectCharactersToShow } from "../lib/selectCharactersToShow";
import CharacterContainer from "../components/characterContainer/CharacterContainer";
import SearchBar from "../components/searchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import { useState, useEffect } from "react";
import { PAGE_SIZE } from "../constants";

export default function Home({ characters }) {
  const [query, setQuery] = useState("");
  const [queriedCharecters, setQueriedCharacters] = useState(characters); // Ovo poslije pretvorit u favorites
  const [shownCharacters, setShownChracters] = useState([]);

  useEffect(() => {
    // Initial render
    setShownChracters(selectCharactersToShow(0, characters));
  }, []);

  useEffect(() => {
    if (query == "") {
      // Prikazi favorite
      setShownChracters(selectCharactersToShow(0, characters));
    } else {
      let queryResults = queryCharacters(query, characters);
      setQueriedCharacters(queryResults);
      setShownChracters(selectCharactersToShow(0, queryResults));
    }
  }, [query]);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    console.log(newQuery);
  };

  const handlePageChange = (newPageNumber) => {
    let offset = (newPageNumber - 1) * PAGE_SIZE;
    setShownChracters(selectCharactersToShow(offset, queriedCharecters));
    console.log(newPageNumber);
  };

  return (
    <main>
      <p>Hello! I am Header!</p>
      <SearchBar setCharacterQuery={handleQueryChange} />
      <CharacterContainer characters={shownCharacters} />
      {queriedCharecters.length ? (
        <Pagination
          numOfResults={queriedCharecters.length}
          handlePageChange={handlePageChange}
        />
      ) : (
        <p>There are no results for your query.</p>
      )}
      <p>Hello! I am Footer!</p>
    </main>
  );
}

export async function getStaticProps() {
  const characters = await getAllCharacters();

  return {
    props: { characters: characters },
  };
}
