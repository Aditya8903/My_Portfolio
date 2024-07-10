import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },
    { name: "Node.js", icon: faNodeJs, color: "#339933" },
    { name: "Express.js", icon: faNodeJs, color: "#000000" }, // No dedicated Express icon, using Node.js icon
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },
    { name: "SCSS", icon: faCss3Alt, color: "#CC6699" }, // No dedicated SCSS icon, using CSS icon
  ];

  return (
    <div className="container">
      <h2 className="skillsTitile">SKILLS</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <FontAwesomeIcon icon={skill.icon} size="2x" color={skill.color} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
