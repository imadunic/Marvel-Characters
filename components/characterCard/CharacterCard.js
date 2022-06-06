import Image from "next/image";
import styles from "./CharacterCard.module.css";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState } from "react";

const CharacterCard = ({ character, favoriteFlag }) => {
  const [favorite, setFavorite] = useState(favoriteFlag);

  let imageURL =
    character.thumbnail.path +
    "/portrait_incredible." +
    character.thumbnail.extension;

  const handleBookmarkClick = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) favorites = [];

    // If user adds the character to the favorites
    if (!favorite) favorites = [...favorites, character.id];
    else {
      // If user removes the character from the favorites
      let index = favorites.indexOf(character.id);
      if (index > -1) favorites.splice(index, 1); // 2nd parameter means remove one item only
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavorite(!favorite);
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

      <div className={styles.infoContainer} onClick={handleBookmarkClick}>
        <div className={styles.characterName}>
          {character.name.toUpperCase()}
        </div>
        {!favorite && (
          <FaRegBookmark size={40} className={styles.bookmarkIcon} />
        )}
        {favorite && <FaBookmark size={40} className={styles.bookmarkIcon} />}
      </div>
    </div>
  );
};
export default CharacterCard;
