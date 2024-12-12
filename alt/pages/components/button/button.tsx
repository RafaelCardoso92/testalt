import styles from "./button.module.scss";

interface Variants {
  variant: string;
  text?: string;
}
export default function Button(props: Variants) {
  return (
    <div className={`${styles.container} ${styles[props.variant]}`}>
      <button>{props.text}</button>
    </div>
  );
}
