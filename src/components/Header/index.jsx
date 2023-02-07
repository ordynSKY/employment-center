import styles from "./Header.module.css";

const Header = ({ setActive }) => {
  return (
    <div>
      <div className={styles.backgroundImage}>
        <img src="/images/headerbg.png" alt="header" />
        <div className={styles.mainLogo}>
          <img src="/images/mainlogo.png" alt="header" />
        </div>
        <div className={styles.accountLogo}>
          <img
            src="/svg/Vector.png"
            alt="header"
            onClick={() => setActive(true)}
          />
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
