import styles from "./clients.module.scss";
import Image from "next/image";
import client1 from "../../../images/client1.svg";
import client2 from "../../../images/client2.svg";
import client3 from "../../../images/client3.svg";
import client4 from "../../../images/client4.svg";
import client5 from "../../../images/client5.svg";
import client6 from "../../../images/client6.svg";
interface Props {}
export default function Clients(props: Props) {
  return (
    <div className={styles.partnersContainer}>
      <div className={styles.title}>Our Clients Include</div>
      <div className={styles.clients}>
        <Image src={client1} alt="client" />
        <Image src={client2} alt="client" />
        <Image src={client3} alt="client" />
        <Image src={client4} alt="client" />
        <Image src={client5} alt="client" />
        <Image src={client6} alt="client" />
      </div>
    </div>
  );
}
