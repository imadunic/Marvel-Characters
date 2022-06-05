import { useEffect, useState } from "react";
import CharacterCard from "../characterCard/CharacterCard";
import styles from "./CharacterContainer.module.css";

const CharacterContainer = ({ characters }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let fetchedFavorites = localStorage.getItem("favorites");
    if (fetchedFavorites) setFavorites(JSON.parse(fetchedFavorites));
  }, [characters]);

  return (
    <div className={styles.characterContainer}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          favoriteFlag={favorites.indexOf(character.id) >= 0 ? true : false}
        />
      ))}
    </div>
  );
};
export default CharacterContainer;
