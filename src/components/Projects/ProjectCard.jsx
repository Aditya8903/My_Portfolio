import PropTypes from 'prop-types';
import styles from "./ProjectCard.module.css";

function ProjectCard({ proj }) {
  return (
    <div className={styles.container}>
      <img src={proj.imgSrc} alt={proj.title} className={styles.image}/>
      <h3 className={styles.title}>{proj.title}</h3>
      <p className={styles.description}>{proj.description}</p>
      <ul className={styles.skills}>
        {proj.skills.map((val, id) => (
          <li key={id} className={styles.skill}>{val}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={proj.source} className={styles.link}>Source Code</a>
        <a href={proj.gotoSite} className={styles.link}>Check it out</a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  proj: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.string.isRequired,
    gotoSite: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
