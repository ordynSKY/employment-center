import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={styles.backgroundImage}>
        <img src="/headerbg.png" alt="header" />
        <div className={styles.mainLogo}>
          <img src="/mainlogo.png" alt="header" />
        </div>
        <div className={styles.accountLogo}>
          <img src="/Vector.png" alt="header" />
        </div>
        <div className={styles.buttons}>
          <button className={styles.searchJob}>Я шукаю роботу</button>
          <button className={styles.searchWorker}>Я шукаю працівника</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
