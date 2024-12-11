import styles from "./sectionContainer.module.scss";
import Section from "../section/section";
import Section1 from "../../../images/section1.png";
import Section2 from "../../../images/section2.png";
import Section3 from "../../../images/section3.png";
interface Props {}
export default function SectionContainer(props: Props) {
  const section = {
    section1: {
      title: "PURPOSE, VALUES & MISSION",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
    section2: {
      title: "LEADERSHIP",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
    section3: {
      title: "HISTORY",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    },
  };
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.section}>
        <Section
          image={Section1}
          title={section.section1.title}
          text={section.section1.text}
          buttonText="button"
        />
      </div>

      <div className={styles.section}>
        <Section
          image={Section2}
          title={section.section2.title}
          text={section.section2.text}
          buttonText="button"
        />
      </div>

      <div className={styles.section}>
        <Section
          image={Section3}
          title={section.section3.title}
          text={section.section3.text}
          buttonText="button"
        />
      </div>
    </div>
  );
}
