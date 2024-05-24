import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
      </div>
      <div className={styles.middleFooter}>
        <ul className={styles.footerMenu}>
          <li className={styles.footerMenuList}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.footerMenuList}>
            <a href="#about">About</a>
          </li>
          <li className={styles.footerMenuList}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.footerMenuList}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerSocialIcons}>
        <a href="https://www.linkedin.com/in/aditya-gupta-8b1137226/" className={`${styles.icon} ${styles.linkedin}`}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aditya8903" className={`${styles.icon} ${styles.github}`}>
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/i_adigupta/" className={`${styles.icon} ${styles.instagram}`}>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
