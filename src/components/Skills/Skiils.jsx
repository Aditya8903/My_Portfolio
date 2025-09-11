import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJsSquare,
  faNodeJs,
  faJava,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faServer,
  faCode,
  faNetworkWired,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./Skills.css";

const Skills = () => {
  const skills = [
    // Programming Languages
    { name: "Java", icon: faJava, color: "#007396" },
    { name: "C#", icon: faCode, color: "#178600" },
    { name: "JavaScript", icon: faJsSquare, color: "#F7DF1E" },

    // Frontend
    { name: "HTML", icon: faHtml5, color: "#E34F26" },
    { name: "CSS", icon: faCss3Alt, color: "#1572B6" },
    { name: "SCSS", icon: faCss3Alt, color: "#CC6699" }, // Using CSS icon
    { name: "React", icon: faReact, color: "#61DAFB" },

    // Backend
    { name: "Node.js", icon: faNodeJs, color: "#339933" },
    { name: "Express.js", icon: faNodeJs, color: "#000000" }, // No dedicated Express icon

    // Database
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },

    // Tools
    { name: "Git", icon: faGitAlt, color: "#F05032" },
    { name: "RabbitMQ", icon: faServer, color: "#FF6600" },

    // Networking / Protocols
    { name: "TCP", icon: faNetworkWired, color: "#005f99" },
    { name: "UDP", icon: faNetworkWired, color: "#0099cc" },
    { name: "WebSocket", icon: faExchangeAlt, color: "#008000" },
  ];

  return (
    <div className="container">
      <h2 className="skillsTitle">SKILLS</h2>
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
