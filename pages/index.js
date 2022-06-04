import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllCharacters } from "./api/MarvelAPI";
import CharacterContainer from "../components/characterContainer/CharacterContainer";
import SearchBar from "../components/searchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import { useState, useEffect } from "react";

export default function Home({ characters }) {
  const [query, setQuery] = useState("");

  useEffect(() => {}, [query]);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    console.log(newQuery);
  };

  return (
    <main>
      <p>Hello! I am Header!</p>
      <SearchBar setCharacterQuery={handleQueryChange} />
      <CharacterContainer characters={characters} />
      <Pagination numOfResults={characters.length} />
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
