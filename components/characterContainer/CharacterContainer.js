import CharacterCard from "../characterCard/CharacterCard";

const CharacterContainer = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
export default CharacterContainer;
