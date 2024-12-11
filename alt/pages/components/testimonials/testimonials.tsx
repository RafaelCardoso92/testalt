import styles from "./testimonials.module.scss";
import Image from "next/image";

interface Props {}
export default function Testimonials(props: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Don’t just take our word for it...</h3>
      <a className={styles.link}>View all Case Studies</a>
    </div>
  );
}
