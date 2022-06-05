import Image from "next/image";
import styles from "./CharacterCard.module.css";
import { FaRegBookmark } from "react-icons/fa";

const CharacterCard = ({ character, favoriteFlag }) => {
  let imageURL =
    character.thumbnail.path +
    "/portrait_incredible." +
    character.thumbnail.extension;

  const handleBookmarkClick = () => {
    favoriteFlag = !favoriteFlag;
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) favorites = [];

    // Add/remove from array of favorites
    if (favoriteFlag) favorites = [...favorites, character.id];
    else {
      let index = favorites.indexOf(character.id);
      if (index > -1) favorites.splice(index, 1); // 2nd parameter means remove one item only
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

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
        <FaRegBookmark
          onClick={handleBookmarkClick}
          className={"bookmarkIcon"}
        />
      </div>
    </div>
  );
};
export default CharacterCard;
