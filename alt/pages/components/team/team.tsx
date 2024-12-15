import styles from "./team.module.scss";
import Image from "next/image";
import calendar from "../../../images/team/calendar.svg";
import calendarN from "../../../images/team/calendarN.svg";
import circle from "../../../images/team/circle.svg";
import hand from "../../../images/team/hand.svg";
import handN from "../../../images/team/handN.svg";
import handN22 from "../../../images/team/22.svg";
import contact from "../../../images/team/contact.png";
import contactN from "../../../images/team/contactN.png";
import contactN1 from "../../../images/team/1,650.png";
import chat from "../../../images/team/chat.png";
import chat2 from "../../../images/team/chat2.png";
import award from "../../../images/team/award.png";
import awardN from "../../../images/team/awardN.png";
import awardN25 from "../../../images/team/25.png";
interface Props {}
export default function Team(props: Props) {
  const Team = {
    teamData: [
      {
        img1: calendar,
        img2: calendarN,
        img3: null,
        img4: null,
        title: "Business years",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: circle,
        img2: null,
        img3: null,
        img4: null,
        title: "On-site support",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: hand,
        img2: handN,
        img3: handN22,
        img4: null,
        title: "Expert team members",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: contact,
        img2: contactN,
        img3: contactN1,
        img4: null,
        title: "Live contracts",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: chat,
        img2: null,
        img3: null,
        img4: chat2,
        title: "Guided training",
        text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
      },
      {
        img1: award,
        img2: awardN,
        img3: awardN25,
        img4: null,
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
            <div
              className={`${styles.imageGroup} ${
                !team.img2 && !team.img4 && styles.imageGroup2
              }`}
            >
              <Image src={team.img1} alt="teamIcon" />
              <div className={styles.imagePosition}>
                {team.img2 && <Image src={team.img2} alt="teamIcon" />}
              </div>
              <div className={styles.imagePosition2}>
                {team.img3 && <Image src={team.img3} alt="teamIcon" />}
              </div>
              <div className={styles.imagePosition3}>
                {team.img4 && <Image src={team.img4} alt="teamIcon" />}
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
