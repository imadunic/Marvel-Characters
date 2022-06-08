import { getAllCharacters } from "./api/MarvelAPI";
import { queryCharacters } from "../lib/queryCharacters";
import { selectCharactersToShow } from "../lib/selectCharactersToShow";
import { listFavorites } from "../lib/listFavorites";
import { useState, useEffect } from "react";
import { PAGE_SIZE } from "../constants";
import CharacterContainer from "../components/characterContainer/CharacterContainer";
import SearchBar from "../components/searchBar/SearchBar";
import Pagination from "../components/pagination/Pagination";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home({ characters }) {
  const [query, setQuery] = useState("");
  const [queriedCharacters, setQueriedCharacters] = useState([]);
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
    setShownChracters(selectCharactersToShow(offset, queriedCharacters));
    console.log(newPageNumber);
  };

  return (
    <div className="mainContainer">
      <Header />
      <SearchBar setCharacterQuery={handleQueryChange} />
      {queriedCharacters.length ? (
        <div className="resultNumber">
          CHARACTERS({queriedCharacters.length})
        </div>
      ) : (
        ""
      )}
      <CharacterContainer characters={shownCharacters} />
      {queriedCharacters.length ? (
        <Pagination
          numOfResults={queriedCharacters.length}
          handlePageChange={handlePageChange}
        />
      ) : (
        <div className="noResultsInfo">There are no results.</div>
      )}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const characters = await getAllCharacters();

  return {
    props: { characters: characters },
  };
}
