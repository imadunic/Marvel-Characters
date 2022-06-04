import Image from "next/image";
import styles from "./CharacterCard.module.css";

const CharacterCard = ({ character }) => {
  let imageURL =
    character.thumbnail.path +
    "/portrait_incredible." +
    character.thumbnail.extension;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={imageURL}
          alt="Character image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <p className={styles.characterName}>{character.name}</p>
      </div>
    </div>
  );
};
export default CharacterCard;
