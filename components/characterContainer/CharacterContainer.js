import CharacterCard from "../characterCard/CharacterCard";
import styles from "./CharacterContainer.module.css";

const CharacterContainer = ({ characters }) => {
  return (
    <div className={styles.characterContainer}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterContainer;
