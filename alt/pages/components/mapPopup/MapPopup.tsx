import styles from "./MapPopup.module.scss";
interface Props {
  title: string;
  text: string;
}

export default function MapPopup(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
