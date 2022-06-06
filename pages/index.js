import { getAllCharacters } from "./api/MarvelAPI";
import { queryCharacters } from "../lib/queryCharacters";
import { selectCharactersToShow } from "../lib/selectCharactersToShow";
import { listFavorites } from "../lib/listFavorites";
import { useState, useEffect } from "react";
import { PAGE_SIZE } from "../constants";
import CharacterContainer from "../components/characterContainer/CharacterContainer";
import SearchBar from "../components/searchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home({ characters }) {
  const [query, setQuery] = useState("");
  const [queriedCharecters, setQueriedCharacters] = useState([]);
  const [shownCharacters, setShownChracters] = useState([]);

  useEffect(() => {
    // Initial render
    let favoriteCharacters = listFavorites(characters);
    setQueriedCharacters(favoriteCharacters);
    setShownChracters(selectCharactersToShow(0, favoriteCharacters));
  }, []);

  useEffect(() => {
    if (query == "") {
      // If query is empty, list favorites
      let favoriteCharacters = listFavorites(characters);
      setQueriedCharacters(favoriteCharacters);
      setShownChracters(selectCharactersToShow(0, favoriteCharacters));
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
      <Header />
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
      <Footer />
    </main>
  );
}

export async function getStaticProps() {
  const characters = await getAllCharacters();

  return {
    props: { characters: characters },
  };
}
