import styles from "./Header.module.css";
import Button from "./Button";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.nav}>
        <a href="#">
          <img src="../src/images/logo.svg" alt="logo" />
        </a>
        <Button color="white">Try It Free</Button>
      </div>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <Button color="pink">Get Started For Free</Button>
        </div>
        <div className={styles.headerImage}>
          <img
            src="../src/images/illustration-mockups.svg"
            alt="mockup illustration"
          />
        </div>
      </div>
    </div>
  );
}
