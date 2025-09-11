import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import styles from "./Education.module.css";

function Education() {
  return (
    <div className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="March 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Secondary School (Class 10th)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guru Gobind Singh Public School (GGPS), Bokaro Steel City
          </h4>
          <p>Percentage: 96.2% (Mar 2018 – Mar 2019)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="March 2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Higher Secondary School (Class 12th)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guru Gobind Singh Public School (GGPS), Bokaro Steel City
          </h4>
          <p>Percentage: 95.2% (Mar 2020 – Mar 2021)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="Dec 2021 – Jul 2025"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.Tech in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhagwan Parshuram Institute of Technology, Delhi
          </h4>
          <p>GPA: 9.42 / 10.0 (Dec 2021 – Jul 2025)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Education;
