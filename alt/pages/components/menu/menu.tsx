import Button from "../button/button";
import styles from "./menu.module.scss";
import Image from "next/image";
import logo from "../../../images/logo.svg";
interface Props {}
export default function Menu(props: Props) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="map pin" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <a href="#services">0845 034 0895</a>
            <a href="#case-studies">About us</a>
            <a href="#insights">Careers</a>
          </div>
          <div className={styles.menu}>
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>

      <div className={styles.requestSupport}>
        <div className={styles.support}>
          <a href="#services">Request support</a>
        </div>
        <div className={styles.button}>
          <Button variant="primary" text="call me back" />
        </div>
      </div>
    </div>
  );
}
