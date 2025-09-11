import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        Analytical and detail-oriented Software Developer with strong business
        acumen, data interpretation, and structured problem-solving skills.
        Hands-on experience in message brokering systems, full-stack
        development, and low-latency financial applications. Proficient in Java,
        with working knowledge of C# and JavaScript, and a solid foundation in
        Data Structures, Operating Systems, and DBMS.
      </div>
    </section>
  );
};
export default About;
