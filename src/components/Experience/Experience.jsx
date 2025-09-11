import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <div className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <VerticalTimeline>
        {/* Finsol Technologies */}
        <VerticalTimelineElement
          className={styles.timelineContent}
          dateClassName={styles.date}
          date="Sep 2024 – Aug 2025"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            FinSol Technologies, Noida, India
          </h4>
          <p>
            <strong>Technologies:</strong> C#, .NET, Task Parallel Library, TT
            .NET SDK, Events/Delegates, LINQ, TCP, UDP, RESTful APIs, RabbitMQ,
            JSON Processing, API Authentication
          </p>
          <p>
            Specialized in developing high-frequency trading systems and
            exchange gateways for financial markets. Built robust, low-latency
            solutions including OMS gateways with real-time recovery mechanisms,
            multiplexed WebSocket clients handling over 350 trading pairs and
            50K+ daily transactions, and automated trading systems with
            comprehensive logging and retry mechanisms. Engineered
            sub-millisecond gateways for NSE Commodity and CME markets,
            implementing secure session handling, multithreaded processing, and
            ultra-low latency communication protocols achieving sub-50
            microsecond response times.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
