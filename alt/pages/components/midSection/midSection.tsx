import styles from "./midSection.module.scss";
import Image from "next/image";
import Button from "../button/button";
import Mask from "../../../images/Mask.png";
interface Props {}
export default function MidSection(props: Props) {
  const midSection = {
    title: "Lorem Ipsum",
    text: "We are one GardX. Whichever business we are representing, our brand mission and values should be at the heart of what we do.",
  };
  return (
    <div className={styles.midContainer}>
      <div className={styles.contentLeft}>
        <div className={styles.midContentImage}>
          <Image src={Mask} alt="GardX logo" />
        </div>
      </div>
      <div className={styles.contentRight}>
        <div className={styles.midContent}>
          <div className={styles.midContentTitle}>{midSection.title}</div>
          <div className={styles.midContentText}>{midSection.text}</div>
          <div className={styles.midButton}>
            <Button variant="primary" text="button" />
          </div>
        </div>
      </div>
    </div>
  );
}
