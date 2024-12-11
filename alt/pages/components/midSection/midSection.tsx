import styles from "./midSection.module.scss";
import Image from "next/image";
import Mask from "../../../images/mask.png";
interface Props {}
export default function MidSection(props: Props) {
  const midSection = {
    title: "Turning process frustration into progress since 1996",
    text: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.  Recognizing your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them. ",
  };
  return (
    <div className={styles.midContainer}>
      <div className={styles.contentLeft}>
        <div className={styles.midContentImage}>
          <Image src={Mask} alt="mask" />
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.midContent}>
          <div className={styles.midContentTitle}>{midSection.title}</div>
          <div className={styles.midContentText}>{midSection.text}</div>
        </div>
      </div>
    </div>
  );
}
