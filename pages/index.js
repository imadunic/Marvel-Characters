import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getAllCharacters } from "./api/MarvelAPI";
import CharacterContainer from "../components/characterContainer/CharacterContainer";
import SearchBar from "../components/searchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";

export default function Home({ characters }) {
  return (
    <main>
      <p>Hello! I am Header!</p>
      <SearchBar />
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
