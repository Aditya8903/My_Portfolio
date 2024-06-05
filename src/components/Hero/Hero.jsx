import { useTypewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";
import myImage from "../../../public/assets/Hero/myImage.jpg"
const Hero = () => {
    const openResume = () => {
        window.open("../../assets/resume/Resume.pdf", "_blank");
    };
    const [typEffect] = useTypewriter({
        words : ['Software Engineer','Web Developer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40,
        
    })
    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I&apos;m a {typEffect}</h1>
                <div>
                    <button className={styles.contactBtn}>
                        <a href="mailto:aditya892003@email.com">Contact Me</a>
                    </button>
                    <button onClick={openResume} className={styles.contactBtn}>Check Resume</button>
                </div>
            </div>
            <img
                src={myImage}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Hero;
