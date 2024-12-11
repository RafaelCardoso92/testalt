import styles from "./hero.module.scss";
import img14 from "../../../images/image14.png";
import img15 from "../../../images/image15.png";
import Image from "next/image";
interface Props {}
export default function Hero(props: Props) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.heroText}>
        <h1 className={styles.heroH1}>We make your IT work easy.</h1>
        <h2 className={styles.heroP}>
          Recognising your frustrations with your print environment, IT
          services, document management & communications and finding a solution
          to overcome them. 
        </h2>
      </div>
      <div className={styles.heroImages}>
        <div className={styles.img14}>
          <Image src={img14} alt="img14" />
        </div>
        <div className={styles.img15}>
          <Image src={img15} alt="img15" />
        </div>
      </div>
    </div>
  );
}
