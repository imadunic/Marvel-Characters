import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerText}>Iva Madunić 2022</div>
      <div className={styles.footerText}>
        Data provided by Marvel. © 2014 Marvel
      </div>
    </div>
  );
};

export default Footer;
