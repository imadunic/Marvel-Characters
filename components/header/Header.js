import styles from "./Header.module.css";
import Image from "next/image";
import headerImage from "../../public/Marvel_background_2.jpg";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Image
        src={headerImage}
        alt="Header image"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>MARVEL CHARACTERS</h1>
        <div className={styles.description}>
          Discover and bookmark your Marvel favorites
        </div>
      </div>
    </div>
  );
};

export default Header;
