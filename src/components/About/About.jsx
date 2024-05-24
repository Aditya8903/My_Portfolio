import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        
      I am a Computer Science graduate with a strong command of programming languages like Java and JavaScript. My expertise spans across essential concepts such as Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, and Database Management Systems. I am proficient in frameworks like React, Node.js, and Express.js, and well-versed in web technologies such as HTML, CSS, and SCSS. MongoDB is my go-to for database management
      </div>
    </section>
  );
};
export default About