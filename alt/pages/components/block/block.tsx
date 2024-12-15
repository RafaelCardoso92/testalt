import styles from "./block.module.scss";
import Image from "next/image";
interface Variants {
  logo: any;
  title: string;
  text: string;
}
export default function Block(props: Variants) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src={props.logo}
        alt="logo"
        width={50}
        height={50}
      />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
      <a className={styles.link}>Learn More</a>
    </div>
  );
}
