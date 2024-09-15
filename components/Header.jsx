import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <img src="../src/images/logo.svg" alt="logo" />
        <button>Try for free</button>
      </div>
    </div>
  );
}
