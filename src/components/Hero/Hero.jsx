import { useTypewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";
import myImage2 from "../../../public/assets/Hero/myImage2.jpeg";
const Hero = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1W-HbyUUjfI5KQU_pC66DagosbOuPCAT3/view?usp=sharing",
      "_blank"
    );
  };
  const [typEffect] = useTypewriter({
    words: ["Software Engineer", "Web Developer"],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 40,
  });
  return (
    <section className={styles.container} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m a {typEffect}</h1>
        <div>
          <button className={styles.contactBtn}>
            <a href="mailto:aditya892003@email.com">Contact Me</a>
          </button>
          <button onClick={openResume} className={styles.contactBtn}>
            Check Resume
          </button>
        </div>
      </div>
      <img src={myImage2} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
