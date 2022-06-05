import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllCharacters } from "./api/MarvelAPI";
import { queryCharacters } from "../lib/queryCharacters";
import CharacterContainer from "../components/characterContainer/CharacterContainer";
import SearchBar from "../components/searchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import { useState, useEffect } from "react";

export default function Home({ characters }) {
  const [query, setQuery] = useState("");
  const [shownCharacters, setShownChracters] = useState(characters); // Ovo poslije pretvorit u favorites

  useEffect(() => {
    if (query == "") {
      // Prikazi favorite
      setShownChracters(characters);
    } else setShownChracters(queryCharacters(query, characters));
  }, [query]);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    console.log(newQuery);
  };

  const handlePageChange = (newPageNumber) => {
    const offset = (newPageNumber - 1) * 20;
    console.log(newPageNumber);
  };

  return (
    <main>
      <p>Hello! I am Header!</p>
      <SearchBar setCharacterQuery={handleQueryChange} />
      <CharacterContainer characters={shownCharacters} />
      <Pagination
        numOfResults={shownCharacters.length}
        handlePageChange={handlePageChange}
      />
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
