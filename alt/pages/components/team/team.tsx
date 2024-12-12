import styles from "./team.module.scss";
import Image from "next/image";
import calendar from "../../../images/team/calendar.svg";
import calendarN from "../../../images/team/calendarN.svg";
import circle from "../../../images/team/circle.svg";
import hand from "../../../images/team/hand.svg";
import handN from "../../../images/team/handN.svg";
interface Props {}
export default function Team(props: Props) {
  const Team = {
    teamData: [
      {
        img1: calendar,
        img2: calendarN,
        title: "Business years",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: circle,
        img2: null,
        title: "On-site support",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: hand,
        img2: handN,
        title: "Expert team members",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: calendar,
        img2: calendarN,
        title: "Live contracts",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: calendar,
        img2: calendarN,
        title: "Guided training",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: calendar,
        img2: calendarN,
        title: "Accreditations & awards",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        A team of accredited experts that support you
      </div>
      <div className={styles.row}>
        {Team.teamData.map((team, index) => (
          <div key={index} className={styles.teamBlock}>
            <div className={styles.imageGroup}>
              <Image src={team.img1} alt="teamIcon" />
              <div className={styles.imagePosition}>
                {team.img2 && <Image src={team.img2} alt="teamIcon" />}
              </div>
            </div>
            <h3 className={styles.teamTitle}>{team.title} </h3>
            <p className={styles.text}>{team.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
