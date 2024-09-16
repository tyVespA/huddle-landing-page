import styles from "./Button.module.css";

export default function Button({ children, color }) {
  return (
    <button className={`${styles.button} ${styles[color]}`}>{children}</button>
  );
}
