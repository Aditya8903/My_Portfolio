import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import styles from './Education.module.css'; // Import CSS module

function Education() {
  return (
    <div className={styles.container} id='education'>
      <h2 className={styles.title}>Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="March 2019" // Specify month for academic context
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Secondary School </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guru Gobind Singh Public School (GGPS), Bokaro Steel City
          </h4>
          <p>Achieved a remarkable 96.2% score.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="May 2021" // Specify month for academic context
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary School </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Guru Gobind Singh Public School (GGPS), Bokaro Steel City
          </h4>
          <p>Achieved a remarkable 95.2% score.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="August 2021 - Present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Technology (B.Tech)</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhagwan Parshuram Institute of Technology, Delhi
          </h4>
          <p>Currently in my 3rd year, maintaining a high CGPA of 9.49.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Education;
