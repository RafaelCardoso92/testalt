import styles from "./section.module.scss";
import Button from "../button/button";
import Image from "next/image";
interface Props {
  image: any;
  title: string;
  text: string;
  buttonText: string;
}

export default function Section(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={props.image} alt="section image" />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.button}>
        <Button variant="secondary" text={"call me back"} />
      </div>
    </div>
  );
}
