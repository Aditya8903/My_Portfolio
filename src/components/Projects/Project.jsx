import projects from "../data/project.json";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

function Project() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>PROJECTS</h2>
      <div className={styles.projects}>
        {projects.map((proj, id) => (
          <ProjectCard key={id} proj={proj} />
        ))}
      </div>
    </section>
  );
}

export default Project;
